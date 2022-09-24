import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary3,
  },
  title: {
    fontFamily: Fonts.HelveticaBold,
    fontSize: hp(3.5),
  },
  titleDark: {
    fontFamily: Fonts.HelveticaBold,
    fontSize: hp(3.5),
    color: Colors.primary,
  },
  containerContent: {
    alignItems: 'center',
    marginTop: hp(7),
    paddingHorizontal: wp(5),
  },
  bottom: {
    bottom: hp(1.2),
  },
  bottom20: {
    bottom: 20,
  },
  description: {
    fontFamily: Fonts.HelveticaLight,
    fontSize: hp(2),
    color: Colors.neutral,
    textAlign: 'center',
  },
});

export default styles;
