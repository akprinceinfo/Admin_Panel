// this is owl - carousel js 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,

    items: 3,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// Chart javascript
new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
        labels: ["oct", "Mar", "Jun", "Aug"],
        datasets: [{
                label: "Europe",
                type: "line",
                borderColor: "#8e5ea2",
                data: [408, 547, 675, 734],
                fill: false
            }, {
                label: "Africa",
                type: "line",
                borderColor: "#3e95cd",
                data: [133, 221, 783, 2478],
                fill: false
            }, {
                label: "Europe",
                type: "bar",
                backgroundColor: "rgba(0,0,0,0.2)",
                data: [408, 547, 675, 734],
            },
            {
                label: "Europe",
                type: "bar",
                backgroundColor: "rgba(0,0,0,0.2)",
                data: [408, 547, 675, 734],
            },
            {
                label: "Africa",
                type: "bar",
                backgroundColor: "rgba(0,0,0,0.2)",
                backgroundColorHover: "#3e95cd",
                data: [133, 221, 783, 2478]
            }
        ]
    },
    options: {
        title: {
            display: true,
            // text: 'Population growth (millions): Europe & Africa'
        },
        legend: {
            display: false
        }
    }
});


// content - right - bottom chart
new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
        labels: ["Graphics", "Theme", "Template"],
        datasets: [{
            label: "Africa",
            backgroundColor: "#3e95cd",
            data: [133, 221, 783]
        }, {
            label: "Europe",
            backgroundColor: "#8e5ea2",
            data: [408, 547, 675]
        }]
    },
    options: {
        title: {
            display: true,
            text: ''
        }
    }
});