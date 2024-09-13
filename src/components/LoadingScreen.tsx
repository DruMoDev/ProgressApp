import { PulseLoader } from "react-spinners";

export function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <PulseLoader color="#1E90FF" size={15} />
    </div>
  );
}
