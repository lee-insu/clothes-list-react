import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {fireStore,storage} from '../../../service/firebase';
import styles from './import-file.module.css';

const ImportFile = () => {

    
    const [insta, setInsta] = useState("");
    const [email,setEmail] = useState("");
    const [shop,setShop] = useState("");
    const [img,setImg] =useState("");
    
    const fileInput = useRef();
    const history = useHistory();


    const onSubmit = async(e) => {
        e.preventDefault();
        await fireStore.collection('recruit').add({
            insta,
            email,
            img:img.name,
            shop,
            month:new Date().getMonth(),
            day:new Date().getDate(),
        }); 
        
        if(img !== null) {
            storage.ref(`imgs/${img.name}`).put(img)

        }
        setInsta('');
        setEmail('');
        setShop('');
        fileInput.current.value='';
        alert('지원이 완료되었습니다. 감사합니다!');
        history.push('/recruit');

    } 

    const onChange = (e) => {
        const {target:{name,value}} = e;

        if(name === 'insta') {
            setInsta(value);
        }
        else if (name === 'email') {
            setEmail(value);
        }
        else if (name === 'img') {
            setImg(e.target.files[0]);
        }
        else if (name === 'shop') {
            setShop(value);
        }
    }


    return (
        <>
        <div className={styles.n1}>
             <img className={styles.img} src="https://storage.googleapis.com/staging.clothes-list-react-314206.appspot.com/source4.svg" alt="source4"/>

             <div className={styles.nt1}>
                 머리부터 발끝까지!
             </div>
                <p className={styles.oo}>
                1번 또는 2번의 비율로 여러분의 스타일을 가장 잘 들어낼 수 있는 사진을 올려주세요.
                연락 받을 인스타 계정이나 이메일을 적어주시면 빠른 시일 내에 연락하겠습니다.
                개인 쇼핑몰을 하고 있다면 쇼핑몰 사이트도 적어주세요.(블로그,인스타 마켓 모두 가능)
                </p>
        
               
        <form className={styles.form} onSubmit={onSubmit}>
          
          <div className={styles.fileBox}>
          <div className={styles.name}>{img ? img.name:'파일이 없습니다' }</div>
          <label className={styles.fileLabel} htmlFor="file">사진 올리기</label>
          <input 
            className={styles.file}
            id="file"
            type="file"
            name="img"
            onChange={onChange}
            ref = {fileInput}
            required
            />
            </div>


            <input 
            type="text"
            placeholder="연락 받을 인스타 계정"
            name ="insta"
            value={insta}
            onChange={onChange}
            />

            <input 
            type="text"
            placeholder="연락 받을 이메일 계정"
            name ="email"
            value={email}
            onChange={onChange}
            />

           
            <input 
            type="text"
            placeholder="쇼핑몰 사이트"
            name ="shop"
            value={shop}
            onChange={onChange}
            />
            
            
            <label className={styles.submitLabel} htmlFor="submit">지원하기</label>
            <input  id="submit"className={styles.submit} type="submit"/>


        </form>
        </div>
    </>
    );
}
export default ImportFile;