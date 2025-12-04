const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");
const requireAdmin = require("../middleware/requireAdmin");

router.get("/", taskController.getTasks);

router.post("/", requireAdmin, taskController.addTask);


router.put("/:id", requireAdmin, taskController.updateTask);

module.exports = router;
