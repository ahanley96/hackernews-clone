import React from 'react'
import { useEffect, useState } from 'react'
import { getStory } from '../../services/hackernewsAPI'


export const SingleStory = ({match}, props) => {

    const [story, setStory] = useState([]);

    //Either get undefined or props is undefined - mix between the two.
    // Uncomment console.log below to get error 
    //console.log("info",props.state.kids)
    //Remove above for app to work again

    
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