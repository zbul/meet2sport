import styled from 'styled-components';
import { View, Text } from 'native-base';

const FormWrapper = styled(View)`
  padding: 20px;
`;

const PageWrapper = styled(View)`
  padding-top: 50px;
`;

const SignInWrapper = styled(View)`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 20px;
`;

const SignInLink = styled(Text)`
  color: #00F;
  text-decoration: underline;
`;

export {
  FormWrapper,
  PageWrapper,
  SignInWrapper,
  SignInLink,
};
