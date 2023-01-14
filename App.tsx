import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import Loader from "components/Loader";
import { StatusBar } from "react-native";
import Groups from "screens/Groups";
import { ThemeProvider } from "styled-components/native";
import theme from "theme/index";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={"transparent"}
      />

      {fontsLoaded ? <Groups /> : <Loader />}
    </ThemeProvider>
  );
}
