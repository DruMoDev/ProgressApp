import {
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import supabase from "../utils/supabase";
import { Profile } from "../types/ProfileType";
import fetchProfileInfo from "../utils/functions/fetchProfileInfo";

interface UserProfileContextType {
  authenticated: boolean;
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
  updateProfile: (updates: Partial<Profile>) => void;
  logout: () => void;
  isLoading: boolean;
  createProfile: (profileData: Profile) => void;
}

export const UserProfileContext = createContext<
  UserProfileContextType | undefined
>(undefined);

export const UserProfileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProfileInfo({
      setAuthenticated,
      setProfile,
      setIsLoading,
    });
  }, []);
  console.log(profile);

  const createProfile = async (profileData: Profile) => {
    const newProfile = {
      ...profileData,
      ...profile,
    };
    const { error } = await supabase.from("profiles").insert([newProfile]);
    if (error) {
      console.error("Error creating profile:", error);
      return;
    } else {
      console.log("Profile created successfully:");
      setProfile((prevProfile) => {
        if (prevProfile === null) return null;
        return { ...prevProfile, ...profileData };
      });
      window.location.reload();
    }
  };

  const updateProfile = (updates: Partial<Profile>) => {
    setProfile((prevProfile) => {
      if (prevProfile === null) return null;
      return { ...prevProfile, ...updates };
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setProfile(null);
    setAuthenticated(false);
    window.location.reload();
  };

  return (
    <UserProfileContext.Provider
      value={{
        authenticated,
        profile,
        setProfile,
        updateProfile,
        logout,
        isLoading,
        createProfile,
      }}>
      {children}
    </UserProfileContext.Provider>
  );
};
