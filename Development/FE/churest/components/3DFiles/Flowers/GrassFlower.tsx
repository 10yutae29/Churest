/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Flower_Grass.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { glbs } from '@/public/assets/glb';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Circle005_Grass_0: THREE.Mesh;
    Circle018_Grass_0: THREE.Mesh;
  };
  materials: {
    Grass: THREE.MeshStandardMaterial;
  };
};

export function GrassFlower(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.flower_grass_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.06, 1.08, -0.76]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[56.82, 0, 128.37]}
            rotation={[-Math.PI / 2, 0, 0.33]}
            scale={[3.91, 3.91, 5.19]}
          >
            <mesh
              geometry={nodes.Circle018_Grass_0.geometry}
              material={materials.Grass}
              position={[-18.51, 37.72, -0.06]}
              castShadow
            />
          </group>
          <mesh
            geometry={nodes.Circle005_Grass_0.geometry}
            material={materials.Grass}
            position={[-54.61, 0, 6.67]}
            rotation={[-Math.PI / 2, 0, 0.03]}
            scale={[4.6, 4.6, 9.14]}
            castShadow
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(glbs.flower_grass_glb);
