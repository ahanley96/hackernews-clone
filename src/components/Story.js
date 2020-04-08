import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStory } from '../services/hackernewsAPI';
import { timeConverter } from '../converters/timeConverter';
import './Story.css'

/* This is used as a nested component within each of the news feeds during the map function 
contained within each of the containers. First the getStory function is used to retrieve 
the idividual story information which is then plugged into the component structure. */

const Story = (props) => {

    const [story, setStory] = useState([]);
    
    useEffect(() => {

        getStory(props.storyId).then(data => data && data.url && setStory(data))

    }, []);

    return story && story.url ? (

        <>
        <div className="story">

            <span className="score">

                {story.score}

            </span>

            <Link to={`/story/${story.id}`}>
                {story.title}
            </Link>

            <span>

                {story.url} |

            </span>

            <span class="meta">

                By: {story.by} | {timeConverter(story.time)} | Comments: {story.descendants}

            </span>
                
        </div>
        </>
      
    
    ): null   

}

export default Story