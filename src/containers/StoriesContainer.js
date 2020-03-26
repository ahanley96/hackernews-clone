import React, { useEffect, useState } from 'react';
import { getNewStoryIds, storyUrl} from '../services/hackernewsAPI'
import Story from '../components/Story';

const StoriesContainer = () => {

    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {

        getNewStoryIds().then(data => setStoryIds(data));
        
    }, []);

    console.log(storyIds)
  
    return storyIds.map(storyId => (
        <Story storyId={storyId}/>
    ))
}

export default StoriesContainer