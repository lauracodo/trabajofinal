
const form = document.getElementById('form-contacto');

const regExMail = /^\d+\.\s(.*)$/;
const regExLetras = /^[a-zA-Z]+$/;

const mailValido = mail => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

const validate = (e) => {
    e.preventDefault();
    const usuario = document.getElementById('nombre');
    const mail = document.getElementById('mail');

    if (!usuario.value.match(regExLetras)) {
      alert("Por favor, ingresa solamente letras");
      usuario.focus();
      return false;
    }

    if (!mail.value.match(regExMail)) {
      alert("Por favor, escribe un correo electrónico válido");
      mail.focus();
      return false;
    }
    
    return true;
}
form.addEventListener('submit', validate);