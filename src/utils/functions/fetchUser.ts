import supabase from "../supabase";

export default async function fetchUser() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    console.error("Error getting current user", error);
    return null;
  }
}
