// import { useState } from 'react';
// import Image from 'next/image';
// import style from './HeartShapeBtn.module.scss';

// // Define the props interface
// interface Props {
//   isActive: boolean;
//   isDisabled: boolean;
//   onClick: () => void;
// }

// export default function HeartShapeBtn ({ isActive, isDisabled, onClick }: Props) {
//   const [isClicked, setIsClicked] = useState(false);

//   const getIconSource = () => {
//     if (isDisabled) {
//       return '/heartDisabled.svg';
//     } else if (isClicked) {
//       return '/heart2.svg';
//     } else {
//       return '/heart1.svg';
//     }
//   };

//   const handleClick = () => {
//     if (!isDisabled) {
//       setIsClicked(!isClicked);
//       onClick();
//     }
//   };

//   return (
//     <button
//       className={style.btn}
//       onClick={handleClick}
//       disabled={isDisabled}
//     >
//       <Image
//         src={getIconSource()}
//         alt="Heart Icon"
//         width={32}
//         height={32}
//       />
//     </button>
//   );
// }
