

function verificar(evt){

    user = document.getElementById('user-auth-field')
    userAuth = user.value
  
    pass = document.getElementById('pass-auth-field')
    passAuth = pass.value
  
    if(userAuth.length <= 0 || passAuth.length <= 0){
      window.alert('Llena los campos de usuario y contraseña')
      evt.preventDefault();
    }
    else{
      if(userAuth === 'reginaeslomas' && passAuth ==='reginaeslomas'){
        window.alert('¡Iniciando sesión!')
        logueado = 1
      }
      else{
        window.alert('Usuario o contraseña incorrectos')
      }
    } 
  }

function registrar(){

  regname = document.getElementById('regname')
  regnameInput = regname.value

  regpass = document.getElementById('regpass')
  regpassInput = repass.value

  regtelephone = document.getElementById('regtelephone')
  regtelephoneInput = regtelephone.value

  regbirthdate = document.getElementById('regbirthdate')
  regbirthdateInput = regbirthdate.value

  regemail = document.getElementById('regemail')
  regemailInput = regemail.value

  if(regnameInput!==''){
    window.alert('Usuario creado')
  }
  else{
    if(userAuth === 'reginaeslomas' && passAuth ==='reginaeslomas'){
      window.alert('¡Iniciando sesión!')
    }
    else{
      
      window.alert('Usuario o contraseña incorrectos')
    }
  } 
}