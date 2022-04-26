import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


export const fetchMissions = createAsyncThunk('spaceX/getMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions',{
    transformRequest: (_, headers) => { 
      delete headers.common['x-auth-token']
    }
  })
  console.log(response.data)
  return response.data
})

const initialState = {
  status: 'idle',
  missions: [],
  error: null
}

const missionSlice = createSlice({
  name: 'missions',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.missions = action.payload
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default missionSlice.reducer;