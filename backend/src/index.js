require('dotenv').config({ path: '../.env' });

const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const authroutes = require('./routes/auth.routes')
const testroutes = require('./routes/tests.routes')

const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(helmet({ referrerPolicy: { policy: 'no-referrer' } }));

app.use('/', authroutes);
app.use('/test', testroutes)

const DB_URI = process.env.MONGO_URI;

console.log('Loaded MONGO_URI:', DB_URI);

if (!DB_URI) {
    console.error('MONGO_URI is missing');
    process.exit(1);
}

const startServer = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('DB connected');

        app.listen(5000, () => {
            console.log('Server running on port 5000');
        });
    } catch (err) {
        console.error('DB connection failed:', err.message);
        process.exit(1);
    }
};

startServer();
