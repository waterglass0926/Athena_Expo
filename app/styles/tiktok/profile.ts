import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 50px;
  background: #FFFFFF;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: #DADADA;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Content = styled.View`
  padding: 10px;
  align-items: center;
`;

export const Avatar = styled.Image`
  align-self: center;
  margin-top: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Username = styled.Text`
  font-size: 18px;
  padding: 10px;
`;

export const Stats = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const StatsColumn = styled.View`
  align-items: center;
`;

export const StatsNumber = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`;

export const Separator = styled.Text`
  padding: 0 10px;
  font-size: 20px;
  color: #000;
  opacity: 0.1;
`;

export const StatsText = styled.Text`
  font-size: 12px;
  color: #8F8F91;
`;

export const ProfileColumn = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ProfileText = styled.Text`
  font-weight: bold;
`;

export const ProfileEdit = styled.TouchableOpacity.attrs({
  activityOpacity: 1,
})`
  padding: 10px 30px;
  border-width: 1.5px;
  border-color: #E6E6E6;
  border-radius: 2px;
  font-size: 12px;
`;

export const Bookmark = styled(Feather)`
  margin-left: 5px;
  padding: 5px;
  border-width: 1.5px;
  border-color: #E6E6E6;
  border-radius: 2px;
`;