const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController.js');
const articleController = require('../controllers/articleController.js');
const userController = require('../controllers/usersController.js');
const commentController = require('../controllers/commentController.js');

router.get('/category', categoryController.getAllCategories);
router.get('/category/search/', articleController.getArticleBySlug);
router.get('/category/slug', categoryController.getCategoryBySlug);
router.get('/', articleController.getAllArticles);
router.get('/article/id/:id', articleController.getArticleById);
router.get('/article/search/', articleController.getArticleByTitle);
router.get('/article/saved', articleController.getArticleSaved);

//user checklogin
router.post('/login/', userController.login);
router.get('/getAllUsers', userController.getAllUsers);

//comments
router.get('/getAllComments', commentController.getAllComment);
router.get('/comment/id/:id', articleController.getCommentOfArticle);

module.exports = router;
