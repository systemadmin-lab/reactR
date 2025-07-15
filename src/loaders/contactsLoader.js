import { getContact, getContacts } from "../contact";

export async function getContactLoader() {
  const contacts = await getContacts();
  return { contacts };
}
export async function getContactsLoader({params}) {
  const contacts = await getContact(params.contactId);
  return { contacts };
}