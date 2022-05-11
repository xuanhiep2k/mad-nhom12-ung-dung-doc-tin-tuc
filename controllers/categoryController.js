const categories = require('../models/categories');

class CategoryController {
  async getAllCategories(req, res, next) {
    try {
      const listCategories = await categories
        .find({})
        .populate('articles', ['title', 'content', 'img', 'timestamps'])
        .lean();
      return res.json([...listCategories]);
    } catch (err) {
      return next(err);
    }
  }
  async getCategoryBySlug(req, res, next) {
    try {
      const { slug } = req.query;
      const category = await categories.find({
        slug: { $regex: slug, $options: 'i' }, // case insensitive string
      });
      
      // console.log(typeof [...category])
      return res.json(category);
    } catch (err) {
      return next(err);
    }
  }
}
module.exports = new CategoryController();
