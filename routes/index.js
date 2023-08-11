const { userLogin } = require('../controller/auth/login');
const { userSignup } = require('../controller/auth/signup');
// const { chooseBengkel } = require('../controller/bengkel');

const router = require('express').Router();

router.get('/', (req, res)=>{
  res.status(200).send("Hello world!");
});

//signup route
router.post('/signup', userSignup);
//login route
router.post('/login', userLogin);
//chooseBengkel route
// router.post('/choose-bengkel', chooseBengkel);

module.exports = router;