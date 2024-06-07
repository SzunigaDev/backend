const express = require("express");
const router = express.Router();
const db = require("./db");

// Obtener todos los empleados
router.get("/employees", (req, res) => {
  const query = "SELECT * FROM employees";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching employees: " + err.stack);
      res.status(500).send("Error fetching employees");
      return;
    }
    res.json(results);
  });
});

// Crear un nuevo empleado
router.post("/employees", (req, res) => {
  const { first_name, last_name, email, hire_date, salary } = req.body;
  const query =
    "INSERT INTO employees (first_name, last_name, email, hire_date, salary) VALUES (?, ?, ?, ?, ?)";
  db.query(
    query,
    [first_name, last_name, email, hire_date, salary],
    (err, results) => {
      if (err) {
        console.error("Error creating employee: " + err.stack);
        res.status(500).send("Error creating employee");
        return;
      }
      res.status(201).json({ id: results.insertId });
    }
  );
});

// Actualizar un empleado
router.put("/employees/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, hire_date, salary } = req.body;
  const query =
    "UPDATE employees SET first_name = ?, last_name = ?, email = ?, hire_date = ?, salary = ? WHERE id = ?";
  db.query(
    query,
    [first_name, last_name, email, hire_date, salary, id],
    (err, results) => {
      if (err) {
        console.error("Error updating employee: " + err.stack);
        res.status(500).send("Error updating employee");
        return;
      }
      res.status(200).send("Employee updated");
    }
  );
});

// Eliminar un empleado
router.delete("/employees/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM employees WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error deleting employee: " + err.stack);
      res.status(500).send("Error deleting employee");
      return;
    }
    res.status(200).send("Employee deleted");
  });
});

module.exports = router;
