var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2007', '2008', '2009', '2010', '2011', '2012','2013','2014','2015','2016','2017'],
        datasets: [{
            label: 'Female',
            data: [2,4,6,6,4,3,6,6,7,4,6],
            fill: true,
            borderColor: '#EB38B6',
            backgroundColor: 'rgba(235, 56, 182, 0.3)',
            tension: 0.1},
        {
            label: 'Male',
            data: [8,6,4,4,6,7,4,4,3,6,4] 
            ,
            fill: true,
            borderColor: '#5838EB',
            backgroundColor: 'rgba(88, 56, 235, 0.3)',
            
            tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Count of NYT best books by gender',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'In the last 10 years, the number of best books written by male or femal authors recognized by the NYT has fluctuated.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});