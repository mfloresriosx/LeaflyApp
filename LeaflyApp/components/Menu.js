import React from "react";
import {
  AntDesign,
  Divider,
  ScrollView,
  useDisclose,
  Stack,
  StatusBar,
  Stagger,
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
import {
  alignItems,
  backgroundColor,
  backgroundImage,
  height,
  width,
} from "styled-system";
import { ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

var temp2 = require("../assets/temperatura2.png");
var SecImage = require("../assets/fondo2.jpg");
var terImage = require("../assets/plants_6.png");
var semillas = require("../assets/plants.png");
var temperatura = require("../assets/tips.png");
var ph = require("../assets/PH.png");
var humedad = require("../assets/tide.png");
var calendario = require("../assets/calendario.png");
var Luminosidad = require("../assets/icono_luminosidad.png");
var settings = require("../assets/man.png")

function Menu({ navigation }) {
  const { isOpen, onToggle } = useDisclose();
  return (
    <>
      <ImageBackground
        style={{ width: "100%", height: "100%", backgroundColor: "#111827" }}
      >
        {/* <StatusBar backgroundColor="#166534" barStyle="light-content" /> */}

        {/* <Box safeAreaTop backgroundColor="#166536" /> */}

        <HStack
          px="1"
          py="3"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack space="4" alignItems="center">
            <IconButton
              icon={
                <Icon
                  size="sm"
                  as={<MaterialIcons name="" />}
                  color="white"
                />
              }
            />
            <Text color="white" fontSize="20" fontWeight="bold">
              Leafy App
            </Text>
          </HStack>
          <HStack space="2">
            <IconButton
              icon={
                <Icon
                  as={<MaterialIcons name="" />}
                  size="sm"
                  color="white"
                />
              }
            />
            <IconButton
              icon={
                <Icon
                as={<MaterialIcons name="home" />}
                onPress={() => navigation.navigate("inicio")}
                  color="white"
                  size="sm"
                />
              }
            />
            <IconButton
              icon={
                <Icon
                  as={<MaterialIcons name="" />}
                  size="sm"
                  color="white"
                />
              }
            />
          </HStack>
        </HStack>
        {/* -------------------------------------------------Menu Body------------------------------------------------------------------------------- */}
        <ScrollView>
          <VStack space="2.5" mt="4">
            <Stack
              direction="row"
              mb="2.5"
              mt="1.5"
              space={5}
              alignSelf="center"
            >
              <Center
                w="150px"
                h="150px"
                bg="#68ecfc"
                rounded="sm"
                _text={{
                  fontWeight: "medium",
                }}
                shadow={"3"}
              >
                <Button
                  style={{ width: "100%", height: "100%" }}
                  backgroundColor="#22c55e"
                  onPress={() => navigation.navigate("plants")}
                >
                  <Image
                    source={semillas}
                    alt="Alternate Text"
                    size={"md"}
                  />
                  <Text bold color="white" textAlign="center">
                    Plants
                  </Text>
                </Button>
              </Center>
              <Center
                w="150px"
                h="180px"
                bg="#f38424"
                rounded="sm"
                _text={{
                  fontWeight: "medium",
                }}
                shadow={"3"}
              >
                <Button
                  style={{ width: "100%", height: "100%" }}
                  //colorScheme="transparent"
                  backgroundColor="#f38424"
                  onPress={() => navigation.navigate("tips")}
                >
                  <Image
                    //source={require('../assets/semillas.png')}
                    source={temperatura}
                    alt="Alternate Text"
                    size={"md"}
                  />
                  <Text bold color="white" textAlign="center">
                    Tips
                  </Text>
                </Button>
              </Center>
            </Stack>

            <Stack
              direction="row"
              mb="2.5"
              mt="1.5"
              space={5}
              alignSelf="center"
            >
              <Center
                w="150px"
                h="185px"
                marginTop="-10"
                bg="#149ce0"
                rounded="sm"
                _text={{
                  fontWeight: "medium",
                }}
                shadow={"3"}
              >
                <Button
                  style={{ width: "100%", height: "100%" }}
                  //colorScheme="transparent"
                  backgroundColor="#be185d"
                  onPress={() => navigation.navigate("temp")}
                >
                  <Image
                    //source={require('../assets/semillas.png')}
                    source={temp2}
                    alt="Alternate Text"
                    size={"md"}
                  />
                  <Text bold color="white" textAlign="center">
                    Temperature
                  </Text>
                </Button>
              </Center>
              <Center
                bg="#3c3cac"
                w="150px"
                h="180px"
                marginTop="-2"
                rounded="sm"
                _text={{
                  fontWeight: "medium",
                }}
                shadow={"3"}
              >
                <Button
                  style={{ width: "100%", height: "100%" }}
                  //colorScheme="transparent"
                  backgroundColor="#149ce4"
                  onPress={() => navigation.navigate("ph")}
                >
                  <Image
                    //source={require('../assets/semillas.png')}
                    source={ph}
                    alt="Alternate Text"
                    size={"md"}
                  />
                  <Text bold color="white" textAlign="center">
                    PH
                  </Text>
                </Button>
              </Center>
            </Stack>
            <Stack
              direction="row"
              mb="2.5"
              mt="1.5"
              space={5}
              alignSelf="center"
            >
              <Center
                w="150px"
                h="208px"
                marginTop="-9"
                bg="#24a46c"
                rounded="sm"
                _text={{
                  fontWeight: "medium",
                }}
                shadow={"3"}
              >
                <Button
                  style={{ width: "100%", height: "100%" }}
                  //colorScheme="transparent"
                  backgroundColor="#3c3cac"
                  onPress={() => navigation.navigate("viewHumedad")}
                >
                  <Image
                    //source={require('../assets/semillas.png')}
                    source={humedad}
                    alt="Alternate Text"
                    size={"md"}
                  />
                  <Text bold color="white" textAlign="center">
                    Water Level
                  </Text>
                </Button>
              </Center>
              <Center
                bg="#3c3cac"
                w="150px"
                h="180px"
                marginTop="-2"
                rounded="sm"
                _text={{
                  fontWeight: "medium",
                }}
                shadow={"3"}
              >
                <Button
                  style={{ width: "100%", height: "100%" }}
                  //colorScheme="transparent"
                  backgroundColor="#0c4a6e"
                  onPress={() => navigation.navigate("settings")}
                >
                  <Image
                    //source={require('../assets/semillas.png')}
                    source={settings}
                    alt="Alternate Text"
                    size={"md"}
                    
                  />
                  <Text bold color="white" textAlign="center">
                    New User
                  </Text>
                </Button>
              </Center>
            </Stack>
            
            
          </VStack>
        </ScrollView>
        
      </ImageBackground>
    </>
  );
}
export default Menu;
