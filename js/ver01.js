
//проверяем условия
function gener(el) {
    let generatedValue;
    if (el >= 2)
        generatedValue = 3;
    if (el > 0 && el < 2)
        generatedValue = 2;
    if (el == 0)
        generatedValue = 1;
    return generatedValue;
};
//создаем объект где ключ-результат условия, а свойства - соответсующее условию значение
const objColor = {
    1: '#e03636',
    2: '#9ba805',
    3: '#3eb051'
}
//забираем коллекции
const time = document.querySelectorAll('.time');
const stat = document.querySelectorAll('.bg_stat');

//запускаем рандом
function math() {
    return Math.floor(Math.random() * 10);
}
function runTires() {
    return Math.floor(Math.random() * 10000);
}
const funcRandom = () => {
    arrD = Array(36).fill(0).map(math);
    arrT = Array(36).fill(0).map(math);
    arr729D = arrD.slice(0, 4);
    arr730D = arrD.slice(4, 10);
    arr731D = arrD.slice(10, 18);
    arr732D = arrD.slice(18, 26);
    arr733D = arrD.slice(26, 36);
    arr729T = arrT.slice(0, 4);
    arr730T = arrT.slice(4, 10);
    arr731T = arrT.slice(10, 18);
    arr732T = arrT.slice(18, 26);
    arr733T = arrT.slice(26, 36);
    arrDalld = arrD.slice(0, 36);
    arrDallt = arrT.slice(0, 36);
    //Объект1
    const Obj729 = () => {
        const alls = document.querySelectorAll('.tiresD729');
        const allsT = document.querySelectorAll('.tiresT729');
        time[0].textContent = getNowtime();
        //добавляем итог в нужный div
        const logic729 = () => {
            alls.forEach(function (elem, index) {
                elem.textContent = arr729D[index] + '\nатм';
            })
            allsT.forEach(function (elem, index) {
                elem.textContent = arr729T[index] + '°C';
            })
            alls.forEach(function (elem, index) {
                elem.style.background = objColor[gener(arr729D[index])];
            })
            allsT.forEach(function (elem, index) {
                elem.style.background = objColor[gener(arr729T[index])];
            })
        }
        logic729();
        // добавляем статус машины
        const statGal = () => {
            stat[0].style.backgroundImage = "url(image/gal.png)";
        }
        const statEr = () => {
            stat[0].style.backgroundImage = "url(image/er.png)";
        }

        if (arr729D[0] >= 2 && arr729D[1] >= 2 && arr729D[2] >= 2 && arr729D[3] >= 2 &&
            arr729T[0] >= 2 && arr729T[1] >= 2 && arr729T[2] >= 2 && arr729T[3] >= 2) {
            statGal();
        } else {
            statEr();
        }
    }
    Obj729();
    //Объект 2
    const Obj730 = () => {
        const alls = document.querySelectorAll('.tiresD730');
        const allsT = document.querySelectorAll('.tiresT730');
        time[1].textContent = getNowtime();
        const logic730 = () => {
            alls.forEach(function (elem, index) {
                elem.textContent = arr730D[index] + '\nатм';
            })
            allsT.forEach(function (elem, index) {
                elem.textContent = arr730T[index] + '°C';
            })
            alls.forEach(function (elem, index) {
                elem.style.background = objColor[gener(arr730D[index])];
            })
            allsT.forEach(function (elem, index) {
                elem.style.background = objColor[gener(arr730T[index])];
            })
        }
        logic730();
        const statGal = () => {
            stat[1].style.backgroundImage = "url(image/gal.png)";
        }
        const statEr = () => {
            stat[1].style.backgroundImage = "url(image/er.png)";
        }
        if (arr730D[0] >= 2 && arr730D[1] >= 2 && arr730D[2] >= 2 && arr730D[3] >= 2 && arr730D[4] >= 2 && arr730D[5] >= 2 &&
            arr730T[0] >= 2 && arr730T[1] >= 2 && arr730T[2] >= 2 && arr730T[3] >= 2 && arr730T[4] >= 2 && arr730T[5] >= 2) {
            statGal();
        } else {
            statEr();
        }
    }
    Obj730();
    //Объект 3
    const Obj731 = () => {
        const alls = document.querySelectorAll('.tiresD731');
        const allsT = document.querySelectorAll('.tiresT731');
        time[2].textContent = getNowtime();
        const logic731 = () => {
            alls.forEach(function (elem, index) {
                elem.textContent = arr731D[index] + '\nатм';
            })
            allsT.forEach(function (elem, index) {
                elem.textContent = arr731T[index] + '°C';
            })
            alls.forEach(function (elem, index) {
                elem.style.background = objColor[gener(arr731D[index])];
            })
            allsT.forEach(function (elem, index) {
                elem.style.background = objColor[gener(arr731T[index])];
            })
        }
        logic731();
        const statGal = () => {
            stat[2].style.backgroundImage = "url(image/gal.png)";
        }
        const statEr = () => {
            stat[2].style.backgroundImage = "url(image/er.png)";
        }
        if (arr731D[0] >= 2 && arr731D[1] >= 2 && arr731D[2] >= 2 && arr731D[3] >= 2 && arr731D[4] >= 2
            && arr731D[5] >= 2 && arr731D[6] >= 2 && arr731D[7] >= 2 &&
            arr731T[0] >= 2 && arr731T[1] >= 2 && arr731T[2] >= 2 && arr731T[3] >= 2 && arr731T[4] >= 2
            && arr731T[5] >= 2 && arr731T[6] >= 2 && arr731T[7] >= 2) {
            statGal();
        } else {
            statEr();
        }
    }
    Obj731();
    //Объект 4
    const Obj732 = () => {
        const alls = document.querySelectorAll('.tiresD732');
        const allsT = document.querySelectorAll('.tiresT732');
        time[3].textContent = getNowtime();
        const logic732 = () => {
            alls.forEach(function (elem, index) {
                elem.textContent = arr732D[index] + '\nатм';
            })
            allsT.forEach(function (elem, index) {
                elem.textContent = arr732T[index] + '°C';
            })
            alls.forEach(function (elem, index) {
                elem.style.background = objColor[gener(arr732D[index])];
            })
            allsT.forEach(function (elem, index) {
                elem.style.background = objColor[gener(arr732T[index])];
            })
        }
        logic732();
        const statGal = () => {
            stat[3].style.backgroundImage = "url(image/gal.png)";
        }
        const statEr = () => {
            stat[3].style.backgroundImage = "url(image/er.png)";
        }
        if (arr732D[0] >= 2 && arr732D[1] >= 2 && arr732D[2] >= 2 && arr732D[3] >= 2 && arr732D[4] >= 2
            && arr732D[5] >= 2 && arr732D[6] >= 2 && arr732D[7] >= 2 &&
            arr732T[0] >= 2 && arr732T[1] >= 2 && arr732T[2] >= 2 && arr732T[3] >= 2 && arr732T[4] >= 2
            && arr732T[5] >= 2 && arr732T[6] >= 2 && arr732T[7] >= 2) {
            statGal();
        } else {
            statEr();
        }
    }
    Obj732();
    //Объект 5
    const Obj733 = () => {
        const alls = document.querySelectorAll('.tiresD733');
        const allsT = document.querySelectorAll('.tiresT733');
        time[4].textContent = getNowtime();
        const logic733 = () => {
            alls.forEach(function (elem, index) {
                elem.textContent = arr733D[index] + '\nатм';
            })
            allsT.forEach(function (elem, index) {
                elem.textContent = arr733T[index] + '°C';
            })
            alls.forEach(function (elem, index) {
                elem.style.background = objColor[gener(arr733D[index])];
            })
            allsT.forEach(function (elem, index) {
                elem.style.background = objColor[gener(arr733T[index])];
            })
        }
        logic733();
        const statGal = () => {
            stat[4].style.backgroundImage = "url(image/gal.png)";
        }
        const statEr = () => {
            stat[4].style.backgroundImage = "url(image/er.png)";
        }
        if (arr733D[0] >= 2 && arr733D[1] >= 2 && arr733D[2] >= 2 && arr733D[3] >= 2 && arr733D[4] >= 2
            && arr733D[5] >= 2 && arr733D[6] >= 2 && arr733D[7] >= 2 && arr733D[8] >= 2 && arr733D[9] >= 2 &&
            arr733T[0] >= 2 && arr733T[1] >= 2 && arr733T[2] >= 2 && arr733T[3] >= 2 && arr733T[4] >= 2
            && arr733T[5] >= 2 && arr733T[6] >= 2 && arr733T[7] >= 2 && arr733T[8] >= 2 && arr733T[9] >= 2) {
            statGal();
        } else {
            statEr();
        }
    }
    Obj733();
}
funcRandom();
setInterval(funcRandom, 5000)

