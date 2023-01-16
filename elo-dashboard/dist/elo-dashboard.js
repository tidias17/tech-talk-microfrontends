
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
System.register(['@elo/utility', '@elo/onboarding'], (function (exports) {
	'use strict';
	var formatValueToCurrency, orders, products, wallet, isPendingOnboarding, onboarding, statesOnboarding;
	return {
		setters: [function (module) {
			formatValueToCurrency = module.formatValueToCurrency;
			orders = module.orders;
			products = module.products;
			wallet = module.wallet;
			isPendingOnboarding = module.isPendingOnboarding;
			onboarding = module.onboarding;
		}, function (module) {
			statesOnboarding = module.statesOnboarding;
		}],
		execute: (function () {

			function getDefaultExportFromCjs (x) {
				return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
			}

			var singleSpaSvelte$1 = {};

			(function (exports) {

			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			exports["default"] = singleSpaSvelte;

			function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

			function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

			function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

			function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

			var defaultOpts = {
			  // required opts
			  component: null,
			  // optional opts
			  domElementGetter: null,
			  props: {}
			};

			function singleSpaSvelte(userOpts) {
			  if (_typeof(userOpts) !== "object") {
			    throw new Error("single-spa-svelte requires a configuration object");
			  }

			  var opts = _objectSpread(_objectSpread({}, defaultOpts), userOpts);

			  if (!opts.component) {
			    throw new Error("single-spa-svelte must be passed opts.component");
			  } // Just a shared object to store the mounted object state


			  var mountedInstances = {};
			  return {
			    bootstrap: bootstrap.bind(null, opts, mountedInstances),
			    mount: mount.bind(null, opts, mountedInstances),
			    unmount: unmount.bind(null, opts, mountedInstances),
			    update: update.bind(null, opts, mountedInstances)
			  };
			}

			function bootstrap(opts) {
			  return Promise.resolve();
			}

			function mount(opts, mountedInstances, singleSpaProps) {
			  var defaultOptKeys = Object.keys(defaultOpts);
			  var svelteOpts = Object.keys(opts).reduce(function (object, key) {
			    if (!defaultOptKeys.includes(key)) {
			      object[key] = opts[key];
			    }

			    return object;
			  }, {});
			  return Promise.resolve().then(function () {
			    var domElementGetter = chooseDomElementGetter(opts, singleSpaProps);
			    var domElement = domElementGetter(); // See https://svelte.dev/docs#Creating_a_component

			    mountedInstances.instance = new opts.component(_objectSpread(_objectSpread({}, svelteOpts), {}, {
			      target: domElement,
			      props: Object.assign({}, singleSpaProps, opts.props)
			    }));
			  });
			}

			function unmount(opts, mountedInstances) {
			  return Promise.resolve().then(function () {
			    mountedInstances.instance.$destroy ? mountedInstances.instance.$destroy() : mountedInstances.instance.destroy();
			  });
			}

			function update(opts, mountedInstances, props) {
			  return Promise.resolve().then(function () {
			    mountedInstances.instance.$set ? mountedInstances.instance.$set(props) : mountedInstances.instance.set(props);
			  });
			}

			function chooseDomElementGetter(opts, props) {
			  props = props && props.customProps ? props.customProps : props;

			  if (props.domElement) {
			    return function () {
			      return props.domElement;
			    };
			  } else if (props.domElementGetter) {
			    return function () {
			      return props.domElementGetter(props);
			    };
			  } else if (opts.domElementGetter) {
			    return function () {
			      return opts.domElementGetter(props);
			    };
			  } else {
			    return defaultDomElementGetter(props);
			  }
			}

			function defaultDomElementGetter(props) {
			  var appName = props.appName || props.name;

			  if (!appName) {
			    throw Error("single-spa-svelte was not given an application name as a prop, so it can't make a unique dom element container for the svelte application");
			  }

			  var htmlId = "single-spa-application:".concat(appName);
			  return function defaultDomEl() {
			    var domElement = document.getElementById(htmlId);

			    if (!domElement) {
			      domElement = document.createElement("div");
			      domElement.id = htmlId;
			      document.body.appendChild(domElement);
			    }

			    return domElement;
			  };
			}


			}(singleSpaSvelte$1));

			var singleSpaSvelte = /*@__PURE__*/getDefaultExportFromCjs(singleSpaSvelte$1);

			function noop() { }
			function run(fn) {
			    return fn();
			}
			function blank_object() {
			    return Object.create(null);
			}
			function run_all(fns) {
			    fns.forEach(run);
			}
			function is_function(thing) {
			    return typeof thing === 'function';
			}
			function safe_not_equal(a, b) {
			    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
			}
			function is_empty(obj) {
			    return Object.keys(obj).length === 0;
			}
			function subscribe(store, ...callbacks) {
			    if (store == null) {
			        return noop;
			    }
			    const unsub = store.subscribe(...callbacks);
			    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
			}
			function component_subscribe(component, store, callback) {
			    component.$$.on_destroy.push(subscribe(store, callback));
			}
			function append(target, node) {
			    target.appendChild(node);
			}
			function append_styles(target, style_sheet_id, styles) {
			    const append_styles_to = get_root_for_style(target);
			    if (!append_styles_to.getElementById(style_sheet_id)) {
			        const style = element('style');
			        style.id = style_sheet_id;
			        style.textContent = styles;
			        append_stylesheet(append_styles_to, style);
			    }
			}
			function get_root_for_style(node) {
			    if (!node)
			        return document;
			    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
			    if (root && root.host) {
			        return root;
			    }
			    return node.ownerDocument;
			}
			function append_stylesheet(node, style) {
			    append(node.head || node, style);
			    return style.sheet;
			}
			function insert(target, node, anchor) {
			    target.insertBefore(node, anchor || null);
			}
			function detach(node) {
			    if (node.parentNode) {
			        node.parentNode.removeChild(node);
			    }
			}
			function element(name) {
			    return document.createElement(name);
			}
			function text(data) {
			    return document.createTextNode(data);
			}
			function space() {
			    return text(' ');
			}
			function attr(node, attribute, value) {
			    if (value == null)
			        node.removeAttribute(attribute);
			    else if (node.getAttribute(attribute) !== value)
			        node.setAttribute(attribute, value);
			}
			function children(element) {
			    return Array.from(element.childNodes);
			}
			function set_data(text, data) {
			    data = '' + data;
			    if (text.wholeText !== data)
			        text.data = data;
			}

			let current_component;
			function set_current_component(component) {
			    current_component = component;
			}

			const dirty_components = [];
			const binding_callbacks = [];
			const render_callbacks = [];
			const flush_callbacks = [];
			const resolved_promise = Promise.resolve();
			let update_scheduled = false;
			function schedule_update() {
			    if (!update_scheduled) {
			        update_scheduled = true;
			        resolved_promise.then(flush);
			    }
			}
			function add_render_callback(fn) {
			    render_callbacks.push(fn);
			}
			// flush() calls callbacks in this order:
			// 1. All beforeUpdate callbacks, in order: parents before children
			// 2. All bind:this callbacks, in reverse order: children before parents.
			// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
			//    for afterUpdates called during the initial onMount, which are called in
			//    reverse order: children before parents.
			// Since callbacks might update component values, which could trigger another
			// call to flush(), the following steps guard against this:
			// 1. During beforeUpdate, any updated components will be added to the
			//    dirty_components array and will cause a reentrant call to flush(). Because
			//    the flush index is kept outside the function, the reentrant call will pick
			//    up where the earlier call left off and go through all dirty components. The
			//    current_component value is saved and restored so that the reentrant call will
			//    not interfere with the "parent" flush() call.
			// 2. bind:this callbacks cannot trigger new flush() calls.
			// 3. During afterUpdate, any updated components will NOT have their afterUpdate
			//    callback called a second time; the seen_callbacks set, outside the flush()
			//    function, guarantees this behavior.
			const seen_callbacks = new Set();
			let flushidx = 0; // Do *not* move this inside the flush() function
			function flush() {
			    // Do not reenter flush while dirty components are updated, as this can
			    // result in an infinite loop. Instead, let the inner flush handle it.
			    // Reentrancy is ok afterwards for bindings etc.
			    if (flushidx !== 0) {
			        return;
			    }
			    const saved_component = current_component;
			    do {
			        // first, call beforeUpdate functions
			        // and update components
			        try {
			            while (flushidx < dirty_components.length) {
			                const component = dirty_components[flushidx];
			                flushidx++;
			                set_current_component(component);
			                update(component.$$);
			            }
			        }
			        catch (e) {
			            // reset dirty state to not end up in a deadlocked state and then rethrow
			            dirty_components.length = 0;
			            flushidx = 0;
			            throw e;
			        }
			        set_current_component(null);
			        dirty_components.length = 0;
			        flushidx = 0;
			        while (binding_callbacks.length)
			            binding_callbacks.pop()();
			        // then, once components are updated, call
			        // afterUpdate functions. This may cause
			        // subsequent updates...
			        for (let i = 0; i < render_callbacks.length; i += 1) {
			            const callback = render_callbacks[i];
			            if (!seen_callbacks.has(callback)) {
			                // ...so guard against infinite loops
			                seen_callbacks.add(callback);
			                callback();
			            }
			        }
			        render_callbacks.length = 0;
			    } while (dirty_components.length);
			    while (flush_callbacks.length) {
			        flush_callbacks.pop()();
			    }
			    update_scheduled = false;
			    seen_callbacks.clear();
			    set_current_component(saved_component);
			}
			function update($$) {
			    if ($$.fragment !== null) {
			        $$.update();
			        run_all($$.before_update);
			        const dirty = $$.dirty;
			        $$.dirty = [-1];
			        $$.fragment && $$.fragment.p($$.ctx, dirty);
			        $$.after_update.forEach(add_render_callback);
			    }
			}
			const outroing = new Set();
			function transition_in(block, local) {
			    if (block && block.i) {
			        outroing.delete(block);
			        block.i(local);
			    }
			}
			function mount_component(component, target, anchor, customElement) {
			    const { fragment, after_update } = component.$$;
			    fragment && fragment.m(target, anchor);
			    if (!customElement) {
			        // onMount happens before the initial afterUpdate
			        add_render_callback(() => {
			            const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
			            // if the component was destroyed immediately
			            // it will update the `$$.on_destroy` reference to `null`.
			            // the destructured on_destroy may still reference to the old array
			            if (component.$$.on_destroy) {
			                component.$$.on_destroy.push(...new_on_destroy);
			            }
			            else {
			                // Edge case - component was destroyed immediately,
			                // most likely as a result of a binding initialising
			                run_all(new_on_destroy);
			            }
			            component.$$.on_mount = [];
			        });
			    }
			    after_update.forEach(add_render_callback);
			}
			function destroy_component(component, detaching) {
			    const $$ = component.$$;
			    if ($$.fragment !== null) {
			        run_all($$.on_destroy);
			        $$.fragment && $$.fragment.d(detaching);
			        // TODO null out other refs, including component.$$ (but need to
			        // preserve final state?)
			        $$.on_destroy = $$.fragment = null;
			        $$.ctx = [];
			    }
			}
			function make_dirty(component, i) {
			    if (component.$$.dirty[0] === -1) {
			        dirty_components.push(component);
			        schedule_update();
			        component.$$.dirty.fill(0);
			    }
			    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
			}
			function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
			    const parent_component = current_component;
			    set_current_component(component);
			    const $$ = component.$$ = {
			        fragment: null,
			        ctx: [],
			        // state
			        props,
			        update: noop,
			        not_equal,
			        bound: blank_object(),
			        // lifecycle
			        on_mount: [],
			        on_destroy: [],
			        on_disconnect: [],
			        before_update: [],
			        after_update: [],
			        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
			        // everything else
			        callbacks: blank_object(),
			        dirty,
			        skip_bound: false,
			        root: options.target || parent_component.$$.root
			    };
			    append_styles && append_styles($$.root);
			    let ready = false;
			    $$.ctx = instance
			        ? instance(component, options.props || {}, (i, ret, ...rest) => {
			            const value = rest.length ? rest[0] : ret;
			            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
			                if (!$$.skip_bound && $$.bound[i])
			                    $$.bound[i](value);
			                if (ready)
			                    make_dirty(component, i);
			            }
			            return ret;
			        })
			        : [];
			    $$.update();
			    ready = true;
			    run_all($$.before_update);
			    // `false` as a special case of no DOM component
			    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
			    if (options.target) {
			        if (options.hydrate) {
			            const nodes = children(options.target);
			            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			            $$.fragment && $$.fragment.l(nodes);
			            nodes.forEach(detach);
			        }
			        else {
			            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			            $$.fragment && $$.fragment.c();
			        }
			        if (options.intro)
			            transition_in(component.$$.fragment);
			        mount_component(component, options.target, options.anchor, options.customElement);
			        flush();
			    }
			    set_current_component(parent_component);
			}
			/**
			 * Base class for Svelte components. Used when dev=false.
			 */
			class SvelteComponent {
			    $destroy() {
			        destroy_component(this, 1);
			        this.$destroy = noop;
			    }
			    $on(type, callback) {
			        if (!is_function(callback)) {
			            return noop;
			        }
			        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
			        callbacks.push(callback);
			        return () => {
			            const index = callbacks.indexOf(callback);
			            if (index !== -1)
			                callbacks.splice(index, 1);
			        };
			    }
			    $set($$props) {
			        if (this.$$set && !is_empty($$props)) {
			            this.$$.skip_bound = true;
			            this.$$set($$props);
			            this.$$.skip_bound = false;
			        }
			    }
			}

			/* src/App.svelte generated by Svelte v3.55.1 */

			function add_css(target) {
				append_styles(target, "svelte-yb708w", ".warning.svelte-yb708w.svelte-yb708w{width:100%;background-color:rgba(252, 254, 98, 0.537254902);padding:8px;margin:12px 0;border:1px solid #000;border-radius:4px;font-size:13px;font-weight:500;font-style:italic;display:flex}.warning.svelte-yb708w img.svelte-yb708w{width:16px;height:24px;margin-right:12px}.global-cards.svelte-yb708w.svelte-yb708w{display:flex;justify-content:space-between;align-items:center;margin-top:24px;flex-wrap:wrap}.card-container.svelte-yb708w.svelte-yb708w{width:190px;height:120px;border-radius:8px;border:2px solid #000;background-color:#FDB930;display:flex;flex-direction:column;align-items:center;justify-content:center}.card-container.svelte-yb708w p.svelte-yb708w{font-weight:700}.card-container.svelte-yb708w span.svelte-yb708w{margin-top:12px;font-size:24px}");
			}

			// (16:2) {#if $isPendingOnboarding}
			function create_if_block(ctx) {
				let p;

				return {
					c() {
						p = element("p");

						p.innerHTML = `<img src="https://www.svgrepo.com/show/116114/alert.svg" class="svelte-yb708w"/>
    Esta conta ainda tem uma pendência de cadastro!`;

						attr(p, "class", "warning svelte-yb708w");
					},
					m(target, anchor) {
						insert(target, p, anchor);
					},
					d(detaching) {
						if (detaching) detach(p);
					}
				};
			}

			function create_fragment(ctx) {
				let section0;
				let t0;
				let p0;
				let t1;
				let t2_value = /*$onboarding*/ ctx[3].name + "";
				let t2;
				let t3;
				let t4_value = /*date*/ ctx[4].getDate() + "";
				let t4;
				let t5;
				let t6_value = /*months*/ ctx[6][/*date*/ ctx[4].getMonth()] + "";
				let t6;
				let t7;
				let t8_value = /*date*/ ctx[4].getFullYear() + "";
				let t8;
				let t9;
				let section6;
				let section1;
				let p1;
				let t11;
				let span0;
				let t13;
				let section2;
				let p2;
				let t15;
				let span1;
				let t17;
				let section3;
				let p3;
				let t19;
				let span2;
				let t20_value = /*$products*/ ctx[1].length - /*productsIsActive*/ ctx[7].length + "";
				let t20;
				let t21;
				let section4;
				let p4;
				let t23;
				let span3;
				let t25;
				let section5;
				let p5;
				let t27;
				let span4;
				let t28_value = /*$orders*/ ctx[0].length - /*orderWasSend*/ ctx[8].length + "";
				let t28;
				let if_block = /*$isPendingOnboarding*/ ctx[2] && create_if_block();

				return {
					c() {
						section0 = element("section");
						if (if_block) if_block.c();
						t0 = space();
						p0 = element("p");
						t1 = text("Olá ");
						t2 = text(t2_value);
						t3 = text(", seja bem vindo ao dashboard de vendedor!!Hojé é dia ");
						t4 = text(t4_value);
						t5 = text(" de ");
						t6 = text(t6_value);
						t7 = text(" de ");
						t8 = text(t8_value);
						t9 = space();
						section6 = element("section");
						section1 = element("section");
						p1 = element("p");
						p1.textContent = "Saldo em conta:";
						t11 = space();
						span0 = element("span");
						span0.textContent = `${/*balance*/ ctx[5]}`;
						t13 = space();
						section2 = element("section");
						p2 = element("p");
						p2.textContent = "Produtos Ativos:";
						t15 = space();
						span1 = element("span");
						span1.textContent = `${/*productsIsActive*/ ctx[7].length}`;
						t17 = space();
						section3 = element("section");
						p3 = element("p");
						p3.textContent = "Produtos Inativos:";
						t19 = space();
						span2 = element("span");
						t20 = text(t20_value);
						t21 = space();
						section4 = element("section");
						p4 = element("p");
						p4.textContent = "Pedidos Enviados:";
						t23 = space();
						span3 = element("span");
						span3.textContent = `${/*orderWasSend*/ ctx[8].length}`;
						t25 = space();
						section5 = element("section");
						p5 = element("p");
						p5.textContent = "Pedidos Pendentes:";
						t27 = space();
						span4 = element("span");
						t28 = text(t28_value);
						attr(p1, "class", "svelte-yb708w");
						attr(span0, "class", "svelte-yb708w");
						attr(section1, "class", "card-container svelte-yb708w");
						attr(p2, "class", "svelte-yb708w");
						attr(span1, "class", "svelte-yb708w");
						attr(section2, "class", "card-container svelte-yb708w");
						attr(p3, "class", "svelte-yb708w");
						attr(span2, "class", "svelte-yb708w");
						attr(section3, "class", "card-container svelte-yb708w");
						attr(p4, "class", "svelte-yb708w");
						attr(span3, "class", "svelte-yb708w");
						attr(section4, "class", "card-container svelte-yb708w");
						attr(p5, "class", "svelte-yb708w");
						attr(span4, "class", "svelte-yb708w");
						attr(section5, "class", "card-container svelte-yb708w");
						attr(section6, "class", "global-cards svelte-yb708w");
					},
					m(target, anchor) {
						insert(target, section0, anchor);
						if (if_block) if_block.m(section0, null);
						append(section0, t0);
						append(section0, p0);
						append(p0, t1);
						append(p0, t2);
						append(p0, t3);
						append(p0, t4);
						append(p0, t5);
						append(p0, t6);
						append(p0, t7);
						append(p0, t8);
						insert(target, t9, anchor);
						insert(target, section6, anchor);
						append(section6, section1);
						append(section1, p1);
						append(section1, t11);
						append(section1, span0);
						append(section6, t13);
						append(section6, section2);
						append(section2, p2);
						append(section2, t15);
						append(section2, span1);
						append(section6, t17);
						append(section6, section3);
						append(section3, p3);
						append(section3, t19);
						append(section3, span2);
						append(span2, t20);
						append(section6, t21);
						append(section6, section4);
						append(section4, p4);
						append(section4, t23);
						append(section4, span3);
						append(section6, t25);
						append(section6, section5);
						append(section5, p5);
						append(section5, t27);
						append(section5, span4);
						append(span4, t28);
					},
					p(ctx, [dirty]) {
						if (/*$isPendingOnboarding*/ ctx[2]) {
							if (if_block) ; else {
								if_block = create_if_block();
								if_block.c();
								if_block.m(section0, t0);
							}
						} else if (if_block) {
							if_block.d(1);
							if_block = null;
						}

						if (dirty & /*$onboarding*/ 8 && t2_value !== (t2_value = /*$onboarding*/ ctx[3].name + "")) set_data(t2, t2_value);
						if (dirty & /*$products*/ 2 && t20_value !== (t20_value = /*$products*/ ctx[1].length - /*productsIsActive*/ ctx[7].length + "")) set_data(t20, t20_value);
						if (dirty & /*$orders*/ 1 && t28_value !== (t28_value = /*$orders*/ ctx[0].length - /*orderWasSend*/ ctx[8].length + "")) set_data(t28, t28_value);
					},
					i: noop,
					o: noop,
					d(detaching) {
						if (detaching) detach(section0);
						if (if_block) if_block.d();
						if (detaching) detach(t9);
						if (detaching) detach(section6);
					}
				};
			}

			function instance($$self, $$props, $$invalidate) {
				let $orders;
				let $products;
				let $wallet;
				let $isPendingOnboarding;
				let $onboarding;
				component_subscribe($$self, orders, $$value => $$invalidate(0, $orders = $$value));
				component_subscribe($$self, products, $$value => $$invalidate(1, $products = $$value));
				component_subscribe($$self, wallet, $$value => $$invalidate(9, $wallet = $$value));
				component_subscribe($$self, isPendingOnboarding, $$value => $$invalidate(2, $isPendingOnboarding = $$value));
				component_subscribe($$self, onboarding, $$value => $$invalidate(3, $onboarding = $$value));
				const date = new Date();
				const balance = formatValueToCurrency($wallet.value);

				const months = [
					"Janeiro",
					"Fevereiro",
					"Março",
					"Abril",
					"Maio",
					"Junho",
					"Julho",
					"Agosto",
					"Setembro",
					"Outubro",
					"Novembro",
					"Dezembro"
				];

				const productsIsActive = $products.filter(item => item.isActive);
				const orderWasSend = $orders.filter(item => item.wasSend);

				const pdq = async () => {
					console.log(await statesOnboarding());
				};

				pdq();

				return [
					$orders,
					$products,
					$isPendingOnboarding,
					$onboarding,
					date,
					balance,
					months,
					productsIsActive,
					orderWasSend
				];
			}

			class App extends SvelteComponent {
				constructor(options) {
					super();
					init(this, options, instance, create_fragment, safe_not_equal, {}, add_css);
				}
			}

			const svelteLifecycles = singleSpaSvelte({
			  component: App,
			});

			const { bootstrap, mount, unmount } = svelteLifecycles; exports({ bootstrap: bootstrap, mount: mount, unmount: unmount });

		})
	};
}));
//# sourceMappingURL=elo-dashboard.js.map
