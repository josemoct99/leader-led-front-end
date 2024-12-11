import './Brand.css'
import {Brand as BrandType} from '../../../types/brand'


export const Brand = ({name, images}: BrandType) => {

    let stringImage :string[] = []
    images.forEach(image => {
        image.typeSet.forEach(type => {
            stringImage.push(image.url+"."+type?.type);
        })
    })

    console.log(stringImage[0])

    const principalImg = "images/brands/" + stringImage[0] // principal image
    return (
        <>
            <button className="brand" title={name}>
                <img src={principalImg} alt={`${name}-img`}/>

            </button>
        </>
    )
}