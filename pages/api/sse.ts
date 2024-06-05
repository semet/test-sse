import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<any>
) {
   const sendHeartbeat = setInterval(() => {
      res.write(":heartbeat\n\n");
   }, 5000); // Send a heartbeat

   res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
      "Content-Encoding": "none",
   });
   res.flushHeaders();
   setTimeout(() => {
      res.write("data: Processing2...");
      res.flushHeaders();
   }, 1000);
}
