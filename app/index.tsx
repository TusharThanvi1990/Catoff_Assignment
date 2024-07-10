import { Text, View , Button  ,StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "@/Screens/Homescreen";
import Loginscreen from "@/Screens/Loginscreen";
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import GameFeed from "@/Screens/GameFeed";
import GameDetailsScreen from "@/Screens/Gamedetailscreen";
import GameDashboard from "@/Screens/Gamedashboard";

const Stack = createNativeStackNavigator()

export default function Index() {
  return (
    <GestureHandlerRootView>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Homescreen} options={{ title: 'Game Feed', headerShown:false }} />
      <Stack.Screen name="Login" component={Loginscreen} options={{ title: 'Game Feed',headerShown:false } } />
      <Stack.Screen name="GameFeed" component={GameFeed} options={{ title: 'Game Feed',headerShown:false } } />
      <Stack.Screen name="GameDetails" component={GameDetailsScreen} options={{ title: 'Game Details',headerShown:false } } />
      <Stack.Screen name="GameDashboard" component={GameDashboard} options={{ title: 'Game dashboard' }} />
      </Stack.Navigator>
    {/* <Stack.Navigator>
      <Stack.Screen name="Home" component={Homescreen}/>
      <Stack.Screen name="Login" component={Loginscreen}/>
      
      
    </Stack.Navigator> */}
    </GestureHandlerRootView>
  );
}
