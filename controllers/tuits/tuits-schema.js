import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: String,
  liked: Boolean,
  topic: String,
  userName: String,
  handle: String,
  time: String,
  image: String,
  title: String,
  disliked: Boolean,
  dislikes: Number,
  replies: Number,
  retuits: Number

}, {collection: 'tuits'});
export default schema;