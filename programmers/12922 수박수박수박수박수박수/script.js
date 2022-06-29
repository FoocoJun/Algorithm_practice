// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

var ex_n = 3
var ex_Ans = "수박수"

function Exercise_12922(n) { 
    var answer = '';
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

function Exercise_12922_sub(n) {
    var answer = '';
    let watermelon='수박'
    answer=                                 //글자의 길이가 n이고 수박은 2글자이므로 'n/2'번 만큼 수박을 붙이기
        answer+'수박'.repeat(n/2)
    if (n%2==1) {                           //남은 n이 1개면
        answer=
            answer + '수'                   //문자열에 '수' 붙이기
    }
     return answer
}

function Exercise_12922_sub_sub(n) {
    return '수박'.repeat(5000).substring(0,n);
}


function runResult (Res, Ans) {
    console.log("실행결과 : ",Res,"기댓값 : ",Ans)
}

runResult(Exercise_12922(ex_n),ex_Ans)