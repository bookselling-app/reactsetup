import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const book = (props) => (
    <View style={styles.book}>
        <Text> {props.bookName} </Text>
    </View>
);

const styles = StyleSheet.create({
    book: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        color: "black"
    }
});

export default book;

    
