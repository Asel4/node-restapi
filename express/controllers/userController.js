const db = require('../config/firebaseConfig');

// Get all users from the database
const getAllUsers = async (req, res) => {
  try {
    const usersSnapshot = await db.collection('users').get();
    const users = [];
    usersSnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Add a new user to the database
const addUser = async (req, res) => {
  try {
    const newUser = req.body;
    const docRef = await db.collection('users').add(newUser);
    res.status(201).json({ success: true, id: docRef.id, ...newUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//Edit or update user information
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;
    await db.collection('users').doc(id).update(updatedUser);
    res.status(200).json({ success: true, message: 'User has been created successfully', id, ...updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, errorMessage: "User is not found" });
  }
};

//Delete user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('users').doc(id).delete();
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { getAllUsers, addUser, updateUser, deleteUser };