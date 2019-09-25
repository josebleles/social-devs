const express = require('express');

const app = express();

app.get("/", async (rq, rs) => {
    rs.json({});
});

app.listen(3333);
  