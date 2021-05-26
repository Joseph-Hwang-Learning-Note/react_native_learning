import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/Loading';


export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar style="dark-content" />
            <Text style={styles.text}>Getting the fucking weather</Text>
        </View>
    );
}

