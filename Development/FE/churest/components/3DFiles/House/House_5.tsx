/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 house_5.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    building018: THREE.Mesh;
  };
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial;
  };
};

export function House5(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.house_5_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.building018.geometry}
        material={materials['Material.002']}
        position={[0.11, 2.3, 0.23]}
        scale={0.62}
      />
    </group>
  );
}

useGLTF.preload(glbs.house_5_glb);