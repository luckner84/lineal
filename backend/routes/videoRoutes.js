
const { newVideo, getVideo, readOne, editVideo, deleteVideo, userReadOne, userGetVideo } = require('../controllers/VideoController')
const {verifyIsUserIsLoggedIn}=require('../middleware/authentication')
const router=require('express').Router()
const videoUpload=require('../middleware/videoUpload')

router.get('/user-get-video',userGetVideo)
router.get('/user-detail-video/:id',userReadOne)


router.post('/add-video',videoUpload.single("video"),verifyIsUserIsLoggedIn,newVideo)
router.get('/get-video',verifyIsUserIsLoggedIn,getVideo)
router.get('/detail/:id',verifyIsUserIsLoggedIn,readOne)
router.patch('/edit-video/:videoId',verifyIsUserIsLoggedIn,editVideo)
router.delete('/delete-video/:videoId',verifyIsUserIsLoggedIn,deleteVideo)

module.exports=router