import * as React from 'react';
import './style.css';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
export default function CustomerThank() {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
  const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
  const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
  let navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Title>Hello World!</Title>

        <div>
          thanks customer we register your profile please check your mail
        </div>
        <p>
          <Button primary onClick={() => navigate('/App')}>
            Back To DashBoard{' '}
          </Button>
        </p>
        <p>
          <Link to={'/RegisterUser'}>Details Registered User</Link>
        </p>
      </Wrapper>
    </>
  );
}
