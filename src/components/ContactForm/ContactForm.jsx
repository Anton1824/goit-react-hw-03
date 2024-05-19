import * as Yup from "yup";
import { Field, Form, Formic } from "formic";
import { ErrorMessage } from "formic";
import { nanoid } from "nanoid";

import c from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ handleSubmit }) => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  return (
    <Formic
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={c.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          className={c.input}
        ></Field>
        <ErrorMessage name="name" component="span" className={c.error} />
        <label htmlFor={numberFieldId}>Number</label>
        <Field
          type="text"
          name="number"
          id={numberFieldId}
          className={c.input}
        ></Field>
        <ErrorMessage name="number" component="span" className={c.error} />
        <button type="submit" className={c.button}>
          Add contact
        </button>
      </Form>
    </Formic>
  );
};

export default ContactForm;
