import styled from 'styled-components';
import { View, Button, Label } from 'native-base';


const FormWrapper = styled(View)`
  padding: 20px;
`;

const PageWrapper = styled(View)`
  padding-top: 10px;
`;

const BottomButton = styled(Button)`
  margin-top: 200px;
`;

const UpperButton = styled(Button)`
  margin-top: 20px;
`;
const PlaceLabel = styled(Label)`
  margin-bottom: 20px;
`;


export {
  FormWrapper,
  PageWrapper,
  BottomButton,
  UpperButton,
  PlaceLabel,
};
