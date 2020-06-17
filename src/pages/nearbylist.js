import React, { Component } from 'react';
import { LeftOutlined } from '@ant-design/icons';
class NearbyList extends Component {
    state = {
        nearbycity: ["香港", "澳门", "肇庆", "深圳", "珠海", "北海市", "南宁", "江门", "汕头", "湛江", "韶关", "潮州", "梅州", "河源", "茂名", "阳江", "清远", "从化", "云浮", "赣州", "清远黄腾峡"]
    }
    render() {
        const { nearbycity } = this.state
        return (
            <div style={{ backgroundColor: "#f2f2f2" }}>
                <header style={{ width: "100vw", height: "44px", textAlign: "center", backgroundColor: "#fff" }}>
                    {/* <LeftOutlined style={{ lineHeight: "44px",padding:"0 14px",float:"left" ,fontSize:"18px",color:"#58bc58"}} /> */}
                    <a style={{ width: 0, height: 0, float: "left" }}><LeftOutlined style={{ lineHeight: "44px", padding: "0 14px", fontSize: "18px", color: "#58bc58" }} /> </a>
                    <div className="title etc" style={{ display: "inline-block", width: "28.8vw", height: "44px" }}>
                        <img src="https://s.cctcdn.com/m/1604/i/header_logo.png?v=47076d" style={{ float: "left", width: "4.8vw", margin: "14px 2px" }}></img>
                        <h1 style={{ float: "left", color: "#606060", fontSize: "18px", fontWeight: "400", lineHeight: "44px", margin: 0 }}>康辉旅游</h1></div>
                </header>
                <div className="hot_product" style={{ backgroundColor: "#fff", marginTop: "10px" }}>
                    <div className="title" style={{ color: "#333", fontSize: "18px", fontWeight: "400", padding: " 20px 0 ", textAlign: "center" }}>热门周边目的地</div>
                    <ul className="content city">
                        {
                            nearbycity.map((item, idx) => (
                                <li className="city" key={idx}>{item}</li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        )
    }


}

export default NearbyList