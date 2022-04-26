import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


export const fetchRockets = createAsyncThunk('spaceX/getRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets',{
    transformRequest: (_, headers) => { 
      delete headers.common['x-auth-token']
    }
  })
  console.log(response.data)
  return response.data
})

const initialState = {
  status: 'idle',
  rockets: [],
  error: null
}

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.rockets = action.payload
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default rocketsSlice.reducer;