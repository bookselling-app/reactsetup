import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const book = (props) => (
    <View style={styles.book}>
        <Text> {props.bookName} </Text>
    </View>
);
//ammar was here

const styles = StyleSheet.create({
    book: {
        width: "100%",
        padding: 10,
       // backgroundColor: "#eee",
       backgroundColor: 'transparent',
        color: "green"
    }
});

export default book;

    
