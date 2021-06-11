import React, { useState } from 'react';
import {fireStore} from '../../../service/firebase';

const ImportFile = () => {

    
    const [insta, setInsta] = useState("");
    const [email,setEmail] = useState("");




    const onSubmit = async(e) => {
        e.preventDefault();
        await fireStore.collection('recruit').add({
            insta,
            email,
            month:new Date().getMonth(),
            day:new Date().getDate(),
        });  
        setInsta('');
        setEmail('');
        alert('제출완료')

    } 

    const onChange = (e) => {
        const {target:{name,value}} = e;

        if(name === 'insta') {
            setInsta(value)
        }
        else if (name === 'email') {
            setEmail(value)
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

            <input type="submit"/>


        </form>
    </>
    );
}
export default ImportFile;