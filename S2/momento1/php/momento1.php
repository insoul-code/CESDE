<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercico #2</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <style>
        .col-md-6{
            background: #fafafa;
        }

        .margin{
            margin: 0 0 0 40px;
        }

        .form-control{
            font-size: 14px !important;
        }
    </style>
</head>
<body>
    <div class="container">
    <h2 class="mt-4">Calcular pulsaciones</h2>
        <p>Calcular el número de pulsaciones que debe tener una persona por cada 10 segundos de ejercicio aeróbico.</p>
        <?php
            // Calcular el número de pulsaciones que debe tener una persona por cada 10 segundos de
            // ejercicio aeróbico; sexo femenino es Núm. pulsaciones = (220 - edad)/10 y si es masculino
            // Núm. pulsaciones = (210 - edad)/10

            $numPulse=0;
            $edadUser=0;
            $sexo="No selecionado";

            if($_SERVER['REQUEST_METHOD']=='POST'){
                $edadUser = floatval ($_POST['edad']);
                $sexo = $_REQUEST['sexo'];

                if ($sexo == "Hombre"){
                    $numPulse = (210 - $edadUser)/10;
                }else if($sexo == "Mujer"){
                    $numPulse = (220 - $edadUser)/10;
                }
            }

            echo("
            <div class='row'>
                <div class='col-md-6'>
                    <form method='post'>
                    <div class='row mt-3'>
                        <div class='col-md-6'>
                            <div class='form-group'>
                                <label for='edad'>Ingresa tu edad</label>
                                <input type='text' class='form-control' name='edad' placeholder='Ejemplo: 25'>
                            </div>
                        </div>
                        <div class='col-md-6'>
                            <div class='form-group'>
                                <label for='sexo'>Selecciona tu sexo</label>
                                <select class='form-control' name='sexo'>
                                <option value='No selecionado'>Selecione una opción...</option>
                                <option value='Hombre'>Hombre</option>
                                <option value='Mujer'>Mujer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                        <div class='d-flex justify-content-end mt-2 mb-4'>
                            <button type='submit' class='btn btn-primary mb-2'>Calcular pulsaciones</button>
                        </div>
                    </form>
                </div>
                <div class='col-md-6'>
                    <h4 class='mt-3'>Resultado</h4>
                    <div class='mt-3 d-flex'>
                        <div class=''>
                            <label for='edad'>Sexo</label>
                            <h6>$sexo</h6>
                        </div>
                        <div class='margin'>
                            <label for='edad'>Edad</label>
                            <h6>$edadUser</h6>
                        </div>
                        <div class='margin'>
                            <label for='edad'>Pulsaciones</label>
                            <h6>$numPulse</h6></div>
                        </div>
                    </div>
                </div>
            </div>
            "
            );
        ?>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>