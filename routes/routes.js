const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController.js');
const articleController = require('../controllers/articleController.js');
router.get('/category', categoryController.getAllCategories);
router.get('/category/search/', articleController.getArticleBySlug);
router.get('/', articleController.getAllArticles);
router.get('/article/id/:id', articleController.getArticleById);
router.get('/article/search/', articleController.getArticleByTitle);

module.exports = router;
