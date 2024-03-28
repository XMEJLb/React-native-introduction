import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { Input } from "./components/Input/Input";
import { useState, useEffect } from "react";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";
import {
  getOppositeUnit,
  convertTemperatureTo,
  isIceTemperature,
  UNITS,
} from "./utils/temperature";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setcurrentUnit] = useState("°C");
  const oppositeUnit = getOppositeUnit(currentUnit);
  const [currentBackground, setCurrentBackground] = useState(coldBackground);

  useEffect(() => {
    const isCold = isIceTemperature(inputValue, currentUnit);
    setCurrentBackground(isCold ? coldBackground : hotBackground);
  }, [inputValue, currentUnit]);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
    }
  }
  return (
    <ImageBackground style={s.backgroundImg} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature
              unit={oppositeUnit}
              temperature={getConvertedTemperature()}
            />
            <Input
              unit={currentUnit}
              onChange={setInputValue}
              defaultValue={0}
            />
            <ButtonConvert
              onPress={(currentUnit) => {
                setcurrentUnit(oppositeUnit);
              }}
              unit={currentUnit}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
