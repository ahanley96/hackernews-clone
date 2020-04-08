import React, { useEffect, useState } from 'react';
import { getNewStoryIds, storyUrl} from '../services/hackernewsAPI'
import Story from '../components/Story';

const NewStoriesContainer = () => {

    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {

        getNewStoryIds().then(data => setStoryIds(data));

        
        
    }, []);

 
  
    return storyIds.map(storyId => (

        <div>
            <Story storyId={storyId}/>
        </div>

    ))
}

export default NewStoriesContainer