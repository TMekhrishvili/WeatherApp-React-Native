import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const History = () => {
    const history = useSelector(state => state.history);
    return (
        history.lengt > 0 ? (
            <View style={styles.container}>
                <ScrollView>
                    {history.map((value, index) => (
                        <View key={index} style={styles.imageAndText}>
                            {value.map((val, ind) => {
                                const city = value.name.charAt(0).toLowerCase() + value.name.slice(1)
                                const photo = `https://d13k13wj6adfdf.cloudfront.net/urban_areas/${city}.jpg`;
                                return (
                                    <View key={ind} style={styles.vnaxot}>
                                        <View>
                                            <Image
                                                style={styles.cityImage}
                                                source={{
                                                    uri: photo
                                                }}
                                            />
                                        </View>
                                        <Text style={styles.textTemp}>
                                            {val.name}
                                        </Text>
                                    </View>
                                )
                            })}
                        </View>
                    )
                    )}
                </ScrollView>
            </View>
        ) : (
                <View style={styles.container}>
                    <Text>Empty History</Text>
                </View>
            )
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c5faf6',
    },
    imageAndText: {
        flexDirection: 'row'
    },
    logo: {
        width: 100,
        height: 100
    },
    textTemp: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cityImage: {
        width: 100,
        height: 150,
    },
})
export default History