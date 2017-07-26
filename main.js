// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDLeJyPR82bljBWyDUYYnPdQGQ8zvhmRl0",
    authDomain: "train-firebase-hw.firebaseapp.com",
    databaseURL: "https://train-firebase-hw.firebaseio.com",
    projectId: "train-firebase-hw",
    storageBucket: "train-firebase-hw.appspot.com",
    messagingSenderId: "385865855783"
  };
  firebase.initializeApp(config);

// Get a reference to the database service

var database = firebase.database();



// var number = "";

var name = "";

var destination = "";

var frequency = "";

var nextArrival = "";

var min = "";

// var min = "";

// var hour = "";

  //var frequencyDisplay = "";

 // var minutesAwayDisplay = "";

// var frequencyHour = "";

// var frequencyMinutes = "";

// var hourCount = "";

// var hourMinutesAway = "";

// var hourMinutes = "";

// var hourCountMin = "";



function showTime() {

    var thetime = moment().format('MMMM Do YYYY, h:mm:ss a');

    $("#timeFrequency").html(thetime);

}

setInterval(showTime, 1000);

$("#addTrain").on("click", function() {

    event.preventDefault();

     // number = parseFloat($("#trainNumber").val());

    name = $("#trainName").val();

    destination = $("#destination").val();

     // min = parseInt($("#firstTrain").val());

    frequency = parseInt($("#frequency").val());

    min = moment().minute();

          console.log(min);



    minutesAway = (frequency - (min % frequency));

    console.log(minutesAway);

    hour = moment().hour();

    nextArrival = moment().add(minutesAway, 'minutes').format("h:mm a");


    
// Creates local "temporary" object for holding employee data

  // var newTrn = {

  //   name: name,

  //   destination: destination,

  //   time: time,

  //   frequency: frequency, 

  //   min: min,

  // };

    // Logs everything to console

  // console.log(newTrn.name);

  // console.log(newTrn.destination);

  // console.log(newTrn.frequency);

  // console.log(newTrn.nextArrival);

  // console.log(newTrn.minutesAway);

  // Alert

  alert("New Train Schedule Added");
  
  	// minutesAway = (frequency - (min % frequency));

  	// console.log(minutesAway);

   //  hour = moment().hour();

   //  nextArrival = moment().add(minutesAway, 'minutes').format("h:mm a");

    database.ref().push({

        Name: name,

        Destination: destination,

        Frequency: frequency,

        NextArrival: nextArrival,

        MinutesAway: minutesAway,

    });

    

    	$("#trainName").val("");

        $("#destination").val("");

        $("trainTime").val("");

        $("#frequency").val("");

    });	

      var trainRef = database.ref();


      trainRef.on("child_added", function(childSnapshot) { 

      name = childSnapshot.val().trainName;

      destination = childSnapshot.val().trainDestination;

      frequency = childSnapshot.val().trainFrequency;

      

    updateDisplay(name, destination, frequency, nextArrival, minutesAway);

    // Add each train's data into the table

  // $("#tableTrain > tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" +  frequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td><td>" + "</td></tr>"); 


    }, function(errorObject) {

    console.log("Errors handled: " + errorObject.code);

});

  


     function updateDisplay(name, destination, frequency, nextArrival, minutesAway) {

    var One = $("<td class='trainrow'>" + name + "</td>");

    var two = $("<td class='trainrow'>" + destination + "</td>");

    var three = $("<td class='trainrow'>" + frequency + "</td>");

    var four = $("<td class='trainrow'>" + nextArrival + "</td>");

    var five = $("<td class='trainrow'>" + minutesAway + "</td>");



    novoTableRow.append(one);

    novoTableRow.append(two);

    novoTableRow.append(three);

    novoTableRow.append(four);

    novoTableRow.append(five);

    $("#tablebody").append(novoTableRow);

 }

// // database.ref().on('child_added', function(childSnapshot) {



function reloadPage() {

    location.reload();

}



setInterval(reloadPage, 120000);
