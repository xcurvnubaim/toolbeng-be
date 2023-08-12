const { userLogin } = require('../controller/auth/login');
const { userSignup } = require('../controller/auth/signup');
const { createOrder } = require('../controller/order');
const { getBengkel, createBengkel } = require('../controller/bengkel');


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

//get Bengkel route
router.get('/bengkel', getBengkel);
//create Bengkel route
router.post('/bengkel', createBengkel);

module.exports = router;