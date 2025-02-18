const db = require('../config/firebaseConfig');

// Get all expenses from the database
const getAllExpenses = async (req, res) => {
  try {
    const expensesSnapshot = await db.collection('expenses').get();
    const expenses = [];
    expensesSnapshot.forEach((doc) => {
      expenses.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).json({ success: true, data: expenses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Add a new expense
const addExpense = async (req, res) => {
  try {
    const newExpense = req.body;
    const docRef = await db.collection('expenses').add(newExpense);
    res.status(201).json({ success: true, id: docRef.id, ...newExpense });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedExpense = req.body;
    await db.collection('expenses').doc(id).update(updatedExpense);
    res.status(200).json({ success: true, id, ...updatedExpense });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('expenses').doc(id).delete();
    res.status(200).json({ success: true, message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { getAllExpenses, addExpense, updateExpense, deleteExpense };