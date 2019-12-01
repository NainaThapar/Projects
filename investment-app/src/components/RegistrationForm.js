import React, { Component } from "react";
import '../common/style.css';
import {
    Form,
    Input,
    Select,
    Button,
    InputNumber
  } from 'antd';
import TextArea from "antd/lib/input/TextArea";

  const { Option } = Select;
  

class RegistrationForm extends Component {
    state = {

    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 9 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 14 },
            },
          };
        return(
            <div className='registration-form'>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <div className='registration-details'>
                        <div className='registration-details-left'>
                            <h3>Personal Details:</h3>
                            <Form.Item label="Age">
                            {getFieldDecorator('age', {
                                rules: [
                                {
                                    type: 'number',
                                    message: 'The input is not valid age!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your age!',
                                },
                            ],
                            })(<InputNumber />)}
                            </Form.Item>
                            <Form.Item label="Gender">
                                {getFieldDecorator('gender', {
                                rules: [{ required: true, message: 'Please select your gender!' }],
                                })(
                                <Select placeholder="Select an option"
                                onChange={this.handleSelectChange}
                                >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                </Select>,
                                )}
                            </Form.Item>
                            <Form.Item label="Marital Status">
                                {getFieldDecorator('marital-status', {
                                rules: [{ required: true, message: 'Please select your marital status!' }],
                                })(
                                <Select placeholder="Select an option"
                                onChange={this.handleSelectChange}
                                >
                                    <Option value="single">Single</Option>
                                    <Option value="married">Married</Option>
                                    <Option value="divorsed">Divorsed</Option>
                                    <Option value="widowed">Widowed</Option>
                                </Select>,
                                )}
                            </Form.Item>
                            <h3>Address Details:</h3>
                            <Form.Item label="Flat/House no">
                                {getFieldDecorator('flat', {
                                rules: [{ required: true, message: 'Please input your Flat Number!', whitespace: true }],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="Street Address">
                                {getFieldDecorator('street', {
                                rules: [{ required: true, message: 'Please input your Street Address!', whitespace: true }],
                                })(<TextArea />)}
                            </Form.Item>
                            <Form.Item label="City">
                                {getFieldDecorator('city', {
                                rules: [{ required: true, message: 'Please input your city!', whitespace: true }],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="State">
                                {getFieldDecorator('state', {
                                rules: [{ required: true, message: 'Please input your state!', whitespace: true }],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="Country">
                                {getFieldDecorator('country', {
                                rules: [{ required: true, message: 'Please input your country!', whitespace: true }],
                                })(<Input />)}
                            </Form.Item>
                        </div>
                        <div className='registration-details-right'>
                            <h3>Financial Detail:</h3>
                            <Form.Item label="Montly Income">
                                {getFieldDecorator('monthly-income', {
                                rules: [{ required: true, message: 'Please input your Monthly income!', whitespace: true }],
                                })(<Input />)}
                            </Form.Item>
                            <div style={{marginBottom: '65px'}}>
                            <Form.Item label="Intended amount for investment">
                                {getFieldDecorator('amount', {
                                rules: [{ required: true, message: 'Please input your intended amount for investment!', whitespace: true }],
                                })(<Input />)}
                            </Form.Item>
                            </div>
                            <h3>Bank Account Detail:</h3>
                            <Form.Item label="Account Number">
                                {getFieldDecorator('account', {
                                rules: [{ required: true, message: 'Please input your account number!', whitespace: true }],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="IFSC Code">
                                {getFieldDecorator('ifsc', {
                                rules: [{ required: true, message: 'Please input your IFSC code!', whitespace: true }],
                                })(<Input />)}
                            </Form.Item>
                        </div>
                    </div>
                        <Form.Item wrapperCol={{ span: 6, offset: 10 }}>
                            <Button type="primary" htmlType="submit" block>
                                Register
                            </Button>
                        </Form.Item>
                </Form>
            </div>
        )
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default WrappedRegistrationForm;