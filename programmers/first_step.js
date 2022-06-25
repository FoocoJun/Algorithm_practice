function Exercise_12901(a, b) {
//2016년
    //문제 설명
    // 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
    // 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
    // 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
    //
    // 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

    // 제한 조건
    // 2016년은 윤년입니다.
    // 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

    // 입출력 예
    // a	b	result
    // 5	24	"TUE"

    var answer = '';
    //요일 정의
    let nameDay = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    //계산수
    let numYear = 6; //2016년 계산수
    let numMonth = ['-',6,2,2,5,0,3,5,1,4,6,2,4] //월별 계산수 0월은 없으므로 편의상 numMonth[0]에 '-'추가
    let numDate = b; //날짜

    //6+0+24 =30 , 30을 7로 나눈 나머지는 2

    if (a==1 || a==2) {
        let numDay = (numYear + numMonth[a]+ numDate-1)%7;  //윤년 1,2월 -1
        answer = nameDay[numDay]
    }
    else {
        let numDay = (numYear + numMonth[a]+ numDate)%7;
        answer = nameDay[numDay]
    }

    return answer;
}
//====================================

function Exercise_12922(n) {
//수박수박수박수박수박수?
    // 문제 설명
    // 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

    // 제한 조건
    // n은 길이 10,000이하인 자연수입니다.

    // 입출력 예
    // n	return
    // 3	"수박수"
    // 4	"수박수박"


    var answer = '';

    //1번째 풀이 방법
    for (i=1;i<n+1;i++) {                 //i가 n번 반복할 때 까지
        if (i%2==1) {                     //i가 홀수면
            answer=answer+'수'            //문자열에 '수' 붙이기
        }
        else {                            //i가 짝수면 '박'
            answer=answer+'박'            //문자열에 '박' 붙이기
        }

    }
return answer
}


    function solution(n) {
    var answer = '';

    //2번째 풀이 방법
    let watermelon='수박'
    answer=                                 //글자의 길이가 n이고 수박은 2글자이므로 'n/2'번 만큼 수박을 붙이기
        answer+'수박'.repeat(n/2)
    if (n%2==1) {                           //남은 n이 1개면
        answer=
            answer + '수'                   //문자열에 '수' 붙이기
    }
     return answer
}

    // 3번째 풀이 방법
    function solution(n) {
    return '수박'.repeat(5000).substring(0,n);
}

//====================================
function Exercise_12931(n) {
    //자릿수 더하기
    // 문제 설명
    // 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
    // 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

    // 제한사항
    // N의 범위 : 100,000,000 이하의 자연수

    // 입출력 예
    // N	answer
    // 123	6
    // 987	24

    var answer = 0;
    arry=String(n).split('')        //숫자를 문자형으로 변환 후 자릿수 단위로 split
    for (i=0;i<arry.length;i++) {           //자릿수 만큼 반복하는 for
        answer= answer+parseInt(arry[i])    //문자를 숫자로 변환 후 더하기
    }
    return answer;
}

//====================================
function Exercise_12934(n) {
//정수 제곱근 판별
    // 문제 설명
    // 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
    // n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

    // 제한 사항
    // n은 1이상, 50000000000000 이하인 양의 정수입니다.

    // 입출력 예
    // n	return
    // 121	144
    // 3	-1

    return (Math.sqrt(n)%1==0 ? (Math.sqrt(n)+1)**2 :-1)
}

//====================================

 function Exercise_12947(x) {
//하샤드 수
    // 문제 설명
    // 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

    // 제한 조건
    // x는 1 이상, 10000 이하인 정수입니다.

    // 입출력 예
    // arr	return
    // 10	true
    // 12	true
    // 11	false
    // 13	false


    var answer = true;
    let y=x;                //x 가공을 위한 클론 y
    let tmp=0;              //자릿수를 저장할 수
    let digit=0;            //자릿수의 합

    for (i=0; i<5 ;i++) {
        if (y!= 0) {
            tmp= y % 10
            y=parseInt(y/10)
            digit+= tmp
        }
        else {break}
    }
            if (x%digit!=0) {
                answer = false;}
        return answer;
}

// 자료형 변환,변수 선언 최소화
function solution(x) {
    var answer = true;
    let y=x;                //x 가공을 위한 클론 y
    let digit=0;            //자릿수의 합

    for (i=0; i<5 ;i++) {
        if (y != 0) {
            digit+= y % 10          //10으로 나눈 나머지(1의 자릿수)
            y=Math.floor(y/10)      //10으로 나눈 후 정수 추출
        }
        else {
            if (x % digit != 0) {
                answer = false;}
            return answer;
        }
    }
}


