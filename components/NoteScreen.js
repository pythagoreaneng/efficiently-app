import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard, ScrollView} from "react-native";
import Note from "./Note";

const NoteScreen = () => {
  const [note, setNote] = useState();
  const [noteItems, setNoteItems] = useState([]);

  const addNote = () => {
    Keyboard.dismiss;
    setNoteItems([...noteItems, note]);
    setNote(null);
  };

  const removeNote = (index) => {
    let itemsCopy = [...noteItems];
    itemsCopy.splice(index, 1);
    setNoteItems(itemsCopy);
  };

  return (
    <ScrollView>
      <View>
          {noteItems.map((item, index) => {
            return (
              <Note noteText={item} />
            );
          })}
      </View>
      <TextInput style={styles.textInput} onChangeText={(noteText) => setNote(noteText)}></TextInput>
      <TouchableOpacity ><Text style={styles.plusIcon} onPress={() => addNote()}>+</Text></TouchableOpacity>
      <Text>Note Screen!</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    textInput: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: "#FFF",
      borderRadius: 60,
      borderColor: "#C0C0C0",
      width: 250,
      borderWidth: 1,
    },
    plusIcon: {
      color: "blue",
      fontSize: 50
    }
});
  
export default NoteScreen;