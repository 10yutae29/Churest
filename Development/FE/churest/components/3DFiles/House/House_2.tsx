/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 house_2.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    building003: THREE.Mesh;
  };
  materials: {
    ['Material.003']: THREE.MeshStandardMaterial;
  };
};

export function House2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.house_2_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.building003.geometry}
        material={materials['Material.003']}
        position={[-0.14, 0.86, -0.08]}
        scale={0.39}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(glbs.house_2_glb);
