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

var temp2 = require("../assets/temp2.png");
var SecImage = require("../assets/fondo2.jpg");
var terImage = require("../assets/plants_6.png");
var semillas = require("../assets/semillas.png");
var temperatura = require("../assets/temperatura.png");
var ph = require("../assets/PH.png");
var humedad = require("../assets/tide.png");
var humedad2 = require("../assets/splash2.png");
var calendario = require("../assets/calendario.png");
var Luminosidad = require("../assets/icono_luminosidad.png");

function viewHumedad({ navigation }) {
  const[isHidden, setIsHidden] = useState(false)
  const[value, setValue] = useState({
      id:'',
      lvl_agua:''
  });
  const [users, setUsers] = useState([])
  const formData = new FormData();
  formData.append('id', value.id)
  formData.append('lvl_agua', value.lvl_agua)
  useEffect(() => {
    const getData = async () =>{
    const response = await axios.post('http://192.168.5.186/index_humedad.php')
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
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  source={humedad2}
                  alt="image"
                />
              </AspectRatio>
              <Center
                bg="violet.500"
                width="200"
                height="140"
                _dark={{
                  bg: "violet.400",
                }}
                _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "5xl",
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="0"
              >
                {user.lvl_agua}
              </Center>
            </Box>
            <Stack p="4" space={3}>
            <Stack space={2}>
                <Heading size="md" ml="-1">
                  Nivel de agua
                </Heading>
              </Stack>
              <Text fontWeight="400">
              El nivel del agua es muy importante en un cultivo hidroponico ya que de este agua dependa el cultivo. 
              Gracias a esto no existe estres hídrico y se puede
              automatizar en forma muy eficiente
              mediante este detector de humedad.
              Se puede emplear agua con un
              contenido relativamente alto de sales,
              y el apropiado empleo del agua reduce
              las pérdidas por evaporación y se evita
              la percolación.
              
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

export default viewHumedad;
