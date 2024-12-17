import './MoveDiv.css'
import {Direction} from "../../../types";


interface Props {
    parentMethod: (d:number) => void;
    dir: Direction;
}

export const MoveDiv = ({parentMethod,dir}:Props) => {
    let direction:number = 0;

    if(dir === Direction.NEXT){
        direction = -1;
    }
    else{
        direction = 1;
    }

    return (
        <button className={`moveDiv ${dir}`} onClick={()=>parentMethod(direction)}>
            .
        </button>
    )
}