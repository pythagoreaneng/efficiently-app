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
  Animated,
  Dimensions,
} from "react-native";
import Task from "./components/Task";
import TaskScreen from "./components/TaskScreen";
import HomeScreen from "./components/HomeScreen";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { useColorScheme } from "react-native";

const CalendarScreen = () => <CalendarList />;
const AgendaScreen = () => <Agenda />;
const Stack = createStackNavigator();
import SlidingUpPanel from "rn-sliding-up-panel";

export default function App() {
  const animatedValue = new Animated.Value(10);
  const { height } = Dimensions.get("window");
  const scheme = useColorScheme();
  const INITIAL_DATE = "2021-07-01";
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [showMarkedDatesExamples, setShowMarkedDatesExamples] = useState(false);

  const toggleSwitch = () => {
    setShowMarkedDatesExamples(!showMarkedDatesExamples);
  };

  const onDayPress = (day) => {
    setSelected(day.dateString);
  };

  const getDisabledDates = (startDate, endDate, daysToDisable) => {
    const disabledDates = {};
    const start = XDate(startDate);
    const end = XDate(endDate);

    for (let m = XDate(start); m.diffDays(end) <= 0; m.addDays(1)) {
      if (_.includes(daysToDisable, m.weekday())) {
        disabledDates[m.toString("YYYY-MM-DD")] = { disabled: true };
      }
    }
    return disabledDates;
  };
  return (
    <View style={styles.mainScreen}>
      <View style={styles.mainTopScreen}>
        <Calendar
          // testID={testIDs.calendars.FIRST}
          current={INITIAL_DATE}
          style={styles.calendar}
          onDayPress={onDayPress}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: "#46BCFF",
              selectedTextColor: "#FFFFFF",
            },
          }}
        />
      </View>
      <SlidingUpPanel
        animatedValue={animatedValue}
        draggableRange={{ top: height - 100, bottom: height - 400 }}
        snappingPoints={[360]}
        height={height + 180}
        friction={0.5}
        style={styles.panel}
      >
        <NavigationContainer
          theme={scheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: "none",
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              style={styles.panel}
            />
            <Stack.Screen name="Tasks" component={TaskScreen} />
            <Stack.Screen name="Calendar" component={CalendarScreen} />
            <Stack.Screen name="Agenda" component={AgendaScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SlidingUpPanel>
    </View>
  );
}

const styles = StyleSheet.create({
  test: { height: 1, backgroundColor: "#f0f0f0" },
  mainScreen: {
    flexDirection: "column",
    height: "100%",
  },

  mainTopScreen: { paddingTop: "10%", height: "40%" },
  mainBottomScreen: {
    paddingTop: "0.3%",
    height: "65%",
    backgroundColor: "#975",
  },
  panel: {
    backgroundColor: "#719",
    height: "100%",
  },
});
