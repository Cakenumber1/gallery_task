// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { data } from './server';

// get pages
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'DELETE': {
      const { id } = req.query;
      const a = data.findIndex((obj) => obj.id === Number(id));
      data.splice(a, 1);
      return res.status(200).end();
    }
    default:
  }
  return res.status(400).end();
}
