import react, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from './dragonSlice';


const Dragons = () => {
  const dragonsData = useSelector((state) => state.dragons);
  const { status, dragons, error } = dragonsData
  const dispatch = useDispatch();

  // console.log(dragonsData)
  useEffect(() => {
    if (!dragons.length) dispatch(fetchDragons())
  },[])

  if(status === 'idle' || status === 'loading'){
    return (
      <div>Loading...</div>
    )
  }else {
    return (
      <div>Hello Dragons</div>
    )
  }
}

export default Dragons;