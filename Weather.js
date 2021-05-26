import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import weatherOptions from './src/weatherOptions';
import styles from './styles/Weather';


function Weather({ temp, condition }) {
    return (
        <LinearGradient style={styles.container} colors={weatherOptions[condition].gradient}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition]?.iconName || "weather-sunset"}
                    color="white" 
                />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition]?.title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition]?.subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(Object.keys(weatherOptions)).isRequired
};

export default Weather
