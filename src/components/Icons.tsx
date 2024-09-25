import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconsProps) => {
  switch (name) { // if circle is detected color and icon, name="circle-thin"
    case 'circle':
      return <Icon name="circle-thin" size={38} color="#F7CD2E" />;
      break;                 //if cross is detected color and icon, name="times"
    case 'cross':
      return <Icon name="times" size={38} color="#38CC77" />;
      break;

      default:
        return <Icon name="pencil" size={38} color="#0D0D0D" />;
  }
  
};

export default Icons;
