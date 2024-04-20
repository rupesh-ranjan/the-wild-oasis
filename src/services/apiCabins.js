import supabase, { supabaseUrl } from "./supabase";

async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

async function createEditCabin(newCabin, id) {
  console.log(id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  // https://hpagaumygroaddfhbpty.supabase.co/storage/v1/object/public/cabin-images/cabin-007.jpg
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // 1. Create cabin
  let query = supabase.from("cabins");

  // A) Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  // B) Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created/edited");
  }

  // 2. Upload image (Attach image url to cabin DB)
  if (hasImagePath) return data;
  try {
    const x = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);
    console.log(x);
  } catch (error) {
    // 3. Delete the cabin IF there was errror in uploading
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabins image could not be uploaded and cabin is not created"
    );
  }
  return data;
}

async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  // return null;
}

export { getCabins, deleteCabin, createEditCabin };
