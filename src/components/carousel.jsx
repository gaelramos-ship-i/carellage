import { useState } from "react"
import work from "../data/work.json"
import '../styles/carousel.scss';

const Carousel = () => {
    let [index, setIndex] = useState(0)

    function handleClick(button){
        
        if(button === 1){
            setIndex(prevIndex => 
                prevIndex === work.length - 1 ? 0 : prevIndex + 1 
            )
        } else {
            setIndex(prevIndex => 
                prevIndex === 0 ? work.length - 1 : prevIndex - 1
            )
        }
    }

    return (
        <section className="section-carousel">

            <div>
                <h1>Anthony Ramos</h1>
                <hr />
                <h2>Découvrez mon travail !</h2>
            </div>

            <div>

                <img src={work[index].image} alt="carousel-image" width={'280px'} />

                <div className="controls">
                    <button onClick={() => handleClick(0)}>Précédent</button>
                    <button onClick={() => handleClick(1)}>Suivant</button>
                </div>

                <div className="points-container"></div>

            </div>
        </section>
    )
}

export default Carousel