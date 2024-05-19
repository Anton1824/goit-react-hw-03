import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import c from "./Contact.module.css";

const Contact = ({ contact: { number, name, id }, handleDelete }) => {
  return (
    <li className={c.item}>
      <div>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <FaPhoneAlt />
          {number}
        </p>
      </div>

      <button
        type="button"
        onClick={() => handleDelete(id)}
        className={c.button}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
