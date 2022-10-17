import { Schema, model, models } from 'mongoose';
const postSchema = new Schema({
  title: String,
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Post = models.Post || model('Post', postSchema);

export default Post;
