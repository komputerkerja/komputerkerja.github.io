<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>MyApp</title>
</head>
<body>
    
    <h1>Client Storage</h1>

    <form action="">
        <div class="form-group">
            <input type="text" name="name" id="name">
            <label for="name">Name</label>
        </div>
        <div class="form-group">
            <input type="number" name="age" id="age">
            <label for="age">Age</label>
        </div>
        <div class="form-group">
            <input type="text" name="special" id="special">
            <label for="special">Special</label>
        </div>
        <div class="form-group">
            <input type="button" name="submit" id="submit" value="Add New">
        </div>
    </form>

    <table >
        <thead>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>Special</th>
                <th>Date Created</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <!-- Loop Data -->
        </tbody>
    </table>

<script src="assets/js/script.js"></script>    
</body>
</html>