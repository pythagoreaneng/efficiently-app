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

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.panelWrapper}>
      <View style={styles.homeColWrapper}>
        <View style={styles.homeRowWrapper}>
          <TouchableOpacity
            style={styles.homeButtonWrapper}
            onPress={() => navigation.navigate("Tasks")}
          >
            <Image
            // style={{ height: 100, width: 100 }}
            // source={require("../assets/inbox.png")}
            />
            <Button
              title="Inbox"
              onPress={() => navigation.navigate("Tasks")}
            ></Button>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeButtonWrapper}
            onPress={() => navigation.navigate("Tasks")}
          >
            <Button
              title="Today"
              onPress={() => navigation.navigate("Tasks")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.homeRowWrapper}>
          <TouchableOpacity
            style={styles.homeButtonWrapper}
            onPress={() => navigation.navigate("Tasks")}
          >
            <Button title="Star" onPress={() => navigation.navigate("Tasks")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeButtonWrapper}
            onPress={() => navigation.navigate("Tasks")}
          >
            <Button
              title="Anytime"
              onPress={() => navigation.navigate("Tasks")}
            />
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
    borderRadius: 10,
    width: 150,
    height: 110,
    backgroundColor: "#fff",
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
    bottom: 400,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default HomeScreen;
