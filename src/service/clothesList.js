import {fireStore} from '../service/firebase';


    const clothLi = (temp) => {
        const cloth = fireStore.collection(`${temp}`)
        cloth.onSnapshot((snapshot) => {
            const array = snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data(),
            }));
            return output(array);
        })

        const output = (doc) => {
            return doc
        }

        return output()
        
    }

export default clothLi;