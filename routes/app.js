const express = require('express');
const controllerSwager = require('../controller/swager.controller');
const router = express.Router();

router.get('/', (req,res)=>{
     res.json({message:' Hellow'})
})

router.get('/store', controllerSwager.listStore)
router.post('/store', controllerSwager.insertStore)
router.put('/store/:id', controllerSwager.updateStore)
router.delete('/store/:id', controllerSwager.deleteStore)


module.exports = router
