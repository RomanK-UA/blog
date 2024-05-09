const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.get('/', (req, res) => {
    res.send("Hello");
})
app.post('/post', (req, res) => {
    res.send({text: "GOT YOU!"});
})

app.listen(3000, () => {
    console.log("Server working")
});
