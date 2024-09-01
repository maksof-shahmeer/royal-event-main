// @ts-nocheck
import Fastify from "fastify";
import fastifyStatic from '@fastify/static'
import compression from '@fastify/compress';
import * as path from 'path';
import cors from '@fastify/cors';
import { sendEmail } from './mail'
const FRONTENDFOLDER = path.join(process.cwd(), "public");
const app = Fastify({
  logger: false,
});

app.register(compression);
app.register(fastifyStatic, { root: FRONTENDFOLDER });
app.register(cors, {
  credentials: false,
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE"],
});
app.get("/api/health", (req, res) => res.status(200).send({ message: "OK" }));
app.post("/api/send-email", async (req, res) => {
  const { from, ...rest } = req.body as any;
  const response = await sendEmail(from, JSON.stringify(rest));
  res.status(200).send({ message: "mail successfully send.", data: response });
});
app.listen({ port: 80 }, (err) => {
  console.log(err)
})

export default app;