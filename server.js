var express=require('express');
var app=express();

app.get("/",(req,res)=>{

    res.send(
        "<h1>Contoso</h1>"
        +"<hr/>"
        +"<h3>The Contoso Corporation is a multinational business with its headquarters in Paris.</h3>"
        +"<h3>The company is a manufacturing, sales, and support organization with more than 100,000 products.</h3>"
        +"<br/>"
        )
});

app.get("/aboutus",(req,res)=>{

    res.send(
        "<h1>Contoso</h1>"
        +"<hr/>"
        +"<ol>"
        +"<li>Headquarters</li>"
        +"<h3>Contoso headquarters is a corporate campus on the outskirts of Paris with dozens of buildings for administrative, engineering, and manufacturing facilities.</h3>"
        +"<h3>All the Contoso datacenters and its internet presence are housed in the Paris headquarters."
        +"The headquarters has 25,000 workers."
        +"</h3>"
        +"<li>Regional hub</li>"
        +"<br/>"
        +"<h3>Hub offices serve a specific region of the world with 60-percent sales and support staff."
        +"Each regional hub is connected to the Paris headquarters through a high-bandwidth WAN link.</h3>"
        +"</ol>"
        )

    
});

    app.get("/login",(req,res)=>
    {
        res.send(
            "<form>"
            +"<div class='mb-3'>"
            +"<label for='exampleInputEmail1' class='form-label'>Email address</label>"
            +"<input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'>"
            +"<div id='emailHelp' class='form-text'>We'll never share your email with anyone else.</div>"
            + "</div>"
            +"<div class='mb-3'>"
            +"<label for='exampleInputPassword1' class='form-label'>Password</label>"
            +"<input type='password' class='form-control' id='exampleInputPassword1'>"
            + "</div>"
            +"<div class='mb-3 form-check'>"
            +"<input type='checkbox' class='form-check-input' id='exampleCheck1'>"
            +"<label class='form-check-label' for='exampleCheck1'>Check me out</label>"
            +"</div>"
            +"<button type='submit' class='btn btn-primary'>Submit</button>"
            +"</form>"
        )
    })

var server=app.listen(9000);
console.log("Contoso running on port 9000");
