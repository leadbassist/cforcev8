import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        padding: 20,
        alignItems: 'center',
        flex: 1
    },
    image: {
        height: '40%',
        aspectRatio: 1,
    },
    header1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 50,
        marginBottom: 20,
    },
    header2: {
        fontSize: 20,
        color: 'hsl(0, 0%, 65%)',
        textAlign: 'center',
    },
    googleButton: {
        marginTop: 'auto', // puts the button at far bottom
        marginBottom: 100, // will push the button up 100px from far bottom
        width: '75%' // added to accomodate the 'width' in buttonImage CSS
    },
    buttonImage: {
        width: '100%', // not using height here. width in % is used to accomodate for phone sizes
        resizeMode: 'contain',
        borderRadius: 5
    }
});

export default styles;