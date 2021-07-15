import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// icons
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.panelWrapper}>
      {/* 2 cols * 2 rows = 4 buttons */}
      <View style={styles.colWrapper}>
        {/* row #1 */}
        <View style={styles.rowWrapper}>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => navigation.navigate("Tasks")}
          >
            <Octicons name="inbox" size={42} color="#46BCFF" />
            <Text style={styles.buttonCount}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => navigation.navigate("Tasks")}
          >
            <Octicons name="note" size={42} color="#FFE600" />
            <Text style={styles.buttonCount}>0</Text>
          </TouchableOpacity>
        </View>
        {/* row #2 */}
        <View style={styles.rowWrapper}>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => navigation.navigate("Tasks")}
          >
            <Feather name="repeat" size={42} color="#5EB672" />
            <Text style={styles.buttonCount}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => navigation.navigate("Tasks")}
          >
            <FontAwesome name="search" size={42} color="#B4B1B1" />
            <Text style={styles.buttonCount}>0</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonCount: {
    paddingTop: 5,
    color: "#46BCFF",
  },
  //this is the main panel
  panelWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fafafa",
  },
  colWrapper: {
    flexDirection: "column",
  },
  rowWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 30,
  },
  buttonWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 150,
    height: 110,
    backgroundColor: "#fff",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 6,
  },
});

export default HomeScreen;
