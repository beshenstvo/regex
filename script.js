//проверка Email 
document.getElementById('email').onblur = function() { //когда фокус убираем 
    if( !this.value.match(/[a-zA-Z0-9_.-]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z]{2,}/gm)) { 
      this.classList.add('invalidInput')
      invalidCheckEmail1.innerHTML = '* Необходимо заполнить поле в формате xxx@xxx.xxx'
    }
    if(document.getElementById('email').value.replace(/\s/g, '').length > 128) { 
      this.classList.add('invalidInput')
      invalidCheckEmail2.innerHTML = ' * Размер поля ограничен 128 символами.'
      }
  }
  document.getElementById('email').onfocus = function() { //при фокусе 
      this.classList.remove('invalidInput');
      invalidCheckEmail1.innerHTML = ''
      invalidCheckEmail2.innerHTML = ''
  }
  
  //проверка имени
  document.getElementById('name').onblur = function() { 
    if( this.value.match(/[№";.,:`±!@#$%^&*()_+<>?\/\{}[\]]+|[0-9]+/gm)) { 
      this.classList.add('invalidInput')
      invalidCheckName1.innerHTML = '* Поле заполнено некорректно. Нельзя использовать спецсимволы'
    }
    if(document.getElementById('name').value.replace(/\s/g, '').length > 128) { 
      this.classList.add('invalidInput')
      invalidCheckName2.innerHTML = ' * Размер поля ограничен 128 символами.'
    }
  }
  document.getElementById('name').onfocus = function() { 
    this.classList.remove('invalidInput');
    invalidCheckName1.innerHTML = ''
    invalidCheckName2.innerHTML = ''
  }
  
  //проверка фамилии 
  document.getElementById('lastname').onblur = function() { 
    if( this.value.match(/[№";.,:`±!@#$%^&*()_+<>?\/\{}[\]]+|[0-9]+/gm)) { 
      this.classList.add('invalidInput')
      invalidCheckLastname1.innerHTML = '* Поле заполнено некорректно. Нельзя использовать спецсимволы'
    }
    if(document.getElementById('lastname').value.replace(/\s/g, '').length > 128) { 
      this.classList.add('invalidInput')
      invalidCheckLastname2.innerHTML = ' * Размер поля ограничен 128 символами.'
    }
  }
  document.getElementById('lastname').onfocus = function() { 
    this.classList.remove('invalidInput');
    invalidCheckLastname1.innerHTML = ''
    invalidCheckLastname2.innerHTML = ''
  }
  
  //проверка пароля первое поле
  document.getElementById('password').onblur = function() { 
    if(this.value.match(/\s/gm)) {
      this.classList.add('invalidInput')
      invalidCheckPassword1.innerHTML = ' * В пароле не должны содержаться пробелы.'
    }else if((this.value.length <= 8) || (!this.value.match(/\W+/g)) || (!this.value.match(/[0-9]+/g))) { 
      this.classList.add('invalidInput')
      invalidCheckPassword2.innerHTML = ' * Пароль должен содержать не менее 8 символов и должен содержать хотя бы один спецсимвол и цифру'
    }else{
      console.log('правильный пароль')
      document.getElementById("passwordTwo").removeAttribute("disabled");
      //выключить disabled
    }
  }
  document.getElementById('password').onfocus = function() { 
    this.classList.remove('invalidInput');
    invalidCheckPassword1.innerHTML = ''
    invalidCheckPassword2.innerHTML = ''
    document.getElementById("passwordTwo").setAttribute("disabled", 'disabled');
    //включить disabled
  }
  
  //проверка пароля второе поле
  document.getElementById('passwordTwo').onblur = function() { 
    if(this.value != document.getElementById('password').value) {
      this.classList.add('invalidInput')
      invalidCheckPasswordTwo1.innerHTML = ' * Пароли должны совпадать.'
    }
  }
  document.getElementById('passwordTwo').onfocus = function() { 
    this.classList.remove('invalidInput');
    invalidCheckPasswordTwo1.innerHTML = ''
    invalidCheckPasswordTwo2.innerHTML = ''
  }
  
  //remove gridCheck
  function removeError() { 
    invalidCheckGridCheck.innerHTML = '';
  }
  
  function check() { //конечная проверка всех полей
    invalidMain.innerHTML = 'Некорректно заполнены поля: ';
    if(!document.getElementById('gridCheck').checked) {
      invalidCheckGridCheck.innerHTML = ' * Для регистрации необходимо ознакомиться с лицензионным соглашением и принять его.'
    }
    if((!document.getElementById("email").value.match(/[a-zA-Z0-9_.-]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z]{2,}/gm))){ // email
      invalidMain.innerHTML += 'email';
      email.classList.add('invalidInput')
      invalidCheckEmail1.innerHTML = '* Необходимо заполнить поле в формате xxx@xxx.xxx'
    }
    if((document.getElementById('password').value.length <= 8) || (!document.getElementById('password').value.match(/\W+/g)) || (!document.getElementById('password').value.match(/[0-9]+/g)) ){
      invalidMain.innerHTML += ' пароль'
      password.classList.add('invalidInput')
      invalidCheckPassword2.innerHTML = ' * Пароль должен содержать не менее 8 символов и должен содержать хотя бы один спецсимвол и цифру'
    }else if((document.getElementById('password').value != document.getElementById('passwordTwo').value)){
      invalidMain.innerHTML += ' пароль'
      passwordTwo.classList.add('invalidInput')
      invalidCheckPasswordTwo1.innerHTML = ' * Пароли должны совпадать.'
    }else{
      window.location.href = './home.html';
    }
    
  }