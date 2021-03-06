import React, { useEffect, useState } from 'react';
import { getBestStoryIds, storyUrl} from '../services/hackernewsAPI'
import Story from '../components/Story';

export const BestStoriesContainer = () => {

    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {

        getBestStoryIds()
        .then(data => setStoryIds(data));

    
    }, []);
  
    return storyIds.map(storyId => (
        
        <div className="wrapper">

            <div className="container">
                <Story storyId={storyId}/>
            </div>

        </div>
        

    ))
}