//текущее время
function getNowtime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    if (now.getMonth() < 10) {
        month = "0" + month;
    }
    let date = now.getDate();
    if (now.getDate() < 10) {
        date = "0" + date;
    }
    let hours = now.getHours();
    if (now.getHours() < 10) {
        hours = "0" + hours;
    }
    let minutes = now.getMinutes();
    if (now.getMinutes() < 10) {
        minutes = "0" + minutes;
    }
    let seconds = now.getSeconds();
    if (now.getSeconds() < 10) {
        seconds = "0" + seconds;
    }
    let nowTime = (`${date}-${month}-${year}   ${hours}:${minutes}:${seconds}`);
    return nowTime;
}
function getNowtime1() {
    let now = new Date();
    let hours = now.getHours();
    if (now.getHours() < 10) {
        hours = "0" + hours;
    }
    let minutes = now.getMinutes();
    if (now.getMinutes() < 10) {
        minutes = "0" + minutes;
    }
    let seconds = now.getSeconds();
    if (now.getSeconds() < 10) {
        seconds = "0" + seconds;
    }
    let nowTime = (`${hours}:${minutes}:${seconds}`);
    return nowTime;
}
//логика чекбоксов
function change() {
    const checkboxes = document.querySelectorAll('.input');
    const chekboxInputs = Array.from(checkboxes);
    const allAreUnselected = chekboxInputs.every(function (elem) {
        return !elem.checked;
    });
    if (!allAreUnselected) {
        chekboxInputs.forEach(function (input) {
            Array.from(document.querySelectorAll("." + input.getAttribute("rel"))).forEach(function (item) {
                item.style.display = input.checked ? 'block' : 'none';
            });
        });
    } else {
        chekboxInputs.forEach(function (input) {
            Array.from(document.querySelectorAll("." + input.getAttribute("rel"))).forEach(function (item) {
                item.style.display = 'block';
            });
        });
    }
}
change();
//проваливаемся в колесо
const tires_link = document.querySelectorAll('.tires_link');
const arrTireslink = Array.from(tires_link);
arrTireslink.forEach(function (elem, index) {
    elem.addEventListener('click', tiresActive);
    function tiresActive() {
        arrTireslink.forEach(function (elem, index) {
            tD = document.querySelectorAll('.tiresD');
            tT = document.querySelectorAll('.tiresT');
            elem = tD[index].classList.remove('tiresActiveD');
            elem = tT[index].classList.remove('tiresActiveT');
        })
        tD = document.querySelectorAll('.tiresD');
        tT = document.querySelectorAll('.tiresT');
        elem = tD[index].classList.toggle('tiresActiveD');
        elem = tT[index].classList.toggle('tiresActiveT');
        check = document.querySelector('.check')
        check.style.display = 'none';
        dataActive = document.querySelector('.dataActive')
        dataActive.style.display = 'block';
        wCA = document.querySelector('.wrapper_containt')
        wCA.classList.add('wrapper_containt_active')
        grafik = document.querySelector('.grafik');
        grafik.style.display = 'block';
    }
    around();
});
//проверяем нажатую ссылку на соответсвие классу родителя и убираем не активные дивы
function around() {
    arrTireslink.forEach(function (elem) {
        elem.addEventListener('click', tiresActive2);
        function tiresActive2() {
            card = document.querySelectorAll('.card');
            for (let i = 0; i <= card.length; i++) {
                if (card[0] = elem.closest('.c2_2')) {
                    card[0].style.display = 'block';
                    card[1].style.display = 'none';
                    card[2].style.display = 'none';
                    card[3].style.display = 'none';
                    card[4].style.display = 'none';
                }
                if (card[1] = elem.closest('.c2_2_2')) {
                    card[1].style.display = 'block';
                    card[0].style.display = 'none';
                    card[2].style.display = 'none';
                    card[3].style.display = 'none';
                    card[4].style.display = 'none';
                }
                if (card[2] = elem.closest('.c2_4_2')) {
                    card[2].style.display = 'block';
                    card[0].style.display = 'none';
                    card[1].style.display = 'none';
                    card[3].style.display = 'none';
                    card[4].style.display = 'none';
                }
                if (card[3] = elem.closest('.c2_2_4')) {
                    card[3].style.display = 'block';
                    card[0].style.display = 'none';
                    card[1].style.display = 'none';
                    card[2].style.display = 'none';
                    card[4].style.display = 'none';
                }
                if (card[4] = elem.closest('.c2_4_4')) {
                    card[4].style.display = 'block';
                    card[0].style.display = 'none';
                    card[1].style.display = 'none';
                    card[2].style.display = 'none';
                    card[3].style.display = 'none';
                }
            }
        };
    })
}
//рандомная дата
function randomDate(start, end) {
    return new Date(start.getTime()
        + Math.random() * (end.getTime() - start.getTime()));
}
const date01 = randomDate(new Date(2010, 0, 1), new Date()); const date02 = randomDate(new Date(2010, 0, 1), new Date());
const date03 = randomDate(new Date(2010, 0, 1), new Date()); const date04 = randomDate(new Date(2010, 0, 1), new Date());
const date05 = randomDate(new Date(2010, 0, 1), new Date()); const date06 = randomDate(new Date(2010, 0, 1), new Date());
const date07 = randomDate(new Date(2010, 0, 1), new Date()); const date08 = randomDate(new Date(2010, 0, 1), new Date());
const date09 = randomDate(new Date(2010, 0, 1), new Date()); const date10 = randomDate(new Date(2010, 0, 1), new Date());
const date11 = randomDate(new Date(2010, 0, 1), new Date()); const date12 = randomDate(new Date(2010, 0, 1), new Date());
const date13 = randomDate(new Date(2010, 0, 1), new Date()); const date14 = randomDate(new Date(2010, 0, 1), new Date());
const date15 = randomDate(new Date(2010, 0, 1), new Date()); const date16 = randomDate(new Date(2010, 0, 1), new Date());
const date17 = randomDate(new Date(2010, 0, 1), new Date()); const date18 = randomDate(new Date(2010, 0, 1), new Date());
const date19 = randomDate(new Date(2010, 0, 1), new Date()); const date20 = randomDate(new Date(2010, 0, 1), new Date());
const date21 = randomDate(new Date(2010, 0, 1), new Date()); const date22 = randomDate(new Date(2010, 0, 1), new Date());
const date23 = randomDate(new Date(2010, 0, 1), new Date()); const date24 = randomDate(new Date(2010, 0, 1), new Date());
const date25 = randomDate(new Date(2010, 0, 1), new Date()); const date26 = randomDate(new Date(2010, 0, 1), new Date());
const date27 = randomDate(new Date(2010, 0, 1), new Date()); const date28 = randomDate(new Date(2010, 0, 1), new Date());
const date29 = randomDate(new Date(2010, 0, 1), new Date()); const date30 = randomDate(new Date(2010, 0, 1), new Date());
const date31 = randomDate(new Date(2010, 0, 1), new Date()); const date32 = randomDate(new Date(2010, 0, 1), new Date());
const date33 = randomDate(new Date(2010, 0, 1), new Date()); const date34 = randomDate(new Date(2010, 0, 1), new Date());
const date35 = randomDate(new Date(2010, 0, 1), new Date()); const date36 = randomDate(new Date(2010, 0, 1), new Date());
const arrDates = [date01, date02, date03, date04, date05, date06, date07, date08, date09, date10, date11,
    date12, date13, date14, date15, date16, date17,
    date18, date19, date20, date21, date22, date23, date24, date25, date26, date27,
    date28, date29, date30, date31, date32, date33, date34, date35, date36];
