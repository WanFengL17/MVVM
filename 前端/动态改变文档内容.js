document.addEventListener('DOMContentLoaded', function() {
    const changeTitleButton = document.getElementById('changeTitle');
    changeTitleButton.addEventListener('click', function() {
        // 改变<h1>元素的内容
        document.getElementById('h1').innerText = '欢迎来到我的网站';

        // 获取当前时间
        const currentTimeDiv = document.getElementById('currentTime');
        const now = new Date();
        const timeStr = now.toTimeString().split(' ')[0]; // 获取小时:分钟:秒

        // 显示当前时间
        currentTimeDiv.innerText = '当前时间: ' + timeStr;
    });
});