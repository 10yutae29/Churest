/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 bird4.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    Sphere008: THREE.Mesh;
    Sphere008_1: THREE.Mesh;
    Sphere008_2: THREE.Mesh;
    Sphere008_3: THREE.Mesh;
    Sphere008_4: THREE.Mesh;
    Sphere008_5: THREE.Mesh;
    Sphere008_6: THREE.Mesh;
  };
  materials: {
    ['Material.009']: THREE.MeshStandardMaterial;
    ['Material.003']: THREE.MeshStandardMaterial;
    ['Material.008']: THREE.MeshStandardMaterial;
    ['Material.010']: THREE.MeshStandardMaterial;
    ['Material.011']: THREE.MeshStandardMaterial;
    ['Material.012']: THREE.MeshStandardMaterial;
    ['Material.013']: THREE.MeshStandardMaterial;
  };
};

export function Bird4(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.bird_4_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[0.21, 1.46, 0.69]} scale={0.04}>
        <mesh
          geometry={nodes.Sphere008.geometry}
          material={materials['Material.009']}
          castShadow
        />
        <mesh
          geometry={nodes.Sphere008_1.geometry}
          material={materials['Material.003']}
          castShadow
        />
        <mesh
          geometry={nodes.Sphere008_2.geometry}
          material={materials['Material.008']}
          castShadow
        />
        <mesh
          geometry={nodes.Sphere008_3.geometry}
          material={materials['Material.010']}
          castShadow
        />
        <mesh
          geometry={nodes.Sphere008_4.geometry}
          material={materials['Material.011']}
          castShadow
        />
        <mesh
          geometry={nodes.Sphere008_5.geometry}
          material={materials['Material.012']}
          castShadow
        />
        <mesh
          geometry={nodes.Sphere008_6.geometry}
          material={materials['Material.013']}
          castShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload(glbs.bird_4_glb);
