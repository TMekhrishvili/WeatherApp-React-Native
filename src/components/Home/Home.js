import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Weather App</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Home