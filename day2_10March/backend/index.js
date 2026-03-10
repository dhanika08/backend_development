import express from 'express';
const app = express();
const port =  process.env.PORT || 3000;

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            setup: "Why don't scientists trust atoms?",
            punchline: "Because they make up everything!"
        },
        {
            id: 2,
            setup: "Why did the scarecrow win an award?",
            punchline: "Because he was outstanding in his field!"
        },
        {
            id: 3,
            setup: "Why don't programmers like nature?",
            punchline: "It has too many bugs."
        },
        {
            id: 4,
            setup: "Why did the math book look sad?",
            punchline: "Because it had too many problems."
        }
    ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
