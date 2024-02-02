/* eslint-disable no-unused-vars */
import supabase from "./supabase";

export async function getCities() {
    let { data, error } = await supabase.from("cities").select("*");
    // let { data, error } = await supabase.from("citiess").select("*");

    if (error) {
        console.error(error);
        throw new Error(`Cities could not be loaded`);
        // console.log(data);
    }
    return data;
}

export async function getCity(id) {
    const { data, error } = await supabase
        .from("cities")
        // .from("citiess")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error(error);
        throw new Error("City not found");
    }

    return data;
}

export async function createCity(newCity, id) {
    const { data, error } = await supabase
        .from("cities")
        // .from("citiess")
        // .insert([{ some_column: "someValue", other_column: "otherValue" }])
        .insert([{ ...newCity }])
        .select();

    if (error) {
        console.error(error);
        throw new Error("City could not be Created");
    }
    return data;
}

export async function updateCity(obj, id) {
    const { data, error } = await supabase
        .from("cities")
        // .from("citiess")
        .update(obj)
        .eq("id", id)
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error("City could not be updated");
    }
    return data;
}

export async function deleteCity(id) {
    const { data, error } = await supabase.from("cities").delete().eq("id", id);
    // const { data, error } = await supabase
    //     .from("citiess")
    //     .delete()
    //     .eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("City could not be deleted");
    }

    return data;
}
