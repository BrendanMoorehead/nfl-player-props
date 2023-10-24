import axios from 'axios';

const BASE_URL = 'https://api.sportsdata.io/v3/nfl/stats/json/ScoresByWeek/';
const API_KEY = 'df900cfa449c4629b7daf7ee36a6af69';

export const fetchGamesByWeek = async (seasonType, week) => {
    try{
        const response = await axios.get(`${BASE_URL}${seasonType}/${week}?key=${API_KEY}`);
        if (response.status !== 200) {
            throw new Error("Failed to fetch games");
        }
        const games = response.data;
        const scoreIds = games.map(game => game.ScoreID);
        
        return scoreIds;
    }catch (error) {
        console.error("Error fetching games:", error);
        return [];
      }
};
