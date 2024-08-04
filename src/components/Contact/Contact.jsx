import { FaPhone } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import css from "../ContactList/ContactList.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <>
      <div>
        <p>
          <FaUser /> {contact.name}
        </p>
        <p>
          <FaPhone /> {contact.number}
        </p>
      </div>

      <button
        className={css.btn}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
