const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectId;
const PORT = 3000;    
const app = express();
const jsonParser = express.json();
const url = "mongodb+srv://sasha:sas20061030@cluster0.aiqne49.mongodb.net/?retryWrites=true&w=majority";  

const mongoClient = new MongoClient(url);
 
app.use(express.static(__dirname + "/public"));
 
 
(async () => {
     try {
        await mongoClient.connect();
        app.locals.collection = mongoClient.db("usersdb").collection("users");
        await app.listen(process.env.PORT || PORT, () => console.log(process.pid));
        console.log("Сервер ожидает подключения...");
    }catch(err) {
        return console.log(err);
    } 
})();
 
///взять из таблицы все записи 
app.get("/api/users", async(req, res) => {
         
    const collection = req.app.locals.collection;
    try{
        const users = await collection.find({}).toArray();
        res.send(users);
    }
    catch(err){return console.log(err);}
      
});
///взять из таблицы все записи по году
app.get("/api/usersgod/:god", async(req, res) => {
    const god = req.params.god;     
    const collection = req.app.locals.collection;
    try{
        const users = await collection.find({par4:{$regex:god}}).toArray();
        res.send(users);
    }
    catch(err){return console.log(err);}
});
///взять из таблицы выделенную запись
app.get("/api/users/:id", async(req, res) => {
         
    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    try{
        const user = await collection.findOne({_id: id});
        res.send(user);
    }
    catch(err){return console.log(err);}
});

///записать в таблицу запись     
app.post("/api/users", jsonParser, async(req, res)=> {
        
    if(!req.body) return res.sendStatus(400);
        
    const userPar1 = req.body.par1;
    const userPar2 = req.body.par2;
    const userPar3 = req.body.par3;
    const userPar4 = req.body.par4;
    const userPar5 = req.body.par5;
    const userPar6 = req.body.par6;
    const userPar7 = req.body.par7;
    const userPar8 = req.body.par8;
    const userPar9 = req.body.par9;
    const userPar10 = req.body.par10;
    const userPar11 = req.body.par11;
    const userPar12 = req.body.par12;
    const userPar13 = req.body.par13;
    const userPar14 = req.body.par14;
    const userPar15 = req.body.par15;
    const userPar16 = req.body.par16;
    const userPar17 = req.body.par17;
    const userPar18 = req.body.par18;
    const userPar19 = req.body.par19;
    const userPar20 = req.body.par20;
    const userPar21 = req.body.par21;
    const userPar22 = req.body.par22;
    const userPar23 = req.body.par23;
    const userPar24 = req.body.par24;
    const userPar25 = req.body.par25;
    const userPar26 = req.body.par26;
    const userPar27 = req.body.par27;
    const userPar28 = req.body.par28;
    const userPar29 = req.body.par29;
    const userPar30 = req.body.par30;
    const userPar31 = req.body.par31;
    const userPar32 = req.body.par32;
    const userPar33 = req.body.par33;
    const userPar34 = req.body.par34;
    const userPar35 = req.body.par35;
    const userPar36 = req.body.par36;
    const userPar37 = req.body.par37;
    const userPar38 = req.body.par38;
    const userPar39 = req.body.par39;
    const userPar40 = req.body.par40;
    const userPar41 = req.body.par41;
    const userPar42 = req.body.par42;
    const userPar43 = req.body.par43;
    const userPar44 = req.body.par44;
    
    let user = {par1: userPar1, par2: userPar2, par3: userPar3, par4: userPar4, par5: userPar5, par6: userPar6, par7: userPar7, par8: userPar8, par9: userPar9, par10: userPar10,
        par11: userPar11, par12: userPar12, par13: userPar13, par14: userPar14, par15: userPar15, par16: userPar16, par17: userPar17, par18: userPar18, par19: userPar19, par20: userPar20,
        par21: userPar21, par22: userPar22, par23: userPar23, par24: userPar24, par25: userPar25, par26: userPar26, par27: userPar27, par28: userPar28, par29: userPar29, par30: userPar30,
        par31: userPar31, par32: userPar32, par33: userPar33, par34: userPar34, par35: userPar35, par36: userPar36, par37: userPar37, par38: userPar38, par39: userPar39, par40: userPar40,
        par41: userPar41, par42: userPar42, par43: userPar43, par44: userPar44
    };
        
    const collection = req.app.locals.collection;
     
    try{
        await collection.insertOne(user);
        res.send(user);
        console.log(user);
    }
    catch(err){return console.log(err);}
});
/// удалить из таблицы запись
app.delete("/api/users/:id", async(req, res)=>{
         
    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    try{
        const result = await collection.findOneAndDelete({_id: id});
        const user = result.value;
        res.send(user);
    }
    catch(err){return console.log(err);}
});

