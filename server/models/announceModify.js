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

