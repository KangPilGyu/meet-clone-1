import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const useForm = (validate, setIsSubmittedFromSignUp, loginDispatch) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const [errors, setErrors] = useState({});

  let history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    if (Object.keys(errors).length) {
      return;
    }
    await axios
      .post('/api/signUp', {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res);
        const { token } = res.data;
        localStorage.setItem('jwt', token);
        setIsSubmittedFromSignUp(true);
        loginDispatch({ type: 'success' });
        setTimeout(() => {
          history.push('/home');
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
