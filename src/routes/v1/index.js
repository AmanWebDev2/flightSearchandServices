const express=require('express');
const cityController=require('../../controllers/city-controller');

//now here all the request having '/v1' will come we have to just configure CRUD operation api for different url made via different 

const router=express.Router();
router.post('/city',cityController.create);
module.exports=router;




