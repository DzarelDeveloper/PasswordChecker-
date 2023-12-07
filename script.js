let password = document.querySelector('.container .input-box input');
let eye = document.querySelector('.container .input-box i');
let strengthMsg = document.querySelector('.container span');
let indicator = document.querySelector('.container .indicator-box div');

eye.addEventListener('click', () => {
        if (password.type == 'password') {
                password.type = "text";
                eye.classList.remove('fa-eye');
                eye.classList.add('fa-eye-slash');
        } else {
                password.type = "password";
                eye.classList.remove('fa-eye-slash');
                eye.classList.add('fa-eye');
        }
})

let Strength = (password) => {
        let i = 0;
        if (password.length > 6) {
                i++;
        }
        if (password.length >= 10) {
                i++;
        }
        if (/[A-Z]/.test(password)) {
                i++;
        }
        if (/[0-9]/.test(password)) {
                i++;
        }
        if (/[A-Za-z0-8]/.test(password)) {
                i++;
        }
        return i;
}

password.addEventListener('input', () => {
        let password = document.querySelector('.container .input-box input').value;
        if (password != '') {
                strengthMsg.style.display = 'block';
                document.querySelector('.indicator-box').style.display = 'block';
        } else {
                strengthMsg.style.display = 'none';
                document.querySelector('.indicator-box').style.display = 'none';
        }

        let strength = Strength(password);

        if (strength <= 2) {
                indicator.classList.add('weak');
                indicator.classList.remove('medium');
                indicator.classList.remove('strong');
                strengthMsg.innerHTML = '😮‍💨 Password strength is weak.'
        } else if (strength >= 2 && strength <= 4) {
                indicator.classList.remove('weak');
                indicator.classList.add('medium');
                indicator.classList.remove('strong');
                strengthMsg.innerHTML = '👻 Password strength is medium.'
        } else {
                indicator.classList.remove('weak');
                indicator.classList.remove('medium');
                indicator.classList.add('strong');
                strengthMsg.innerHTML = '😈 Password strength is strong.'
        }
})