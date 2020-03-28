import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const bestStoriesUrl = `${baseUrl}beststories.json`;
export const storyUrl = `${baseUrl}item/`;

//Will be used for quering individual stories
export const getStory = async (storyId) => {
    
    const result = await axios
    
    .get(`${storyUrl + storyId}.json`)

    return result.data

}

//Queries the "/newstories" hackernews API for top 500 id's
export const getNewStoryIds = async () => {

    const result = await axios
    
    .get(newStoriesUrl)

    return result.data

}

//Queries the "/topstories" hackernews API for top 500 id's
export const getTopStoryIds = async () => {

    const result = await axios
    
    .get(topStoriesUrl).then(data => data)

    return result.data

}

//Queries the "/beststories" hackernews API for top 500 id's
export const getBestStoryIds = async () => {

    const result = await axios
    
    .get(bestStoriesUrl).then(data => data)

    return result.data; 

}