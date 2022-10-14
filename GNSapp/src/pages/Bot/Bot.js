import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import base64 from "react-native-base64";
import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";
import * as Speech from 'expo-speech';
import BotaoBot from "../../components/BotaoBot";

const { CHATBOT_KEY } = process.env;
const key = CHATBOT_KEY;    
const encodedKey = base64.encode(`apikey:${key}`) ;


const Bot = () => {
    const [message, setMessage] = useState("")
    const [chatMessage, setChatMessage] = useState([]);
    const [permission, setPermission] = React.useState("");
    const [recording, setRecording] = React.useState("");
    let [context, setContext] = useState("");
    const sendMessage = (messageUser) => {
        axios
          .post(
            `https://api.us-south.assistant.watson.cloud.ibm.com/instances/d2c9e1cc-f4aa-4c05-8517-de4b3be39971/v1/workspaces/26bf90f9-9b3a-452f-bbf1-3cfc9e1058f8/message?version=2020-04-01`,
            {
              input: { text: messageUser},
              context,
            },
            {
              headers: {
                Authorization: `Basic ${encodedKey}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            setContext(res.data.context)
            setChatMessage(res.data.output.text)
            console.log(res.data)
          })
          .catch((err) => {
            console.error(err);
          });
    
      }
      useEffect(() => {
        if(chatMessage.length > 1){
          chatMessage.map(value =>{
            Speech.speak(value, {language: "fr-FR"})
            ;
          })
        }else{        
          if(chatMessage[0] != null){
            Speech.speak(chatMessage[0], {language: "fr-FR"})
            console.log(chatMessage[0])
          }
        }
      },[chatMessage])
      useEffect(() => {
        axios
          .post(
            `https://api.us-south.assistant.watson.cloud.ibm.com/instances/d2c9e1cc-f4aa-4c05-8517-de4b3be39971/v1/workspaces/26bf90f9-9b3a-452f-bbf1-3cfc9e1058f8/message?version=2018-09-20`,
            {
              input: { text: message},
            },
            {
              headers: {
                Authorization: `Basic ${encodedKey}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            setContext(res.data.context)
            setChatMessage(res.data.output.text)
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);
    
    
    
      const userMessage = (recording) => {
        const formData = new FormData();
        formData.append("file", {
          uri: recording.getURI(),
          name: "test.wav",
          type: "audio/wav",
        });
        axios
          .post('https://nodesvaldo.mybluemix.net/funciona', formData, {
            responseType: 'text',
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then( async function (response) {
            sendMessage(response.data)
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error);
            console.error(error.response);
          });
      }
    
      async function startRecording() {
        try {
          const permission = await Audio.requestPermissionsAsync();
          if (permission.status === "granted") {
            await Audio.setAudioModeAsync({
              allowsRecordingIOS: true,
              playsInSilentModeIOS: true,
            });
            const recording = new Audio.Recording();
            try {
              await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
              await recording.startAsync();
            } catch (err) {
              console.log(err)
            }
            setRecording(recording)
          } else {
            setPermission("Please grant permission to app to access microphone");
          }
        } catch (err) {
          console.error("Failed to start recording", err);
        }
      }
      
      async function stopRecording() {
        await recording.stopAndUnloadAsync();
        let resp = recording
        setRecording(undefined)
        userMessage(resp)
      }
    
      return (
        <View style={styles.container}>
          <Text>{permission}</Text>
     
          <StatusBar style="auto" />
        </View>
      );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        },
    });
    

export default Bot;




