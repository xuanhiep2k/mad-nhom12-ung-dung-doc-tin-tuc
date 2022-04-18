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
  async getArticleById(req, res, next) {
    try {
      const id = req.params.id;
      const article = await articles.findById({ _id: id });
      return res.json({
        data: article,
      });
    } catch (err) {
      return next(err);
    }
  }
  async getArticleByTitle(req, res, next) {
    try {
      const { title } = req.query;
      console.log('title', title);
      const article = await articles.find({
        title: { $regex: title, $options: 'i' }, // case insensitive string
      });
      return res.json({
        data: article,
      });
    } catch (err) {
      return next(err);
    }
  }
}
module.exports = new ArticleController();
