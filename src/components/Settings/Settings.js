import React, { useContext } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { SettingsContext } from '../../context/SettingsContext';
const url = 'https://www.pncguam.com/wp-content/uploads/2017/09/rain-thunderstorms.png';

const options = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" }
];

const units = [
    { label: "", value: "celsius", imageIcon: require('../../../assets/c.png') },
    { label: "", value: "fahrenheit", imageIcon: require('../../../assets/f.png') }
];

const Settings = ({ navigation }) => {
    const { setUnit, setDifficulty } = useContext(SettingsContext);
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: url
                    }}
                />
            </View>
            <View style={styles.difficultyContainer}>
                <SwitchSelector
                    initial={0}
                    textColor={'#3b43d6'}
                    selectedColor={'#fff'}
                    buttonColor={'#3b43d6'}
                    onPress={value => setDifficulty(value)}
                    hasPadding
                    height={50}
                    options={options}
                />
            </View>
            <View style={styles.unitContainer}>
                <SwitchSelector
                    initial={0}
                    textColor={'#3b43d6'}
                    selectedColor={'#fff'}
                    buttonColor={'#3b43d6'}
                    onPress={value => setUnit(value)}
                    hasPadding
                    height={45}
                    options={units}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c5faf6',
        paddingBottom: 200
    },
    imageContainer: {
        flex: 2,
        alignItems: 'center',
        marginTop: 70
    },
    difficultyContainer: {
        flex: 1,
        padding: 10,
        marginTop: 100
    },
    unitContainer: {
        flex: 1,
        padding: 40
    },
    logo: {
        width: 150,
        height: 150
    },

})
export default Settings