import connectMongo from '../../../utils/DbConnect';
import Post from '../../../models/post';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function createPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    const test = await Post.create(req.body);
    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
