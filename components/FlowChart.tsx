"use client"
import React from 'react'
import { ReactFlow, Handle, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// interface Node {
//   id: string;
//   position: { x: number, y: number };
//   data: { label: string };
// }
const CustomNode = ({ data }: any) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #777', borderRadius: '5px', background: '#fff', position: 'relative', width:148}} className="text-center">
      <Handle
        type="target"
        position={Position.Left} // Incoming connection point on the left
        style={{ background: '#555' }}
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        position={Position.Right} // Outgoing connection point on the right
        style={{ background: '#555' }}
      />
    </div>
  );
};

const FlowChart = () => {
  // const [nodes, setNodes] = useState<Node[]>([
  const nodes = [
    { id: '1', position: { x: 350, y: 350 }, data: { label: 'ENGR 102 (2)' }, type: 'customNode' },
    { id: '2', position: { x: 350, y: 450 }, data: { label: 'MATH 151 (4)' }, type: 'customNode' },
    { id: '3', position: { x: 350, y: 535 }, data: { label: 'CHEM 107+117 (4)' } },
    { id: '4', position: { x: 350, y: 650 }, data: { label: 'ENGL 104 (3)' } },
    { id: '5', position: { x: 350, y: 750 }, data: { label: 'University Core Curriculum (3)' } },
    { id: '6', position: { x: 650, y: 350 }, data: { label: 'ENGR 216 (2)' }, type: 'customNode'},
    { id: '7', position: { x: 650, y: 450 }, data: { label: 'MATH 152 (4)' } },
    { id: '8', position: { x: 650, y: 520 }, data: { label: 'PHYS 206 (3)' } },
    { id: '9', position: { x: 650, y: 650 }, data: { label: 'ENGL 210 (3) OR COMM 203 (3) OR COMM 205 (3)' } },
    { id: '10', position: { x: 650, y: 850 }, data: { label: 'University Core Curriculum (3)' } },
    { id: '11', position: { x: 950, y: 350 }, data: { label: 'CSCE 121 (4)' } },
    { id: '12', position: { x: 950, y: 450 }, data: { label: 'CSCE 222 (3)' } },
    { id: '13', position: { x: 950, y: 550 }, data: { label: 'MATH 304 (3)' } },
    { id: '14', position: { x: 950, y: 650 }, data: { label: 'CSCE 181 (1)' } },
    { id: '15', position: { x: 950, y: 750 }, data: { label: 'Science Elective (4)' } },
    { id: '16', position: { x: 950, y: 850 }, data: { label: 'General Elective (1)' } },
    { id: '17', position: { x: 1250, y: 350 }, data: { label: 'CSCE 221 (4) ' } },
    { id: '18', position: { x: 1250, y: 450 }, data: { label: 'CSCE 312 (4)' } },
    { id: '19', position: { x: 1250, y: 550 }, data: { label: 'CSCE 314 (3)' } },
    { id: '20', position: { x: 1250, y: 650 }, data: { label: 'Emphasis Area Elective (3)' } },
    { id: '21', position: { x: 1250, y: 750 }, data: { label: 'University Core Curriculum (3)' } },
    { id: '22', position: { x: 1550, y: 350 }, data: { label: 'CSCE 411 (3)' } },
    { id: '23', position: { x: 1550, y: 450 }, data: { label: 'CPSC Elective (3)' } },
    { id: '24', position: { x: 1550, y: 550 }, data: { label: 'CPSC Elective (3)' } },
    { id: '25', position: { x: 1550, y: 650 }, data: { label: 'MATH 251 (3) OR MATH 302 (3) OR MATH 308 (3)' } },
    { id: '26', position: { x: 1550, y: 750 }, data: { label: 'Science Elective (3)' } },
    { id: '27', position: { x: 1550, y: 850 }, data: { label: 'CSCE 399 (0)' } },
    { id: '28', position: { x: 1850, y: 350 }, data: { label: 'CPSC Elective (3)' } },
    { id: '29', position: { x: 1850, y: 450 }, data: { label: 'CPSC Elective (3)' } },
    { id: '30', position: { x: 1850, y: 550 }, data: { label: 'CPSC Elective (3)' } },
    { id: '31', position: { x: 1850, y: 650 }, data: { label: 'University Core Curriculum (3)' } },
    { id: '32', position: { x: 1850, y: 750 }, data: { label: 'Emphasis Area Elective (3)' } },
    { id: '33', position: { x: 2150, y: 350 }, data: { label: 'CSCE 482 (3)' } },
    { id: '34', position: { x: 2150, y: 450 }, data: { label: 'CPSC Elective (3)' } },
    { id: '35', position: { x: 2150, y: 550 }, data: { label: 'University Core Curriculum (3)' } },
    { id: '36', position: { x: 2150, y: 650 }, data: { label: 'University Core Curriculum (3)' } },
    { id: '37', position: { x: 2150, y: 750 }, data: { label: 'Emphasis Area Elective (3)' } },

    

  ];
  const initialEdges = [
    { 
      id: 'e1-6', 
      source: '1', 
      target: '6' }, 
    {
      id: 'e1-2',
      source: '2',
      target: '1',
      style: { stroke: '#000', strokeDasharray: '5 5' }, // Dotted edge style
    },];
  return (
    <div style={{ width: '100vw', height: '100vh' }} className="z-0">
      <ReactFlow nodes={nodes} edges={initialEdges} nodeTypes={{customNode: CustomNode}} />
    </div>
  )
}

export default FlowChart
