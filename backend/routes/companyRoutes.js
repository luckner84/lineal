const { AddCompany, GetCompany, ReadOne, EditCompany, deleteCompany, editCompanyLogo, userGetCompany, userReadOne} = require('../controllers/CompanyController')
const {verifyIsUserIsLoggedIn}=require('../middleware/authentication')
const router=require('express').Router()
const fileUpload=require('../middleware/fileUpload')

router.get('/user-get-company',userGetCompany)
router.get('/user-detail-company/:id',userReadOne)

router.post('/add-company',fileUpload.single("logo"),verifyIsUserIsLoggedIn,AddCompany)
router.get('/get-company',verifyIsUserIsLoggedIn,GetCompany)
router.get('/detail/:id',verifyIsUserIsLoggedIn,ReadOne)
router.patch('/edit-company/:compId',verifyIsUserIsLoggedIn,EditCompany)
router.patch('/edit-company-logo/:compId',fileUpload.single("logo"),verifyIsUserIsLoggedIn,editCompanyLogo)
router.delete('/delete-company/:compId',verifyIsUserIsLoggedIn,deleteCompany)

module.exports=router