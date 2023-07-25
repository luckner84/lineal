const { createMail } = require('../controllers/MessageController')

const router=require('express').Router()


router.post('/send-email',createMail)

module.exports=router