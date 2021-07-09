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
  ScrollView,
} from "react-native";
import Task from "./components/Task";
import TaskScreen from './components/TaskScreen'
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

const CalendarScreen = () => <CalendarList />;

const AgendaScreen = () => <Agenda />;

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.mainScreen}>
      <View style={styles.mainTopScreen}>
        <Calendar
          markedDates={{
            "2021-07-16": {
              selected: true,
              marked: true,
              selectedColor: "blue",
            },
            "2021-07-17": { marked: true },
            "2021-07-18": { marked: true, dotColor: "red", activeOpacity: 0 },
            "2021-07-19": { disabled: true, disableTouchEvent: true },
          }}
        />
      </View>
      <View style={styles.mainBottomScreen}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tasks" component={TaskScreen} />
            <Stack.Screen name="Calendar" component={CalendarScreen} />
            <Stack.Screen name="Agenda" component={AgendaScreen} />
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

  mainTopScreen: { paddingTop: "10%", height: "40%" },
  mainBottomScreen: {
    paddingTop: "0.3%",
    height: "65%",
    backgroundColor: "#46BCFF",
  },

  
  
});
