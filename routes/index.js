const { userLogin } = require('../controller/auth/login');
const { userSignup } = require('../controller/auth/signup');

const router = require('express').Router();

router.get('/', (req, res)=>{
  res.status(200).send("Hello world!");
});

//signup route
router.post('/signup', userSignup);
//login rroute
router.post('/login', userLogin);
module.exports = router;