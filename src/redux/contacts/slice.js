// import { createSlice } from '@reduxjs/toolkit';
// import { logOut } from '../auth/operations';
// import { fetchContacts, addContact, deleteContact } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.contacts = action.payload;
//       })
//       .addCase(fetchContacts.rejected, handleRejected)
//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.contacts.push(action.payload);
//       })
//       .addCase(addContact.rejected, handleRejected)
//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.contacts.findIndex(
//           contact => contact.id === action.payload.id
//         );
//         state.contacts.splice(index, 1);
//       })
//       .addCase(deleteContact.rejected, handleRejected)
//       .addCase(logOut.fulfilled, state => {
//         state.contacts = [];
//         state.error = null;
//         state.isLoading = false;
//       });
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
