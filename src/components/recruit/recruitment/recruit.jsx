import React from 'react';
import styles from './recruit.module.css';

const Recruitment = () => {
    return (
        <>
        <section className={styles.n1}>
        <div className={styles.main}>
 
        <div className={styles.nt}>오코와 함께 성장할<br/> 크루를 모집합니다</div>
        <img className={styles.img} src="https://storage.googleapis.com/staging.clothes-list-react-314206.appspot.com/source.svg" alt=""/>
        <div className={styles.nt1}>"오늘 뭐 입지?"</div>
        <p className={styles.oo}>
        단순하면서도 큰 고민인 오늘의 코디를 돕기 위해 오코는 만들어졌습니다.
        사계절이라고 말하기가 무색할정도로 날씨의 변동이 잦아지면서 오늘과 어울리는 옷을 찾는 시간은 더 늘어나고 있습니다.
        </p>
        </div>
        </section>

        <section className={styles.n2}>
        <div className={styles.nt2}>"오늘 뭐 입지?"</div>
        <p className={styles.oo}>
        ㅇdd
        </p>
        </section>
        </>
    )

};

export default Recruitment;