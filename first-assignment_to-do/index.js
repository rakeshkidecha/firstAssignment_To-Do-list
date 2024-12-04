const express = require('express');
const path = require('path')
const port = 8001;

const app = express();
const allTask = [
    {
        task:"fiest task",
        taskProcess:"Pending",
        date:new Date().toLocaleDateString()
    }
]

app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// veiw data on page 
app.get('/',(req,res)=>{
    res.render('Home',{allTask})
})

// insert tasks 
app.post('/insertTask',(req,res)=>{
    allTask.push(req.body);
    res.redirect('/')
})

// delete tasks 
app.get('/deleteTask',(req,res)=>{
    allTask.splice(req.query.pos,1);
    res.redirect('/');
})

app.listen(port,err=>err?console.log(err):console.log("Server run on http://localhost:"+port));