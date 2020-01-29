const announcements=[];

const viewAllAnnouncements= (req,res) =>{
    return res.status(200).json({
        "status": "success",
        "data": announcements

    });
};


export default viewAllAnnouncements;