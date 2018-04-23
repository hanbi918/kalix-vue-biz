import UserSelect from '../components/biz/userselect/userselect'
import BaseDictAdd from '../components/biz/dict/basedictAdd'
import BasedictSearch from '../components/biz/dict/basedictSearch'
import BasedictView from '../components/biz/dict/basedictView'
import Basedict from '../components/biz/dict/basedict'

import OrgTree from '../components/biz/tree/OrgTree'

import BaseTransfer from '../components/biz/select/baseTransfer'

const components = [
  UserSelect,
  BaseDictAdd,
  BasedictSearch,
  BasedictView,
  Basedict,

  OrgTree,

  BaseTransfer
]

const biz = {
  install: function (Vue, opts) {
    opts = opts | {}

    components.map((component) => {
      Vue.component(component.name, component)
    })

    let moduleInfo = {
      moduleName: 'biz',
      moduleResolveArr: [],
      moduleKeyArr: []
    }
    Vue.prototype.$module = moduleInfo
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(biz)
}
export default biz
