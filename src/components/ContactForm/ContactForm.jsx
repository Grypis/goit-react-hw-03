import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    addContact(values);
    actions.resetForm();
  };

  const FeedbackError = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackError}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          Name
          <Field className={css.field} type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label className={css.label} htmlFor={numberId}>
          Number
          <Field
            className={css.field}
            type="text"
            name="number"
            id={numberId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
