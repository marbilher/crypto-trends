import React from "react";
// import ReactDOM from "react-dom";
// import * as scrapeService from "../services/scrape.service";
import ReactHighcharts from 'react-highcharts';
// import { onChange, showFormErrors } from "../../helpers/validation.helper";
let param = "";


class ScrapeTrendsHighChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDatelimit: null,
            endDatelimit: null,
            config: null,
            initialRender: false,
            formData: {
                start: null,
                end: null
            },
            errors: {},
            message: ''

        }
        // this.datePickerOnChange = onChange.bind(this);
    }

    // datePickerSet = event => {
    //     if (!showFormErrors.call(this)) {
    //         return;
    //     }
    //     if (this.state.formData.start) {
    //         param = "?start=" + this.state.formData.start;
    //     }
    //     if (this.state.formData.end && !this.state.formData.start) {
    //         param = param + "?end=" + this.state.formData.end;
    //     } else if (this.state.formData.end) {
    //         param = param + "&end=" + this.state.formData.end;
    //     }
    //     this.metricsCall(param)
    //     param = "";
    // }

    // scrapeCall(param){
    //     scrapeService.getScrape(param)
    //         .then(response => {
    //             if (!this.state.initialRender) {
    //                 this.allDataEnd = response[response.length - 1]._id;
    //             }
    //             this.setState({
    //                 initialRender: true,
    //                 config: {
    //                     title: {
    //                         text: ''
    //                     },

    //                     chart: {
    //                         height: 480
    //                     },

    //                     subtitle: {
    //                         // text: 'Source: stats'
    //                     },

    //                     xAxis: {
    //                         categories: response.map(item => item._id)
    //                     },

    //                     yAxis: {
    //                         title: {
    //                             text: 'Amount of Requests'
    //                         }
    //                     },
    //                     legend: {
    //                         layout: 'vertical',
    //                         align: 'right',
    //                         verticalAlign: 'middle'
    //                     },

    //                     plotOptions: {
    //                         series: {
    //                             label: {
    //                                 connectorAllowed: false
    //                             }
    //                         }
    //                     },

    //                     series: [{
    //                         name: 'Request Created',
    //                         data: response.map(item => {
    //                             return item.count
    //                         })
    //                     }],

    //                     responsive: {
    //                         rules: [{
    //                             condition: {
    //                                 maxWidth: 500
    //                             },
    //                             chartOptions: {
    //                                 legend: {
    //                                     layout: 'horizontal',
    //                                     align: 'center',
    //                                     verticalAlign: 'bottom'
    //                                 }
    //                             }
    //                         }]
    //                     }
    //                 }
    //             })
    //         })
    // }

    componentDidMount() {
        // this.scrapeCall(param);

                    this.setState({
                    initialRender: true,
                    config: {
                        title: {
                            text: ''
                        },

                        chart: {
                            height: 280
                        },

                        subtitle: {
                            // text: 'Source: stats'
                        },

                        xAxis: {
                            // categories: response.map(item => item._id)
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                            
                        },
                        series: [{
                            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
                          }],

                        yAxis: {

                            title: {
                                text: 'Amount of Mentions'
                            }
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle'
                        },

                        plotOptions: {
                            series: {
                                compare: 'percent',
                                showInNavigator: true,
                                label: {
                                    connectorAllowed: false
                                }
                            }
                        },

                        series: [{
                            name: 'Y Mentions',
                            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4],

                            // data: response.map(item => {
                            //     return item.count
                            // })
                        }],

                        responsive: {
                            rules: [{
                                condition: {
                                    maxWidth: 500
                                },
                                chartOptions: {
                                    legend: {
                                        layout: 'horizontal',
                                        align: 'center',
                                        verticalAlign: 'bottom'
                                    }
                                }
                            }]
                        }
                    }
                })

    }

    render() {
        return (
            <React.Fragment>

                <div style={{ "padding": "15px", "background": "#fff", "text-align": "center", "color": "#333333", "font-size": "18px", "fill": "#333333", "font-family": "Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif" }}>
                    <div>Mentions over time</div>
                    <div style={{"font-size": "12px", "color": "#666", "margin-top":"8px"}}>Source: Binance </div>
                </div>
                {this.state.config &&

                    <div>
                        <div className="col-md-12" style={{ "backgroundColor": "white", "padding": "5px" }}>
                            <center><form style={{ "display": "table", "width": "100%" }}>
                                <div id="startLabel" style={{ "display": "table-cell", "width": "30%" }} className={"form-group " + (this.state.errors.start ? "has-error" : "")}>
                                    <div className="rounded no-overflow">
                                        <label htmlFor="start">Start</label>
                                        &nbsp;
                                        <input type="date" className="rounded" id="start" name="start" ref="start"
                                            max={new Date().toISOString().split("T")[0]}
                                            //max set to today for now or else year will be able to contain 5 digits
                                            onChange={this.datePickerOnChange}
                                        />
                                    </div>
                                    <div className="asterisk">{this.state.errors.start}</div>
                                </div>

                                <div id="endLabel" style={{ "display": "table-cell", "width": "30%" }} className={"form-group " + (this.state.errors.end ? "has-error" : "")}>
                                    <div className="rounded no-overflow">
                                        <label htmlFor="end">End</label>
                                        &nbsp;
                                        <input type="date" className="rounded" id="end" name="end" ref="end"
                                            max={new Date().toISOString().split("T")[0]}
                                            onChange={this.datePickerOnChange} />
                                    </div>
                                    <div className="asterisk">{this.state.errors.end}</div>
                                </div>
                                <div style={{ "display": "table-cell", "width": "30%" }}><button type="button" className="btn btn-outline-dark btn-xs btn-slidedown" onClick={this.datePickerSet}>Set Range</button></div>
                            </form>
                            </center>
                        </div>
                        
                        <ReactHighcharts style={{ "position": "absolute", "top": 0, "left": 0 }} config={this.state.config}></ReactHighcharts>
                        
                    </div>}

            </React.Fragment>
        )
    }
}

export default ScrapeTrendsHighChart;