const mongoose = require('mongoose');

const Users = mongoose.model('Users');

module.exports = {
  async insert(req, res) {
    const cat = await Users.create(req.body);
    return res.json(cat);
  },
  async selectbyid(req, res) {
    var json = req.body;
    if (json.Email != "" && json.Password != "") {
      const cat = await Users.find({ "Email": json.Email, "Password": json.Password });
      console.log(cat);
      try {
        if (cat[0].Email == json.Email && cat[0].Password == json.Password) {
          return res.json(cat);
        }
      }
      catch
      {
        const cat = { "Answer": 'False' };
        return res.json(cat);
      }
    }
    else {
      const cat = { "Answer": 'False' };
      return res.json(cat);
    }
  },
  async selectall(req, res) {
    const cat = await Users.find();
    return res.json(cat);
  },
  async update(req, res) {
    var json = req.body;
    const cat = await Users.findByIdAndUpdate(json._id, json, {
      Name: json.Name,
      Password: json.Password,
      Email: json.Email
    });
    return cat;
  }
};