import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense} from "react";


function Model() {
    const { scene } = useGLTF("guitar.glb")
    return <primitive object={scene} />;
}


export default function ShowInstrument() {
    
    return (
        <div style={{ height: 450, width: 600, backgroundColor: "white" }}>
            <Canvas concurrent pixelRatio={[1, 1.5]} camera={{ position: [1, 0, 1] }}>
                <ambientLight intensity={1} />
                <spotLight intensity={1} angle={0.1} penumbra={0.9} position={[5, 25, 20]} />
                <Suspense fallback={null}>
                    <Model modelPath="/guitar.glb" />
                </Suspense>
                <OrbitControls />           
            </Canvas>

        </div>
    )
}