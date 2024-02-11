import { ScrollView, StyleSheet, useColorScheme, View } from 'react-native';
import MainPageCard from '../Components/MainPageCards';


//Main Index/Landing Page. Opens on load
export default function Page() {

    const colorScheme = useColorScheme();
    const containerColors = colorScheme === 'light' ? styles.containerLight : styles.containerDark;

    return (
        <View style={[styles.container, containerColors]}>
            <ScrollView style={styles.scroller}>
                <View style={styles.cardHolder}>
                    <MainPageCard link="/house" title="House" />
                    <MainPageCard link="/automotive" title="Automotive" />
                    <MainPageCard link="/health" title="Health" />
                    <MainPageCard link="/house" title="Temp 1" />
                    <MainPageCard link="/house" title="Temp 2" />
                    <MainPageCard link="/house" title="Temp 3" />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    containerLight:{
        backgroundColor: '#fff',
    },
    containerDark: {
        backgroundColor: '#121212',
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
    cardTitle:{
        left: 10,
        top: 10,
        fontSize: 18,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
    }
});