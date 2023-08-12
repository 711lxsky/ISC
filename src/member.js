function visualable(a) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("text").innerHTML =
                this.responseText
        }
    }
    xhttp.open("GET",a);
    xhttp.send();
}


function good() {
    console.log("good")
}

function handleTopComponentClick(event) {
    event.stopPropagation(); // 阻止事件继续传播到下部组件
    console.log("Top component is clicked");
}

function handleClick(event) {
    // 获取点击的目标元素
    let target = event.target || event.srcElement;

    // 检查点击的元素是否为 id="background" 的组件本身
    if (target.id !== "background") {
        // 阻止事件继续冒泡
        event.stopPropagation();
        return false;
    }
}
