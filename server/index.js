const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const port = 5000;

// using the nodejs 
app.use(express.json());
app.use(cors());



// MySQL Connection
const connection = mysql.createConnection({
  host:"127.0.0.1",
  user:"root",
  password:"sanjay007",
  database:"employeeform"
});


// Endpoint to receive and store employee details
    app.post('/post', (req, res) => {
      const { employeenmae,dob,designation,salary,experience,employee_id,phone_number,address,email} = req.params;


  connection.query('INSERT INTO form ( employeenmae, dob, designation, salary,experience,employee_id,phone_number,address, email) VALUES(?,?,?,?,?,?,?,?,?)', [ employeenmae, dob,designation, salary,experience, employee_id,phone_number,address,
   email], (err, result) => {
      if (err) {
          console.error('Error inserting data into MySQL:', err);
      }
      console.log('Data inserted into MySQL successfully:', result);
        res.json('successfully')
    });
  });

// conntion to my sql
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});



app.listen(port,()=>{
  console.log(`server is running on ${port}`)
});



