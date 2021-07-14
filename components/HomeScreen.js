import React from "react";
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
  Image,
} from "react-native";

import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.panelWrapper}>
      <View style={styles.homeColWrapper}>
        <View style={styles.homeRowWrapper}>
          <TouchableOpacity
            style={styles.homeButtonWrapper}
            onPress={() => navigation.navigate("Tasks")}
          >
            <Octicons name="inbox" size={42} color="#46BCFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeButtonWrapper}
            onPress={() => navigation.navigate("Tasks")}
          >
            <MaterialIcons name="notes" size={42} color="#FFE600" />
          </TouchableOpacity>
        </View>
        <View style={styles.homeRowWrapper}>
          <TouchableOpacity
            style={styles.homeButtonWrapper}
            onPress={() => navigation.navigate("Tasks")}
          >
            <Feather name="repeat" size={42} color="#5EB672" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeButtonWrapper}
            onPress={() => navigation.navigate("Tasks")}
          >
            <FontAwesome name="search" size={42} color="#B4B1B1" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
    backgroundColor: "#f1f1f1",
  },
  panelWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  homeColWrapper: {
    flexDirection: "column",
  },
  homeRowWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 30,
  },
  homeButtonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10,
    width: 150,
    height: 110,
    backgroundColor: "#fff",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    paddingTop: 30,
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
    bottom: 400,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default HomeScreen;
