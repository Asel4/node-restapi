const db = require('../config/firebaseConfig'); // Import Firestore database instance

// Retrieve all income records from Firestore
const getAllIncome = async (req, res) => {
  try {
    const incomeSnapshot = await db.collection('income').get();
    const income = [];
    incomeSnapshot.forEach((doc) => {
      income.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).json({ success: true, data: income });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Add a new income record to Firestore
const addIncome = async (req, res) => {
  try {
    const newIncome = req.body;
    const docRef = await db.collection('income').add(newIncome);
    res.status(201).json({ success: true, id: docRef.id, ...newIncome });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedIncome = req.body;
    await db.collection('income').doc(id).update(updatedIncome);
    res.status(200).json({ success: true, id, ...updatedIncome });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteIncome = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('income').doc(id).delete();
    res.status(200).json({ success: true, message: 'Income deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { getAllIncome, addIncome, updateIncome, deleteIncome };