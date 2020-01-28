import announcements from '../models/Announcement'
class AnnouncementController {
    constructor() {
        this.announceEnd = (req, res) => {
            const announceInput = announcements.createAnnounce(req.body)
            return res.status(200).json({
                "status": "success",
                "data": announceInput

            })
        }
    }
}

export default new AnnouncementController()