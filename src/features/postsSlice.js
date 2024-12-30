import { createSlice } from "@reduxjs/toolkit";
import Data from '../data/data.json'

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: Data,
    loading: false,
    error: null,
  },
  reducers: {},
});

export default postsSlice.reducer;