const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const Faction = require("./models/faction");
const Recap = require("./models/recap");
const Level = require("./models/level");
const Employee = require("./models/employee");
const Moneyflow = require("./models/moneyflow");
const Prospect = require("./models/prospect");

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://iridium.duckdns.org:27017/WKMM');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Connection Succeeded");
});


app.get('/factions', (req, res) => {
    Faction.find({}, 'name rep contact', (error, factions) => {
        if (error) { console.error(error); }
        res.send({
            factions
        })
    }).sort({_id:-1})
});

app.get('/recaps', (req, res) => {
    Recap.find({}, 'month day text', (error, recaps) => {
        if (error) { console.error(error); }
        res.send({
            recaps
        })
    }).sort({_id:-1})
});

app.get('/levels', (req, res) => {
    Level.find({}, (error, levels) => {
        if (error) { console.error(error); }
        res.send({
            levels
        })
    }).sort({_id:1})
});

app.get('/tavern_employees', (req, res) => {
    Employee.find({}, (error, employees) => {
        if (error) { console.error(error); }
        res.send({
            employees
        })
    }).sort({_id:1})
});

app.get('/tavern_moneyflow', (req, res) => {
    Moneyflow.find({}, (error, moneyflow) => {
        if (error) { console.error(error); }
        res.send({
            moneyflow
        })
    }).sort({_id:1})
});

app.get('/tavern_prospects', (req, res) => {
    Prospect.find({}, (error, prospects) => {
        if (error) { console.error(error); }
        res.send({
            prospects
        })
    }).sort({_id:1})
});

app.post('/factions', (req, res) => {
    const name = req.body.name;
    const rep = req.body.rep;
    const contact = req.body.contact;
    const new_faction = new Faction({
        name,
        rep,
        contact,
    });
    new_faction.save((error) => {
        if (error) console.log(error);
        res.send({
            success: true,
            message: [
                'Faction saved successfully!',
                new_faction,
            ],
        })
    })
});

app.post('/recaps', (req, res) => {
    const month = req.body.month;
    const day = req.body.day;
    const text = req.body.text;
    const new_recap = new Recap({
        month,
        day,
        text,
    });
    new_recap.save((error) => {
        if (error) console.log(error);
        res.send({
            success: true,
            message: [
                'Recap saved successfully!',
                new_recap,
            ],
        })
    })
});

app.post('/levels', (req, res) => {
    const body = req.body;
    const new_level = new Level({
        name: body.name,
        image: body.image,
        locked: body.locked,
        flavor: {
            text: body.flavor.text,
            author: body.flavor.author,
        },
        text: body.text,
    });
    new_level.save((error) => {
        if (error) console.log(error);
        res.send({
            success: true,
            message: [
                'Level saved successfully!',
                new_level,
            ],
        })
    })
});

app.post('/tavern_employees', (req, res) => {
    const body = req.body;
    const new_employee = new Employee({
        name: body.name,
        job: body.job,
    });
    new_employee.save((error) => {
        if (error) console.log(error);
        res.send({
            success: true,
            message: [
                'Employee saved successfully!',
                new_employee,
            ],
        })
    })
});

app.post('/tavern_moneyflow', (req, res) => {
    const body = req.body;
    const new_moneyflow = new Moneyflow({
        text: body.text,
        value: body.value,
    });
    new_moneyflow.save((error) => {
        if (error) console.log(error);
        res.send({
            success: true,
            message: [
                'Moneyflow saved successfully!',
                new_moneyflow,
            ],
        })
    })
});

app.post('/tavern_prospects', (req, res) => {
    const body = req.body;
    const new_prospect = new Prospect({
        text: body.text,
        value: body.value,
    });
    new_prospect.save((error) => {
        if (error) console.log(error);
        res.send({
            success: true,
            message: [
                'Prospect saved successfully!',
                new_prospect,
            ],
        })
    })
});

app.listen(6663);
