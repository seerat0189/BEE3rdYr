const Users = require("../model/user")

module.exports.postAddUser = async(req, res)=>{
    let {email, username, password} = req.body

    let newUser = new Users({
        email: email,
        username: username,
        password: password
    })
    await newUser.save();
    res.json({
        success: true,
        data: newUser,
        message: "User added successfully"
    })
}

module.exports.getAllUsers = async(req, res)=>{
    let allUsers = await Users.find();
    res.json({
        success: true,
        data: allUsers
    })
}

module.exports.getOneUser = async(req, res) => {
    let {id} = req.params
    let userExist = await Users.findOne({_id:id}).populate("blogs");
    if (userExist) {
        res.json({
            success: true,
            data: userExist
        })
    }
}