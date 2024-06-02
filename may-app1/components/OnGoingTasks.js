import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const DATA = [
  { id: "1", title: "Mobile App Development" },
  { id: "2", title: "Web Development" },
  { id: "3", title: "Push Ups" },
  { id: "4", title: "Data Analysis" },
  { id: "5", title: "Content Writing" },
  { id: "6", title: "Graphic Design" },
  { id: "7", title: "Digital Marketing" },
  { id: "8", title: "Studying for Exams" },
  { id: "9", title: "Reading a Book" },
  { id: "10", title: "Yoga" },
  { id: "11", title: "Writing a Novel" },
  { id: "12", title: "Budget Planning" },
  { id: "13", title: "Online Course Completion" },
  { id: "14", title: "Learning a New Language" },
  { id: "15", title: "Gardening" },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function OnGoingTasks() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Ongoing Tasks</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 35,
    // backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  item: {
    marginTop: 10,
    height: 128,
    backgroundColor: "rgba(251, 249, 247, 1)",
    borderWidth: 1,
    borderColor: "rgba(232, 209, 186, 1)",
    justifyContent: "center",
    borderRadius: 15,
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
});

// export default OnGoingTasks;
