var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2007', '2008', '2009', '2010', '2011', '2012','2013','2014','2015','2016','2017'],
        datasets: [{
            label: 'Fiction',
            data: [3.7, 3.84, 3.5, 3.88, 3.68, 3.8, 3.88, 3.86, 3.98, 3.82, 3.94],
            backgroundColor: [
                '#ff0800'
            ]
        },
        {
            label: 'Non-fiction',
            data: [3.825, 4.04, 4.06, 4.12, 4.08, 4.1, 4, 4.04, 4.1, 4.24, 4.24],
            backgroundColor: [
                '#FFA500'
            ],
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'NYT best books by genre',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The NYT rated non-fiction books higher than fiction books over the years.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});