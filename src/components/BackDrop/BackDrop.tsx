import './BackDrop.css'

interface Props{
    onClick : () => void;
}

export const BackDrop = ({onClick}:Props) => {
    return(
        <div className="BackDrop" onClick={onClick}>
        </div>
    )

}