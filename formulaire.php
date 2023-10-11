<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $destinataire = "jelainjohn@outlook.fr";
    $sujet = "Nouveau message de $nom";
    $corps_message = "De: $nom\nE-mail: $email\n\n$message";

    // Envoi de l'e-mail
    mail($destinataire, $sujet, $corps_message);

    // Redirection vers une page de confirmation
    header("Location: index.html");
}
?>