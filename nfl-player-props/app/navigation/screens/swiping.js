import {View, Text} from 'react-native';
import {fetchPlayerProps} from '../../../services/playerPropsAPI';
import {fetchGamesByWeek} from '../../../services/gamesAPI';
import {useState, useEffect} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Swiping = () => {
  const [playerProps, setPlayerProps] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //Find an actual score ID
  // const scoreid = 12345;

  // useEffect(() =>{
  //   async function fetchProps(){
  //     try{
  //       const data = await fetchPlayerProps(scoreid);
  //       setPlayerProps(data);
  //     }catch(e){
  //       setError(e);
  //     }finally{
  //       setLoading(false);;
  //     }
  //   }
  //   fetchProps();
  // },[scoreid]);

  // if (loading) return <Text>Loading...</Text>;
  // if (error) return <Text>Error: {error.message}</Text>;

  const seasonType = '2023REG';  // replace with the desired season type (e.g. 2023REG, 2023POST, etc.)
  const week = 5;  // replace with the desired week number
  // fetchGamesByWeek(seasonType, week).then(scoreIds => {
  //   console.log(scoreIds);
    
  // });
  getProps = () => {
    console.log('getprops');

    fetchGamesByWeek(seasonType, week).then(scoreIds => {
    console.log(scoreIds);
      fetchPlayerProps(scoreIds[0]).then(props =>{
        console.log(props);
      });
    });

    
  } 

  return (
    <View>
      <Text>{JSON.stringify(playerProps, null, 2)}</Text>
      <TouchableOpacity onPress={getProps}><Text>API Request</Text></TouchableOpacity>
      </View>
  )
}

export default Swiping