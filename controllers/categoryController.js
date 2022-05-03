const categories = require('../models/categories');

class CategoryController {
  async getAllCategories(req, res, next) {
    try {
      const listCategories = await categories
        .find({})
        .populate('articles', ['title', 'content', 'img'])
        .lean();

      return res.json([...listCategories]);
    } catch (err) {
      return next(err);
    }
  }
}
module.exports = new CategoryController();
