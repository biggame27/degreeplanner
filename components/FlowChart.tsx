"use client"
import React from 'react'
import { ReactFlow, Handle, Position, Edge, MarkerType } from '@xyflow/react';
import '@xyflow/react/dist/style.css';



// interface Node {
//   id: string;
//   position: { x: number, y: number };
//   data: { label: string };
// }
const CustomNode = ({ data }: any) => {  ///eslint-disable-line @typescript-eslint/no-explicit-any
  return (
    <div style={{ padding: '10px', border: '1px solid #777', borderRadius: '5px', background: '#fff', position: 'relative', width:148}} className="text-center">
      <Handle
        type="target"
        position={Position.Left} // Incoming connection point on the left
        style={{ background: '#555' }}
        id="left"
      />
      <Handle
        type="target"
        position={Position.Right} // Incoming connection point on the left
        style={{ background: '#555' }}
        id="right"
      />
      <Handle
        type="target"
        position={Position.Top} // Incoming connection point on the left
        style={{ background: '#555' }}
        id="top"
      />
      <Handle
        type="target"
        position={Position.Bottom} // Incoming connection point on the left
        style={{ background: '#555' }}
        id="bottom"
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        position={Position.Right} // Outgoing connection point on the right
        style={{ background: '#555' }}
        id="right"
      />
      <Handle
        type="source"
        position={Position.Left} // Outgoing connection point on the right
        style={{ background: '#555' }}
        id="left"
      />
      <Handle
        type="source"
        position={Position.Top} // Outgoing connection point on the right
        style={{ background: '#555' }}
        id="top"
      />
      <Handle
        type="source"
        position={Position.Bottom} // Outgoing connection point on the right
        style={{ background: '#555' }}
        id="bottom"
      />
    </div>
  );
};

