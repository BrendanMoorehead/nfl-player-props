const axios = require('axios');

const BASE_URL = 'https://api.sportsdata.io/v3/nfl/odds/json';
const API_KEY = '233b7a299fac4620a1a175b74ee3188b';

const fetchPlayerProps = async (scoreid, include='available') => {
    const endpoint = `${BASE_URL}/BettingPlayerPropsByScoreID/${scoreid}?key=${API_KEY}&include=${include}`;
    try{
        const response = await axios.get(endpoint);
        return response.data;
    }
    catch (error){
        console.error("There was an issue fetching the player props", error);
        return null;
    }
}

export default fetchPlayerProps;