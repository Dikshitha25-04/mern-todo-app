const router = require("express").Router();
const ctrl = require("../controllers/todoController");

router.post("/", ctrl.createTodo);
router.get("/", ctrl.getTodos);
router.put("/:id", ctrl.updateTodo);
router.delete("/:id", ctrl.deleteTodo);

module.exports = router;
