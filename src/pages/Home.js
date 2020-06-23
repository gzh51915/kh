import React, { Component } from 'react';
import { Carousel, Row, Col, Input, Menu, BackTop, Drawer, Button, Badge } from 'antd';
import {
    EditTwoTone, SketchOutlined, DownOutlined, PhoneOutlined, MessageOutlined, UserOutlined
} from '@ant-design/icons';
import '../sass/home.css';

class Home extends Component {

    state = {
        selected: '出境推荐',
        visible: false,
        menu: [{
            goodsTag: '自由行',
            name: '出境推荐',
            text: '出境推荐'
        },
        {
            goodsTag: '跟团游',
            name: '国内推荐',
            text: '国内推荐'
        },
        {
            goodsTag: '当地玩乐',
            name: '周边推荐',
            text: '周边推荐'
        }],
        lunbo: [{
            xuhao: 'lunbo1',
            imageUrl: '../images/shouye/lunbo/lunbo1.jpg'
        },
        {
            xuhao: 'lunbo2',
            imageUrl: '../images/shouye/lunbo/lunbo2.jpg'
        },
        {
            xuhao: 'lunbo3',
            imageUrl: '../images/shouye/lunbo/lunbo3.jpg'
        },
        {
            xuhao: 'lunbo4',
            imageUrl: '../images/shouye/lunbo/lunbo4.jpg'
        },
        {
            xuhao: 'lunbo5',
            imageUrl: '../images/shouye/lunbo/lunbo5.jpg'
        },
        {
            xuhao: 'lunbo6',
            imageUrl: '../images/shouye/lunbo/lunbo6.jpg'
        }],

        home_goods: [],
        current: '自由行',
        user: ""
    }
    // 跳转list
    goto_list = async () => {
        let { history } = this.props;
        history.push('/list')
    }

    goto_login = async () => {
        let { history } = this.props;
        history.push('/login')
    }
    // 去详情页
    goto_goods = async (gid) => {
        let { history } = this.props;
        history.push('/goods/' + gid)
    }

    // 模糊查询
    goto_search = async () => {
        let { history } = this.props;
        history.push('/search')
    }
    // 出现联系方式和关闭1
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    goto_robit = () => {
        let { history } = this.props;
        history.push('/robit');
    }

    goto_mine() {
        let { history } = this.props;
        history.push('/mine');
    }


