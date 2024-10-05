/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function WeatherScreen(props: any): React.JSX.Element {
  console.log('WeatherScreen-props: ', props);
  const {children = {}} = props;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const fake_data = {
    lat: 51.509865,
    lon: -0.118092,
    tz: '+01:00',
    date: '2024-05-13',
    units: 'metric',
    weather_overview: `The current weather is overcast with a 
 temperature of 16°C and a feels-like temperature of 16°C. 
 The wind speed is 4 meter/sec with gusts up to 6 meter/sec 
 coming from the west-southwest direction. 
 The air pressure is at 1007 hPa with a humidity level of 79%. 
 The dew point is at 12°C and the visibility is 10000 meters. 
 The UV index is at 4, indicating moderate risk from the 
 sun's UV rays. 
 The sky is covered with overcast clouds, and there is 
 no precipitation expected at the moment. 
 Overall, it is a moderately cool and cloudy day 
 with light to moderate winds from the west-southwest.`,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Current location:">
            <Text>{`Lat: ${fake_data.lat} Long: ${fake_data.lon}`}</Text>
          </Section>
          <Section title="Current time:">
            <Text>{`${new Date(fake_data.date)}`}</Text>
          </Section>
          <Section title="Overview">
            <Text>{`${fake_data.weather_overview}`}</Text>
          </Section>
          {children ? (
            <Section title="Props from host">{children}</Section>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default WeatherScreen;
