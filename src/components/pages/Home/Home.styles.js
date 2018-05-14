import styled from 'styled-components';
import { Button, View, Text } from 'native-base';

const ActionButton = styled(Button)`
  height: 100px;
  width: 150px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const ButtonWrapper = styled(View)`
  margin-top: 50px;
`;

const CenteredText = styled(Text)`
  text-align: center;
  font-size: 15px;
`;

const TextBold = styled(Text)`
  font-weight: bold;
`;

export { ActionButton, ButtonWrapper, CenteredText, TextBold };
