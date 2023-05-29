let persona = {
    nombre: "Natalia Chavarria",
    edad: 25,
    ciudad: "Medellín",
    profesion: "Ingeniera Mecanica",
}


function presentacion(obj) {
    let llaves = Object.keys(obj);
    let mensajes = "";
    for (let i = 0; i < llaves.length - 1; i++) {
        mensajes = mensajes + " " + persona[llaves[i]]
    }
    return mensajes
}

console.log(presentacion(persona))
persona.hobbies = ["bailar", "cantar", "yoga"];
console.log(persona.hobbies)

for (let i = 0; i < persona.hobbies.length; i = i + 1) {
    m = persona.hobbies[i]
    console.log(m)
}
