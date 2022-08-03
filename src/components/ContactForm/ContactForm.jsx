import PropTypes from 'prop-types';
import { Button } from '../ui/Button.styled';
import { InputForm } from '../ui/Input.styled';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yap from 'yup';

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  const schema = yap.object().shape({
    name: yap.string().required('Please, enter your name.'),
    number: yap.number().positive().required('Please, enter your number.'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">
          Name
          <InputForm type="text" name="name" required />
          <ErrorMessage name="name" component="p" />
        </label>
        <label htmlFor="number">
          Number
          <InputForm type="tel" name="number" required />
          <ErrorMessage name="number" component="p" />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
