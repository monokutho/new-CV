var charts = [];

var chart1 = new Chartist.Pie('#chart-e1', {
    series: [{
        value: 174,
        className: 'ct-series-a',
    }, {
        value: 46,
        className: 'ct-series-b',
    }, {
        value: 0,
        className: 'ct-series-c',
  }],
    labels: ['', '']
}, {
    donut: true,
    donutWidth: 15,
    startAngle: 210,
    total: 260,
    showLabel: false,
    plugins: [
                        Chartist.plugins.fillDonut({
            items: [{
                content: '',
                position: 'bottom',
                offsetY: 0,
                offsetX: -2
                            }, {
                content: '<h6>JavaScript</h6>'
                            }]
        })
                    ],
});

var chart2 = new Chartist.Pie('#chart-e2', {
    series: [{
        value: 155,
        className: 'ct-series-a',
    }, {
        value: 65,
        className: 'ct-series-b',
    }, {
        value: 0,
        className: 'ct-series-c',
    }],
    labels: ['', '']
}, {
    donut: true,
    donutWidth: 15,
    startAngle: 210,
    total: 260,
    showLabel: false,
    plugins: [
                        Chartist.plugins.fillDonut({
            items: [{
                content: '',
                position: 'bottom',
                offsetY: 0,
                offsetX: -2
                            }, {
                content: '<h6>AngularJS</h6>'
                            }]
        })
                    ],
});

var chart3 = new Chartist.Pie('#chart-e3', {
    series: [{
        value: 200,
        className: 'ct-series-a',
    }, {
        value: 20,
        className: 'ct-series-b',
    }, {
        value: 0,
        className: 'ct-series-c',
    }],
    labels: ['', '']
}, {
    donut: true,
    donutWidth: 15,
    startAngle: 210,
    total: 260,
    showLabel: false,
    plugins: [
                        Chartist.plugins.fillDonut({
            items: [{
                content: '',
                position: 'bottom',
                offsetY: 0,
                offsetX: -2
                            }, {
                content: '<h4>GIT</h4>'
                            }]
        })
                    ],
});

var chart4 = new Chartist.Pie('#chart-e4', {
    series: [{
        value: 174,
        className: 'ct-series-a',
    }, {
        value: 46,
        className: 'ct-series-b',
    }, {
        value: 0,
        className: 'ct-series-c',
    }],
    labels: ['', '']
}, {
    donut: true,
    donutWidth: 15,
    startAngle: 210,
    total: 260,
    showLabel: false,
    plugins: [
                        Chartist.plugins.fillDonut({
            items: [{
                content: '',
                position: 'bottom',
                offsetY: 10,
                offsetX: -2
                            }, {
                content: '<h4>HTML</h4>'
                            }]
        })
                    ],
});

var chart5 = new Chartist.Pie('#chart-e5', {
    series: [{
        value: 110,
        className: 'ct-series-a',
    }, {
        value: 110,
        className: 'ct-series-b',
    }, {
        value: 0,
        className: 'ct-series-c',
    }],
    labels: ['', '']
}, {
    donut: true,
    donutWidth: 15,
    startAngle: 210,
    total: 260,
    showLabel: false,
    plugins: [
                        Chartist.plugins.fillDonut({
            items: [{
                content: '',
                position: 'bottom',
                offsetY: 10,
                offsetX: -2
                            }, {
                content: '<h5>Node.js</h5>'
                            }]
        })
                    ],
});

var chart6 = new Chartist.Pie('#chart-e6', {
    series: [{
        value: 40,
        className: 'ct-series-a',
    }, {
        value: 180,
        className: 'ct-series-b',
    }, {
        value: 0,
        className: 'ct-series-c',
    }],
    labels: ['', '']
}, {
    donut: true,
    donutWidth: 15,
    startAngle: 210,
    total: 260,
    showLabel: false,
    plugins: [
                        Chartist.plugins.fillDonut({
            items: [{
                content: '',
                position: 'bottom',
                offsetY: 10,
                offsetX: -2
                            }, {
                content: '<h6>Grunt&Gulp</h6>'
                            }]
        })
                    ],
});

