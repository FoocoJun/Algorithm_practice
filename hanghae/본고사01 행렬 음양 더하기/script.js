// 행렬이 두개 있습니다. 두 행렬의 절댓값을 차례대로 담은 정수 배열 arr1, arr2와 행렬의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 두 행렬의 부호는 같습니다.

// 실제 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// ### 제한 조건

// - 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

function solution(arr1, arr2, signs){
	let answer=[];
    let tmp = []
    for (i=0; i<arr1.length; i++) {
        for (j=0; j<arr1[i].length; j++) {
            tmp.push(signs[i][j] ? arr1[i][j]+arr2[i][j] : (arr1[i][j]+arr2[i][j])*-1);
        }
        answer.push(tmp)
        tmp=[]
    }
	return answer;
}
let arr1=[[5,7,1],[2,3,5]];
let arr2=[[5,1,6],[7,5,6]];
let signs=[[true,true,false],[false,true,false]];
console.log(solution(arr1, arr2, signs))