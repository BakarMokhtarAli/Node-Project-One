// import your node server here
import app from './api/server.js';

const port = 9000;

// START YOUR SERVER HERE

app.listen(port, ()=>{
    console.log(`server runing on port ${port}`)
})