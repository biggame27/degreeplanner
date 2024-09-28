"use client"
import React from 'react'
import { ReactFlow } from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';

// interface Node {
//   id: string;
//   position: { x: number, y: number };
//   data: { label: string };
// }
const FlowChart = () => {
  // const [nodes, setNodes] = useState<Node[]>([
  const nodes = [
    { id: '1', position: { x: 350, y: 350 }, data: { label: 'Node 1' } },
    { id: '2', position: { x: 350, y: 500 }, data: { label: 'Node 2' } },
    { id: '3', position: { x: 600, y: 350 }, data: { label: 'Node 3' } },
    { id: '4', position: { x: 600, y: 500 }, data: { label: 'Node 4' } },
  ];
  const initialEdges = [
    { 
      id: 'e1-2', 
      source: '1', 
      target: '2' }, 
    {
      id: 'e3-4',
      source: '3',
      target: '4',
      style: { stroke: '#000', strokeDasharray: '5 5' }, // Dotted edge style
    },];
  return (
    <div style={{ width: '100vw', height: '100vh' }} className="z-0">
      <ReactFlow nodes={nodes} edges={initialEdges} />
    </div>
  )
}

export default FlowChart
