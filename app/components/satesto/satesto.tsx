
import { Col, Row } from 'antd'
import styles from './satesto.module.scss'
import Image from 'antd'
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn'



export default () => {

    const tableData = [
        {
            icon: '/table-icon.png',
            title: 'Girls Are Fascinating',
            author: 'By Anetha',
            album: 'Mothearth',
            time: '3:54',
            id: 1
        }, {
            icon: '/table-icon2.svg',
            title: 'Smash My Heart',
            author: 'By Anetha',
            album: 'Pink',
            time: '3:54',
            id: 2
        }, {
            icon: '/table-icon3.svg',
            title: 'Blackbird',
            author: 'By Anetha',
            album: 'Cowboy Carter',
            time: '3:54',
            id: 3
        }, {
            icon: '/table-icon4.svg',
            title: 'Human',
            author: 'By Anetha',
            album: 'Zaba',
            time: '3:54',
            id: 4
        }, {
            icon: '/table-icon5.svg',
            title: 'Toes',
            author: 'By Anetha',
            album: 'Zaba',
            time: '3:54',
            id: 5
        }, {
            icon: '/table-icon6.svg',
            title: 'Picture Of You',
            author: 'By Anetha',
            album: 'Genesys II',
            time: '3:54',
            id: 6
        }, {
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
        }, {
            icon: '/table-icon9.svg',
            title: 'Girls Are Fascinating',
            author: 'By Anetha',
            album: 'Poker Face',
            time: '3:54',
            id: 9
        }, {
            icon: '/table-icon10.svg',
            title: 'The man',
            author: 'By Anetha',
            album: 'Lover',
            time: '3:54',
            id: 10
        }, {
            icon: '/table-icon11.svg',
            title: 'So Fresh, So  Clean',
            author: 'By Anetha',
            album: 'Stankonia',
            time: '3:54',
            id: 11
        }
    ]



    return (
        <div className={styles.mainContainer}>
            <Row className={styles.container}>
                <Col className={styles.cellNumber} span={1}>#</Col>
                <Col className={styles.headerSongname} span={4}>Song Name</Col>
                <Col className={styles.headerAlbum} span={6}>Album</Col>
                <Col className={styles.headerTime} span={4}>Time</Col>
                {/* <Col className={styles.HeaderLike} span={3}></Col> */}
            </Row>
            {
                tableData.map((item) => (
                    <Row className={styles.musicTable} >
                        <Col className={styles.cellId} span={1}>
                            <div>{item.id}</div>
                        </Col>
                        <Col className={styles.cellName} span={4}>
                            <div className={styles.cellSongname}>
                                <img src={item.icon} width={48} height={48} alt={item.title} />
                                <div className={styles.fontGap}>
                                    <div className={styles.songTitle}>{item.title}</div>
                                    <div className={styles.songArtist}>{item.author}</div>
                                </div>
                            </div>
                        </Col>
                        <Col className={styles.cellAlbumName} span={6}>{item.album}</Col>
                        <Col className={styles.cellTimeName} span={4}>{item.time}</Col>
                        <Col className={styles.cellLike} span={3}>
                            <HeartShapeBtn isActive={false} isDisabled={false} onClick={() => { console.log("button clicked") }} />
                        </Col>
                    </Row>
                ))
            }
        </div>
    )
}