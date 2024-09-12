import Image from 'next/image';
import { IconPropsInterface } from './interfaces/icon-props.interface';
import { IconType } from './types/icon.type';
import { Height } from '@mui/icons-material';

const Icon: IconType = (props: IconPropsInterface) => {
  const src: string = `/icon/${props.name}${props.isActive ? '-active' : ''}.svg`;

  return (
    <Image src={src} alt="icon" width={props.width} height={props.height} onClick={props.onClick} />
  );
};

export default Icon;
