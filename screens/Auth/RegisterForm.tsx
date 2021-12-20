import React from 'react';

import { Text, View } from '../../components/Themed';
import { Input, Icon, Button, CheckBox } from "react-native-elements";
import {
    StyleSheet,
    Image,
    SafeAreaView,
    StatusBar,
    ScrollView,
  } from "react-native";

export default function RegisterForm({setLoginForm, setRegisterForm}) {

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <Text style={styles.title}>Registro</Text>
            
            
            <Input
              placeholder="Nombre"
              containerStyle={styles.inputFormContainer}
                inputContainerStyle={styles.inputForm}
            />
             <Input
              placeholder="Apellido 1"
              containerStyle={styles.inputFormContainer}
                inputContainerStyle={styles.inputForm}
            />
             <Input
              placeholder="Apellido 2"
              containerStyle={styles.inputFormContainer}
                inputContainerStyle={styles.inputForm}
            />
             <Input
              placeholder="Correo electronico"
              containerStyle={styles.inputFormContainer}
                inputContainerStyle={styles.inputForm}
            />
             <Input
              placeholder="Teléfono"
              containerStyle={styles.inputFormContainer}
                inputContainerStyle={styles.inputForm}
            />
             <Input
              placeholder="Usuario"
              containerStyle={styles.inputFormContainer}
                inputContainerStyle={styles.inputForm}
            />
             <Input
              placeholder="Contraseña"
              containerStyle={styles.inputFormContainer}
                inputContainerStyle={styles.inputForm}
            />
            <CheckBox title="Acepto los términos y política de privacidad" />
            <Button title="REGISTRO" onPress={() => setRegisterForm(false)}/>
            </ScrollView>
            </SafeAreaView>
     
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight + 20,
      },
      scrollView: {
        paddingLeft: 40,
        paddingRight: 40,
        width: '100%',
      },
      inputFormContainer: {
        margin: 0,
        width: "100%",
        padding: 0,
        height: 50,
        marginBottom:15,
      },
      inputForm: {
        width: "100%",
        marginTop: 0,
        marginBottom: 0,
        borderColor: "#DCDCDC",
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
      },
title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
    });