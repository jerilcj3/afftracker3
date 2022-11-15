import { RawNodeDatum } from "react-d3-tree/lib/types/common";

function rotatorBFS(
  name: string,
  url: string,
  weight: number,
  tree: RawNodeDatum | RawNodeDatum[],
  newNodeName: string
) {
  const queue: RawNodeDatum[] = [];
  queue.unshift(tree as RawNodeDatum);
  //console.log("before while loop", queue);
  while (queue.length > 0) {
    const curNode = queue.pop();
    //console.log("inside while loop", curNode);
    if (curNode!.name === name) {
      if (curNode!.name.includes("rotator")) {
        curNode!.children!.push({
          name: newNodeName,
          attributes: { weight: weight, url: url },
          children: [],
        });
      } else {
        curNode!.children!.push({
          name: newNodeName,
          children: [],
        });
      }

      return { ...tree };
    }

    const len = curNode!.children!.length;
    for (let i = 0; i < len; i++) {
      queue.unshift(curNode!.children![i]);
    }
  }
}

export default rotatorBFS;