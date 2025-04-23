var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 3.7, y: 10259},
                ],
                label: "Autumn",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 3.8, y: 27086},
                ],
                label: "Exit West",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
                
              },  { //fiction
                data: [
                  {x:4.2 , y:10929 },
                ],
                label: "Pachinko",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
                
              },
              { //fiction
                data: [
                  {x:3.9 , y:16655 },
                ],
                label: "The Power",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
                
              }, { //fiction
                data: [
                  {x:4.1 , y:7033 },
                ],
                label: "Sing, Unburied, Sing",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
                
              }, { //nonfiction
                data: [
                {x: 4.1, y: 147},
                ],
                label: "The Evolution of Beauty: How Darwin's Forgotten Theory of Mate Choice Shapes the Animal World - And Us",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { //nonfiction
                data: [
                {x: 4.6, y: 569},
                ],
                label: "Grant",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { //nonfiction
                data: [
                {x: 4.3, y: 254},
                ],
                label: "Locking Up Our Own: Crime and Punishment in Black America",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { //nonfiction
                data: [
                {x: 4.3, y: 89},
                ],
                label: "Prairie Fires: The American Dreams of Laura Ingalls Wilder",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { //nonfiction
                data: [
                {x: 3.9, y: 2415},
                ],
                label: "Priestdaddy: A Memoir",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { //fiction
                data: [
                  {x:3.6 , y:6788 },
                ],
                label: "The Association of Small Bombs",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
                
              }, { //fiction
                data: [
                  {x: 4 , y:12646 },
                ],
                label: "The North Water",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
                
              }, { //fiction
                data: [
                  {x: 4, y: 82601},
                ],
                label: "The Underground Railroad",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
                
              }, { //fiction
                data: [
                  {x:3.6 , y:34421},
                ],
                label: "The Vegetarian",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
                
              }, { //fiction
                data: [
                  {x:3.9 , y:4240 },
                ],
                label: "War and Turpentine",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
                
              },
              { //nonfiction
                data: [
                {x: 4.2, y: 2886},
                ],
                label: "At the Existentialist Caf√å¬©: Freedom, Being, and Apricot Cocktails",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { //nonfiction
                data: [
                {x: 4.3, y: 7622},
                ],
                label: "Dark Money: The Hidden History of the Billionaires Behind the Rise of the Radical Right",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { //nonfiction
                data: [
                {x: 4.5, y: 15452},
                ],
                label: "Evicted: Poverty and Profit in the American City",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { //nonfiction
                data: [
                {x: 4, y: 1520},
                ],
                label: "In the Darkroom",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { //nonfiction
                data: [
                {x: 4.2, y: 2123},
                ],
                label: "The Return: Fathers, Sons, and the Land in Between",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'NYT best books ratings',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Fiction books had higher rating counts but usually lower ratings than Nonfiction books.'
            }
        },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Count of Ratings'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Rating'
                  }
              }
            }
          }
        });