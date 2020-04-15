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

    console.log(story.kids)

    return story && story.url ? (

        <>
        <div className="story">

            <span className="score">

                {story.score}

            </span>

            

                <a href={story.url}>

                   <h4>{story.title}</h4>

                </a>


            <span class="meta">

                By: {story.by} | {timeConverter(story.time)} |
                
                <span className="comments">

                //I need this to be passed down to the SingleStory component
                <Link to={{
                    pathname: `/story/${story.id}`,
                    state: {
                        kids: this.story.kids
                    }
                    
                }}>
                    See comments: {story.descendants}
                </Link>

                </span>

            </span>
                
        </div>
        </>
      
    
    ): null   

}

export default Story