import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

const History = () => {
    const history = useSelector(state => state.history);
    console.log(history)
    return (
        history.lenth > 0 ? (
            <View style={styles.container}>
                {history.map((value, index) => (
                    <View key={index}>
                        <View justify="center">
                            <View>
                                <Text>{value.name}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        ) : (
                <View style={styles.container}>
                    <Text>Empty Hisotry</Text>
                </View>
            )
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100
    },
})
export default History