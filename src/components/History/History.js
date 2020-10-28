import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const History = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>History</Text>
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
export default History