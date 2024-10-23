import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

export default function App() {
  return (
    <View style={styles.container}>
        <ScrollView>
            <Movie title="Doctor Sleep" year="2019" icon_name="skull" poster={require('./img/doctor-sleep.jpg')}/>
            <Movie title="Midway" year="2024" icon_name="person-rifle" poster={require('./img/midway.jpg')}/>
        </ScrollView>
    </View>
  );
}

const Movie = ({title,year,icon_name,poster}) => {
  return (
      <View>
          <Image source={poster} style={{width:400,height:500}}/>
          <Text>
              {title} {year}
          </Text>
          <Icon name={icon_name} size={20}></Icon>
      </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
  },
});
