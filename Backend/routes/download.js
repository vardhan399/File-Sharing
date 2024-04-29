const router = require('express').Router();
const jwt = require('jsonwebtoken')
const { FILE } = require('../Db/db');

router.get('/:Id',async function(req,res){

    const file = await FILE.findOne({
        uuid: req.params.Id
    })

    if(!file){
        return res.render('download', {error : 'Link has been expired'})

    }

    const filePath = `${__dirname}/../${file.path}`

    res.download(filePath)



})

module.exports = router
