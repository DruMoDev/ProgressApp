import { User } from "@supabase/supabase-js";
import supabase from "../supabase";

interface AuthenticatedUser {
  isAuthenticated: boolean;
  info: User | null;
}

const isAuthenticated = async () : Promise<false | AuthenticatedUser> => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return {
      isAuthenticated: user ? true : false,
      info: user,
    };
  } catch (error) {
    console.error("Error getting current user", error);
    return false;
  }
};

export default isAuthenticated;
