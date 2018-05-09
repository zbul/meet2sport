import styled from 'styled-components';
import { View, Button, Text } from 'native-base';
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

export {
  PageWrapper,
  BottomButton,
  MapEvent,
  MapWrapper,
  TextBold,
};
