const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController.js');
const articleController = require('../controllers/articleController.js');
router.get('/category', categoryController.getAllCategories);
router.get('/article', articleController.getAllArticles);
router.get('/article/search/', articleController.getArticleBySlug);

module.exports = router;
