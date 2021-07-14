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
const Stack = createStackNavigator();
import SlidingUpPanel from "rn-sliding-up-panel";
import XDate from "xdate";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

export default function App() {
  const animatedValue = new Animated.Value(10);
  const { height } = Dimensions.get("window");
  const scheme = useColorScheme();
  const INITIAL_DATE = "2021-07-01";
  const todayDate = XDate.locales[XDate.defaultLocale].today;
  const [selected, setSelected] = useState(todayDate);
  const [showMarkedDatesExamples, setShowMarkedDatesExamples] = useState(false);
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

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
          current={todayDate}
          onDayPress={onDayPress}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: "#46BCFF",
              selectedTextColor: "#FFFFFF",
            },
          }}
          theme={{
            //todayTextColor: "#46BCFF",
            // Inter_100Thin,
            // Inter_200ExtraLight,
            // Inter_300Light,
            // Inter_400Regular,
            // Inter_500Medium,
            // Inter_600SemiBold,
            // Inter_700Bold,
            // Inter_800ExtraBold,
            // Inter_900Black,
            //calendarBackground: "#911",
            textDayFontFamily: "Inter_900Black",
            textMonthFontFamily: "Inter_900Black",
            textDayHeaderFontFamily: "Inter_900Black",
            textDayFontSize: 15,
            textMonthFontSize: 20,
            textDayHeaderFontSize: 10,
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
              headerStyle: {
                backgroundColor: "#fAfAfA",
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              style={styles.panel}
            />
            <Stack.Screen name="Tasks" component={TaskScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SlidingUpPanel>
    </View>
  );
}

const styles = StyleSheet.create({
  line: { height: 1, backgroundColor: "#f0f0f0" },
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
