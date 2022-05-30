import React, { useState, useEffect } from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import Menu from "./components/Menu";
import viewCalendar from "./components/viewCalendar";
import viewTemp from "./components/viewTemp";
import viewTemperature from "./components/viewTemperature";
import axios, { Axios } from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import viewPh from "./components/viewPh";
import ViewPlants from "./components/ViewPlants";
import viewPlant from "./components/viewPlant";
import viewTips from "./components/viewTips";
import viewHumedad from "./components/viewHumedad";
import viewSettings from "./components/viewSettings";
import { backgroundColor } from "styled-system";
import CardCalendar from "./components/CardCalendar";
import CardTime from "./components/Calendario";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseconfig";
/* import {gyroscope, magnetometer} from 'react-native-sensors'; */
const STYLES = ["default", "dark-content", "light-content"];
const TRANSITIONS = ["fade", "slide", "none"];
const Stack = createNativeStackNavigator();

export default function App() {
  /* const subscription = magnetometer.subscribe(({ x, y, z, timestamp }) =>
  console.log({ x, y, z, timestamp })
); */
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0]
  );

  useEffect(() => {
    const obtenerDatos = async () => {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      
      querySnapshot.forEach((doc) => {
       console.log(doc.id, doc.nombre);
        //console.log(`${doc.id}, ${doc.nombre} => ${doc.data()}`);
       
      });
    };
    obtenerDatos();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#111827"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      ></StatusBar>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="inicio">
          <Stack.Group
            screenOptions={{ headerStyle: { backgroundColor: "#171717" } }}
          >
            <Stack.Screen
              options={{
                title: "Inicio",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
              name="inicio"
              component={Inicio}
            />
            <Stack.Screen
              options={{
                title: "Login",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
              name="login"
              component={Login}
            />
            <Stack.Screen
              options={{
                title: "Menu",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
              name="menu"
              component={Menu}
            />
            <Stack.Screen
              options={{
                title: "PH",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
              name="ph"
              component={viewPh}
            />
            <Stack.Screen
              options={{
                title: "Plants",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
              name="plants"
              component={viewPlant}
            />
            
            <Stack.Screen
              options={{
                title: "Tips",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
              name="tips"
              component={viewTips}
            />
            <Stack.Screen
              options={{
                title: "Temperature",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
              name="temp"
              component={viewTemperature}
            />
            <Stack.Screen
              options={{
                title: "Water Level",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
              name="viewHumedad"
              component={viewHumedad}
            />
            <Stack.Screen
              options={{
                title: "New User",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
              name="settings"
              component={viewSettings}
            />
            
          </Stack.Group>
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
