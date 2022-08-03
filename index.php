<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
            $archivo = "archivo.txt";
            $contador = intval(trim(file_get_contents($archivo)));

            $file = fopen($archivo, "w");
            fwrite($file, $contador+1 . PHO_EOL);
            $file = fopen(, "r");
            echo '<div style = "position:fixed;bottom:10px;z-index:9;right:10px;background: #ff5a19;padding: 2px 10px;color: #fff;font-size: 30px;border-radius: 20px;">'. fgets($file). '</div>';
            fclose($file);
        ?>
</body>
</html>

<!-- https://www.youtube.com/watch?v=-q5mh9DwbXA -->