const express=require("express");
const router=express.Router();
const home_controller=require("../controllers/home_controller");

router.get("/",home_controller.home);
router.post('/create',home_controller.create);
router.delete('/remove/:id',home_controller.remove);
router.get('/blogs/:id',home_controller.details);


module.exports=router;