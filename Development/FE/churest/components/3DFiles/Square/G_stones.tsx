/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 g_stones.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    Mesh050: THREE.Mesh;
    Mesh050_1: THREE.Mesh;
  };
  materials: {
    ['Material.029']: THREE.MeshStandardMaterial;
    ['Material.028']: THREE.MeshStandardMaterial;
  };
};

export function G_stones(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.g_stones_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[-8.14, 0.01, 15.51]}
        rotation={[Math.PI, -1.14, Math.PI]}
        scale={0.11}
      >
        <mesh
          geometry={nodes.Mesh050.geometry}
          material={materials['Material.029']}
        />
        <mesh
          geometry={nodes.Mesh050_1.geometry}
          material={materials['Material.028']}
        />
      </group>
    </group>
  );
}

useGLTF.preload(glbs.g_stones_glb);
