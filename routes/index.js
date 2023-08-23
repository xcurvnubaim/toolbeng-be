const router = require('express').Router();
const { userLogin } = require('../controller/auth/login');
const { userSignup } = require('../controller/auth/signup');
const { verifyToken } = require('../controller/auth/middleware');
const { createOrder, getOrder } = require('../controller/order');
const { getBengkel, createBengkel } = require('../controller/bengkel');
const { createContactUs } = require('../controller/contactUs');
const { changePassword, changeProfile } = require('../controller/user');

router.get('/', (req, res) => {
  res.status(200).send("Hello world!");
});

//signup route
router.post('/signup', userSignup);
//login route
router.post('/login', userLogin);
//createOrder route
router.post('/order',verifyToken, createOrder);
//get Order route
router.get('/order', verifyToken, getOrder);

//protected route
router.get('/protected-route', verifyToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});


//get Bengkel route
router.get('/bengkel', getBengkel);
//create Bengkel route
router.post('/bengkel', createBengkel);

//create contact us
router.post('/contact-us', createContactUs);

//Update password
router.post('/user/update-pass', verifyToken, changePassword);
//Update profile
router.post('/user/update-profile', verifyToken, changeProfile);

module.exports = router;
