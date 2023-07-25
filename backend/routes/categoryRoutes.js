
const { userGetCategory, userReadOne, newCategory, getCategory, readOne, editCategory, editImageCategory, deleteCategory, userCount } = require('../controllers/CategoryController')
const {verifyIsUserIsLoggedIn}=require('../middleware/authentication')
const router=require('express').Router()
const fileUpload=require('../middleware/fileUpload')

router.get('/user-get-category',userGetCategory)
router.get('/user-detail-category/:categoryId',userReadOne)
router.get('/count-category',userCount)

router.post('/add-category',fileUpload.single("image"),verifyIsUserIsLoggedIn,newCategory)
router.get('/get-category',verifyIsUserIsLoggedIn,getCategory)
router.get('/detail/:categoryId',verifyIsUserIsLoggedIn,readOne)
router.patch('/edit-category/:categoryId',verifyIsUserIsLoggedIn,editCategory)
router.patch('/edit-category-image/:categoryId',fileUpload.single("image"),verifyIsUserIsLoggedIn,editImageCategory)
router.delete('/delete-category/:categoryId',verifyIsUserIsLoggedIn,deleteCategory)


module.exports=router