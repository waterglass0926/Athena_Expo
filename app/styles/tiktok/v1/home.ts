import styled from 'styled-components/native';

interface Props {
  active: boolean;
};

export const Container = styled.View`
  flex: 1;
  background: #000000;
`;

export const Separator = styled.Text`
  font-size: 15px;
  color: #FFFFFF;
  opacity: 0.2;
`;

export const Header = styled.View`
  flex-direction: row;
  position: absolute;
  align-items: center;
  align-self: center;
  margin-top: 5%;
  height: 10%;
  z-index: 10;
`;

export const Text = styled.Text`
  padding: 5px;
  font-size: ${(props: Props) => (props.active ? '20px' : '18px')};
  font-weight: bold;
  color: #FFFFFF;
  opacity: ${(props: Props) => (props.active ? '1' : '0.5')};
`;

export const Tab = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;

export const Feed = styled.View`
  position: absolute;
  flex: 1;
  z-index: -1;
`;