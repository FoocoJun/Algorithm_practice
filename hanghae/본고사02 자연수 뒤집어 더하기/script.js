// ## 2번. 자연수 뒤집어 더하기

// 자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요. 예를들어 n이 12345이면 "`5+4+3+2+1=15`" 라는 문자열을 리턴합니다.

// ### 제한 조건

// - N의 범위 : 100,000,000 이하의 자연수

function solution(n){
    return (n+'').split('').reverse().join('+')+'='+(n+'').split('').reduce((a,b)=>(+a)+(+b))
  }
  console.log(solution(718253))
  
  //n을 문자화
  //n을 각 숫자별로 분리하여 배열로 만듦
  //배열을 뒤집음
  //배열 사이사이에 '+'를 넣어 다시 합침
  //마지막에 '='을 붙이고
  //reduce를 이용해 배열의 합을 구함.
  //자료형 변환으로 좋은 코드는 아닌 것 같음.