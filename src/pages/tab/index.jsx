import React from 'react'
import { Tab } from '@alifd/next';
import { useHistory, useParams } from 'react-router-dom'
const TABS = [
    { title: 'Home', key: 'home', content: 'Home content' },
    { title: 'Detail', key: 'detail', content: 'Detail content' },
    { title: 'Help', key: 'help', content: 'Help content' },
]
/**
 * tab和URL双向绑定
 */
export default () => {
    const history = useHistory()
    const params = useParams()
    console.log('history,params:', history, params)
    //默认home
    const tab = TABS.find(item=>item.key===params.tab)?.key || 'home'
    const onTabChange = (key)=>{
        history.replace(`/tabs/${key}`)
    }
    return (
        <div>
            <h4>tab示例</h4>
            {/* 双向绑定过程：defaultActiveKey:url=>tab;onChange:tab=>url */}
            <Tab defaultActiveKey={tab} onChange={onTabChange}>
                {/* 直接将item解构 */}
                {TABS.map(({ title, key, content }) => <Tab.Item title={title} key={key}>{content}</Tab.Item>)}
            </Tab>
        </div>
    )
}