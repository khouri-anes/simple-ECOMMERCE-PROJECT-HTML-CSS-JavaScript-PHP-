<?php  

// Database connection details
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "bluebird";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize form inputs
    $product_id = htmlspecialchars($_POST['product_id']);
    $name = htmlspecialchars($_POST['name']);
    $phone_number = htmlspecialchars($_POST['phone_number']);
    $wilaya = htmlspecialchars($_POST['wilayas']);
    $delivery_type = isset($_POST['delivry']) ? htmlspecialchars($_POST['delivry']) : '';
    $delivery_price = htmlspecialchars($_POST['deliveryPrice']); // Single delivery price hidden input
    $address = htmlspecialchars($_POST['adress']); // Fix variable name typo (address)

    // Clean up phone number to remove non-digit characters
    $phone_number = preg_replace('/\D/', '', $phone_number); // Removes non-digits

    // Validate the phone number
    if (!preg_match('/^(07|05|06)\d{8}$/', $phone_number)) {
        echo "Please enter a valid phone number starting with 07, 05, or 06 and containing 10 digits.";
    } elseif (empty($name) || empty($phone_number) || empty($wilaya) || empty($delivery_type) || empty($product_id) || empty($address)) {
        echo "All fields are required.";
    } else {
        // Prepare the SQL statement to insert the order into the database
        $stmt = $conn->prepare("INSERT INTO orders (product_id, name, phone_number, wilaya, delivery_type, delivery_price, address) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssis", $product_id, $name, $phone_number, $wilaya, $delivery_type, $delivery_price, $address);

        // Execute the statement and check for success
        if ($stmt->execute()) {
            echo "Order has been successfully placed!";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement and the connection
        $stmt->close();
        $conn->close();
    }
}
?>
