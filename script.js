/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end


var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

series.accuracy = 4;
series.step = 15;
series.rotationThreshold = 0.7;
series.maxCount = 200;
series.minWordLength = 2;
series.labels.template.tooltipText = "{word}: {value}";
series.fontFamily = "Courier New";
series.maxFontSize = am4core.percent(30);

series.text = "In the meeting, Jose Brockman from IBM discussed issues related to the analysis of a dataset, specifically focusing on the level of discretization and its impact on the data. A critical problem was identified: the evaluation of the downstream classifier was mistakenly conducted on the training data, compromising the validity of the analysis. The team discussed rectifying this by establishing a consistent evaluation protocol to avoid information leakage from the training into the test data. They also considered the need to replicate and review the results to ensure their accuracy. The high score of 95% achieved earlier was questioned, as it might have resulted from testing on the training data. The objective was to ensure that future analysis and testing protocols are correct and reliable, avoiding the issues encountered in the past."; 