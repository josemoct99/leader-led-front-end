import {Canvas} from "@react-three/fiber";
import {OrbitControls,useGLTF} from "@react-three/drei";

const Card = () => {
    const {scene} = useGLTF("./model/cardLeaderLed.glb")
    /* eslint-disable-next-line react/no-unknown-property */
    return <primitive object={scene}></primitive>
}


export const CardModelViewer = () => {
    return (
        <Canvas style={{width:"100%", height:"500px" }}>
            <ambientLight/>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <pointLight position={[0, 10, 10]}></pointLight>
            <Card/>
            <OrbitControls/>
        </Canvas>
    )
}