import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

export interface User {
  userName: string | null;
  userEmail: string | null;
}

const initialState: User = {
  userName: null,
  userEmail: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      console.log(action.payload)
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    setUserLogout: (state) => {
      state.userName = null;
      state.userEmail = null;
    }
  }
});

export const {setActiveUser, setUserLogout} = userSlice.actions
export const selectUserName = (state: RootState)  => state.user.userName;
export const selectUserEmail = (state: RootState)  => state.user.userEmail;
export default userSlice.reducer