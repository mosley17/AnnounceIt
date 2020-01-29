import express from 'express';
import userController from './controllers/userController';
import announcementController from './controllers/announcementController';
import {deleteAnnouncement} from './models/announceModify';
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.status(200).json({
        "message":"weldone and welcome "
    })
})
app.post('/api/v1/auth/signup', userController.userEnd)
app.post('/api/v1/announcement', announcementController.announceEnd)
app.delete('/api/v1/announcement/:id', deleteAnnouncement)
const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`listen to port ${port}`))

export default app;

