import express from 'express';
import userController from './controllers/userController';

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
//         id:announcements.length+1,
//         owner: req.body.owner,
//         status: req.body.status,
//         text: req.body.text,
//         start_date: req.body.start_date,
//         end_date: req.body.end_date
//     };
//     announcements.push(announcement);
//    res.send(announcement);
// })

app.get('/', (req,res)=>{
    res.status(200).json({
        "message":"welldone"
    })
})
app.post('/api/v1/auth/signup', userController.userAPI)
const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`listen to port ${port}`))

export default app;