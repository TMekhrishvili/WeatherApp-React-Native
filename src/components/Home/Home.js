import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import services from '../../services/services';
import { clearState, fetchTemperature } from '../../redux/action';
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
        dispatch(clearState());
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
    const { difficulty } = useContext(SettingsContext);
    const dataOfCities = useSelector(state => state.temperature);

    return (
        dataOfCities.length > 0 ? (
            <View style={styles.container}>
                {dataOfCities.map((value) => <Text style={styles.textTemp}>{value.name}, {value.temp}</Text>)}
            </View>
        ) : (
                <View style={styles.container}>
                    <Text style={styles.textTemp}>Wait</Text>
                </View>
            )
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c5faf6',
        alignItems: 'center',
        paddingTop: 40
    },
    textTemp: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
export default Home