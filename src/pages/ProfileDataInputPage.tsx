import { useState } from "react";
import { Save } from "lucide-react";
import { Profile } from "../types/ProfileType";
import useUserProfile from "../hooks/useUserProfile";
import { Navigate } from "react-router-dom";
import { LoadingScreen } from "../components/LoadingScreen";
import useProfile from "../hooks/useProfile";

export default function ProfileDataInputPage() {
  const { createProfile } = useUserProfile();
  const {profile, isLoading} = useProfile()
  const [profileData, setProfileData] = useState<Profile>({
    weight: 0,
    height: 0,
    target_weight: 0,
    age: new Date().toISOString(),
    gender: "",
    activity_level: "",
    fitness_goal: "",
  });

  if (isLoading) return <LoadingScreen />;
  if (profile) return <Navigate to="/dashboard" replace />;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const { weight, height, target_weight } = profileData;
  
    if (weight <= 0 || height <= 0 || target_weight <= 0 ) {
      alert("Please fill out all fields correctly.");
      return;
    }
    
    createProfile(profileData);
  };

  console.log(profileData.age);
  

  return (
    
      <div className="max-w-md bg-white rounded-lg shadow-md p-6 container">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Your Profile Data
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="weight" className="block text-sm font-medium mb-1">
              Current Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={profileData.weight}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-[#4B5563] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required
            />
          </div>
          <div>
            <label htmlFor="height" className="block text-sm font-medium mb-1">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              value={profileData.height}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-[#4B5563] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="target_weight"
              className="block text-sm font-medium mb-1">
              Target Weight (kg)
            </label>
            <input
              type="number"
              id="target_weight"
              name="target_weight"
              value={profileData.target_weight}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-[#4B5563] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium mb-1">
              Age
            </label>
            <input
              type="date"
              id="age"
              name="age"
              value={profileData.age}
              onChange={(e) => setProfileData({...profileData, age: e.target.value}) }
              className="w-full px-2 py-1 border border-[#4B5563] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium mb-1">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={profileData.gender}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-[#4B5563] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="activity_level"
              className="block text-sm font-medium mb-1">
              Activity Level
            </label>
            <select
              id="activity_level"
              name="activity_level"
              value={profileData.activity_level}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-[#4B5563] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required>
              <option value="">Select activity level</option>
              <option value="sedentary">Sedentary</option>
              <option value="light">Lightly Active</option>
              <option value="moderate">Moderately Active</option>
              <option value="very">Very Active</option>
              <option value="extra">Extra Active</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="fitness_goal"
              className="block text-sm font-medium mb-1">
              Fitness Goal
            </label>
            <select
              id="fitness_goal"
              name="fitness_goal"
              value={profileData.fitness_goal}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-[#4B5563] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required>
              <option value="">Select fitness goal</option>
              <option value="lose">Lose Weight</option>
              <option value="maintain">Maintain Weight</option>
              <option value="gain">Gain Weight</option>
              <option value="muscle">Build Muscle</option>
              <option value="endurance">Improve Endurance</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1E90FF] text-whit2 py-1 px-4 rounded-md font-medium hover:bg-[#187bcd] transition duration-300 ease-in-out flex items-center justify-center">
            <Save size={20} className="mr-2" />
            Save Profile Data
          </button>
        </form>
      </div>
    
  );
}
