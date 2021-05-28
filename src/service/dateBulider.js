const dateBulider = (today) => {
    let months = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",];
        let days = ["일","월","화","수","목","금","토"];
        
        let day = days[today.getDay()];
        let date = today.getDate();
        let month = months[today.getMonth()];
        let year = today.getFullYear();

        return `${month} ${date}일 ${day}요일 ${year}년`
}

export default dateBulider;