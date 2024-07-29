import { Col, Row } from 'antd'
import styles from './Table.module.scss'
import Image from 'antd'
import HeartShapeBtn from '../heatShapeIcon/HeartShapeIcn'
import getTableData from './getTableData'



export default () => {

    const tableData = getTableData();


    return (
        <div className={styles.mainContainer}>
            <Row className={styles.container}>
                <Col className={styles.cellNumber} span={1}>#</Col>
                <Col className={styles.headerSongname} span={7}>Song Name</Col>
                <Col className={styles.headerAlbum} span={6}>Album</Col>
                <Col className={styles.headerTime} span={6}>Time</Col>
                <Col className={styles.HeaderLike} span={3}></Col>
            </Row>
            {
                tableData.map((item) => (
                    <Row className={styles.musicTable} >
                        <Col className={styles.cellId} span={1}>
                            <div>{item.id}</div>
                        </Col>
                        <Col className={styles.cellName} span={7}>
                            <div className={styles.cellSongname}>
                                <img src={item.icon} width={48} height={48} alt={item.title} />
                                <div className={styles.fontGap}>
                                    <div className={styles.songTitle}>{item.title}</div>
                                    <div className={styles.songArtist}>{item.author}</div>
                                </div>
                            </div>
                        </Col>
                        <Col className={styles.cellAlbumName} span={6}>{item.album}</Col>
                        <Col className={styles.cellTimeName} span={6}>{item.time}</Col>
                        <Col className={styles.cellLike} span={3}>
                            <HeartShapeBtn isActive={false} isDisabled={false} onClick={() => { console.log("button clicked") }} />
                        </Col>
                    </Row>
                ))
            }
        </div>
    )
}