import styled from 'styled-components';
import { View, Text, ListItem } from 'native-base';

const ButtonWrapper = styled(View)`
  padding: 10px 10px 0;
`;

const TextSmall = styled(Text)`
  font-size: 10px;
  color: #5b5b5b;
`;

const ListItemWrapper = styled(ListItem)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export {
  ButtonWrapper,
  TextSmall,
  ListItemWrapper,
};
