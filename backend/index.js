const express=require('express');
const bcrypt = require('bcrypt');
const User=require("./Db/User")
const cors=require("cors");
require("./Db/Config")
const app = express();
app.use(express.json())
app.use(cors());
const jwt = require('jsonwebtoken')
const jwtkey = 'e-com'

app.post("/register", async (req,res)=>{
  req.body.password = await bcrypt.hash(req.body.password,16);
    let user = new User(req.body);
   
    const result=await user.save();
   

    // return res.json(req.body);
    jwt.sign({user},jwtkey,{expiresIn:'2h'},(err,token)=>{
      if(err){
        res.send({result:"something went wrong"})
      }
      res.send({user,auth:token})
    })
})


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (user) {
      // Ensure a password is provided
      if (!password) {
        return res.status(400).json({ result: 'missing_password', message: 'Password is required' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Generate JWT token
        const token = jwt.sign({ userId: user._id, email: user.email }, jwtkey, { expiresIn: '1h' });

        // Send the token in the response
        return res.status(200).json({
          result: 'success',
          user: { email: user.email /* other user data */ },
          token: token,
        });
      } else {
        // Incorrect password
        return res.status(401).json({ result: 'incorrect_password', message: 'Incorrect password' });
      }
    } else {
      // User not found
      return res.status(404).json({ result: 'user_not_found', message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: 'error', message: 'Internal server error' });
  }
});

const port = 5001; // Change the port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
