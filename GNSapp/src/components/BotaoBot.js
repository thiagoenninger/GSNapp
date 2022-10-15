import { Pressable, Text, TouchableHighlight, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import base64 from "react-native-base64";
import { Audio } from "expo-av";
import * as Speech from 'expo-speech';
const { CHATBOT_KEY } = process.env;
const key = CHATBOT_KEY;
const encodedKey = base64.encode(`apikey:${key}`);
const BotaoBot = () => {
  const [message, setMessage] = useState("")
  const [chatMessage, setChatMessage] = useState([]);
  const [permission, setPermission] = React.useState("");
  const [recording, setRecording] = React.useState("");
  let [context, setContext] = useState("");
  const [cor, setCor] = useState("#32A060");

  const sendMessage = (messageUser) => {
    axios
      .post(
        `https://api.us-south.assistant.watson.cloud.ibm.com/instances/d2c9e1cc-f4aa-4c05-8517-de4b3be39971/v1/workspaces/26bf90f9-9b3a-452f-bbf1-3cfc9e1058f8/message?version=2020-04-01`,
        {
          input: { text: messageUser },
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
    if (chatMessage.length > 1) {
      chatMessage.map(value => {
        Speech.speak(value)
          ;
      })
    } else {
      if (chatMessage[0] != null) {
        Speech.speak(chatMessage[0])
        console.log(chatMessage[0])
      }
    }
  }, [chatMessage])
  useEffect(() => {
    axios
      .post(
        `https://api.us-south.assistant.watson.cloud.ibm.com/instances/d2c9e1cc-f4aa-4c05-8517-de4b3be39971/v1/workspaces/26bf90f9-9b3a-452f-bbf1-3cfc9e1058f8/message?version=2018-09-20`,
        {
          input: { text: message },
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
      .then(async function (response) {
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
    <View style={{
      justifyContent: "center",
      alignSelf: "flex-start",
      alignItems: "center",
      height: 80,
      width: 80,
      backgroundColor: "white",
      bottom: 40,
      borderRadius: 40,
      elevation: 22,
      zIndex: 2,
    }}>
      <TouchableHighlight 
      underlayColor="#32A060"
      tintColor="white"
      style={{
        height: 80,
        width: 80,
        borderRadius: 40,
        

      }}
        title={recording ? "Stop Recording" : "Start Recording"}
        onPressIn={() => {
          startRecording()
          setCor("white")
        }} 
        onPressOut={() =>{
          stopRecording()
          setCor("#32A060")
        }}> 
          
        

        <Image source={require("../assets/Voice.png")}
          style={{
            height: 35,
            width: 35,
            top: 20,
            alignSelf: "center",
            justifyContent: "center",
            tintColor: cor,
          }}
        />
      </TouchableHighlight>

    
    </View>
  );
};

export default BotaoBot;