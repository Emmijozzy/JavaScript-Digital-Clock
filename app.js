  // definition of DOM variable
  const year = document.getElementById("year");
  const month = document.getElementById("month");
  const day = document.getElementById("day");
  const dat = document.getElementById("date");
  const hr = document.getElementById("hr");
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");
  const milisec = document.querySelector('#milisec');
  var pe = document.querySelector('#pe');
// constructor function
function  DateTime(){
  let date =new Date();
  var _day =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var _month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  this.year = date.getFullYear();
  this.month = date.getMonth();
  this.day = date.getDay();
  this.date = date.getDate();
  this.hr = date.getHours();
  this.min = date.getMinutes();
  this.sec = date.getSeconds();
  this.milisec =date.getMilliseconds();
  this.desplayDate = function(){
    year.innerHTML = this.year;
    month.innerHTML = _month[this.month];
    day.innerHTML = _day[this.day];
    dat.innerHTML = this.date;
    let hour = this.hr % 12;
    hr.innerHTML = hour < 10 ? "0" + hour : hour;
    min.innerHTML = this.min < 10 ? "0" + this.min : this.min;
    sec.innerHTML = this.sec < 10 ? "0" + this.sec : this.sec;
    if(this.milisec < 100){
      milisec.innerHTML = "0" + this.milisec;
    }
     else if(this.milisec < 10){
       milisec.innerHTML = "00" + this.milisec;
     }
    else{
      milisec.innerHTML = this.milisec;
    }
    var ampm = this.hr >= 12 ? 'pm' : 'am';
    pe.innerHTML = ampm;
    // if(this.hour > 12){
    //   pe.innerHTML = "PM";
    // }
  };
}
//instantiation of object constructor

function desplayDate(){
  let today = new DateTime();
  today.desplayDate();
}

  window.setInterval(desplayDate, 1);


