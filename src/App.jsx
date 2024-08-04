import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";

import contacts from "./contacts.json";

function App() {
  const [userContacts, setUserContacts] = useState(() => {
    const memoryContacts = localStorage.getItem("memoryContacts");
    if (memoryContacts) {
      return JSON.parse(memoryContacts);
    }
    return contacts;
  });

  useEffect(() => {
    window.localStorage.setItem("memoryContacts", JSON.stringify(userContacts));
  }, [userContacts]);

  const [searchValue, setSearchValue] = useState("");

  const addContact = (newContact) => {
    console.log(newContact);
    setUserContacts((prev) => {
      return [...prev, { id: nanoid(4), ...newContact }];
    });
  };

  const onDeleteContact = (deleteId) => {
    setUserContacts(
      userContacts.filter((userContact) => userContact.id !== deleteId)
    );
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const filterContact = userContacts.filter((userContact) =>
    userContact.name
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox searchValue={searchValue} handleSearch={handleSearch} />
        <ContactList
          contacts={filterContact}
          onDeleteContact={onDeleteContact}
        />
      </div>
    </>
  );
}

export default App;
