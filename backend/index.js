import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

let port = process.env.PORT || 6000;
let app = express();


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
