import { Canvas } from '@react-three/fiber';

import { OrbitControls } from '@react-three/drei';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
interface ModelProps{
  name:string
  scale:number
}
const ThreeDModel= ({name,scale}:ModelProps) => {
  const modelPath = `/models/${name}/scene.gltf`;
  const gltf = useGLTF(modelPath);
    return (
      <Canvas style={{ width: '600px', height: '600px' }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <primitive object={gltf.scene} scale={[scale, scale, scale]} />
          <OrbitControls enableZoom={true}
                    minDistance={4} 
                    maxDistance={15}/>
      </Canvas>
    );
  };
  
  export default ThreeDModel;
  