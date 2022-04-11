const articles = require('../models/articles');
const categories = require('../models/categories');

class ArticleController {
  async getAllArticles(req, res, next) {
    try {
      await articles.find({}).then((listArticles) => {
        listArticles.map((article) => article.toObject());
        return res.json({
          data: listArticles,
        });
      });
    } catch (err) {
      return next(err);
    }
  }
  async getArticleBySlug(req, res, next) {
    try {
      const { category } = req.query;
      const categorySearchBySlug = await categories
        .findOne({
          slug: category,
        })
        .populate('articles.article_id', ['title', 'content', 'img']);
      return res.json({
        data: categorySearchBySlug.articles,
      });
    } catch (err) {
      return next(err);
    }
  }
}
module.exports = new ArticleController();
