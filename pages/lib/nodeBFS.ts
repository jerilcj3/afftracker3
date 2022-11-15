import { RawNodeDatum } from 'react-d3-tree/lib/types/common';

interface nodeBFSInterface {
  name: string;
  tree: RawNodeDatum | RawNodeDatum[];
  newNodeName: string;
  attribute: string;
}

function nodeBFS(nodeBFSInterface: nodeBFSInterface) {

  const queue: RawNodeDatum[] = [];
  queue.unshift(nodeBFSInterface.tree as RawNodeDatum);

  //console.log("before while loop", queue);
  while (queue.length > 0) {
    const curNode = queue.pop();
    //console.log("inside while loop", curNode);
    if (curNode!.name === nodeBFSInterface.name) {
      try {
        if (
          nodeBFSInterface.newNodeName !== undefined &&
          typeof nodeBFSInterface.attribute === 'string'
        ) {
          curNode!.children!.push({
            name: nodeBFSInterface.newNodeName,
            attributes: { type: nodeBFSInterface.attribute },
            children: [],
          });
        }
      } catch (err) {
        console.log(err);
      }

      return { ...nodeBFSInterface.tree };
    }

    const len = curNode!.children!.length;
    for (let i = 0; i < len; i++) {
      queue.unshift(curNode!.children![i]);
    }
  }
}

export default nodeBFS;
