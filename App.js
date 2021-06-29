import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Button,
} from "react-native";
import Task from "./components/Task";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

function HomeScreen({ navigation }) {
  return (
    <View>
      <View>
        <Calendar />
      </View>
      <View>
        <View style={styles.homeSectionWrapper}>
          <View style={styles.homeButtonWrapper}>
            <Button
              title="Inbox"
              onPress={() => navigation.navigate("Tasks")}
            />
          </View>
          <View style={styles.homeButtonWrapper}>
            <Button
              title="Today"
              onPress={() => navigation.navigate("Tasks")}
            />
          </View>
          <View style={styles.homeButtonWrapper}>
            <Button title="Star" onPress={() => navigation.navigate("Tasks")} />
          </View>
          <View style={styles.homeButtonWrapper}>
            <Button
              title="Anytime"
              onPress={() => navigation.navigate("Tasks")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

function TaskScreen() {
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
}

function CalendarScreen() {
  return (
    <View>
      <Text>Calendar</Text>
      <Calendar />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tasks" component={TaskScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  homeSectionWrapper: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
    marginTop: 30,
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  homeButtonWrapper: {
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
    width: 150,
    height: 110,
    backgroundColor: "#F6F6F6",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    paddingTop: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 6,
  },

  taskWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#46BCFF",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    width: 250,
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#232323",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 40,
    color: "#fff",
  },
});
