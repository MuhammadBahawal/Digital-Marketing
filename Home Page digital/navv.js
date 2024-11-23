let line = document.querySelector('.three-line')
let ul = document.querySelector('#nav-toogle')

let fun = () => {
    if (ul.style.display != 'none') {
        ul.style.display = 'none'
    }
    else {
        ul.style.display = 'block'
    }
}

