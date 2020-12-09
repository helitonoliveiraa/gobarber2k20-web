import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input name="password" icon={FiLock} placeholder="Senha" />

        <Button type="submit">Entrar</Button>

        <a href="teste">Esqueci minha senha</a>
      </form>

      <a href="teste">
        <FiLogIn size={20} />
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
