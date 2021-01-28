import React, { useCallback, useRef } from 'react';
import {
  // eslint-disable-next-line indent
  FiCamera,
  FiArrowLeft,
  FiMail,
  FiLock,
  FiUser,
} from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import getValidationErrors from '../../utils/validationErros';
import { useToast } from '../../context/hooks/Toast';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  // eslint-disable-next-line indent
  Container,
  Header,
  HeaderContent,
  PhotoContainer,
  Content,
  AnimationContainer,
} from './styles';
import { useAuth } from '../../context/hooks/Auth';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();
  const { addToast } = useToast();

  const { user } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail é obrigatório'),
          password: Yup.string()
            .required('Senha é obrigatória')
            .min(6, 'No mínimo 6 digitos'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/users', data);

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Vocẽ já pode fazer seu logon no GoBarber!',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro!',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>

          <PhotoContainer>
            <img src={user.avatar_url} alt={user.name} />

            <button type="button">
              <FiCamera />
            </button>
          </PhotoContainer>
        </HeaderContent>
      </Header>

      <Content>
        <AnimationContainer>
          <Form
            ref={formRef}
            initialData={{
              name: user.name,
              email: user.email,
            }}
            onSubmit={handleSubmit}
          >
            <h1>Meu perfil</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              containerStyle={{ marginTop: 24 }}
              type="old_password"
              name="password"
              icon={FiLock}
              placeholder="Senha atual"
            />

            <Input
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Nova senha"
            />

            <Input
              type="password"
              name="password_confirmation"
              icon={FiLock}
              placeholder="Confirmar senha"
            />

            <Button type="submit">Confirmar mudanças</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Profile;