var chart7 = new Chartist.Pie('#chart-e7', {
    series: [{
        value: 174,
        className: 'ct-series-a',
    }, {
        value: 46,
        className: 'ct-series-b',
    }, {
        value: 0,
        className: 'ct-series-c',
    }],
    labels: ['', '']
}, {
    donut: true,
    donutWidth: 15,
    startAngle: 210,
    total: 260,
    showLabel: false,
    plugins: [
                        Chartist.plugins.fillDonut({
            items: [{
                content: '',
                position: 'bottom',
                offsetY: 10,
                offsetX: -2
                            }, {
                content: '<h4>CSS</h4>'
                            }]
        })
                    ],
});

var chart8 = new Chartist.Pie('#chart-e8', {
    series: [{
        value: 170,
        className: 'ct-series-a',
    }, {
        value: 50,
        className: 'ct-series-b',
    }, {
        value: 0,
        className: 'ct-series-c',
    }],
    labels: ['', '']
}, {
    donut: true,
    donutWidth: 15,
    startAngle: 210,
    total: 260,
    showLabel: false,
    plugins: [
                        Chartist.plugins.fillDonut({
            items: [{
                content: '',
                position: 'bottom',
                offsetY: 10,
                offsetX: -2
                            }, {
                content: '<h6>Bootstrap</h6>'
                            }]
        })
                    ],
});

var chart9 = new Chartist.Pie('#chart-e9', {
    series: [{
        value: 120,
        className: 'ct-series-a',
    }, {
        value: 100,
        className: 'ct-series-b',
    }, {
        value: 0,
        className: 'ct-series-c',
    }],
    labels: ['', '']
}, {
    donut: true,
    donutWidth: 15,
    startAngle: 210,
    total: 260,
    showLabel: false,
    plugins: [
                        Chartist.plugins.fillDonut({
            items: [{
                content: '',
                position: 'bottom',
                offsetY: 10,
                offsetX: -2
                            }, {
                content: '<h6>Yo&Yoeman</h6>'
                            }]
        })
                    ],
});

var chart10 = new Chartist.Pie('#chart-e10', {
    series: [{
        value: 140,
        className: 'ct-series-a',
    }, {
        value: 80,
        className: 'ct-series-b',
    }, {
        value: 0,
        className: 'ct-series-c',
    }],
    labels: ['', '']
}, {
    donut: true,
    donutWidth: 15,
    startAngle: 210,
    total: 260,
    showLabel: false,
    plugins: [
                        Chartist.plugins.fillDonut({
            items: [{
                content: '',
                position: 'bottom',
                offsetY: 10,
                offsetX: -2
                            }, {
                content: '<h5>jQuery</h5>'
                            }]
        })
                    ],
});

var chart11 = new Chartist.Pie('#chart-e11', {
    series: [{
        value: 70,
        className: 'ct-series-a',
    }, {
        value: 150,
        className: 'ct-series-b',
    }, {
        value: 0,
        className: 'ct-series-c',
    }],
    labels: ['', '']
}, {
    donut: true,
    donutWidth: 15,
    startAngle: 210,
    total: 260,
    showLabel: false,
    plugins: [
                        Chartist.plugins.fillDonut({
            items: [{
                content: '',
                position: 'bottom',
                offsetY: 10,
                offsetX: -2
                            }, {
                content: '<h6>MongoDB</h6>'
                            }]
        })
                    ],
});

var chart12 = new Chartist.Pie('#chart-e12', {
    series: [{
        value: 200,
        className: 'ct-series-a',
    }, {
        value: 20,
        className: 'ct-series-b',
    }, {
        value: 0,
        className: 'ct-series-c',
    }],
    labels: ['', '']
}, {
    donut: true,
    donutWidth: 15,
    startAngle: 210,
    total: 260,
    showLabel: false,
    plugins: [
                        Chartist.plugins.fillDonut({
            items: [{
                content: '',
                position: 'bottom',
                offsetY: 10,
                offsetX: -2
                            }, {
                content: '<h6>TortoiseSVN</h6>'
                            }]
        })
                    ],
});

charts.push(chart1, chart2, chart3, chart4, chart5, chart6, chart7, chart8, chart9, chart10, chart11, chart12);

function drawCharts(item) {

    item.on('draw', function (data) {
        if (data.type === 'slice' && data.index == 0) {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();
            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 3200,
                    from: -pathLength + 'px',
                    to: '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                    fill: 'freeze'
                }
            };

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually
            // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
            data.element.animate(animationDefinition, true);
        }
    });

}

charts.forEach(drawCharts);