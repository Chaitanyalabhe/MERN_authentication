const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// Register a user
exports.registerUser = (req, res) => {
  const { firstName, lastName, mobileNumber, password } = req.body;

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 10);

  const query = 'INSERT INTO users (firstName, lastName, mobileNumber, password) VALUES (?, ?, ?, ?)';
  db.query(query, [firstName, lastName, mobileNumber, hashedPassword], (err, result) => {
    if (err) return res.status(400).json({ error: err.message });
    res.status(201).json({ message: 'User registered successfully!' });
  });
};

// Login a user
exports.loginUser = (req, res) => {
  const { mobileNumber, password } = req.body;

  const query = 'SELECT * FROM users WHERE mobileNumber = ?';
  db.query(query, [mobileNumber], (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ error: 'Invalid credentials.' });

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials.' });

    // Generate a token
    const token = jwt.sign({ id: user.id, firstName: user.firstName }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ message: `Welcome ${user.firstName} ${user.lastName}`, token });
  });
};