const FlowChart = () => {
  // const [nodes, setNodes] = useState<Node[]>([
  const nodes = [
    { id: '1', position: { x: 350, y: 350 }, data: { label: 'ENGR 102 (2)' }, type: 'customNode' },
    { id: '2', position: { x: 350, y: 450 }, data: { label: 'MATH 151 (4)' }, type: 'customNode' },
    { id: '3', position: { x: 350, y: 535 }, data: { label: 'CHEM 107+117 (4)' }, type: 'customNode' },
    { id: '4', position: { x: 350, y: 650 }, data: { label: 'ENGL 104 (3)' }, type: 'customNode' },
    { id: '5', position: { x: 350, y: 750 }, data: { label: 'University Core Curriculum (3)' }, type: 'customNode' },
    { id: '6', position: { x: 650, y: 350 }, data: { label: 'ENGR 216 (2)' }, type: 'customNode'},
    { id: '7', position: { x: 650, y: 450 }, data: { label: 'MATH 152 (4)' }, type: 'customNode' },
    { id: '8', position: { x: 650, y: 520 }, data: { label: 'PHYS 206 (3)' }, type: 'customNode' },
    { id: '9', position: { x: 650, y: 650 }, data: { label: 'ENGL 210 (3) OR COMM 203 (3) OR COMM 205 (3)' }, type: 'customNode' },
    { id: '10', position: { x: 650, y: 850 }, data: { label: 'University Core Curriculum (3)' }, type: 'customNode' },
    { id: '11', position: { x: 950, y: 350 }, data: { label: 'CSCE 121 (4)' }, type: 'customNode' },
    { id: '12', position: { x: 950, y: 450 }, data: { label: 'CSCE 222 (3)' }, type: 'customNode' },
    { id: '13', position: { x: 950, y: 550 }, data: { label: 'MATH 304 (3)' }, type: 'customNode' },
    { id: '14', position: { x: 950, y: 650 }, data: { label: 'CSCE 181 (1)' }, type: 'customNode' },
    { id: '15', position: { x: 950, y: 750 }, data: { label: 'Science Elective (4)' }, type: 'customNode' },
    { id: '16', position: { x: 950, y: 850 }, data: { label: 'General Elective (1)' }, type: 'customNode' },
    { id: '17', position: { x: 1250, y: 350 }, data: { label: 'CSCE 221 (4) ' }, type: 'customNode' },
    { id: '18', position: { x: 1250, y: 450 }, data: { label: 'CSCE 312 (4)' }, type: 'customNode' },
    { id: '19', position: { x: 1250, y: 550 }, data: { label: 'CSCE 314 (3)' }, type: 'customNode' },
    { id: '20', position: { x: 1250, y: 650 }, data: { label: 'Emphasis Area Elective (3)' }, type: 'customNode' },
    { id: '21', position: { x: 1250, y: 750 }, data: { label: 'University Core Curriculum (3)' }, type: 'customNode' },
    { id: '22', position: { x: 1550, y: 350 }, data: { label: 'CSCE 313 (4)' }, type: 'customNode' },
    { id: '23', position: { x: 1550, y: 450 }, data: { label: 'CSCE 315 (3)' }, type: 'customNode' },
    { id: '24', position: { x: 1550, y: 550 }, data: { label: 'CSCE 481 (1)' }, type: 'customNode' },
    { id: '25', position: { x: 1550, y: 650 }, data: { label: 'STAT 211 (3)' }, type: 'customNode' },
    { id: '26', position: { x: 1550, y: 750 }, data: { label: 'Emphasis Area Elective (3)' }, type: 'customNode' },
    { id: '27', position: { x: 1550, y: 850 }, data: { label: 'University Core Curriculum (3)' }, type: 'customNode' },
    { id: '28', position: { x: 1850, y: 350 }, data: { label: 'CSCE 411 (3)' }, type: 'customNode' },
    { id: '29', position: { x: 1850, y: 450 }, data: { label: 'CPSC Elective (3)' }, type: 'customNode' },
    { id: '30', position: { x: 1850, y: 550 }, data: { label: 'CPSC Elective (3)' }, type: 'customNode' },
    { id: '31', position: { x: 1850, y: 650 }, data: { label: 'MATH 251 (3) OR MATH 302 (3) OR MATH 308 (3)' }, type: 'customNode' },
    { id: '32', position: { x: 1850, y: 750 }, data: { label: 'Science Elective (3)' }, type: 'customNode' },
    { id: '33', position: { x: 1850, y: 850 }, data: { label: 'CSCE 399 (0)' }, type: 'customNode' },
    { id: '34', position: { x: 2150, y: 350 }, data: { label: 'CPSC Elective (3)' }, type: 'customNode' },
    { id: '35', position: { x: 2150, y: 450 }, data: { label: 'CPSC Elective (3)' }, type: 'customNode' },
    { id: '36', position: { x: 2150, y: 550 }, data: { label: 'CPSC Elective (3)' }, type: 'customNode' },
    { id: '37', position: { x: 2150, y: 650 }, data: { label: 'University Core Curriculum (3)' }, type: 'customNode' },
    { id: '38', position: { x: 2150, y: 750 }, data: { label: 'Emphasis Area Elective (3)' }, type: 'customNode' },
    { id: '39', position: { x: 2450, y: 350 }, data: { label: 'CSCE 482 (3)' }, type: 'customNode' },
    { id: '40', position: { x: 2450, y: 450 }, data: { label: 'CPSC Elective (3)' }, type: 'customNode' },
    { id: '41', position: { x: 2450, y: 550 }, data: { label: 'University Core Curriculum (3)' }, type: 'customNode' },
    { id: '42', position: { x: 2450, y: 650 }, data: { label: 'University Core Curriculum (3)' }, type: 'customNode' },
    { id: '43', position: { x: 2450, y: 750 }, data: { label: 'Emphasis Area Elective (3)' }, type: 'customNode' },

    

  ];
  const edges: Edge[] = [
    {
      id: 'e2-1',  // Unique ID for the edge
        source: '2', // Node 1 as the source
        target: '1', // Node 2 as the target
        sourceHandle: 'top', // Specify which handle on Node 1
        targetHandle: 'bottom',  // Specify which handle on Node 2
        style: {stroke: '8000', strokeDasharray: '5 5'}, //STYLE - - -> ON EM CHAT
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
    {
      id: 'e2-6',  // Unique ID for the edge
        source: '2', // Node 1 as the source
        target: '6', // Node 2 as the target
        sourceHandle: 'right', // Specify which handle on Node 1
        targetHandle: 'left',  // Specify which handle on Node 2
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
    {
      id: 'e2-7',  // Unique ID for the edge
        source: '2', // Node 1 as the source
        target: '7', // Node 2 as the target
        sourceHandle: 'right', // Specify which handle on Node 1
        targetHandle: 'left',  // Specify which handle on Node 2
      
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
    {
      id: 'e1-6',  // Unique ID for the edge
        source: '1', // Node 1 as the source
        target: '6', // Node 2 as the target
        sourceHandle: 'right', // Specify which handle on Node 1
        targetHandle: 'left',  // Specify which handle on Node 2
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
    {
      id: 'e2-8',  // Unique ID for the edge
        source: '2', // Node 1 as the source
        target: '8', // Node 2 as the target
        sourceHandle: 'right', // Specify which handle on Node 1
        targetHandle: 'left',  // Specify which handle on Node 2
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
    {
      id: 'e2-12',  // Unique ID for the edge
        source: '2', // Node 1 as the source
        target: '12', // Node 2 as the target
        sourceHandle: 'top', // Specify which handle on Node 1
        targetHandle: 'top',  // Specify which handle on Node 2
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
        
    

        },
        type: 'step',
    },
    {
      id: 'e7-6',  // Unique ID for the edge
        source: '7', // Node 1 as the source
        target: '6', // Node 2 as the target
        sourceHandle: 'top', // Specify which handle on Node 1
        targetHandle: 'bottom',  // Specify which handle on Node 2
        style: {stroke: '8000', strokeDasharray: '5 5'},
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
    {
      id: 'e7-25',  // Unique ID for the edge
        source: '7', // Node 1 as the source
        target: '25', // Node 2 as the target
        sourceHandle: 'top', // Specify which handle on Node 1
        targetHandle: 'top',  // Specify which handle on Node 2
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
        type: 'step'
    },
    {
      id: 'e7-13',  // Unique ID for the edge
        source: '7', // Node 1 as the source
        target: '13', // Node 2 as the target
        sourceHandle: 'right', // Specify which handle on Node 1
        targetHandle: 'left',  // Specify which handle on Node 2
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
    {
      id: 'e8-6',  // Unique ID for the edge
        source: '8', // Node 1 as the source
        target: '6', // Node 2 as the target
        sourceHandle: 'right', // Specify which handle on Node 1
        targetHandle: 'bottom',  // Specify which handle on Node 2
        style: {stroke: '8000', strokeDasharray: '5 5'}, 
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
        type: 'step'
      
    },
    {
      id: 'e11-12',  // Unique ID for the edge
        source: '11', // Node 1 as the source
        target: '12', // Node 2 as the target
        sourceHandle: 'bottom', // Specify which handle on Node 1
        targetHandle: 'top',  // Specify which handle on Node 2
        style: {stroke: '8000', strokeDasharray: '5 5'},
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
    {
      id: 'e11-17',  // Unique ID for the edge
        source: '11', // Node 1 as the source
        target: '17', // Node 2 as the target
        sourceHandle: 'right', // Specify which handle on Node 1
        style: {stroke: '8000', strokeDasharray: '5 5'},
        targetHandle: 'left',  // Specify which handle on Node 2
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
    {
      id: 'e12-17',  // Unique ID for the edge
        source: '12', // Node 1 as the source
        target: '17', // Node 2 as the target
        sourceHandle: 'right', // Specify which handle on Node 1
        style: {stroke: '8000', strokeDasharray: '5 5'},
        targetHandle: 'left',  // Specify which handle on Node 2
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
    {
      id: 'e17-18',  // Unique ID for the edge
        source: '17', // Node 1 as the source
        target: '18', // Node 2 as the target
        sourceHandle: 'bottom', // Specify which handle on Node 1
        style: {stroke: '8000', strokeDasharray: '5 5'},
        targetHandle: 'top',  // Specify which handle on Node 2
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
    {
      id: 'e17-19',  // Unique ID for the edge
        source: '17', // Node 1 as the source
        target: '19', // Node 2 as the target
        sourceHandle: 'top', // Specify which handle on Node 1
        style: {stroke: '8000', strokeDasharray: '5 5'},
        targetHandle: 'left',  // Specify which handle on Node 2
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
        type: "step"
    },
    {
      id: 'e18-22',  // Unique ID for the edge
        source: '18', // Node 1 as the source
        target: '22', // Node 2 as the target
        sourceHandle: 'right', // Specify which handle on Node 1
        targetHandle: 'left',  // Specify which handle on Node 2
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
    {
      id: 'e18-23',  // Unique ID for the edge
        source: '18', // Node 1 as the source
        target: '23', // Node 2 as the target
        sourceHandle: 'right', // Specify which handle on Node 1
        targetHandle: 'left',  // Specify which handle on Node 2
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
    {
      id: 'e19-23',  // Unique ID for the edge
        source: '19', // Node 1 as the source
        target: '23', // Node 2 as the target
        sourceHandle: 'right', // Specify which handle on Node 1
        targetHandle: 'left',  // Specify which handle on Node 2
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
    {
      id: 'e22-23',  // Unique ID for the edge
        source: '22', // Node 1 as the source
        target: '23', // Node 2 as the target
        sourceHandle: 'bottom', // Specify which handle on Node 1
        targetHandle: 'top',  // Specify which handle on Node 2
        style: {stroke: '8000', strokeDasharray: '5 5'},
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#020616',
    

        },
    },
  ]
  return (
    <div style={{ width: '100vw', height: '100vh' }} className="z-0">
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={{customNode: CustomNode}} />
    </div>
  )

}
  


export default FlowChart
