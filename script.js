// script.js
function highlightToday() {
    const today = new Date().getDay();
    const allCells = document.querySelectorAll('td');
    
    // 清除舊的高亮
    allCells.forEach(cell => cell.classList.remove('highlight'));

    // 根據今天日期找到對應的 class
    const todayCells = document.querySelectorAll('.day-' + today);
    
    if (todayCells.length > 0) {
        todayCells.forEach(cell => cell.classList.add('highlight'));
        alert("已為您標記今天的課程！");
    } else {
        alert("今天沒有課，或是今天不在週一至週三的範例範圍內喔！");
    }
}