///обновить конкретную запись
app.put("/api/users", jsonParser, async(req, res)=>{
         
    if(!req.body) return res.sendStatus(400);
    const id = new objectId(req.body.id);
    const userPar1 = req.body.par1;
    const userPar2 = req.body.par2;
    const userPar3 = req.body.par3;
    const userPar4 = req.body.par4;
    const userPar5 = req.body.par5;
    const userPar6 = req.body.par6;
    const userPar7 = req.body.par7;
    const userPar8 = req.body.par8;
    const userPar9 = req.body.par9;
    const userPar10 = req.body.par10;
    const userPar11 = req.body.par11;
    const userPar12 = req.body.par12;
    const userPar13 = req.body.par13;
    const userPar14 = req.body.par14;
    const userPar15 = req.body.par15;
    const userPar16 = req.body.par16;
    const userPar17 = req.body.par17;
    const userPar18 = req.body.par18;
    const userPar19 = req.body.par19;
    const userPar20 = req.body.par20;
    const userPar21 = req.body.par21;
    const userPar22 = req.body.par22;
    const userPar23 = req.body.par23;
    const userPar24 = req.body.par24;
    const userPar25 = req.body.par25;
    const userPar26 = req.body.par26;
    const userPar27 = req.body.par27;
    const userPar28 = req.body.par28;
    const userPar29 = req.body.par29;
    const userPar30 = req.body.par30;
    const userPar31 = req.body.par31;
    const userPar32 = req.body.par32;
    const userPar33 = req.body.par33;
    const userPar34 = req.body.par34;
    const userPar35 = req.body.par35;
    const userPar36 = req.body.par36;
    const userPar37 = req.body.par37;
    const userPar38 = req.body.par38;
    const userPar39 = req.body.par39;
    const userPar40 = req.body.par40;
    const userPar41 = req.body.par41;
    const userPar42 = req.body.par42;
    const userPar43 = req.body.par43;
    const userPar44 = req.body.par44;

    const collection = req.app.locals.collection;
    try{
        const result = await collection.findOneAndUpdate({_id: id}, { $set: {par1: userPar1, par2: userPar2, par3: userPar3, par4: userPar4, par5: userPar5, par6: userPar6, par7: userPar7, par8: userPar8, par9: userPar9, par10: userPar10, 
            par11: userPar11, par12: userPar12, par13: userPar13, par14: userPar14, par15: userPar15, par16: userPar16, par17: userPar17, par18: userPar18, par19: userPar19, par20: userPar20,
            par21: userPar21, par22: userPar22, par23: userPar23, par24: userPar24, par25: userPar25, par26: userPar26, par27: userPar27, par28: userPar28, par29: userPar29, par30: userPar30,
            par31: userPar31, par32: userPar32, par33: userPar33, par34: userPar34, par35: userPar35, par36: userPar36, par37: userPar37, par38: userPar38, par39: userPar39, par40: userPar40,
            par41: userPar41, par42: userPar42, par43: userPar43, par44: userPar44
        }},
         {returnDocument: "after" });
        const user = result.value;
        res.send(user);
    }
    catch(err){return console.log(err);}
});

///base orgh

///получить все записи из таблицы
app.get("/api/orghs", async(req, res) => {
         
    const collection = mongoClient.db("usersdb").collection("orgh");  //req.app.locals.collection;
    
    try{
        const users = await collection.find({}).toArray();
        res.send(users);
    }
    catch(err){return console.log(err);}
      
});
///получить первую запись из таблицы
app.get("/api/orghone", async(req, res) => {
         
    const collection = mongoClient.db("usersdb").collection("orgh"); 
    
    try{
        const user = await collection.findOne({});
        res.send(user);
    }
    catch(err){return console.log(err);}
      
});
///взять из таблицы выделенную запись
app.get("/api/orgh/:id", async(req, res) => {
         
    const id = new objectId(req.params.id);
    
    const collection = mongoClient.db("usersdb").collection("orgh");  //req.app.locals.collection;

    try{
        const user = await collection.findOne({_id: id});
        res.send(user);
    }
    catch(err){return console.log(err);}
});  
///создать запись
app.post("/api/orgh", jsonParser, async(req, res)=> {
        
    if(!req.body) return res.sendStatus(400);
        
    const userGod = req.body.god;
    const userOrg = req.body.org;
    const userAdr = req.body.adr;
    let user = {god: userGod, org: userOrg, adr: userAdr };
        
    const collection =mongoClient.db("usersdb").collection("orgh"); // req.app.locals.collection;
     
    try{
        await collection.insertOne(user);
        res.send(user);
        console.log(user);
    }
    catch(err){return console.log(err);}
});
/// удалить из таблицы запись
app.delete("/api/orgh/:id", async(req, res)=>{
         
    const id = new objectId(req.params.id);

    const collection =mongoClient.db("usersdb").collection("orgh"); // req.app.locals.collection;
    try{
        const result = await collection.findOneAndDelete({_id: id});
        const user = result.value;
        res.send(user);
        console.log('-'+user);

    }
    catch(err){return console.log(err);}
});

///обновить конкретную запись
app.put("/api/orgh", jsonParser, async(req, res)=>{
         
    if(!req.body) return res.sendStatus(400);
    const id = new objectId(req.body.id);
    const userGod = req.body.god;
    const userOrg = req.body.org;
    const userAdr = req.body.adr;
        
    const collection =mongoClient.db("usersdb").collection("orgh"); // req.app.locals.collection;'
    try{
        const result = await collection.findOneAndUpdate({_id: id}, { $set: {god: userGod, org: userOrg,adr: userAdr}},
         {returnDocument: "after" });
        const user = result.value;
        res.send(user);
    }
    catch(err){return console.log(err);}
});

// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", async() => {
     
    await mongoClient.close();
    console.log("Приложение завершило работу");
    process.exit();
});
