const http = require("http");
const totalRequests = 10;

async function makeRequest(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      res.on("data", () => {});
      res.on("end", () => resolve());
    });
  });
}

(async () => {
  // Blocking requests
  console.log("Benchmarking blocking requests...");
  const blockingStartTime = Date.now();
  await Promise.all(
    Array(totalRequests)
      .fill(null)
      .map(() => makeRequest("http://localhost:3000/blocking"))
  );
  const blockingEndTime = Date.now();
  console.log(
    `Total time taken for ${totalRequests} blocking requests: ${
      (blockingEndTime - blockingStartTime) / 1000
    } s`
  );

  // Non-blocking requests
  console.log("Benchmarking non-blocking requests...");
  const nonBlockingStartTime = Date.now();
  await Promise.all(
    Array(totalRequests)
      .fill(null)
      .map(() => makeRequest("http://localhost:3000/non-blocking"))
  );
  const nonBlockingEndTime = Date.now();
  console.log(
    `Total time taken for ${totalRequests} non-blocking requests: ${
      (nonBlockingEndTime - nonBlockingStartTime) / 1000
    } s`
  );
})();
