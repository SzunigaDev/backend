const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');

  connection.query('CREATE DATABASE IF NOT EXISTS employees', (err, result) => {
    if (err) throw err;
    console.log('Database created');

    const useDbQuery = 'USE employees';
    connection.query(useDbQuery, (err, result) => {
      if (err) throw err;
      console.log('Using employees database');

      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS employees (
          id INT AUTO_INCREMENT PRIMARY KEY,
          first_name VARCHAR(50),
          last_name VARCHAR(50),
          email VARCHAR(100),
          hire_date DATE,
          salary DECIMAL(10, 2)
        )
      `;
      connection.query(createTableQuery, (err, result) => {
        if (err) throw err;
        console.log('Table created');

        const insertDataQuery = `
          INSERT INTO employees (first_name, last_name, email, hire_date, salary) VALUES
          ('John', 'Doe', 'john.doe@example.com', '2020-01-15', 50000),
          ('Jane', 'Smith', 'jane.smith@example.com', '2019-03-22', 60000),
          ('Mike', 'Johnson', 'mike.johnson@example.com', '2018-07-11', 55000),
          ('Emily', 'Davis', 'emily.davis@example.com', '2021-10-30', 70000),
          ('Robert', 'Brown', 'robert.brown@example.com', '2017-05-06', 45000),
          ('Linda', 'Jones', 'linda.jones@example.com', '2016-09-14', 75000),
          ('James', 'Garcia', 'james.garcia@example.com', '2022-02-20', 80000),
          ('Barbara', 'Martinez', 'barbara.martinez@example.com', '2015-11-25', 67000),
          ('David', 'Lopez', 'david.lopez@example.com', '2023-04-18', 52000),
          ('Susan', 'Gonzalez', 'susan.gonzalez@example.com', '2014-06-03', 58000),
          ('Daniel', 'Wilson', 'daniel.wilson@example.com', '2020-08-13', 49000),
          ('Karen', 'Anderson', 'karen.anderson@example.com', '2013-12-09', 62000),
          ('Joseph', 'Thomas', 'joseph.thomas@example.com', '2012-10-17', 54000),
          ('Patricia', 'Taylor', 'patricia.taylor@example.com', '2011-11-05', 59000),
          ('Charles', 'Moore', 'charles.moore@example.com', '2010-01-01', 63000),
          ('Jennifer', 'Jackson', 'jennifer.jackson@example.com', '2009-04-21', 48000),
          ('Matthew', 'White', 'matthew.white@example.com', '2008-08-30', 65000),
          ('Margaret', 'Harris', 'margaret.harris@example.com', '2007-07-15', 72000),
          ('Thomas', 'Clark', 'thomas.clark@example.com', '2006-02-23', 55000),
          ('Sarah', 'Lewis', 'sarah.lewis@example.com', '2005-09-12', 70000);
        `;
        connection.query(insertDataQuery, (err, result) => {
          if (err) throw err;
          console.log('Data inserted');
          connection.end();
        });
      });
    });
  });
});
