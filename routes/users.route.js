const {getAllUsers, createUser, updateUsers, deleteUsers} = require('../controllers/users.controller');
const router = require('express').Router();



router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers)



module.exports = router;