const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const requireAdmin = require("../middleware/requireAdmin");

router.post("/", requireAdmin, employeeController.addEmployee);


router.get("/", employeeController.getEmployees);

module.exports = router;
