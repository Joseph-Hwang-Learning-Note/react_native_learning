import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: 'white'
    },
    title: {
        color: 'white',
        fontSize: 48,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: 'white',
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})

export default styles;