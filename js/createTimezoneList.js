export class CreateTimezoneList {
  constructor(timezoneDialog) {
    this.timezoneDialog = timezoneDialog;
    this.confirmButton = document.querySelector("#confirmTz");
    this.cancelButton = document.getElementById("cancel");
  }

  /**
   * This method creates a list of the time zones.
   */
  #createTimezoneList() {
    const timezones = Intl.supportedValuesOf('timeZone');

    const timezoneContainer = document.getElementById('timezone-container');
    timezones.forEach(timezone => {
      const option = document.createElement('option');
      option.value = timezone;
      option.text = timezone;
      timezoneContainer.add(option);
    });
  }

  /**
   * Method for executing the time zone list and displaying the dialog.
   * */
  run() {
    this.#createTimezoneList();
    this.timezoneDialog.showModal();

    // Event-Listener for the cancel button
    this.cancelButton.addEventListener("click", function (event) {
      event.preventDefault();
      this.timezoneDialog.close();
    }.bind(this))

    // Event-Listener for the confirm button
    this.confirmButton.addEventListener("click", function (event) {
      const selectElement = document.querySelector("select");

      event.preventDefault();
      setTimezoneName(selectElement.value);
      checkTimeZone();
      this.timezoneDialog.close();
    }.bind(this))
  }
}

const createTimezoneList = new CreateTimezoneList();

window.createTimezoneList = createTimezoneList.run;
