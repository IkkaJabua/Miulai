import Image from 'next/image';
import { IconPropsInterface } from './interfaces/icon-props.interface';
import { IconType } from './types/icon.type';

const Icon: IconType = (props: IconPropsInterface) => {
  const src: string = `/icon/${props.name}${props.isActive ? '-active' : ''}.svg`;

  return (
    <Image src={src} alt="icon" width={24} height={24} onClick={props.onClick} />
  );
};

export default Icon;
