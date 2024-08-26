import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../reusableComponents/Input';

const defaultInputValues = {
  email: '',
  password: '',
  name: '',
};

const SignIn = () => {
  const [inputValues, setInputValues] = useState(
    defaultInputValues,
  );
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleChange = event => {
    setInputValues(prevState => ({
      ...prevState,
      [event?.target?.name]: event?.target?.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    //onSubmit(inputValues);
    localStorage.setItem(
      'user',
      JSON.stringify(inputValues),
    );
    formRef.current.reset();
    handleReset();
  };

  const handleReset = () => {
    setInputValues(defaultInputValues);
    navigate('/');
  };

  return (
    <div>
      <h1>Please log in</h1>
      <form
        ref={formRef}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
        className="form"
      >
        <Input
          type="name"
          name="name"
          placeholder="name"
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default SignIn;
