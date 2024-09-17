import supabase from "../supabase";

export default async function fetchProfileInfo(userId: string | undefined) {
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userId);
    
  if (profile === undefined || profile === null ) return null;
  return profile.length > 0 ? profile[0] : null;
}
