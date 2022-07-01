// 문제 설명
// 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.

// 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
// 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
// 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
// k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
// 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
// 다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.

// 유저 ID	유저가 신고한 ID	설명
// "muzi"	"frodo"	"muzi"가 "frodo"를 신고했습니다.
// "apeach"	"frodo"	"apeach"가 "frodo"를 신고했습니다.
// "frodo"	"neo"	"frodo"가 "neo"를 신고했습니다.
// "muzi"	"neo"	"muzi"가 "neo"를 신고했습니다.
// "apeach"	"muzi"	"apeach"가 "muzi"를 신고했습니다.
// 각 유저별로 신고당한 횟수는 다음과 같습니다.

// 유저 ID	신고당한 횟수
// "muzi"	1
// "frodo"	2
// "apeach"	0
// "neo"	2
// 위 예시에서는 2번 이상 신고당한 "frodo"와 "neo"의 게시판 이용이 정지됩니다. 이때, 각 유저별로 신고한 아이디와 정지된 아이디를 정리하면 다음과 같습니다.

// 유저 ID	유저가 신고한 ID	정지된 ID
// "muzi"	["frodo", "neo"]	["frodo", "neo"]
// "frodo"	["neo"]	["neo"]
// "apeach"	["muzi", "frodo"]	["frodo"]
// "neo"	없음	없음
// 따라서 "muzi"는 처리 결과 메일을 2회, "frodo"와 "apeach"는 각각 처리 결과 메일을 1회 받게 됩니다.

// 이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ id_list의 길이 ≤ 1,000
// 1 ≤ id_list의 원소 길이 ≤ 10
// id_list의 원소는 이용자의 id를 나타내는 문자열이며 알파벳 소문자로만 이루어져 있습니다.
// id_list에는 같은 아이디가 중복해서 들어있지 않습니다.
// 1 ≤ report의 길이 ≤ 200,000
// 3 ≤ report의 원소 길이 ≤ 21
// report의 원소는 "이용자id 신고한id"형태의 문자열입니다.
// 예를 들어 "muzi frodo"의 경우 "muzi"가 "frodo"를 신고했다는 의미입니다.
// id는 알파벳 소문자로만 이루어져 있습니다.
// 이용자id와 신고한id는 공백(스페이스)하나로 구분되어 있습니다.
// 자기 자신을 신고하는 경우는 없습니다.
// 1 ≤ k ≤ 200, k는 자연수입니다.
// return 하는 배열은 id_list에 담긴 id 순서대로 각 유저가 받은 결과 메일 수를 담으면 됩니다.
// 입출력 예
// id_list	report	k	result
// ["muzi", "frodo", "apeach", "neo"]	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	2	[2,1,1,0]
// ["con", "ryan"]	["ryan con", "ryan con", "ryan con", "ryan con"]	3	[0,0]


var ex_id_list = ["muzi", "frodo", "apeach", "neo"]
var ex_report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
var ex_p = 2
var ex_Ans = [2,1,1,0]

function Exercise_92334(id_list, report, p) {
    var answer = Array.from({length:id_list.length}, () => 0 ); // 길이 id_list짜리
    let rp_list = [];
    let tmp=0
    let mailList =[];
    report.sort
    kingport=[...new Set(report)]           //리포트 자료 원본 유지 및 중복제거
    report=[...new Set(report)]             //각 유저의 동일한 유저에 대한 신고 제거
    
    for( i=0; i<report.length; i++) {
        for (k in id_list) {
            tmp=report.length
            report = report.filter((a) => a.split(' ')[1] != id_list[k])
            rp_list.push(tmp-report.length)
        }
    }
    for (k in id_list) {
        if (rp_list[k]>=p) {
            mailList=kingport.filter((a)=> a.split(' ')[1] == id_list[k])   //[['muzi frodo'],[apeach,frodo]]
            for (i=0;i< mailList.length; i++) {
                let id_inx = id_list.indexOf(mailList[i].split(' ')[0]) //신고자 muzi -> id_list 에서의 index
                answer[id_inx] += 1 //이름 자리에 신고 횟수 1씩 추가
            }
        }
    }
    return answer;
}

function solution(id_list, report, p) {
    var answer = Array.from({length:id_list.length}, () => 0 ); // 길이 id_list짜리
    let id_inx =0;    let tmp=0;    let mailList =[];
    kingport=[...new Set(report)]           //리포트 자료 원본 유지 및 중복제거
    report=[...new Set(report)]             //각 유저의 동일한 유저에 대한 신고 제거
    
    for( i=0; i<report.length; i++) {
        for (k in id_list) {
            tmp=report.length
            report = report.filter((a) => a.split(' ')[1] != id_list[k])          
            if (tmp-report.length>=p) {
                mailList=kingport.filter((a)=> a.split(' ')[1] == id_list[k])   //[['muzi frodo'],[apeach,frodo]]
                for (i=0;i< mailList.length; i++) {
                    id_inx = id_list.indexOf(mailList[i].split(' ')[0]) //신고자 muzi -> id_list 에서의 index
                    answer[id_inx] += 1 //이름 자리에 신고 횟수 1씩 추가
                }
            }
        }
    }
    console.log(tmp)

    return answer;
}

function solution(id_list, report, p) {
    var answer = new Array(id_list.length).fill(0); // 길이 id_list짜리
    console.log(answer)
    let rp_list = [];
    let tmp=0
    let mailList =[];
    kingport=[...new Set(report)]           //리포트 자료 원본 유지 및 중복제거
    report=[...kingport]             //각 유저의 동일한 유저에 대한 신고 제거
    
        for (k in id_list) {
            tmp=report.length
            report = report.filter((a) => a.split(' ')[1] != id_list[k])
            rp_list.push(tmp-report.length)
            if (rp_list[k]>=p) {
                mailList=kingport.filter((a)=> a.split(' ')[1] == id_list[k])   //[['muzi frodo'],[apeach,frodo]]
            
                for (i=0;i< mailList.length; i++) {
                let id_inx = id_list.indexOf(mailList[i].split(' ')[0]) //신고자 muzi -> id_list 에서의 index
                answer[id_inx] += 1 //이름 자리에 신고 횟수 1씩 추가
            }
        }
    }
return answer;
}

function runResult (Res, Ans) {
    console.log("실행결과 : ",Res,"기댓값 : ",Ans)
}

runResult(Exercise_92334(ex_id_list,ex_report,ex_p),ex_Ans)