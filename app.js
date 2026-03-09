import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
  Image,
  StatusBar
} from 'react-native';

const App = () => {
  const openWebsite = () => {
    Linking.openURL('https://virginianursery.com.au');
  };

  const makePhoneCall = () => {
    Linking.openURL('tel:+61883805000');
  };

  const openMaps = () => {
    const address = '99 Gawler Rd, Virginia, SA 5120';
    Linking.openURL(`geo:0,0?q=${encodeURIComponent(address)}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2E7D32" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Virginia Home & Garden</Text>
          <Text style={styles.subtitle}>Adelaide's Largest Garden Centre</Text>
        </View>

        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>🌿 Logo Here</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoText}>📍 99 Gawler Rd, Virginia, SA 5120</Text>
          <Text style={styles.infoText}>🕒 Open Daily: 9am - 5pm</Text>
          <Text style={styles.infoText}>🌱 Since 2002</Text>
        </View>

        <View style={styles.featuresCard}>
          <Text style={styles.featuresTitle}>What We Offer:</Text>
          <Text style={styles.featureItem}>• Indoor & Outdoor Plants</Text>
          <Text style={styles.featureItem}>• Shrubs, Hedging & Natives</Text>
          <Text style={styles.featureItem}>• Roses & Fruit Trees</Text>
          <Text style={styles.featureItem}>• Doncho's Café Lounge</Text>
          <Text style={styles.featureItem}>• Stella's Home & Gifts</Text>
          <Text style={styles.featureItem}>• Garden Accessories</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.websiteButton]} onPress={openWebsite}>
            <Text style={styles.buttonText}>🌐 Visit Website</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.callButton]} onPress={makePhoneCall}>
            <Text style={styles.buttonText}>📞 Call Us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.mapButton]} onPress={openMaps}>
            <Text style={styles.buttonText}>🗺️ Get Directions</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Doncho's Café on site • Stella's Kitchenware</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#2E7D32',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#E8F5E9',
    marginTop: 5,
  },
  imagePlaceholder: {
    height: 150,
    backgroundColor: '#81C784',
    margin: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 24,
    color: '#1B5E20',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    marginTop: 0,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 3,
  },
  featuresCard: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    marginTop: 0,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  featureItem: {
    fontSize: 15,
    color: '#555',
    marginVertical: 2,
  },
  buttonContainer: {
    margin: 15,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
  },
  websiteButton: {
    backgroundColor: '#2E7D32',
  },
  callButton: {
    backgroundColor: '#1976D2',
  },
  mapButton: {
    backgroundColor: '#FF6F00',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
});

export default App;