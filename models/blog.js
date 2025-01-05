const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    tags: [String],
    content: {
      type: String,
      required: true,
    },
    comments: [
      {
        author: String,
        date: {
          type: Date,
          default: Date.now,
        },
        content: String,
      },
    ],
  } , {timestamps: true});

  const Blog = mongoose.model('blog' , blogPostSchema)

  module.exports = Blog