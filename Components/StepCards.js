import React from "react";
import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';
import DynamicImage from "./DynamicImage";

const StepCards = props => {

    const colorScheme = useColorScheme();
    const cardColors = colorScheme === 'light' ? styles.cardLight : styles.cardDark;
    const cardTitleColors = colorScheme === 'light' ? styles.cardTitleLight : styles.cardTitleDark;

    return (
        <View style={[styles.card, cardColors]}>
            <Pressable style={{flex:1}}>
                <Text style={[styles.cardTitle, cardTitleColors]}>{props.title}</Text>
                <Text style={[styles.cardTitle, cardTitleColors]}>{props.mainText}</Text>
                <DynamicImage imageSource={require('@/Components/image.png')}/>{/* using dynamic so it updates aspect ratio */}
            </Pressable>
        </View>
    )
};

export default StepCards;

const styles = StyleSheet.create({
    card: {
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
    cardLight: {
        shadowColor: "#000",
    },
    cardDark: {
        backgroundColor: '#181818',
        shadowColor: "#000",
    },
    cardTitle: {
        left: 10,
        marginVertical: 5,
        fontSize: 18,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
    },
    cardTitleLight: {

    },
    cardTitleDark: {
        color: '#d0d0d0'
    },
});