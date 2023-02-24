import { IInputs } from "@components/FooterForm";
import axios from "axios";
export const API_URL = "http://localhost:3001";

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export const api = {
  sendFormData(fields: IInputs) {
    return instance.post("upload", fields);
  },
};
