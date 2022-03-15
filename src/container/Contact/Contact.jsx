import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';
import {data} from "../../constants";

const Result = () => {
    return(
       <p>Twoja wiadomość została wysłana pomyślnie.<br/> Wkrótce damy odpowiedź. Dziękujemy</p>
    )
}

const Contact = () => {
    const [result,showResult] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fyogglg', 'template_wbt8y4r', e.target, 'W_TFG-IGh1-NWbfWw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        showResult(true);
    };

    return (
        <div className="contactme">
            <div className="contact__overlay">
                <div className="form">
        <form action="" onSubmit={sendEmail}>
            <h1 className ="headtext__cormorant">Zapytaj o wolne miejsce</h1>
            <div className="form__contact">
                <div className ="form__contact-info">
                <span>Imię i Nazwisko:</span>
                <input className="input100" type="text" name="fullName" required/>
                <span>Numer telefonu:</span>
                <input className="input100" type="text" name="phone" required/>
                <span>Adres e-mail:</span>
                <input className="input100" type="text" name="email" required/>
                </div>
                <div className="form__contact-date">
                <span>Data od:</span>
                <input className="input100" type="date" name="datefrom" required/>
                <span>Data do:</span>
                <input className="input100" type="date" name="dateto" required/>
                </div>
                <div className="form__contact-moreinfo">
                <span>Dodatkowe informacje:</span>
                <textarea name="message" required></textarea>

                <button>Wyślij</button>
                </div>
                <div className="row">{result ? <Result/> : null }</div>
            </div>
        </form>
                    </div>
                <div className="app__footer-contact">
                    <h2 className=" app__footer-headtext">Skontaktuj się z nami</h2>
                    {data.contactInfo.map(contactInfo =>(<p className={contactInfo.className}> {contactInfo.name}</p>))}
                </div>
            </div>
        </div>
    );
};
export default Contact;
