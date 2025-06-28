"use server";

export async function PostHack(
  prevState: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  const title = formData.get("title")?.toString().trim() || "";
  const image = formData.get("image")?.toString().trim() || "";
  const description = formData.get("description")?.toString().trim() || "";
  const steps = formData.getAll("steps").map((step) => step.toString().trim());
  const tutorialLink = formData.get("tutorialLink")?.toString().trim() || "";
//   if (!title || !description || !steps) {
//     return { message: "Please fill all required fields." };
//   }

  console.log({
    title,
    image,
    description,
    steps,
    tutorialLink,
  });

  return { message: "Hack posted successfully!" };
}
