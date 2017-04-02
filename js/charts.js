const mainTraffic = document.getElementById('mainChart');
let mainTrafficChart = new Chart(mainTraffic, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10','11-17', '18-24','25-31'],
        datasets: [{
            data: [500, 1500, 1000, 1500, 1500, 2000, 1000, 1500, 1000, 500, 500],
            borderWidth: 1,
            tension: 0,
            backgroundColor: 'rgba(109, 170, 173, 0.25)',
            responsive: true,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {display: false}
    }

});

const dailyTraffic = document.getElementById('dailyChart');
let dailyTrafficChart = new Chart(dailyTraffic, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 100, 200, 125, 150, 200, 300],
            borderWidth: 1,
            tension: 0,
            backgroundColor: 'rgba(109, 170, 173, 0.25)',
            responsive: true,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {display: false}
    }

});

const mobileTraffic = document.getElementById('mobileChart');
let mobileTrafficChart = new Chart(mobileTraffic, {
  type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            data: [15,15, 70],
            borderWidth: 1,
            backgroundColor: [
              'rgb(109, 170, 173)',
              'rgb(52, 91, 93)',
              'rgb(60, 100, 125)'
            ]
        }]
    },
    options: {
        legend: {display: true,
                 position: 'right',
                 labels: {boxWidth:  15,}
               },
        cutoutPercentage:  60,
        responsive: true,
        mainAspectRatio:false,
    }
});
