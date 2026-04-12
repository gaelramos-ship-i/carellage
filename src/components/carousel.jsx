import { useState, useEffect } from "react"
import work from "../data/work.json"
import '../styles/carousel.scss';

const Carousel = () => {
    let [index, setIndex] = useState(0)

    function handleClick(button) {

        if (button === 1) {
            setIndex(prevIndex =>
                prevIndex === work.length - 1 ? 0 : prevIndex + 1
            )
        } else {
            setIndex(prevIndex =>
                prevIndex === 0 ? work.length - 1 : prevIndex - 1
            )
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleClick(1)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="section-carousel">

            <div className="text">
                <h1>Artisan Carreleur Mosaïste</h1>
                <h2><span>Anthony</span> Ramos</h2>
                <p>Artisan carreleur depuis plus de 30 ans, installé à mon compte depuis 2000 dans le Var. Je m’occupe de tous vos travaux de revêtements de sol, en neuf comme en rénovation. Un projet ? Contactez-moi.</p>
                <button id="contact">Me contacter</button>
            </div>

            <div className="carousel-img">

                <img src={work[index].image} alt="carousel-image" width={'280px'} />

                <h2>Mon travail</h2>

                <div className="controls">
                    <button onClick={() => handleClick(0)}>&lt;</button>
                    <button onClick={() => handleClick(1)}>&gt;</button>
                </div>

            </div>
        </section>
    )
}

export default Carousel