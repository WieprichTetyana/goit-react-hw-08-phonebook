import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signUpThunk } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from './register.styled';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = data => {
    console.log(data);
    dispatch(signUpThunk(data))
      .unwrap()
      .then(res => {
        navigate('/contacts');
        toast.success(`Welcome ${res.user.name}`);
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="">
          <span>Name </span>
          <input {...register('name')} type="text" required />
        </label>
        <label htmlFor="">
          <span>Email </span>
          <input {...register('email')} type="email" required />
        </label>
        <label htmlFor="">
          <span>Password </span>
          <input {...register('password')} type="password" required />
        </label>
        <button>Sign Up</button>
      </form>
    </Container>
  );
};

export default Register;