function dataVunc() {
    arData = [];
    arrDates.forEach((elem) => {
        ar = (`${elem.getFullYear()}-${('0' + (elem.getMonth() + 1)).slice(-2)}-${('0' + elem.getDate()).slice(-2)}`);
        arData.push(ar);
        return arData;
    })
}
dataVunc()
const arrAll1 = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
const arrAll2 = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

arrTireslink.forEach((elem, index) => {
    elem.addEventListener('click', tiresLinkfunc);
    function tiresLinkfunc() {
        const dataMade = document.querySelector('.data_made');
        const probeg = document.querySelector('.probeg');
        const runShine = Array(36).fill(0).map(runTires);
        function tiresActivedatchik() {
            elem = runShine[index];
            probeg.textContent = elem + ' ' + 'км';
        }
        tiresActivedatchik();
        function dataMadefunc() {
            elem = arData[index];
            dataMade.textContent = elem;
        }
        dataMadefunc();
        function tiresGrafik() {
            elem = arrAll1[index];
            davl = elem;
            elem = arrAll2[index];
            davl2 = elem;
        }
        tiresGrafik(arrAll1)
        tiresGrafik(arrAll2)
    }
    tiresLinkfunc();
});
//кладем значения в каждое колесо
arrTime = [];
function go() {
    arrTime.push(getNowtime1());
    arrDalld.forEach((el, index) => {
        arrAll1[index].push(el);
    })
    arrDallt.forEach((el, index) => {
        arrAll2[index].push(el);
    })
    return arrAll1, arrAll2;
}
go();
setInterval(go, 5000);

//графики
Chart.register(ChartDataLabels);
myChartg = new Chart(myChartg, {
    type: 'line',
    data: {
        datasets: [{
            data: davl,
            label: 'Давление',
            fill: false,
            borderColor: 'lightgreen',
            yAxisID: 'left-y-axis'
        }, {
            data: davl2,
            label: 'Температура',
            fill: false,
            borderColor: 'lightblue',
            yAxisID: 'right-y-axis'
        }],
        labels: arrTime
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20,
                    },
                    color: 'gray'
                }
            }
        },
        scales: {
            'left-y-axis': {
                type: 'linear',
                position: 'left',
                min: 0,
                max: 12,
                ticks: {
                    font: {
                        size: 18,
                    }
                }
            },
            'right-y-axis': {
                type: 'linear',
                position: 'right',
                min: 0,
                max: 10,
                ticks: {
                    font: {
                        size: 18,
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 10
                    }
                }
            }
        },
    }
});
const upDia = () => {
    myChartg.data.datasets[0].data = davl;
    myChartg.data.datasets[1].data = davl2;
    myChartg.update();
}
setInterval(upDia, 100);


