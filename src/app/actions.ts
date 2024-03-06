"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import supabase from "./config/supabaseClient";

export async function createProduct(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const schema = z.object({
    name: z.string().min(3),
    price: z.number().nonnegative(),
    category_id: z.number(),
    user_id: z.number(),
    is_deliverable: z.boolean(),
    address_city: z.string(),
    address_postal_code: z.string().length(5),
    address_department: z.string(),
    address_region: z.string(),
    description: z.string(),
    condition: z.string(),
  });

  const parse = schema.safeParse({
    name: formData.get("name"),
    price: Number(formData.get("price")),
    category_id: Number(formData.get("category")),
    user_id: Number(formData.get("user_id")),
    is_deliverable: formData.get("is_deliverable") === "on" ? true : false,
    address_city: formData.get("address_city"),
    address_postal_code: formData.get("address_postal_code"),
    address_department: formData.get("address_department"),
    address_region: formData.get("address_region"),
    description: formData.get("description"),
    condition: formData.get("condition"),
  });

  if (!parse.success) {
    return {
      success: false,
      message:
        "Le produit n'a pas pu être ajouté, veuillez vérifier les données du formulaire.",
    };
  }

  try {
    const { data, error } = await supabase.from("products").insert(parse.data);

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }

    revalidatePath("/deposer-une-annonce");
    return { success: true, message: "Produit ajouté" };
  } catch (e) {
    return {
      success: false,
      message: `Le produit n'a pas pu être ajouté (${e.message})`,
    };
  }
}
