// app.js

const express = require('express');
const app = express();
const port = 3000;

// Simulate a memory-intensive operation
function performMemoryIntensiveOperation() {
  const iterations = 1000000000;

  let result = 0;
  for (let i = 0; i < iterations; i++) {
    result += Math.random();
  }

  return result;
}

// Define a route for the memory-intensive endpoint
app.get('/', (req, res) => {
  const result = performMemoryIntensiveOperation();
  res.send(`Fast API: ${result}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
