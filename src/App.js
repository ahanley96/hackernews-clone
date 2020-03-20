import React, { useEffect, useState } from 'react';
import { getStoryIds } from './services/hackernewsAPI'


export const App = () => {

  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data))
  }, []);

  return <p1>{JSON.stringify(storyIds)}</p1>;

}