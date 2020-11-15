import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import services from '../../services/services';
import { clearTemperatures, fetchTemperature } from '../../redux/actions/tempAction';
import { clearHistory, setHistory } from '../../redux/actions/historyAction';
import { SettingsContext } from '../../context/SettingsContext';

const citiesArray = [
    "mumbai",
    "rome",
    "milan",
    "tbilisi",
    "baku",
    "cologne",
    "vienna",
    "prague",
    "dubai",
    "paris",
    "berlin",
    "barcelona",
    "madrid"
];

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(clearTemperatures());
        getCities();
    }, [dispatch])

    const getCities = () => {
        const shuffled = citiesArray.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, difficulty);
        selected.forEach((city) => {
            services.getData(city)
                .then(value => dispatch(fetchTemperature(value)))
        })
    }
    const [all, setAll] = useState(0);
    const { unit, score, setScore, difficulty, showTemp, setShowTemp } = useContext(SettingsContext);
    const dataOfCities = useSelector(state => state.temperature);
    const history = useSelector(state => state.history);
    const next = () => {
        dispatch(clearTemperatures());
        getCities();
        setShowTemp(false);
        dispatch(setHistory(dataOfCities));
    }
    const getMaxTemp = () => {
        var temps = [];
        dataOfCities.map(value => (
            temps.push(value.temp)
        ));
        var max = Math.max(...temps);
        return max;
    }
    const showTemperatureInProperUnit = (value) => {
        if (unit === 'celsius') return value;
        else return Math.round((value - 32) * 5 / 9);
    }
    const reset = () => {
        Alert.alert(
            'Attention!',
            'Reset Game?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        setScore(0);
                        setAll(0);
                        dispatch(clearHistory());
                    }
                },
                {
                    text: 'No',
                },
            ]
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.score}>
                <Text style={styles.scoreText}>{score}/{all}</Text>
                <TouchableOpacity onPress={reset}>
                    <Text style={styles.reset}>Reset</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.questionContainer}>
                {dataOfCities.length > 0 ? (
                    dataOfCities.map((value, index) => {
                        const city = value.name.charAt(0).toLowerCase() + value.name.slice(1)
                        const photo = `https://d13k13wj6adfdf.cloudfront.net/urban_areas/${city}.jpg`;
                        return (
                            <View key={index} style={styles.imageOfCityContainer}>
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            setShowTemp(true);
                                            !showTemp && setAll(all + 1);
                                            !showTemp && (value.temp === getMaxTemp() && setScore(score + 1));
                                        }
                                    }
                                >
                                    <View style={[showTemp && (value.temp === getMaxTemp() ? styles.greenBorder : styles.redBorder)]}>
                                        <Image
                                            style={styles.cityImage}
                                            source={{
                                                uri: photo
                                            }}
                                        />
                                    </View>
                                    <Text style={styles.textTemp}>
                                        {value.name}
                                    </Text>
                                </TouchableOpacity>
                                <Text style={styles.textTemp}>
                                    {showTemp && showTemperatureInProperUnit(value.temp)}
                                </Text>
                            </View>
                        )
                    })
                ) : (
                        <Image
                            style={styles.loaderImage}
                            source={{
                                uri: 'https://www.hopatcongschools.org/lib/img/spinner.gif'
                            }}
                        />
                    )}
            </View>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={next}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c5faf6',
        alignItems: 'center',
        paddingTop: 40,
    },
    score: {
        width: 80,
        height: 80,
        alignSelf: 'flex-end',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreText: {
        fontSize: 24,
        fontWeight: "bold"
    },
    reset: {
        color: 'red',
    },
    textTemp: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    loaderImage: {
        width: 100,
        height: 100
    },
    questionContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    buttonContainer: {
        backgroundColor: '#3b43d6',
        paddingVertical: 10,
        fontWeight: 'bold',
        height: 50,
        justifyContent: 'center',
        width: 320,
        marginBottom: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    imageOfCityContainer: {
        margin: 10,
    },
    eachImageAndCityContainer: {

    },
    cityImage: {
        width: 100,
        height: 150
    },
    greenBorder: {
        borderWidth: 3,
        borderColor: 'green'
    },
    redBorder: {
        borderWidth: 3,
        borderColor: 'red'
    }
})
export default Home