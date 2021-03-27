import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const useForm = (validate, setLoginStatus, setIsSubmitted) => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    console.log(errors);
    if (Object.keys(errors).length) {
      return;
    }
    axios
      .post('/api/signUp', {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res);
        const { token } = res.data;
        localStorage.setItem('jwt', token);
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setIsSubmitted(true);
        setLoginStatus(true);
        setTimeout(() => {
          history.push('/home');
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(values);
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
