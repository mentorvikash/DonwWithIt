import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';

export default function App() {

  const handlePress = () => {
    alert("You just touched me")
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text numberOfLines={1}>Wecome to Native App</Text>
      <Image source={require('./assets/favicon.png')} />
      <Image fadeDuration={1000} blurRadius={1} source={{ width: 200, height: 300, uri: "https://picsum.photos/200/300" }} />
      <TouchableOpacity>
        <Image onPress={() => alert("Hay you touch me")} fadeDuration={1000} blurRadius={1} source={{ width: 200, height: 300, uri: "https://picsum.photos/200/300" }} />
      </TouchableOpacity>
      <TouchableHighlight
        onPress={() => console.log('Pressed!')}
        underlayColor="#DDDDDD"
      >
        <View style={{ padding: 10, backgroundColor: 'blue' }}>
          <Text style={{ color: 'white' }}>Press Me</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity
        onPress={() => console.log('Pressed!')}
        activeOpacity={0.6}
      >
        <View style={{ padding: 10, backgroundColor: 'green' }}>
          <Text style={{ color: 'white' }}>Press Me</Text>
        </View>
      </TouchableOpacity>

      <TouchableNativeFeedback >
        <View style={{ width: 100, height: 30, backgroundColor: "dodgerblue", blurRadius: "10px" }}>
          <Text onPress={() => alert("I got clicked")} style={{ textAlign: 'center' }}>
            Click Me
          </Text>
        </View>
      </TouchableNativeFeedback>
      <Button title='Submit' onPress={() => console.log("request successfully submitted")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
