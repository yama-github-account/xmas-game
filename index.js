const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

const tileSize = 32;
let map = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2,],
    [2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 4, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2,],
    [2, 4, 4, 3, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2,],
    [2, 2, 4, 4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3,],
    [2, 2, 2, 4, 4, 2, 2, 2, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 3, 4, 2, 4, 4, 2, 2, 2, 4, 3, 2, 2, 4, 4, 2, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2,],
    [4, 2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 4, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2,],
    [4, 2, 2, 2, 2, 1, 1, 1, 2, 4, 4, 2, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 4, 2, 2, 4, 2, 2, 2, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2,],
    [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 3, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2,],
            [4, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 4, 2, 2, 4, 4, 2, 2, 2, 3, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2,],
            [4, 2, 2, 3, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2,],
            [4, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 4, 4, 2, 2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
            [4, 4, 4, 4, 2, 2, 4, 4, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 4, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 4, 4, 2, 1, 4, 4, 4, 4, 4, 4, 2, 1, 1, 1, 1, 1, 2, 2, 3,],
            [4, 4, 2, 2, 2, 3, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 4, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 4, 2, 3, 2, 2, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
            [2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 4, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2,],
            [2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 1, 2, 2, 3, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2,],
            [1, 1, 1, 1, 1, 2, 2, 4, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 3, 4, 2, 2, 2, 4, 2, 2, 2, 2, 4, 4, 2, 2, 3, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2,],
            [2, 2, 2, 2, 2, 2, 4, 4, 2, 3, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 3, 4, 2, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 4, 2, 3, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2,],
            [2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 3, 2,],
            [2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 3, 4, 2, 2, 3, 2, 2, 2, 1, 1, 1, 1, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 3, 2, 1, 2, 2, 2,],
            [4, 4, 4, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
            [2, 2, 4, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
            [2, 2, 4, 4, 2, 2, 2, 4, 2, 1, 1, 2, 3, 2, 4, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2,],
            [2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 2, 1, 1, 1, 1, 2, 2, 4, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2,],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2,],
            [2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 4, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 2, 2, 4, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1,],
            [2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 1, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2,],
            [2, 2, 2, 2, 2, 3, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 1, 2, 2, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
            [2, 2, 2, 2, 1, 2, 2, 2, 4, 2, 2, 2, 2, 4, 2, 2, 3, 2, 1, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
            [2, 2, 2, 2, 1, 2, 2, 2, 4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 3, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 2, 2, 2, 2, 2, 4, 2, 3, 2, 4, 4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
            [2, 2, 1, 1, 1, 1, 1, 1, 4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 3, 2, 2, 4, 4, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 3, 2, 2,],
            [2, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 3, 2, 4, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 3, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 2, 4, 4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
            [2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 4, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 4, 2, 2, 2, 4, 4, 2, 2, 4, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2,],
            [2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
let playerdata = 3;
const playerlist =[
    'assets/mae.png',//まえ
    'assets/migi.png',//みぎ
    'assets/hidari.png',
    'assets/usiro.png'
];
const enemylist =[
    'assets/mae_enemy.png',//まえ
    'assets/migi_enemy.png',//みぎ
    'assets/hidari_enemy.png',
    'assets/usiro_enemy.png'
];
function userchange(){
    images[5]=playerlist[playerdata];
    map[playerPosition.y][playerPosition.x] = 5;
    loadImages(drawMap);
}
const playerPosition = { x: 35, y: 12 };
const viewRadius = 4;
const loadedImages = {};
// マップを描画
// タイルの画像をロード
const images = {
    1: 'assets/house.png',  // 道の画像パス
    2: 'assets/ground.png',  // 壁の画像パス
    3: 'assets/present.png',
    4:'assets/tree.png',
    5: 'assets/usiro.png',
    6: 'assets/usiro_enemy.png'// 草の画像パス
};
let point=0;
document.addEventListener('keydown', event => {
    // 変数eventの中身はKeyboardEventオブジェクト
    console.log(event.code);
    if(event.code==="ArrowUp"){
        if(map[playerPosition.y-1][playerPosition.x] == 2){
            playerdata=0;
            map[playerPosition.y][playerPosition.x] = 2;
            playerPosition.y--;
            
            userchange();
        }else if(map[playerPosition.y-1][playerPosition.x] == 3){
            playerdata=0;
            map[playerPosition.y][playerPosition.x] = 2;
            point++;
            const str = document.getElementById('count');
            str.innerHTML = (`現在プレゼント回収数:${point}`);
            const str1 = document.getElementById('count1');
            str1.innerHTML = (`残りプレゼント数:${65-point}`);
            if(point==65){
                gameclear();
            }
            playerPosition.y--;
            userchange();
        }
    }else if(event.code==="ArrowDown"){
        if(map[playerPosition.y+1][playerPosition.x] == 2){
        playerdata=3;
        map[playerPosition.y][playerPosition.x] = 2;
        playerPosition.y++;
        userchange();}else if(map[playerPosition.y+1][playerPosition.x] == 3){
            playerdata=3;
            map[playerPosition.y][playerPosition.x] = 2;
            point++;
            const str = document.getElementById('count');
            str.innerHTML = (`現在プレゼント回収数:${point}`);
            const str1 = document.getElementById('count1');
            str1.innerHTML = (`残りプレゼント数:${65-point}`);
            if(point==65){
                gameclear();
            }
            playerPosition.y++;
            userchange();
        }
    }else if(event.code==="ArrowRight"){
        if(map[playerPosition.y][playerPosition.x+1] == 2){
        playerdata=1;
        map[playerPosition.y][playerPosition.x] = 2;
        playerPosition.x++;
        userchange();}else if(map[playerPosition.y][playerPosition.x+1] == 3){
            playerdata=1;
            map[playerPosition.y][playerPosition.x] = 2;
            point++;
            const str = document.getElementById('count');
            str.innerHTML = (`現在プレゼント回収数:${point}`);
            const str1 = document.getElementById('count1');
            str1.innerHTML = (`残りプレゼント数:${65-point}`);
            if(point==65){
                gameclear();
            }
            playerPosition.x++;
            userchange();
        }
    }else if(event.code==="ArrowLeft"){
        if(map[playerPosition.y][playerPosition.x-1] == 2){
        playerdata=2;
        map[playerPosition.y][playerPosition.x] = 2;
        playerPosition.x--;
        userchange();}else if(map[playerPosition.y][playerPosition.x-1] == 3){
            playerdata=2;
            map[playerPosition.y][playerPosition.x] = 2;
            point++;
            const str = document.getElementById('count');
            str.innerHTML = (`現在プレゼント回収数:${point}`);
            const str1 = document.getElementById('count1');
            str1.innerHTML = (`残りプレゼント数:${65-point}`);
            if(point==65){
                gameclear();
            }
            playerPosition.x--;
            userchange();
        }
    }
    
});
function p(text){
    if(text==="Up"){
        if(map[playerPosition.y-1][playerPosition.x] == 2){
            playerdata=0;
            map[playerPosition.y][playerPosition.x] = 2;
            playerPosition.y--;
            
            userchange();
        }else if(map[playerPosition.y-1][playerPosition.x] == 3){
            playerdata=0;
            map[playerPosition.y][playerPosition.x] = 2;
            point++;
            const str = document.getElementById('count');
            str.innerHTML = (`現在プレゼント回収数:${point}`);
            const str1 = document.getElementById('count1');
            str1.innerHTML = (`残りプレゼント数:${65-point}`);
            if(point==65){
                gameclear();
            }
            playerPosition.y--;
            userchange();
        }
    }else if(text==="Down"){
        if(map[playerPosition.y+1][playerPosition.x] == 2){
        playerdata=3;
        map[playerPosition.y][playerPosition.x] = 2;
        playerPosition.y++;
        userchange();}else if(map[playerPosition.y+1][playerPosition.x] == 3){
            playerdata=3;
            map[playerPosition.y][playerPosition.x] = 2;
            point++;
            const str = document.getElementById('count');
            str.innerHTML = (`現在プレゼント回収数:${point}`);
            const str1 = document.getElementById('count1');
            str1.innerHTML = (`残りプレゼント数:${65-point}`);
            if(point==65){
                gameclear();
            }
            playerPosition.y++;
            userchange();
        }
    }else if(text==="Right"){
        if(map[playerPosition.y][playerPosition.x+1] == 2){
        playerdata=1;
        map[playerPosition.y][playerPosition.x] = 2;
        playerPosition.x++;
        userchange();}else if(map[playerPosition.y][playerPosition.x+1] == 3){
            playerdata=1;
            map[playerPosition.y][playerPosition.x] = 2;
            point++;
            const str = document.getElementById('count');
            str.innerHTML = (`現在プレゼント回収数:${point}`);
            const str1 = document.getElementById('count1');
            str1.innerHTML = (`残りプレゼント数:${65-point}`);
            if(point==65){
                gameclear();
            }
            playerPosition.x++;
            userchange();
        }
    }else if(text==="Left"){
        if(map[playerPosition.y][playerPosition.x-1] == 2){
        playerdata=2;
        map[playerPosition.y][playerPosition.x] = 2;
        playerPosition.x--;
        userchange();}else if(map[playerPosition.y][playerPosition.x-1] == 3){
            playerdata=2;
            map[playerPosition.y][playerPosition.x] = 2;
            point++;
            const str = document.getElementById('count');
            str.innerHTML = (`現在プレゼント回収数:${point}`);
            const str1 = document.getElementById('count1');
            str1.innerHTML = (`残りプレゼント数:${65-point}`);
            if(point==65){
                gameclear();
            }
            playerPosition.x--;
            userchange();
        }
    }
}
function loadImages(callback) {
    let loadedCount = 0;
    const totalImages = Object.keys(images).length;

    for (let key in images) {
        loadedImages[key] = new Image();
        loadedImages[key].src = images[key];
        loadedImages[key].onload = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                callback();
            }
        };
    }
}

function drawMap() {
    context.clearRect(0, 0, canvas.width, canvas.height); // キャンバスをクリア

    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            const tile = map[row][col];
            const distanceX = Math.abs(col - playerPosition.x);
            const distanceY = Math.abs(row - playerPosition.y);

            if (distanceX <= viewRadius && distanceY <= viewRadius) {
                context.drawImage(loadedImages[tile], col * tileSize, row * tileSize, tileSize, tileSize);
            } else {
                context.fillStyle = 'black'; // 見えないタイルは黒で塗りつぶす
                context.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
            }
        }
    }
}
// 複数の敵キャラクターの初期位置と向きを格納したリスト
let enemies = [
    { x: 28, y: 20, data: 3, lastX: 28, lastY: 20 },  // 1体目の敵
    { x: 70, y: 0, data: 3, lastX: 70, lastY: 0 },    // 2体目の敵
    { x: 15, y: 15, data: 3, lastX: 15, lastY: 15 },
    { x: 20, y: 30, data: 3, lastX: 70, lastY: 0 },
    { x: 0, y: 0, data: 3, lastX: 70, lastY: 0 }
    
];
let enemies1 = [
    { x: 70, y: 20, data: 3, lastX: 70, lastY: 0 }
];

function moveEnemies() {
    for (let enemy of enemies) {

        const directions = [
            { x: 1, y: 0, data: 1 }, // 右
            { x: -1, y: 0, data: 2 }, // 左
            { x: 0, y: 1, data: 0 }, // 下
            { x: 0, y: -1, data: 3 } // 上
        ];

        directions.sort((a, b) => {
            const distA = Math.abs((enemy.x + a.x) - playerPosition.x) + Math.abs((enemy.y + a.y) - playerPosition.y);
            const distB = Math.abs((enemy.x + b.x) - playerPosition.x) + Math.abs((enemy.y + b.y) - playerPosition.y);
            return distA - distB;
        });

        let moved = false;
        for (let direction of directions) {
            const newX = enemy.x + direction.x;
            const newY = enemy.y + direction.y;

            if (map[newY][newX] == 2 && (newX !== enemy.lastX || newY !== enemy.lastY)) {
                map[enemy.y][enemy.x] = 2; 
                enemy.lastX = enemy.x;
                enemy.lastY = enemy.y;
                enemy.x = newX;
                enemy.y = newY;
                enemy.data = direction.data;

                images[6] = enemylist[enemy.data];
                map[enemy.y][enemy.x] = 6;
                moved = true;
                break;
            }else if(map[newY][newX] == 5 && (newX !== enemy.lastX || newY !== enemy.lastY)){
                gameover()
            }
        }
        if (!moved) {
            for (let direction of directions) {
                const newX = enemy.x + direction.x;
                const newY = enemy.y + direction.y;
                if (map[newY][newX] == 2) {
                    map[enemy.y][enemy.x] = 2;
                    enemy.lastX = enemy.x;
                    enemy.lastY = enemy.y;
                    enemy.x = newX;
                    enemy.y = newY;
                    enemy.data = direction.data;

                    images[6] = enemylist[enemy.data];
                    map[enemy.y][enemy.x] = 6;
                    break;
                }else if(map[newY][newX] == 5){
                    gameover()
                }
            }
        }
    }
    loadImages(drawMap);
}
function earlychild(){
    for (let enemy of enemies1) {

        const directions = [
            { x: 1, y: 0, data: 1 }, // 右
            { x: -1, y: 0, data: 2 }, // 左
            { x: 0, y: 1, data: 0 }, // 下
            { x: 0, y: -1, data: 3 } // 上
        ];

        directions.sort((a, b) => {
            const distA = Math.abs((enemy.x + a.x) - playerPosition.x) + Math.abs((enemy.y + a.y) - playerPosition.y);
            const distB = Math.abs((enemy.x + b.x) - playerPosition.x) + Math.abs((enemy.y + b.y) - playerPosition.y);
            return distA - distB;
        });

        let moved = false;
        for (let direction of directions) {
            const newX = enemy.x + direction.x;
            const newY = enemy.y + direction.y;

            if (map[newY][newX] == 2 && (newX !== enemy.lastX || newY !== enemy.lastY)) {
                map[enemy.y][enemy.x] = 2; 
                enemy.lastX = enemy.x;
                enemy.lastY = enemy.y;
                enemy.x = newX;
                enemy.y = newY;
                enemy.data = direction.data;

                images[6] = enemylist[enemy.data];
                map[enemy.y][enemy.x] = 6;
                moved = true;
                break;
            }else if(map[newY][newX] == 5 && (newX !== enemy.lastX || newY !== enemy.lastY)){
                gameover()
            }
        }
        if (!moved) {
            for (let direction of directions) {
                const newX = enemy.x + direction.x;
                const newY = enemy.y + direction.y;
                if (map[newY][newX] == 2) {
                    map[enemy.y][enemy.x] = 2;
                    enemy.lastX = enemy.x;
                    enemy.lastY = enemy.y;
                    enemy.x = newX;
                    enemy.y = newY;
                    enemy.data = direction.data;

                    images[6] = enemylist[enemy.data];
                    map[enemy.y][enemy.x] = 6;
                    break;
                }else if(map[newY][newX] == 5){
                    gameover()
                }
            }
        }
    }
    loadImages(drawMap);
}
loadImages(() => { setInterval(moveEnemies, 400); });
loadImages(() => { setInterval(earlychild, 200); });
function gameover(){
    window.location.href = 'gameover.html';
}
function gameclear(){
    window.location.href = 'clear.html';
}
map[enemyPosition.y][enemyPosition.x] = 6;
userchange();

 