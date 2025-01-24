<?php
    $action = $_GET['action'] ?? null;

    switch($action){

        default:
        require __DIR__.'/resources/resource_home.php';

    }


?>