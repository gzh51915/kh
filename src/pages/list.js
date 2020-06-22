import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { LeftOutlined, ZoomInOutlined, CalendarOutlined, BranchesOutlined, GlobalOutlined, HistoryOutlined, SwapOutlined } from '@ant-design/icons';
import http from '../utils/http'
import '../css/list.css'


export default class List extends Component {
    state = {
        data: [],
        pronav: "all-e0",
        nav: ["产品推荐", "跟团游", "自由行", "当地玩乐"],
        feature: ["不限", "三亚一地", "拉萨+林芝一线", "昆明+大理+丽江", "西安一地", "拉萨+纳木错", "北京深度游", "云南深度游", "拉萨+日喀则", "三亚+海口", "青海湖深度游", "成都+九寨沟", "河南深度游", "丽江+大理"],
        city: ["不限", "安阳", "北京", "长春", "长沙", "成都", "重庆", "大连", "登封", "迪拜", "东莞", "佛山", "福州", "广州", "桂林", "贵阳", "哈尔滨", "海口", "杭州", "合肥", "黄山", "济南", "济源", "焦作", "晋城", "喀纳斯", "开封", "昆明", "拉萨", "兰州", "丽江", "洛阳", "南昌", "南京", "蓬莱", "平顶山", "青岛", "青海湖", "清远", "曲阜", "日喀则", "汕头", "上海", "沈阳", "深圳", "石家庄", "苏州", "太原", "天津", "吐鲁番", "屯溪", "武汉", "乌鲁木齐", "婺源", "西安", "西宁", "厦门", "新乡", "许昌", "银川", "枣庄", "肇庆", "郑州", "中山", "珠海"],
        date: ["不限", "端午", "中秋", "十一", "元旦", "06月", "07月", "08月", "09月", "10月", "11月", "12月", "2021年01月", "2021年02月", "2021年03月", "2021年04月", "2021年05月", "2021年06月", "2021年07月", "2021年08月", "2021年09月", "2021年10月", "2021年11月", "2021年12月"],
    }

    async componentDidMount() {
        const { data } = await http.get('/goods');
        this.setState({
            data: data
        })

    }
    async changeNav(i, item, e) {
        document.getElementsByClassName("tab-item on")[0].className = "tab-item"
        e.target.className = "tab-item on";
        const url = "all-e" + i
        const { data } = await http.get('/goods/' + url);

        this.setState({
            data: data,
            pronav: url
        })

    }
    show(i) {

        document.getElementsByClassName("shade")[0].style.display = "block"
        document.getElementsByClassName("scroll-wrap")[i].style.display = "block"
    }
    hide() {
        document.getElementsByClassName("shade")[0].style.display = "none"
        for (var i = 0; i < 4; i++) {
            document.getElementsByClassName("scroll-wrap")[i].style.display = "none"
        }
    }
    addGreen(e) {

        var len = e.target.parentNode.childNodes.length;
        for (var i = 0; i < len; i++) {
            e.target.parentNode.childNodes[i].className = "filter-item"
        }
        e.target.className = "filter-item car"
    }
    todetails(item) {
        const { history } = this.props
        // const url = item.productName + "&" + item.productTypeName + "&" + item.salePrice + "&" + item.image
        history.push("/details/" + item)
    }

