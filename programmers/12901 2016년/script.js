// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
// 입출력 예
// a	b	result
// 5	24	"TUE"

var ex_a = 5
var ex_b = 24
var ex_Ans = "TUE"

function Exercise_12901(a, b) {
    var answer = '';
    //요일 정의
    let nameDay = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    //계산수
    let numYear = 6; //2016년 계산수
    let numMonth = ['-',6,2,2,5,0,3,5,1,4,6,2,4] //월별 계산수 0월은 없으므로 numMonth[0]에 '-'추가
    let numDate = b; //날짜
    
    //2016년 5월 24일 테스트 케이스
    //6+0+24 =30 , 30을 7로 나눈 나머지는 2

    if (a==1 || a==2) {
        let numDay = (numYear + numMonth[a]+ b-1)%7;  //윤년 1,2월 -1
        answer = nameDay[numDay]
    }
    else {
        let numDay = (numYear + numMonth[a]+ b)%7;
        answer = nameDay[numDay]
    }

    return answer;
}

function runResult (Res, Ans) {
    console.log("실행결과 : ",Res,"기댓값 : ",Ans)
}

runResult(Exercise_12901(ex_a,ex_b),ex_Ans)