import connectMongo from '../../../utils/DbConnect';
import Post from '../../../models/post';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function showPosts(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongo();
    const posts = await Post.find({}, (err: String, result: any) => {
      if (err) res.json({ err });
      return result;
    }).clone();
    res.json({ posts });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
