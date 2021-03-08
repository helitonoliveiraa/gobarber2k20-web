import { keyframes } from 'styled-components';

export const APPEAR_FROM_LEFT = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const APPEAR_FROM_RIGHT = keyframes`
from {
  opacity: 0;
  transform: translateX(5rem);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`;

export const CARD_APPEAR_FROM_RIGHT = keyframes`
  from {
  opacity: 0;
  transform: translateX(4rem);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`;

export const FADE_IN_TEXT = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 0.2;
}
`;

export const FADE = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const BLINK_NEXT_APPOINTMENT = keyframes`
0% { border: 2px solid rgba(255, 144, 0, 0.3) }
25% { border: 2px solid rgba(255, 144, 0, 0.5) }
50% { border: 2px solid rgba(255, 144, 0, 0.8) }
75% { border: 2px solid rgba(255, 144, 0, 0.5) }
100% { border: 2px solid rgba(255, 144, 0, 0.3)}
`;

export const AVATAR_APPEAR_FROM_TOP = keyframes`
0% {
  opacity: 0;
  transform: translateY(-8rem);
}
10% {
  opacity: 1;
  transform: translateY(0);
}
30% {
  opacity: 1;
  transform: translateY(-1.5rem);
}
50% {
  opacity: 1;
  transform: translateY(0);
}
65% {
  opacity: 1;
  transform: translateY(-0.7rem);
}
80% {
  opacity: 1;
  transform: translateY(0);
}
90% {
  opacity: 1;
  transform: translateY(-0.3rem);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

export const FADE_ICON_IN_AVATAR = keyframes`
0% {
  opacity: 0;
}
90% {
  opacity: 0.01;
}
100% {
  opacity: 1;
}
`;
