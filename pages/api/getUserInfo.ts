import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse){

  const data = await fetch("https://randomuser.me/api/?results=100");

  let out = await JSON.parse(data);
  
  res.json(out.results);
}

