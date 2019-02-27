import React, { Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import Book from './src/components/Book';

export default class App extends React.Component {
  state = {
    bookName: "",
    books: []
  };


  bookNameChangedHandler = val => {
    this.setState({
      bookName: val
    });
  };

  bookSubmitHandler = () => {
    if (this.state.bookName.trim() === ""){
      return;
    }

    this.setState(prevState => {
      return {
        books: prevState.books.concat(prevState.bookName)
      };
    });
  };


  render() {

    const bookOutput = this.state.books.map((book, i) => (
        <Book key={i} bookName={book}/>
      ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Book Name"
            value={this.state.bookName}
            onChangeText={this.bookNameChangedHandler}
            style={styles.bookInput}
          />

          <Button
            title="Add"
            style={styles.addBookButton}
            onPress={this.bookSubmitHandler}
          />        
        </View>
        <View style={styles.listContainer}>{bookOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bookInput: {
    width: "70%"
  },
  addBookButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }

});
