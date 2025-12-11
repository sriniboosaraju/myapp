const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.json({ hello: "sritest-123testing", commit: process.env.GIT_COMMIT || 'local' });
});
app.listen(port, () => console.log(`listening on ${port}`));
