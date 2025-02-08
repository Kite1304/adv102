import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ExercisesScreen() {
  const router = useRouter();

  return (
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
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f4f4f4' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  exerciseBox: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
  },
  exerciseTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  exerciseDescription: { fontSize: 16, color: '#555' },
});
