import react, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from './missionSlice';


const Mission = () => {
  const missionsData = useSelector((state) => state.missions);
  const { status, missions, error } = missionsData;

  const dispatch = useDispatch();
  console.log(missions)

  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions())
  }, [])

  if(status === 'idle' || status === 'loading'){
    return (
      <div>Loading...</div>
    )
  }else {
    return (
      <div>hello Missons</div>
    )
  }
}

export default Mission;