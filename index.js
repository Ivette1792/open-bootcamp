const nombre = "IVETTE";
const apellido = "FONTAINE";
const objeto = { nombre: nombre, apellido: apellido };

// Almacenar el objeto en sessionStorage
sessionStorage.setItem("miObjeto", JSON.stringify(objeto));

// Almacenar el objeto en localStorage
localStorage.setItem("miObjeto", JSON.stringify(objeto));

// Crear una cookie que caduque en 2 minutos con los datos del objeto anterior
const fechaExpiracion = new Date(Date.now() + 120000); // Caduca en 2 minutos
document.cookie = `miObjeto=${JSON.stringify(objeto)}; expires=${fechaExpiracion.toUTCString()}`;

