import styled from 'styled-components';
import { View, Label, Button } from 'native-base';

const FormWrapper = styled(View)`
  padding: 20px;
`;

const PageWrapper = styled(View)`
  padding-top: 50px;
`;

const EventsLabel = styled(Label)`
  margin-bottom: 20px;
`;

const EventsButton = styled(Button)`
  margin-top: 20px;
`;
export {
  FormWrapper,
  PageWrapper,
  EventsLabel,
  EventsButton,
};
