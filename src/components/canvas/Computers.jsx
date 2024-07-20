import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import {
  AnimationMixer,
  LoopRepeat,
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
} from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, playAnimation }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("./desktop_pc/Madush.gltf");
  const mixer = useRef();

  useEffect(() => {
    if (scene && animations.length > 0) {
      console.log("Animations loaded:", animations);
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.setLoop(LoopRepeat, Infinity);
      if (playAnimation) {
        action.play();
      } else {
        console.log("Animation not played");
      }
    }

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
      }
    };
  }, [scene, animations, playAnimation]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  // Fallback in case of geometry issues
  const fallbackGeometry = new BoxGeometry(1, 1, 1);
  const fallbackMaterial = new MeshStandardMaterial({ color: "red" });
  const fallbackMesh = new Mesh(fallbackGeometry, fallbackMaterial);

  return (
    <group ref={group}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene || fallbackMesh}
        scale={isMobile ? 2.2 : 3}
        position={isMobile ? [0, 0, -0] : [0, -1.5, 0]}
        rotation={[-0.01, 1, 0]}
      />
    </group>
  );
};

const ComputersCanvas = ({ playAnimation }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      style={{ height: "100vh" }} // Adjust the height here as needed
      frameloop="always" // Changed from "demand" to "always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} playAnimation={playAnimation} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
