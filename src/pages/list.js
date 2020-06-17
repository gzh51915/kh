import React, { Component } from 'react'
import { LeftOutlined, ZoomInOutlined, CalendarOutlined } from '@ant-design/icons';
import http from '../utils/http'
import '../css/list.css'
export default class List extends Component {
    state = {
        data: [],
        nav: ["产品推荐", "跟团游", "自由行", "当地玩乐"]
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        // ajax()
        const { data } = await http.get('/goods');

        console.log('data=', data);

        this.setState({
            data
        })
    }
    changeNav(i, e) {
        document.getElementsByClassName("tab-item on")[0].className = "tab-item"
        e.target.className = "tab-item on";
        console.log(this.props.history);
        // this.props.history.push('/details/'+i)
    }
    render() {
        const { data, nav } = this.state
        return (
            <div style={{ backgroundColor: "#f2f2f2" }}>
                <header style={{ position: "fixed", width: "100%", height: "0.88rem", top: 0, zIndex: 999 }}>
                    <div style={{ textAlign: "center", width: "100%", height: "0.88rem", backgroundColor: "#fff" }}>
                        <LeftOutlined style={{ padding: "0.26rem 0.28rem", fontSize: "18px", color: "#01af63", float: "left" }} />
                        <div className="title etc" style={{ display: "inline", width: "2.16rem", height: "0.88rem", }}>
                            <h1 style={{ display: "inline-block", color: "#606060", fontSize: "0.36rem", fontWeight: "400", lineHeight: "0.88rem", position: "absolute", left: "2.68rem" }}>
                                康辉旅游
                            </h1>
                        </div>
                        <ZoomInOutlined style={{ padding: "0.26rem 0.28rem", fontSize: "18px", color: "#01af63", float: "right" }} />
                    </div>
                </header>
                <nav className="tabs" style={{ position: "fixed", width: "100vw", height: "0.88rem", backgroundColor: "#fff", top: "0.88rem", zIndex: 999 }}>
                    <div className="tab-content" style={{}}>

                        {nav.map((item, i) => (
                            <li className={i === 0 ? "tab-item on" : "tab-item"} key={i} onClick={this.changeNav.bind(this, i)}>{item}</li>
                        ))}
                    </div>
                </nav>
                <div></div>
                <div style={{ height: "20rem", background: "#123", marginTop: "0.2rem" }}>
                    <ul style={{ paddingBottom: "0.96rem" }}>
                        {
                            data.map((item, idx) => (
                                <div className="product bor-sgbr" key={idx}>
                                    <div className="pro-img">
                                        <img src={item.image}></img>
                                        <span>{item.productTypeName}</span>
                                    </div>
                                    <div className="product-info">
                                        <div className="product-title">{item.productName}</div>
                                        <div className="product-date"><CalendarOutlined />出发时间 {item.groups[0]}</div>
                                        <div className="notbug"></div>
                                        <div className="pro_tags">
                                            <span className="star">出发地：{item.departureCity}</span>
                                            <div className="peo-price">
                                                <span className="price">￥{item.salePrice}</span>
                                                <span className="qi">起</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </ul>
                </div>
                <footer style={{ position: "fixed", height: "0.96rem", width: "100%", backgroundColor: "rgba(65,69,82,.95)", bottom: 0, left: 0 }}>
                    
                </footer>
            </div>
        )
    }
}
