import React, { useState, useEffect } from 'react';
import { getStory, storyUrl } from '../services/hackernewsAPI';

const Story = (props) => {

    const [story, setStory] = useState([]);
    
    useEffect(() => {

        getStory(props.storyId).then(data => data && data.url && setStory(data))

    }, []);

    return story && story.url ? (
        <>
        <a href={story.url}><p>{story.title}</p></a>
        <h4>{story.by}</h4>
        <h4>{story.time}</h4>
        </>
    
    ): null   

}

export default Story