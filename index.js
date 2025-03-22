const express=require("express");
const app=express();
const port=3000;
const path=require("path");
const contactusform=require("./schema.js");
const logindata=require('./userData.js');
const tutorialsdata=require('./tutorialsdata.js');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`App Is Listening On Port ${port}`);
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get('/roadmaps',(req,res)=>{
    res.render("roadmaps.ejs");
});

app.get('/contact',(req,res)=>{
    res.render('contactus.ejs');
});

app.get('/courses',(req,res)=>{
    res.render('courses.ejs');
});

app.get('/notes',(req,res)=>{
    res.render('notes.ejs');
});

app.get('/login',(req,res)=>{
    res.render('login.ejs');
});

app.get('/signup',(req,res)=>{
    res.render('signup.ejs');
});

app.get('/tutorials',(req,res)=>{
    res.render('tutorials.ejs');
})

app.get('/roadmaps/roadmap',(req,res)=>{
    let {name,imagelink,width,height}=req.query;
    console.log(req.query);
    name=name.charAt(0).toUpperCase() + name.slice(1)
    width=parseInt(width);;
    res.render("roadmapforskills.ejs",{name,imagelink,width,height});
});

app.post("/contact",(req,res)=>{
    const formdata=req.body;
    let userdata=new contactusform(formdata);
    userdata.save()
    .then((result)=>{
        console.log("Successfully Saved Data");
    });
    res.redirect("/contact");
});

app.post('/signup',(req,res)=>{
    const userdata=req.body;
    const user=new logindata(userdata);
    user.save()
    .then((response)=>{
        console.log(response);
    });
    res.redirect('/login');
});

app.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    console.log(email);
    console.log(password);
    const user=await logindata.findOne({email:email,password:password});
    console.log(user);
    if (user){
        console.log("Login Successfull");
            res.redirect('/');
    }
    else{
        console.log("Error Register First");
        res.redirect("/signup");
    }
});


//interview questions routes
app.get('/interviewquestions',(req,res)=>{
    res.render("interviewquestion.ejs");
})
app.get('/interviewquestions/css',(req,res)=>{
    res.render("./interviewpage/cssquestions.ejs");
})
app.get('/interviewquestions/javscript',(req,res)=>{
    res.render("./interviewpage/javascriptquestions.ejs");
})
app.get('/interviewquestions/python',(req,res)=>{
    res.render("./interviewpage/pythonquestions.ejs");
})
app.get('/interviewquestions/nodejs',(req,res)=>{
    res.render("./interviewpage/nodejsquestions.ejs");
})
app.get('/interviewquestions/expressjs',(req,res)=>{
    res.render("./interviewpage/expressjsquestions.ejs");
})
app.get('/interviewquestions/mongodb',(req,res)=>{
    res.render("./interviewpage/mongodbquestions.ejs");
})
app.get('/interviewquestions/mysql',(req,res)=>{
    res.render("./interviewpage/mysqlquestions.ejs");
})
app.get('/interviewquestions/reactjs',(req,res)=>{
    res.render("./interviewpage/reactjsquestions.ejs");
})


//tutorials routes
app.get('/tutorials/react',(req,res)=>{
    res.redirect('/tutorials');
});

app.get('/tutorials/startreactproject',(req,res)=>{
    res.render('./tutorialspage/startreactproject.ejs');
})

app.get('/tutorials/jsx',(req,res)=>{
    res.render('./tutorialspage/jsx.ejs');
});

app.get('/tutorials/components',(req,res)=>{
    res.render('./tutorialspage/whatiscomponent.ejs');
})

app.get('/tutorials/props',(req,res)=>{
    res.render('./tutorialspage/props.ejs');
})

app.get('/tutorials/eventhandling',(req,res)=>{
    res.render('./tutorialspage/eventhandling.ejs');
})

app.get('/tutorials/conditionrendering',(req,res)=>{
    res.render('./tutorialspage/conditionrendering.ejs');
})

app.get('/tutorials/hooks',(req,res)=>{
    res.render('./tutorialspage/hooks.ejs');
})

app.get('/tutorials/usestatehook',(req,res)=>{
    res.render('./tutorialspage/usestatehook.ejs');
})

app.get('/tutorials/reactforms',(req,res)=>{
    res.render('./tutorialspage/reactforms.ejs');
})

app.get('/tutorials/useeffect',(req,res)=>{
    res.render('./tutorialspage/useeffect.ejs');
})
app.get('/tutorials/useref',(req,res)=>{
    res.render('./tutorialspage/useref.ejs');
})
app.get('/tutorials/datafetching',(req,res)=>{
    res.render('./tutorialspage/datafetching.ejs');
})

//java page
app.get('/tutorials/java',(req,res)=>{
    res.render('./tutorialspage2/mainpage.ejs');
});
app.get('/tutorials/objectsinjava',(req,res)=>{
    res.render('./tutorialspage2/objectinjava.ejs');
});
app.get('/tutorials/encapsulationinjava',(req,res)=>{
    res.render('./tutorialspage2/encapsulationinjava.ejs');
});
app.get('/tutorials/inheritanceinjava',(req,res)=>{
    res.render('./tutorialspage2/inheritanceinjava.ejs');
});
app.get('/tutorials/polymorphisminjava',(req,res)=>{
    res.render('./tutorialspage2/polymorphisminjava.ejs');
});
app.get('/tutorials/abstractioninjava',(req,res)=>{
    res.render('./tutorialspage2/abstractioninjava.ejs');
});


