import express from 'express';
import userController from './controllers/userController';
import announcementController from './controllers/announcementController';
import {viewAllAnnouncements,viewSpecificAnnounce} from './models/announceModify';

const app = express();

app.use(express.json());





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
app.get('/api/v1/allannouncements', viewAllAnnouncements)
app.get('/api/v1/announcements/:id', viewSpecificAnnounce)
const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`listen to port ${port}`))

export default app;