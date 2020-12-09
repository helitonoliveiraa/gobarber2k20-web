import React from 'react';
import {
  // eslint-disable-next-line indent
  FiArrowLeft,
  FiMail,
  FiLock,
  FiUser,
} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="email" icon={FiUser} placeholder="Nome" />

        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input name="password" icon={FiLock} placeholder="Senha" />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="teste">
        <FiArrowLeft size={20} />
        Voltar para login
      </a>
    </Content>
  </Container>
);

export default SignUp;
