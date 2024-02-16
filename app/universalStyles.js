import { StyleSheet } from 'react-native';

const UniversalStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    containerLight: {
        backgroundColor: '#fff',
    },
    containerDark: {
        backgroundColor: '#121212',
    },
    header: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'red',
        height: 50,
        alignContent: 'center',
        textAlignVertical: 'center'
    },
    leftHeader: {
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'green'
    },
    middleHeader: {
        flex: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'blue'
    },
    rightHeader: {
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'yellow'
    },





    scroller: {
        marginHorizontal: 1,
    },
    cardHolder: {
        marginTop: 20,
        marginBottom: 20,
    },
    card: {
        height: 150,
        width: '95%',
        alignSelf: 'center',
        // borderColor: 'black',
        borderRadius: 15,
        // borderWidth: '1px',
        marginBottom: 20,

        //below just for shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        //end of shadow

    },
    cardTitle: {
        left: 10,
        top: 10,
        fontSize: 18,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
    }
});

export { UniversalStyles };
