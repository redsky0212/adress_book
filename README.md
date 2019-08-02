## 주소록 만들기 
  https://www.inflearn.com/course/react-%EA%B0%95%EC%A2%8C-velopert/lecture/4150
  위 동영상 강좌를 토태로 create-react-app 으로 프로젝트를 생성 후 새롭게 만들어본 작업.

  ## 1. 설치
   * create-react-app 으로 프로젝트 구성
   * App.js 내부 소스 class형태로 수정.
   * components/Contact.js, components/ContactInfo.js 컴포넌트 생성

  ## 2. 검색기능 구현
   * javascript의 Array의 기본 메서드 알기 .sort() .filter()  
      참조(https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
      참조(https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

  ## 3. 선택기능 구현
   * 부모 Component에서 자식 Component에는 onClick이 적용되지 않는다.
   * onClick을 적용 하려면 자식 Component에서 넘어온 onClick을 props로 넘어온 것을 onClick으로 다시 바인딩 해줘야함.
   * ContactDetails.js  컴포넌트를 생성 하여 아래쪽에 보여질 수 있게 적용.
     - 해당 Component에서 props에 기본값을 셋팅 하고자 할때는 컴포넌트명.defaultProps = {} 사용.

  ## 4. State 의 내부 배열 처리하기.
   * 배열값을 바로 push 하면 안됨.
   * 배열.concat을 사용하거나 immutable.js를 설치하여 사용하거나, (es6방법) Array.from()을 사용 object일경우 Object.assign() 사용
     --------------------------------------
     this.state.contents.push(값); // 이 방법은 잘못된 방법, this.setState({contents:값}) 으로 적용해야 함.
    var arr = this.state.contents.concat(값); this.setState({contents:arr}); // 이 방법으로 추가된 값이 들어간 state를 복제하여 사용하는 방법으로 코딩 추천.
    var arr = Array.from(this.state.contents); arr.push(값); this.setState({contents:arr}); // (es6방법) 이와같이 Array.from 을 사용하여 값 복제를 해서 사용하는 방법도 있음.
    - 값이 array가 아닌 object일 경우.
    var a = {name: 'test'};
    var val = Object.assign({}, a);
    val.name = '값 변경';
    ----------------------------------------