import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRockets } from './rocketSlice'
import Rocket from './rocket'


const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector(state => state.rockets);
  const { status, rockets, error } = rocketsData;
  console.log(rockets)

  useEffect(() => {
    if (!rockets.length) dispatch(fetchRockets())
  }, [])

  if(status === 'idle' || status === 'loading'){
    return (
      <div>Loading...</div>
    )
  }

  return (
    <ul>
      {rockets.map(rocket => 
        <li key={rocket.id}>
          <Rocket rocket={rocket}/>
        </li>
      )}
    </ul>
  );
}

export default Rockets;