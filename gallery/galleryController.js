app.controller('GalleryCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    var typeId = $routeParams.id;
    var projectId = $routeParams.project_id;
    var paths =
    {
        relativePath: 'images/PORTFOLIO/PL/',
        dirs: [
            {
                dir:"01. ARCHITEKTURA",
                subdirs:["hospital", "ELDERLY CARE CENTER", "river-terrace", "CAFE-FRAME", "PIEKARNIA",
                     "SKATEPARK", "PRACOWNIA BIURA GRAFICZNEGO"],
                labels:["SZPITAL \"HOTEL DLA CHORYCH\"", "ELDERLY CARE CENTER", "ZESPÓŁ BUDYNKÓW WIELORODZINNYCH - RIVER&TERRACE", "CAFE-FRAME", "PIEKARNIA",
                    "SKATEPARK", "PRACOWNIA BIURA GRAFICZNEGO"]
            },
            {
                dir:"02. PAWILONY",
                subdirs:["FORMA WYSTAWIENNICZA", "WEDDING"],
                labels:["FORMA WYSTAWIENNICZA", "WEDDING"]
            },
            {
                dir:"03. URBANISTYKA",
                subdirs:["PRACA INŻYNIERSKA - CEGIELNIA", "PROJEKT ZAGOSPODAROWANIA PRZESTRZENNEGO W SKIERNIEWICACH",
                    "DEPTAK - OSIEDLE GÓRNICZE W TURKU", "PROJEKT REWITALIZACJI PRZESTRZENI MIEJSKIEJ"],
                labels:["PRACA INŻYNIERSKA - CEGIELNIA", "PROJEKT ZAGOSPODAROWANIA PRZESTRZENNEGO W SKIERNIEWICACH",
                    "DEPTAK - OSIEDLE GÓRNICZE W TURKU", "PROJEKT REWITALIZACJI PRZESTRZENI MIEJSKIEJ"]
            },
            {dir:"04. MAKIETY"},
            {dir:"05. RYSUNKI"},
            {
                dir:"06. INNE",
                subdirs:["KOLEKCJA KSIĄŻEK", "THE COLOUR ROLLER", "RZEŹBA Z GLINY", "GOOD BOY"],
                labels:["KOLEKCJA KSIĄŻEK", "THE COLOUR ROLLER", "RZEŹBA Z GLINY", "\"GOOD BOY\""]
            },
            {dir:"07. WIZUALIZACJE"}]
    };

    var images = [
        [
            [
                {name: '01', title: 'wizualizacja od strony ogrodu terapeutycznego'},
                {name: '02', title: 'wizualizacja od strony tarasów oddziału łóżkowego'},
                {name: '03', title: 'wizualizacja od strony wejściowej'},
                {name: '04', title: 'lokalizacja'},
                {name: '05', title: 'projekt zagospodarowania terenu'},
                {name: '06', title: 'aksonometria założenia przestrzennego'},
                {name: '07', title: 'aksonometria pięter'},
                {name: '08', title: 'analiza widokowa'},
                {name: '09', title: 'elewacje'},
                {name: '10', title: 'rzut parteru i przekrój B-B'},
                {name: '11', title: 'rzut piętra i przekrój A-A'},
                {name: '12', title: 'rzut 2 piętra i przekrój C-C'},
                {name: '13', title: 'hall wejściowy'},
                {name: '14', title: 'pokój łózkowy'},
                {name: '15', title: 'detal'},
                {name: '16', title: 'makieta'},
                {name: '17', title: 'makieta'},
                {name: '18', title: 'makieta'},
                {name: '19', title: 'makieta'}
            ], [
                {name: '01', title: ''},
                {name: '02', title: ''},
                {name: '03', title: ''},
                {name: '04', title: ''},
                {name: '05', title: ''},
                {name: '06', title: ''},
                {name: '07', title: ''},
                {name: '08', title: ''},
                {name: '09', title: ''},
                {name: '10', title: ''},
                {name: '11', title: ''},
                {name: '12', title: ''}
            ], [
                {name: '01', title: 'plansza'},
                {name: '02', title: 'projekt zagospodarowania terenu'},
                {name: '03', title: '1. makieta'},
                {name: '04', title: 'aksonometrie'},
                {name: '05', title: 'rzuty i przekroje'},
                {name: '06', title: 'aksonometrie mieszkań'},
                {name: '07', title: 'elewacje'}
            ], [
                {name: '01', title: 'plansza'},
                {name: '02', title: 'makieta'},
                {name: '03', title: 'projekt zagospodarowania terenu'},
                {name: '04', title: 'szkic'},
                {name: '05', title: 'rzuty i przekroje'},
                {name: '06', title: 'przekrój'},
                {name: '07', title: 'elewacje'}
            ], [
                {name: '01', title: 'wizualizacja'},
                {name: '02', title: 'widok na kompleks'},
                {name: '03', title: 'wnętrze kantyny'},
                {name: '04', title: 'projekt zagospodarowania terenu'},
                {name: '05', title: 'rzuty'},
                {name: '06', title: 'przekroje i elewacje'}
            ], [
                {name: '01', title: 'plansze'},
                {name: '02', title: 'wizualizacja'},
                {name: '03', title: 'wizualizacja'},
                {name: '04', title: 'wizualizacja'},
                {name: '05', title: 'projekt zagospodarowania terenu'},
                {name: '06', title: 'rzuty'},
                {name: '07', title: 'przekroje i detale'},
                {name: '08', title: 'elewacje'}
            ], [
                {name: '01', title: 'wizualizacja'},
                {name: '02', title: 'wizualizacja'},
                {name: '03', title: 'projekt zagospodarowania terenu'},
                {name: '04', title: 'rzut piwnicy'},
                {name: '05', title: 'rzut parteru'},
                {name: '06', title: 'rzut piętra'},
                {name: '07', title: 'rzut 2. piętra'},
                {name: '08', title: 'rzut 3. piętra'},
                {name: '09', title: 'rzut dachu'},
                {name: '10', title: 'przekrój A-A'},
                {name: '11', title: 'przekroje B-B'},
                {name: '12', title: 'elewacje zewnętrzne'},
                {name: '13', title: 'elewacje wewnętrzne'}
            ]
        ],
        [
            [
            {name: '01', title: 'plansza'},
                {name: '02', title: 'wizualizacja'},
                {name: '03', title: 'wizualizacja'},
                {name: '04', title: 'detal'},
                {name: '05', title: 'rzut i przekrój'},
                {name: '06', title: 'elewacje'},
                {name: '07', title: 'kłady'}
            ],[
                {name: '01', title: 'plansza'},
                {name: '02', title: 'pawilony'},
                {name: '03', title: 'rzuty i przekroje'},
                {name: '04', title: 'makieta modułu'},
                {name: '05', title: 'makieta modułu'}
            ]
        ],
        [
            [
                {name: '01', title: 'wizualizacja'},
                {name: '02', title: 'wizualizacja'},
                {name: '03', title: 'wizualizacja'},
                {name: '04', title: '1. makieta'},
                {name: '05', title: '2. makieta'},
                {name: '06', title: 'szkic'},
                {name: '07', title: 'projekt zagospodarowania terenu'},
                {name: '08', title: 'rzut parkingu podziemnego'},
                {name: '09', title: 'rzuty budynków'},
                {name: '10', title: 'rzuty dachów'},
                {name: '11', title: 'przekroje budynków'},
                {name: '12', title: 'elewacje'},
                {name: '13', title: 'elewacje'},
                {name: '14', title: 'detal'},
                {name: '15', title: 'rzut techniczny'},
                {name: '16', title: 'rzut techniczny'},
                {name: '17', title: 'przekrój techniczny'}
            ],[
                {name: '01', title: 'projekt zagospodarowania terenu w miejscowości Skierniewice'}
            ],[
                {name: '01', title: 'plansze'},
                {name: '02', title: 'rzut'},
                {name: '03', title: 'aksonometrie'},
                {name: '04', title: 'detale'},
                {name: '05', title: 'widok na kolorowy plac'},
                {name: '06', title: 'widok na plac zabaw'},
                {name: '07', title: 'widok na deptak'},
                {name: '08', title: 'widok na obiekt usługowy i targowiska'},
                {name: '09', title: 'wnętrze targowiska'}
            ],[
                {name: '01', title: 'plansza'},
                {name: '02', title: 'projekt zagospodarowania terenu'},
                {name: '03', title: ''},
                {name: '04', title: 'mała architektura'}
            ]
        ],
        [
            [
                {name: '08', title: ''},
                {name: '09', title: ''},
                {name: '10', title: ''},
                {name: '11', title: ''},
                {name: '01', title: ''},
                {name: '02', title: ''},
                {name: '03', title: ''},
                {name: '04', title: ''},
                {name: '05', title: ''},
                {name: '06', title: ''},
                {name: '07', title: ''}
            ]
        ],
        [
            [
                {name: '01', title: ''},
                {name: '02', title: ''},
                {name: '03', title: ''},
                {name: '04', title: ''},
                {name: '05', title: ''},
                {name: '06', title: ''},
                {name: '07', title: ''}
            ]
        ],
        [
            [
                {name: 'a', title: ''},
                {name: 'a2', title: ''},
                {name: 'a3', title: ''},
                {name: 'a4', title: ''}
            ],[
                {name: '02', title: ''}
            ],[
                {name: '04', title: ''}
            ],[
                {name: '03', title: ''}
            ]
        ],
        [
            [
                {name: '0001', title: ''},
                {name: '0002', title: ''},
                {name: '0003', title: ''},
                {name: '001', title: ''},
                {name: '002', title: ''},
                {name: '003', title: ''},
                {name: '01', title: ''},
                {name: '02', title: ''},
                {name: '03', title: ''},
                {name: '04', title: ''},
                {name: '05', title: ''},
                {name: '06', title: ''},
                {name: '07', title: ''},
                {name: '08', title: ''},
                {name: '09', title: ''},
                {name: '10', title: ''},
                {name: '11', title: ''},
                {name: '12', title: ''},
                {name: '13', title: ''},
                {name: '14', title: ''}
            ]
        ]
    ];

    for(var i = 0 ; i < images.length ; i++)
    {
        for(var j = 0 ; j < images[i].length ; j++)
        {
            for(var k = 0 ; k < images[i][j].length ; k++)
            {
                var dir = paths.dirs[i];
                images[i][j][k].name += ".jpg";
                images[i][j][k].path = paths.relativePath + dir.dir;

                if(dir.subdirs !== undefined)
                {
                    images[i][j][k].path += '/' + dir.subdirs[j];
                }
            }
        }
    }

    var title;

    if(projectId !== undefined)
    {
        $scope.images = images[typeId][projectId];
        title = paths.dirs[typeId].labels[projectId];
        var projectName = "";
        $scope.returnUrl = "#/type/" + typeId;

        switch (parseInt(typeId))
        {
            case 0:
                projectName = "architektura";
                break;
            case 1:
                projectName = "pawilony";
                break;
            case 2:
                projectName = "urbanistyka";
                break;
            case 5:
                projectName = "inne";
                break;
        }

        $scope.returnUrlTitle = projectName;
    }
    else
    {
        $scope.images = images[typeId][0];
        title = paths.dirs[typeId].dir;
        $scope.returnUrl = "#/";
        $scope.returnUrlTitle = "strona główna";
    }

    var array = title.split(".");

    if (array.length > 1)
    {
        $scope.title = array[1];
    }
    else
    {
        $scope.title = title;
    }

    $scope.currentImg = function (n)
    {
        currentImg(n);
    };
    $scope.changeVisibility = function (n)
    {
        if(n === 1)
        {
            var x = document.getElementsByClassName("slideshow");
            $(x[0]).fadeIn("slow");
        }
    };
    $scope.changeOpacity = function (n)
    {
        if(n === 1)
        {
            var dots = document.getElementsByClassName("miniature");
            dots[0].style.opacity = "1";
        }
    };
}]);

var slideIndex = 1;
var timeout;

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideshow");
    var dots = document.getElementsByClassName("miniature");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].style.opacity = "0.25";
    }
    if(x.length > 0) {
        $(x[slideIndex - 1]).fadeIn("slow");
    }
    if(dots.length > 0) {
        dots[slideIndex - 1].style.opacity = "1";
    }

    clearTimeout(timeout);
    timeout = setTimeout(carousel, 10000);
}

function carousel()
{
    var i;
    var x = document.getElementsByClassName("slideshow");
    var dots = document.getElementsByClassName("miniature");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    if(x.length > 0){
        $(x[slideIndex-1]).fadeIn("slow");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].style.opacity = "0.25";
    }
    if(dots.length > 0) {
        dots[slideIndex - 1].style.opacity = "1";
    }
    timeout = setTimeout(carousel, 15000);
}

carousel();

function currentImg(n) {
    showDivs(slideIndex = n);
}
