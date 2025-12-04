const db = require("../db");

exports.getEmployees = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM employees ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve employees" });
  }
};


exports.addEmployee = async (req, res) => {
  const { name, email, designation } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    const result = await db.query(
      `
      INSERT INTO employees (name, email, designation)
      VALUES ($1, $2, $3)
      RETURNING *
      `,
      [name, email, designation || null]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to create employee" });
  }
};
