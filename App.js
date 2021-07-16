import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  useColorScheme,
} from "react-native";

// screens
import HomeScreen from "./components/HomeScreen";
import TaskScreen from "./components/TaskScreen";
import NoteScreen from "./components/NoteScreen";

// react navigation
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// react-native-calendars
import { Calendar } from "react-native-calendars";
import XDate from "xdate";

// sliding-up-panel
import SlidingUpPanel from "rn-sliding-up-panel";

// icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

// declare Stack globally
const Stack = createStackNavigator();

export default function App() {
  // sliding-up-panel related
  const animatedValue = new Animated.Value(10);
  const { height } = Dimensions.get("window");

  // react-native-calendars related, some are not in use yet
  const [selected, setSelected] = useState("2021-07-01");
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

  // Dark mode(Not implemented yet)
  const scheme = useColorScheme();

  //
  const DraggableIcon = (onPress) => {
    return (
      <MaterialCommunityIcons name="drag-horizontal" size={24} color="black" />
    );
  };

  return (
    <View style={styles.mainScreen}>
      {/* Top screen

      // Only displayes Calendar (react-native-calendars)
      
      */}
      <View style={styles.mainScreenCalendar}>
        <Calendar
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
            /* Fonts are not implemented yet */

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
            //textDayFontFamily: "Inter_900Black",
            //textMonthFontFamily: "Inter_900Black",
            //textDayHeaderFontFamily: "Inter_900Black",

            textDayFontSize: 15,
            textMonthFontSize: 20,
            textDayHeaderFontSize: 10,
          }}
        />
      </View>

      {/* Bottom screen (aka Panel)
      Displays Home menu (includes Todo, Notes, Routine cards)
      Anything inside <SlidingUpPanel> is 'slidable'
      */}
      <SlidingUpPanel
        animatedValue={animatedValue}
        draggableRange={{ top: height - 100, bottom: height - 400 }}
        snappingPoints={[360]}
        height={height + 180}
        friction={0.5}
        style={styles.mainScreenPanel}
      >
        {/*Main contents here. Renders Home, Tasks, Notes, Routine etc */}
        <NavigationContainer
          // darkmode under construction
          theme={scheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#fafafa",
                // Removes
                elevation: 0, //ios
                shadowOpacity: 0, //android
              },
              // removes header back title (says 'Back' otherwise)
              headerBackTitleVisible: false,
              // shadowColor: "transparent",
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              style={styles.panel}
              options={{
                headerTitle: () => <DraggableIcon style={styles.headerTitle} />,
              }}
            />
            <Stack.Screen
              name="Tasks"
              component={TaskScreen}
              options={{
                headerTitle: () => <DraggableIcon style={styles.headerTitle} />,
              }}
            />
             <Stack.Screen
              name="Notes"
              component={NoteScreen}
              style={styles.panel}
              options={{
                headerTitle: () => <DraggableIcon style={styles.headerTitle} />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SlidingUpPanel>
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flexDirection: "column",
    height: "100%",
  },
  mainScreenCalendar: { paddingTop: "10%", height: "40%" },
  mainScreenPanel: {
    backgroundColor: "#719",
    height: "100%",
  },

  // center draggable icon
  headerTitle: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
