import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingSpheres = ({ count = 8 }) => {
  const meshes = useRef([]);
  
  const spheres = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
      ],
      scale: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 0.5 + 0.2,
      color: new THREE.Color().setHSL(Math.random() * 0.2 + 0.5, 0.7, 0.5),
    }));
  }, [count]);

  useFrame((state) => {
    meshes.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.position.y = spheres[i].position[1] + Math.sin(state.clock.elapsedTime * spheres[i].speed) * 0.5;
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
      }
    });
  });

  return (
    <>
      {spheres.map((sphere, i) => (
        <mesh
          key={i}
          ref={(el) => (meshes.current[i] = el)}
          position={sphere.position}
          scale={sphere.scale}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={sphere.color}
            metalness={0.8}
            roughness={0.2}
            emissive={sphere.color}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </>
  );
};

export default FloatingSpheres;
