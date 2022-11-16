import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RoutesCrud from './components/crud_firebase/RoutesCrud/RoutesCrud';

export default function App() {
  return (
    
    <NavigationContainer>
      <RoutesCrud></RoutesCrud>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
