import dayjs from 'dayjs'
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import("./colorMode")
import {CreateTimezoneList} from "./createTimezoneList";

// Activates the utc and timezone plugins for dayjs
dayjs.extend(utc)
dayjs.extend(timezone)

const showButton = document.getElementById("change-timezone");
const timezoneDialog = document.getElementById("timezone-dialog");
const create = new CreateTimezoneList(timezoneDialog);

let timezoneName;

/**
 * Check and refresh the current timezone.
 * */
function checkTimeZone() {
  const resolvedOptions = Intl.DateTimeFormat().resolvedOptions();

  // If the timezoneName is not defined, the timezone is taken from the user
  if (timezoneName == null || timezoneName === "") timezoneName = resolvedOptions.timeZone;

  // Define the current date based on the time zone
  const localDate = dayjs();
  const dateInTimeZone = localDate.tz(timezoneName);

  // Format the time and date
  const time = dateInTimeZone.format("HH:mm:ss");
  const date = dateInTimeZone.format("dddd, DD.MMMM.YYYY");

  // Insert the variables
  document.getElementById("timezone").innerText = timezoneName;
  document.getElementById("current-time").innerText = time;
  document.getElementById("current-date").innerText = date;
}

function setTimezoneName(name) {
  timezoneName = name;
}

// Create and run the dialog window
showButton.addEventListener("click", function () {
  create.run();
})

// updates the time every 1 second
setInterval(checkTimeZone, 1000);

window.checkTimeZone = checkTimeZone;
window.setTimezoneName = setTimezoneName;
