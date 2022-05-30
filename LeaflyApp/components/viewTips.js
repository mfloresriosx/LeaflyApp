import React, { useState, useEffect } from "react";
import {
  AspectRatio,
  AntDesign,
  View,
  Divider,
  ScrollView,
  Stack,
  StatusBar,
  IconButton,
  Icon,
  VStack,
  HStack,
  Image,
  Center,
  Heading,
  Text,
  Container,
  NativeBaseProvider,
  Box,
  Button,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import axios, { Axios } from "axios";
import {
  alignItems,
  backgroundColor,
  backgroundImage,
  height,
  width,
} from "styled-system";
import { ImageBackground } from "react-native";

var bugs = require("../assets/bugs.png");
var h2o = require("../assets/h2o.png");
var o2 = require("../assets/o2.png");
var ph = require("../assets/phplant.png");
var estructura = require("../assets/hydroponic.png");

function viewPh({ navigation }) {
  const[isHidden, setIsHidden] = useState(false)
  const[value, setValue] = useState({
      id:'',
      cantidad_ph:'',
      fecha_hora:''
  });
  const [users, setUsers] = useState([])
  const formData = new FormData();
  formData.append('id', value.id)
  formData.append('cantidad_ph', value.cantidad_ph)
  formData.append('fecha_hora', value.fecha_hora)
  useEffect(() => {
    const getData = async () =>{
    const response = await axios.post('http://192.168.5.186/index_ph.php')
    setUsers(response.data)
    console.log("USER", users)    
    }
    getData()
}, []);
  return (
    <>
      <ImageBackground
        style={{ width: "100%", height: "100%", backgroundColor: "#111827" }}
      >
        <ScrollView>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           {users.map((user) =>
           
           (
            <Box
            maxW="80"
            margin="5"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
           
            <Stack p="4" space={3}>
            <Stack space={1}>
                <Image width={300} height={300}
                  source={bugs}
                  alt="image"
                />   
              </Stack>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Limpieza
                </Heading>
              </Stack>
              <Text fontWeight="400">
              Un cultivo hidropónico precisa de un ambiente limpio, libre de cualquier plaga y correctamente desinfectado. De lo contrario la facilidad para plagas en invadir el cultivo puede arruinar cosechas enteras.
              </Text>
              
            </Stack>
          </Box>

           ))}
           
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           {users.map((user) =>
           
           (
            <Box
            maxW="80"
            margin="5"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
           
            <Stack p="4" space={3}>
            <Stack space={1}>
                <Image width={300} height={300}
                  source={h2o}
                  alt="image"
                />   
              </Stack>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Agua
                </Heading>
              </Stack>
              <Text fontWeight="400">
              El agua es un factor clave. En un trío formado por genetica, agua, y luz no puede fallar ningún punto. El agua recomendada para cultivo hidropónico es la correctamente filtrada (agua osmotizada) por un equipo de osmosis. Precisamos partir de un agua que no contiene nada para que, añadiendo fertilizante se alcance los valores óptimos.
              </Text>
              
            </Stack>
          </Box>

           ))}
           
        </View>

        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           {users.map((user) =>
           
           (
            <Box
            maxW="80"
            margin="5"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
           
            <Stack p="4" space={3}>
            <Stack space={1}>
                <Image width={300} height={300}
                  source={o2}
                  alt="image"
                />   
              </Stack>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Oxígeno
                </Heading>
              </Stack>
              <Text fontWeight="400">
              En un tanque, con agua que recircula, es básico aportar oxígeno para mantener a las raíces sanas (el agua es quién transportará este oxígeno hasta las raíces).
              Aportando una sencilla bomba de aire con un difusor, lograremos evitar el agua estancada, y además aportaremos una fuente de vida como el oxígeno al agua.
               </Text>
              
            </Stack>
          </Box>

           ))}
           
        </View>

        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           {users.map((user) =>
           
           (
            <Box
            maxW="80"
            margin="5"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
           
            <Stack p="4" space={3}>
            <Stack space={1}>
                <Image width={300} height={300}
                  source={ph}
                  alt="image"
                />   
              </Stack>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  PH
                </Heading>
              </Stack>
              <Text fontWeight="400">
              En un cultivo sin suelo (o con arlita), el agua es el único medio para mantener las plantas vivas y en el mejor estado. Una incorreción de pH durante tiempo prolongado puede generar deficiencias en la planta capaces de llegar a provocar la muerte si no es corregido. Debido a la cantidad de litros de agua que contiene un sistema hidropónico, se crean variaciones de pH considerables que deberán ser corregidas en la máxima brevedad posible. Un pH correcto en hidroponía es 5,8 en crecimiento, 6.0 las 3-4 primeras semanas de floración, y 6.2 en el tramo final de floración.
              </Text>
              
            </Stack>
          </Box>

           ))}
           
        </View>

        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           {users.map((user) =>
           
           (
            <Box
            maxW="80"
            margin="5"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
           
            <Stack p="4" space={3}>
            <Stack space={1}>
                <Image width={300} height={300}
                  source={estructura}
                  alt="image"
                />   
              </Stack>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Estructura
                </Heading>
              </Stack>
              <Text fontWeight="400">
              En el cultivo sin suelo, las raíces crecen carentes de un sustrato al que agarrarse. Es por ello que las pantas cultivadas con estos sistemas suelen ser de un tamaño más contenido que las utilizadas en cultivos en suelo. Las plantas que crecen en un medio hidropónico, precisan de mayor atención para sujetar las flores. Al no existir sustrato al que agarrarse, es muy difícil que la estructura de la planta sujete el peso de las grandes flores. Los silicatos son de gran ayuda para la estructura molecular de las plantas. Añadir silicatos al agua de riego ayuda a que las paredes celulares sean más gruesas, favoreciendo una estructura final más resistente.
              </Text>
              
            </Stack>
          </Box>

           ))}
           
        </View>

        </ScrollView>
      </ImageBackground>
    </>
  );
}

export default viewPh;
