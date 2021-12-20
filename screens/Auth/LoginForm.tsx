import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Icon, Button } from "react-native-elements";
import { Text, View } from '../../components/Themed';

export default function LoginForm({setLoginForm, setRegisterForm , setUser}) {



    return(
        <View>
            <Text>Login</Text>
            <Input
              placeholder="Correo electronico"
              inputContainerStyle={styles.inputForm}
            />
            <Input
              placeholder="Contraseña"
              inputContainerStyle={styles.inputForm}
            />

            <Button title="ACCEDER" onPress={() =>{ setLoginForm(false) ,setUser(true)}}/>
        </View>
    )

}

const styles = StyleSheet.create({
    inputForm: {
        width: "100%",
        marginTop: 20,
        borderColor: "#DCDCDC",
        borderWidth: 1,
        height: 50,
    
        paddingHorizontal: 10,
      },

    });