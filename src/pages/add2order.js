import React, { Component } from 'react'
import { LeftOutlined } from '@ant-design/icons';

import http from '../utils/http'

import '../css/add2order.css'

export default class add2order extends Component {
    state = {
        data: [],
        name: "",
        phone: "",
        email: "",
        queding: false
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        // ajax()
        const { data } = await http.get('/goods/' + id);
        this.setState({
            data: data[0]
        })
    }
    changeValue(e) {
        if (e.target.id === "c_name") {
            this.setState({
                name: e.target.value
            })
        } else if (e.target.id === "c_phone") {
            this.setState({
                phone: e.target.value
            })
        } else if (e.target.id === "c_email") {
            this.setState({
                email: e.target.value
            })

        }
    }
    queding = (e) => {
        this.setState({
            queding: !this.state.queding

        })

    }
    addorder() {
        const { name, phone, email, data, queding } = this.state
        // const order = [{ titile: data.productName, name: name, phone: phone, email: email }]
        if (name === "" || phone === "" || email === "" || queding === false) {
            document.getElementsByClassName("danger")[0].style.display = "block";
            setTimeout(() => {
                document.getElementsByClassName("danger")[0].style.display = "none";
            }, 1000);
        }
    }
    goBack() {
        window.history.go(-1); 
    }
    render() {
        const { data } = this.state
        return (
            <div>
                <header style={{ position: "fixed", width: "100%", height: "0.88rem", top: 0, zIndex: 999 }}>
                    <div style={{ textAlign: "center", width: "100%", height: "0.88rem", backgroundColor: "#fff" }}>
                        <LeftOutlined style={{ padding: "0.26rem 0.28rem", fontSize: "18px", color: "#01af63", float: "left" }} onClick={this.goBack} />
                        <div className="title etc" style={{ display: "inline", width: "2.16rem", height: "0.88rem", }}>
                            <h1 style={{ display: "inline-block", color: "#606060", fontSize: "0.36rem", fontWeight: "400", lineHeight: "0.88rem", position: "absolute", left: "2.68rem" }}>
                                填写订单
                            </h1>
                        </div>
                    </div>
                </header>
                <section className="order-info">
                    <h1 className="name">{data.productName}</h1>
                    <div className="basic-info">
                        <div className="basic-item">
                            <span className="left">套餐类型</span>
                            <span className="right">标准</span>
                        </div>
                        <div className="basic-item">
                            <span className="left">出发日期</span>
                            <span className="right">2020-06-29</span>
                        </div>
                        <div className="basic-item">
                            <span className="left">购买数量</span>
                            <span className="right">
                                成人×1</span>
                        </div>
                    </div>
                </section>
                <section className="passenger-info">
                    <div className="passenger-info-head">
                        联系人信息
                    </div>
                    <div className="passenger-info-content">
                        <div className="passenger-info-item">
                            < div className="item-left">
                                <span>姓&nbsp;&nbsp;名</span><span className="not-empty">*</span>
                            </div>
                            <input id="c_name" type="text" maxLength="15" placeholder="必填,请输入姓名" onChange={this.changeValue.bind(this)} value={this.state.name} />
                        </div>
                        <div className="passenger-info-item">
                            <div className="item-left">
                                <span>手机号</span><span className="not-empty">*</span>
                            </div>
                            <input id="c_phone" type="tel" maxLength="11" placeholder="必填,请输入手机号" onChange={this.changeValue.bind(this)} value={this.state.phone} />
                        </div>
                        <div className="passenger-info-item">
                            <div className="item-left">
                                <span>邮&nbsp;&nbsp;箱</span><span className="not-empty">*</span>
                            </div>
                            <input id="c_email" type="text" maxLength="30" placeholder="必填,请输入正确的邮箱" onChange={this.changeValue.bind(this)} value={this.state.email} />
                        </div>

                    </div>
                </section>
                <div className="booking-notice">
                    <div className="check-area j_agreeCheckbox">
                        <label><input type="checkbox" name="test" className="test" onClick={this.queding}></input> </label>
                        <span>请在提交前确认您已阅读</span>
                    </div>
                    <a id="booking_notice" href="/#/">《网签协议》</a>
                </div>
                <div className="danger" style={{ position: "absolute", top: "50%", left: "28%", fontSize: "0.36rem", background: "#000", color: "#fff", padding: "0.2rem 0.4rem", display: "none" }}>请正常完善信息！</div>
                <footer>
                    <div className="submitOrder-warp bor-sgtr ui_fixedFootLayer">
                        <span className="left j_feeDetails">
                            应付金额:
                            <span className="yen">¥</span>
                            <span id="order_price" className="price j_grandTotalPrice">399</span>
                            <i className="icon icon_more j_feeDetails"></i>
                        </span>
                        <span id="make_order" className="btn j_makeOrder" onClick={this.addorder.bind(this)}>提交订单</span>
                    </div>
                </footer>
            </div>
        )
    }
}
