import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import services from '../../services/services';
import { clearTemperatures, fetchTemperature } from '../../redux/actions/tempAction';
import { setHistory } from '../../redux/actions/historyAction';
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
        dispatch(setHistory(dataOfCities))
    }
    const next = () => {
        dispatch(clearTemperatures());
        getCities();
    }
    const { difficulty } = useContext(SettingsContext);
    const dataOfCities = useSelector(state => state.temperature);

    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                {dataOfCities.length > 0 ? (
                    dataOfCities.map((value, index) => {
                        const city = value.name.charAt(0).toLowerCase() + value.name.slice(1)
                        const photo = `https://d13k13wj6adfdf.cloudfront.net/urban_areas/${city}.jpg`;
                        return (
                            <View style={styles.imageOfCityContainer}>
                                <Image
                                    style={styles.cityImage}
                                    source={{
                                        uri: photo
                                    }}
                                />
                                <Text key={index} style={styles.textTemp}>
                                    {value.name}
                                </Text>
                            </View>
                        )
                    }

                    )
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
    textTemp: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    loaderImage: {
        width: 100,
        height: 100
    },
    questionContainer: {
        flexGrow: 1,
        justifyContent: 'center',
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
    },
    cityImage: {
        width: 100,
        height: 150
    }
})
export default Home