import styled from 'styled-components';
import { Button, View, Text } from 'native-base';

const ActionButton = styled(Button)`
  height: 100px;
  width: 150px;
  margin-bottom: 10px;
  justifyContent: center
  alignItems: center;
  alignSelf: center;
`;

const ButtonWrapper = styled(View)`
  margin-top: 50px;
`;

const TimetableWrapper = styled(View)`
flex-direction: column;
justify-content: center;
align-items: center;  
`;

const CenteredText = styled(Text)`
  textAlign: center
  font-size: 15px;
`;

const TextBold = styled(Text)`
  font-weight: bold;
`;

export { ActionButton, ButtonWrapper, CenteredText, TextBold, TimetableWrapper };
