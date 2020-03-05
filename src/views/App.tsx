import * as React from 'react';
import './app.scss';
import { styled, css } from '../theme/themedStyledComponents';

const letras = [
  {
    nombre: 'A',
    position: css`
      top: 20px;
      left: 50%;
    `,
  },
  {
    nombre: 'B',
    position: css`
      top: 25px;
      left: 55%;
    `,
  },
  {
    nombre: 'C',
    position: css`
      top: 40px;
      left: 60%;
    `,
  },
  {
    nombre: 'D',
    position: css`
      top: 60px;
      left: 65%;
    `,
  },
  {
    nombre: 'E',
    position: css`
      top: 85px;
      left: 70%;
    `,
  },
  {
    nombre: 'F',
    position: css`
      top: 115px;
      left: 75%;
    `,
  },
  {
    nombre: 'G',
    position: css`
      top: 150px;
      left: 80%;
    `,
  },
  { nombre: 'H' },
  { nombre: 'I' },
  { nombre: 'J' },
  { nombre: 'K' },
  { nombre: 'L' },
  { nombre: 'M' },
  { nombre: 'N' },
  { nombre: 'O' },
  { nombre: 'P' },
  { nombre: 'Q' },
  { nombre: 'R' },
  { nombre: 'S' },
  { nombre: 'T' },
  { nombre: 'U' },
  { nombre: 'V' },
  { nombre: 'W' },
  { nombre: 'X' },
  { nombre: 'Y' },
  { nombre: 'Z' },
];

export const App = () => (
  <RoscoWrapper>
    {letras.map((letra, key) => (
      <Letra id={key} letra={letra}>
        {letra.nombre}
      </Letra>
    ))}
  </RoscoWrapper>
);

const RoscoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Letra = styled.div`
  ${p => p.letra.position};
  position: absolute;
`;
