const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    
    const numbers = data.filter(item => /^\d+$/.test(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highestAlphabet = alphabets.length > 0 ? [alphabets.reduce((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }) > 0 ? a : b)] : [];

    const response = {
        is_success: true,
        user_id: "Aryan_Arora_10022003", // Replace with actual user ID
        email: "aa3649@srmist.edu.in", // Replace with actual email
        roll_number: "RA2111003030291", // Replace with actual roll number
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    };

    res.json(response);
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
