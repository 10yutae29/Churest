/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 tFlower_4.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    fantasy_plant021: THREE.Mesh;
    fantasy_plant009: THREE.Mesh;
    fantasy_plant010: THREE.Mesh;
    fantasy_plant022: THREE.Mesh;
    fantasy_plant011: THREE.Mesh;
    fantasy_plant012: THREE.Mesh;
    fantasy_plant050: THREE.Mesh;
    fantasy_plant013: THREE.Mesh;
    fantasy_plant014: THREE.Mesh;
  };
  materials: {
    ['Material.010']: THREE.MeshStandardMaterial;
    ['Material.011']: THREE.MeshStandardMaterial;
    ['Material.012']: THREE.MeshStandardMaterial;
  };
};

export function TFlower_4(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.t_flower_4_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.fantasy_plant021.geometry}
        material={materials['Material.010']}
        position={[-1.7, 0.46, 1.63]}
        scale={0.11}
        castShadow
      />
      <mesh
        geometry={nodes.fantasy_plant009.geometry}
        material={materials['Material.010']}
        position={[-1.23, 0.54, 1.83]}
        scale={0.13}
        castShadow
      />
      <mesh
        geometry={nodes.fantasy_plant010.geometry}
        material={materials['Material.010']}
        position={[-1.81, 0.48, 1.03]}
        scale={0.12}
        castShadow
      />
      <mesh
        geometry={nodes.fantasy_plant022.geometry}
        material={materials['Material.011']}
        position={[1.71, 0.42, 1.26]}
        scale={0.1}
        castShadow
      />
      <mesh
        geometry={nodes.fantasy_plant011.geometry}
        material={materials['Material.011']}
        position={[1.32, 0.47, 1.72]}
        scale={0.11}
        castShadow
      />
      <mesh
        geometry={nodes.fantasy_plant012.geometry}
        material={materials['Material.011']}
        position={[1.83, 0.37, 0.83]}
        scale={0.09}
        castShadow
      />
      <mesh
        geometry={nodes.fantasy_plant050.geometry}
        material={materials['Material.012']}
        position={[0, 0.49, -1.64]}
        scale={0.13}
        castShadow
      />
      <mesh
        geometry={nodes.fantasy_plant013.geometry}
        material={materials['Material.012']}
        position={[-0.42, 0.41, -1.52]}
        scale={0.1}
        castShadow
      />
      <mesh
        geometry={nodes.fantasy_plant014.geometry}
        material={materials['Material.012']}
        position={[0.43, 0.4, -1.57]}
        scale={0.11}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(glbs.t_flower_4_glb);
