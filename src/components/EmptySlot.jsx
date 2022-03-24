import emptyImg from '../images/molehill.png'
import { useEffect } from 'react'

function EmptySlot(props) {

    useEffect(() => {
        let time = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, time)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src={emptyImg}></img>
        </div>
    )
}

export default EmptySlot;