    render() {
        const { Search } = Input;
        let { selected, menu, lunbo, home_goods, user } = this.state;
        return (
            <div style={{ backgroundColor: '#f1f1f1' }}>
                <Row className="home_head">
                    <Col span={4}>
                        <a className="ant-dropdown-link" href="#">
                            广州 <DownOutlined />
                        </a>
                    </Col>
                    <Col span={16}>
                        <Search
                            placeholder="input search text"
                            style={{ width: "95%", height: 35 }}
                            onClick={this.goto_search.bind(this)}
                        />
                    </Col>
                    <Col span={2}>
                        <Button type="primary"
                            onClick={this.showDrawer}
                            style={{
                                width: '100%', padding: 0, backgroundColor: '#01af63',
                                border: 'none', boxShadow: 'none'
                            }}
                        >
                            <PhoneOutlined />
                        </Button>
                        <Drawer
                            title="联系我们"
                            placement="bottom"
                            height="auto"
                            closable={true}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            style={{ display: 'block' }}
                        >
                            <p style={{
                                height: 40,
                                lineHeight: 3,
                                fontSize: 14,
                                marginBottom: 10,
                                textAlign: 'center',
                                border: '1px solid green'
                            }}> <PhoneOutlined /> 客服电话：18988912269</p>
                            <p style={{
                                height: 40,
                                lineHeight: 3,
                                fontSize: 14,
                                marginBottom: 10,
                                textAlign: 'center',
                                cursor: 'pointer',
                                border: '1px solid #ccc'
                            }}
                                onClick={this.goto_robit.bind(this)}
                            ><Button type="primary" icon={<MessageOutlined />}  onClick={this.goto_robit.bind(this)} />在线客服</p>
                        </Drawer>
                    </Col>
                    <Col span={2}>
                        {
                            user ? <Badge dot>
                                <UserOutlined />
                                <Button type="primary" icon={<UserOutlined />}  style={{ fontSize: 25 }} onClick={this.goto_mine.bind(this)} />
                            </Badge> : <Button type="primary" icon={<UserOutlined />}  style={{ fontSize: 25 }} onClick={this.goto_login.bind(this)} />

                        }

                    </Col>
                </Row>
                <div className="lunbo">
                    <Carousel autoplay>
                        <img src={require('../images/shouye/lunbo/lunbo1.jpg')} />
                        <img src={require('../images/shouye/lunbo/lunbo2.jpg')} />
                        <img src={require('../images/shouye/lunbo/lunbo3.jpg')} />
                        <img src={require('../images/shouye/lunbo/lunbo4.jpg')} />
                        <img src={require('../images/shouye/lunbo/lunbo5.jpg')} />
                        <img src={require('../images/shouye/lunbo/lunbo6.jpg')} />
                    </Carousel>
                    <ul className="fenlei">
                        <li onClick={this.goto_list.bind(this)}>
                            <i>
                                <img src={require("../images/shouye/fenlei/zhoubian.png")} />
                            </i>
                            <span>周边游</span>
                        </li>
                        <li onClick={this.goto_list.bind(this)}>
                            <i>
                                <img src={require("../images/shouye/fenlei/guonei.png")} />
                            </i>
                            <span>国内游</span>
                        </li>
                        <li onClick={this.goto_list.bind(this)}>
                            <i>
                                <img src={require("../images/shouye/fenlei/chujing.png")} />
                            </i>
                            <span>出境游</span>
                        </li>
                        <li onClick={this.goto_list.bind(this)}>
                            <i>
                                <img src={require("../images/shouye/fenlei/dandiyou.png")} />
                            </i>
                            <span>当地玩乐</span>
                        </li>
                        <li onClick={this.goto_list.bind(this)}>
                            <i>
                                <img src={require("../images/shouye/fenlei/qianzheng.png")} />
                            </i>
                            <span>签证</span>
                        </li>
                    </ul>
                </div>

                <div className="part_two">
                    <Row>
                        <Col span={12} style={{ borderRight: '1px solid #ccc' }}>
                            <EditTwoTone />
                            <span>康辉定制游</span>
                        </Col>
                        <Col span={12}>
                            <SketchOutlined />
                            <span>企业客户定制</span>
                        </Col>
                    </Row>
                </div>
                <div className="mudidi">
                    <h2>热门目的地</h2>
                    <Row justify="space-around">
                        <Col span={7}>
                            <img src={require("../images/shouye/mudidi/balidao.jpg")} />
                            <p>巴厘岛</p>
                        </Col>
                        <Col span={7}>
                            <img src={require("../images/shouye/mudidi/riben.jpg")} />
                            <p>日本</p>
                        </Col>
                        <Col span={7}>
                            <img src={require("../images/shouye/mudidi/pujidao.jpg")} />
                            <p>普吉岛</p>
                        </Col>
                    </Row>
                    <Row justify="space-around">
                        <Col span={7}>
                            <img src={require("../images/shouye/mudidi/haerbin.png")} />
                            <p>哈尔滨</p>
                        </Col>
                        <Col span={7}>
                            <img src={require("../images/shouye/mudidi/yunnan.jpg")} />
                            <p>云南</p>
                        </Col>
                        <Col span={7}>
                            <img src={require("../images/shouye/mudidi/beijing.jpg")} />
                            <p>北京</p>
                        </Col>
                    </Row>
                </div>
            </div>

        )
    }


}

export default Home
