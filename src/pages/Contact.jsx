import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import { useState } from "react";
import '../styles/contact.scss'

function Contact() {

    const [nom, setNom] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("");
    const [projet, setProjet] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nom :", nom);
        console.log("Téléphone :", telephone);
        console.log("Email :", email);
        console.log("Type de projet :", type);
        console.log("Projet :", projet);
    };

    return (
        <section className="section-contact">
            <div className="maxWidth">
                <div className="contact">

                    <h1>Me contacter</h1>
                    <hr />
                    <p>Besoin d'un devis ou d'un renseignement ? Contactez-moi !</p>

                    <div className="icons">
                        <article>
                            <BsTelephone />
                            <p>06 09 07 22 25</p>
                        </article>
                        <article>
                            <CiMail />
                            <p>ramosanthony@hotmail.fr</p>
                        </article>
                        <article>
                            <GiPositionMarker />
                            <p>Brignoles et ses alentours</p>
                        </article>
                    </div>
                </div>

                <div className="formulaire">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder="Saisir votre nom"
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="Saisir votre numéro de téléphone"
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Saisir votre email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="" disabled>Type de projet</option>
                                <option value="Carrelage intérieur">Carrelage intérieur</option>
                                <option value="Terrase / extérieur">Terrase / extérieur</option>
                                <option value="Rénovation">Rénovation</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                        <div>
                            <textarea
                                type="text"
                                placeholder="Saisir votre projet"
                                value={projet}
                                onChange={(e) => setProjet(e.target.value)}
                            />
                        </div>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact