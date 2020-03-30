import {Component} from "react";
import React from "react";

import './Tab.css';

class  Tab extends Component{


    render() {
        return (
            <div id="tab" className="calendar">

                <ul>
                    <li className=""><h2>1</h2><p>JAN</p></li>
                    <li className=""><h2>2</h2><p>FER</p></li>
                    <li className="active"><h2>3</h2><p>MAR</p></li>
                    <li className=""><h2>4</h2><p>APR</p></li>
                    <li className=""><h2>5</h2><p>MAY</p></li>
                    <li className=""><h2>6</h2><p>JUN</p></li>
                    <li className=""><h2>7</h2><p>JUL</p></li>
                    <li className=""><h2>8</h2><p>AUG</p></li>
                    <li className=""><h2>9</h2><p>SEP</p></li>
                    <li className=""><h2>10</h2><p>OCT</p></li>
                    <li className=""><h2>11</h2><p>NOV</p></li>
                    <li className=""><h2>12</h2><p>DEC</p></li>
                </ul>

                <div className="text"><h2>3月活动</h2><p>HTML5开发课程，让你熟练掌握移动应用开发技术</p></div>

            </div>

        );
    }
};
export default  Tab;