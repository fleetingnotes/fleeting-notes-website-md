
```chart
type: bar
labels: []
series:
  - title: 
    data: []
tension: 0.2
width: 80%
labelColors: false
fill: false
beginAtZero: false
bestFit: false
bestFitTitle: undefined
bestFitNumber: 0
```


```dataviewjs 
const labels = ['One', 'Two', 'Three']; 
const data = [1, 2, 3]; 
const chartData = { type: 'bar', data: { labels: labels, datasets: [{ label: 'Numbers', data: data }] } } 
window.renderChart(chartData, this.container); 
```



