import React from 'react';
import { FiClock, FiPower } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../context/hooks/Auth';

// eslint-disable-next-line prettier/prettier
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Gobarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower size={20} />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>

          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>

            <div>
              <img
                src="https://avatars.githubusercontent.com/u/45343619?s=60&v=4"
                alt="Héliton Oliveira"
              />

              <strong>Héliton Oliveira</strong>

              <span>
                <FiClock size={24} />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhâ</strong>

            <Appointment>
              <span>
                <FiClock size={20} />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/45343619?s=60&v=4"
                  alt="Héliton Oliveira"
                />
                <strong>Héliton Oliveira</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock size={20} />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/45343619?s=60&v=4"
                  alt="Héliton Oliveira"
                />
                <strong>Héliton Oliveira</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock size={20} />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/45343619?s=60&v=4"
                  alt="Héliton Oliveira"
                />
                <strong>Héliton Oliveira</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock size={20} />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/45343619?s=60&v=4"
                  alt="Héliton Oliveira"
                />
                <strong>Héliton Oliveira</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>batata</Calendar>
      </Content>
    </Container>
  );
};
export default Dashboard;
