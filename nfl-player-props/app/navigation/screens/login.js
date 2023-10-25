import { View, Text, TextInput, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { useState, useEffect } from 'react';
import FIREBASE_AUTH from '../../../FirebaseConfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try{
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch(error){
      console.log(error);
      alert("Login failed: " + error.message);
    } finally{
      setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
    }catch (error){
      console.log(error);
      alert("Registration failed: " + error.message);
    } finally {
      setLoading(false);
    }
  }


  return (
    <View style={styles.container}>
      {/* Email input form */}
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        autoCapitalize='none'
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      {/* Password input form */}
      <TextInput 
      style={styles.input} 
      placeholder="Passsword" 
      autoCapitalize='none'
      secureTextEntry={true}
      value={password}
      onChangeText={(text) => setPassword(text)}
      ></TextInput>

      {loading ? <ActivityIndicator size="large" color="#000ff"/> :
        <>
        <Button title='Login' onPress={signIn}/>
        <Button title='Create Account' onPress={ssignUp}/>
        </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex:1,
    justifyContent: 'center',
  },
  input: {
    marginVertical:4,
    height:50,
    borderWidth:1,
    borderRadius:4,
    padding:10,
    backgroundColor:'#fff'
  }
});

export default Login
