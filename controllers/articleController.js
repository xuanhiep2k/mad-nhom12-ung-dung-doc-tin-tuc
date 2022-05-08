const articles = require('../models/articles');
const categories = require('../models/categories');

class ArticleController {
  async getAllArticles(req, res, next) {
    try {
      await articles.find({}).then((listArticles) => {
        listArticles.map((article) => article.toObject());
        return res.json([...listArticles]);
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
        .populate('articles', ['title', 'content', 'img']);
      return res.json([...categorySearchBySlug.articles]);
    } catch (err) {
      return next(err);
    }
  }
  async getArticleById(req, res, next) {
    try {
      const id = req.params.id;
      const article = await articles.findById({ _id: id });
      return res.json(article);
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
      return res.json(article);
    } catch (err) {
      return next(err);
    }
  }
  async getArticleSaved(req, res, next) {
    try {
      if (req.body.arrId) {
        const arrId = [...req.body.arrId];
        const listArticles = [];
        for (let i = 0; i < arrId.length; i++) {
          let article = await articles.findById({ _id: arrId[i] });
          listArticles.push(article);
        }
        return res.json(listArticles);
      }
      return res.send('Không có dữ liệu!');
    } catch (err) {
      return next(err);
    }
  }
}
module.exports = new ArticleController();
