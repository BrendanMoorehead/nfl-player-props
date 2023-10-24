import axios from 'axios';

const BASE_URL = 'https://api.sportsdata.io/v3/nfl/odds/json';
const API_KEY = 'df900cfa449c4629b7daf7ee36a6af69';

export const fetchPlayerProps = async (scoreid, include='available') => {
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
