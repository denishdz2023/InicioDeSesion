class Sesion {
    constructor(usuario, pass, bdusuario, bdpwd){
        this.usuario=usuario
        this.pass= pass
        this.bdusuario=bdusuario
        this.bdpwd=bdpwd
    }

    validar (){

        if(this.usuario==this.bdusuario && this.pass == this.bdpwd ){
            alertify.success('Inicio de sesión exitoso')
            window.location.href = 'registro.html';
        }else if(this.usuario!==this.bdusuario && this.pass !== this.bdpwd){
            alertify.success('Credenciales incorrectas incorrectos') 
        }else if( this.usuario==="" || this.pass===""){
            alertify.success('Rellene todos los campos')
        }else if (this.usuario !== this.bdusuario){
                alertify.success('Usuario incorrecto')

        }else if(this.pass !== this.bdpwd){
                alertify.success('Contraseña incorrecta')
        }
        
    }
    
}


class usuario extends Sesion{
    constructor(usuario, pass, bdusuario, bdpwd){
        super(usuario, pass, bdusuario, bdpwd)
    }
}

function login (){
    let user = document.getElementById('user').value
    let pwd = document.getElementById('pwd').value

    Consulta = new usuario(user,pwd,'Denis123','123')
    Consulta.validar()

}