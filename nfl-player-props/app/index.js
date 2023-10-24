import {View, Text} from 'react-native';
import Navbar from './navigation/Navbar';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from'@react-navigation/stack'

const Home = () => {
    return(
    <View>
        <Text>Home</Text>
        <Navbar/>
    </View>
    )
   
}
export default Home;