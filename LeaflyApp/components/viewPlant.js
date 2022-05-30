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

var tomate = require("../assets/tomato.png");
var lettuce = require("../assets/lettuce.png");
var celery = require("../assets/celery.png");
var spinach = require("../assets/spinach.png");
var parsley = require("../assets/parsley.png");

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
                  source={tomate}
                  alt="image"
                />   
              </Stack>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Tomate
                </Heading>
              </Stack>
              <Text fontWeight="400">
              Cultivo hidropónico en invernadero de alta tecnología con recirculación de drenajes: 4 litros por cada kilo de tomate.
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
                  source={lettuce}
                  alt="image"
                />   
              </Stack>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Lechuga
                </Heading>
              </Stack>
              <Text fontWeight="400">
              El rango de CE ideal para lechugas es de 1.4 a 1.8 mS/cm y un pH de 6.0-7.0.
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
                  source={celery}
                  alt="image"
                />   
              </Stack>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Apio
                </Heading>
              </Stack>
              <Text fontWeight="400">
              El apio es una planta herbácea de la familia del perejil (Apiaceae). Es una verdura muy versátil que se consume tanto cruda como cocida.
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
                  source={spinach}
                  alt="image"
                />   
              </Stack>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Espinaca
                </Heading>
              </Stack>
              <Text fontWeight="400">
              La espinaca es una planta anual comestible que cuenta con tallos gruesos y hojas grandes de color verde intenso, las cuales pueden alcanzar una altura de hasta 30 centímetros; ésta pertenece a la familia de las Quenopodiaceae
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
                  source={parsley}
                  alt="image"
                />   
              </Stack>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Perejil
                </Heading>
              </Stack>
              <Text fontWeight="400">
              El perejil se puede adaptar fácilmente a diferentes condiciones, por lo tanto su producción se puede llevar a cabo a través de diferentes técnicas; una de ellas es la hidroponía, la cual permite realizar su cultivo de forma sencilla a través del uso de soluciones nutritivas y sustratos, los cuales permiten tener mayor control sobre los requerimientos que las plantas necesitan para crecer correctamente.
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
