<<<<<<< HEAD
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
=======
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
>>>>>>> c38e3354f33b476916c0ff0002ecd1fd5fe837e7

export default function ExercisesScreen() {
  const router = useRouter();

  return (
<<<<<<< HEAD
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
=======
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Exercises</Text>

      <TouchableOpacity 
        style={styles.exerciseBox} 
        onPress={() => router.push('/Login')}  // ✅ Corrected Navigation
      >
        <Text style={styles.exerciseTitle}>Push-ups</Text>
        <Text style={styles.exerciseDescription}>
          A bodyweight exercise that strengthens the chest, shoulders, and triceps.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.exerciseBox} 
        onPress={() => router.push('/Login')}  // ✅ Corrected Navigation
      >
        <Text style={styles.exerciseTitle}>Squats</Text>
        <Text style={styles.exerciseDescription}>
          A lower-body exercise that targets the thighs, glutes, and core.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.exerciseBox} 
        onPress={() => router.push('/Login')}  // ✅ Corrected Navigation
      >
        <Text style={styles.exerciseTitle}>Plank</Text>
        <Text style={styles.exerciseDescription}>
          A core-strengthening exercise that improves stability and endurance.
        </Text>
      </TouchableOpacity>
    </ScrollView>
>>>>>>> c38e3354f33b476916c0ff0002ecd1fd5fe837e7
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
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
=======
  container: { padding: 20, backgroundColor: '#f4f4f4' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  exerciseBox: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
>>>>>>> c38e3354f33b476916c0ff0002ecd1fd5fe837e7
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
  },
<<<<<<< HEAD
  exerciseTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  exerciseDescription: {
    fontSize: 16,
    color: "#555",
  },
=======
  exerciseTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  exerciseDescription: { fontSize: 16, color: '#555' },
>>>>>>> c38e3354f33b476916c0ff0002ecd1fd5fe837e7
});
