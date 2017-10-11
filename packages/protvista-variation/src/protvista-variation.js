import * as d3 from 'd3';
import { processVariants } from './dataTransformer';
import VariationPlot from './variationPlot';

const aaList = ['G', 'A', 'V', 'L', 'I', 'S', 'T', 'C', 'M', 'D', 'N', 'E', 'Q', 'R', 'K', 'H', 'F', 'Y', 'W', 'P', 'd', '*'];

class ProtvistaVariation extends HTMLElement {

    constructor() {
        super();
        this._accession = this.getAttribute('accession');
        this._length = parseInt(this.getAttribute('length'));
        this._start = parseInt(this.getAttribute('start')) || 1;
        this._end = parseInt(this.getAttribute('end')) || this._length;
        this._highlightStart = parseInt(this.getAttribute('highlightStart'));
        this._highlightEnd = parseInt(this.getAttribute('highlightEnd'));
        this._height = 430;
        this._width = this.getAttribute('width') ? parseInt(this.getAttribute('width')) : 700;
        this._margin = {
            top: 20,
            right: 10,
            bottom: 10,
            left: 10
        }
        this._xScale = d3.scaleOrdinal();
        this._yScale = d3.scaleLinear();

        this.render = this.render.bind(this);
        this.createDataSeries = this.createDataSeries.bind(this);
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
        :host {
            display: block;
        }
        </style>
        <slot></slot>
        `;
    }

    get width() {
        return this._width;
    }

    set width(width) {
        this._width = width;
    }

    static get observedAttributes() {
        return ['start', 'end', 'highlightStart', 'highlightEnd', 'width'];
    }

    connectedCallback() {
        this.addEventListener('load', d => {
            this._length = d.detail.payload.sequence.length;
            this.render(
                processVariants(d.detail.payload.features, d.detail.payload.sequence))
        });
    }

    attributeChangedCallback(attrName, oldVal, newVal) {}

    render(data) {;
        this._xScale = d3.scaleLinear()
            .domain([1, this._length + 1])
            .range([this._margin.left, this._width - this._margin.right]);

        // scale for Amino Acids
        this._yScale = d3.scalePoint()
            .domain(aaList)
            .range([0, this._height - this._margin.top - this._margin.bottom]);

        // xScale is the one about position

        // Create the SVG
        const svg = d3.select(this.shadowRoot).append('svg')
            .attr('width', this._width)
            .attr('height', this._height);

        // create the variation plot function to be called by the series?
        const variationPlot = new VariationPlot(this._xScale, this._yScale, this._length);

        // Not sure what happens here, but it seems to set the scales on the variation plot
        // var series = 
        variationPlot.xScale = this._xScale;
        variationPlot.yScale = this._yScale;

        // Create the visualisation here
        var dataSeries = this.createDataSeries(svg, data, variationPlot.drawVariationPlot);
    }

    createDataSeries(svg, features, series) {

        // Group for the main chart
        var mainChart = svg.append('g')
            .attr('transform', 'translate(0,' + this._margin.top + ')');

        // clip path prevents drawing outside of it
        var chartArea = mainChart.append('g')
            .attr('clip-path', 'url(#plotAreaClip)');

        mainChart.append('clipPath')
            .attr('id', 'plotAreaClip')
            .append('rect')
            .attr('width', (this._width - 20))
            .attr('height', this._height)
            .attr('transform', 'translate(10, -10)');

        // This is calling the data series render code for each of the items in the data
        var dataSeries = chartArea
            .datum(features)
            .call(series);

        // This is the AA axis on left
        var yAxis = d3.axisLeft()
            .scale(this._yScale)
            .tickSize(-this._width);

        // This is the AA axis on right
        var yAxis2 = d3.axisRight()
            .scale(this._yScale);

        // Adding AA axis left
        mainChart.append('g')
            .attr('transform', 'translate(12 ,0)')
            .attr('class', 'variation-y axis')
            .call(yAxis);

        // Adding AA axis right
        mainChart.append('g')
            .attr('transform', 'translate(' + (this._width - 18) + ', 0)')
            .attr('class', 'variation-y axis')
            .call(yAxis2);

        // ???
        // fv.globalContainer.selectAll('g.variation-y g.tick').attr('class', function(d) {
        //     return 'tick up_pftv_aa_' + (d === '*' ? 'loss' : d === 'del' ? 'deletion' : d);
        // });

        this._dataSeries = dataSeries;
    }

    // Calling render again (after xScale has changed)
    update() {
        this._dataSeries.call(series);
        if (fv.selectedFeature) {
            ViewerHelper.updateHighlight(fv);
        } else if (fv.highlight) {
            ViewerHelper.updateHighlight(fv);
        }
    }

    // Calling render again with new data (after filter was used???)
    updateData(data) {
        dataSeries.datum(data);
        this.update();
    };
}

export default ProtvistaVariation;