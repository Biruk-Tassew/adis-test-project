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
        },
        userUpdated(state, action) {
            const { id, firstName, lastName, email, age, gender, height } = action.payload;
            const existingUser = state.find((user) => user.id === id);
            if (existingUser) {
              existingUser.firstName = firstName;
              existingUser.lastName = lastName;
              existingUser.email = email;
              existingUser.age = age;
              existingUser.gender = gender;
              existingUser.height = height;
            }
          },
    }
})

export const { userAdded } = userSlice.actions;
export default userSlice.reducer;