import React, { useCallback } from 'react';
import ReactFlow, { 
    useNodesState,
    useEdgesState,
    addEdge,
    Background,
    MiniMap,
    Controls
} from 'reactflow';
import 'reactflow/dist/style.css';

import CustomEdge from './CustomEdge';
import ConnectionLine from './ConnectionLine.js';
import {initialEdges}  from './EdgeSource.js';
import {initialNodes}  from './NodeSource.js';

const edgeTypes = {
    custom: CustomEdge,
  };

const TestFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, type: 'custom' }, eds)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      connectionLineComponent={ConnectionLine}
      onConnect={onConnect}
      edgeTypes={edgeTypes}
      fitView
    >
      <Background variant="lines" />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};

export default TestFlow;
