import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;
const getFilter = (state) => state.contacts.filter;
const getError = (state) => state.contacts.error;
const getAllContacts = (state) => state.contacts.items;

const getTotalContactCount = (state) => {
  const contacts = getAllContacts(state);
  return contacts.length;
};

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getError,
  getAllContacts,
  getVisibleContacts,
  getTotalContactCount,
};
export default contactsSelectors;
