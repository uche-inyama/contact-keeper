import { configureStore } from '@reduxjs/toolkit'
import rocketReducer from './components/pages/rockets/rocketSlice';
import missionReducer from './components/pages/missions/missionSlice';
import dragonReducer from './components/pages/dragons/dragonSlice';


export default configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
    dragons: dragonReducer
  },
})