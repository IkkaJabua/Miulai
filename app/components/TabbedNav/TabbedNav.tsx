import Card from '../Card/Card';
import Tables from '../Table/Table';
import styles from './TabbedNav.module.scss';
import { useState } from 'react';
import Image from 'next/image';

const albumCardData = [
    {
        title: 'Lobster Telephone',
        id: 1,
        image: '/image/albumcard-demo-image1.png'
    },
    {
        title: 'Lobster Telephone',
        id: 2,
        image: '/image/albumcard-demo-image2.png'
    },
    {
        title: 'Lobster Telephone',
        id: 3,
        image: '/image/albumcard-demo-image3.png'
    },
    {
        title: 'Lobster Telephone',
        id: 4,
        image: '/image/albumcard-demo-image1.png'
    },
    {
        title: 'Lobster Telephone',
        id: 5,
        image: '/image/albumcard-demo-image2.png'
    },
    {
        title: 'Lobster Telephone',
        id: 6,
        image: '/image/albumcard-demo-image2.png'
    },
    {
        title: 'Lobster Telephone',
        id: 7,
        image: '/image/albumcard-demo-image2.png'
    }
]


const TabbedNav = () => {

    const [activeTab, setActiveTab] = useState('topSongs');

    const onTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.tabbedNav}>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'topSongs' ? styles.active : ''}`}
                    onClick={() => onTabClick('topSongs')}
                >
                    Top Songs
                </button>

                <button
                    className={`${styles.tab} ${activeTab === 'albums' ? styles.active : ''}`}
                    onClick={() => onTabClick('albums')}
                >
                    Albums
                </button>

                <button
                    className={`${styles.tab} ${activeTab === 'biography' ? styles.active : ''}`}
                    onClick={() => onTabClick('biography')}
                >
                    Biography
                </button>
            </div>

            <div className={styles.tabContent}>
                {
                    activeTab === 'topSongs'
                    &&
                    <Tables />
                }

                {
                    activeTab === 'albums'
                    &&
                    <div className={styles.cards}>
                        {
                            albumCardData.map((item) => <Card header={''} image={item.image} title={item.title} imageStyle={'normal'} />)
                        }
                    </div>
                }
                {activeTab === 'biography' &&
                    <div className={styles.bio}>
                        <Image src={'/image/albumcard-demo-image1.png'} alt='image' width={250} height={230} className={styles.image} />
                        <div className={styles.bioRightside}>
                            <h2>peggy goy</h2>
                            <p className={styles.text}>
                                Peggy Gou (born July 3, 1991) is a South Korean DJ and producer based in Berlin.
                                Originally from Incheon, South Korea, she began taking piano lessons at the age of 8 and moved to London during her
                                teenage years to study English. After a brief return to South Korea, Gou returned to England
                                to study at the London College of Fashion. During this time, she also honed her skills in music
                                production, a hobby she had started in her younger years. Upon moving to Berlin, Gou made her
                                official debut in 2016 with the EPs Art of War and Art of War II, both released by the independent
                                label Rekids, releasing a third EP titled Seek for Maktoop the same year. As her reputation grew,
                                she landed gigs at some of the world's most iconic venues, becoming the first Korean DJ to perform.
                            </p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default TabbedNav;
