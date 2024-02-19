import React from "react";
import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';

const TabPressable = props => {

    const colorScheme = useColorScheme();
    const tabColors = colorScheme === 'light' ? styles.cardLight : styles.cardDark;

    return (
        <View>
            <Pressable onPress={props.onShow} style={({ hovered, focused, pressed }) => [props.active ? styles.buttonActive : styles.button, hovered && styles.buttonHovered, focused && styles.buttonFocused, pressed && styles.buttonFocused]}>
                <Text style={{ textAlign: "center" }}>{props.title}</Text>
            </Pressable>
        </View>
    )
};

export default TabPressable;

const styles = StyleSheet.create({
    // first button class always effects despite state
    // rest are self explanatory
    button: {
        flex: 1,
    },
    buttonActive: {
        borderWidth: 2,
        borderColor: 'black'
    },
    buttonHovered: {
        backgroundColor: 'green',
    },
    buttonFocused: {
        opacity: "50%",
    },

});