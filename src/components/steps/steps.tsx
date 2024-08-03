import { Step } from "@/lib/types";
import { useState } from "react";
import { AutoFillSteps } from "../auto-fill-steps/auto-fill-steps";
import "./steps.scss";
import { TaskFillSteps } from "../task-fill-steps/task-fill-steps";

export function Steps() {
  const [stepType, setStepsType] = useState<Step>("auto-fill");

  const views: Record<Step, JSX.Element | null> = {
    "auto-fill": <AutoFillSteps />,
    "task-fill": <TaskFillSteps />,
  };

  return (
    <div className="steps">
      <div className="steps__choose-type">
        <h2>Meckano automation type</h2>
        <div className="steps__types">
          <button
            className={`steps__button ${stepType === "auto-fill" ? "steps__button--active" : ""}`}
            onClick={() => setStepsType("auto-fill")}
          >
            Fill 9 to 6 in regular hour tab
          </button>
          <button
            className={`steps__button ${stepType === "task-fill" ? "steps__button--active" : ""}`}
            onClick={() => setStepsType("task-fill")}
          >
            Copy regular tab to task tab
          </button>
        </div>
      </div>
      <div key={stepType} className="steps__steps-wrapper">
        {views[stepType]}
      </div>
    </div>
  );
}
