import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  z-index: -1;
`;

export const Details = styled.View`
  position: absolute;
  bottom: 0;
  flex-direction: column;
  padding: 20px 10px;
  width: 65%;
  z-index: 10;
`;

export const User = styled.Text`
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const Tags = styled.Text`
  padding: 5px 0;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  color: #FFFFFF;
`;
export const MusicBox = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Music = styled.Text`
  flex-shrink: 1;
  padding: 5px 5px 5px 15px;
  font-size: 15px;
  color: #FFFFFF;
`;

export const Actions = styled.View`
  position: absolute;
  right: 10px;
  bottom: 0;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  z-index: 10;
`;

export const BoxAction = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: column;
  padding: 10px 0;
`;

export const TextAction = styled.Text`
  padding: 5px 0;
  color: #FFFFFF;
`;