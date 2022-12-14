import { RawNodeDatum } from 'react-d3-tree/lib/types/common';

interface nodeBFSInterface {
  tree: RawNodeDatum | RawNodeDatum[];
  clickedNodeName: string;
  newNodeName: string;
  filters: {
    type: string;
    url?: string | undefined;
    weight?: number | undefined;
  };
}

const initialState: nodeBFSInterface = {
  tree: [],
  clickedNodeName: '',
  newNodeName: '',
  filters: {
    type: '',
    url: '',
    weight: 0,
  },
};

function nodeBFS(nodeBFSInterface: nodeBFSInterface) {
  const queue: RawNodeDatum[] = [];
  queue.unshift(nodeBFSInterface.tree as RawNodeDatum);

  //console.log("before while loop", queue);
  while (queue.length > 0) {
    const curNode = queue.pop();

    switch (true) {
      /* case for landerRotator */
      case curNode!.name === nodeBFSInterface.clickedNodeName &&
        nodeBFSInterface.filters?.type === 'landerRotator':
        try {
          curNode!.children!.push({
            name: nodeBFSInterface.newNodeName,
            attributes: { type: nodeBFSInterface.filters.type },
            children: [],
          });
        } catch (err) {
          console.log(err);
        }

        return { ...nodeBFSInterface.tree };

      /* case for lander node */
      case curNode!.name === nodeBFSInterface.clickedNodeName &&
        nodeBFSInterface.filters?.type === 'landerNode':
        try {
          curNode!.children!.push({
            name: nodeBFSInterface.newNodeName,
            attributes: {
              type: nodeBFSInterface.filters.type,
              url: nodeBFSInterface.filters.url
                ? nodeBFSInterface.filters.url
                : '',
              weight: nodeBFSInterface.filters.weight
                ? nodeBFSInterface.filters.weight
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
      case curNode!.name === nodeBFSInterface.clickedNodeName &&
        nodeBFSInterface.filters?.type === 'emailNode':
        try {
          curNode!.children!.push({
            name: nodeBFSInterface.newNodeName,
            attributes: {
              type: nodeBFSInterface.filters.type,
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
