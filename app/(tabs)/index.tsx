<<<<<<< HEAD
import { StyleSheet, View, Text } from "react-native";
=======
import { StyleSheet, View, Text } from 'react-native';
>>>>>>> c38e3354f33b476916c0ff0002ecd1fd5fe837e7

export default function HomeScreen() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>Keith Haven Deocariza</Text>
      </View>
=======
      <Text style={styles.name}>Aaron Seth Nagtalon</Text>
>>>>>>> c38e3354f33b476916c0ff0002ecd1fd5fe837e7
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "beige",
  },
  header: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "left", 
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
=======
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
>>>>>>> c38e3354f33b476916c0ff0002ecd1fd5fe837e7
  },
});
