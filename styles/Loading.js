import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, // Recommended to do a work with flex
        // default set of flex direction is "column"
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#FDF6AA',
        paddingHorizontal: 30,
        paddingVertical: 100
    },
    text: {
        fontSize: 30,
        color: "#2c2c2c",
    }
});

export default styles;