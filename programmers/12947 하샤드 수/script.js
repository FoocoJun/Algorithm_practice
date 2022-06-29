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

var ex_n = 10
var ex_Ans = 144

function Exercise_12947(x) { 
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

function Exercise_12947_sub(x) {
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

function runResult (Res, Ans) {
    console.log("실행결과 : ",Res,"기댓값 : ",Ans)
}

runResult(Exercise_12947(ex_n),ex_Ans)