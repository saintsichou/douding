var list =document.getElementsByClassName('hkswf-content');
console.log(a)
for (let i = 0; i < list.length; i++) {
    const canvas = list[i].getElementsByTagName('canvas')[0];
    console.log(canvas)
    restoreImg(canvas,i)
}
function restoreImg(c,i) {
    let name = i // 'canvas绘制图片'为图片默认名
    if (name === "") {
        alert('名字不能为空')
    } else {
        let href = c.toDataURL() // 获取canvas对应的base64编码
        let a = document.createElement('a') // 创建a标签
        a.download = name // 设置图片名字
        a.href = href
        a.dispatchEvent(new MouseEvent('click'))
    }
}
