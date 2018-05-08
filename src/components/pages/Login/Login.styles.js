import styled from 'styled-components';
import { View, Text } from 'native-base';

const FormWrapper = styled(View)`
  padding: 20px;
`;

const PageWrapper = styled(View)`
  padding-top: 20px;
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

const SocialIconsWrapper = styled(View)`
  padding: 25px 50px 0;
  justify-content: space-around;
  flex-direction: row;
`;

export {
  FormWrapper,
  PageWrapper,
  SignInWrapper,
  SignInLink,
  SocialIconsWrapper,
};
