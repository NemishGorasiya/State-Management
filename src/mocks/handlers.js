import { rest } from "msw";
import { mockData } from "../constants";

export const handlers = [
	rest.get("https://dummyjson.com/products?limit=10", (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockData));
	}),
];
