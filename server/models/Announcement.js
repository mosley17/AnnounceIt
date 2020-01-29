const announcements= [];
class Announce {
    constructor(){
        this.createAnnounce=(body)=>{
           const announceDetails= {
            "id": body.id,
            "owner": body.owner,
            "status": body.status,
            "text": body.text,
            "start_date":body.start_date,
            "end_date": body.end_date
            }
            announcements.push(announceDetails);
            return announceDetails;
        }

    }
}

export default new Announce();