import './Brand.css'
import {Brand as BrandType} from '../../../types/brand'


export const Brand = ({name, image}: BrandType) => {


    return (
        <>
            <button className="brand" title={name}>
                <img src={image} alt={`${name}-img`}/>
            </button>
        </>
    )
}