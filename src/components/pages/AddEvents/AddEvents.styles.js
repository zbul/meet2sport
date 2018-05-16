import styled from 'styled-components';
import { View, Label, Button } from 'native-base';

const FormWrapper = styled(View)`
  padding: 20px;
`;

const EventsLabel = styled(Label)`
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const EventsButton = styled(Button)`
  margin-top: 20px;
`;

export {
  FormWrapper,
  EventsLabel,
  EventsButton,
};
