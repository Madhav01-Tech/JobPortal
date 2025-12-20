import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",

  initialState: {
    jobs: [],
    singleJob: null,   // 🔥 Added this
  },

  reducers: {
    setJobs(state, action) {
      state.jobs = action.payload;
    },

    setSingleJob(state, action) {   // 🔥 Added this
      state.singleJob = action.payload;
    },
  },
});

export const { setJobs, setSingleJob } = jobSlice.actions;
export default jobSlice.reducer;
