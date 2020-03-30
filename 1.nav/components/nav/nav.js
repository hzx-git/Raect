import {Component} from "react";
import React from "react";
import './nav.css';

class  Nav extends Component{


    render() {
        return(
            <div id="nav">
                <ul className="cl">
                    <li><a href="javascript:;">首页</a></li>
                    <li><a href="javascript:;">国内</a></li>
                    <li><a href="javascript:;">国际</a></li>
                    <li><a href="javascript:;">娱乐</a></li>
                    <li><a href="javascript:;">社会</a></li>
                    <li><a href="javascript:;">体育</a></li>
                    <li><a href="javascript:;">科技</a></li>
                    <li><a href="javascript:;">军事</a></li>
                    <li><a href="javascript:;">财经</a></li>
                    <li><a href="javascript:;">教育</a></li>
                    <li><a href="javascript:;">房产</a></li>
                    <li><a href="javascript:;">汽车</a></li>
                    <li><a href="javascript:;">女性</a></li>
                    <li><a href="javascript:;">互联网</a></li>
                    <li><a href="javascript:;">新闻站</a></li>
                </ul>
                <em></em>
            </div>
        );
    }
}

export default Nav;