import express from 'express';
import userController from './controllers/userController';
import announcementController from './controllers/announcementController';
<<<<<<< HEAD
import {deleteAnnouncement} from './models/announceModify';
||||||| merged common ancestors
import viewAllAnnouncements from './models/announceModify';

=======
import {viewAllAnnouncements,viewSpecificAnnounce,updateAnnouncement} from './models/announceModify';

>>>>>>> ft-upadate-announcement-170966918
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.status(200).json({
        "message":"weldone and welcome "
    })
})
app.post('/api/v1/auth/signup', userController.userEnd)
app.post('/api/v1/announcement', announcementController.announceEnd)
<<<<<<< HEAD
app.delete('/api/v1/announcement/:id', deleteAnnouncement)
||||||| merged common ancestors
app.get('/api/v1/allannouncements', viewAllAnnouncements)
=======
app.get('/api/v1/announcements', viewAllAnnouncements)
app.get('/api/v1/announcements/:id', viewSpecificAnnounce)
app.put('/api/v1/announcements/:id', updateAnnouncement)

>>>>>>> ft-upadate-announcement-170966918
const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`listen to port ${port}`))

export default app;

