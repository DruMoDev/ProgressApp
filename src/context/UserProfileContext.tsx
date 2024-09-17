import { createContext, ReactNode } from "react";
import { Profile } from "../types/ProfileType";
import useUser from "../hooks/useUser";
import supabase from "../utils/supabase";
import { useMutation } from "@tanstack/react-query";

interface UserProfileContextType {
  createProfile: (profileData: Profile) => void;
}

export const UserProfileContext = createContext<
  UserProfileContextType | undefined
>(undefined);

export const UserProfileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { user } = useUser();

  const { mutate: createProfile } = useMutation({
    mutationFn: async (profileData: Profile) => {
      const newProfile = {
        email: user?.email,
        name: user?.user_metadata.name,
        photoURL: user?.user_metadata.photoURL,
        ...profileData,
      };
      const { error } = await supabase.from("profiles").insert([newProfile]);
      if (error) {
        console.error("Error creating profile:", error);
        return;
      } else {
        console.log("Profile created successfully:");
      }
    },
  });

  return (
    <UserProfileContext.Provider
      value={{
        createProfile,
      }}>
      {children}
    </UserProfileContext.Provider>
  );
};
