const router = require('express').Router();
const jwt = require('jsonwebtoken')
const myMiddleware = require('../Authentication/index')
const { FILE } = require('../Db/db');




router.get('/:Id',async function(req,res){
    const file = await FILE.findOne({
        uuid: req.params.Id,
    })

    if(!file){
        res.render('download', { error: 'Link has been expired' })
    }

    res.render('download', {
        uuid: file.uuid,
        fileName: file.filename,
        fileSize :file.size,
        downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`

    })


})


module.exports = router;