import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TextInput} from 'react-native';
import CheckBox from 'react-native-check-box'
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
  const [nextPage, setNextPage] = React.useState()
  return (
    <View>
      {
        nextPage == undefined ? <Options setNextPage={setNextPage}/> : 
        nextPage == "timer"? <Timer/> : 
        nextPage == "today"? <TodaysTasks/> : 
        <WeeksProgress/>
      }
    </View>
  )
}

function Options(props) {
    return (
      <View>
        <View>
          <Text>GYLT</Text>
          <Text>so... what's the plan for today?</Text>
        </View>
        <View>
          <Pressable onPress={() => props.setNextPage("timer")}><Text>Start a Study Session</Text></Pressable>
          <Pressable onPress={() => props.setNextPage("week")}><Text>Track Habits</Text></Pressable>
          <Pressable onPress={() => props.setNextPage("today")}><Text>Input Today's Habit</Text></Pressable>
        </View>
        <Pressable><Text>Logout</Text></Pressable>
        
      </View>
    )

}

function Timer() {
  return (
    <View></View>
  )
}

function TodaysTasks() {
  const [clicked1, setClicked1] = React.useState(false)
  const [clicked2, setClicked2] = React.useState(false)
  const [clicked3, setClicked3] = React.useState(false)
  const [clicked4, setClicked4] = React.useState(false)
  const [clicked5, setClicked5] = React.useState(false)

  const pushData = async () => {
    arr = []
    if(clicked1 == true) {
      arr.push(1)
    }
    else {
      arr.push(0)
    }
    if(clicked2 == true) {
      arr.push(1)
    }
    else {
      arr.push(0)
    }
    if(clicked3 == true) {
      arr.push(1)
    }
    else {
      arr.push(0)
    }
    if(clicked4 == true) {
      arr.push(1)
    }
    else {
      arr.push(0)
    }
    if(clicked5 == true) {
      arr.push(1)
    }
    else {
      arr.push(0)
    }

    await fetch('')

  }

  return (
    <View>
      <View>
        <Text>GVLT</Text>
      </View>
      <View>
        <Text>Input Today's Habits</Text>
      </View>
      <View>
      <CheckBox
          style={{flex: 1, padding: 10}}
          onClick={()=>{
            setClicked1(!clicked1)
          }}
          isChecked={!clicked1}
          leftText={"Drink 8 cups of Water"}
      />
      <CheckBox
          style={{flex: 1, padding: 10}}
          onClick={()=>{
            setClicked2(!clicked2)
          }}
          isChecked={!clicked2}
          leftText={"Sleep 8 hours"}
      />
      <CheckBox
          style={{flex: 1, padding: 10}}
          onClick={()=>{
            setClicked3(!clicked3)
          }}
          isChecked={!clicked3}
          leftText={"Shower"}
      />
      <CheckBox
          style={{flex: 1, padding: 10}}
          onClick={()=>{
            setClicked4(!clicked4)
          }}
          isChecked={!clicked4}
          leftText={"Exercise for 30 minutes"}
      />
      <CheckBox
          style={{flex: 1, padding: 10}}
          onClick={()=>{
            setClicked5(!clicked5)
          }}
          isChecked={!clicked5}
          leftText={"Eat 3 well-balanced meals"}
      />
      </View>
      <Pressable><Text onPress={() => pushData()}>Submit</Text></Pressable>
    </View>
  )
}

function WeeksProgress() {
  return (
    <View></View>
  )
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




