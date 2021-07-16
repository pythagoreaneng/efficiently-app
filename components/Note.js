import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Note = ({noteText}) => {
  return (
    <View style={styles.item}> 
      <Text style={styles.text}>{noteText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 25,
  },
  text: {
    color: "red",
  }
});

export default Note;