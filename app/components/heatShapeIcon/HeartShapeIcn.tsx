import { useState } from 'react';
import style from './HeartShapeIcn.module.scss';

// Define the props interface
interface Props {
  isActive: boolean;
  isDisabled: boolean;
  onClick: () => void;
}

export default function HeartShapeBtn ({ isActive, isDisabled, onClick }: Props) {
  const [isClicked, setIsClicked] = useState(false);


  const handleClick = () => {
    if (!isDisabled) {
      setIsClicked(!isClicked);
      onClick();
    }
  };

  return (
    <button
      className={style.btn}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <img
        src={`/icons/heart${isDisabled ? 'Disabled' : (isClicked ? '2' : '1')}.svg`}
        alt="Heart Icon"
        width={32}
        height={32}
      />
    </button>
  );
}
