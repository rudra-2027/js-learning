const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')
function display() {

}
display()
setInterval(function () {
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = (date.toLocaleTimeString())
}, 1000)