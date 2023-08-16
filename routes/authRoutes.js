const express = require('express') 
const router=express.Router() 

const authController=require('../controllers/authController') 

//register 
router.post('/register',authController.register)  

router.post('/login',authController.login)  

router.get('/getalluser',authController.getalluser) 

module.exports = router; 