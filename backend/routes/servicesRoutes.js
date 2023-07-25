const {} = require('../controllers/CompanyController')
const { newService, getService, readOne, editService, editServiceImage, deleteService, userGetService, userReadOne, userGetServiceByCatefory, editImageService } = require('../controllers/ServiceController')
const {verifyIsUserIsLoggedIn}=require('../middleware/authentication')
const router=require('express').Router()
const fileUpload=require('../middleware/fileUpload')


router.get('/user-get-service',userGetService)
router.get('/user-detail-service/:id',userReadOne)
router.get('/user-get-category/:category',userGetServiceByCatefory)

router.post('/add-service',fileUpload.single("image"),verifyIsUserIsLoggedIn,newService)
router.get('/get-service',verifyIsUserIsLoggedIn,getService)
router.get('/detail/:id',verifyIsUserIsLoggedIn,readOne)
router.patch('/edit-service/:serviceId',verifyIsUserIsLoggedIn,editService)
router.patch('/edit-image-service/:serviceId',fileUpload.single("image"),verifyIsUserIsLoggedIn,editImageService)
router.delete('/delete-service/:serviceId',verifyIsUserIsLoggedIn,deleteService)

module.exports=router