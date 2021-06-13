import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './recruit.module.css';

const Recruitment = () => {

    const history = useHistory();


    return (
        <>
        <div className={styles.n1}>
            <div className={styles.main}>
                <div className={styles.nt}>오코와 함께 성장할<br/> 크루를 모집합니다</div>
                <img className={styles.img} src="https://storage.googleapis.com/staging.clothes-list-react-314206.appspot.com/source.svg" alt="source1"/>
                <div className={styles.nt1}>"오늘 뭐 입지?"</div>
                   <p className={styles.oo}>
                단순하면서도 큰 고민인 오늘의 코디를 돕기 위해 오코는 만들어졌습니다.
                  사계절이라고 말하기가 무색할정도로 날씨의 변동이 잦아지면서 오늘과 어울리는 옷을 찾는 시간은 더 늘어나고 있습니다.
                  오코는 데이터를 통해 지금 날씨에 어울리는 코디를 찾아줍니다.
                  </p>
              </div>
        </div>

        <div className={styles.n2}>
            <img className={styles.img2} src="https://storage.googleapis.com/staging.clothes-list-react-314206.appspot.com/source2.svg" alt="source2"/>
            <div className={styles.nt2}>크루가 되어 오코에서 홍보하세요</div>
            <p className={styles.oo}>
            오늘 날씨에 어울리는 옷을 보여주기 위해 많은 코디 사진이 필요합니다. 오코는 크루들의 코디 사진을 제공받는 대신,
            크루들에게 자신의 인스타그램, 쇼핑몰, 마켓, 블로그 등 홍보할 수 있도록 도와주려 합니다. 
             </p>
             <p className={styles.tt}>
            제공해준 코디 사진에 크루들의 계정이나 쇼핑몰의 링크를 걸어
            이용자가 코디가 마음에 들었을 때 쉽게 유입시키고 팬을 만들 수 있습니다. 
            </p>
        </div>
        
        <div className={styles.n3}>
            <img className={styles.img2} src="https://storage.googleapis.com/staging.clothes-list-react-314206.appspot.com/source3.svg" alt="source3"></img>
            <div className={styles.nt2}>패션에 관심 많은 그대에게</div>
            <p className={styles.oo}>
            코디에 관심이 많다면 유명해지고 싶은 사람, 셀럽, 쇼핑몰 사장님 등 모두 크루로 지원가능합니다.
            아래의 양식에 따라 크루로 지원하고 무료로 홍보하세요 
             </p>
             <p className={styles.tt}>
                오코는 많은 분들이 참고할 수 있는 데일리룩 코디를 우선적으로 모집합니다. 우선적으로 선별된 크루에게 
                DM, 이메일로 연락하겠습니다.
            </p>
            <div onClick={()=> history.push('/import')} className={styles.recruit}>지원하기</div>
        </div>

       

        </>
    )

};

export default Recruitment;