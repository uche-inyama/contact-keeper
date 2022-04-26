import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


export const fetchDragons = createAsyncThunk('spaceX/getDragons', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/dragons',{
    transformRequest: (_, headers) => { 
      delete headers.common['x-auth-token']
    }
  })
  return response.data
})

const initialState = {
  status: 'idle',
  dragons: [],
  error: null
}

const dragonSlice = createSlice({
  name: 'dragons',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDragons.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.dragons = state.dragons.concat(action.payload)
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default dragonSlice.reducer;