const { newUser, getUser, singleUser, updateUserProfile, deleteUser, userLogin} = require('../controllers/UserController')
const fileUpload=require('../middleware/fileUpload')
const router=require('express').Router()
const {verifyIsUserIsLoggedIn}=require('../middleware/authentication')

router.post('/new-user',fileUpload.single('image'), newUser)
router.post('/login', userLogin)
router.get('/get-user', getUser)
router.get('/single/:userId',verifyIsUserIsLoggedIn ,singleUser)
router.patch('/edit-user/:userId',verifyIsUserIsLoggedIn ,updateUserProfile)
router.delete('/delete-user',verifyIsUserIsLoggedIn,deleteUser)

module.exports=router