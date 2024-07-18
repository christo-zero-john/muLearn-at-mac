import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Import the functions you need from the SDKs you need

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsryezIBC1fTmFpInh5WsnJnYNlNU3EZU",
  authDomain: "mulearn-mac.firebaseapp.com",
  projectId: "mulearn-mac",
  storageBucket: "mulearn-mac.appspot.com",
  messagingSenderId: "466509123174",
  appId: "1:466509123174:web:ec494859c06616996c27a7",
};

const appSettings = {
  databaseURL: "https://mulearn-mac-default-rtdb.firebaseio.com/",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const eventsData = ref(database, "eventsdata");

export function menu(x) {
  switch (x) {
    case 1: {
      listEvents();
      break;
    }
    case 2: {
      createEvent();
      break;
    }
    case 3: {
      deleteEvent();
      break;
    }
    case 4: {
      updateEvent();
      break;
    }
    default:
      console.log("Invalid Menu option");
  }
}

let getHashtag = document.getElementById("hashtag");
let getTitle = document.getElementById("title");
let getImageURL = document.getElementById("imageURL");
let getDescription = document.getElementById("description");
let getType = document.getElementById("type");
let getstartDate = document.getElementById("start");
let getEndDate = document.getElementById("end");
let getMacScore = document.getElementById("macScore");
let getKarmaPoints = document.getElementById("karmaPoints");
let getSource = document.getElementById("source");
let addEventBtn = document.getElementById("addEvent");

function listEvents() {
  console.log("listEvents");
  console.log(
    getHashtag.placeholder,
    getTitle.placeholder,
    getImageURL.placeholder,
    getDescription.placeholder,
    getType.value,
    getstartDate.placeholder,
    getEndDate.placeholder,
    getMacScore.placeholder,
    getKarmaPoints.placeholder,
    getSource.placeholder
  );
}

addEventBtn.addEventListener("click", function () {
  console.log("createEvents");
  let hashtag = getHashtag.value;
  let title = getTitle.value;
  let imageURL = getImageURL.value;
  let description = getDescription.value;
  let eventType = getType.value;
  let eventStartDate = getstartDate.value;
  let eventEndDate = getEndDate.value;
  let macScore = getMacScore.value;
  let karmaPoints = getKarmaPoints.value;
  let source = getSource.value;
  console.log(
    hashtag,
    title,
    imageURL,
    description,
    eventType,
    eventStartDate,
    eventEndDate,
    macScore,
    karmaPoints,
    source
  );

  let eventItem = {
    hashtag: hashtag,
    title: title,
    imageURL: imageURL,
    description: description,
    eventType: eventType,
    eventStartDate: eventStartDate,
    eventEndDate: getEndDate,
    macScore: macScore,
    karmaPoints: karmaPoints,
    source: source,
  };
  push(eventsData, eventItem);
});

function deleteEvent() {
  console.log("deleteEvents");
}

function updateEvent() {
  console.log("updateEvents");
}
