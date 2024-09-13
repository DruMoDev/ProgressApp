import { PulseLoader } from "react-spinners";

export function LoadingScreen() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center">
      <PulseLoader color="#1E90FF" size={15} />
    </main>
  );
}
