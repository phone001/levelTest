const _btn = document.querySelectorAll("input[type='button']");

let total = 0;

_btn.forEach((el) => {
    el.onclick = (e) => {
        const _input = document.querySelector(".input-form>div");
        const regExp = /[*%+-]/g;


        if (e.target.value === "AC") {
            _input.innerHTML = "";
            total = 0;
            return;
        }
        if (e.target.value === "=") {

            console.log(_input.innerHTML.indexOf(/[*//+-]/g))
            const upNumberArray = _input.innerHTML.split(/[*\/+-]/g);


            return;
        }



        _input.append(e.target.value);
    }

})

function result() {
    const _input = document.querySelector(".input-form>div");

    if (reg !== '')
        switch (reg) {
            case '+':
                total += parseInt(_input.innerHTML)
                break;
            case '-':
                total -= parseInt(_input.innerHTML)
                break;
            case '*':
                total *= parseInt(_input.innerHTML)
                break;
            case '%':
                total /= parseInt(_input.innerHTML)
                break;
        }
    reg = '';
    total = 0;
}
