import {Canvas} from "@react-three/fiber";
import './CardModelViewer.css'
import {OrbitControls, useGLTF} from "@react-three/drei";

const Card = () => {
    const {scene} = useGLTF("./model/cardLeaderLed.glb");

    /* eslint-disable-next-line react/no-unknown-property */
    return <primitive object={scene}>

    </primitive>
}


export const CardModelViewer = () => {


    return (
        <div className="canvas-container">
            <Canvas
                className="canvas-model-viewer"
                camera={{position: [0, 0, 7.5]}}
            >
                <ambientLight/>
                {/* eslint-disable-next-line react/no-unknown-property */}
                <pointLight position={[10, 10, 10]}></pointLight>
                <Card/>
                <OrbitControls
                    autoRotate autoRotateSpeed={1.5}
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 4}
                    maxDistance={15}
                    minDistance={5}
                />
            </Canvas>
        </div>
    )
}