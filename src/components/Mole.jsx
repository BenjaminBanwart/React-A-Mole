import { useEffect } from 'react';
import moleImg from '../images/mole.png'

function Mole(props) {

    useEffect(() => {
        let time = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, time)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src={moleImg} onClick={props.handleBop}></img>
        </div>
    )
}

export default Mole;