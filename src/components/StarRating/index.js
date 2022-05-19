import { useMemo } from "react"
import "./style.css"
const Star = () => {
    return (
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
            <path d="M0 0h18v18H0z" fill="none" />
        </svg>
    )
}
const StarRating = ({ count }) => {
    const stars = useMemo(() => {
        const r = []
        if(count>5||count<1||typeof count!="number"){
            return r
        }
        
        for (let i = 0; i < count; i++) {
            r.push(<Star/>)
        }
        return r
    }, [count])
    return (<ul className="card-body-stars u-clearfix">
        {stars.map((star) => {
            return <li>{star}</li>
        })
        }
    </ul>)
}
export default StarRating   