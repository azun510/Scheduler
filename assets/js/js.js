$(function () {
  var todaysDate = moment().format("LL");
  var inputs = [];

  //This will add the current date
  $("#currentDay").append(todaysDate);

  //This will allow the save button to save any info description into the local storage
  $(".saveBtn").on("click", function () {
    var time = $(this);

    // JSON Format
    var eventEntry = {
      //variables here but need to know how
    };

    //Pushes the inputs into the empty array above in the global variables section
    inputs.push(eventEntry);

    //Using JSON String to to convert these objects into a string for easy storing and access

    localStorage.setItem("inputs", JSON.stringify(inputs));
  });
  //This loads all events
  var loadEvents = function () {
    //JSON Parse to convert the string back into an object allowing the information to be retrievable
    var localEvents = JSON.parse(localStorage.getItem("inputs"));
    if (localEvents !== null) {
      inputs = localEvents;

      for (let i = 0; i < inputs.length; i++) {
        //find a way to access the stored info not sure yet
      }
    }
  };

  loadEvents();
});

// first attempt ignore for now
// n =  new Date();
// y = n.getFullYear();
// m = n.getMonth() + 1;
// d = n.getDate();
// document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;
