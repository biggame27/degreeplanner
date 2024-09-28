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
    { id: '2', position: { x: 350, y: 450 }, data: { label: 'Node 2' } },
    { id: '3', position: { x: 350, y: 550 }, data: { label: 'Node 3' } },
    { id: '4', position: { x: 350, y: 650 }, data: { label: 'Node 4' } },
    { id: '5', position: { x: 350, y: 750 }, data: { label: 'Node 5' } },
    { id: '6', position: { x: 650, y: 350 }, data: { label: 'Node 6' } },
    { id: '7', position: { x: 650, y: 450 }, data: { label: 'Node 7' } },
    { id: '8', position: { x: 650, y: 550 }, data: { label: 'Node 8' } },
    { id: '9', position: { x: 650, y: 650 }, data: { label: 'Node 9' } },
    { id: '10', position: { x: 650, y: 750 }, data: { label: 'Node 10' } },
    { id: '11', position: { x: 950, y: 350 }, data: { label: 'Node 11' } },
    { id: '12', position: { x: 950, y: 450 }, data: { label: 'Node 12' } },
    { id: '13', position: { x: 950, y: 550 }, data: { label: 'Node 13' } },
    { id: '14', position: { x: 950, y: 650 }, data: { label: 'Node 14' } },
    { id: '15', position: { x: 950, y: 750 }, data: { label: 'Node 15' } },
    { id: '16', position: { x: 950, y: 850 }, data: { label: 'Node 16' } },
    { id: '17', position: { x: 1250, y: 350 }, data: { label: 'Node 17' } },
    { id: '18', position: { x: 1250, y: 450 }, data: { label: 'Node 18' } },
    { id: '19', position: { x: 1250, y: 550 }, data: { label: 'Node 19' } },
    { id: '20', position: { x: 1250, y: 650 }, data: { label: 'Node 20' } },
    { id: '21', position: { x: 1250, y: 750 }, data: { label: 'Node 21' } },
    { id: '22', position: { x: 1550, y: 350 }, data: { label: 'Node 22' } },
    { id: '23', position: { x: 1550, y: 450 }, data: { label: 'Node 23' } },
    { id: '24', position: { x: 1550, y: 550 }, data: { label: 'Node 24' } },
    { id: '25', position: { x: 1550, y: 650 }, data: { label: 'Node 25' } },
    { id: '26', position: { x: 1550, y: 750 }, data: { label: 'Node 26' } },
    { id: '27', position: { x: 1550, y: 850 }, data: { label: 'Node 27' } },
    { id: '28', position: { x: 1850, y: 350 }, data: { label: 'Node 28' } },
    

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
