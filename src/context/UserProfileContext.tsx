import { createContext, ReactNode } from "react";
import supabase from "../utils/supabase";
import { useMutation } from "@tanstack/react-query";
import { Tables } from "../types/supabase";

interface UserProfileContextType {
  createProfile: (profileData: Tables<"profiles">) => void;
}

export const UserProfileContext = createContext<
  UserProfileContextType | undefined
>(undefined);

export const UserProfileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {

  const { mutate: createProfile } = useMutation({
    mutationFn: async (profileData: Tables<"profiles">) => {
      const newProfile = {
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
