import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  middleName: '',
  lastName: '',
  primaryPhone: '',
  primaryEmail: '',
  addresses: {
    home: '',
    office: '',
  },
  socialMediaLinks: {
    facebook: '',
    linkedIn: '',
  },
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;
