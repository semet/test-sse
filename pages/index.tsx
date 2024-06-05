import { EventSourcePolyfill } from "event-source-polyfill";
import React, { useEffect, useState } from "react";

const Home = () => {
   useEffect(() => {
      const eventSource = new EventSourcePolyfill("/api/sse");

      eventSource.onmessage = (event) => {
         console.log("New message:", event.data);
      };

      eventSource.onerror = (error) => {
         console.error("EventSource failed:", error);
         eventSource.close();
      };

      return () => {
         eventSource.close();
      };
   }, []);

   return <div>Home</div>;
};

export default Home;
