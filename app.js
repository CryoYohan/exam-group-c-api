const express = require('express');
const app = express();

const route = require('./routes/route');

// Use the route
app.use('/route', route);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
