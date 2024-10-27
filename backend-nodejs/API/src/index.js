const express = require('express');
const mysql = require('mysql2'); 

const app = express();
// midleware to parse json  response
app.use(express.json());


// create connection 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '',
    database: 'etp_training',
    port: 3307 
}); 

//connect to db
 connection.connect(function(err){
    if(err) throw err;
    console.log('Connected to mysql');
});

app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ETP Backend API</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gray-50">
    <div class="min-h-screen">
        <!-- Header -->
        <header class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl font-bold mb-4">Welcome to ETP Backend</h1>
                <p class="text-xl mb-8">Student Management System API</p>
                <a href="/api/students" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Get a list of students 
                </a>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container mx-auto px-4 py-12">
            <!-- Features Section -->
            <div class="grid md:grid-cols-3 gap-8 mb-12">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="text-blue-600 text-3xl mb-4">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <h2 class="text-xl font-semibold mb-2">Fast & Reliable</h2>
                    <p class="text-gray-600">Built with Express.js and MySQL for optimal performance and reliability.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="text-blue-600 text-3xl mb-4">
                        <i class="fas fa-lock"></i>
                    </div>
                    <h2 class="text-xl font-semibold mb-2">Secure</h2>
                    <p class="text-gray-600">Implemented with best security practices and data protection.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="text-blue-600 text-3xl mb-4">
                        <i class="fas fa-book"></i>
                    </div>
                    <h2 class="text-xl font-semibold mb-2">Well Documented</h2>
                    <p class="text-gray-600">Complete Swagger documentation for all API endpoints.</p>
                </div>
            </div>

            <!-- API Endpoints Section -->
            <div class="bg-white rounded-lg shadow-md p-8 mb-12">
                <h2 class="text-2xl font-bold mb-6">Available Endpoints</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="border rounded-lg p-4">
                        <div class="flex items-center mb-2">
                            <span class="bg-green-500 text-white px-3 py-1 rounded-md text-sm mr-3">GET</span>
                            <code class="text-gray-800">/api/students</code>
                        </div>
                        <p class="text-gray-600">Retrieve all students</p>
                    </div>
                    <div class="border rounded-lg p-4">
                        <div class="flex items-center mb-2">
                            <span class="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-3">POST</span>
                            <code class="text-gray-800">/api/students</code>
                        </div>
                        <p class="text-gray-600">Create a new student</p>
                    </div>
                    <div class="border rounded-lg p-4">
                        <div class="flex items-center mb-2">
                            <span class="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm mr-3">PUT</span>
                            <code class="text-gray-800">/api/students/:id</code>
                        </div>
                        <p class="text-gray-600">Update a student</p>
                    </div>
                    <div class="border rounded-lg p-4">
                        <div class="flex items-center mb-2">
                            <span class="bg-red-500 text-white px-3 py-1 rounded-md text-sm mr-3">DELETE</span>
                            <code class="text-gray-800">/api/students/:id</code>
                        </div>
                        <p class="text-gray-600">Delete a student</p>
                    </div>
                </div>
            </div>

            <!-- Quick Start Section -->
            <div class="bg-gray-800 text-white rounded-lg shadow-md p-8">
                <h2 class="text-2xl font-bold mb-6">Quick Start</h2>
                <div class="bg-gray-900 p-4 rounded-md mb-4">
                    <code class="text-green-400">
                        # Example API request<br>
                        curl -X GET http://localhost:3000/api/students
                    </code>
                </div>
                <a href="/api-docs" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Full Documentation
                </a>
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-8 mt-12">
            <div class="container mx-auto px-4 text-center">
                <p>&copy; 2024 ETP Backend. All rights reserved.</p>
                <div class="mt-4">
                    <a href="/api-docs" class="text-blue-400 hover:text-blue-300 mx-3">API Docs</a>
                    <a href="https://github.com" class="text-blue-400 hover:text-blue-300 mx-3">GitHub</a>
                    <a href="#" class="text-blue-400 hover:text-blue-300 mx-3">Support</a>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>`);  
}) 
// endpoint to get students 
app.get('/api/students', (req, res)=>{
const students = 'SELECT * FROM students';
connection.query(students, (err, results)=>{
if (err) throw err;
res.status(200).json(results);
})

});
// enpoint  to create student

app.post('/api/students', (req, res)=>{
 
    let {fname, lname, address, age} = req.body;
    const sql = `INSERT INTO students
    (fname, lname, address, age) Values (?,?,?,?)`;
    connection.query(sql, [fname, lname, address, age], (err, result)=>{
        if (err) throw err;
        res.status(201).json({message: 'Student created successfully', id: result.insertId});
        
    })

})
// create endpoint to get students by id

app.get('/api/students/:stdid', (req, res)=>{
const id = req.params.stdid;
const sql = `SELECT * FROM students WHERE id =?`;
connection.query(sql, [id], (err, result)=>{
if (err) throw err;
if(result.length === 0){
    res.status(404).json({message: 'Student not found'});
}else{
    res.status(200).json(result[0]);
}
})

});

// update students

app.put('/api/students/:stdid', (req, res)=>{
const id = req.params.stdid;
let {fname, lname, address, age} = req.body;
const sql = `UPDATE students SET fname =?, lname =?, address =?, age =? WHERE id =?`;
connection.query(sql, [fname, lname, address, age, id], (err, result)=>{
if (err) throw err;
if(result.affectedRows === 0){
    res.status(404).json({message: 'Student not found'});
}else{
    res.status(200).json({message: 'Student updated successfully'});
}
})

});

// delete students

app.delete('/api/students/:stdid', (req, res)=>{
const id = req.params.stdid;
const sql = `DELETE FROM students WHERE id =?`;
connection.query(sql, [id], (err, result)=>{
if (err) throw err;
if(result.affectedRows === 0){
    res.status(404).json({message: 'Student not found'});
}else{
    res.status(200).json({message: 'Student deleted successfully'});
}
})

});


app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000');
});