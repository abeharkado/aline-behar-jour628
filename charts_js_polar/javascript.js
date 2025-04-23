var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Care for household members',
              'Personal care',
              'Shopping',
              'Eating and drinking',
              'TV and Radio',
              'Housework',
              'Other leisure activities'
            ],
            datasets: [{
              label: 'Time Use',
              data: [23, 52, 20, 100, 127, 103, 53],
              backgroundColor: [
                '#EBAC3F',
                '#526B5D',
                '#A63FEB',
                '#40EA89',
                '#59AB7C',
                '#96805A',
                '#7E5A96'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: ''
              }
            }
          }
        });