
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const services = [
  { id: '1', name: 'Electrician', icon: 'flash' },
  { id: '2', name: 'Plumber', icon: 'pipe' },
  { id: '3', name: 'Cleaning', icon: 'broom' },
  { id: '4', name: 'AC Repair', icon: 'air-conditioner' },
  { id: '5', name: 'Appliance Repair', icon: 'tools' },
  { id: '6', name: 'More', icon: 'dots-horizontal' },
];

const ServiceCard = ({ item, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
    <Icon name={item.icon} size={30} color="#3A86FF" />
    <Text style={styles.cardText}>{item.name}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const handleServicePress = (item) => {
    // Navigate to Service Detail or Booking screen
    alert(`You clicked ${item.name}`);
    // navigation.navigate('ServiceDetail', { service: item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      
      <Text style={styles.heading}>Choose a Service</Text>

      <FlatList
        data={services}
        numColumns={2}
        renderItem={({ item }) => (
          <ServiceCard item={item} onPress={handleServicePress} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  list: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#f0f4ff',
    width: 150,
    height: 120,
    borderRadius: 16,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  cardText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
  },
});
