import './Brand.css'
import {Brand as BrandType} from '../../../types/brand'


export const Brand = ({name, images}: BrandType) => {

    const principalImg = "images/brands/" +images[0].url +"."+ images[0].typeSet[0]?.type // this will be arranged in another moment jiji

    console.log(principalImg)

    return (
        <>
            <button className="brand" title={name}>
                <img src={principalImg} alt={`${name}-img`}/>

            </button>
        </>
    )
}