import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Demo from './Demo'
export default function App() {
  return (
    <View style={styles.container}>
        <Demo renderView={CustomView()} />
        <Demo renderView={CustomView2()} />
    </View>
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


function CustomView(){
  return(
    <>  
      <Text>Demo 1</Text>
    </>
  )
}

function CustomView2(){
  return(
    <>  
      <TouchableOpacity onPress={() => alert('demo 2')}>
          <Text>Demo 2</Text>
      </TouchableOpacity>
    </>
  )
}