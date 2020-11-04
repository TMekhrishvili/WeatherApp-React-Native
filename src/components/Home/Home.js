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
            {dataOfCities.length > 0 ? (
                dataOfCities.map((value, index) => <Text key={index} style={styles.textTemp}>{value.name}, {value.temp}</Text>)

            ) : (
                    <Image
                        style={styles.loaderImage}
                        source={{
                            uri: 'https://www.hopatcongschools.org/lib/img/spinner.gif'
                        }}
                    />
                )}
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
        justifyContent: 'center'
    },
    textTemp: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    loaderImage: {
        width: 100,
        height: 100
    },
    buttonContainer: {
        backgroundColor: '#252525',
        paddingVertical: 10,
        fontWeight: 'bold',
        height: 50,
        justifyContent: 'center',
        width: 310,
        marginBottom: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }
})
export default Home