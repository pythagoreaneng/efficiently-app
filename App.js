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

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.homeSectionWrapper}>
        <View style={styles.homeButtonWrapper}>
          <Button title="Inbox" onPress={() => navigation.navigate("Tasks")} />
        </View>
        <View style={styles.homeButtonWrapper}>
          <Button title="Today" onPress={() => navigation.navigate("Tasks")} />
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
        <View style={styles.homeButtonWrapper}>
          <Button
            title="Calendar"
            onPress={() => navigation.navigate("Calendar")}
          />
        </View>
        <View style={styles.homeButtonWrapper}>
          <Button
            title="Agenda"
            onPress={() => navigation.navigate("Agenda")}
          />
        </View>
      </View>
    </View>
  );
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

  const GetToday = () => {
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

    return (
      <View>
        <Text>
          {months[d.getMonth()]} {d.getDate()}
          {nth(d.getDate())}
        </Text>
      </View>
    );
  };

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

const CalendarScreen = () => <CalendarList />;

const AgendaScreen = () => <Agenda />;

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.mainScreen}>
      <View style={styles.mainTopScreen}>
        <Calendar />
      </View>
      <View style={styles.mainBottomScreen}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName=" ">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              // options={{ headerTitle: <GetToday /> }}
            />
            <Stack.Screen
              name="Tasks"
              component={TaskScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="Calendar"
              component={CalendarScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="Agenda"
              component={AgendaScreen}
              options={{ title: "" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  mainScreen: {
    flexDirection: "column",
    height: "100%",
  },

  mainTopScreen: { paddingTop: "10%", height: "45%" },
  mainBottomScreen: {
    paddingTop: "0.3%",
    height: "65%",
    backgroundColor: "#E2E2E2",
  },

  homeSectionWrapper: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
    backgroundColor: "#fff",
  },
  homeButtonWrapper: {
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 45,
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
    shadowOpacity: 0.15,
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
