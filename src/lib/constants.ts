export const SCRIPT_CONTENT = `function getMonthlyReportTimes() {
  const checkInTextElements = document.querySelectorAll(".checkinDisplayMark + .checkin");
  const checkOutTextElements = document.querySelectorAll(".checkoutDisplayMark + .checkout");
  const times = [];

  for (let i = 0; i < checkInTextElements?.length; i++) {
    const checkIn = checkInTextElements[i].textContent?.trim() ? checkInTextElements[i].textContent : null;
    const checkOut = checkOutTextElements[i].textContent?.trim() ? checkOutTextElements[i].textContent : null;
    times.push({ checkIn, checkOut });
  }

  return times;
}

async function setMonthlyReportTimes() {
  const insertRows = document.querySelectorAll(".insert-row");

  for (let i = 0; i < insertRows.length; i++) {
    const isWeekend = ["ו", "ש"].includes(document.querySelectorAll(".employee-information > p")[i].textContent.split(" ")[1]);

    if (!isWeekend) {
      insertRows[i].click();
      const checkInInputElements = document.querySelector(".report-manual-entry.checkin-str");
      const checkOutInputElements = document.querySelector(".report-manual-entry.checkout-str");
      checkInInputElements.value = "09:00";
      checkOutInputElements.value = "18:00";
      confirmRow(i);
      await sleep(250);
    }
  }
}

function setTasksMonthlyReport(shifts, taskName) {
  if (!shifts) {
    throw new Error("shifts are needed for auto-filling");
  }

  if (!taskName) {
    throw new Error("task name is needed for selecting a task");
  }

  const insertRows = document.querySelectorAll(".insert-row");
  const checkInInputElements = document.querySelectorAll(".report-entry.checkin");
  const checkOutInputElements = document.querySelectorAll(".report-entry.checkout");

  shifts.forEach((shift, index) => {
    insertRows[index].click();
    if (shift.checkIn && shift.checkOut) {
      checkInInputElements[index].value = shift.checkIn;
      checkOutInputElements[index].value = shift.checkOut;
      chooseTask(taskName, index);
      confirmRow(index);
    }
  });
}

// Helper functions
function chooseTask(taskName, index) {
  if (!taskName) {
    throw new Error("Task name is missing");
  }

  const task = [...document.querySelectorAll('select[data-select2-id="4"] option')].find((element) =>
    element.textContent.includes(taskName)
  );

  if (!task) {
    throw new Error("Task not found");
  }

  document.querySelectorAll("select.row-task")[index].value = task.value;
  document.querySelectorAll(".select2-selection__rendered")[index].textContent = task.textContent;
}

function confirmRow(index) {
  document.querySelectorAll("button.inline-confirm")[index].click();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

`;
