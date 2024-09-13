import { Profile } from "../../types/ProfileType";
import supabase from "../supabase";
import isAuthenticated from "./isAuthenticated";

interface fetchProfileInfoProps {
    setAuthenticated: (value: boolean) => void;
    setProfile: (value: Profile | null) => void;
    setIsLoading: (value: boolean) => void;
    }

export default async function fetchProfileInfo( {setAuthenticated, setProfile, setIsLoading} : fetchProfileInfoProps) {
  try {
    const datos = await isAuthenticated();

    if (datos === false) {
      setAuthenticated(false);
      return;
    }
    if (datos.isAuthenticated) {
      setAuthenticated(true);
    }
    if (datos.info) {
      const { data: myProfile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("email", datos.info.email);
      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      setProfile({
        email: datos.info.user_metadata.email,
        name: datos.info.user_metadata.full_name,
        photoURL: datos.info.user_metadata.avatar_url,
        ...myProfile[0],
      });
    } else {
      setAuthenticated(false);
      setProfile(null);
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  } finally {
    setIsLoading(false);
  }
}
