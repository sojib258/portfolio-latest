"use client"; // Ensure this is a client component
import { Box, BoxProps } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useRef } from "react";
import * as THREE from "three";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

type TunnelAnimationProps = BoxProps & {};

const TunnelAnimation: FC<TunnelAnimationProps> = ({ ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scrollTargetRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!canvasRef.current || !scrollTargetRef.current) return;

      // Initialize Three.js
      const ww = window.innerWidth;
      const wh = window.innerHeight;

      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });
      renderer.setSize(ww, wh);

      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x194794, 0, 100);

      const camera = new THREE.PerspectiveCamera(45, ww / wh, 0.001, 200);
      camera.rotation.y = 3.14159;
      camera.rotation.z = 0;

      const c = new THREE.Group();
      c.position.z = 400;
      c.add(camera);
      scene.add(c);

      // Create the tube geometry
      const points = [
        [10, 89, 0],
        [50, 88, 10],
        [76, 139, 20],
        [126, 141, 12],
        [150, 112, 8],
        [157, 73, 0],
        [180, 44, 5],
        [207, 35, 10],
        [232, 36, 0],
      ].map((p) => new THREE.Vector3(p[0], p[2], p[1]));

      const path = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(path, 300, 4, 32, false);

      const texture = new THREE.TextureLoader().load(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/3d_space_5.jpg",
        (texture) => {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.offset.set(0, 0);
          texture.repeat.set(15, 2);
        }
      );

      const mapHeight = new THREE.TextureLoader().load(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/waveform-bump3.jpg",
        (texture) => {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.offset.set(0, 0);
          texture.repeat.set(15, 2);
        }
      );

      const material = new THREE.MeshPhongMaterial({
        side: THREE.BackSide,
        map: texture,
        shininess: 20,
        bumpMap: mapHeight,
        bumpScale: -0.03,
        specular: 0x0b2349,
      });

      const tube = new THREE.Mesh(geometry, material);
      scene.add(tube);

      // Inner tube
      const innerGeometry = new THREE.TubeGeometry(path, 150, 3.4, 32, false);
      const innerWireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(innerGeometry),
        new THREE.LineBasicMaterial({
          linewidth: 2,
          opacity: 0.2,
          transparent: true,
        })
      );
      scene.add(innerWireframe);

      // Light
      const light = new THREE.PointLight(0xffffff, 0.35, 4, 0);
      scene.add(light);

      // GSAP Scroll Animation
      const tubePerc = { percent: 0 };
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollTargetRef.current,
          start: "top top",
          end: "bottom 100%",
          scrub: 5,
        },
      });

      tl.to(tubePerc, {
        percent: 0.96,
        ease: "none",
        duration: 10,
        onUpdate: () => {
          const p1 = path.getPointAt(tubePerc.percent);
          const p2 = path.getPointAt(tubePerc.percent + 0.03);

          c.position.set(p1.x, p1.y, p1.z);
          c.lookAt(p2);
          light.position.set(p2.x, p2.y, p2.z);
        },
      });

      // Render loop
      const render = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(render);
      };
      render();

      // Cleanup
      return () => {
        renderer.dispose();
        scene.remove(tube);
        scene.remove(innerWireframe);
        scene.remove(light);
      };
    },
    { scope: canvasRef }
  );

  return (
    <Box {...props}>
      <canvas
        ref={canvasRef}
        className="experience"
        aria-label="3D scroll animation"
        role="img"
      ></canvas>
      <Box ref={scrollTargetRef} className="scroll__target"></Box>
      <Box className="vignette-radial"></Box>
    </Box>
  );
};

export default TunnelAnimation;
