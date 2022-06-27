// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	answer
// 123	6
// 987	24

var ex_n = 123
var ex_Ans = 6

function Exercise_12931(n) {
    var answer = 0;
    arry=String(n).split('')                //숫자를 문자형으로 변환 후 자릿수 단위로 split
    for (i=0;i<arry.length;i++) {           //자릿수 만큼 반복하는 for
        answer= answer+parseInt(arry[i])    //문자를 숫자로 변환 후 더하기
    }
    return answer;
}

function runResult (Res, Ans) {
    console.log("실행결과 : ",Res,"기댓값 : ",Ans)
}

runResult(Exercise_12931(ex_n),ex_Ans)