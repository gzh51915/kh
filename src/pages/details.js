import React, { Component } from 'react';
import { LeftOutlined, ZoomInOutlined, ExclamationCircleOutlined, RightOutlined,PhoneOutlined,TeamOutlined  } from '@ant-design/icons';
import http from '../utils/http'

import '../css/details.css'
class Details extends Component {
    state = {
        data: [],
    }
    // componentDidMount() {

    //     const { dispatch, location } = this.props;

    //     var data = this.props.location.state



    //     if (location.state) {
    //         data = location.state;

    //         sessionStorage.setItem('data', data);
    //     } else {
    //         data = sessionStorage.getItem('data');
    //     }
    //     console.log(data);

    // }
    goBack() {
        window.history.go(-1); 
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        // ajax()
        const { data } = await http.get('/goods/' + id);

        this.setState({
            data:data[0]
        })
    }
    add2order() {
        const { history } = this.props
        history.push("/add2order/" + this.state.data._id)
    }
    render() {
        const {data} = this.state
        return (
            <div>
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
                <section className="pro-detail">
                    <div className="pro-banner">
                        <img src={data.image} alt=""></img>
                        <div className="type-content">
                            <span className="type">{data.productTypeName}</span>
                            <span className="pro-id">编号:{data.product_id}</span>
                        </div>
                    </div>
                    <div className="pro-title">
                        <p className="title">{data.productName}</p>
                    </div>
                    <div className="pro-price bor-sgbr">
                        <span className="sale-price"><span>¥{data.salePrice}</span>起</span>
                        <del className="market-price">¥{data.basePrice}</del>
                    </div>
                    <div className="secSure">
                        <ExclamationCircleOutlined />该产品的价格和团期会实时变动，下单后需要客服进行核实，核实无误后，即可支付
                    </div>
                </section>
                <div className="tour-day" id="tour_day">
                    <p className="tit">选择出行日期</p>
                    <div className="little-detail etc">
                        6月多日期出发</div>
                    <RightOutlined style={{ position: "absolute", right: "0.3rem", top: "0.5rem" }} />
                </div>
                <div className="nav-wrap">
                    <div className="pro-info-nav">
                        <ul id="j_nav" className="nav-container j_nav">
                            <li className="nav-item2" data-target="j_features">线路特色</li>
                            <li className="nav-item2" data-target="j_intro">行程介绍</li>
                            <li className="nav-item2" data-target="j_fee">费用说明</li>
                            <li className="nav-item2" data-target="j_notice">预订须知</li>
                            <li className="nav-item2" data-target="j_refund">退改政策</li>
                        </ul>
                    </div>
                </div>
                <div className="product-detail">
                    <div className="point">

                        <p> ★含酒店豪华自助早</p>
                        <p> ★翔顺龙山温泉水被誉为“神仙水” 属罕见的硫氢化物泉</p>
                        <p> ★酒店周围山青水碧，风景秀丽，紧邻佛教名刹——龙山国恩寺</p>
                        <p> ★温泉拥有景观欢乐池、儿童戏水池、游泳池、特色水疗池、热石床、湿蒸房等</p>

                    </div>
                </div>
                <div className="intro j_intro">
                    <h3 className="detail-head ">行程介绍</h3>
                    <p>巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴

                    </p>
                </div>
                <div id="js-show-detail" className="j_fee js-show-detail">
                    <h2 className="detail-head">费用说明</h2>
                    <div className="detail-content box-con">
                        <h3 className="content-title">费用包含</h3>
                        <div className="content">1.交通：空调旅游车（按实际人数安排车辆，保证每人一正座）<br />
                            2.用餐：含一早餐（酒店含D2自助早餐、房费包含不用不退）<br />
                                3.住宿：费用只含每人每天一床位，若出现单男单女，请在出发前自补房差。<br />
                                    4.安排1名工作人员随车服务。<br />
                                        5.无限次温泉<br />
                        </div>
                        <h3 className="content-title">费用不含</h3>
                        <div className="content">不含费用已含中没有提及的项目，以及个人其他消费，景区内自设的购物商铺、娱乐等项目，属于旅游者个人消费行为，如产生纠纷或损失，本社不承担责任；<br />
                        </div>
                    </div>
                </div>
                <div className="product-detail j_notice js-show-detail">
                    <h2 className="detail-head">预订须知</h2>
                    <div className="detail-content box-con">
                        <h3 className="content-title">出行须知</h3>
                        <div className="content">温泉注意事项：<br />
				1.温泉浴可反复浸泡，每隔20分钟应上池边歇歇，喝点饮料补充水分。<br />
				2.在热腾腾的温泉池里，爱美的女性可以敷上面膜，或用冷毛巾抹抹脸，更有利于美容。<br />
				3.温泉水中含矿物质，泡过温泉后尽量少用沐浴液，用清水冲身更有利于保持附着在皮肤上的矿物质。<br />
				4.泡温泉时可合上双眼，以冥想的心情，缓缓地深呼吸数次，达到释放身心压力的效果。<br />
				5.泡温泉前一定要把身上的金属饰品摘下来，否则首饰会被泉水中的矿物质"染黑"。<br />
				6.进入温泉池前，脚先入池，先泡双脚，再用双手不停地将水温泼淋全身，适应水温后才全身浸入。<br />
				7.泡温泉时不要同时按摩。因为泡温泉时身体的血液循环和心脏的跳动次数都加快，如果同时按摩会加大了心脏的负担。<br />
				8.建议酒后切勿浸泡，否则容易醉酒或出现其它不适症状。肚子太饿或太饱都不适宜浸泡温泉，须稍作休息后方可浸泡温泉。患有急性病症、传染病、高血压等症状的患者，不宜浸泡温泉，如要浸泡，请在医生指导下进行浸泡。<br />

				&nbsp;其他备注：<br />
				1、由于此线路不含团队午餐，午餐时间，直通车会在新兴国恩寺附近的餐厅停车（停留时间约1小时，客人自行选择餐厅用餐）<br />
				2、酒店房间约14-15点后才能安排入住，客人入住前需要到酒店前台交付押金约300-500元/间；<br />
				3、本团以直通车形式操作，天天出发，可能会拼“翔顺龙山酒店，悦天下温泉度假村”团同时出发；稍做停留，上、落客，不便之处，敬请谅解！<br />
				4、我社按客人报名先后顺序排位，预先给客人编排好车位，请客人自觉礼让，听从导游安排，自觉礼让、尊老爱幼；<br />
				5、请游客在旅游过程中保管好自己的个人财物，&nbsp;如发生财物丢失，我司将按签订的广州市国内旅游合同第五款之22条内容处理；<br />
				6、在参加活动期间，宾客请根据个人身体条件慎重选择游玩项目，服从景区救生工作人员的指挥，必须在指定的区域和时间游玩，严禁在没有救生配置的区域内游玩。<br />
				7、宾客请根据个人身体条件自备旅途生活用品和个人医嘱用药，注意饮食卫生。<br />
				8、如遇到台风,暴雨或河水上涨等不可抗力因素而影响团队行程的,为保障客人生命财产安全,我社将尽早通知客人取消行程；<br />
				9、如参团人数不足30人，我社将提前2天通知客人协商调整出发日期、更改线路或全额退还团费。不便之处，敬请见谅。<br />
				10、离团说明：客人擅自、强行离团或不参加行程内的某项团队活动（含酒店、用餐、景点等），我社视客人自动放弃行程，发生此类情况一切后果请客人自行承担，客人离团期间的一切行为与旅行社无关<br />
				11、18岁以下未成年人参团需监护人陪同或授权委托书；65岁以上老人参团需填写健康申明，70-75周岁（超75岁恕不接待）的老人须需填写健康申明、免责声明并有看护人陪同方可参团，否则不予接待，见谅！<br />
				12、根据交通部门的通知，为保证游客乘车安全，严格要求旅行社的用车不能超载，若超载司机会被扣分或吊销牌照，并会进行罚款，所以即使是手抱婴儿也会安排一正座。一般1米以下的婴儿只收往返车位费，出发当天不能携带未报名的游客。<br />
                            <br />
				特别约定：<br />
				1、旅行社强烈建议出行游客购买个人旅游意外保险。具体保险险种请在报名时向销售人员咨询并购买，出行时请将该保单资料随身携带。<br />
				2、安全注意事项：本线路含有涉水游乐等的风险项目，客人应遵照该活动项目经营者对年龄、身体的要求而谨慎选择参加；参加者须遵守活动项目要求和听从现场工作人员指挥；穿好救生衣；切忌单独游玩，并应要在规定的安全区域内活动，切忌麻痹大意，一旦在水中感觉不适时应尽快上岸休息。雷雨天和夜晚均不准下水游泳。未成年人一定要在成人的陪同和看护下方可参加，水上活动结束后不宜立即食用冷饮、西瓜、海鲜等食品。敬请客人务必在参加以上项目前充分了解项目的安全须知并确保身体状况能适应此类活动。敬请客人务必在参加以上项目前充分了解项目的安全须知并确保身体状况能适应此类活动。如发生不可归责于旅行社的意外伤害，旅行社不承担赔偿责任”。<br />
                        </div>
                    </div>
                </div>
                <div className="product-detail j_refund js-show-detail">
                    <h2 className="detail-head">退改政策</h2>
                    <div className="detail-content box-con">旅游者违约 旅游者在行程开始前7 日以内和行程中提出解除合同的，扣除必要费用之外，需按下列标准向旅行社支付违约金： 行程开始前6日至4日，按旅游费用总额的20%； 行程开始前3日至1日，按旅游费用总额的40%； 行程开始当日，按旅游费用总额的60%； 如按上述比例扣除的必要的费用低于实际发生的费用，旅游者按实际发生的费用支付，但最高额不应当超过旅游费用总额。 旅行社违约 旅游者在行程开始前7 日以上收到旅行社不能成团通知的，旅行社不承担违约责任，向旅游者退还已收取的全部旅游费用；旅行社在行程开始前7 日以内提出解除合同的，或者旅游者在行程开始前7 日以内收到旅行社不能成团通知，不同意转团、延期出行和改签线路解除合同的，旅行社向旅游者退还已收取的全部旅游费用，并按下列标准向旅游者支付违约金， 行程开始前6 日至4 日，支付旅游费用总额10%的违约金； 行程开始前3 日至1 日，支付旅游费用总额15%的违约金； 行程开始当日，支付旅游费用总额20%的违约金；<br />
                    </div>
                </div>
                <footer >
                    <div className="detail-bottom">
                        <div className="detail-bottom-btn"><PhoneOutlined /><p>电话客服</p></div>
                        <div className="detail-bottom-btn"><TeamOutlined /><p>在线客服</p></div>
                        <div className="noworder" onClick={this.add2order.bind(this)}>立即预订</div>
                    </div>
                </footer>
            </div>
        )
    }


}

export default Details