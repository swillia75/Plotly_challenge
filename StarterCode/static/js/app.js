//Read json file using d3
d3.json("data/samples.json").then(function(data) {
    console.log(data);

    var names = Object.values(data.names);
    var metadata = Object.values(data.metadata);
    var samples = Object.values(data.samples);

    
    console.log(names);
    console.log(metadata);
    console.log(samples);
 
      
    var otuId = samples.map(function(samples) {
       return samples.otu_ids;
     });

    console.log(otuId);
    
    var otuCount = samples.map(function(samples) {
        return samples.sample_values;
      });
 
     console.log(otuCount);
    
//    
    var sampleValue = []
    var otuIds =[]

    
    for (var i = 0; i < otuId.length; i++) {
        var sliced = otuId[i].slice(0, 10);
         otuIds.push(sliced);
    };
    
    
    console.log(otuIds);

    for (var i = 0; i < otuCount.length; i++) {
        var slice = otuCount[i].slice(0, 10);
         sampleValue.push(slice);
    };
    
    
    console.log(sampleValue);


    var trace1 = {
        x: sampleValue[0],
        y: otuIds[0],
        type: "bar",
        name: "BellyBotton Biodiversity",
        orientation: "h"
       
    };
    
      // Create the data array for the plot
    var data = [trace1];
    
      // Define the plot layout
    var layout = {
        title: "BellyBotton Biodiversity",
        xaxis: { title: "Count" },
        yaxis: { title: "Otu ID" }
    };
    
      // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("bar", data, layout);
});    




// // // var slicedSamples = samples.slice(0, 10);

// // // console.log(slicedSamples);
// // // // var otuID = sample.otu_ids
// // // // var otuCounts
