<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="CSS/style.css">
    <link rel="stylesheet" href="CSS/timeline.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lexend+Zetta:wght@100..900&display=swap" rel="stylesheet">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    
</head>


<body>

<?php require("Controller/navbar.php") ?>

<div class="container">
    <div id=welcome>
        <p>
            <span class="regular">Bienvenue je suis </span> 
            <span class="black">Denis.</span> 
            <br> 
            <span class="regular">Je suis </span> 
            <span class="black">étudiant en Informatique.</span>
        </p>

        <div class="inline-container">
            <p>📍</p>
            <p class="light">
                Actuellement en <span class="semibold">BUT Informatique</span> à l’<span class="semibold">IUT de Villetaneuse</span>
            </p>
        </div>
    </div>

    <?php require("Controller/SocialMedia.php") ?>
</div>


<div id="desc">
    <p class="titleTxt">Qui je suis ? 🙎‍♂️</p>
    <br>
    <p class="simpleTxt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.</p>

    <br>

    <p class="titleTxt">Pourquoi ai-je commencé l’informatique ? 👨‍💻 </p>
    <br>
    <p class="simpleTxt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.</p>
</div>

<?php 
    require("Controller/parcours.php") 
?>

</body>
</html>
