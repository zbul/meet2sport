import React from 'react';
import { Image } from 'react-native';

import LogoImage from 'static/img/logo.png';

import {
  LogoWrapper,
  LogoText,
} from './Logo.styles';

const Logo = () => (
  <LogoWrapper>
    <Image style={{ width: 130, height: 130 }} source={LogoImage} />
    <LogoText>Meet2Sport</LogoText>
  </LogoWrapper>
);

export default Logo;
