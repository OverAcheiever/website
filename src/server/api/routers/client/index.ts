import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../../trpc";

import { getProjects } from "./get-projects";

export const client = createTRPCRouter({
  getProjects,
});
