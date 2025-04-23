var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#1B4CFA",
                backgroundColor: "#1B4CFA",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#7A4B57",
                backgroundColor: "##7A4B57",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "U.S.",
                borderColor: "#A58D49",
                backgroundColor:"#A58D49",
                borderWidth:2,
                
              }, {
                data: [
                    {x: 68.3, y: 5878},
                    ],
                    label: "Indonesia",
                    borderColor: "#49A556",
                    backgroundColor:"#49A556",
                    borderWidth:2,
              }, {
                data: [
                    {x: 71.9, y: 11461},
                    ],
                    label: "Brazil",
                    borderColor: "#495DA5",
                    backgroundColor:"#495DA5",
                    borderWidth:2,
              }, {
                data: [
                    {x: 65.4, y: 13173},
                    ],
                    label: "Russia",
                    borderColor: "#1BFA3B",
                    backgroundColor:"#1BFA3B",
                    borderWidth:2,
              }, {
                data: [
                    {x: 62.6, y: 3366},
                    ],
                    label: "Pakistan",
                    borderColor: "#FA1B51",
                    backgroundColor:"#FA1B51",
                    borderWidth:2,
              }, {
                data: [
                    {x: 65.8, y: 1632},
                    ],
                    label: "Bangladesh",
                    borderColor: "#FABF1B",
                    backgroundColor:"#FABF1B",
                    borderWidth:2,
              }, {
                data: [
                    {x: 81.1, y: 32193},
                    ],
                    label: "Japan",
                    borderColor: "#BA4361",
                    backgroundColor:"#BA4361",
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