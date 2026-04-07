function changeMood() {
    const moods = [
        { msg: "Code 一次就過！", color: "#2ecc71" },
        { msg: "Bug 正在路上...", color: "#e74c3c" },
        { msg: "今晚又要熬夜了？", color: "#3498db" },
        { msg: "編譯器愛你！", color: "#9b59b6" },
        { msg: "咖啡因不足...", color: "#f39c12" }
    ];
    
    const randomIndex = Math.floor(Math.random() * moods.length);
    const selected = moods[randomIndex];
    
    document.getElementById('message').innerText = selected.msg;
    document.body.style.backgroundColor = selected.color;
}