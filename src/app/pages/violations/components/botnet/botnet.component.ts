/**
 * Created by kjhaveri on 6/6/2017.
 */
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BotnetService } from './botnet.service';

import {Component, EventEmitter, Input, OnInit, Output, OnChanges, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3'
import * as dc from 'dc'

@Component({
  selector: 'botnet',
  templateUrl: './botnet.html',
  styleUrls: ['./botnet.scss'],
  providers: [BotnetService]
})

export class Botnet implements OnInit{
  data;

  constructor(private service: BotnetService) {

  }
  ngOnInit() {
    /* this.service.getData()
     .then(userProfiles => this.userProfiles = userProfiles);*/
    this.service.getData().then((data) => {

      this.data = data;
      //this.createChart();

    });

  }

  /*createChart(){
      margin = {top: 20, right: 95, bottom: 10, left: 125},
      width = 970 - margin.left - margin.right,
      height,
      tickExtension = 20; // extend grid lines beyond scale range

    let
      formatPercent = d3.format(".0%"),
      formatTenthPercent = d3.format(".1%"),
      formatNumber    let
      = d3.format(",.3s"),
      formatDollars = function(d) { return (d < 0 ? "-" : "") + "" + formatNumber(Math.abs(d)).replace(/G/, ""); };

    let nameAll = "Heat Map";

    let x = d3.scale.linear()
      .domain([0, .6])
      .rangeRound([0, width - 60])
      .clamp(true)
      .nice();

    let y = d3.scale.ordinal();

    let y0 = d3.scale.ordinal()
      .domain([nameAll])
      .range([150]);

    let r = d3.scale.sqrt()
      .domain([0, 1e9])
      .range([0, 1]);

    let z = d3.scale.threshold()
      .domain([.1, .2, .3, .4, .5])
      .range(["#ffebe6","#ffd6cc","#ffad99","#ff8566","#ff471a","#801a00"].reverse());
    //.range(["#b35806", "#f1a340", "#fee0b6", "#d8daeb", "#998ec3", "#542788"].reverse());

    let xAxis = d3.svg.axis()
      .scale(x)
      .orient("top")
      .ticks(5)
      .tickFormat(formatPercent);

    let yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickSize(-width + 60 - tickExtension * 2, 0)
      .tickPadding(6);

    let quadtree = d3.geom.quadtree()
      .x(function(d) { return d.x; })
      .y(function(d) { return d.y; });

    let svg = d3.select(".g-graphic").append("svg")
      .attr("height", 420 + margin.top + margin.bottom)
      .attr("width", width + margin.left + margin.right)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.select(".g-graphic").append("svg")
      .style("margin-top", "20px")
      .attr("height", 80)
      .attr("width", width + margin.left + margin.right)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .call(renderChartKey);

    let gx = svg.append("g")
      .attr("class", "g-x g-axis")
      .call(xAxis);

    let tickLast = gx.selectAll(".g-x .tick:last-of-type");

    let tickLast.select("text")
      .text(function() { return "\u2265 " + this.textContent; });

    tickLast.select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
      .attr("transform", "translate(" + width + ",0)")
      .select("text")
      .text("N.A.");

    var titleX = gx.append("text")
      .attr("class", "g-title")
      .attr("y", -9)
      .style("text-anchor", "end");

    titleX.append("tspan")
      .attr("x", -20)
      .style("font-weight", "bold")
      .text("Regularity Rate");

    titleX.append("tspan")
      .attr("x", -20)
      .attr("dy", "1em")
      .text("Low to High");

  }*/

  /*transformData(){


  }*/






}
