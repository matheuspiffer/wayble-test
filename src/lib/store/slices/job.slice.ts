import { createSlice } from "@reduxjs/toolkit";
import { Job } from "../../../../types/job";
import { useLocalStorage } from "@mantine/hooks";


type JobState = string;
interface JobSliceProps {
  payload: Job;
  type: string;
}

const initialState: JobState[] = [];
const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    applyJob: (state, action: JobSliceProps) => {
      const { id } = action.payload;
      state.push(id);
    },
  },
});
export const { applyJob } = jobSlice.actions;
export const isApplied = (state: JobState[], id: string) => state.includes(id);
export default jobSlice.reducer;
