import React, { useEffect, useState } from 'react';
import { getTopStoryIds, storyUrl} from '../services/hackernewsAPI'
import Story from '../components/Story';

export const TopStoriesContainer = () => {

    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {

        getTopStoryIds()
        .then(data => setStoryIds(data));

    
    }, []);
  
    return storyIds.map(storyId => (

        <div>
            <Story storyId={storyId}/>
        </div>

    ))
}

