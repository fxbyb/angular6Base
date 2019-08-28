import { NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd';

// tslint:disable-next-line:variable-name
export const CMB_Enums = {};
export default class Core {

  private static _is(type, primitive = false) {
    // tslint:disable-next-line:only-arrow-functions
    return function(obj) {
      return primitive ? typeof obj == type.toLowerCase() : {}.toString.call(obj) == '[object ' + type + ']';
    };
  }

  static isObject(item) {
    return this._is('Object')(item);
  }

  static isArray(item) {
    return Array.isArray(item) || this._is('Array')(item);
  }

  static isFunction(item) {
    return this._is('Function')(item);
  }

  static isString(item) {
    return this._is('String', true)(item);
  }

  static isNumber(item) {
    return this._is('Number', true)(item);
  }

  static isBoolean(item) {
    return this._is('Boolean', true)(item);
  }

  static isGuid(item) {
    const regex = new RegExp('[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}');
    return regex.test(item);
  }

}

export function getTreeNodes(data: Array<any> | object) {
  if (!data) {
    console.error(`当前树的数据源参数data为空，不能渲染!`);
    return;
  }

  const nodes: NzTreeNode[] = [];
  const items = Core.isObject(data) ? [data] : [].concat(data);
  let nodeOptions: NzTreeNodeOptions[] = [];
  items.map(item => nodeOptions = [...nodeOptions, item as NzTreeNodeOptions]);

  nodeOptions.forEach(opt => nodes.push(new NzTreeNode(opt)));

  return nodes;
}
