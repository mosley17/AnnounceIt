//  class Announcement{
//        constructor(topic, tittle, subject, author) {
//           this.topic = topic;
//           this.tittle = tittle;
//           this.subject = subject;
//           this.author = author;
    
// }
// }
// //UI constructor
// class UI {
// //display result to the table
//     makeAnnouncement(announce) {
//     const result = document.querySelector("#display-result");
//     const row = document.createElement('tr');
//     row.innerHTML = `
//    <td>${announce.topic}</td>
//    <td>${announce.tittle}</td>
//    <td>${announce.subject}</td>
//    <td>${announce.author}</td>
// `;
//     result.appendChild(row);
// }

// clearField(){
//      document.querySelector("#topic").value="";
//      document.querySelector("#tittle").value="";
//      document.querySelector("#subject").value="";
//      document.querySelector("#author").value="";
// }
// }

// document.querySelector("#form").addEventListener('submit', function (e) {
//     const topic = document.querySelector("#topic").value;
//     const tittle = document.querySelector("#tittle").value;
//     const subject = document.querySelector("#subject").value;
//     const author = document.querySelector("#author").value;

//  // instantiate announcement
//     const announce = new Announcement(topic, tittle, subject, author);
// // instantiate UI
//     const ui = new UI();

// // add anncouncements to table
//     ui.makeAnnouncement(announce);



//     e.preventDefault();
// });