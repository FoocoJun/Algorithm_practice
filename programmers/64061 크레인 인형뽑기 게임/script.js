// 문제 설명
// 게임개발자인 "죠르디"는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.
// "죠르디"는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다.

// crane_game_101.png

// 게임 화면은 "1 x 1" 크기의 칸들로 이루어진 "N x N" 크기의 정사각 격자이며 위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다. (위 그림은 "5 x 5" 크기의 예시입니다). 각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다. 모든 인형은 "1 x 1" 크기의 격자 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다. 게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다. 집어 올린 인형은 바구니에 쌓이게 되는 데, 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다. 다음 그림은 [1번, 5번, 3번] 위치에서 순서대로 인형을 집어 올려 바구니에 담은 모습입니다.

// crane_game_102.png

// 만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다. 위 상태에서 이어서 [5번] 위치에서 인형을 집어 바구니에 쌓으면 같은 모양 인형 두 개가 없어집니다.

// crane_game_103.gif

// 크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다. 또한 바구니는 모든 인형이 들어갈 수 있을 만큼 충분히 크다고 가정합니다. (그림에서는 화면표시 제약으로 5칸만으로 표현하였음)

// 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.

// [제한사항]
// board 배열은 2차원 배열로 크기는 "5 x 5" 이상 "30 x 30" 이하입니다.
// board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
// 0은 빈 칸을 나타냅니다.
// 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
// moves 배열의 크기는 1 이상 1,000 이하입니다.
// moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.
// 입출력 예
// board	moves	result
// [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]	[1,5,3,5,1,2,1,4]	4

var ex_board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
var ex_moves = [1,5,3,5,1,2,1,4]
var ex_Ans = 4

function Exercise_64061(board, moves) { 
    var answer = 0;
    let clon = []
    let array = []
    let tong = ''
    
    //step-0
    //보다 쓰기 좋은 2차원 전치행렬 만들기
    //|0,0,0,0,0|        |0,0,0,4,3| 1번 줄
    //|0,0,1,0,3|        |0,0,2,2,5| 2번 줄
    //|0,2,5,0,1|   =>   |0,1,5,4,1| 3번 줄
    //|4,2,4,4,2|        |0,0,0,4,3| 4번 줄
    //|3,5,1,3,1|        |0,3,1,2,1| 5번 줄
    
    //step-1
    //reverse를 이용해 뒤집은 후 filter을 통해서 0 없애기, pop으로 쉽게 뽑기 위함.
    //array에 splice 시 정규표현식을 이용(join('').replace(/0/g,'').split(''))해 0을 모두 제거하는 방법을 썼었으나
    //자릿수가 2개 이상인 수에서 20도 2가 되고 80도 8이 되는 상황이 발생해서 배열 [0] 요소를 제거하는 filter를 사용함.
    //그 결정적인 이유는 clon에서 splice시 수만 가져오기 때문. 정규표현식을 위해 합치는 순간 13234058305이 되어 숫자를 구분할 수 없게 됨.
    //clon에 splice시 !,숫자,!를 제공하고 !0!를 만나면 !로 변환해도 가능할 것 같다.
    //하지만 배열 [0] 요소를 제거하는게 더 읽기에 깔끔했다.
    //|0,0,0,4,3|        |3,4      | 1번 줄
    //|0,0,2,2,5|        |5,2,2    | 2번 줄
    //|0,1,5,4,1|   =>   |1,4,5,1  | 3번 줄
    //|0,0,0,4,3|        |3,4      | 4번 줄
    //|0,3,1,2,1|        |1,2,1,3  | 5번 줄
    
    for (i=0; i<board.length;i++) {             
        for (j=0; j<board.length;j++){              
            clon.splice(j,0,board[j][i])
        }
        array.splice(i,0,clon.reverse())
        array[i]=array[i].filter((a)=> a!=0 )
        clon = []
    }
    // board의 전치결과 :

    console.log(array)
    
    //step-2
    //pop을 이용해 k번째 moves에 해당하는 줄에서 뽑아 tong에 담기
    //이때, pop 불가시 undefined 도출
    //만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다. undefined제거
    //|3,4      |                          |3        |       | |
    //|5,2,2    |                          |5,2,2    |       | |
    //|1,4,5,1  |   =>   moves[k]=1   =>   |1,4,5,1  |   +   | |
    //|3,4      |     pick * in line 1     |3,4      |       | |
    //|1,2,1,3  |                          |1,2,1,3  |       |4| tong
    
    //step-3
    //같은 수가 나오면 2개 지우고 2점 올리기
    //각 숫자별 정규표현식 10개를 반복할지 0-9 로 찾으면 연속된 같은 수가 안되어서 고민함.
    //완성된 통에 includes로 한번만 찾기에는 12442가 122로 1로 2번 임의의 n번이 필요해서 for문을 이용함.
    //추가시 !를 함께 붙여 split('!')를 이용해 배열로 10의자리 이상의 숫자도 구분 할 수 있도록 함
    //뒤에 붙어서 쌓이니까 2연속 스코어링을 놓치지 않기 위해 (i=tong.length i--)를 이용함. 아래참고.

    //i=0부터 위로 탐색시 탐색 제한 발생
    //   i           i          i          i
    //|3|4        | |4       | |4       | |4
    //|1|3        | |        | |        | |
    //|1|2   =>   |3|   =>   |3|   =>   |3|<제거 불가
    //|3|1        |3|        |3|        |3|
    //|4|0        |4|score:2 |4|        |4|score:2

    //i=4부터 아래로 탐색시 탐색 제한 없음
    //   i           i          i          i
    //|3|4        | |        | |        | |
    //|1|3        | |3       | |        | |
    //|1|2   =>   |3|2   =>  |3|2   =>  | |
    //|3|1        |3|1       |3|1       | |1
    //|4|0        |4|score:2 |4|0       |4|0 score:2
    
    let score = 0;  
    for (k in moves) {  // for(k=0; k< moves.length;k++) 과 동일 통체우기
        tong = tong.concat(array[moves[k]-1].pop(),'!').replace(/undefined+!/g,'')  //undefined라 뺀 숫자 옆의 ! 제거
    }
    tong=tong.split('!')
    for (i=tong.length; i>0;i--) {
        if (tong[i]==tong[i-1]){
            tong.splice(i-1,2)
            score+=2
        }
    }

    return score;
}


function runResult (Res, Ans) {
    console.log("실행결과 : ",Res,"기댓값 : ",Ans)
}

runResult(Exercise_64061(ex_board,ex_moves),ex_Ans)