const announcements=[];

export const viewAllAnnouncements= (req,res) =>{
    return res.status(200).json({
        "status": "success",
        "data": announcements

    });
};
export const viewSpecificAnnounce =(req,res) =>{
    const announceSpec= announcements.find(announce=announce.id=== parseInt(req.params.id));
    if(!announceSpec) return res.status(404).send("the given id was not found");
    res.status(200).json({
        "status":"success",
        "data": announceSpec
    })
}

// export default {viewAllAnnouncements, viewSpecificAnnounce};