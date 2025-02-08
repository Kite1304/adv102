import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function ExercisesScreen() {
  const router = useRouter();

  return (
    <View style={styles.screenContainer}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Exercises</Text>
      </View>

      {/* Exercise List */}
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity 
          style={styles.exerciseBox} 
          onPress={() => router.push('/Login')} 
        >
          <Text style={styles.exerciseTitle}>Exercise 2</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.exerciseBox} 
          onPress={() => router.push('/Login')}  
        >
          <Text style={styles.exerciseTitle}>Exercise 3</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.exerciseBox} 
          onPress={() => router.push('/Login')}  
        >
          <Text style={styles.exerciseTitle}>Exercise 4</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  headerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    textAlign: "left", 
  },
  container: {
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  exerciseBox: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
  },
  exerciseTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  exerciseDescription: {
    fontSize: 16,
    color: "#555",
  },
});
