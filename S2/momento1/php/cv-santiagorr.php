<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - Santiago Restrepo Rueda - UX/UI Designer</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="stylescv.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <section class="container">
        <div class="row">
            <div class="col-md-12">
                <header class="header-cv">
                    <img src="img/image-header.jpg" class="img-fluid" alt="Banner header cv santiago">
                    <div class="avatar-cv">
                        <img src="img/img-avatar-santiago-rr.png" alt="Avatar santiago restrepo rueda">
                    </div>
                    <div class="name-cv">
                        <h1>Santiago Restrepo Rueda</h1>
                        <h5>UX/UI Designer / Fronted developer</h5>
                    </div>
                    <button class="btn-contact" type="button" data-toggle="modal" data-target="#exampleModal">Let's talk!</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title" id="exampleModalLabel">Let's have a first contact</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">
                                <span class="material-icons">close</span>
                            </span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                            <div class="alert alert-primary d-flex align-items-center p-2" role="alert">
                            <span class="material-icons">
                                lightbulb
                            </span>
                            <p class="m-0">
                                If you are intersting in my profile, complete the next form.
                            </p>
                            </div>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Name</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="form-group">
                                <label for="recipient-email" class="col-form-label">Email</label>
                                <input type="text" class="form-control" id="recipient-email">
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Message</label>
                                <textarea class="form-control" id="message-text"></textarea>
                            </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="button-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="button-primary">Send message</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
            </div>
        </div>
        
        <div class="cont-content">
            <aside class="sidebar">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">About me</a>
                    <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">My work experience</a>
                    <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Studies and courses</a>
                    <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Languages and tools</a>
                </div>
                <div class="redes">
                    <a href="https://www.linkedin.com/in/santiago-restrepo-rueda/" target="blank"><img src="img/linkedin.svg" alt="Linkedin"></a>
                    <a href="https://github.com/Santiago1220" target="blank"><img src="img/github-sign.svg" alt="Github"></a>
                    <a href="https://dribbble.com/TiagoLamat" target="blank"><img src="img/dribbble.svg" alt="Dribbble"></a>
                </div>
            </aside>
            <section class="content">
                <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <div class="card">
                        <h3>A little bit about me</h3>
                        <p class="color-gray-p">Helping to strengthen the experience and improving the usability of the applications they use.</p>
                        <h4 class="subtitle">My info</h4>
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="my-list">
                                    <li><span><span class="material-icons">email</span>Email: </span><p class="bold"> tiago931220@gmail.com</p></li>
                                    <li><span><span class="material-icons">location_on</span>I'm from: </span><p class="bold"> Medellín - Colombia</p></li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                            <ul class="my-list">
                                <li><span><span class="material-icons">phone_android</span>Phone number: </span><p class="bold"> +57 300 498 7668</p></li>
                                <li><span><span class="material-icons">cake</span>Birthday: </span><p class="bold"> 12 - 03 - 1993</p></li>
                            </ul>
                            </div>
                        </div>
                        <div class="hobbies">
                            <h4 class="subtitle mt-5">My hobbies</h4>
                            <article class="my-hobbies">
                                <?php
                                    $titleHobbie=array(
                                        "Read a nice book",
                                        "Cook something good",
                                        "Train my body"
                                    );
                                    $imageHobbie=array(
                                        "img/ic-read.svg",
                                        "img/ic-cook.svg",
                                        "img/ic-sport.svg"
                                    );
                                    for ($i = 0; $i < 3; $i++){
                                        echo (
                                            "
                                            <div class='card-hobbie'>
                                                <img src='$imageHobbie[$i]' class='ic-hobbie'/>
                                                <span>$titleHobbie[$i]</span>
                                            </div>
                                            ");
                                    }
                                ?>
                            </article>
                        </div>
                        <div class="references">
                            <h4 class="subtitle mt-5">References</h4>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card-reference">
                                        <h6>Herlency Muñoz</h6>
                                        <span class="cargo">Getente de CeibaLAB</span>
                                        <P><a href="tel:300-676-3996">Click to call</a></P>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                <div class="card-reference">
                                        <h6>Juan Restrepo</h6>
                                        <span class="cargo">Getente de Seadog Creative LABS</span>
                                        <P><a href="tel:300-243-0349">Click to call</a></P>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <div class="card">
                        <h3>I have worked in</h3>
                        <article class="work-place">
                            <?php
                                $dates=array(
                                    "I Started in June 2018",
                                    "I Started in March of 2018  and Ended in June of 2018",
                                    "I Started in March of 2016 and Ended in January of 2018",
                                    "I Started in May of 2015 and Ended in March of 2016",
                                    "I Started in January of 2014 and Ended in May of 2015");
                                $title=array(
                                    "UX/UI Designer - Ceiba Software",
                                    "UX/UI Designer - Duende Juntos hacemos magia",
                                    "UX/UI Designer  - Seadog Creative Labs",
                                    "Web Designer - Seadog Creative Labs",
                                    "Web Designer - Esquema Publicidad"
                                );
                                $time=array(
                                    "Actually working here",
                                    "Time invested: 3 months",
                                    "Time invested: 1 year and 7 months",
                                    "Time invested: 1 year and 2 months",
                                    "Time invested: 1 year and 3 months"
                                );
                                $logos=array(
                                    "img/logo-ceiba.png",
                                    "img/logo-duende.png",
                                    "img/logo-seadog.png",
                                    "img/logo-seadog.png",
                                    "img/logo-la-company.png"
                                );
                                $url=array(
                                    "https://www.ceiba.com.co/",
                                    "http://www.duende.com.co/",
                                    "https://seadog.com.co/",
                                    "https://seadog.com.co/",
                                    "https://companycreativa.com/"
                                );

                                for ($i = 0; $i < 5; $i++){
                                    echo ("<div class='a-job'>");
                                        echo ("<img src='$logos[$i]' class='logo-empresa'/>");
                                        echo ("<div class='course'>");
                                        echo (
                                            "<span>$dates[$i]</span>" . 
                                        "<h6>$title[$i]</h6>" . 
                                        "<p>$time[$i]</p>".
                                        "<a href='$url[$i]' class='button-secondary' target='blank'>Visit web site</a>");
                                        echo ("</div>");
                                    echo ("</div>");
                                }
                            ?>
                        </article>
                    </div>
                </div>
                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <div class="card">
                        <h3>A sea of ​​knowledge</h3>
                        <h4 class="subtitle">University</h4>
                        <div class="studies">
                            <div class="grades">
                                <h6>Technologist in Graphic Design</h6>
                                <p>IUSH (Institución Universitaria Salazar y Herrera)</p>
                                <b>2011 - 2017</b>
                            </div>
                            <img src="img/Logo-IUSH.svg" alt="">
                        </div>
                        <h4 class="subtitle mt-5">Platzi</h4>
                        <article class="badges-platzi">
                            <?php
                                $titleCourse=array(
                                    "Cómo ser un Product Designer por Aerolab",
                                    "Curso Básico de JavaScript",
                                    "Curso de Accesibilidad Web",
                                    "Curso de Desarrollo de Productos con Metodología Lean 2016",
                                    "Curso de Diseño de Interfaces y UX 2017",
                                    "Curso de Introducción a PHP con Composer",
                                    "Curso de Sass");
                                $tipo=array(
                                    "Diseño de Interfaces (UI)",
                                    "Arquitectura Frontend",
                                    "Arquitectura Frontend",
                                    "Diseño de Productos Digitales y UX",
                                    "Diseño de Productos Digitales y UX",
                                    "Arquitectura Frontend",
                                    "Arquitectura Frontend"
                                );
                                $badge=array(
                                    'img/badge-product-designer-aerolab.png',
                                    'img/badge-basicojs.png',
                                    'img/badge-accesibilidad-web.png',
                                    'img/badge_platzi_leanUX.png',
                                    'img/badge-diseno-interfaces-ux.png',
                                    'img/badge-intro-php-platzi.png',
                                    'img/badge-sass.png',
                                );

                                for ($i = 0; $i < 7; $i++){
                                    echo ("<div class='a-course'>");
                                        echo ("<img src='$badge[$i]' class='badge-course'/>");
                                        echo ("<div class='course'>");
                                        echo (
                                            "<h6>$titleCourse[$i]</h6>" . 
                                            "<p>$tipo[$i]</p>");
                                        echo ("</div>");
                                    echo ("</div>");
                                }
                            ?>
                        </article>
                    </div>
                </div>
                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div class="card">
                        <h3>Tools and languages ​​that I use</h3>
                        <p class="color-gray-p">Programming languages ​​have opened a world of possibilities and a stable job for me, here the ones that I use in my day to day and I have more experience.</p>
                        <article class="tools-apps">
                        <?php
                                $titleTool=array(
                                    "HTML",
                                    "SASS",
                                    "CSS3",
                                    "Java Script",
                                    "GIT",
                                    "Bootstrap",
                                    "Angular",
                                    "Adobe Xd");
                                $percent=array(
                                    '80%',
                                    '60%',
                                    '80%',
                                    '40%',
                                    '70%',
                                    '95%',
                                    '30%',
                                    '100%'
                                );
                                $logoTool=array(
                                    'img/tool-html5.png',
                                    'img/tool-sass.png',
                                    'img/tool-css3.png',
                                    'img/tool-js.png',
                                    'img/tool-git.png',
                                    'img/tool-bootstrap.png',
                                    'img/tool-angular.png',
                                    'img/tool-adobexd.png'
                                );

                                for ($i = 0; $i < 8; $i++){
                                    echo ("<div class='a-course'>");
                                        echo ("<img src='$logoTool[$i]' class='logo-tool'/>");
                                        echo ("<div class='toolsApps'>");
                                        echo (
                                            "<h6>$titleTool[$i]</h6>" . 
                                            "<div class='progress'>
                                                <div class='progress-bar' style='width:$percent[$i]' aria-valuenow='$percent[$i]' aria-valuemin='0' aria-valuemax='100'></div>
                                            </div>
                                            <span>$percent[$i]</span>");
                                        echo ("</div>");
                                    echo ("</div>");
                                }
                            ?>
                        </article>
                    </div>
                </div>
                </div>
            </section>
        </div>
    </section>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>