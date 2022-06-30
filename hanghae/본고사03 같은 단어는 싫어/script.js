// 배열 arr와 정수 n이 주어집니다. 배열 arr의 각 원소는 문자열로 이루어져 있습니다. 이때, 배열 arr에서 중복되는 단어는 전부 제거하려고 합니다. 단, 제거된 후 남은 단어들을 반환할 때는 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 

// 예를 들어 strings가 ["brush", "sun", "brush", "bed", "car"]이고 n이 1이면 중복을 제거한 배열인 ["sun", "bed", "car"]에서 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// ### 제한 조건

// - strings는 길이 1 이상, 50이하인 배열입니다.
// - strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// - strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// - 모든 strings의 원소의 길이는 n보다 큽니다.
// - 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

function solution(arr, n){
    arr.sort()
    for (i=arr.length; i>0 ; i--) {
        if ( arr[i] == arr[i-1] ) {
            arr = arr.filter((a)=>a!=arr[i])
        }
    }
    arr.sort((a,b)=> a.charCodeAt(n) - b.charCodeAt(n))
	return arr;
}

let arr=["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
// let arr=["coke", "water", "glass", "dog", "dog", "water", "dog", "yogurt", "vitamin"];
let n=2;
console.log(solution(arr, n))