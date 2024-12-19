import {Canvas} from "@react-three/fiber";
import './CardModelViewer.css'
import {Environment, OrbitControls, useGLTF} from "@react-three/drei";

const Card = () => {
    const {scene} = useGLTF("./model/CardLL-Rediseño-2.glb");

    /* eslint-disable-next-line react/no-unknown-property */
    return <primitive object={scene}>

    </primitive>
}


export const CardModelViewer = () => {


    return (
        <div className="canvas-container">
            <Canvas
                className="canvas-model-viewer"
                camera={{position: [-3.5, 0.5, 3.5]}}
            >
                {/*<Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                    <meshStandardMaterial color="#333" />
                </Plane>*/}
                {/* eslint-disable-next-line react/no-unknown-property */}
                <ambientLight />
                {/* eslint-disable-next-line react/no-unknown-property */}
                <pointLight position={[0, -1, -2]}></pointLight>
                {/* eslint-disable-next-line react/no-unknown-property */}
                <directionalLight position={[5, 5, 5]} intensity={1.5}/>
                {/* eslint-disable-next-line react/no-unknown-property */}
                <directionalLight position={[-5, 5, -5]} intensity={2.5}/>
                <Card/>
                <OrbitControls

                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 4}
                    maxDistance={15}
                    minDistance={2}
                />
                 <Environment files="./hdr/fondo.hdr" background />
            </Canvas>
        </div>
    )
}