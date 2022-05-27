
function mathV() {
    return Math.floor(Math.random() * 10);
}
mathV();
function dashDav() {
    const arrDall = Array(36).fill(0).map(mathV);
    countRed = 0;
    countYellow = 0;
    countGreen = 0;
    arrDall.forEach((elem) => {
        if (elem === 0) {
            countRed++
        }
        if (elem > 0 && elem < 2) {
            countYellow++
        }
        if (elem >= 2) {
            countGreen++
        }
    })
    resultRed = Math.round(countRed / arrDall.length * 100);
    resultYellow = Math.round(countYellow / arrDall.length * 100);
    resultGreen = Math.round(countGreen / arrDall.length * 100);
    return arrDash = [resultRed, resultYellow, resultGreen];
}
dashDav()
setInterval(dashDav, 5000);


Chart.register(ChartDataLabels);

const ctx = document.getElementById('myChart').getContext('2d');
chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Большое отклонение',
            'Незначительные отклонения',
            'В Норме'
        ],
        datasets: [{
            label: 'Дашбоард',
            data: arrDash,
            backgroundColor: [
                '#e03636',
                '#9ba805',
                '#3eb051'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            datalabels: {
                color: '#423737',
                textAlign: 'center',
                font: {
                    size: 20,
                    lineHeight: 1.6
                },
                formatter: function (value) {
                    return value + '%';
                }
            }
        }
    }
});

const upDav = () => {
    chart.data.datasets[0].data = arrDash;
    chart.update();
}
setInterval(upDav, 1000);

function dashDat() {
    const arrDall = Array(36).fill(0).map(mathV);
    countJob = 0;
    countError = 0;
    arrDall.forEach((elem) => {
        if (elem === 0) {
            countJob++
        }
        if (elem > 0) {
            countError++
        }
    })
    resultJob = Math.round(countJob / arrDall.length * 100);
    resultError = Math.round(countError / arrDall.length * 100);
    return arrDashdat = [resultJob, resultError];
}
dashDat()
setInterval(dashDat, 5000);

const ctx2 = document.getElementById('myChart2').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: [
            'Нет данных от датчиков',
            'Работающие датчики'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: arrDashdat,
            backgroundColor: [
                'gray',
                '#3eb051'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            datalabels: {
                color: '#423737',
                textAlign: 'center',
                font: {
                    size: 20,
                    lineHeight: 1.6
                },
                formatter: function (value) {
                    return value + '%';
                }
            }
        }
    }
});

const upDat = () => {
    chart2.data.datasets[0].data = arrDashdat;
    chart2.update();
}
setInterval(upDat, 5000);