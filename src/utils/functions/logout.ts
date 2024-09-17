import supabase from "../supabase";

export default async function logout() {
  await supabase.auth.signOut();
  window.location.reload();
}
