import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const client = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === "GET") {
      //Read
      res.json({ok: true});
    }
    if (req.method === "POST") {
      //Create
      res.json({ok: true});
    }
    if (req.method === "PUT") {
      //Update
      res.json({ ok: true });
    }
    if (req.method === "DELETE") {
      //Delete
      res.json({ ok: true });
    }
  }