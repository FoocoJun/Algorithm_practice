// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

// 제한사항
// 3 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 10	3
// 12	11
var ex_n = 10
var ex_Ans = 3

function Exercise_87389(n) {            //37을 37보다 1 작은 수 36(1 2 3 ~~ 18 36)로 나누면 무조건 나머지는 1
    let answer = findDivisor(n-1)[1]    //n보다 1 작은 수를 구성하는 약수중 1이 아닌 가장 작은 수
    return answer;
}

function Exercise_87389_sub(n) { 
    for (i=3; i<=n-1;i++) {
        if (((n-1)/i)%1==0) {
            return i
        }
    }
}

function Exercise_87389_while(n) {
    var answer = 1
    while (answer++) {
        if (((n-1)/answer)%1==0) {
            return answer
        }
    }
}


function findDivisor(x) {
    divisor = [x]
    for (i=1; i<=x/2;i++) { // n/2 : 1보다 크고 2보다 작은 약수는 없으므로
                            // 자신보다 작고 자신의 절반보다 큰 약수 또한 없다.
        if ((x/i)%1==0) {
            divisor.push(i)
        }
        //정수n을 1부터 차례대로 나눴을때 그 값이 정수다? 그것이 약수다.
    }
    divisor.sort((a,b) => a - b)
    console.log(x,'의 약수 : ',divisor)

    return divisor
}

function runResult (Res, Ans) {
    console.log("실행결과 : ",Res,"기댓값 : ",Ans)
}

runResult(Exercise_87389(ex_n),ex_Ans)

