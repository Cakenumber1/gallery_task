// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { data } from './server';

// get pages
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET': {
      const { offset, filter } = req.query;
      let ans = data;
      if (filter && filter !== 'Show All') {
        ans = data.filter((el) => (el.tag === filter));
      }
      if (ans && ans.length) {
        return res.status(200).json(ans.slice(Number(offset), Number(offset) + 13));
      }
      return res.status(200).json([]);
    }
    default:
  }
  return res.status(400).end();
}
