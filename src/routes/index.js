import { DrawerNavigator } from "react-navigation";
import HomeScreen from "../scenes/home";
import PlanScreen from "../scenes/plans";
export default DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      title: "Planos"
    },
  },
  Plan: {
    screen: PlanScreen,
    navigationOptions: {
      title: 'Dashboard'
    }
  }
});
