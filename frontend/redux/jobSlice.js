import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",

  initialState: {
    jobs: [],
    singleJob: null, 
    appliedJobs:[]  
  },

  reducers: {
    setJobs(state, action) {
      state.jobs = action.payload;
    },

    setSingleJob(state, action) {   
      state.singleJob = action.payload;
    },

    setAppliedJobs(state,action) {
     state.appliedJobs=action.payload
    }
  },
});

export const { setJobs, setSingleJob,setAppliedJobs } = jobSlice.actions;
export default jobSlice.reducer;
