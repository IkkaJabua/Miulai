import { ReactNode } from 'react';
import styles from './ModuleList.module.scss';

interface Props {
    children: ReactNode;
}

const Module = ({children} : Props) => {

    return(
        <div className={styles.container}>
            {children}
        </div>  
    )
}

export default Module;