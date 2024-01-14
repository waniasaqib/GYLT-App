const express = require("express")
router = express.Router()
const pool = require('./databaseconnection')

router.route('/').get( async(req, res) => {
    const username = req.query.username
    const password = req.query.password

    let sql = "SELECT username, password FROM persons WHERE username= '" + username + "'and password= '" + password + "'"

    const result = await pool.query(sql)
    console.log(result)
    if (result[1].length == 0) {
        res.json("fail")
    }
    else
    {
        res.status(202).json(result[0])
    }

    })

module.exports = router