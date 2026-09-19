<html>
    
    <head>
        <title>Multiplication Table Generator</title>
        <style>
            body { font-family: sans-serif; margin: 40px; }
            table { border-collapse: collapse; margin-top: 20px; }
            td, th { border: 1px solid #ccc; padding: 10px; text-align: center; width: 40px; }
            th { background-color: #f2f2f2; font-weight: bold; }
            .highlight { background-color: #fafafa; font-weight: bold; }
        </style>
    </head>


<body>

    <h2>Multiplication Table Generator</h2>
    
    <form method="POST" action="">
        <label for="max_num">Enter a number (1-20):</label>
        <input type="number" id="max_num" name="max_num" min="1" max="50" required 
               value="<?php echo isset($_POST['max_num']) ? (int)$_POST['max_num'] : 10; ?>">
        <button type="submit">Generate Table</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['max_num'])) {
        
        $max = (int)$_POST['max_num'];

        //catch for numbrs out of range
        if ($max < 1 || $max > 50) {
            echo "<p style='color: red;'>Please enter a number between 1 and 50.</p>";
        } else {
            echo "<h3>Multiplication Table from 1 to $max</h3>";
            echo "<table>";

            echo "<tr><th class='highlight'>&times;</th>";
            for ($col = 1; $col <= $max; $col++) {
                echo "<th>$col</th>";
            }
            echo "</tr>";

            // using some nested loops to create each row and col
            for ($row = 1; $row <= $max; $row++) {
                echo "<tr>";
                echo "<th class='highlight'>$row</th>";
                
                //can just multiply the row and col numbers to get position value
                for ($col = 1; $col <= $max; $col++) {
                    $product = $row * $col;
                    echo "<td>$product</td>";
                }
                echo "</tr>";
            }

            echo "</table>";
        }
    }
    ?>

</body>
</html>