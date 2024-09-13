import { ArrowRight } from "lucide-react";
import supabase from "../utils/supabase";

const LandigPage = () => {
  const handleStartWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          prompt: "select_account", // Fuerza la pantalla de selección de cuenta
        },
      },
    });
    if (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
    if (data) {
      console.log("Usuario:", data);
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Track Your Fitness Journey</h1>
      <p className="text-secondary mb-8 max-w-md">
        ProgressApp helps you monitor and celebrate your gym achievements. Log
        workouts, set goals, and watch your progress soar!
      </p>
      <div className="space-y-4 w-full max-w-xs">
        <button
          onClick={handleStartWithGoogle}
          className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primaryHover transition duration-300 ease-in-out flex items-center justify-center">
          Get Started with Google
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </main>
  );
};
export default LandigPage;
