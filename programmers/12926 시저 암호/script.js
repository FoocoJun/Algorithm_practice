// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"

var ex_s = "AB"
var ex_n = 1
var ex_Ans = "BC"

function Exercise_12926(s, n) {
        var answer = '';
        for(i=0;i<s.length;i++) {   //s 전체 길이에 대하여
            if (s.charCodeAt(i)==32){   //띄어쓰기는 그대로 반환
                answer+=' '
            }
            else if (s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90) {          //s의 i번째 요소가 대문자일때(65~90)
                if (s.charCodeAt(i)+n >=91) {           //시저암호화의 결과가 Z를 넘어 대문자 구간을 넘으면
                    answer+=String.fromCharCode(s.charCodeAt(i)+n-26)           //-26를 통해 다시 구간 안으로
                }
                else {
                    answer+=String.fromCharCode(s.charCodeAt(i)+n)      //아니면 반환
                }
            }
            else if (s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122) {         //s의 i번째 요소가 소문자일때(97~122)
                if (s.charCodeAt(i)+n >=123) {              //시저암호화의 결과가 z를 넘어 소문자 구간을 넘으면
                    answer+=String.fromCharCode(s.charCodeAt(i)+n-26)               //-26을 통해 다시 구간 안으로
                }
                else {
                    answer+=String.fromCharCode(s.charCodeAt(i)+n)          //아니면 반환
                }
            }
        }
        return answer;
    }
    
    // 5.30ms : s.charCodeAt(i) 값을 미리 ascii로 선언하여 연산 줄이기
    function Exercise_12926_sub(s, n) {
        var answer = '';
        for(i=0;i<s.length;i++) {               //s 전체 길이에 대하여
            let ascii = s.charCodeAt(i)             //ascii는 s의 i번째 요소의 아스키코드
            if (ascii==32){answer+=' '}             //ascii가 띄어쓰기(32)면 그대로 반환
            else if (ascii>=65 && ascii<=90) {          //s의 i번째 요소가 대문자일때(65~90)
                answer+= ascii+n >=91 ?             //시저암호의 결과가 대문자 구간을 넘어가는가?
                          String.fromCharCode(ascii+n-26) : String.fromCharCode(ascii+n) }
                //true:-26을 통해 대문자 구간 내로 복귀 후 재변환, false: 그대로 변환
            else if (ascii>=97 && ascii<=122) {         //s의 i번째 요소가 소문자일때(97~122)
                answer+= ascii+n >=123 ?
                          String.fromCharCode(ascii+n-26) : String.fromCharCode(ascii+n) }
        }
        return answer;
    }
    
    // 0.98ms : ascii 안쓰기.
    function Exercise_12926_map(s, n) {
        var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
        return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
        //s를 배열로 분리, 각각의 값을 indexOf를 이용해 chars에서 첫번째 위치를 가져옴.
        //첫번째 위치에서 +n, n은 25이하인 자연수이므로 알파벳을 1번 더 반복해두면 문제 없음.
        
        //map
        //filter랑 똑같이 3개의 매개변수와 함수를 이용 (필수: 불러온 값,선택: index,선택: 호출한 배열)
        //배열 내의 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환.
    }

function runResult (Res, Ans) {
    console.log("실행결과 : ",Res,"기댓값 : ",Ans)
}

runResult(Exercise_12930(ex_s,ex_n),ex_Ans)