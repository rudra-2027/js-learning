const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body");
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        switch (e.target.id) {
            // case "grey":
            //     body.style.background = e.target.id;
            //     break;
            // case "white":
            //     body.style.background = e.target
            default:
                body.style.background = e.target.id;

        }
        // switch (key) {
        //     case value:

        //         break;

        //     default:
        //         break;
        // }
    })

})