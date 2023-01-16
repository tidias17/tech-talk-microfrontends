
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
System.register(['@elo/utility', 'single-spa'], (function (exports) {
	'use strict';
	var tapioca, states, isPendingOnboarding, navigateToUrl;
	return {
		setters: [function (module) {
			tapioca = module.tapioca;
			states = module.states;
			isPendingOnboarding = module.isPendingOnboarding;
		}, function (module) {
			navigateToUrl = module.navigateToUrl;
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
			let src_url_equal_anchor;
			function src_url_equal(element_src, url) {
			    if (!src_url_equal_anchor) {
			        src_url_equal_anchor = document.createElement('a');
			    }
			    src_url_equal_anchor.href = url;
			    return element_src === src_url_equal_anchor.href;
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
			function listen(node, event, handler, options) {
			    node.addEventListener(event, handler, options);
			    return () => node.removeEventListener(event, handler, options);
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
				append_styles(target, "svelte-11yyrjg", "header.svelte-11yyrjg.svelte-11yyrjg{width:100%;display:flex;align-items:center;justify-content:space-between;margin:16px 0}header.svelte-11yyrjg ul.svelte-11yyrjg{display:flex;flex-wrap:nowrap;margin-left:16px;gap:32px}header.svelte-11yyrjg ul li.svelte-11yyrjg{cursor:pointer}");
			}

			function create_fragment(ctx) {
				let header;
				let img;
				let img_src_value;
				let t0;
				let ul;
				let li0;
				let t2;
				let li1;
				let t4;
				let li2;
				let t6;
				let li3;
				let t8;
				let li4;
				let mounted;
				let dispose;

				return {
					c() {
						header = element("header");
						img = element("img");
						t0 = space();
						ul = element("ul");
						li0 = element("li");
						li0.textContent = "Dashboard";
						t2 = space();
						li1 = element("li");
						li1.textContent = "Cadastro";
						t4 = space();
						li2 = element("li");
						li2.textContent = "Produtos";
						t6 = space();
						li3 = element("li");
						li3.textContent = "Pedidos";
						t8 = space();
						li4 = element("li");
						li4.textContent = "Carteira";
						if (!src_url_equal(img.src, img_src_value = "https://images.elo7.com.br/assets/v3/desktop/svg/logo-elo7.svg")) attr(img, "src", img_src_value);
						attr(img, "width", "89");
						attr(img, "height", "34");
						attr(img, "alt", "Logo Elo7");
						attr(li0, "class", "svelte-11yyrjg");
						attr(li1, "class", "svelte-11yyrjg");
						attr(li2, "class", "svelte-11yyrjg");
						attr(li3, "class", "svelte-11yyrjg");
						attr(li4, "class", "svelte-11yyrjg");
						attr(ul, "class", "svelte-11yyrjg");
						attr(header, "class", "svelte-11yyrjg");
					},
					m(target, anchor) {
						insert(target, header, anchor);
						append(header, img);
						append(header, t0);
						append(header, ul);
						append(ul, li0);
						append(ul, t2);
						append(ul, li1);
						append(ul, t4);
						append(ul, li2);
						append(ul, t6);
						append(ul, li3);
						append(ul, t8);
						append(ul, li4);

						if (!mounted) {
							dispose = [
								listen(img, "click", /*click*/ ctx[0]),
								listen(li0, "click", /*click_handler*/ ctx[1]),
								listen(li1, "click", /*click_handler_1*/ ctx[2]),
								listen(li2, "click", /*click_handler_2*/ ctx[3]),
								listen(li3, "click", /*click_handler_3*/ ctx[4]),
								listen(li4, "click", /*click_handler_4*/ ctx[5])
							];

							mounted = true;
						}
					},
					p: noop,
					i: noop,
					o: noop,
					d(detaching) {
						if (detaching) detach(header);
						mounted = false;
						run_all(dispose);
					}
				};
			}

			function instance($$self, $$props, $$invalidate) {
				let $isPendingOnboarding;
				component_subscribe($$self, isPendingOnboarding, $$value => $$invalidate(6, $isPendingOnboarding = $$value));

				const click = async () => {
					tapioca('alface');
					await states();
					isPendingOnboarding.set(!$isPendingOnboarding);
				};

				const click_handler = () => navigateToUrl("/");
				const click_handler_1 = () => navigateToUrl("/onboarding");
				const click_handler_2 = () => navigateToUrl("/products");
				const click_handler_3 = () => navigateToUrl("/order");
				const click_handler_4 = () => navigateToUrl("/wallet");

				return [
					click,
					click_handler,
					click_handler_1,
					click_handler_2,
					click_handler_3,
					click_handler_4
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

			const pdq = exports('pdq', (value) => {
			  console.log(`Pão de Queijo é mais gostoso que ${value}`);
			});

		})
	};
}));
//# sourceMappingURL=elo-header.js.map
