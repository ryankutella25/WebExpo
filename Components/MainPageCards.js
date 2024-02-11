import { Link } from 'expo-router';
import React from "react";
import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';

const MainPageCard = props => {

    const colorScheme = useColorScheme();
    const cardColors = colorScheme === 'light' ? styles.cardLight : styles.cardDark;
    const cardTitleColors = colorScheme === 'light' ? styles.cardTitleLight : styles.cardTitleDark;

    return (
        <View style={[styles.card, cardColors]}>
            <Link href={props.link} asChild style={{ flex: 1 }}>
                <Pressable>
                    <Text style={[styles.cardTitle,cardTitleColors]}>{props.title}</Text>
                </Pressable>
            </Link>
        </View>
    )
};

export default MainPageCard;

const styles = StyleSheet.create({
    card: {
        height: 150,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: 20,

        //below just for shadow
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        //end of shadow

    },
    cardLight:{
        shadowColor: "#000",
    },
    cardDark:{
        backgroundColor: '#181818',
        shadowColor: "#000",
    },
    cardTitle: {
        left: 10,
        top: 10,
        fontSize: 18,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
    },
    cardTitleLight:{

    },
    cardTitleDark:{
        color: '#d0d0d0'
    }
});