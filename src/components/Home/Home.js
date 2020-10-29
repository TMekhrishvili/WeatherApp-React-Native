import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTemp}>Guess the temperature</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c5faf6',
        alignItems: 'center',
        paddingTop: 40
    },
    textTemp:{
        fontSize: 20,
        fontWeight: 'bold',
    }
})
export default Home