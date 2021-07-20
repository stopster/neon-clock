import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface ClockState {
  time: Number
  running: Boolean
}
export const clockSlice = createSlice({
  name: 'clockSlice',
  initialState: {
    time: Date.now(),
    running: true,
  },
  reducers: {
    start(state) {
      state.running = true
    },
    stop(state) {
      state.running = false
    },
  },
})

export const { start, stop } = clockSlice.actions

export const clockSelector = (state: RootState) => state.clock

export default clockSlice.reducer
