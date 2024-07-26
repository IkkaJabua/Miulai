import { time } from 'console'
import styles from './Table.module.scss'
import Image from 'next/image'
import Heart from '../CardItems/CardHeart/Heart';
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn';



export default () => {

    const tableData = [
        {
            icon: '/table-icon.png',
            title: 'Girls Are Fascinating',
            author: 'By Anetha',
            album: 'Mothearth',
            time: '3:54',
            id: 1
        },{
            icon: '/table-icon2.svg',
            title: 'Smash My Heart',
            author: 'By Anetha',
            album: 'Pink',
            time: '3:54',
            id: 2
        },{
            icon: '/table-icon3.svg',
            title: 'Blackbird',
            author: 'By Anetha',
            album: 'Cowboy Carter',
            time: '3:54',
            id: 3
        },{
            icon: '/table-icon4.svg',
            title: 'Human',
            author: 'By Anetha',
            album: 'Zaba',
            time: '3:54',
            id: 4
        },{
            icon: '/table-icon5.svg',
            title: 'Toes',
            author: 'By Anetha',
            album: 'Zaba',
            time: '3:54',
            id: 5
        },{
            icon: '/table-icon6.svg',
            title: 'Picture Of You',
            author: 'By Anetha',
            album: 'Genesys II',
            time: '3:54',
            id: 6
        },{
            icon: '/table-icon7.svg',
            title: 'End Of An Era',
            author: 'By Anetha',
            album: 'Radical Optimism',
            time: '3:54',
            id: 7
        }, {
            icon: '/table-icon8.svg',
            title: 'Your Art',
            author: 'By Anetha',
            album: 'I Hear You',
            time: '3:54',
            id: 8
        },{
            icon: '/table-icon9.svg',
            title: 'Girls Are Fascinating',
            author: 'By Anetha',
            album: 'Poker Face',
            time: '3:54',
            id: 9
        },{
            icon: '/table-icon10.svg',
            title: 'The man',
            author: 'By Anetha',
            album: 'Lover',
            time: '3:54',
            id: 10
        },{
            icon: '/table-icon11.svg',
            title: 'So Fresh, So  Clean',
            author: 'By Anetha',
            album: 'Stankonia',
            time: '3:54',
            id: 11
        }
    ]


    return (
        <div className={styles.musicTable}>
            <div className={styles.tableHeader}>
                <div className={styles.headerNumber}>#</div>
                <div className={styles.headerSongname}>Song Name</div>
                <div className={styles.headerAlbum}>Album</div>
                <div className={styles.headerTime}>Time</div>
            </div>
            <div className={styles.tableBody}>
                {tableData.map((item) => (
                    <div className={styles.tableRow}>
                        <div className={styles.cellNumber}>{item.id}</div>
                        <div className={styles.cellSongname}>
                            <Image src={item.icon} width={48} height={48} alt={item.title}/>
                            <div className={styles.fontGap}>
                                <div className={styles.songTitle}>{item.title}</div>
                                <div className={styles.songArtist}>{item.author}</div>
                            </div>
                        </div>
                        <div className={styles.cellAlbum}>{item.album}</div>
                        <div className={styles.cellTime}>{item.time}</div>
                        <div className={styles.cellFavorite}>
                            <HeartShapeBtn isActive={false}  isDisabled={false} onClick={() => {console.log("button clicked")}}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
    
