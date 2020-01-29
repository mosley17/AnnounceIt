import announcements from '../models/Announcement'
class AnnouncementController {
    constructor() {
        this.announceEnd = (req, res) => {
            const announceInput = announcements.createAnnounce(req.body)
            return res.status(201).json({
                "status": "created successfully",
                "data": announceInput

            });
        }
    }
}

export default new AnnouncementController()
