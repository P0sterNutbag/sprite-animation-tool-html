const server = Bun.serve({
    port: 3001,
    fetch(req) {
      return new Response(
        Bun.file(new URL(req.url).pathname.substring(1) || "index.html"),
        {
          headers: {
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp",
            "Cross-Origin-Resource-Policy": "cross-origin",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    },
  });
  
  console.log(`Server running at http://localhost:${server.port}`);
  