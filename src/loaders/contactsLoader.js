import { getContacts } from "../contact";

export async function getContactLoader() {
  const contacts = await getContacts();
  return { contacts };
}