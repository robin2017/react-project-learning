import Index from '../pages/hello'
import Fusion from '../pages/fusion'
import FusionForm from '../pages/fusion/form'
import FusionTable from '../pages/fusion/table'
import FusionShell from '../pages/fusion/shell'
import FormilyHello from '../pages/formily/hello/index-jsx'
import FormilyHello2 from '../pages/formily/hello/index-json'
import FormilyQueryList from '../pages/formily/querylist'
import FormilyInsertRecord from '../pages/formily/insertRecord'
import FormTableAntd from '../pages/formTable/antd'
import FormTableFusion from '../pages/formTable/fusionNext'
import BizChartsHello from '../pages/bizcharts/hello'
import BizChartsRadar from '../pages/bizcharts/radar'
import EChartsRadar from '../pages/echarts/radar'
import Effect1 from '../pages/reactHooks/effect1'
import Progress from '../pages/fusion/progress'
import DataBind from '../pages/reactHooks/databind'
import Hoc2Hook from '../pages/reactHooks/hoc2hook/index3'
import ReduceRender from '../pages/reduceRender/index'
 
export default [
    { Component: Index, path: '/', label: '首页' },
    { Component: Fusion, path: '/fusion', label: 'fusion示例' },
    { Component: FusionForm, path: '/fusion-form', label: 'fusion示例-表单' },
    { Component: FusionTable, path: '/fusion-table', label: 'fusion示例-表格' },
    { Component: FusionShell, path: '/fusion-shell', label: 'fusion示例-shell' },
    { Component: FormilyHello, path: '/formily-hello', label: 'formily示例-hello-jsx-schema' },
    { Component: FormilyHello2, path: '/formily-hello2', label: 'formily示例-hello-json-schema' },
    { Component: FormilyQueryList, path: '/formily-query-list', label: 'formily示例-查询列表' },
    { Component: FormilyInsertRecord, path: '/formily-insert-record', label: 'formily示例-插入记录' },
    { Component: FormTableAntd, path: '/form-table-antd', label: '表单+表格：antd' },
    { Component: FormTableFusion, path: '/form-table-fusion', label: '表单+表格：fusion' },
    { Component: BizChartsHello, path: '/biz-charts-hello', label: 'bizCharts:hello' },
    { Component: BizChartsRadar, path: '/biz-charts-radar', label: 'bizCharts:雷达图(圆形)' },
    { Component: EChartsRadar, path: '/echarts-radar', label: 'echarts:雷达图(网形)' },
    { Component: Effect1, path: '/effect1', label: 'effect1' },
    { Component: Progress, path: '/progress', label: '进度条' },
    { Component: DataBind, path: '/databind', label: '数据绑定' },
    { Component: Hoc2Hook, path: '/hoc2hook', label: 'hoc和hook抽象' },
    { Component: ReduceRender, path: '/reduceRender', label: '减少重复渲染(查看控制台)' },
] 