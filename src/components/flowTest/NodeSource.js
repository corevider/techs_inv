import { Position } from "reactflow";
export const initialNodes = [
    {
        id: 'connectionline-1',
        type: 'customnode',
        data: { label: 'Node 1' },
        position: { x: 0, y: 0 },
        sourcePosition: 'right',
        targetPosition: 'left',
      },
      {
        id: 'connectionline-2',
        type: 'customnode',
        data: { label: 'Node 2' },
        position: { x: 400, y: 50 },
        sourcePosition: 'right',
        targetPosition: 'left',
      },
      {
        id: 'connectionline-3',
        type: 'customnode',
        data: { label: 'Node 3' },
        position: { x: 300, y: 200 },
        sourcePosition: 'right',
        targetPosition: 'left',
      },
      {
        id: 'connectionline-4',
        type: 'customnode',
        data: { label: 'Node 3' },
        position: { x: 300, y: 300 },
        sourcePosition: 'right',
        targetPosition: 'left',
      },
      {
        id: 'connectionline-5',
        type: 'customnode',
        data: { label: 'Node 5' },
        position: { x: 0, y: 350 },
        sourcePosition: 'right',
        targetPosition: 'left',
      },
];