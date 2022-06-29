// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.
// 입출력 예
// n	m	return
// 3	12	[3, 12]
// 2	5	[1, 10]

var ex_n = 2
var ex_m = 5
var ex_Ans = [1,10]

function Exercise_12940(n, m) { 
    var answer = []
    let num1 = findDivisor(n)       //n의 약수
    let num2 = findDivisor(m)       //m의 약수
    let cd = num1.filter((val) => num2.indexOf(val) !=-1  ) //n의 약수 값이 m의 약수 중에 있으면 공약수
    console.log(cd)

    let gcd = cd[cd.length-1]   //공약수중 가장 큰 수 최대공약수
    console.log('최대공약수 : ',gcd)
    answer.push(gcd)
    let lcm = n*m/gcd
    console.log('최소공배수 : ',lcm)
    answer.push(lcm)
    
    console.log(answer)

    return answer;
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

runResult(Exercise_12940(ex_n,ex_m),ex_Ans)