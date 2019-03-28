import React, { Component } from 'react'
import { Row, Col, Form, Icon, Input, Button, Checkbox, } from 'antd';

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        //validateFields:校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件
        // ([fieldNames: string[]], [options: object], callback(errors, values)) => void
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                {/* offset:栅格左侧的间隔格数，间隔内不可以有栅格 */}
                {/* span:栅格占位格数，为 0 时相当于 display: none */}
                <Col offset={9} span={6}>
                    <Form onSubmit={this.handleSubmit} className="login-form" style={{ marginTop: '50px' }}>
                        <Form.Item hasFeedback>
                            {/* hasFeedback:配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用 */}
                            {
                                // getFieldDecorator(id, options):用于和表单进行双向绑定
                                // id:必填输入控件唯一标志。支持嵌套式的写法。  
                                // rules:校验规则->required:是否必选 message:校验文案 min/max:最小/大长度
                                getFieldDecorator('userName', {
                                    rules: [
                                        { required: true, message: 'Please input your username!' },
                                        { min: 6, max: 10, message: '长度是6-10' }
                                    ],
                                })(
                                    //addonBefore:带标签的 input，设置前置标签
                                    <Input addonBefore={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                //pattern:正则表达式校验
                                getFieldDecorator('password', {
                                    rules: [
                                        { required: true, message: 'Please input your Password!' },
                                        { pattern: /^[a-zA-Z0-9]{6,10}$/, message: '6位数字或字母' }
                                    ],
                                })(
                                    <Input addonBefore={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',//子节点的值的属性，如 Switch 的是 'checked'
                                    initialValue: true,//子节点的初始值，类型、可选值均由子节点决定
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )
                            }
                            <a className="login-form-forgot" href="">Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or
                            <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
}
//经 Form.create() 包装过的组件会自带 this.props.form 属性
const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default Login;