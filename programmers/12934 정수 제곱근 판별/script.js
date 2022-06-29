// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
// 입출력 예
// n	return
// 121	144
// 3	-1

var ex_n = 121
var ex_Ans = 144

function Exercise_12934(n) { 
    return (Math.sqrt(n)%1==0 ? (Math.sqrt(n)+1)**2 :-1)
}

function runResult (Res, Ans) {
    console.log("실행결과 : ",Res,"기댓값 : ",Ans)
}

runResult(Exercise_12934(ex_n),ex_Ans)


// // 멍청했던 이진탐색
// function solution(n) {
//     var answer = 0;
//     let maximum = 49999988518489;
                  
//     for (i=0; i<47; i++) {
//         if (n<=maximum/(2**i)) {
//             console.log(maximum/(2**i),'보다는 작거나 같습니다.')
//             }    
//         else {console.log(maximum/(2**i),'보다 큽니다. 그 사이를 찾습니다.')
              
//               for (t=parseInt(maximum/(2**i));t<maximum/(2**(i-1));t++) {
//                   if (n==t && Math.sqrt(t)%1!=0) {
//                       console.log('찾았다!','하지만 바라던게 아니었다...')
//                           return -1
//                       }
//                   if (n==t){
//                       console.log('찾았다!',n)
//                       return((Math.sqrt(t)+1)**2 )
                      
//                   }        
                  
//               } 
//         }
//     }
// }