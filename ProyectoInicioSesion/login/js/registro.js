class Registro{
    constructor(nombre,fechaNacimiento,genero,departamento,ciudad,telefono,descripcion){
        this.nombre= nombre
        this.fechaNacimiento= fechaNacimiento
        this.genero= genero
        this.departamento= departamento
        this.ciudad= ciudad
        this.telefono= telefono
        this.descripcion= descripcion
    }

    mostrarInfo(){
        return `${this.nombre}+${this.fechaNacimiento}+${this.genero}+${this.departamento}+${this.ciudad}+${this.telefono}, ${this.descripcion}`
    }
}

function obtenerDatos(){
    let nombre= document.getElementById('nombre').value
    let fechaNacimiento= document.getElementById('fechaNacimiento').value
    let genero= document.getElementById('genero').value 
    let departamento= document.getElementById('departamento').value
    let ciudad= document.getElementById('ciudad').value
    let telefono= document.getElementById('telefono').value
    let descripcion = document.getElementById('descripcion').value
    
    let usuario1= new Registro(nombre,fechaNacimiento,genero,departamento,ciudad,telefono,descripcion)
    if(nombre==="" ||fechaNacimiento===""||genero===""||departamento===""|| telefono=="" ||ciudad===""||descripcion==="" ){
        alertify.success('Faltan campos que rellenar')
    }
    else{
        localStorage.setItem('usuario', JSON.stringify(usuario1))
        window.location.href = 'perfil.html'
    }
}   