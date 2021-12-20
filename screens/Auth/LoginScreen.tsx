import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function LoginScreen({setUser}) {
    const [loginForm, setLoginForm] = React.useState(false)
    const [registerForm, setRegisterForm] = React.useState(false)
  return (
    <View style={styles.container}>
        {loginForm ? (<LoginForm setLoginForm={setLoginForm} setRegisterForm={setRegisterForm} setUser={setUser}/>) : null}
        {registerForm ? (<RegisterForm setLoginForm={setLoginForm} setRegisterForm={setRegisterForm} setUser={setUser}/>): null}

        <Text >{loginForm}</Text>

    {loginForm == false && registerForm == false ? 
    <View>

      <Button title="Ingreso" onPress={() => {setLoginForm(true), setRegisterForm(false)}}/>
      <Button title="Registro"  onPress={() => {setRegisterForm(true),setLoginForm(false)}}/>
    </View>
    : null}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
