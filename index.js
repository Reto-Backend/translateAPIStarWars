const server=require('express');
const app=server();
app.use('/',require('./routes/person'));
app.use('/',require('./routes/film'));
app.use('/',require('./routes/starship'));
app.listen(4000,()=>{
    console.log('listen...');
})