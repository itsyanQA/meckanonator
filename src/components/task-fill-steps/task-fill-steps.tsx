export function TaskFillSteps() {
  return (
    <ol>
      <li>
        Enter{" "}
        <a href="https://www.meckano.co.il/" target="_blank">
          meckano{" "}
        </a>{" "}
        and log-in
      </li>
      <li>Go to: "ראשי - דוח חודשי"</li>
      <li>Open the devtools - console</li>
      <li>Copy the script and click enter</li>
      <li>Type in the console: const shifts = getMonthlyReportTimes()</li>
      <li>Go to: "משימות - דוח משימות"</li>
      <li>Type in the console: setTasksMonthlyReport(shifts, "enter the task name")</li>
      <li>Watch the magic happen</li>
    </ol>
  );
}
