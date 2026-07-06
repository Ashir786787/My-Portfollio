import { post } from "./api.js";

export const submitContact = (data) => post("/contact", data);
