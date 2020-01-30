const announcements = [{
    "id": 1,
    "owner": "moise",
    "status": "active"

}];

export const viewAllAnnouncements = (req, res) => {
    return res.status(200).json({
        "status": "success",
        "data": announcements

    });
};
export const viewSpecificAnnounce = (req, res) => {
    const announceSpec = announcements.find(announce => announce.id === parseInt(req.params.id));
    if (!announceSpec) return res.status(404).send("the given id was not found");
    res.status(200).json({
        "status": "success",
        "data": announceSpec
    });
};
export const updateAnnouncement = (req, res) => {
    const announceSpec = announcements.find(announce => announce.id === parseInt(req.params.id));
    if (!announceSpec) return res.status(404).send("the given id was not found");

<<<<<<< HEAD
    announceSpec.id = req.body.id;
    announceSpec.owner = req.body.owner,
        announceSpec.status = req.body.status,
        announceSpec.text = req.body.text,
        announceSpec.start_date = body.start_date,
        announceSpec.end_date = req.body.end_date
    res.status(200).json({
        "status": "success",
        "data": announceSpec
    })
}
export const deleteAnnouncement= (req,res) =>{
    const announceSpec = announcements.find(announce => announce.id === parseInt(req.params.id));
    if (!announceSpec) return res.status(404).send("the given id was not found");
||||||| merged common ancestors
=======
    announceSpec.id = req.body.id;
    announceSpec.owner = req.body.owner,
        announceSpec.status = req.body.status,
        announceSpec.text = req.body.text,
        announceSpec.start_date = body.start_date,
        announceSpec.end_date = req.body.end_date
    res.status(200).json({
        "status": "success",
        "data": announceSpec
    })
}
>>>>>>> ft-upadate-announcement-170966918

<<<<<<< HEAD
||||||| merged common ancestors
// export default {viewAllAnnouncements, viewSpecificAnnounce};
=======
<<<<<<< HEAD
    const trackIndex= announcements.indexOf(announceSpec);
    announcements.splice(trackIndex,1);
    res.status(200).json({
        "status": "success",
        "data": announceSpec
    })
}
||||||| merged common ancestors
export default viewAllAnnouncements;
=======
>>>>>>> ft-upadate-announcement-170966918
>>>>>>> develop
