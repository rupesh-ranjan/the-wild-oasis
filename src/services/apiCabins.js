import supabase from "./supabase";

async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

async function createCabin(newCabin) {
  const { error } = await supabase.from("cabins").insert([newCabin]);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }
}

async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  // return null;
}

export { getCabins, deleteCabin, createCabin };
