import React from 'react'
import { useEffect, useState } from 'react'
import { getStory } from '../../services/hackernewsAPI'


export const SingleStory = ({match}) => {

    const [story, setStory] = useState([]);
    
    useEffect(() => {

        getStory(match.params.id).then(data => setStory(data))
    
    }, []);

    //Test to see if the fetch worked 
    
    return (

        <div>

            <h1>{story.descendants}</h1>

        </div>

    )

}