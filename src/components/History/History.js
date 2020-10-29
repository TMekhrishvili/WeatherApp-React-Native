import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { SettingsContext } from '../../context/SettingsContext';

const History = () => {
    const { history } = useContext(SettingsContext);
    return (
        <View style={styles.container}>
            {history.map((cities, i) => (
                <View key={i}>
                    <View justify="center">
                        {cities.map((city, index) => {
                            const url = `https://d13k13wj6adfdf.cloudfront.net/urban_areas/${city}.jpg`;
                            return (
                                <View key={index}>
                                    {url ? (
                                        <Image
                                            style={styles.logo}
                                            source={{
                                                uri: url
                                            }}
                                        />
                                    ) : (
                                            <Text>Wait</Text>
                                        )}

                                    <Text>{city.charAt(0).toUpperCase() + city.slice(1)}</Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
            ))}
        </View>
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