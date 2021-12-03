/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes } = useGLTF("/images/chapel-nft-2.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <pointLight intensity={0.5} decay={2} position={[-10.39, 0, 10.08]} />
      <pointLight intensity={0.5} decay={2} position={[9.85, 0, 10.01]} />
      <pointLight intensity={0.5} decay={2} position={[0, 0, -15.01]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_4.geometry}
        material={nodes.Plane_4.material}
        position={[0, 0, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_5.geometry}
        material={nodes.Plane_5.material}
        position={[0, 0, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_1.geometry}
        material={nodes.Plane_1.material}
        position={[0, 0, 0.12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_3.geometry}
        material={nodes.Plane_3.material}
        position={[0, 0, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_2.geometry}
        material={nodes.Plane_2.material}
        position={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/chapel-nft-2.glb");