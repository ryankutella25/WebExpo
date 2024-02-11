import picture from '@/Components/image.png';
import React from "react";
import { Image, StyleSheet } from 'react-native';

const DynamicImage = props => {
 
    const {width, height} = Image.resolveAssetSource(picture);

    return (
        <Image style={[styles.image,{aspectRatio:width/height}]} source={props.imageSource}/>
    )
};

export default DynamicImage;

const styles = StyleSheet.create({
    image:{
        marginHorizontal: 20,
        marginVertical: 10,
        width: '95%',
        height: undefined,
        alignSelf: 'center',
        resizeMode: 'contain',
    }
});