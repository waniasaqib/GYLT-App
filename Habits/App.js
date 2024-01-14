import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react'


export default function App() {
  const [username, setUsername] = useState()
  const [createAccount, setCreateAccount] = useState()
  return (
    <View >
      {username==undefined? <Login setUsername={setUsername}/> 
      : createAccount==true? <Create setCreateAccount={setCreateAccount}/>
      : <HomePage setUsername={setUsername}/>}
    </View>
  );
}

function HomePage() {

}

function Create() {

}

function Login(props) {
  const [username, setUsername] = React.useState()
  const [password, setPassword] = React.useState()
  const authentication = async () => {
    await fetch(`http://172.18.75.179:3000/?username=${username}&password=${password}`)
            .then(res => res.json())
            .then(data => {data=="fail"? setError(true): props.setUsername(username)})
  }
  return (
    <View style={{height: '100%', padding: 20, backgroundColor: 'black'}}>
      <View style={{flex: 2, alignItems:'center', justifyContent: 'flex-end'}}>
        <Text style={{fontSize: 30, fontWeight: '800', color: 'white'}}>G Y L T</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
      <Text style={{color: 'red', alignSelf: 'center'}}>Hello! I guess its Finally Time to {'\n'}  Get Your Life Together, Huh?</Text>
      </View>
      <View style={{flex: 4}}>
        <TextInput onChangeText={(newtext) => setUsername(newtext)} style={{backgroundColor: 'grey', width: '300', padding: 15, borderRadius: 5}} placeholder='username'/>
        <TextInput onChangeText={(newtext) => setPassword(newtext)} style={{backgroundColor: 'grey', width: '300', marginTop: 30, padding: 15, borderRadius: 5}} placeholder='password'/>
        <Pressable onPress={() => authentication()} style={{flex: 0.4, backgroundColor: 'red', marginTop: 30, width: 150, alignSelf: 'center', alignItems: 'center', borderRadius: 10, justifyContent: 'center'}}><Text style={{fontSize: 25, fontWeight: 600}}>LOGIN</Text></Pressable>
        <Pressable  style={{flex: 2, alignItems: 'center', marginTop: 15}}><Text style={{color: 'white', fontSize: 20, fontWeight: 600}}>Sign Up</Text></Pressable>
      </View>
    </View>
  )
}




