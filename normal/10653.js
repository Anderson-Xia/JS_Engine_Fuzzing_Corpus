/**
 * @author xuld
 */

//#include core/base.js

/**
 * 定义名字空间。
 * @param {String} ns 名字空间。
 * @param {Object} obj 值。
 */
function namespace(ns, obj) {

	//assert(ns && ns.split, "JPlus.namespace(namespace, obj, value): {namespace} 不是合法的名字空间。", ns);

	// 取值，创建。
	ns = ns.split('.');

	// 如果第1个字符是 ., 则表示内置使用的名字空间。
	var current = window, i = -1;

	// 依次创建对象。
	while (++i < ns.length)
		current = current[ns[i]] || (current[ns[i]] = {});

	// 如果对象已存在，则拷贝成员到最后一个对象。
    return Object.extend(current, obj);

};