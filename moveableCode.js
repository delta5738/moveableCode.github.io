let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/* 你好，我叫LM
 * 我要在这个页面里完成一个会动的太极图
 * 首先准备一个div,设置边界和长度和高度
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 首先，把 div 变成一个圆
 * border-radius：50%则生成一个圆
 * 通过CSS样式里的transform: translateX(-50%)生成一个半圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* background: linear-gradient在半圆处生成黑白两个半圆
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 这样就形成了一黑一白两个半圆
 **/
/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;

let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        // 将文本中的回车替换成HTML中的换行
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            // 如果 n 不是最后一个,就继续
            n += 1;
            step();
        }
    }, 50);
};

step(); // 1=>2