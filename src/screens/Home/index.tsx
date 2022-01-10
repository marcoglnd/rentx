import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import {
  Container,
  Header,
  TotaCars,
  HeaderContent
} from './styles';

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor='transparent'
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotaCars>
            Total de 12 carros
          </TotaCars>
        </HeaderContent>
      </Header>
    </Container>
  );
}