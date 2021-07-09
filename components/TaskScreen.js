import React from 'react';
import {StyleSheet, View, Text, Button, ScrollView } from 'react-native';

const TaskScreen = () => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const handleAddTask = () => {
      Keyboard.dismiss;
      setTaskItems([...taskItems, task]);
      setTask(null);
    };
  
    const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy);
    };
  
    let d = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    let dues = [
      "3 days ago",
      "2 days ago",
      "Yesterday",
      "Today",
      "Tomorrow",
      "In 2 days",
      "In 3 days",
    ];
  
    const nth = (d) => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    return (
      <View style={styles.container}>
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>
            {months[d.getMonth()]} {d.getDate()}
            {nth(d.getDate())}
          </Text>
  
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
  
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"#DoEfficiently"}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  };

  export default TaskScreen;