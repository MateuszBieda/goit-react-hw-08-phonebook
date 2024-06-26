
export const getContacts = (state) => state.contacts.contacts;
export const getFilter = (state) => state.filter;
export const selectLoading = state => state.contacts.loading;


export const getVisibleContacts = state => {
    const contacts = getContacts(state); 
    const filter = getFilter(state); 
    const normalizedFilter = filter.toLowerCase(); 
  
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
