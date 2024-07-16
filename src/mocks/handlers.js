import { http, HttpResponse } from "msw";
import { mockData } from "../constants";

export const handlers = [
  http.get("https://dummyjson.com/products?limit=10", () => {
    return HttpResponse(mockData, { status: 200 });
  }),
];
