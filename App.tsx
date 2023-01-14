import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import Loader from "components/Loader";
import { StatusBar } from "react-native";
import Routes from "./src/routes";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={"transparent"}
      />

      {fontsLoaded ? <Routes /> : <Loader />}
    </ThemeProvider>
  );
}
