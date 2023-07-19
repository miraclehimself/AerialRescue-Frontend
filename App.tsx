import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StackNav from './src/navigation/stack';
import OnboardingScreen from './src/onboardscreen/onboardscreen';
import SplashScreen from 'react-native-splash-screen';
import Loading from './src/component/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  const [userOnboardingCompleted, setUserOnboardingCompleted] = useState(false);

  useEffect(() => {
    checkOnboardingStatus();
    SplashScreen.hide();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('userOnboardingCompleted');
      if (value !== null && value === 'true') {
        setUserOnboardingCompleted(true);
      }
      setLoading(false);
    } catch (error) {
      console.log('Error retrieving onboarding status:', error);
      setLoading(false);
    }
  };

  const handleOnboardingComplete = async () => {
    try {
      await AsyncStorage.setItem('userOnboardingCompleted', 'true');
      setUserOnboardingCompleted(true);
    } catch (error) {
      console.log('Error setting onboarding status:', error);
    }
  };

  if (loading) {
    return <Loading/>
  }

  return (
    <View style={styles.container}>
      {!userOnboardingCompleted ? (
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      ) : (
        <StackNav />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
