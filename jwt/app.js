import express from 'express';
// replace it with real db
import users from './data/users.js';
// replace it with real db
import refreshTokens from './data/refreshTokens.js';
import jwt from 'jsonwebtoken';

const app = express();

const ACCESS_TOKEN = 'XhSy321JPldsK98mZflPzMeR2';// it should be long unique string, it shouldn't be stored in git, server..., it should be stored for example in .env => process.env...
const REFRESH_TOKEN = 'bpSkqYxc4VmoRqwE3iu1Lo09nMrQwE';

//middlewares
app.use(express.json());
const authMiddleware = (req, res, next) => {
  // Headers['authorization'] = "Barer g329903tj02gt3ifdse"
  const token = req.headers['authorization']?.split(' ')[1];// get second arg(token) from auth header
  if(!token){
    return res.sendStatus(401);
  } else {
    jwt.verify(token, ACCESS_TOKEN, (err, data) => {
      if (err) {
        return res.sendStatus(403); //user not authorized
      } else {
        req.user = data; //if user is authorized data will be assigned to user property
        next();
      }
    });//1arg- token from header, 2arg- access token(must the same as access token for sign)
  }
};

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/admin', authMiddleware,(req, res) => {
  res.send('Hello admin');
});

app.post('/login', (req, res) => {
  const user = users.find(u => u.email === req.body.email);
  if(!user) {
    return res.sendStatus(401); //failed auth, user passed wrong login data
  } else {
    const payload = user; //data to save in jwt
    const token = jwt.sign(payload, ACCESS_TOKEN, {expiresIn: '15s'});//1 arg- data to savem, 2arg- access token, 3arg options object
    const refreshToken = jwt.sign(payload, REFRESH_TOKEN);
    refreshTokens.push(refreshToken);
    res.json({token, refreshToken});
  }
});

app.post('/refresh-token', (req, res) => {
  const {token} = req.body;
  if(!refreshTokens.includes(token)){
    return res.sendStatus(403);
  } else {
    jwt.verify(token, REFRESH_TOKEN, (err, data) => {
      if(err) {
        return res.sendStatus(403);
      } else {
        const payload = {
          id: data.id,
          name: data.name,
          email: data.email
        };
        const newAccessToken = jwt.sign(payload, ACCESS_TOKEN, {expiresIn: '15s'});
        res.json({token: newAccessToken});
      }
    });
  }
});

app.delete('/logout', (req,res) => {
  const {refreshToken} = req.body;
  const refreshTokensIndex = refreshTokens.findIndex(t => t === refreshToken);
  if (refreshTokensIndex!==-1) {
    refreshTokens.splice(refreshTokensIndex,1);
    console.log({refreshTokens});
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});

export default app;
