## 시작

"오늘 날씨에 이 옷이 어울리나?" 외출하기 전 이런 고민하는 친구들에게 영감을 얻어 기온에 어울리는 코디를 추천해주는 서비스입니다. 오코는 사는 곳의 온도에 따라서 날씨에 어울리는 코디를 찾아줍니다.


## 소개
기온 차이가 심한 환절기나 오랫동안 외출을 안했을 때 '뭐 입고 나가면 좋을까?' 고민하는 친구들을 위해
브라우저를 킨 위치를 파악해 현재 온도를 받아오고 오늘의 날씨와 어울리는 코디를 추천해주는 사이트입니다.

## 사용한 기술과 서비스
React.Js, Firebase, OpenWeather API

백엔드를 손쉽게 구현해주는 firebase와 react.js 로 작업을 했습니다. navigator를 활용해 위도, 경도를 받아오고 OpenWeather API에 위도, 경도를 대입해 사용자가 살고 있는 날씨를 받아옵니다.
그리고 온도에 따라 어울리는 옷 코디를 분류해 접근할 수 있도록 작업했습니다.

## 주요 기능들

### 코디 추천
![](https://images.velog.io/images/lamda/post/0fac7a41-fb9f-4ffa-a906-792814363dfe/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-01-11%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.26.32.png)

홈페이지에 방문하면 가장 먼저 보여집니다. 온도를 받아와 자동으로 현재 날씨와 어울리는 코디를 추천합니다. db에 온도에 따라 맞는 코디에 접근할 수 있도록 collection을 만들고 코디 정보를 넣었습니다. switch 문으로 여러 번 쓸 if문을 깔끔하게 정리했습니다.

### 크루 지원
![](https://images.velog.io/images/lamda/post/d411c45f-6e2c-4524-b917-ee823f09776b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-01-11%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.26.54.png)

이 프로젝트를 통해 사람들에게 자신의 코디를 보여주면서 홍보할 수 있다면 사용자와 셀러가 윈윈 할 수 있겠다는 생각을 했습니다. 그래서 크루 지원란을 만들어 옷 코디 사진을 제공할 사람을 모으기 위해 만들었습니다. 계정과 이메일, 사이트, 사진을 입력하고 지원하기 버튼을 누르면 db에 담기게 설계했습니다.

### 작업하면서 배웠던 점
작업하면서 어려웠거나 이해도가 부족했던 부분입니다.

useEffect의 무한루프
코디 리스트를 출력하는 과정 중에 무한으로 렌더가 일어나 브라우저가 다운되는 현상을 겪었습니다. componentDidMount와 componentDidUpdate, componentWillUnmount의 역할을 하는 useEffect에서 무한루프가 일어난 것입니다.
```
 useEffect(() => {      
  navigator.geolocation.getCurrentPosition(handleGeo)
  function handleGeo(position){
      try{
       handleGeoSuccess(position)
      .then(res => res.json())
      .then(async result => {
        await setWeather(result);
               setTemp(result.main.temp);
      });
    } catch(error) {
        console.log(`error ${error}`);
    }
  };      
})
```
여러 블로그와 [공식 문서]https://ko.reactjs.org/docs/hooks-effect.html 를 참고했을 때 setState가 계속 업데이트 되면서 반복이 되어 불필요한 성능 저하가 일어났다는 것을 알았습니다.

해결 방법
Hook에서 componentDidUpdate 역할을 하는 두 번째 인자에 빈 배열을 넣어 문제를 해결했습니다.
```
useEffect(() => { 
  navigator.geolocation.getCurrentPosition(handleGeo)
  function handleGeo(position){
      try{
       handleGeoSuccess(position)
      .then(res => res.json())
      .then(async result => {
        await setWeather(result);
               setTemp(result.main.temp);
      });
    } catch(error) {
        console.log(`error ${error}`);
    }
  };      
},[])
```
이 두 번째 인자는 의존성 배열로, 첫 번째 인자로 나타나는 함수가 두 번째 인자로 등장하는 배열의 원소가 무엇인지에 따라 의존적으로 이벤트를 실행시킨다는 의미를 가집니다. 빈 배열을 넣어 변화할 인자가 없기 때문에 무한루프에서 탈출 할 수 있었습니다. 이 문제로 리액트의 라이프사이클을 명확하게 알고 있어야 한다는 것을 알게 되었습니다.

fetch() 함수에 대해서
외부에서 데이터를 받아오려면 api를 호출하고 데이터를 응답 받습니다. 이 프로젝트에서 open Weather api를 통해 날씨 데이터를 가져오는 과정에 이해도가 부족했습니다. fetch 함수를 제대로 쓰기 위해 http 통신의 요청과 응답에 대한 이해, Promise의 깊은 이해가 필요했습니다.

먼저 같은 함수에서 es5와 es6 둘 다 적어봐야 더 이해하기 쉬울 것이라 생각했습니다.
```
es6

fetch('api주소')
.then(res => res.json());
.then(res => {
   //data를 받은 후의 로직
});
es5

fetch('api주소')
.then(function(res) {
   return res.json();
})
.then(function(res){
    //data를 받은 후의 로직
})
```
이렇게 화살표 함수 전 후로 fetch 함수를 더 복잡하게 쓸 수 있도록 이해했습니다.

res => res.json()의 의미
첫 번째 res => res.json()에서 어떤 값이 리턴 돠는 지 궁금했습니다. console.log로 확인 해본 결과___ 첫 번째 res는 http 통신 요청과 응답에서 응답의 정보를 담고 있는 객체였습니다.

console를 확인 했을 때 실제 데이터는 보이지 않습니다. 응답으로 받은 JSON 데이터를 사용하기 위해서는 객체의 JSON 함수를 호출하고 return 합니다.___ 그러면 두 번째 res 함수에서 응답 데이터를 받을 수 있는 원리였습니다.

## 제작 과정
제작기간: 27일
사용한 기술,서비스: React.js, Firebase, openWeather API

