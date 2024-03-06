import axios from "axios";
import { TOKEN } from "./token";

export const baseUrl = "http://api-staging.domingoteamrealty.com";
export const fetchApi = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
