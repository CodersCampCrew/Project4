import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './RegisterForm.module.css';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormText
} from 'react-bootstrap';
import userService from '../services/userService';
import { useRouter } from 'next/router';

export const RegisterForm = () => {
  const initialState = {
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    category: ''
  };

  const schema = Yup.object({
    name: Yup.string().required('Nazwa użytkownika jest wymagana'),
    username: Yup.string().required('Nickname jest wymagany'),
    email: Yup.string()
      .email('Email musi być poprawnego formatu')
      .required('Email jest wymagany'),
    phone: Yup.string().required('Numer telefonu jest konieczny'),
    password: Yup.string().required('Hasło jest wymagane')
    // category: Yup.string().min().max().required(), - tu ma być coś a'la string.oneOf([coś tam])
  });

  type Props = InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Props>({ resolver: yupResolver(schema) });

  const router = useRouter();

  const submitForm: SubmitHandler = async (data) => {
    console.log(data);
    router.push('confirm');
  };

  return (
    <Form className="text-center" onSubmit={handleSubmit(submitForm)}>
      <FormGroup className="m-3" controlId="name">
        <span className={styles.error}>{errors?.name?.message}</span>
        <FormControl
          type="text"
          placeholder="Imię i Nazwisko"
          autoComplete="name"
          {...register('name')}
        />
      </FormGroup>

      <FormGroup className="m-3" controlId="username">
        <span className={styles.error}>{errors?.username?.message}</span>
        <FormControl
          type="text"
          placeholder="Nazwa użytkownika"
          autoComplete="username"
          {...register('username')}
        />
      </FormGroup>

      <FormGroup className="m-3" controlId="email">
        <span className={styles.error}>{errors?.email?.message}</span>
        <FormControl
          type="text"
          placeholder="E-mail"
          autoComplete="email"
          {...register('email')}
        />
      </FormGroup>

      <FormGroup className="m-3" controlId="phone">
        <span className={styles.error}>{errors?.phone?.message}</span>
        <FormControl
          type="text"
          placeholder="Telefon kontaktowy"
          autoComplete="phone"
          {...register('phone')}
        />
      </FormGroup>

      <FormGroup className="m-3" controlId="password">
        <span className={styles.error}>{errors?.password?.message}</span>
        <FormControl
          type="password"
          placeholder="Hasło"
          autoComplete="current-password"
          {...register('password')}
        />
      </FormGroup>

      <FormGroup>
        {['Student', 'Tutor'].map((value) => (
          <Form.Check
            inline
            label={value}
            value={value}
            type="radio"
            id={`inline-radio-${value}`}
            key={value}
            {...register('category')}
          />
        ))}
      </FormGroup>

      <FormText>Rejestrując się akceptujesz warunki regulaminu</FormText>

      <FormGroup>
        <Button variant="primary" type="submit" className="m-3">
          Zarejestruj się
        </Button>
      </FormGroup>
    </Form>
  );
};
