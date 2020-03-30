import {Component} from "react";
import React from "react";

import './TaoBao.css';

class  TaoBao extends  Component{

    render() {
        return (
            <ul id="ul1">
                <li><a className="title" href="javescript:;">女装</a><a className="child" href="javescript:;">衬衫</a><a
                    className="hot child" href="javescript:;">雪纺衫</a><a className="child" href="javescript:;">防晒衣</a>
                </li>
                <li><a className="hot title" href="javescript:;">连衣裙</a><a className="child" href="javescript:;">雪纺裙</a><a
                    className="child" href="javescript:;">长裙</a><a className="hot child" href="javescript:;">短裙</a></li>
                <li><a className="title" href="javescript:;">T恤</a><a className="child" href="javescript:;">打底衫</a><a
                    className="hot child" href="javescript:;">短袖T</a><a className="child" href="javescript:;">蝙蝠袖</a>
                </li>
                <li className="last"><a className="title" href="javescript:;">裤子</a><a className="child"
                                                                                       href="javescript:;">小脚裤</a><a
                    className="child" href="javescript:;">连体裤</a><a className="hot child" href="javescript:;">短裤</a>
                </li>
                <li><a className="title" href="javescript:;">男装</a><a className="hot child" href="javescript:;">新品</a><a
                    className="child" href="javescript:;">风格</a><a className="child" href="javescript:;">潮牌</a><a
                    className="child" href="javescript:;">品牌特惠</a></li>
                <li><a className="hot title" href="javescript:;">T恤</a><a className="child" href="javescript:;">短袖</a><a
                    className="child" href="javescript:;">纯棉</a><a className="child" href="javescript:;">简约</a><a
                    className="child" href="javescript:;">印花</a></li>
                <li><a className="title" href="javescript:;">衬衫</a><a className="child" href="javescript:;">短袖衫</a><a
                    className="child" href="javescript:;">格子</a><a className="child" href="javescript:;">纯色</a><a
                    className="hot child" href="javescript:;">修身</a></li>
                <li><a className="title" href="javescript:;">休闲裤</a><a className="hot child"
                                                                       href="javescript:;">短裤</a><a className="child"
                                                                                                    href="javescript:;">小脚</a><a
                    className="child" href="javescript:;">直筒</a></li>
            </ul>
        );
    }
};
export  default  TaoBao;