function moveToggle(position) {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${position}px)`;
    
    // トグルの位置データを取得して表示
    const selectedOption = position / 60;  // 0, 1, 2に変換
    console.log('選択されたオプション:', selectedOption);
}
