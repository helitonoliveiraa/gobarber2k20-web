/* eslint-disable prettier/prettier */
import React, { ChangeEvent, useCallback, useRef } from 'react';
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
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();
  const { addToast } = useToast();

  const { user, updateUser } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail é obrigatório'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: (val: string) => !!val.length,
            then: Yup.string()
              .min(6, 'Mínimo de 6 dígitos')
              .required('Nova senha é obrigatória'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: (val: string) => !!val.length,
              then: Yup.string().required('Confirme a nova senha'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password'), null], 'Confirmação incorreta'),
        });

        await schema.validate(data, { abortEarly: false });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
              old_password,
              password,
              password_confirmation,
            }
            : {}),
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        addToast({
          type: 'success',
          title: 'Perfil atualizado!',
          description:
            'Suas informações do perfil foram atualizadas com sucesso!',
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
          title: 'Erro na atualização!',
          description: 'Ocorreu um erro ao atualizar perfil, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  const handleAvatarChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const data = new FormData();

        data.append('avatar', event.target.files[0]);

        const response = await api.patch('/users/avatar', data);

        updateUser(response.data);

        addToast({
          type: 'success',
          title: 'Avatar atualizado!',
        });
      }
    },
    [addToast, updateUser],
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

            <label htmlFor="avatar">
              <FiCamera />

              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
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
              type="password"
              name="old_password"
              icon={FiLock}
              placeholder="Senha atual"
            />

            <Input
              type="password"
              name="password"
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
