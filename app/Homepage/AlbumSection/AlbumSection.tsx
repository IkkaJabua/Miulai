import Card from "@/app/components/Card/Card";
import styles from "./AlbumSection.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const AlbumSection = () => {
  const [cardData, setCardData] = useState<any>([]);

  useEffect(() => {
    axios.get("https://interstellar-1-pdzj.onrender.com/album").then((r) => {
      setCardData(r.data);
      // console.log(r.data[0].musics)
      console.log(r.data);
    });
  }, []);

  return (
    <div className={styles.container}>

      <div className={styles.album}>
        {cardData.map((item: any) => (
          <div className={styles.box} key={item.id}>
            <Card
              header={""}
              key={item.id}
              image={item.file?.url}
              title={item.albumName}
              subtitle={item.artistName}
              imageStyle={"normal"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumSection;

// import Card from '@/app/components/Card/Card';
// import styles from './AlbumSection.module.scss';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const AlbumSection = () => {
//     const [cardData, setCardData] = useState<any>([]);

//     useEffect(() => {
//         axios.get('https://interstellar-1-pdzj.onrender.com/album')
//             .then((r) => {
//                 setCardData(r.data);
//                 console.log(r.data); // Log the API response to see its structure
//             });
//     }, []);

//     return (
//         <div className={styles.container}>
//             <div className={styles.album}>
//                 {
//                     cardData.map((item: any) => {
//                         // Extract the URL of the first file if it exists
//                         const fileUrl = item.files && item.files.length > 0 ? item.files[0].url : '/image/default.png';
//                         const albumName = item.albumName || 'Unknown Album';
//                         const artistName = item.artistName || 'Unknown Artist';

//                         return (
//                             <div className={styles.box} key={item.id}>
//                                 <Card
//                                     header={''}
//                                     image={fileUrl}
//                                     title={albumName}
//                                     subtitle={artistName}
//                                     imageStyle={'normal'}
//                                 />
//                             </div>
//                         );
//                     })
//                 }
//             </div>
//         </div>
//     );
// }

// export default AlbumSection;
