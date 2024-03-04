import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon2.png'
import icon4 from '../assets/icon4.png'
function Features() {
    return (
        <div className='features'>
            <section>
                <img src={icon1} alt='Declarative'></img>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs</p>
            </section>
            <section>
                <img src={icon2} alt='Declarative'></img>
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state</p>
            </section>
            <section>
                <img src={icon3} alt='Declarative'></img>
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the components</p>
            </section>
            <section>
                <img src={icon4} alt='Declarative'></img>
                <h2>JSX</h2>
                <p>statically-typed designed to run on modern browsers</p>
            </section>
        </div>
    )
}

export default Features