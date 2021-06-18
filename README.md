# OH CO! 오늘의 코디

"오늘 날씨에 이 옷이 어울리나?" 외출하기 전 이런 고민하신 적 있으신가요? 오코는 여러분이 사는 곳의 온도에 따라서 날씨에 어울리는 코디를 찾아줍니다.  

## 작업하면서 배웠던 것들

작업하면서 어려웠거나 이해도가 부족했던 부분입니다.

### `useEffect의 무한루프`

코디 리스트를 출력하는 과정 중에 무한으로 렌더가 일어나 브라우저가 다운되는 현상을 겪었습니다.
componentDidMount와 componentDidUpdate, componentWillUnmount의 역할을 하는 useEffect에서 무한루프가 일어난 것입니다.

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

여러 블로그와 [공식 문서]https://ko.reactjs.org/docs/hooks-effect.html 를 참고했을 때
setState가 계속 업데이트 되면서 반복이 되어 불필요한 성능 저하가 일어났다는 것을 알았습니다.

### 해결 방법
Hook에서 componentDidUpdate 역할을 하는 두 번째 인자에 빈 배열을 넣어 문제를 해결했습니다.

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


이 두 번째 인자는 의존성 배열로, 첫 번째 인자로 나타나는 함수가 두 번째 인자로 등장하는 배열의 원소가 무엇인지에 따라 의존적으로 이벤트를 실행시킨다는 의미를 가집니다. 빈 배열을 넣어 변화할 인자가 없기 때문에 무한루프에서 탈출 할 수 있었습니다. 이 문제로 리액트의 라이프사이클을 명확하게 알고 있어야 한다는 것을 알게 되었습니다.


### `fetch() 함수에 대해서`

외부에서 데이터를 받아오려면 api를 호출하고 데이터를 응답 받습니다. 이 프로젝트에서 open Weather api를 통해 날씨 데이터를 가져오는 과정에 이해도가 부족했습니다. fetch 함수를 제대로 쓰기 위해 http 통신의 요청과 응답에 대한 이해, Promise의 깊은 이해가 필요했습니다.

먼저 같은 함수에서 es5와 es6 둘 다 적어봐야 더 이해하기 쉬울 것이라 생각했습니다.

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

이렇게 화살표 함수 전 후로 fetch 함수를 더 복잡하게 쓸 수 있도록 이해했습니다.

### res => res.json()의 의미 

첫 번째 res => res.json()에서 어떤 값이 리턴 돠는 지 궁금했습니다. console.log로 확인 해본 결과___
첫 번째 res는 http 통신 요청과 응답에서 응답의 정보를 담고 있는 객체였습니다. 

console를 확인 했을 때 실제 데이터는 보이지 않습니다.
응답으로 받은 JSON 데이터를 사용하기 위해서는 객체의 JSON 함수를 호출하고 return 합니다.___
그러면 두 번째 res 함수에서 응답 데이터를 받을 수 있는 원리였습니다.







