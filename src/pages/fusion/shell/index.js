import React from 'react'
import { Search,  Shell } from '@alifd/next';
import AppleImg from './apple.jpg'
import CatImg from './cat.png'
import './index.scss'
/** react组件的函数式写法 */
export default () => {
    return (
        <div className='shell-container'>
            <Shell className='shell-iframe'  >
                <Shell.Branding>
                    <img className='shell-img' src={AppleImg} />
                    <span style={{ marginLeft: 10 }}>苹果科技有限公司</span>
                </Shell.Branding>
                <Shell.Navigation direction="hoz" className='shell-navigation'>
                    <div className='shell-navigation-title'>
                        <ul>
                            <li>首页</li>
                            <li>文档</li>
                            <li>下载</li>
                            <li>论坛</li>
                        </ul>
                    </div>
                    <Search key="2" shape="simple" type="dark"  style={{ width: '200px' }} />
                </Shell.Navigation>
                <Shell.Action className='shell-action'>
                    <img src={CatImg} className="shell-img" alt="用户头像" />
                    <span style={{ marginLeft: 10 }}>robin</span>
                </Shell.Action>
                <Shell.Content className='shell-content'>
                    <div style={{ minHeight: 300, background: '#fff' }}></div>
                </Shell.Content>
                <Shell.Footer className='shell-footer'>
                    <span>Alibaba Fusion</span>
                    <span>@ 2019 Alibaba Piecework 版权所有</span>
                </Shell.Footer>
            </Shell>
        </div>
    )
}
