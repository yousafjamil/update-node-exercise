const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views')

// app.use((req, res, next) => {
//     const error = new Error(' page not found');
//     error.status = 404
//     next(error)
// });
// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: error.message
//     })
// })

app.use(require('./routes/index'))
app.use(function (req, res, next) {
  res.status(404);

  // respond with json
  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }
});



app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
})

