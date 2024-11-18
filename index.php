<?php
// Dynamic variables
$title = "The Launder Center";
$operating_hours = [
    "status" => "Coin Operated",
    "hours" => "4:00 AM – 11:00 PM"
];
$address = "452 Cottage Rd, South Portland, ME 04106";
$map_url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8372499454515!2d-70.2429845!3d43.6414711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cae299a1da2cfff%3A0x95e6fa5f0eafc3a!2s452%20Cottage%20Rd%2C%20South%20Portland%2C%20ME%2004106!5e0!3m2!1sen!2sus!4v1690216826711!5m2!1sen!2sus";
$phone = "(207) 318-8957";
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= htmlspecialchars($title); ?></title>
  <link rel="icon" type="image/svg+xml" href="images/washer.svg">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <!-- top tile -->
    <div class="image-container">
      <img src="images/front.png" alt="<?= htmlspecialchars($title); ?> building" class="background-image">
      <div class="text-overlay">
        <h1 class="title"><?= htmlspecialchars($title); ?></h1>
        <p class="operating-hours">
          <strong><?= htmlspecialchars($operating_hours['status']); ?></strong><br>
          <em><?= htmlspecialchars($operating_hours['hours']); ?></em>
        </p>
      </div>
    </div>

    <!-- spacer -->
    <div class="spacer"></div>

    <!-- map -->
    <div class="map-container">
      <iframe
        src="<?= htmlspecialchars($map_url); ?>"
        width="100%"
        height="300"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <!-- spacer -->
    <div class="spacer"></div>

    <!-- footer -->
    <footer class="footer">
      <p>&copy; <?= date("Y"); ?> <?= htmlspecialchars($title); ?>. All rights reserved.</p>
      <p>Contact us at: <span class="footer-phone"><?= htmlspecialchars($phone); ?></span></p>
    </footer>
  </div>
</body>
</html>
