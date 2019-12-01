import React, {Component} from 'react';
import '../common/style.css';
import Highcharts from 'highcharts';

class Dashboard extends Component {
    instance;
    investedOptions = {
        chart: {
          type: "line"
        },
        title: {
          text: 'Invested Amount Chart'
        },
        series: [
          {
            data: [1, 3, 4, 10, 9]
          }
        ]
      };

      returnOptions = {
        chart: {
          type: "line"
        },
        title: {
          text: 'Expected Return Chart'
        },
        series: [
          {
            data: [1, 2, 5, 8, 9]
          }
        ]
      };

      receivedOptions = {
        chart: {
          type: "line"
        },
        title: {
          text: 'Expected Return Chart'
        },
        series: [
          {
            data: [1, 9, 8, 10, 11]
          }
        ]
      };

      componentDidMount() {
        this.instance = Highcharts.chart("invest-id", this.investedOptions);
        this.instance = Highcharts.chart("return-id", this.returnOptions);
        this.instance = Highcharts.chart("received-id", this.receivedOptions);
      }
      render(){
        return(
            <div className='dashboard'>
                <div className='dashboard-body-container'>
                    <div className='dashboard-body'>
                        <h3>Amount Invested</h3>
                        <div>
                    <div id="invest-id" />
                </div>
    
                    </div>
                    <div className='dashboard-body'>
                        <h3>Return Expected</h3>
                        <div>
            <div id="return-id" />
          </div>
                    </div>
                    <div className='dashboard-body'>
                        <h3>Return Received</h3>
                        <div id="received-id" />
                    </div>
                </div>
            </div>
        )
      }
    
}

export default Dashboard;