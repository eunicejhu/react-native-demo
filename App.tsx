/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Image,
  Switch,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 80,
    transform: [{scale: 0.6}],
  },
  imageContainer: {
    paddingTop: 40,
  },
  logo: {
    height: 200,
    resizeMode: 'stretch',
  },
  theme_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000c0',
    height: 60,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 10,
  },
});

const image = {
  uri: 'https://awss3stack-mybucket15d133bf-qsmiisib9jde.s3.amazonaws.com/zuoqin.pro.png',
};
const logo = {
  uri: 'https://awss3stack-mybucket15d133bf-qsmiisib9jde.s3.amazonaws.com/travel_logo.png',
};

const App = () => {
  const [isDarkMode, setIsEnabled] = useState(useColorScheme() === 'dark');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.theme_container}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#f4f3f4"
              onValueChange={toggleSwitch}
              value={isDarkMode}
            />
            <Text style={styles.text}>{isDarkMode ? 'Dark' : 'Light'}</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image style={styles.logo} source={logo} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
