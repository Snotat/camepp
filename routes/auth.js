const {
  usersignUp,
  getAllUsers,
  profsignUp,
  usersignIn,
  verifyToken,
  profsignIn,
  getProf,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/usersignup", usersignUp);
router.post("/usersignin", usersignIn);
router.post("/profsignin", profsignIn);
router.post("/profsignup", profsignUp);
router.get("/allusers", verifyToken, getAllUsers);
router.post("/getprof", getProf);

module.exports = router;
