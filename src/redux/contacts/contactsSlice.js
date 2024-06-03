import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts,addContact,deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = (state.items = state.items.findIndex(
          item => item.id === action.payload.id
        ));
        state.items.splice(index, 1);
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;
