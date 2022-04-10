const categories = require('../models/categories');

class CategoryController {
  async getAllCategories(req, res, next) {
    try {
      const listCategories = await categories
        .find({})
        .populate('articles.article_id', ['title', 'content', 'image'])
        .lean();

      return res.json({
        data: listCategories,
      });
    } catch (err) {
      return next(err);
    }
  }
}
module.exports = new CategoryController();
