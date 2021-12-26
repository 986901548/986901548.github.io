window.onload = function () {

    init()

    function init() {
        setInfoImgsClick()
    }




}



// 获取弹窗
function getPopup() {
    return document && document.getElementById('bigImgPopup')
}

// 关闭大图
function onClickCloseBigImgPopup() {
    getPopup().classList.add('hide')
    getPopup().classList.remove('show')
}


// 设置描述图片点击事件
function setInfoImgsClick() {
    // 获取所有图片
    const infoChild = document.getElementsByClassName('info')[0].children
    var imgs = []
    for (let index = 0; index < infoChild.length; index++) {
        const element = infoChild[index];
        if (element.localName === 'img') {
            imgs.push(element)
            // 设置点击事件
            element.onclick = function () {
                openBigImg(element)
            }
        }
    }
}

// 打开大图
function openBigImg(element) {
    getPopup().classList.remove('hide')
    getPopup().classList.add('show')

    let bigImg = document && document.getElementById('bigImg')
    bigImg.src = element.src
}