/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 g_animal3.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    animal3: THREE.Mesh;
  };
  materials: {
    ['Material.089']: THREE.MeshStandardMaterial;
  };
};

export function G_animal3(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.g_animal_3_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.animal3.geometry}
        material={materials['Material.089']}
        position={[8.07, 2.11, -2.53]}
        rotation={[0, -0.52, 0]}
        scale={0.61}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(glbs.g_animal_3_glb);