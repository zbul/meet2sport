import React from 'react';
import { Image } from 'react-native';

import LogoImage from 'static/img/logo.png';

import { LogoWrapper } from './Logo.styles';

const Logo = () => (
  <LogoWrapper>
    <Image style={{ width: 350, height: 175 }} source={LogoImage} />
  </LogoWrapper>
);

export default Logo;
