import express from 'express';
import userController from './controllers/userController';
import announcementController from './controllers/announcementController';
import {viewAllAnnouncements,viewSpecificAnnounce,updateAnnouncement} from './models/announceModify';

const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.status(200).json({
        "message":"welldone"
    })
})
app.post('/api/v1/auth/signup', userController.userEnd)
app.post('/api/v1/announcement', announcementController.announceEnd)
app.get('/api/v1/announcements', viewAllAnnouncements)
app.get('/api/v1/announcements/:id', viewSpecificAnnounce)
app.put('/api/v1/announcements/:id', updateAnnouncement)

const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`listen to port ${port}`))

export default app;

