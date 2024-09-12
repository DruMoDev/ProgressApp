import supabase from "../supabase";

const getUser = async () => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    console.error("Error getting current user", error);
  }
};

export default getUser;
