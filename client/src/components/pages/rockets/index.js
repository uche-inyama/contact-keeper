import react, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRockets } from './rocketSlice'


const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector(state => state.rockets.rockets);
  const { status, rockets, error } = rocketsData;
  // console.log(rocketsData)

  useEffect(() => {
    dispatch(fetchRockets())
  }, [])

  if(status === 'idle' || status === 'loading'){
    return (
      <div>Loading...</div>
    )
  }else {
    return (
      <div>hello Rockets</div>
    )
  }
}

export default Rockets;