// 문제 설명
// img1.png

// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

// 숫자	영단어
// 0	zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine
// 제한사항
// 1 ≤ s의 길이 ≤ 50
// s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
// return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.
// 입출력 예
// s	result
// "one4seveneight"	1478
// "23four5six7"	234567
// "2three45sixseven"	234567
// "123"	123

var ex_s = "one4seveneight"
var ex_Ans = 1478

function Exercise_81301(s) {
    var answer = [];
    let num = ['0','1','2','3','4','5','6','7','8','9']
    let numEng = ['zero','one','two','three','four','five','six','seven','eight','nine']
    // 숫자와 문자가 격순으로 있으면 숫자를 기준으로 자르면 된다.
    // 하지만 fourseven?
    // 어떻게 fourfivenine을 빡대갈 컴퓨터에게 four과 five와 nine으로 이해를 시킬 수 있지?
    // 가장 긴 단어가 5글자네?
    // 그냥 경우의 수 나누자..
    
    for (i=0;i<s.length;i++) {                  //문자열 s의 전체 길이에 대하여 체크를 해보자.
        if (num.indexOf(s[i])!=-1){             //s의 i번째 글짜가 num의 요소로서 -1을 반환 해 안해? 
            console.log('숫자입니다')            //안해?! 숫자네?! 자비스 얼른 answer에 추가해.
            answer.push(s[i])
            console.log('추가했습니다')           //보여줘.
            console.log(answer)
        }
        else {                                  //한다고? 문자네?! 그렇다면..
            for (j=3; j<6; j++) {               //가장 짧은 단어가 one 3글자, 긴 글자가 5글자. 반복해.
                if(numEng.indexOf(s.substring(i,i+j)) !=-1) {       //3글자로 자르면 numEng에 있어? 없으면 다음.
                    console.log('뭔가 있습니다')
                    answer.push(numEng.indexOf(s.substring(i,i+j))) //추가해.
                    console.log(answer)
                    i+=j-1              //글자 추출시 글자 수 만큼(j-1) 외부 for문의 i 스킵해줘.
                }
            }
        }
    }
   
return parseInt(answer.join(''));   //합쳐서 숫자로 보고해줘.

}


//split과 join의 완벽한 사용법
function Exercise_81301_split(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {    //0부터 9까지 반복해보자. 0부터.
        let arr = answer.split(numbers[i]);   //0은 문자를 찢어! => 0이 있던 자리가 배열로 갈라짐.    
        console.log(arr)                      //ex) zerofoursix5zeroone =>['','foursix5','one'] 시작이어도 공백
        answer = arr.join(i);                 //다시 붙이는데 숫자 0을 그 사이에 끼워 붙여라.
        console.log(answer)                   //ex) ['','foursix5','one'] =>'0foursix50one'
    }

    return Number(answer);                    //숫자로 보여줘.
}

function runResult (Res, Ans) {
    console.log("실행결과 : ",Res,"기댓값 : ",Ans)
}

runResult(Exercise_19217(ex_s),ex_Ans)