import { Script } from "@/components/script/script";
import { Steps } from "@/components/steps/steps";
import "./content.scss";

export function Content() {
  return (
    <div className="content">
      <Steps />
      <Script />
    </div>
  );
}
