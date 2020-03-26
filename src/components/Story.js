import React, { useState, useEffect } from 'react';
import { getStory, storyUrl } from '../services/hackernewsAPI';
import { timeConverter } from '../converters/timeConverter'

const Story = (props) => {

    const [story, setStory] = useState([]);
    
    useEffect(() => {

        getStory(props.storyId).then(data => data && data.url && setStory(data))

    }, []);

    return story && story.url ? (
        <>
        <a href={story.url}><p>{story.title}</p></a>
        <h4>By {story.by}</h4>
        <h4>{timeConverter(story.time)}</h4>
        </>
    
    ): null   

}

export default Story