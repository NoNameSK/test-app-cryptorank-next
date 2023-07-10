'use client'

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Wrapper = styled.section`
  padding: 4em;
`;

export default function Home() {
  return (
    <Wrapper >
      <Title>
        Choose what you need!
      </Title>
    </Wrapper >
  )
}
