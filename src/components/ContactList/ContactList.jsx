import Contact from "../Contact/Contact";
import c from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={c.list}>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            handleDelete={handleDelete}
            id={contact.id}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
