import React, { useRef, useState } from 'react';
import {fireStore,storage} from '../../../service/firebase';

const ImportFile = () => {

    
    const [insta, setInsta] = useState("");
    const [email,setEmail] = useState("");
    const [img,setImg] =useState("");
    
    const fileInput = useRef();


    const onSubmit = async(e) => {
        e.preventDefault();
        await fireStore.collection('recruit').add({
            insta,
            email,
            img:img.name,
            month:new Date().getMonth(),
            day:new Date().getDate(),
        }); 
        
        if(img !== null) {
            storage.ref(`imgs/${img.name}`).put(img)

        }
        setInsta('');
        setEmail('');
        fileInput.current.value='';
        alert('제출완료');

    } 

    const onChange = (e) => {
        const {target:{name,value}} = e;

        if(name === 'insta') {
            setInsta(value)
        }
        else if (name === 'email') {
            setEmail(value)
        }
        else if (name === 'img') {
            setImg(e.target.files[0])
            
        }
    }


    return (
        <>
        <h1>gi</h1>

    <p>폼을 만들고 지원서를 작성한다 내 메일로 보낼까 아니면 클라우드 저장소에 담길 수 있게 할까?
        옷의 기준은 데일리룩 전신이 다 나오도록 
        그리고 개인 쇼핑몰 url 또는 인스타 아이디 

    </p>


        <form onSubmit={onSubmit}>
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
            type="file"
            name="img"
            onChange={onChange}
            ref = {fileInput}
            />

            <input type="submit"/>


        </form>
    </>
    );
}
export default ImportFile;