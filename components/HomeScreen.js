import React from 'react';
import {StyleSheet, View, Text, Button, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <ScrollView>
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
      </ScrollView>
    );
  };

  const styles = StyleSheet.create ({
    homeSectionWrapper: {
        flexDirection: "row",
        width: "100%",
        height: "100%",
        flexWrap: "wrap",
        marginTop: 30,
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
  })

export default HomeScreen;