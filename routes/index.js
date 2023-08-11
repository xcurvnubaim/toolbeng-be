const { userLogin } = require('../controller/auth/login');
const { userSignup } = require('../controller/auth/signup');
const { getBengkel, createBengkel } = require('../controller/bengkel');

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

//get Bengkel route
router.get('/bengkel', getBengkel);
//create Bengkel route
router.post('/bengkel', createBengkel);

module.exports = router;