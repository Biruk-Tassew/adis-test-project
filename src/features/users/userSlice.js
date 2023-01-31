import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        firstName: "Biruk",
        lastName: "Tassew",
        age: 22,
        gender: "Male",
        height: 1.70

    }
]

const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        userAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const { userAdded } = userSlice.actions;
export default userSlice.reducer;