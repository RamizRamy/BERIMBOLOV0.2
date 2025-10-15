let input = document.querySelectorAll('input');
let message = document.querySelectorAll('.span');
let date = document.querySelector('#date')

function book() {

    if (input[0].value ==='') {
        message[0].innerHTML = 'Enter Your Name!'
    }
    else if (input[0].value.length < 3) {
        message[0].innerHTML = 'This Name is Invalid!'
    }
    else{
        message[0].innerHTML = ''
    }

    if (input[1].value ==='') {
        message[1].innerHTML = 'Enter Your Email!'
    }
    else if (input[1].value.match(/@/) === null || input[1].value.match(/./) === null) {
        message[1].innerHTML = 'Invalid Email(missing "@" or ".")'
    }
    else{
        message[1].innerHTML = ''
    }

    if (input[2].value ==='') {
        message[2].innerHTML = 'Enter Your Phone Number!'
    }
    else{
        message[2].innerHTML = ''
    }

    if (input[3].value ==='') {
        message[3].innerHTML = 'Enter Your Adress!'
    }
    else{
        message[3].innerHTML = ''
    }

    if (date.value ==='') {
        date.innerHTML = 'Enter The Date and Time Of the Installation!'
    }
    else{
        message[5].innerHTML = ''
    }
}