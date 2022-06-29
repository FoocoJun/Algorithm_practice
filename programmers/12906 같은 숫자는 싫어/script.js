// 문제 설명
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
// 입출력 예
// arr	answer
// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,4,4,3,3]	[4,3]

var ex_arr = [1,1,3,3,0,1,1]
var ex_Ans = [1,3,0,1]

function Exercise_12947(arr) { 
    var answer = [];

    for (i=0; i<arr.length;i++){
        if (arr[i]!=arr[i-1]) {
            answer.push(arr[i])
        }
    }
    return answer;
}

// //filter 사용법 및 화살표 함수 사용법 숙지
function Exercise_12947_filter(arr) {
    return arr.filter((val,index) => val != arr[index+1]);
}
// filter 내부에 매개변수 3개 (값, 인덱스, 배열)
// 화살표 함수 (매개변수) => return

// let x = 4
// let y= 7

// (x) => x>=3
// 결과 true
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


function runResult (Res, Ans) {
    console.log("실행결과 : ",Res,"기댓값 : ",Ans)
}

runResult(Exercise_12947(ex_n),ex_Ans)