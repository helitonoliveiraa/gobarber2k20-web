import React, { useCallback, useRef, useState } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import getValidationErrors from '../../utils/validationErros';

import { useAuth } from '../../context/hooks/Auth';
import { useToast } from '../../context/hooks/Toast';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  // eslint-disable-next-line indent
  Container,
  Content,
  AnimationContainer,
  Background,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleLogin = useCallback(
    async (data: SignInFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail é obrigatório'),
          password: Yup.string().required('Senha é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação!',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      } finally {
        setLoading(false);
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Content
        initial={{ scaleY: 1, opacity: 1 }}
        animate={{ scaleY: 1, opacity: 1 }}
        exit={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleLogin}>
            <h1>Faça seu logon</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              type="password"
              name="password"
              icon={FiLock}
              placeholder="Senha"
            />

            <Button type="submit" loading={loading}>
              Entrar
            </Button>

            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Form>

          <Link to="/signup">
            <FiLogIn size="2rem" />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>

      <Background
        initial={{ translateX: 0, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        exit={{ translateX: -700, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </Container>
  );
};

export default SignIn;
