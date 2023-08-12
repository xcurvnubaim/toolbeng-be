const { userLogin } = require('../controller/auth/login');
const { userSignup } = require('../controller/auth/signup');
const { createOrder } = require('../controller/order');

const router = require('express').Router();

router.get('/', (req, res)=>{
  res.status(200).send("Hello world!");
});

//signup route
router.post('/signup', userSignup);
//login route
router.post('/login', userLogin);
//createOrder route
router.post('/order', createOrder);

module.exports = router;