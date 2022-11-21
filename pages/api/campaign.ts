// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Children } from 'react';

type Data = {};

function recursivelyIterateTree(treeObject: any) {
  console.log(treeObject);
  if (treeObject.children) {
    treeObject.children.forEach(function (child: any) {
      console.log(child);
      recursivelyIterateTree(child);
    });
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  /* To Further Read
  https://stackoverflow.com/questions/4048151/what-are-the-options-for-storing-hierarchical-data-in-a-relational-database   
  https://dba.stackexchange.com/questions/89051/stored-procedure-to-update-an-adjacency-model-to-nested-sets-model
  https://web.archive.org/web/20181221162916/http://mikehillyer.com/articles/managing-hierarchical-data-in-mysql/
  https://www.npmjs.com/package/mongoose-nested-set
  */
  recursivelyIterateTree(req.body.tree);
  res.status(200).json({ name: req.body });
}
