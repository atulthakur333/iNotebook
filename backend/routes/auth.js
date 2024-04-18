const express = require('express')
const router = express.Router()
const {body, validationResult} = require ('express-validator');

router.post('/', [
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid e-mail'),isEmail(),
    body('password','Enter a valid password').isLength({min:5})
], (req, res)=>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    userEvent.create({
        name: req.body.name,
        password: req.body.password,
        email:req.body.email

    }).then(user=> res.json(user))
    .catch(err=>{console.log(err)
    res.json({error: 'Please enter a unique value of email' })})
}
)

module.exports = router