//====================================
function Exercise_12906(arr){
//같은 숫자는 싫어
// 1번 풀이

    var answer = [];

    for (i=0; i<arr.length;i++){
        if (arr[i]!=arr[i-1]) {
            answer.push(arr[i])
        }
    }
    return answer;
}

// //filter 사용법 및 화살표 함수 사용법 숙지
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
// filter 내부에 매개변수 3개 (값, 인덱스, 배열)
// 화살표 함수 (매개변수) => return

// let x = 4
// let y= 7

// (x) => x>=3
// 결과 true
// ?
// x>=3라는 조건문의 return 값이 true이기 때문

// (x,y) => x+y
// 결과 11
// x+y라는 연산의 return 값이 11이기 때문

// 이때
// filter은 true는 담고 false는 버리기 때문에
// filter 안에 조건문을 담은 화살표 함수를 넣게되면

// var arr=[1,1,3,3,0,1,1]
// arr.filter((j,k) => j != arr[k+1]);
// filter는 arr에서 차례대로 [1,0] [1,1] [3,2] ... 처럼 매개변수 j(value),k(index)를 가져오고
// 0번째 인덱스에 있는 1이 arr[0+1] 즉 다음 수와 다르면!
// [1,0]은 필터되어 보여진다.
// 물론 arr 자체의 값은 변한게 없다.


//====================================
function Exercise_12917(s) {
//문자열 내림차순으로 배치하기
    // 문제 설명
    // 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
    // s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

    // 제한 사항
    // str은 길이 1 이상인 문자열입니다.

    // 입출력 예
    // s	return
    // "Zbcdefg"	"gfedcbZ"


    return s.split('').sort().reverse().join('');
}



//====================================
function Exercise_81301(s) {
//숫자 문자열과 영단어
    //네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
    //
    // 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
    //
    // 1478 → "one4seveneight"
    // 234567 → "23four5six7"
    // 10203 → "1zerotwozero3"
    // 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.
    //
    // 참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.
    //
    // 숫자	영단어
    // 0	zero
    // 1	one
    // 2	two
    // 3	three
    // 4	four
    // 5	five
    // 6	six
    // 7	seven
    // 8	eight
    // 9	nine

    // 제한사항
    // 1 ≤ s의 길이 ≤ 50
    // s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
    // return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

    // 입출력 예
    // s	result
    // "one4seveneight"	1478
    // "23four5six7"	234567
    // "2three45sixseven"	234567
    // "123"	123


    var answer = [];
    let num = ['0','1','2','3','4','5','6','7','8','9']
    let numEng = ['zero','one','two','three','four','five','six','seven','eight','nine']
    // 숫자와 문자가 격순으로 있으면 숫자를 기준으로 자르면 된다.
    // 하지만 fourseven?
    // 어떻게 fourfivenine을 빡대갈 컴퓨터에게 four과 five와 nine으로 이해를 시킬 수 있지?
    // 가장 긴 단어가 5글자네?
    // 그냥 경우의 수 나누자..

    for (i=0;i<s.length;i++) {                  //문자열 s의 전체 길이에 대하여 체크를 해보자.
        if (num.indexOf(s[i])!=-1){             //s의 i번째 글짜가 num의 요소로서 -1을 반환 해 안해?
            console.log('숫자입니다')            //안해?! 숫자네?! 자비스 얼른 answer에 추가해.
            answer.push(s[i])
            console.log('추가했습니다')           //보여줘.
            console.log(answer)
        }
        else {                                  //한다고? 문자네?! 그렇다면..
            for (j=3; j<6; j++) {               //가장 짧은 단어가 one 3글자, 긴 글자가 5글자. 반복해.
                if(numEng.indexOf(s.substring(i,i+j)) !=-1) {       //3글자로 자르면 numEng에 있어? 없으면 다음.
                    console.log('뭔가 있습니다')
                    answer.push(numEng.indexOf(s.substring(i,i+j))) //추가해.
                    console.log(answer)
                    i+=j-1              //글자 추출시 글자 수 만큼(j-1) 외부 for문의 i 스킵해줘.
                }
            }
        }
    }

return parseInt(answer.join(''));   //합쳐서 숫자로 보고해줘.

}


// //split과 join의 완벽한 사용법
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {    //0부터 9까지 반복해보자. 0부터.
        let arr = answer.split(numbers[i]);   //0은 문자를 찢어! => 0이 있던 자리가 배열로 갈라짐.
        console.log(arr)                      //ex) zerofoursix5zeroone =>['','foursix5','one'] 시작이어도 공백
        answer = arr.join(i);                 //다시 붙이는데 숫자 0을 그 사이에 끼워 붙여라.
        console.log(answer)                   //ex) ['','foursix5','one'] =>'0foursix50one'
    }

    return Number(answer);                    //숫자로 보여줘.
}
//====================================
