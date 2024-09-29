// 'use client'
// import { title } from 'process'
// import styles from './UserPlaylist.module.scss'
// import Image from 'next/image'
// import { useEffect, useState } from 'react'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import axios from 'axios'


// const UserPlaylist = () => {
//     const router = useRouter()
//     const [playlistdata, setPlylistdata] = useState([])

//     useEffect(() => {
//         axios.get('https://interstellar-1-pdzj.onrender.com/playlist')
//             .then((r) => {
//                 setPlylistdata(r.data)
//                 console.log(r.data)
//             })
//     }, [])






//     return (
//         <>
//             {
//                 playlistdata.map((item: any) =>
//                     <div className={styles.container} key={item.id}
//                         onClick={() => router.push(`playlists/${item.id}`)}
//                     >
//                         <div className={styles.hoveredImage} >
//                             <Image className={styles.cellImage} src={item.files?.url} width={234} height={251} alt='image' />
//                             {/* <img className={styles.cellImage} src={`./icon/albumicon3.svg`} width={234} height={251} alt='image' /> */}

//                             <div className={styles.buttons}>
//                                 <div className={styles.cellEdit}>
//                                     <Image src={'./icon/edit.svg'} width={24} height={24} alt={'edit button'} />
//                                 </div>
//                                 <div className={styles.cellDelete}>
//                                     <Image src={'./icon/delete.svg'} width={24} height={24} alt={'edit button'} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className={styles.font}>{item.name}</div>
//                     </div>
//                 )
//             }
//         </>
//     )
// }

// UserPlaylist.displayName = 'UserPlaylist';
// export default UserPlaylist;











'use client';

import styles from './UserPlaylist.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const UserPlaylist = () => {
    const router = useRouter();
    const [playlistData, setPlaylistData] = useState<any[]>([]); // Ensure type safety or adjust accordingly.

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const response = await axios.get('https://interstellar-1-pdzj.onrender.com/playlist');
                setPlaylistData(response.data);
            } catch (error) {
                console.error('Error fetching playlists:', error);
            }
        };

        fetchPlaylists();
    }, []);

    const handleCardClick = (id: string) => {
        router.push(`/playlists/${id}`);
    };

    
    const stopClickPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <>
            {playlistData.map((item) => (
                <div
                    className={styles.container}
                    key={item.id}
                    onClick={() => handleCardClick(item.id)} 
                >
                    <div className={styles.hoveredImage}>
                        <Image
                            className={styles.cellImage}
                            src={item.files?.url || '/icon/albumicon3.svg'} 
                            width={234}
                            height={251}
                            alt="playlist cover"
                        />

                        <div className={styles.buttons}>
                            <div className={styles.cellEdit} onClick={stopClickPropagation}>
                                <Image
                                    src={'/icon/edit.svg'}
                                    width={24}
                                    height={24}
                                    alt="edit button"
                                    onClick={() => console.log('Edit button clicked')} 
                                />
                            </div>
                            <div className={styles.cellDelete} onClick={stopClickPropagation}>
                                <Image
                                    src={'/icon/delete.svg'}
                                    width={24}
                                    height={24}
                                    alt="delete button"
                                    onClick={() => console.log('Delete button clicked')} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.font}>{item.name}</div>
                </div>
            ))}
        </>
    );
};

UserPlaylist.displayName = 'UserPlaylist';
export default UserPlaylist;
