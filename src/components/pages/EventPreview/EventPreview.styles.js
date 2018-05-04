import styled from 'styled-components';
import { View, Button, Text } from 'native-base';
import MapView from 'react-native-maps';


const FormWrapper = styled(View)`
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PageWrapper = styled(View)`
  padding-top: 10px;
`;

const MapWrapper = styled(View)`
  padding-top: 10px;
  height: 200px;
`;

const BottomButton = styled(Button)`
  margin-top: 40px;
`;

const MapEvent = styled(MapView)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const TextBold = styled(Text)`
  font-weight: bold;
`;

export {
  FormWrapper,
  PageWrapper,
  BottomButton,
  MapEvent,
  MapWrapper,
  TextBold,
};
