/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Box, Grid, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Simple block representing a factory unit
const FactoryBlock = ({ position, scale, color, delay }: { position: [number, number, number]; scale: [number, number, number]; color: string, delay: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      // Gentle vertical float based on position
      ref.current.position.y = position[1] + Math.sin(t * 0.5 + delay) * 0.05;
    }
  });

  return (
    <Box ref={ref} args={[1, 1, 1]} position={position} scale={scale}>
      <meshStandardMaterial 
        color={color} 
        metalness={0.6} 
        roughness={0.2} 
        envMapIntensity={1.5}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(scale[0], scale[1], scale[2])]} />
        <lineBasicMaterial color="white" opacity={0.2} transparent />
      </lineSegments>
    </Box>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-90 pointer-events-none bg-gradient-to-b from-slate-50 to-slate-200">
      <Canvas>
        <PerspectiveCamera makeDefault position={[10, 8, 10]} fov={35} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 20, 5]} intensity={1.5} castShadow color="#ffffff" />
        <pointLight position={[-10, 5, -10]} intensity={0.5} color="#0D9488" />
        
        <group rotation={[0, -Math.PI / 4, 0]}>
            <Float speed={1} rotationIntensity={0} floatIntensity={0.2}>
                {/* Central Hub */}
                <FactoryBlock position={[0, 0.5, 0]} scale={[2, 1, 3]} color="#1e293b" delay={0} />
                
                {/* Surrounding Factories */}
                <FactoryBlock position={[2.5, 0.25, 0]} scale={[1.5, 0.5, 2]} color="#334155" delay={1} />
                <FactoryBlock position={[-2.5, 0.25, 1]} scale={[1.5, 0.5, 2.5]} color="#475569" delay={2} />
                <FactoryBlock position={[0, 0.25, 3]} scale={[3, 0.5, 1.5]} color="#0D9488" delay={3} />
                <FactoryBlock position={[0, 0.25, -2.5]} scale={[2.5, 0.5, 1.5]} color="#64748b" delay={0.5} />

                {/* Residential/Office High rises */}
                <FactoryBlock position={[-3, 1, -2]} scale={[0.8, 2, 0.8]} color="#C5A059" delay={4} />
                <FactoryBlock position={[-3.8, 0.75, -1.5]} scale={[0.6, 1.5, 0.6]} color="#e2e8f0" delay={4.2} />
            </Float>
            
            <Grid 
                position={[0, -0.1, 0]} 
                args={[20, 20]} 
                cellSize={1} 
                cellThickness={1} 
                cellColor="#cbd5e1" 
                sectionSize={5} 
                sectionThickness={1.5} 
                sectionColor="#94a3b8" 
                fadeDistance={20} 
                infiniteGrid 
            />
        </group>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

// Minimal background for secondary sections
export const QuantumComputerScene: React.FC = () => {
  return null; 
};