import { useEffect, useState } from "react";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";

const data = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [startData, setStartData] = useState(
    () => JSON.parse(window.localStorage.getItem("saved")) || data
  );
  useEffect(() => {
    window.localStorage.setItem("saved", JSON.stringify(startData));
  }, [startData]);

  const [filtered, setFiltered] = useState("");

  const handleInpute = () => {
    return startData.filter((item) =>
      item.name.toLowerCase().includes(filtered.trim().toLowerCase())
    );
  };
  const newData = handleInpute();
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    const formValues = { ...values, id: nanoid() };

    setStartData([...startData, formValues]);
  };

  const handleDelete = (id) => {
    setStartData(startData.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox setFiltered={setFiltered} />
      <ContactList contacts={newData} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
