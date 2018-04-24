import styled from 'styled-components';
import { View, Text } from 'native-base';

const LogoWrapper = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoText = styled(Text)`
  font-size: 36px;
`;

export {
  LogoWrapper,
  LogoText,
};
