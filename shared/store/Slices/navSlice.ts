import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type NavState = 'home' | 'ads' | 'orders' | 'workers' | 'contact';

interface NavSliceState {
  activeTab: NavState;
}

const initialState: NavSliceState = {
  activeTab: 'home',
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<NavState>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = navSlice.actions;
export default navSlice.reducer;
