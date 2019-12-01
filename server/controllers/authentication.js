const jwt = require('jwt-simple');
const config = require('../config');
const db = require("../models");

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

const my_fake_uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

exports.signin = function (req, res, next) {
  db.users.findAll({ where: { loginId: req.user.loginId } })
    .then(u => {
      if (u.length > 0) {  // if the user existed
        const newLoginId = my_fake_uuid()
        db.users.update({ loginId: newLoginId }, { where: { id: u[0].id } })
          .then(response => {
            // Repond to request indicating the user was created
            res.json({
              token: tokenForUser(req.user),
              user: {
                id: newLoginId,
                name: req.user.name
              }
            });
          })
      }
    }).catch(err => next(err))
}

exports.signup = function (req, res, next) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  db.users.findOne({ where: { email: email } })
    .then(existingUser => {
      // If a user with email does exist, return an error
      if (existingUser)
        return res.status(422).send({ error: 'Email is in use' });

      db.users.create({
        name: name,
        email: email,
        password: password,
        loginId: my_fake_uuid(),
      }).then(newUser => {


        res.json({
          token: tokenForUser(newUser),
          user: {
            id: newUser.loginId,
            name: newUser.name
          }
        });



        /*
        newUser = {
          "id": "6f802cdd-5b47-46a6-973b-078493018fd1",
          "name": "Dinh HUYNH",
          "email": "dinh.bob@gmail.com",
          "password": "$2a$12$3SRKCpEpyQDo0n2d9Nh7e.xcFu5ZCVaeoCiiabykWETRB76O5Vhoa",
          "loginId": "7066b205-7285-4134-80cf-613a6e2cc380",
          "updatedAt": "2019-10-10T12:36:54.045Z",
          "createdAt": "2019-10-10T12:36:54.045Z"
        } 
        */

        // db.msgFolders.findAll({})
        //   .then(msgFolderRes => {
        //     let msgF = []
        //     for (let i = 0; i < msgFolderRes.length; i++) {
        //       if (msgFolderRes[i].name == "inbox")
        //         msgF.push({
        //           parentId: "",
        //           level: 0,
        //           posLevel: 0,
        //           MsgFolderId: msgFolderRes[i].id,
        //           UserId: newUser.id
        //         })
        //       else if (msgFolderRes[i].name == "draft")
        //         msgF.push({
        //           parentId: "",
        //           level: 0,
        //           posLevel: 1,
        //           MsgFolderId: msgFolderRes[i].id,
        //           UserId: newUser.id
        //         })
        //       else if (msgFolderRes[i].name == "sent")
        //         msgF.push({
        //           parentId: "",
        //           level: 0,
        //           posLevel: 2,
        //           MsgFolderId: msgFolderRes[i].id,
        //           UserId: newUser.id
        //         })
        //     }
        //     db.user_msgs.bulkCreate(msgF)
        //       .then(user_msgsRes => {
        //         // Response to request indicating the user was created
        //         res.json({
        //           token: tokenForUser(newUser),
        //           user: {
        //             id: newUser.loginId,
        //             name: newUser.name
        //           }
        //         });
        //       }).catch(err => next(err))

        //   }).catch(err => next(err))
      }).catch(err => next(err))
    }).catch(err => next(err))
}