    sort(e) {
        var len = e.target.parentNode.childNodes.length;
        for (var i = 0; i < len; i++) {
            e.target.parentNode.childNodes[i].className = "filter-item"
        }
        e.target.className = "filter-item car"
        var arr = []
        const { data } = this.state
        if (e.target.dataset.paixu === "0") {
            function compare(property) {
                return function (a, b) {
                    var value1 = a[property];
                    var value2 = b[property];
                    return value1 - value2;
                }
            }
             arr = data.sort(compare("product_id"));
        } else if (e.target.dataset.paixu === "1") {
            function compare(property) {
                return function (a, b) {
                    var value1 = a[property];
                    var value2 = b[property];
                    return value1 - value2;
                }

            }  arr = data.sort(compare("salePrice"));
        } else {
            function compare(property) {
                return function (a, b) {
                    var value1 = a[property];
                    var value2 = b[property];
                    return value2 - value1;
                }

            }  arr = data.sort(compare("salePrice"));
        }

        this.setState({
            data: arr
        })
        console.log()
    }
    goBack() {
        window.history.go(-1); 
    }
    render() {
        const { data, nav, feature, city, date } = this.state
        return (
            <div style={{ backgroundColor: "#f2f2f2" }}>
                <header style={{ position: "fixed", width: "100%", height: "0.88rem", top: 0, zIndex: 999 }}>
                    <div style={{ textAlign: "center", width: "100%", height: "0.88rem", backgroundColor: "#fff" }}>
                        <LeftOutlined style={{ padding: "0.26rem 0.28rem", fontSize: "18px", color: "#01af63", float: "left" }} onClick={this.goBack}/>
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
                            <li className={i === 0 ? "tab-item on" : "tab-item"} key={i} onClick={this.changeNav.bind(this, i, item)}>{item}</li>
                        ))}
                    </div>
                </nav>
                <div></div>
                <div style={{ height: "20rem", background: "#123", marginTop: "1.76rem" }}>
                    <ul style={{ paddingBottom: "0.96rem" }}>
                        {
                            data.map((item, idx) => (

                                <div className="products" key={idx} onClick={this.todetails.bind(this, item._id)}>
                                    {/* <Link to={{ pathname: '/details/', state: { item } }}> */}
                                    <div className="pro-img">
                                        <img src={item.image} alt=""></img>
                                        <span>{item.productTypeName}</span>
                                    </div>
                                    <div className="product-info">
                                        <div className="product-title">{item.productName}</div>
                                        <div className="product-date"><CalendarOutlined />出发时间 6月</div>
                                        <div className="notbug"></div>
                                        <div className="pro_tags">
                                            <span className="star">出发地：{item.departureCity}</span>
                                            <div className="peo-price">
                                                <span className="price">￥{item.salePrice}</span>
                                                <span className="qi">起</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </Link> */}
                                </div>

                            ))
                        }

                    </ul>
                </div>
                <div className="shade" onClick={this.hide} style={{ display: "none", position: "fixed", width: "7.5rem", height: "100%", background: "rgba(0,0,0,.5)", left: 0, top: 0, zIndex: "9999" }}>
                    <div className="scroll-wrap" style={{ display: "none", position: "absolute", bottom: "0", width: "100%", height: "6.2rem", background: "#fff" }}>
                        <ul>
                            {
                                feature.map((item, idx) => (
                                    <a className={idx === 0 ? "filter-item car" : "filter-item"} key={idx} onClick={this.addGreen} href="/details/:id">{item}</a>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="scroll-wrap" style={{ display: "none", position: "absolute", bottom: "0", width: "100%", height: "6.2rem", background: "#fff" }}>
                        <ul>
                            <div style={{ float: "left", width: "3rem", height: "6.2rem", background: "#eee" }}>
                                <li className="scroll-cho">目的地</li>
                                <li className="scroll-cho">出发地</li>
                            </div>
                            <div style={{ float: "left", width: "4.5rem", height: "6.1rem" }}>
                                {
                                    city.map((item, idx) => (
                                        <li key={idx} className={idx === 0 ? "filter-item car" : "filter-item"} onClick={this.addGreen}>{item}</li>
                                    ))
                                }
                            </div>
                        </ul>
                    </div>
                    <div className="scroll-wrap" style={{ display: "none", position: "absolute", bottom: "0", width: "100%", height: "6.2rem", background: "#fff" }}>
                        <ul>
                            <div style={{ float: "left", width: "3rem", height: "6.2rem", background: "#eee" }}>
                                <li className="scroll-cho">出游时间</li>
                                <li className="scroll-cho">行程天数</li>
                            </div>
                            <div style={{ float: "left", width: "4.5rem", height: "6.1rem" }}>
                                {
                                    date.map((item, idx) => (
                                        <li key={idx} className={idx === 0 ? "filter-item car" : "filter-item"} onClick={this.addGreen}>{item}</li>
                                    ))
                                }
                            </div>
                        </ul>
                    </div>
                    <div className="scroll-wrap" style={{ display: "none", position: "absolute", bottom: "0", width: "100%", height: "6.2rem", background: "#fff" }}>
                        <ul>
                            <li className="filter-item car"  onClick={this.sort.bind(this)} data-paixu="0">综合排序</li>
                            <li className="filter-item"  onClick={this.sort.bind(this)} data-paixu="1">价格从低到高</li>
                            <li className="filter-item"  onClick={this.sort.bind(this)} data-paixu="2">价格从高到低</li>
                        </ul>
                    </div>
                </div>
                <footer style={{ display: "flex", justifyContent: "space-between", position: "fixed", height: "0.96rem", width: "100%", backgroundColor: "rgba(65,69,82,.95)", bottom: 0, left: 0 }}>
                    <li className="nav-item " onClick={this.show.bind(this, 0)}><BranchesOutlined style={{ display: "block", fontSize: "0.4rem" }} /><span>线路玩法</span></li>
                    <li className="nav-item " onClick={this.show.bind(this, 1)}><GlobalOutlined style={{ display: "block", fontSize: "0.4rem" }} /><span>目的地/出发地</span></li>
                    <li className="nav-item " onClick={this.show.bind(this, 2)}><HistoryOutlined style={{ display: "block", fontSize: "0.4rem" }} /><span>时间/天数</span></li>
                    <li className="nav-item " onClick={this.show.bind(this, 3)}><SwapOutlined style={{ display: "block", fontSize: "0.4rem" }} /><span>综合排序</span></li>

                </footer>
            </div>
        )
    }
}
