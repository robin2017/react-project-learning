import { Form, Input, Checkbox } from '@alifd/next';
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {fixedSpan: 10},
    wrapperCol: {span: 14}
};
class Demo extends React.Component {
    handleSubmit = (values) => {
        console.log('Get form value:', values);
    };
    render() {
        return (
            <Form style={{width: '60%'}} {...formItemLayout} >
                <FormItem label="password:">
                    <Input htmlType="password" name="basePass" placeholder="Please Enter Password"/>
                </FormItem>
                <FormItem label="Agreement:">
                    <Checkbox name="baseAgreement" defaultChecked>Agree</Checkbox>
                </FormItem>
                <FormItem label=" ">
                    <Form.Submit onClick={this.handleSubmit}>Confirm</Form.Submit>
                </FormItem>
            </Form>
        )
    }
}

