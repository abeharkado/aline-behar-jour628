var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#FABB91",
                backgroundColor: "#FABB91",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#9D91FA",
                backgroundColor: "#9D91FA",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#523D2F",
                backgroundColor:"#523D2F",
                borderWidth:2,
                
              }, {
                data: [
                    {x: 68.3, y: 5878},
                    ],
                    label: "Indonesia",
                    borderColor: "#ffa500",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
              }, {
                data: [
                    {x: 71.9, y: 11461},
                    ],
                    label: "Brazil",
                    borderColor: "#ffa500",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
              }, {
                data: [
                    {x: 65.4, y: 13173},
                    ],
                    label: "Russia",
                    borderColor: "#ffa500",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
              }, {
                data: [
                    {x: 62.6, y: 3366},
                    ],
                    label: "Pakistan",
                    borderColor: "#ffa500",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
              }, {
                data: [
                    {x: 65.8, y: 1632},
                    ],
                    label: "Bangladesh",
                    borderColor: "#ffa500",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
              }, {
                data: [
                    {x: 81.1, y: 32193},
                    ],
                    label: "Japan",
                    borderColor: "#ffa500",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
              }
            ]
          },
          options: {
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life expectancy'
                  }
              }
            }
          }
        });