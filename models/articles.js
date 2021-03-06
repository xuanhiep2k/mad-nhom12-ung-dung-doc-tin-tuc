const mongoose = require('mongoose');

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },
    img: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment',
      },
    ],
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('articles', articleSchema);
