const form = document.querySelector(".form");
const qr = document.querySelector(".qrcode");
const text = document.querySelector(".form__input");
const main = document.querySelector(".main");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (text.value !== "") {
        if (qr.innerHTML !== "") {
            qr.innerHTML = "";
        }

        new QRCode(qr, text.value);
        main.classList.add("with-qr");
    } else {
        if (qr.innerHTML !== "") {
            main.classList.remove("with-qr");
            setTimeout(() => {
                qr.innerHTML = "";
            }, 500); 
        }
    }
});