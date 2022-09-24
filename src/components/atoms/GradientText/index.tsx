import React, {memo} from 'react';
import {Text, TextProps} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {Colors} from 'themes';

const GradientText = (props: TextProps) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={[Colors.primary3, Colors.primary4]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text {...props} style={[props.style, styles.opacity]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default memo(GradientText);
