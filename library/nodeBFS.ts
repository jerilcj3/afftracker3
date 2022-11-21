import { RawNodeDatum } from 'react-d3-tree/lib/types/common';

interface nodeBFSInterface {
  name: string;
  tree: RawNodeDatum | RawNodeDatum[];
  newNodeName: string;
  attributes: {
    type: string;
    url?: string | undefined;
    weight?: number | undefined;
  };
}

function nodeBFS(nodeBFSInterface: nodeBFSInterface) {
  const queue: RawNodeDatum[] = [];
  queue.unshift(nodeBFSInterface.tree as RawNodeDatum);

  //console.log("before while loop", queue);
  while (queue.length > 0) {
    const curNode = queue.pop();
    

    switch (true) {
      /* case for landerRotator */
      case curNode!.name === nodeBFSInterface.name &&
        nodeBFSInterface.attributes?.type === 'landerRotator':
        try {
          curNode!.children!.push({
            name: nodeBFSInterface.newNodeName,
            attributes: { type: nodeBFSInterface.attributes.type },
            children: [],
          });
        } catch (err) {
          console.log(err);
        }

        return { ...nodeBFSInterface.tree };

      /* case for lander node */
      case curNode!.name === nodeBFSInterface.name &&
        nodeBFSInterface.attributes?.type === 'landerNode':
        try {
          curNode!.children!.push({
            name: nodeBFSInterface.newNodeName,
            attributes: {
              type: nodeBFSInterface.attributes.type,
              url: nodeBFSInterface.attributes.url
                ? nodeBFSInterface.attributes.url
                : '',
              weight: nodeBFSInterface.attributes.weight
                ? nodeBFSInterface.attributes.weight
                : '',
            },
            children: [],
          });
        } catch (err) {
          console.log(err);
        }

        return { ...nodeBFSInterface.tree };

      /* Case for Email Rotator */

      /* Case for Email Node */
      case curNode!.name === nodeBFSInterface.name &&
        nodeBFSInterface.attributes?.type === 'emailNode':
        try {
          curNode!.children!.push({
            name: nodeBFSInterface.newNodeName,
            attributes: {
              type: nodeBFSInterface.attributes.type,
            },
            children: [],
          });
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
