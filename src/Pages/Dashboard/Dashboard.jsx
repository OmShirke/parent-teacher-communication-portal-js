import "bootstrap/dist/css/bootstrap.min.css";
import{Chart as ChartJS} from "chart.js/auto";
import {Bar, Line} from "react-chartjs-2";
import { useEffect, useState } from "react";

export const Dashboard = () => {
    const [message, setm] = useState('');

    const sendMessage = () => {
        // Implement your sendMessage function logic here
    };

    const divStyle = {
        height: "250px",
        padding: "15px",
        boxShadow: "0 3px 4px rgba(0, 0, 0, 0.1)"
    };

    return (
        <div className="row">
            <div className="col-md-6 mb-4">
                <div className="flex-fill" style={divStyle}>
                    <Bar
                    data={{
                        labels:["A","B","C"],
                        datasets:[{
                            label: "Attendance",
                            data: [60,50,60],
                        },
                        {
                            label: "Absence",
                            data: [40,50,40],
                        },
                    ],
                        
                    }}
                    />
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="flex-fill" style={divStyle}>2</div>
            </div>
            <div className="col-md-6">
                <div className="flex-fill" style={divStyle}>3</div>
            </div>
            <div className="col-md-6">
                <div className="flex-fill" style={divStyle}>4</div>
            </div>
        </div>
    );
};
