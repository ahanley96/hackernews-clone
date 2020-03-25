import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const bestStoriesUrl = `${baseUrl}beststories.json`;
export const storyUrl = `${baseUrl}item/`;


export const getStory = async (storyId) => {
    
    const result = await axios
    
    .get(`${storyUrl + storyId}.json`)

    return result.data

}

export const getNewStoryIds = async () => {

    const result = await axios.get(newStoriesUrl)

    return result.data

}

export const getTopStoryIds = async () => {

    const result = axios.get(topStoriesUrl).then(data => data)

    return result; 

}

export const getBestStoryIds = async () => {

    const result = axios.get(bestStoriesUrl).then(data => data)

    return result; 

}