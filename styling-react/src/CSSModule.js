import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            {/* className={[styles.wrapper, styles.inverted].join(' ')} 로 작성할 수도 있음*/}
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    )
}

export default CSSModule;