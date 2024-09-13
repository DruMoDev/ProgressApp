export type Profile = {
  weight?: number;
  height?: number;
  target_weight?: number;
  age?: number;
  gender?: "male" | "female" | "other" | "";
  activity_level?: "sedentary" | "light" | "moderate" | "very" | "extra" | "";
  fitness_goal?: "lose" | "maintain" | "gain" | "muscle" | "endurance" | "";
  email?: string;
  name?: string;
  photoURL?: string;
};
