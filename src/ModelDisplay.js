/*import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useThree } from '@react-three/fiber';

function Model() {
  const groupRef = useRef();

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load('C:/Users/DEAVANATHAN/Downloads/Orc Idle (1).fbx', (fbx) => {
      if (groupRef.current) {
        groupRef.current.add(fbx);
      }
    });
  }, []);

  return <group ref={groupRef} />;
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[10, 20, 10]} angle={0.3} />
    </>
  );
}

function CameraSetup() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 5, 10); // Adjust camera position
    camera.lookAt(0, 0, 0); // Point camera at the center of the scene
  }, [camera]);
  return null;
}

export default function ModelDisplay() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas shadows>
        <CameraSetup />
        <Lights />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
*/