import express from 'express';
import userController from './controllers/userController';
import announcementController from './controllers/announcementController';

const app = express();

app.use(express.json());

// const announcements=[];

// app.get('/', (req,res) =>{
//     res.send('Welcome to our agency');
// });
// app.get('/api/v1/announcements', (req,res) =>{
//     res.send(announcements)
// });

// app.get('/api/v1/announcements/:id', (req,res)=>{
//     const announcement= announcements.find(announce= announce.id === parseInt(req.params.id));
//     if(!announcement) res.status(404).send('the announcement not found');
//     res.send(announcement);

// })
// app.post('/api/v1/announcement', (req,res)=>{
//     const announcement={
        
//     };
//     announcements.push(announcement);
//    res.send(announcement);
// })

app.get('/', (req,res)=>{
    res.status(200).json({
        "message":"welldone"
    })
})
app.post('/api/v1/auth/signup', userController.userEnd)
app.post('/api/v1/announcement', announcementController.announceEnd)
const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`listen to port ${port}`))

export default app;