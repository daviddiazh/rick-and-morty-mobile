import React from 'react';
import IcoMoon from 'react-icomoon';
import {scale} from 'react-native-size-matters';
import {Path, Svg} from 'react-native-svg';
import iconsSet from './selection.json';
import { IconProps } from './interface';

export const Icon: React.FC<IconProps> = ({
  name = 'bank',
  size = scale(15),
  color = '#000',
  disableFill = true,
}) => (
  <IcoMoon
    native
    SvgComponent={Svg}
    PathComponent={Path}
    iconSet={iconsSet}
    size={scale(size)}
    color={color}
    icon={name}
    disableFill={disableFill}
  />
);
