import { createContact } from "../contact";

export async function createContactAction(){
    const contact =await createContact();
    return{contact}
}