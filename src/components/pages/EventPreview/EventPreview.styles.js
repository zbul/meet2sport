import styled from 'styled-components';
import { View, Button, Text, ListItem } from 'native-base';
import { MapView } from 'expo';

const PageWrapper = styled(View)``;

const MapWrapper = styled(View)`
  height: 185px;
`;

const BottomButton = styled(Button)`
  margin-top: 10px;
`;

const MapEvent = styled(MapView)`
  height: 100%;
`;

const TextBold = styled(Text)`
  font-weight: bold;
`;

const ListItemWrapper = styled(ListItem)`
  align-items: center;
  justify-content: space-between;
`;

const MembersHeader = styled(Text)`
  margin: 30px 10px 10px;
  font-weight: bold;
  font-size: 20px;
`;

export {
  PageWrapper,
  BottomButton,
  MapEvent,
  MapWrapper,
  TextBold,
  ListItemWrapper,
  MembersHeader,
};
