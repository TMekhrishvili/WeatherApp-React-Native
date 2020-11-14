import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const History = () => {
    const history = useSelector(state => state.history);
    return (
        history.length > 0 ? (
            <View style={styles.container}>
                {history.map((value, index) => {
                    const city = value.name.charAt(0).toLowerCase() + value.name.slice(1)
                    const photo = `https://d13k13wj6adfdf.cloudfront.net/urban_areas/${city}.jpg`;
                    return (
                        <View key={index} style={styles.imageAndText}>
                            <View style={styles.vnaxot}>
                                <View>
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
                            </View>
                        </View>
                    )
                }
                )}
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
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    imageAndText: {
        flexDirection: 'row',
        margin: 10
    },
    logo: {
        width: 100,
        height: 100
    },
    textTemp: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    cityImage: {
        width: 100,
        height: 150,
    },
})
export default History