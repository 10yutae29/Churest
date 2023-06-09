/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 g_big_tree_bottom.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    원형: THREE.Mesh;
    원형_1: THREE.Mesh;
  };
  materials: {
    ['매테리얼.014']: THREE.MeshStandardMaterial;
    ['매테리얼.016']: THREE.MeshStandardMaterial;
  };
};

export function G_big_tree_bottom(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    glbs.g_big_tree_bottom_glb
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[0.07, 7.46, -11.18]} scale={7.16}>
        <mesh
          geometry={nodes.원형.geometry}
          material={materials['매테리얼.014']}
          // castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.원형_1.geometry}
          material={materials['매테리얼.016']}
          castShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload(glbs.g_big_tree_bottom_glb);
