import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  tip: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  max-width: 500px;
  margin-top: 80px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  color: #afafaf;
  max-width: 500px;
  margin-top: 20px;
  font-weight: 200;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 675px;
  display: flex;
  margin-left: auto;
  margin-right: auto;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${props =>
      props.tip &&
      css`
        border-color: #c53030;
      `}
    }

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 75px;
    height: 70px;
    background: #383838;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#00b7ff')};
    }
  }
`;

export const Results = styled.p`
  border-radius: 0.5rem;
  font-size: 14px;
  color: #afafaf;
  padding: 2px 10px;
  margin-right: 45px;
  margin-top: 35px;
  text-align: end;
`;

export const Countries = styled.div`
  max-width: 990px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  & > * {
    margin-bottom: 16px;
  }

  a {
    background: #111;
    border-radius: 5px;
    width: 100%;
    min-width: 250px;
    padding: 24px 4px 24px 16px;
    margin: 5px;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s;
    display: flex;
    flex: 1 0 0%;

    &:hover {
      transform: scale(1.025);
      background: #222;
    }

    img {
      width: 96px;
      height: 64px;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #fff;

        span {
          background-color: #3d3d3d;
          border-radius: 0.5rem;
          font-size: 14px;
          color: #afafaf;
          padding: 2px 10px;
          margin-left: 15px;
        }
      }

      p {
        font-size: 18px;
        color: #666;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }

  button {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(197, 48, 48, 0.5);
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: rgba(197, 48, 48, 0.8);
    }

    svg:hover {
      transform: scale(1.3);
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
  text-align: center;
`;
