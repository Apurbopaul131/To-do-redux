import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { TDraftUser } from "./../../../types";

interface InitialStateUser {
  users: IUser[];
}

const initialState: InitialStateUser = {
  users: [],
};
const createUser = (partialUser: TDraftUser) => {
  return {
    id: nanoid(),
    ...partialUser,
  };
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<TDraftUser>) => {
      const user = createUser(action.payload);
      state.users.push(user);
    },
  },
});
export const selactUser = (state: RootState) => {
  return state.assignUser.users;
};
export const { addUser } = userSlice.actions;
export default userSlice.reducer;