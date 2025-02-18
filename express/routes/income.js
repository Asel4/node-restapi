const express = require("express");

let router = express.Router();

const incomeController = require('../controllers/incomeController');

router.get('/', incomeController.getAllIncome);
router.post('/', incomeController.addIncome);
router.put('/:id', incomeController.updateIncome);
router.delete('/:id', incomeController.deleteIncome);

module.exports = router;