
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35731/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
System.register(['@elo/utility'], (function (exports) {
	'use strict';
	var onboarding, isPendingOnboarding;
	return {
		setters: [function (module) {
			onboarding = module.onboarding;
			isPendingOnboarding = module.isPendingOnboarding;
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
			function assign(tar, src) {
			    // @ts-ignore
			    for (const k in src)
			        tar[k] = src[k];
			    return tar;
			}
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
			function create_slot(definition, ctx, $$scope, fn) {
			    if (definition) {
			        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
			        return definition[0](slot_ctx);
			    }
			}
			function get_slot_context(definition, ctx, $$scope, fn) {
			    return definition[1] && fn
			        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
			        : $$scope.ctx;
			}
			function get_slot_changes(definition, $$scope, dirty, fn) {
			    if (definition[2] && fn) {
			        const lets = definition[2](fn(dirty));
			        if ($$scope.dirty === undefined) {
			            return lets;
			        }
			        if (typeof lets === 'object') {
			            const merged = [];
			            const len = Math.max($$scope.dirty.length, lets.length);
			            for (let i = 0; i < len; i += 1) {
			                merged[i] = $$scope.dirty[i] | lets[i];
			            }
			            return merged;
			        }
			        return $$scope.dirty | lets;
			    }
			    return $$scope.dirty;
			}
			function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
			    if (slot_changes) {
			        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
			        slot.p(slot_context, slot_changes);
			    }
			}
			function get_all_dirty_from_scope($$scope) {
			    if ($$scope.ctx.length > 32) {
			        const dirty = [];
			        const length = $$scope.ctx.length / 32;
			        for (let i = 0; i < length; i++) {
			            dirty[i] = -1;
			        }
			        return dirty;
			    }
			    return -1;
			}
			function exclude_internal_props(props) {
			    const result = {};
			    for (const k in props)
			        if (k[0] !== '$')
			            result[k] = props[k];
			    return result;
			}
			function compute_rest_props(props, keys) {
			    const rest = {};
			    keys = new Set(keys);
			    for (const k in props)
			        if (!keys.has(k) && k[0] !== '$')
			            rest[k] = props[k];
			    return rest;
			}
			function compute_slots(slots) {
			    const result = {};
			    for (const key in slots) {
			        result[key] = true;
			    }
			    return result;
			}
			function set_store_value(store, ret, value) {
			    store.set(value);
			    return ret;
			}
			function action_destroyer(action_result) {
			    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
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
			function empty() {
			    return text('');
			}
			function listen(node, event, handler, options) {
			    node.addEventListener(event, handler, options);
			    return () => node.removeEventListener(event, handler, options);
			}
			function prevent_default(fn) {
			    return function (event) {
			        event.preventDefault();
			        // @ts-ignore
			        return fn.call(this, event);
			    };
			}
			function stop_propagation(fn) {
			    return function (event) {
			        event.stopPropagation();
			        // @ts-ignore
			        return fn.call(this, event);
			    };
			}
			function attr(node, attribute, value) {
			    if (value == null)
			        node.removeAttribute(attribute);
			    else if (node.getAttribute(attribute) !== value)
			        node.setAttribute(attribute, value);
			}
			function set_attributes(node, attributes) {
			    // @ts-ignore
			    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
			    for (const key in attributes) {
			        if (attributes[key] == null) {
			            node.removeAttribute(key);
			        }
			        else if (key === 'style') {
			            node.style.cssText = attributes[key];
			        }
			        else if (key === '__value') {
			            node.value = node[key] = attributes[key];
			        }
			        else if (descriptors[key] && descriptors[key].set) {
			            node[key] = attributes[key];
			        }
			        else {
			            attr(node, key, attributes[key]);
			        }
			    }
			}
			function set_custom_element_data_map(node, data_map) {
			    Object.keys(data_map).forEach((key) => {
			        set_custom_element_data(node, key, data_map[key]);
			    });
			}
			function set_custom_element_data(node, prop, value) {
			    if (prop in node) {
			        node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
			    }
			    else {
			        attr(node, prop, value);
			    }
			}
			function children(element) {
			    return Array.from(element.childNodes);
			}
			function set_data(text, data) {
			    data = '' + data;
			    if (text.wholeText !== data)
			        text.data = data;
			}
			function set_input_value(input, value) {
			    input.value = value == null ? '' : value;
			}
			function construct_svelte_component(component, props) {
			    return new component(props);
			}

			let current_component;
			function set_current_component(component) {
			    current_component = component;
			}
			function get_current_component() {
			    if (!current_component)
			        throw new Error('Function called outside component initialization');
			    return current_component;
			}
			/**
			 * The `onMount` function schedules a callback to run as soon as the component has been mounted to the DOM.
			 * It must be called during the component's initialisation (but doesn't need to live *inside* the component;
			 * it can be called from an external module).
			 *
			 * `onMount` does not run inside a [server-side component](/docs#run-time-server-side-component-api).
			 *
			 * https://svelte.dev/docs#run-time-svelte-onmount
			 */
			function onMount(fn) {
			    get_current_component().$$.on_mount.push(fn);
			}
			/**
			 * Schedules a callback to run immediately before the component is unmounted.
			 *
			 * Out of `onMount`, `beforeUpdate`, `afterUpdate` and `onDestroy`, this is the
			 * only one that runs inside a server-side component.
			 *
			 * https://svelte.dev/docs#run-time-svelte-ondestroy
			 */
			function onDestroy(fn) {
			    get_current_component().$$.on_destroy.push(fn);
			}
			/**
			 * Associates an arbitrary `context` object with the current component and the specified `key`
			 * and returns that object. The context is then available to children of the component
			 * (including slotted content) with `getContext`.
			 *
			 * Like lifecycle functions, this must be called during component initialisation.
			 *
			 * https://svelte.dev/docs#run-time-svelte-setcontext
			 */
			function setContext(key, context) {
			    get_current_component().$$.context.set(key, context);
			    return context;
			}
			/**
			 * Retrieves the context that belongs to the closest parent component with the specified `key`.
			 * Must be called during component initialisation.
			 *
			 * https://svelte.dev/docs#run-time-svelte-getcontext
			 */
			function getContext(key) {
			    return get_current_component().$$.context.get(key);
			}
			// TODO figure out if we still want to support
			// shorthand events, or if we want to implement
			// a real bubbling mechanism
			function bubble(component, event) {
			    const callbacks = component.$$.callbacks[event.type];
			    if (callbacks) {
			        // @ts-ignore
			        callbacks.slice().forEach(fn => fn.call(this, event));
			    }
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
			function tick() {
			    schedule_update();
			    return resolved_promise;
			}
			function add_render_callback(fn) {
			    render_callbacks.push(fn);
			}
			function add_flush_callback(fn) {
			    flush_callbacks.push(fn);
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
			let outros;
			function group_outros() {
			    outros = {
			        r: 0,
			        c: [],
			        p: outros // parent group
			    };
			}
			function check_outros() {
			    if (!outros.r) {
			        run_all(outros.c);
			    }
			    outros = outros.p;
			}
			function transition_in(block, local) {
			    if (block && block.i) {
			        outroing.delete(block);
			        block.i(local);
			    }
			}
			function transition_out(block, local, detach, callback) {
			    if (block && block.o) {
			        if (outroing.has(block))
			            return;
			        outroing.add(block);
			        outros.c.push(() => {
			            outroing.delete(block);
			            if (callback) {
			                if (detach)
			                    block.d(1);
			                callback();
			            }
			        });
			        block.o(local);
			    }
			    else if (callback) {
			        callback();
			    }
			}

			function get_spread_update(levels, updates) {
			    const update = {};
			    const to_null_out = {};
			    const accounted_for = { $$scope: 1 };
			    let i = levels.length;
			    while (i--) {
			        const o = levels[i];
			        const n = updates[i];
			        if (n) {
			            for (const key in o) {
			                if (!(key in n))
			                    to_null_out[key] = 1;
			            }
			            for (const key in n) {
			                if (!accounted_for[key]) {
			                    update[key] = n[key];
			                    accounted_for[key] = 1;
			                }
			            }
			            levels[i] = n;
			        }
			        else {
			            for (const key in o) {
			                accounted_for[key] = 1;
			            }
			        }
			    }
			    for (const key in to_null_out) {
			        if (!(key in update))
			            update[key] = undefined;
			    }
			    return update;
			}
			function get_spread_object(spread_props) {
			    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
			}

			function bind(component, name, callback) {
			    const index = component.$$.props[name];
			    if (index !== undefined) {
			        component.$$.bound[index] = callback;
			        callback(component.$$.ctx[index]);
			    }
			}
			function create_component(block) {
			    block && block.c();
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

			/******************************************************************************
			Copyright (c) Microsoft Corporation.

			Permission to use, copy, modify, and/or distribute this software for any
			purpose with or without fee is hereby granted.

			THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
			REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
			AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
			INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
			LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
			OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
			PERFORMANCE OF THIS SOFTWARE.
			***************************************************************************** */
			/* global Reflect, Promise */

			var extendStatics$4 = function(d, b) {
			    extendStatics$4 = Object.setPrototypeOf ||
			        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
			        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
			    return extendStatics$4(d, b);
			};

			function __extends$4(d, b) {
			    if (typeof b !== "function" && b !== null)
			        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			    extendStatics$4(d, b);
			    function __() { this.constructor = d; }
			    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			}

			var __assign$4 = function() {
			    __assign$4 = Object.assign || function __assign(t) {
			        for (var s, i = 1, n = arguments.length; i < n; i++) {
			            s = arguments[i];
			            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			        }
			        return t;
			    };
			    return __assign$4.apply(this, arguments);
			};

			function __values$1(o) {
			    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
			    if (m) return m.call(o);
			    if (o && typeof o.length === "number") return {
			        next: function () {
			            if (o && i >= o.length) o = void 0;
			            return { value: o && o[i++], done: !o };
			        }
			    };
			    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
			}

			/**
			 * @license
			 * Copyright 2016 Google Inc.
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining a copy
			 * of this software and associated documentation files (the "Software"), to deal
			 * in the Software without restriction, including without limitation the rights
			 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			 * copies of the Software, and to permit persons to whom the Software is
			 * furnished to do so, subject to the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be included in
			 * all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			 * THE SOFTWARE.
			 */
			var MDCFoundation = /** @class */ (function () {
			    function MDCFoundation(adapter) {
			        if (adapter === void 0) { adapter = {}; }
			        this.adapter = adapter;
			    }
			    Object.defineProperty(MDCFoundation, "cssClasses", {
			        get: function () {
			            // Classes extending MDCFoundation should implement this method to return an object which exports every
			            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
			            return {};
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCFoundation, "strings", {
			        get: function () {
			            // Classes extending MDCFoundation should implement this method to return an object which exports all
			            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
			            return {};
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCFoundation, "numbers", {
			        get: function () {
			            // Classes extending MDCFoundation should implement this method to return an object which exports all
			            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
			            return {};
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCFoundation, "defaultAdapter", {
			        get: function () {
			            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
			            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
			            // validation.
			            return {};
			        },
			        enumerable: false,
			        configurable: true
			    });
			    MDCFoundation.prototype.init = function () {
			        // Subclasses should override this method to perform initialization routines (registering events, etc.)
			    };
			    MDCFoundation.prototype.destroy = function () {
			        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
			    };
			    return MDCFoundation;
			}());

			/**
			 * @license
			 * Copyright 2019 Google Inc.
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining a copy
			 * of this software and associated documentation files (the "Software"), to deal
			 * in the Software without restriction, including without limitation the rights
			 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			 * copies of the Software, and to permit persons to whom the Software is
			 * furnished to do so, subject to the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be included in
			 * all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			 * THE SOFTWARE.
			 */
			/**
			 * Determine whether the current browser supports passive event listeners, and
			 * if so, use them.
			 */
			function applyPassive$1(globalObj) {
			    if (globalObj === void 0) { globalObj = window; }
			    return supportsPassiveOption(globalObj) ?
			        { passive: true } :
			        false;
			}
			function supportsPassiveOption(globalObj) {
			    if (globalObj === void 0) { globalObj = window; }
			    // See
			    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
			    var passiveSupported = false;
			    try {
			        var options = {
			            // This function will be called when the browser
			            // attempts to access the passive property.
			            get passive() {
			                passiveSupported = true;
			                return false;
			            }
			        };
			        var handler = function () { };
			        globalObj.document.addEventListener('test', handler, options);
			        globalObj.document.removeEventListener('test', handler, options);
			    }
			    catch (err) {
			        passiveSupported = false;
			    }
			    return passiveSupported;
			}

			var events = /*#__PURE__*/Object.freeze({
				__proto__: null,
				applyPassive: applyPassive$1
			});

			/**
			 * @license
			 * Copyright 2018 Google Inc.
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining a copy
			 * of this software and associated documentation files (the "Software"), to deal
			 * in the Software without restriction, including without limitation the rights
			 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			 * copies of the Software, and to permit persons to whom the Software is
			 * furnished to do so, subject to the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be included in
			 * all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			 * THE SOFTWARE.
			 */
			/**
			 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
			 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
			 */
			function closest(element, selector) {
			    if (element.closest) {
			        return element.closest(selector);
			    }
			    var el = element;
			    while (el) {
			        if (matches$1(el, selector)) {
			            return el;
			        }
			        el = el.parentElement;
			    }
			    return null;
			}
			function matches$1(element, selector) {
			    var nativeMatches = element.matches
			        || element.webkitMatchesSelector
			        || element.msMatchesSelector;
			    return nativeMatches.call(element, selector);
			}
			/**
			 * Used to compute the estimated scroll width of elements. When an element is
			 * hidden due to display: none; being applied to a parent element, the width is
			 * returned as 0. However, the element will have a true width once no longer
			 * inside a display: none context. This method computes an estimated width when
			 * the element is hidden or returns the true width when the element is visble.
			 * @param {Element} element the element whose width to estimate
			 */
			function estimateScrollWidth(element) {
			    // Check the offsetParent. If the element inherits display: none from any
			    // parent, the offsetParent property will be null (see
			    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
			    // This check ensures we only clone the node when necessary.
			    var htmlEl = element;
			    if (htmlEl.offsetParent !== null) {
			        return htmlEl.scrollWidth;
			    }
			    var clone = htmlEl.cloneNode(true);
			    clone.style.setProperty('position', 'absolute');
			    clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
			    document.documentElement.appendChild(clone);
			    var scrollWidth = clone.scrollWidth;
			    document.documentElement.removeChild(clone);
			    return scrollWidth;
			}

			var ponyfill = /*#__PURE__*/Object.freeze({
				__proto__: null,
				closest: closest,
				matches: matches$1,
				estimateScrollWidth: estimateScrollWidth
			});

			/******************************************************************************
			Copyright (c) Microsoft Corporation.

			Permission to use, copy, modify, and/or distribute this software for any
			purpose with or without fee is hereby granted.

			THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
			REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
			AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
			INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
			LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
			OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
			PERFORMANCE OF THIS SOFTWARE.
			***************************************************************************** */
			/* global Reflect, Promise */

			var extendStatics$3 = function(d, b) {
			    extendStatics$3 = Object.setPrototypeOf ||
			        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
			        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
			    return extendStatics$3(d, b);
			};

			function __extends$3(d, b) {
			    if (typeof b !== "function" && b !== null)
			        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			    extendStatics$3(d, b);
			    function __() { this.constructor = d; }
			    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			}

			var __assign$3 = function() {
			    __assign$3 = Object.assign || function __assign(t) {
			        for (var s, i = 1, n = arguments.length; i < n; i++) {
			            s = arguments[i];
			            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			        }
			        return t;
			    };
			    return __assign$3.apply(this, arguments);
			};

			/**
			 * @license
			 * Copyright 2016 Google Inc.
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining a copy
			 * of this software and associated documentation files (the "Software"), to deal
			 * in the Software without restriction, including without limitation the rights
			 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			 * copies of the Software, and to permit persons to whom the Software is
			 * furnished to do so, subject to the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be included in
			 * all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			 * THE SOFTWARE.
			 */
			var cssClasses$4 = {
			    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
			    LABEL_REQUIRED: 'mdc-floating-label--required',
			    LABEL_SHAKE: 'mdc-floating-label--shake',
			    ROOT: 'mdc-floating-label',
			};

			/**
			 * @license
			 * Copyright 2016 Google Inc.
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining a copy
			 * of this software and associated documentation files (the "Software"), to deal
			 * in the Software without restriction, including without limitation the rights
			 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			 * copies of the Software, and to permit persons to whom the Software is
			 * furnished to do so, subject to the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be included in
			 * all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			 * THE SOFTWARE.
			 */
			var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
			    __extends$3(MDCFloatingLabelFoundation, _super);
			    function MDCFloatingLabelFoundation(adapter) {
			        var _this = _super.call(this, __assign$3(__assign$3({}, MDCFloatingLabelFoundation.defaultAdapter), adapter)) || this;
			        _this.shakeAnimationEndHandler = function () {
			            _this.handleShakeAnimationEnd();
			        };
			        return _this;
			    }
			    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
			        get: function () {
			            return cssClasses$4;
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
			        /**
			         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
			         */
			        get: function () {
			            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
			            return {
			                addClass: function () { return undefined; },
			                removeClass: function () { return undefined; },
			                getWidth: function () { return 0; },
			                registerInteractionHandler: function () { return undefined; },
			                deregisterInteractionHandler: function () { return undefined; },
			            };
			            // tslint:enable:object-literal-sort-keys
			        },
			        enumerable: false,
			        configurable: true
			    });
			    MDCFloatingLabelFoundation.prototype.init = function () {
			        this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler);
			    };
			    MDCFloatingLabelFoundation.prototype.destroy = function () {
			        this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler);
			    };
			    /**
			     * Returns the width of the label element.
			     */
			    MDCFloatingLabelFoundation.prototype.getWidth = function () {
			        return this.adapter.getWidth();
			    };
			    /**
			     * Styles the label to produce a shake animation to indicate an error.
			     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
			     */
			    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
			        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
			        if (shouldShake) {
			            this.adapter.addClass(LABEL_SHAKE);
			        }
			        else {
			            this.adapter.removeClass(LABEL_SHAKE);
			        }
			    };
			    /**
			     * Styles the label to float or dock.
			     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
			     */
			    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
			        var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
			        if (shouldFloat) {
			            this.adapter.addClass(LABEL_FLOAT_ABOVE);
			        }
			        else {
			            this.adapter.removeClass(LABEL_FLOAT_ABOVE);
			            this.adapter.removeClass(LABEL_SHAKE);
			        }
			    };
			    /**
			     * Styles the label as required.
			     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
			     */
			    MDCFloatingLabelFoundation.prototype.setRequired = function (isRequired) {
			        var LABEL_REQUIRED = MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;
			        if (isRequired) {
			            this.adapter.addClass(LABEL_REQUIRED);
			        }
			        else {
			            this.adapter.removeClass(LABEL_REQUIRED);
			        }
			    };
			    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd = function () {
			        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
			        this.adapter.removeClass(LABEL_SHAKE);
			    };
			    return MDCFloatingLabelFoundation;
			}(MDCFoundation));

			/******************************************************************************
			Copyright (c) Microsoft Corporation.

			Permission to use, copy, modify, and/or distribute this software for any
			purpose with or without fee is hereby granted.

			THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
			REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
			AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
			INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
			LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
			OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
			PERFORMANCE OF THIS SOFTWARE.
			***************************************************************************** */
			/* global Reflect, Promise */

			var extendStatics$2 = function(d, b) {
			    extendStatics$2 = Object.setPrototypeOf ||
			        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
			        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
			    return extendStatics$2(d, b);
			};

			function __extends$2(d, b) {
			    if (typeof b !== "function" && b !== null)
			        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			    extendStatics$2(d, b);
			    function __() { this.constructor = d; }
			    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			}

			var __assign$2 = function() {
			    __assign$2 = Object.assign || function __assign(t) {
			        for (var s, i = 1, n = arguments.length; i < n; i++) {
			            s = arguments[i];
			            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			        }
			        return t;
			    };
			    return __assign$2.apply(this, arguments);
			};

			/**
			 * @license
			 * Copyright 2018 Google Inc.
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining a copy
			 * of this software and associated documentation files (the "Software"), to deal
			 * in the Software without restriction, including without limitation the rights
			 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			 * copies of the Software, and to permit persons to whom the Software is
			 * furnished to do so, subject to the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be included in
			 * all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			 * THE SOFTWARE.
			 */
			var cssClasses$3 = {
			    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
			    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
			};

			/**
			 * @license
			 * Copyright 2018 Google Inc.
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining a copy
			 * of this software and associated documentation files (the "Software"), to deal
			 * in the Software without restriction, including without limitation the rights
			 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			 * copies of the Software, and to permit persons to whom the Software is
			 * furnished to do so, subject to the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be included in
			 * all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			 * THE SOFTWARE.
			 */
			var MDCLineRippleFoundation = /** @class */ (function (_super) {
			    __extends$2(MDCLineRippleFoundation, _super);
			    function MDCLineRippleFoundation(adapter) {
			        var _this = _super.call(this, __assign$2(__assign$2({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;
			        _this.transitionEndHandler = function (evt) {
			            _this.handleTransitionEnd(evt);
			        };
			        return _this;
			    }
			    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
			        get: function () {
			            return cssClasses$3;
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
			        /**
			         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
			         */
			        get: function () {
			            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
			            return {
			                addClass: function () { return undefined; },
			                removeClass: function () { return undefined; },
			                hasClass: function () { return false; },
			                setStyle: function () { return undefined; },
			                registerEventHandler: function () { return undefined; },
			                deregisterEventHandler: function () { return undefined; },
			            };
			            // tslint:enable:object-literal-sort-keys
			        },
			        enumerable: false,
			        configurable: true
			    });
			    MDCLineRippleFoundation.prototype.init = function () {
			        this.adapter.registerEventHandler('transitionend', this.transitionEndHandler);
			    };
			    MDCLineRippleFoundation.prototype.destroy = function () {
			        this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler);
			    };
			    MDCLineRippleFoundation.prototype.activate = function () {
			        this.adapter.removeClass(cssClasses$3.LINE_RIPPLE_DEACTIVATING);
			        this.adapter.addClass(cssClasses$3.LINE_RIPPLE_ACTIVE);
			    };
			    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
			        this.adapter.setStyle('transform-origin', xCoordinate + "px center");
			    };
			    MDCLineRippleFoundation.prototype.deactivate = function () {
			        this.adapter.addClass(cssClasses$3.LINE_RIPPLE_DEACTIVATING);
			    };
			    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
			        // Wait for the line ripple to be either transparent or opaque
			        // before emitting the animation end event
			        var isDeactivating = this.adapter.hasClass(cssClasses$3.LINE_RIPPLE_DEACTIVATING);
			        if (evt.propertyName === 'opacity') {
			            if (isDeactivating) {
			                this.adapter.removeClass(cssClasses$3.LINE_RIPPLE_ACTIVE);
			                this.adapter.removeClass(cssClasses$3.LINE_RIPPLE_DEACTIVATING);
			            }
			        }
			    };
			    return MDCLineRippleFoundation;
			}(MDCFoundation));

			/******************************************************************************
			Copyright (c) Microsoft Corporation.

			Permission to use, copy, modify, and/or distribute this software for any
			purpose with or without fee is hereby granted.

			THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
			REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
			AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
			INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
			LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
			OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
			PERFORMANCE OF THIS SOFTWARE.
			***************************************************************************** */
			/* global Reflect, Promise */

			var extendStatics$1 = function(d, b) {
			    extendStatics$1 = Object.setPrototypeOf ||
			        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
			        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
			    return extendStatics$1(d, b);
			};

			function __extends$1(d, b) {
			    if (typeof b !== "function" && b !== null)
			        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			    extendStatics$1(d, b);
			    function __() { this.constructor = d; }
			    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			}

			var __assign$1 = function() {
			    __assign$1 = Object.assign || function __assign(t) {
			        for (var s, i = 1, n = arguments.length; i < n; i++) {
			            s = arguments[i];
			            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			        }
			        return t;
			    };
			    return __assign$1.apply(this, arguments);
			};

			/**
			 * @license
			 * Copyright 2018 Google Inc.
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining a copy
			 * of this software and associated documentation files (the "Software"), to deal
			 * in the Software without restriction, including without limitation the rights
			 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			 * copies of the Software, and to permit persons to whom the Software is
			 * furnished to do so, subject to the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be included in
			 * all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			 * THE SOFTWARE.
			 */
			var strings$2 = {
			    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
			};
			var numbers$2 = {
			    // This should stay in sync with $mdc-notched-outline-padding * 2.
			    NOTCH_ELEMENT_PADDING: 8,
			};
			var cssClasses$2 = {
			    NO_LABEL: 'mdc-notched-outline--no-label',
			    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
			    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
			};

			/**
			 * @license
			 * Copyright 2017 Google Inc.
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining a copy
			 * of this software and associated documentation files (the "Software"), to deal
			 * in the Software without restriction, including without limitation the rights
			 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			 * copies of the Software, and to permit persons to whom the Software is
			 * furnished to do so, subject to the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be included in
			 * all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			 * THE SOFTWARE.
			 */
			var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
			    __extends$1(MDCNotchedOutlineFoundation, _super);
			    function MDCNotchedOutlineFoundation(adapter) {
			        return _super.call(this, __assign$1(__assign$1({}, MDCNotchedOutlineFoundation.defaultAdapter), adapter)) || this;
			    }
			    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
			        get: function () {
			            return strings$2;
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
			        get: function () {
			            return cssClasses$2;
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
			        get: function () {
			            return numbers$2;
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
			        /**
			         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
			         */
			        get: function () {
			            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
			            return {
			                addClass: function () { return undefined; },
			                removeClass: function () { return undefined; },
			                setNotchWidthProperty: function () { return undefined; },
			                removeNotchWidthProperty: function () { return undefined; },
			            };
			            // tslint:enable:object-literal-sort-keys
			        },
			        enumerable: false,
			        configurable: true
			    });
			    /**
			     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
			     */
			    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
			        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
			        if (notchWidth > 0) {
			            notchWidth += numbers$2.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
			        }
			        this.adapter.setNotchWidthProperty(notchWidth);
			        this.adapter.addClass(OUTLINE_NOTCHED);
			    };
			    /**
			     * Removes notched outline selector to close the notch in the outline.
			     */
			    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
			        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
			        this.adapter.removeClass(OUTLINE_NOTCHED);
			        this.adapter.removeNotchWidthProperty();
			    };
			    return MDCNotchedOutlineFoundation;
			}(MDCFoundation));

			/******************************************************************************
			Copyright (c) Microsoft Corporation.

			Permission to use, copy, modify, and/or distribute this software for any
			purpose with or without fee is hereby granted.

			THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
			REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
			AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
			INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
			LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
			OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
			PERFORMANCE OF THIS SOFTWARE.
			***************************************************************************** */
			/* global Reflect, Promise */

			var extendStatics = function(d, b) {
			    extendStatics = Object.setPrototypeOf ||
			        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
			        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
			    return extendStatics(d, b);
			};

			function __extends(d, b) {
			    if (typeof b !== "function" && b !== null)
			        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			    extendStatics(d, b);
			    function __() { this.constructor = d; }
			    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			}

			var __assign = function() {
			    __assign = Object.assign || function __assign(t) {
			        for (var s, i = 1, n = arguments.length; i < n; i++) {
			            s = arguments[i];
			            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			        }
			        return t;
			    };
			    return __assign.apply(this, arguments);
			};

			function __values(o) {
			    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
			    if (m) return m.call(o);
			    if (o && typeof o.length === "number") return {
			        next: function () {
			            if (o && i >= o.length) o = void 0;
			            return { value: o && o[i++], done: !o };
			        }
			    };
			    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
			}

			/**
			 * @license
			 * Copyright 2016 Google Inc.
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining a copy
			 * of this software and associated documentation files (the "Software"), to deal
			 * in the Software without restriction, including without limitation the rights
			 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			 * copies of the Software, and to permit persons to whom the Software is
			 * furnished to do so, subject to the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be included in
			 * all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			 * THE SOFTWARE.
			 */
			var cssClasses$1 = {
			    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
			    // given that it's an 'upgrade' to an existing component. That being said it is the root
			    // CSS class that all other CSS classes derive from.
			    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
			    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
			    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
			    ROOT: 'mdc-ripple-upgraded',
			    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
			};
			var strings$1 = {
			    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
			    VAR_FG_SIZE: '--mdc-ripple-fg-size',
			    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
			    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
			    VAR_LEFT: '--mdc-ripple-left',
			    VAR_TOP: '--mdc-ripple-top',
			};
			var numbers$1 = {
			    DEACTIVATION_TIMEOUT_MS: 225,
			    FG_DEACTIVATION_MS: 150,
			    INITIAL_ORIGIN_SCALE: 0.6,
			    PADDING: 10,
			    TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
			};

			/**
			 * Stores result from supportsCssVariables to avoid redundant processing to
			 * detect CSS custom variable support.
			 */
			var supportsCssVariables_;
			function supportsCssVariables(windowObj, forceRefresh) {
			    if (forceRefresh === void 0) { forceRefresh = false; }
			    var CSS = windowObj.CSS;
			    var supportsCssVars = supportsCssVariables_;
			    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
			        return supportsCssVariables_;
			    }
			    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
			    if (!supportsFunctionPresent) {
			        return false;
			    }
			    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
			    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
			    // See: README section on Safari
			    var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
			        CSS.supports('color', '#00000000'));
			    supportsCssVars =
			        explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
			    if (!forceRefresh) {
			        supportsCssVariables_ = supportsCssVars;
			    }
			    return supportsCssVars;
			}
			function getNormalizedEventCoords(evt, pageOffset, clientRect) {
			    if (!evt) {
			        return { x: 0, y: 0 };
			    }
			    var x = pageOffset.x, y = pageOffset.y;
			    var documentX = x + clientRect.left;
			    var documentY = y + clientRect.top;
			    var normalizedX;
			    var normalizedY;
			    // Determine touch point relative to the ripple container.
			    if (evt.type === 'touchstart') {
			        var touchEvent = evt;
			        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
			        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
			    }
			    else {
			        var mouseEvent = evt;
			        normalizedX = mouseEvent.pageX - documentX;
			        normalizedY = mouseEvent.pageY - documentY;
			    }
			    return { x: normalizedX, y: normalizedY };
			}

			/**
			 * @license
			 * Copyright 2016 Google Inc.
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining a copy
			 * of this software and associated documentation files (the "Software"), to deal
			 * in the Software without restriction, including without limitation the rights
			 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			 * copies of the Software, and to permit persons to whom the Software is
			 * furnished to do so, subject to the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be included in
			 * all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			 * THE SOFTWARE.
			 */
			// Activation events registered on the root element of each instance for activation
			var ACTIVATION_EVENT_TYPES = [
			    'touchstart', 'pointerdown', 'mousedown', 'keydown',
			];
			// Deactivation events registered on documentElement when a pointer-related down event occurs
			var POINTER_DEACTIVATION_EVENT_TYPES = [
			    'touchend', 'pointerup', 'mouseup', 'contextmenu',
			];
			// simultaneous nested activations
			var activatedTargets = [];
			var MDCRippleFoundation = /** @class */ (function (_super) {
			    __extends(MDCRippleFoundation, _super);
			    function MDCRippleFoundation(adapter) {
			        var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
			        _this.activationAnimationHasEnded = false;
			        _this.activationTimer = 0;
			        _this.fgDeactivationRemovalTimer = 0;
			        _this.fgScale = '0';
			        _this.frame = { width: 0, height: 0 };
			        _this.initialSize = 0;
			        _this.layoutFrame = 0;
			        _this.maxRadius = 0;
			        _this.unboundedCoords = { left: 0, top: 0 };
			        _this.activationState = _this.defaultActivationState();
			        _this.activationTimerCallback = function () {
			            _this.activationAnimationHasEnded = true;
			            _this.runDeactivationUXLogicIfReady();
			        };
			        _this.activateHandler = function (e) {
			            _this.activateImpl(e);
			        };
			        _this.deactivateHandler = function () {
			            _this.deactivateImpl();
			        };
			        _this.focusHandler = function () {
			            _this.handleFocus();
			        };
			        _this.blurHandler = function () {
			            _this.handleBlur();
			        };
			        _this.resizeHandler = function () {
			            _this.layout();
			        };
			        return _this;
			    }
			    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
			        get: function () {
			            return cssClasses$1;
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCRippleFoundation, "strings", {
			        get: function () {
			            return strings$1;
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCRippleFoundation, "numbers", {
			        get: function () {
			            return numbers$1;
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
			        get: function () {
			            return {
			                addClass: function () { return undefined; },
			                browserSupportsCssVars: function () { return true; },
			                computeBoundingRect: function () {
			                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
			                },
			                containsEventTarget: function () { return true; },
			                deregisterDocumentInteractionHandler: function () { return undefined; },
			                deregisterInteractionHandler: function () { return undefined; },
			                deregisterResizeHandler: function () { return undefined; },
			                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
			                isSurfaceActive: function () { return true; },
			                isSurfaceDisabled: function () { return true; },
			                isUnbounded: function () { return true; },
			                registerDocumentInteractionHandler: function () { return undefined; },
			                registerInteractionHandler: function () { return undefined; },
			                registerResizeHandler: function () { return undefined; },
			                removeClass: function () { return undefined; },
			                updateCssVariable: function () { return undefined; },
			            };
			        },
			        enumerable: false,
			        configurable: true
			    });
			    MDCRippleFoundation.prototype.init = function () {
			        var _this = this;
			        var supportsPressRipple = this.supportsPressRipple();
			        this.registerRootHandlers(supportsPressRipple);
			        if (supportsPressRipple) {
			            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
			            requestAnimationFrame(function () {
			                _this.adapter.addClass(ROOT_1);
			                if (_this.adapter.isUnbounded()) {
			                    _this.adapter.addClass(UNBOUNDED_1);
			                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
			                    _this.layoutInternal();
			                }
			            });
			        }
			    };
			    MDCRippleFoundation.prototype.destroy = function () {
			        var _this = this;
			        if (this.supportsPressRipple()) {
			            if (this.activationTimer) {
			                clearTimeout(this.activationTimer);
			                this.activationTimer = 0;
			                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
			            }
			            if (this.fgDeactivationRemovalTimer) {
			                clearTimeout(this.fgDeactivationRemovalTimer);
			                this.fgDeactivationRemovalTimer = 0;
			                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
			            }
			            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
			            requestAnimationFrame(function () {
			                _this.adapter.removeClass(ROOT_2);
			                _this.adapter.removeClass(UNBOUNDED_2);
			                _this.removeCssVars();
			            });
			        }
			        this.deregisterRootHandlers();
			        this.deregisterDeactivationHandlers();
			    };
			    /**
			     * @param evt Optional event containing position information.
			     */
			    MDCRippleFoundation.prototype.activate = function (evt) {
			        this.activateImpl(evt);
			    };
			    MDCRippleFoundation.prototype.deactivate = function () {
			        this.deactivateImpl();
			    };
			    MDCRippleFoundation.prototype.layout = function () {
			        var _this = this;
			        if (this.layoutFrame) {
			            cancelAnimationFrame(this.layoutFrame);
			        }
			        this.layoutFrame = requestAnimationFrame(function () {
			            _this.layoutInternal();
			            _this.layoutFrame = 0;
			        });
			    };
			    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
			        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
			        if (unbounded) {
			            this.adapter.addClass(UNBOUNDED);
			        }
			        else {
			            this.adapter.removeClass(UNBOUNDED);
			        }
			    };
			    MDCRippleFoundation.prototype.handleFocus = function () {
			        var _this = this;
			        requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
			    };
			    MDCRippleFoundation.prototype.handleBlur = function () {
			        var _this = this;
			        requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
			    };
			    /**
			     * We compute this property so that we are not querying information about the client
			     * until the point in time where the foundation requests it. This prevents scenarios where
			     * client-side feature-detection may happen too early, such as when components are rendered on the server
			     * and then initialized at mount time on the client.
			     */
			    MDCRippleFoundation.prototype.supportsPressRipple = function () {
			        return this.adapter.browserSupportsCssVars();
			    };
			    MDCRippleFoundation.prototype.defaultActivationState = function () {
			        return {
			            activationEvent: undefined,
			            hasDeactivationUXRun: false,
			            isActivated: false,
			            isProgrammatic: false,
			            wasActivatedByPointer: false,
			            wasElementMadeActive: false,
			        };
			    };
			    /**
			     * supportsPressRipple Passed from init to save a redundant function call
			     */
			    MDCRippleFoundation.prototype.registerRootHandlers = function (supportsPressRipple) {
			        var e_1, _a;
			        if (supportsPressRipple) {
			            try {
			                for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
			                    var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
			                    this.adapter.registerInteractionHandler(evtType, this.activateHandler);
			                }
			            }
			            catch (e_1_1) { e_1 = { error: e_1_1 }; }
			            finally {
			                try {
			                    if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
			                }
			                finally { if (e_1) throw e_1.error; }
			            }
			            if (this.adapter.isUnbounded()) {
			                this.adapter.registerResizeHandler(this.resizeHandler);
			            }
			        }
			        this.adapter.registerInteractionHandler('focus', this.focusHandler);
			        this.adapter.registerInteractionHandler('blur', this.blurHandler);
			    };
			    MDCRippleFoundation.prototype.registerDeactivationHandlers = function (evt) {
			        var e_2, _a;
			        if (evt.type === 'keydown') {
			            this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
			        }
			        else {
			            try {
			                for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
			                    var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
			                    this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
			                }
			            }
			            catch (e_2_1) { e_2 = { error: e_2_1 }; }
			            finally {
			                try {
			                    if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
			                }
			                finally { if (e_2) throw e_2.error; }
			            }
			        }
			    };
			    MDCRippleFoundation.prototype.deregisterRootHandlers = function () {
			        var e_3, _a;
			        try {
			            for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
			                var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
			                this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
			            }
			        }
			        catch (e_3_1) { e_3 = { error: e_3_1 }; }
			        finally {
			            try {
			                if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
			            }
			            finally { if (e_3) throw e_3.error; }
			        }
			        this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
			        this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
			        if (this.adapter.isUnbounded()) {
			            this.adapter.deregisterResizeHandler(this.resizeHandler);
			        }
			    };
			    MDCRippleFoundation.prototype.deregisterDeactivationHandlers = function () {
			        var e_4, _a;
			        this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
			        try {
			            for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
			                var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
			                this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
			            }
			        }
			        catch (e_4_1) { e_4 = { error: e_4_1 }; }
			        finally {
			            try {
			                if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
			            }
			            finally { if (e_4) throw e_4.error; }
			        }
			    };
			    MDCRippleFoundation.prototype.removeCssVars = function () {
			        var _this = this;
			        var rippleStrings = MDCRippleFoundation.strings;
			        var keys = Object.keys(rippleStrings);
			        keys.forEach(function (key) {
			            if (key.indexOf('VAR_') === 0) {
			                _this.adapter.updateCssVariable(rippleStrings[key], null);
			            }
			        });
			    };
			    MDCRippleFoundation.prototype.activateImpl = function (evt) {
			        var _this = this;
			        if (this.adapter.isSurfaceDisabled()) {
			            return;
			        }
			        var activationState = this.activationState;
			        if (activationState.isActivated) {
			            return;
			        }
			        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
			        var previousActivationEvent = this.previousActivationEvent;
			        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
			        if (isSameInteraction) {
			            return;
			        }
			        activationState.isActivated = true;
			        activationState.isProgrammatic = evt === undefined;
			        activationState.activationEvent = evt;
			        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
			        var hasActivatedChild = evt !== undefined &&
			            activatedTargets.length > 0 &&
			            activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
			        if (hasActivatedChild) {
			            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
			            this.resetActivationState();
			            return;
			        }
			        if (evt !== undefined) {
			            activatedTargets.push(evt.target);
			            this.registerDeactivationHandlers(evt);
			        }
			        activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
			        if (activationState.wasElementMadeActive) {
			            this.animateActivation();
			        }
			        requestAnimationFrame(function () {
			            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
			            activatedTargets = [];
			            if (!activationState.wasElementMadeActive
			                && evt !== undefined
			                && (evt.key === ' ' || evt.keyCode === 32)) {
			                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
			                // active states inconsistently when they're called within event handling code:
			                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
			                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
			                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
			                // variable is set within a rAF callback for a submit button interaction (#2241).
			                activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
			                if (activationState.wasElementMadeActive) {
			                    _this.animateActivation();
			                }
			            }
			            if (!activationState.wasElementMadeActive) {
			                // Reset activation state immediately if element was not made active.
			                _this.activationState = _this.defaultActivationState();
			            }
			        });
			    };
			    MDCRippleFoundation.prototype.checkElementMadeActive = function (evt) {
			        return (evt !== undefined && evt.type === 'keydown') ?
			            this.adapter.isSurfaceActive() :
			            true;
			    };
			    MDCRippleFoundation.prototype.animateActivation = function () {
			        var _this = this;
			        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
			        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
			        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
			        this.layoutInternal();
			        var translateStart = '';
			        var translateEnd = '';
			        if (!this.adapter.isUnbounded()) {
			            var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
			            translateStart = startPoint.x + "px, " + startPoint.y + "px";
			            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
			        }
			        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
			        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
			        // Cancel any ongoing activation/deactivation animations
			        clearTimeout(this.activationTimer);
			        clearTimeout(this.fgDeactivationRemovalTimer);
			        this.rmBoundedActivationClasses();
			        this.adapter.removeClass(FG_DEACTIVATION);
			        // Force layout in order to re-trigger the animation.
			        this.adapter.computeBoundingRect();
			        this.adapter.addClass(FG_ACTIVATION);
			        this.activationTimer = setTimeout(function () {
			            _this.activationTimerCallback();
			        }, DEACTIVATION_TIMEOUT_MS);
			    };
			    MDCRippleFoundation.prototype.getFgTranslationCoordinates = function () {
			        var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
			        var startPoint;
			        if (wasActivatedByPointer) {
			            startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
			        }
			        else {
			            startPoint = {
			                x: this.frame.width / 2,
			                y: this.frame.height / 2,
			            };
			        }
			        // Center the element around the start point.
			        startPoint = {
			            x: startPoint.x - (this.initialSize / 2),
			            y: startPoint.y - (this.initialSize / 2),
			        };
			        var endPoint = {
			            x: (this.frame.width / 2) - (this.initialSize / 2),
			            y: (this.frame.height / 2) - (this.initialSize / 2),
			        };
			        return { startPoint: startPoint, endPoint: endPoint };
			    };
			    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady = function () {
			        var _this = this;
			        // This method is called both when a pointing device is released, and when the activation animation ends.
			        // The deactivation animation should only run after both of those occur.
			        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
			        var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
			        var activationHasEnded = hasDeactivationUXRun || !isActivated;
			        if (activationHasEnded && this.activationAnimationHasEnded) {
			            this.rmBoundedActivationClasses();
			            this.adapter.addClass(FG_DEACTIVATION);
			            this.fgDeactivationRemovalTimer = setTimeout(function () {
			                _this.adapter.removeClass(FG_DEACTIVATION);
			            }, numbers$1.FG_DEACTIVATION_MS);
			        }
			    };
			    MDCRippleFoundation.prototype.rmBoundedActivationClasses = function () {
			        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
			        this.adapter.removeClass(FG_ACTIVATION);
			        this.activationAnimationHasEnded = false;
			        this.adapter.computeBoundingRect();
			    };
			    MDCRippleFoundation.prototype.resetActivationState = function () {
			        var _this = this;
			        this.previousActivationEvent = this.activationState.activationEvent;
			        this.activationState = this.defaultActivationState();
			        // Touch devices may fire additional events for the same interaction within a short time.
			        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
			        setTimeout(function () { return _this.previousActivationEvent = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
			    };
			    MDCRippleFoundation.prototype.deactivateImpl = function () {
			        var _this = this;
			        var activationState = this.activationState;
			        // This can happen in scenarios such as when you have a keyup event that blurs the element.
			        if (!activationState.isActivated) {
			            return;
			        }
			        var state = __assign({}, activationState);
			        if (activationState.isProgrammatic) {
			            requestAnimationFrame(function () {
			                _this.animateDeactivation(state);
			            });
			            this.resetActivationState();
			        }
			        else {
			            this.deregisterDeactivationHandlers();
			            requestAnimationFrame(function () {
			                _this.activationState.hasDeactivationUXRun = true;
			                _this.animateDeactivation(state);
			                _this.resetActivationState();
			            });
			        }
			    };
			    MDCRippleFoundation.prototype.animateDeactivation = function (_a) {
			        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
			        if (wasActivatedByPointer || wasElementMadeActive) {
			            this.runDeactivationUXLogicIfReady();
			        }
			    };
			    MDCRippleFoundation.prototype.layoutInternal = function () {
			        var _this = this;
			        this.frame = this.adapter.computeBoundingRect();
			        var maxDim = Math.max(this.frame.height, this.frame.width);
			        // Surface diameter is treated differently for unbounded vs. bounded ripples.
			        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
			        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
			        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
			        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
			        // `overflow: hidden`.
			        var getBoundedRadius = function () {
			            var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
			            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
			        };
			        this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
			        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
			        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
			        // Unbounded ripple size should always be even number to equally center align.
			        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
			            this.initialSize = initialSize - 1;
			        }
			        else {
			            this.initialSize = initialSize;
			        }
			        this.fgScale = "" + this.maxRadius / this.initialSize;
			        this.updateLayoutCssVars();
			    };
			    MDCRippleFoundation.prototype.updateLayoutCssVars = function () {
			        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
			        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
			        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
			        if (this.adapter.isUnbounded()) {
			            this.unboundedCoords = {
			                left: Math.round((this.frame.width / 2) - (this.initialSize / 2)),
			                top: Math.round((this.frame.height / 2) - (this.initialSize / 2)),
			            };
			            this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
			            this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
			        }
			    };
			    return MDCRippleFoundation;
			}(MDCFoundation));

			/**
			 * @license
			 * Copyright 2016 Google Inc.
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining a copy
			 * of this software and associated documentation files (the "Software"), to deal
			 * in the Software without restriction, including without limitation the rights
			 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			 * copies of the Software, and to permit persons to whom the Software is
			 * furnished to do so, subject to the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be included in
			 * all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			 * THE SOFTWARE.
			 */
			var strings = {
			    ARIA_CONTROLS: 'aria-controls',
			    ARIA_DESCRIBEDBY: 'aria-describedby',
			    INPUT_SELECTOR: '.mdc-text-field__input',
			    LABEL_SELECTOR: '.mdc-floating-label',
			    LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',
			    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
			    OUTLINE_SELECTOR: '.mdc-notched-outline',
			    PREFIX_SELECTOR: '.mdc-text-field__affix--prefix',
			    SUFFIX_SELECTOR: '.mdc-text-field__affix--suffix',
			    TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing'
			};
			var cssClasses = {
			    DISABLED: 'mdc-text-field--disabled',
			    FOCUSED: 'mdc-text-field--focused',
			    HELPER_LINE: 'mdc-text-field-helper-line',
			    INVALID: 'mdc-text-field--invalid',
			    LABEL_FLOATING: 'mdc-text-field--label-floating',
			    NO_LABEL: 'mdc-text-field--no-label',
			    OUTLINED: 'mdc-text-field--outlined',
			    ROOT: 'mdc-text-field',
			    TEXTAREA: 'mdc-text-field--textarea',
			    WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
			    WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon',
			    WITH_INTERNAL_COUNTER: 'mdc-text-field--with-internal-counter',
			};
			var numbers = {
			    LABEL_SCALE: 0.75,
			};
			/**
			 * Whitelist based off of
			 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
			 * under the "Validation-related attributes" section.
			 */
			var VALIDATION_ATTR_WHITELIST = [
			    'pattern',
			    'min',
			    'max',
			    'required',
			    'step',
			    'minlength',
			    'maxlength',
			];
			/**
			 * Label should always float for these types as they show some UI even if value
			 * is empty.
			 */
			var ALWAYS_FLOAT_TYPES = [
			    'color',
			    'date',
			    'datetime-local',
			    'month',
			    'range',
			    'time',
			    'week',
			];

			/**
			 * @license
			 * Copyright 2016 Google Inc.
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining a copy
			 * of this software and associated documentation files (the "Software"), to deal
			 * in the Software without restriction, including without limitation the rights
			 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			 * copies of the Software, and to permit persons to whom the Software is
			 * furnished to do so, subject to the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be included in
			 * all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			 * THE SOFTWARE.
			 */
			var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
			var INTERACTION_EVENTS = ['click', 'keydown'];
			var MDCTextFieldFoundation = /** @class */ (function (_super) {
			    __extends$4(MDCTextFieldFoundation, _super);
			    /**
			     * @param adapter
			     * @param foundationMap Map from subcomponent names to their subfoundations.
			     */
			    function MDCTextFieldFoundation(adapter, foundationMap) {
			        if (foundationMap === void 0) { foundationMap = {}; }
			        var _this = _super.call(this, __assign$4(__assign$4({}, MDCTextFieldFoundation.defaultAdapter), adapter)) || this;
			        _this.isFocused = false;
			        _this.receivedUserInput = false;
			        _this.valid = true;
			        _this.useNativeValidation = true;
			        _this.validateOnValueChange = true;
			        _this.helperText = foundationMap.helperText;
			        _this.characterCounter = foundationMap.characterCounter;
			        _this.leadingIcon = foundationMap.leadingIcon;
			        _this.trailingIcon = foundationMap.trailingIcon;
			        _this.inputFocusHandler = function () {
			            _this.activateFocus();
			        };
			        _this.inputBlurHandler = function () {
			            _this.deactivateFocus();
			        };
			        _this.inputInputHandler = function () {
			            _this.handleInput();
			        };
			        _this.setPointerXOffset = function (evt) {
			            _this.setTransformOrigin(evt);
			        };
			        _this.textFieldInteractionHandler = function () {
			            _this.handleTextFieldInteraction();
			        };
			        _this.validationAttributeChangeHandler = function (attributesList) {
			            _this.handleValidationAttributeChange(attributesList);
			        };
			        return _this;
			    }
			    Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
			        get: function () {
			            return cssClasses;
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCTextFieldFoundation, "strings", {
			        get: function () {
			            return strings;
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCTextFieldFoundation, "numbers", {
			        get: function () {
			            return numbers;
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat", {
			        get: function () {
			            var type = this.getNativeInput().type;
			            return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
			        get: function () {
			            return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() ||
			                this.isBadInput();
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
			        get: function () {
			            return !this.isFocused && !this.isValid() && !!this.getValue();
			        },
			        enumerable: false,
			        configurable: true
			    });
			    Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
			        /**
			         * See {@link MDCTextFieldAdapter} for typing information on parameters and
			         * return types.
			         */
			        get: function () {
			            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
			            return {
			                addClass: function () { return undefined; },
			                removeClass: function () { return undefined; },
			                hasClass: function () { return true; },
			                setInputAttr: function () { return undefined; },
			                removeInputAttr: function () { return undefined; },
			                registerTextFieldInteractionHandler: function () { return undefined; },
			                deregisterTextFieldInteractionHandler: function () { return undefined; },
			                registerInputInteractionHandler: function () { return undefined; },
			                deregisterInputInteractionHandler: function () { return undefined; },
			                registerValidationAttributeChangeHandler: function () {
			                    return new MutationObserver(function () { return undefined; });
			                },
			                deregisterValidationAttributeChangeHandler: function () { return undefined; },
			                getNativeInput: function () { return null; },
			                isFocused: function () { return false; },
			                activateLineRipple: function () { return undefined; },
			                deactivateLineRipple: function () { return undefined; },
			                setLineRippleTransformOrigin: function () { return undefined; },
			                shakeLabel: function () { return undefined; },
			                floatLabel: function () { return undefined; },
			                setLabelRequired: function () { return undefined; },
			                hasLabel: function () { return false; },
			                getLabelWidth: function () { return 0; },
			                hasOutline: function () { return false; },
			                notchOutline: function () { return undefined; },
			                closeOutline: function () { return undefined; },
			            };
			            // tslint:enable:object-literal-sort-keys
			        },
			        enumerable: false,
			        configurable: true
			    });
			    MDCTextFieldFoundation.prototype.init = function () {
			        var e_1, _a, e_2, _b;
			        if (this.adapter.hasLabel() && this.getNativeInput().required) {
			            this.adapter.setLabelRequired(true);
			        }
			        if (this.adapter.isFocused()) {
			            this.inputFocusHandler();
			        }
			        else if (this.adapter.hasLabel() && this.shouldFloat) {
			            this.notchOutline(true);
			            this.adapter.floatLabel(true);
			            this.styleFloating(true);
			        }
			        this.adapter.registerInputInteractionHandler('focus', this.inputFocusHandler);
			        this.adapter.registerInputInteractionHandler('blur', this.inputBlurHandler);
			        this.adapter.registerInputInteractionHandler('input', this.inputInputHandler);
			        try {
			            for (var POINTERDOWN_EVENTS_1 = __values$1(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next(); !POINTERDOWN_EVENTS_1_1.done; POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next()) {
			                var evtType = POINTERDOWN_EVENTS_1_1.value;
			                this.adapter.registerInputInteractionHandler(evtType, this.setPointerXOffset);
			            }
			        }
			        catch (e_1_1) { e_1 = { error: e_1_1 }; }
			        finally {
			            try {
			                if (POINTERDOWN_EVENTS_1_1 && !POINTERDOWN_EVENTS_1_1.done && (_a = POINTERDOWN_EVENTS_1.return)) _a.call(POINTERDOWN_EVENTS_1);
			            }
			            finally { if (e_1) throw e_1.error; }
			        }
			        try {
			            for (var INTERACTION_EVENTS_1 = __values$1(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
			                var evtType = INTERACTION_EVENTS_1_1.value;
			                this.adapter.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
			            }
			        }
			        catch (e_2_1) { e_2 = { error: e_2_1 }; }
			        finally {
			            try {
			                if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_b = INTERACTION_EVENTS_1.return)) _b.call(INTERACTION_EVENTS_1);
			            }
			            finally { if (e_2) throw e_2.error; }
			        }
			        this.validationObserver =
			            this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler);
			        this.setcharacterCounter(this.getValue().length);
			    };
			    MDCTextFieldFoundation.prototype.destroy = function () {
			        var e_3, _a, e_4, _b;
			        this.adapter.deregisterInputInteractionHandler('focus', this.inputFocusHandler);
			        this.adapter.deregisterInputInteractionHandler('blur', this.inputBlurHandler);
			        this.adapter.deregisterInputInteractionHandler('input', this.inputInputHandler);
			        try {
			            for (var POINTERDOWN_EVENTS_2 = __values$1(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next(); !POINTERDOWN_EVENTS_2_1.done; POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next()) {
			                var evtType = POINTERDOWN_EVENTS_2_1.value;
			                this.adapter.deregisterInputInteractionHandler(evtType, this.setPointerXOffset);
			            }
			        }
			        catch (e_3_1) { e_3 = { error: e_3_1 }; }
			        finally {
			            try {
			                if (POINTERDOWN_EVENTS_2_1 && !POINTERDOWN_EVENTS_2_1.done && (_a = POINTERDOWN_EVENTS_2.return)) _a.call(POINTERDOWN_EVENTS_2);
			            }
			            finally { if (e_3) throw e_3.error; }
			        }
			        try {
			            for (var INTERACTION_EVENTS_2 = __values$1(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
			                var evtType = INTERACTION_EVENTS_2_1.value;
			                this.adapter.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
			            }
			        }
			        catch (e_4_1) { e_4 = { error: e_4_1 }; }
			        finally {
			            try {
			                if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_b = INTERACTION_EVENTS_2.return)) _b.call(INTERACTION_EVENTS_2);
			            }
			            finally { if (e_4) throw e_4.error; }
			        }
			        this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
			    };
			    /**
			     * Handles user interactions with the Text Field.
			     */
			    MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
			        var nativeInput = this.adapter.getNativeInput();
			        if (nativeInput && nativeInput.disabled) {
			            return;
			        }
			        this.receivedUserInput = true;
			    };
			    /**
			     * Handles validation attribute changes
			     */
			    MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
			        var _this = this;
			        attributesList.some(function (attributeName) {
			            if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
			                _this.styleValidity(true);
			                _this.adapter.setLabelRequired(_this.getNativeInput().required);
			                return true;
			            }
			            return false;
			        });
			        if (attributesList.indexOf('maxlength') > -1) {
			            this.setcharacterCounter(this.getValue().length);
			        }
			    };
			    /**
			     * Opens/closes the notched outline.
			     */
			    MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
			        if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) {
			            return;
			        }
			        if (openNotch) {
			            var labelWidth = this.adapter.getLabelWidth() * numbers.LABEL_SCALE;
			            this.adapter.notchOutline(labelWidth);
			        }
			        else {
			            this.adapter.closeOutline();
			        }
			    };
			    /**
			     * Activates the text field focus state.
			     */
			    MDCTextFieldFoundation.prototype.activateFocus = function () {
			        this.isFocused = true;
			        this.styleFocused(this.isFocused);
			        this.adapter.activateLineRipple();
			        if (this.adapter.hasLabel()) {
			            this.notchOutline(this.shouldFloat);
			            this.adapter.floatLabel(this.shouldFloat);
			            this.styleFloating(this.shouldFloat);
			            this.adapter.shakeLabel(this.shouldShake);
			        }
			        if (this.helperText &&
			            (this.helperText.isPersistent() || !this.helperText.isValidation() ||
			                !this.valid)) {
			            this.helperText.showToScreenReader();
			        }
			    };
			    /**
			     * Sets the line ripple's transform origin, so that the line ripple activate
			     * animation will animate out from the user's click location.
			     */
			    MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
			        if (this.isDisabled() || this.adapter.hasOutline()) {
			            return;
			        }
			        var touches = evt.touches;
			        var targetEvent = touches ? touches[0] : evt;
			        var targetClientRect = targetEvent.target.getBoundingClientRect();
			        var normalizedX = targetEvent.clientX - targetClientRect.left;
			        this.adapter.setLineRippleTransformOrigin(normalizedX);
			    };
			    /**
			     * Handles input change of text input and text area.
			     */
			    MDCTextFieldFoundation.prototype.handleInput = function () {
			        this.autoCompleteFocus();
			        this.setcharacterCounter(this.getValue().length);
			    };
			    /**
			     * Activates the Text Field's focus state in cases when the input value
			     * changes without user input (e.g. programmatically).
			     */
			    MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
			        if (!this.receivedUserInput) {
			            this.activateFocus();
			        }
			    };
			    /**
			     * Deactivates the Text Field's focus state.
			     */
			    MDCTextFieldFoundation.prototype.deactivateFocus = function () {
			        this.isFocused = false;
			        this.adapter.deactivateLineRipple();
			        var isValid = this.isValid();
			        this.styleValidity(isValid);
			        this.styleFocused(this.isFocused);
			        if (this.adapter.hasLabel()) {
			            this.notchOutline(this.shouldFloat);
			            this.adapter.floatLabel(this.shouldFloat);
			            this.styleFloating(this.shouldFloat);
			            this.adapter.shakeLabel(this.shouldShake);
			        }
			        if (!this.shouldFloat) {
			            this.receivedUserInput = false;
			        }
			    };
			    MDCTextFieldFoundation.prototype.getValue = function () {
			        return this.getNativeInput().value;
			    };
			    /**
			     * @param value The value to set on the input Element.
			     */
			    MDCTextFieldFoundation.prototype.setValue = function (value) {
			        // Prevent Safari from moving the caret to the end of the input when the
			        // value has not changed.
			        if (this.getValue() !== value) {
			            this.getNativeInput().value = value;
			        }
			        this.setcharacterCounter(value.length);
			        if (this.validateOnValueChange) {
			            var isValid = this.isValid();
			            this.styleValidity(isValid);
			        }
			        if (this.adapter.hasLabel()) {
			            this.notchOutline(this.shouldFloat);
			            this.adapter.floatLabel(this.shouldFloat);
			            this.styleFloating(this.shouldFloat);
			            if (this.validateOnValueChange) {
			                this.adapter.shakeLabel(this.shouldShake);
			            }
			        }
			    };
			    /**
			     * @return The custom validity state, if set; otherwise, the result of a
			     *     native validity check.
			     */
			    MDCTextFieldFoundation.prototype.isValid = function () {
			        return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
			    };
			    /**
			     * @param isValid Sets the custom validity state of the Text Field.
			     */
			    MDCTextFieldFoundation.prototype.setValid = function (isValid) {
			        this.valid = isValid;
			        this.styleValidity(isValid);
			        var shouldShake = !isValid && !this.isFocused && !!this.getValue();
			        if (this.adapter.hasLabel()) {
			            this.adapter.shakeLabel(shouldShake);
			        }
			    };
			    /**
			     * @param shouldValidate Whether or not validity should be updated on
			     *     value change.
			     */
			    MDCTextFieldFoundation.prototype.setValidateOnValueChange = function (shouldValidate) {
			        this.validateOnValueChange = shouldValidate;
			    };
			    /**
			     * @return Whether or not validity should be updated on value change. `true`
			     *     by default.
			     */
			    MDCTextFieldFoundation.prototype.getValidateOnValueChange = function () {
			        return this.validateOnValueChange;
			    };
			    /**
			     * Enables or disables the use of native validation. Use this for custom
			     * validation.
			     * @param useNativeValidation Set this to false to ignore native input
			     *     validation.
			     */
			    MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
			        this.useNativeValidation = useNativeValidation;
			    };
			    MDCTextFieldFoundation.prototype.isDisabled = function () {
			        return this.getNativeInput().disabled;
			    };
			    /**
			     * @param disabled Sets the text-field disabled or enabled.
			     */
			    MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
			        this.getNativeInput().disabled = disabled;
			        this.styleDisabled(disabled);
			    };
			    /**
			     * @param content Sets the content of the helper text.
			     */
			    MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
			        if (this.helperText) {
			            this.helperText.setContent(content);
			        }
			    };
			    /**
			     * Sets the aria label of the leading icon.
			     */
			    MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
			        if (this.leadingIcon) {
			            this.leadingIcon.setAriaLabel(label);
			        }
			    };
			    /**
			     * Sets the text content of the leading icon.
			     */
			    MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
			        if (this.leadingIcon) {
			            this.leadingIcon.setContent(content);
			        }
			    };
			    /**
			     * Sets the aria label of the trailing icon.
			     */
			    MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
			        if (this.trailingIcon) {
			            this.trailingIcon.setAriaLabel(label);
			        }
			    };
			    /**
			     * Sets the text content of the trailing icon.
			     */
			    MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
			        if (this.trailingIcon) {
			            this.trailingIcon.setContent(content);
			        }
			    };
			    /**
			     * Sets character counter values that shows characters used and the total
			     * character limit.
			     */
			    MDCTextFieldFoundation.prototype.setcharacterCounter = function (currentLength) {
			        if (!this.characterCounter) {
			            return;
			        }
			        var maxLength = this.getNativeInput().maxLength;
			        if (maxLength === -1) {
			            throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
			        }
			        this.characterCounter.setCounterValue(currentLength, maxLength);
			    };
			    /**
			     * @return True if the Text Field input fails in converting the user-supplied
			     *     value.
			     */
			    MDCTextFieldFoundation.prototype.isBadInput = function () {
			        // The badInput property is not supported in IE 11 💩.
			        return this.getNativeInput().validity.badInput || false;
			    };
			    /**
			     * @return The result of native validity checking (ValidityState.valid).
			     */
			    MDCTextFieldFoundation.prototype.isNativeInputValid = function () {
			        return this.getNativeInput().validity.valid;
			    };
			    /**
			     * Styles the component based on the validity state.
			     */
			    MDCTextFieldFoundation.prototype.styleValidity = function (isValid) {
			        var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
			        if (isValid) {
			            this.adapter.removeClass(INVALID);
			        }
			        else {
			            this.adapter.addClass(INVALID);
			        }
			        if (this.helperText) {
			            this.helperText.setValidity(isValid);
			            // We dynamically set or unset aria-describedby for validation helper text
			            // only, based on whether the field is valid
			            var helperTextValidation = this.helperText.isValidation();
			            if (!helperTextValidation) {
			                return;
			            }
			            var helperTextVisible = this.helperText.isVisible();
			            var helperTextId = this.helperText.getId();
			            if (helperTextVisible && helperTextId) {
			                this.adapter.setInputAttr(strings.ARIA_DESCRIBEDBY, helperTextId);
			            }
			            else {
			                this.adapter.removeInputAttr(strings.ARIA_DESCRIBEDBY);
			            }
			        }
			    };
			    /**
			     * Styles the component based on the focused state.
			     */
			    MDCTextFieldFoundation.prototype.styleFocused = function (isFocused) {
			        var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
			        if (isFocused) {
			            this.adapter.addClass(FOCUSED);
			        }
			        else {
			            this.adapter.removeClass(FOCUSED);
			        }
			    };
			    /**
			     * Styles the component based on the disabled state.
			     */
			    MDCTextFieldFoundation.prototype.styleDisabled = function (isDisabled) {
			        var _a = MDCTextFieldFoundation.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
			        if (isDisabled) {
			            this.adapter.addClass(DISABLED);
			            this.adapter.removeClass(INVALID);
			        }
			        else {
			            this.adapter.removeClass(DISABLED);
			        }
			        if (this.leadingIcon) {
			            this.leadingIcon.setDisabled(isDisabled);
			        }
			        if (this.trailingIcon) {
			            this.trailingIcon.setDisabled(isDisabled);
			        }
			    };
			    /**
			     * Styles the component based on the label floating state.
			     */
			    MDCTextFieldFoundation.prototype.styleFloating = function (isFloating) {
			        var LABEL_FLOATING = MDCTextFieldFoundation.cssClasses.LABEL_FLOATING;
			        if (isFloating) {
			            this.adapter.addClass(LABEL_FLOATING);
			        }
			        else {
			            this.adapter.removeClass(LABEL_FLOATING);
			        }
			    };
			    /**
			     * @return The native text input element from the host environment, or an
			     *     object with the same shape for unit tests.
			     */
			    MDCTextFieldFoundation.prototype.getNativeInput = function () {
			        // this.adapter may be undefined in foundation unit tests. This happens when
			        // testdouble is creating a mock object and invokes the
			        // shouldShake/shouldFloat getters (which in turn call getValue(), which
			        // calls this method) before init() has been called from the MDCTextField
			        // constructor. To work around that issue, we return a dummy object.
			        var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
			        return nativeInput || {
			            disabled: false,
			            maxLength: -1,
			            required: false,
			            type: 'input',
			            validity: {
			                badInput: false,
			                valid: true,
			            },
			            value: '',
			        };
			    };
			    return MDCTextFieldFoundation;
			}(MDCFoundation));

			function classMap(classObj) {
			    return Object.entries(classObj)
			        .filter(([name, value]) => name !== '' && value)
			        .map(([name]) => name)
			        .join(' ');
			}

			function dispatch(element, eventType, detail, eventInit = { bubbles: true }, 
			/** This is an internal thing used by SMUI to duplicate some SMUI events as MDC events. */
			duplicateEventForMDC = false) {
			    if (typeof Event !== 'undefined' && element) {
			        const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
			        element === null || element === void 0 ? void 0 : element.dispatchEvent(event);
			        if (duplicateEventForMDC && eventType.startsWith('SMUI')) {
			            const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => 'MDC'), Object.assign(Object.assign({}, eventInit), { detail }));
			            element === null || element === void 0 ? void 0 : element.dispatchEvent(duplicateEvent);
			            if (duplicateEvent.defaultPrevented) {
			                event.preventDefault();
			            }
			        }
			        return event;
			    }
			}

			function exclude(obj, keys) {
			    let names = Object.getOwnPropertyNames(obj);
			    const newObj = {};
			    for (let i = 0; i < names.length; i++) {
			        const name = names[i];
			        const cashIndex = name.indexOf('$');
			        if (cashIndex !== -1 &&
			            keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
			            continue;
			        }
			        if (keys.indexOf(name) !== -1) {
			            continue;
			        }
			        newObj[name] = obj[name];
			    }
			    return newObj;
			}

			// Match old modifiers. (only works on DOM events)
			const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
			// Match new modifiers.
			const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
			function forwardEventsBuilder(component) {
			    // This is our pseudo $on function. It is defined on component mount.
			    let $on;
			    // This is a list of events bound before mount.
			    let events = [];
			    // And we override the $on function to forward all bound events.
			    component.$on = (fullEventType, callback) => {
			        let eventType = fullEventType;
			        let destructor = () => { };
			        if ($on) {
			            // The event was bound programmatically.
			            destructor = $on(eventType, callback);
			        }
			        else {
			            // The event was bound before mount by Svelte.
			            events.push([eventType, callback]);
			        }
			        const oldModifierMatch = eventType.match(oldModifierRegex);
			        if (oldModifierMatch && console) {
			            console.warn('Event modifiers in SMUI now use "$" instead of ":", so that ' +
			                'all events can be bound with modifiers. Please update your ' +
			                'event binding: ', eventType);
			        }
			        return () => {
			            destructor();
			        };
			    };
			    function forward(e) {
			        // Internally bubble the event up from Svelte components.
			        bubble(component, e);
			    }
			    return (node) => {
			        const destructors = [];
			        const forwardDestructors = {};
			        // This function is responsible for listening and forwarding
			        // all bound events.
			        $on = (fullEventType, callback) => {
			            let eventType = fullEventType;
			            let handler = callback;
			            // DOM addEventListener options argument.
			            let options = false;
			            const oldModifierMatch = eventType.match(oldModifierRegex);
			            const newModifierMatch = eventType.match(newModifierRegex);
			            const modifierMatch = oldModifierMatch || newModifierMatch;
			            if (eventType.match(/^SMUI:\w+:/)) {
			                const newEventTypeParts = eventType.split(':');
			                let newEventType = '';
			                for (let i = 0; i < newEventTypeParts.length; i++) {
			                    newEventType +=
			                        i === newEventTypeParts.length - 1
			                            ? ':' + newEventTypeParts[i]
			                            : newEventTypeParts[i]
			                                .split('-')
			                                .map((value) => value.slice(0, 1).toUpperCase() + value.slice(1))
			                                .join('');
			                }
			                console.warn(`The event ${eventType.split('$')[0]} has been renamed to ${newEventType.split('$')[0]}.`);
			                eventType = newEventType;
			            }
			            if (modifierMatch) {
			                // Parse the event modifiers.
			                // Supported modifiers:
			                // - preventDefault
			                // - stopPropagation
			                // - passive
			                // - nonpassive
			                // - capture
			                // - once
			                const parts = eventType.split(oldModifierMatch ? ':' : '$');
			                eventType = parts[0];
			                const eventOptions = parts.slice(1).reduce((obj, mod) => {
			                    obj[mod] = true;
			                    return obj;
			                }, {});
			                if (eventOptions.passive) {
			                    options = options || {};
			                    options.passive = true;
			                }
			                if (eventOptions.nonpassive) {
			                    options = options || {};
			                    options.passive = false;
			                }
			                if (eventOptions.capture) {
			                    options = options || {};
			                    options.capture = true;
			                }
			                if (eventOptions.once) {
			                    options = options || {};
			                    options.once = true;
			                }
			                if (eventOptions.preventDefault) {
			                    handler = prevent_default(handler);
			                }
			                if (eventOptions.stopPropagation) {
			                    handler = stop_propagation(handler);
			                }
			            }
			            // Listen for the event directly, with the given options.
			            const off = listen(node, eventType, handler, options);
			            const destructor = () => {
			                off();
			                const idx = destructors.indexOf(destructor);
			                if (idx > -1) {
			                    destructors.splice(idx, 1);
			                }
			            };
			            destructors.push(destructor);
			            // Forward the event from Svelte.
			            if (!(eventType in forwardDestructors)) {
			                forwardDestructors[eventType] = listen(node, eventType, forward);
			            }
			            return destructor;
			        };
			        for (let i = 0; i < events.length; i++) {
			            // Listen to all the events added before mount.
			            $on(events[i][0], events[i][1]);
			        }
			        return {
			            destroy: () => {
			                // Remove all event listeners.
			                for (let i = 0; i < destructors.length; i++) {
			                    destructors[i]();
			                }
			                // Remove all event forwarders.
			                for (let entry of Object.entries(forwardDestructors)) {
			                    entry[1]();
			                }
			            },
			        };
			    };
			}

			function prefixFilter(obj, prefix) {
			    let names = Object.getOwnPropertyNames(obj);
			    const newObj = {};
			    for (let i = 0; i < names.length; i++) {
			        const name = names[i];
			        if (name.substring(0, prefix.length) === prefix) {
			            newObj[name.substring(prefix.length)] = obj[name];
			        }
			    }
			    return newObj;
			}

			function useActions(node, actions) {
			    let actionReturns = [];
			    if (actions) {
			        for (let i = 0; i < actions.length; i++) {
			            const actionEntry = actions[i];
			            const action = Array.isArray(actionEntry) ? actionEntry[0] : actionEntry;
			            if (Array.isArray(actionEntry) && actionEntry.length > 1) {
			                actionReturns.push(action(node, actionEntry[1]));
			            }
			            else {
			                actionReturns.push(action(node));
			            }
			        }
			    }
			    return {
			        update(actions) {
			            if (((actions && actions.length) || 0) != actionReturns.length) {
			                throw new Error('You must not change the length of an actions array.');
			            }
			            if (actions) {
			                for (let i = 0; i < actions.length; i++) {
			                    const returnEntry = actionReturns[i];
			                    if (returnEntry && returnEntry.update) {
			                        const actionEntry = actions[i];
			                        if (Array.isArray(actionEntry) && actionEntry.length > 1) {
			                            returnEntry.update(actionEntry[1]);
			                        }
			                        else {
			                            returnEntry.update();
			                        }
			                    }
			                }
			            }
			        },
			        destroy() {
			            for (let i = 0; i < actionReturns.length; i++) {
			                const returnEntry = actionReturns[i];
			                if (returnEntry && returnEntry.destroy) {
			                    returnEntry.destroy();
			                }
			            }
			        },
			    };
			}

			/* node_modules/@smui/common/dist/SmuiElement.svelte generated by Svelte v3.55.1 */

			function create_else_block$2(ctx) {
				let previous_tag = /*tag*/ ctx[1];
				let svelte_element_anchor;
				let current;
				let svelte_element = /*tag*/ ctx[1] && create_dynamic_element_1(ctx);

				return {
					c() {
						if (svelte_element) svelte_element.c();
						svelte_element_anchor = empty();
					},
					m(target, anchor) {
						if (svelte_element) svelte_element.m(target, anchor);
						insert(target, svelte_element_anchor, anchor);
						current = true;
					},
					p(ctx, dirty) {
						if (/*tag*/ ctx[1]) {
							if (!previous_tag) {
								svelte_element = create_dynamic_element_1(ctx);
								svelte_element.c();
								svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
							} else if (safe_not_equal(previous_tag, /*tag*/ ctx[1])) {
								svelte_element.d(1);
								svelte_element = create_dynamic_element_1(ctx);
								svelte_element.c();
								svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
							} else {
								svelte_element.p(ctx, dirty);
							}
						} else if (previous_tag) {
							svelte_element.d(1);
							svelte_element = null;
						}

						previous_tag = /*tag*/ ctx[1];
					},
					i(local) {
						if (current) return;
						transition_in(svelte_element);
						current = true;
					},
					o(local) {
						transition_out(svelte_element);
						current = false;
					},
					d(detaching) {
						if (detaching) detach(svelte_element_anchor);
						if (svelte_element) svelte_element.d(detaching);
					}
				};
			}

			// (1:0) {#if selfClosing}
			function create_if_block$3(ctx) {
				let previous_tag = /*tag*/ ctx[1];
				let svelte_element_anchor;
				let svelte_element = /*tag*/ ctx[1] && create_dynamic_element(ctx);

				return {
					c() {
						if (svelte_element) svelte_element.c();
						svelte_element_anchor = empty();
					},
					m(target, anchor) {
						if (svelte_element) svelte_element.m(target, anchor);
						insert(target, svelte_element_anchor, anchor);
					},
					p(ctx, dirty) {
						if (/*tag*/ ctx[1]) {
							if (!previous_tag) {
								svelte_element = create_dynamic_element(ctx);
								svelte_element.c();
								svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
							} else if (safe_not_equal(previous_tag, /*tag*/ ctx[1])) {
								svelte_element.d(1);
								svelte_element = create_dynamic_element(ctx);
								svelte_element.c();
								svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
							} else {
								svelte_element.p(ctx, dirty);
							}
						} else if (previous_tag) {
							svelte_element.d(1);
							svelte_element = null;
						}

						previous_tag = /*tag*/ ctx[1];
					},
					i: noop,
					o: noop,
					d(detaching) {
						if (detaching) detach(svelte_element_anchor);
						if (svelte_element) svelte_element.d(detaching);
					}
				};
			}

			// (10:2) <svelte:element     this={tag}     bind:this={element}     use:useActions={use}     use:forwardEvents     {...$$restProps}>
			function create_dynamic_element_1(ctx) {
				let svelte_element;
				let useActions_action;
				let current;
				let mounted;
				let dispose;
				const default_slot_template = /*#slots*/ ctx[8].default;
				const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);
				let svelte_element_levels = [/*$$restProps*/ ctx[5]];
				let svelte_element_data = {};

				for (let i = 0; i < svelte_element_levels.length; i += 1) {
					svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
				}

				return {
					c() {
						svelte_element = element(/*tag*/ ctx[1]);
						if (default_slot) default_slot.c();

						if ((/-/).test(/*tag*/ ctx[1])) {
							set_custom_element_data_map(svelte_element, svelte_element_data);
						} else {
							set_attributes(svelte_element, svelte_element_data);
						}
					},
					m(target, anchor) {
						insert(target, svelte_element, anchor);

						if (default_slot) {
							default_slot.m(svelte_element, null);
						}

						/*svelte_element_binding_1*/ ctx[10](svelte_element);
						current = true;

						if (!mounted) {
							dispose = [
								action_destroyer(useActions_action = useActions.call(null, svelte_element, /*use*/ ctx[0])),
								action_destroyer(/*forwardEvents*/ ctx[4].call(null, svelte_element))
							];

							mounted = true;
						}
					},
					p(ctx, dirty) {
						if (default_slot) {
							if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
								update_slot_base(
									default_slot,
									default_slot_template,
									ctx,
									/*$$scope*/ ctx[7],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[7])
									: get_slot_changes(default_slot_template, /*$$scope*/ ctx[7], dirty, null),
									null
								);
							}
						}

						svelte_element_data = get_spread_update(svelte_element_levels, [dirty & /*$$restProps*/ 32 && /*$$restProps*/ ctx[5]]);

						if ((/-/).test(/*tag*/ ctx[1])) {
							set_custom_element_data_map(svelte_element, svelte_element_data);
						} else {
							set_attributes(svelte_element, svelte_element_data);
						}

						if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
					},
					i(local) {
						if (current) return;
						transition_in(default_slot, local);
						current = true;
					},
					o(local) {
						transition_out(default_slot, local);
						current = false;
					},
					d(detaching) {
						if (detaching) detach(svelte_element);
						if (default_slot) default_slot.d(detaching);
						/*svelte_element_binding_1*/ ctx[10](null);
						mounted = false;
						run_all(dispose);
					}
				};
			}

			// (2:2) <svelte:element     this={tag}     bind:this={element}     use:useActions={use}     use:forwardEvents     {...$$restProps}   />
			function create_dynamic_element(ctx) {
				let svelte_element;
				let useActions_action;
				let mounted;
				let dispose;
				let svelte_element_levels = [/*$$restProps*/ ctx[5]];
				let svelte_element_data = {};

				for (let i = 0; i < svelte_element_levels.length; i += 1) {
					svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
				}

				return {
					c() {
						svelte_element = element(/*tag*/ ctx[1]);

						if ((/-/).test(/*tag*/ ctx[1])) {
							set_custom_element_data_map(svelte_element, svelte_element_data);
						} else {
							set_attributes(svelte_element, svelte_element_data);
						}
					},
					m(target, anchor) {
						insert(target, svelte_element, anchor);
						/*svelte_element_binding*/ ctx[9](svelte_element);

						if (!mounted) {
							dispose = [
								action_destroyer(useActions_action = useActions.call(null, svelte_element, /*use*/ ctx[0])),
								action_destroyer(/*forwardEvents*/ ctx[4].call(null, svelte_element))
							];

							mounted = true;
						}
					},
					p(ctx, dirty) {
						svelte_element_data = get_spread_update(svelte_element_levels, [dirty & /*$$restProps*/ 32 && /*$$restProps*/ ctx[5]]);

						if ((/-/).test(/*tag*/ ctx[1])) {
							set_custom_element_data_map(svelte_element, svelte_element_data);
						} else {
							set_attributes(svelte_element, svelte_element_data);
						}

						if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
					},
					d(detaching) {
						if (detaching) detach(svelte_element);
						/*svelte_element_binding*/ ctx[9](null);
						mounted = false;
						run_all(dispose);
					}
				};
			}

			function create_fragment$9(ctx) {
				let current_block_type_index;
				let if_block;
				let if_block_anchor;
				let current;
				const if_block_creators = [create_if_block$3, create_else_block$2];
				const if_blocks = [];

				function select_block_type(ctx, dirty) {
					if (/*selfClosing*/ ctx[3]) return 0;
					return 1;
				}

				current_block_type_index = select_block_type(ctx);
				if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

				return {
					c() {
						if_block.c();
						if_block_anchor = empty();
					},
					m(target, anchor) {
						if_blocks[current_block_type_index].m(target, anchor);
						insert(target, if_block_anchor, anchor);
						current = true;
					},
					p(ctx, [dirty]) {
						let previous_block_index = current_block_type_index;
						current_block_type_index = select_block_type(ctx);

						if (current_block_type_index === previous_block_index) {
							if_blocks[current_block_type_index].p(ctx, dirty);
						} else {
							group_outros();

							transition_out(if_blocks[previous_block_index], 1, 1, () => {
								if_blocks[previous_block_index] = null;
							});

							check_outros();
							if_block = if_blocks[current_block_type_index];

							if (!if_block) {
								if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
								if_block.c();
							} else {
								if_block.p(ctx, dirty);
							}

							transition_in(if_block, 1);
							if_block.m(if_block_anchor.parentNode, if_block_anchor);
						}
					},
					i(local) {
						if (current) return;
						transition_in(if_block);
						current = true;
					},
					o(local) {
						transition_out(if_block);
						current = false;
					},
					d(detaching) {
						if_blocks[current_block_type_index].d(detaching);
						if (detaching) detach(if_block_anchor);
					}
				};
			}

			function instance$5($$self, $$props, $$invalidate) {
				let selfClosing;
				const omit_props_names = ["use","tag","getElement"];
				let $$restProps = compute_rest_props($$props, omit_props_names);
				let { $$slots: slots = {}, $$scope } = $$props;
				let { use = [] } = $$props;
				let { tag } = $$props;
				const forwardEvents = forwardEventsBuilder(get_current_component());
				let element;

				function getElement() {
					return element;
				}

				function svelte_element_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						element = $$value;
						$$invalidate(2, element);
					});
				}

				function svelte_element_binding_1($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						element = $$value;
						$$invalidate(2, element);
					});
				}

				$$self.$$set = $$new_props => {
					$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
					$$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
					if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
					if ('tag' in $$new_props) $$invalidate(1, tag = $$new_props.tag);
					if ('$$scope' in $$new_props) $$invalidate(7, $$scope = $$new_props.$$scope);
				};

				$$self.$$.update = () => {
					if ($$self.$$.dirty & /*tag*/ 2) {
						$$invalidate(3, selfClosing = [
							'area',
							'base',
							'br',
							'col',
							'embed',
							'hr',
							'img',
							'input',
							'link',
							'meta',
							'param',
							'source',
							'track',
							'wbr'
						].indexOf(tag) > -1);
					}
				};

				return [
					use,
					tag,
					element,
					selfClosing,
					forwardEvents,
					$$restProps,
					getElement,
					$$scope,
					slots,
					svelte_element_binding,
					svelte_element_binding_1
				];
			}

			class SmuiElement extends SvelteComponent {
				constructor(options) {
					super();
					init(this, options, instance$5, create_fragment$9, safe_not_equal, { use: 0, tag: 1, getElement: 6 });
				}

				get getElement() {
					return this.$$.ctx[6];
				}
			}

			const subscriber_queue = [];
			/**
			 * Create a `Writable` store that allows both updating and reading by subscription.
			 * @param {*=}value initial value
			 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
			 */
			function writable(value, start = noop) {
			    let stop;
			    const subscribers = new Set();
			    function set(new_value) {
			        if (safe_not_equal(value, new_value)) {
			            value = new_value;
			            if (stop) { // store is ready
			                const run_queue = !subscriber_queue.length;
			                for (const subscriber of subscribers) {
			                    subscriber[1]();
			                    subscriber_queue.push(subscriber, value);
			                }
			                if (run_queue) {
			                    for (let i = 0; i < subscriber_queue.length; i += 2) {
			                        subscriber_queue[i][0](subscriber_queue[i + 1]);
			                    }
			                    subscriber_queue.length = 0;
			                }
			            }
			        }
			    }
			    function update(fn) {
			        set(fn(value));
			    }
			    function subscribe(run, invalidate = noop) {
			        const subscriber = [run, invalidate];
			        subscribers.add(subscriber);
			        if (subscribers.size === 1) {
			            stop = start(set) || noop;
			        }
			        run(value);
			        return () => {
			            subscribers.delete(subscriber);
			            if (subscribers.size === 0) {
			                stop();
			                stop = null;
			            }
			        };
			    }
			    return { set, update, subscribe };
			}

			/* node_modules/@smui/common/dist/ContextFragment.svelte generated by Svelte v3.55.1 */

			function create_fragment$8(ctx) {
				let current;
				const default_slot_template = /*#slots*/ ctx[4].default;
				const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

				return {
					c() {
						if (default_slot) default_slot.c();
					},
					m(target, anchor) {
						if (default_slot) {
							default_slot.m(target, anchor);
						}

						current = true;
					},
					p(ctx, [dirty]) {
						if (default_slot) {
							if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
								update_slot_base(
									default_slot,
									default_slot_template,
									ctx,
									/*$$scope*/ ctx[3],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[3])
									: get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null),
									null
								);
							}
						}
					},
					i(local) {
						if (current) return;
						transition_in(default_slot, local);
						current = true;
					},
					o(local) {
						transition_out(default_slot, local);
						current = false;
					},
					d(detaching) {
						if (default_slot) default_slot.d(detaching);
					}
				};
			}

			function instance$4($$self, $$props, $$invalidate) {
				let $storeValue;
				let { $$slots: slots = {}, $$scope } = $$props;
				let { key } = $$props;
				let { value } = $$props;
				const storeValue = writable(value);
				component_subscribe($$self, storeValue, value => $$invalidate(5, $storeValue = value));
				setContext(key, storeValue);

				onDestroy(() => {
					storeValue.set(undefined);
				});

				$$self.$$set = $$props => {
					if ('key' in $$props) $$invalidate(1, key = $$props.key);
					if ('value' in $$props) $$invalidate(2, value = $$props.value);
					if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
				};

				$$self.$$.update = () => {
					if ($$self.$$.dirty & /*value*/ 4) {
						set_store_value(storeValue, $storeValue = value, $storeValue);
					}
				};

				return [storeValue, key, value, $$scope, slots];
			}

			class ContextFragment extends SvelteComponent {
				constructor(options) {
					super();
					init(this, options, instance$4, create_fragment$8, safe_not_equal, { key: 1, value: 2 });
				}
			}

			const { applyPassive } = events;
			const { matches } = ponyfill;
			function Ripple(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve(), } = {}) {
			    let instance;
			    let addLayoutListener = getContext('SMUI:addLayoutListener');
			    let removeLayoutListener;
			    let oldActive = active;
			    let oldEventTarget = eventTarget;
			    let oldActiveTarget = activeTarget;
			    function handleProps() {
			        if (surface) {
			            addClass('mdc-ripple-surface');
			            if (color === 'primary') {
			                addClass('smui-ripple-surface--primary');
			                removeClass('smui-ripple-surface--secondary');
			            }
			            else if (color === 'secondary') {
			                removeClass('smui-ripple-surface--primary');
			                addClass('smui-ripple-surface--secondary');
			            }
			            else {
			                removeClass('smui-ripple-surface--primary');
			                removeClass('smui-ripple-surface--secondary');
			            }
			        }
			        else {
			            removeClass('mdc-ripple-surface');
			            removeClass('smui-ripple-surface--primary');
			            removeClass('smui-ripple-surface--secondary');
			        }
			        // Handle activation first.
			        if (instance && oldActive !== active) {
			            oldActive = active;
			            if (active) {
			                instance.activate();
			            }
			            else if (active === false) {
			                instance.deactivate();
			            }
			        }
			        // Then create/destroy an instance.
			        if (ripple && !instance) {
			            instance = new MDCRippleFoundation({
			                addClass,
			                browserSupportsCssVars: () => supportsCssVariables(window),
			                computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
			                containsEventTarget: (target) => node.contains(target),
			                deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
			                deregisterInteractionHandler: (evtType, handler) => (eventTarget || node).removeEventListener(evtType, handler, applyPassive()),
			                deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
			                getWindowPageOffset: () => ({
			                    x: window.pageXOffset,
			                    y: window.pageYOffset,
			                }),
			                isSurfaceActive: () => active == null ? matches(activeTarget || node, ':active') : active,
			                isSurfaceDisabled: () => !!disabled,
			                isUnbounded: () => !!unbounded,
			                registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
			                registerInteractionHandler: (evtType, handler) => (eventTarget || node).addEventListener(evtType, handler, applyPassive()),
			                registerResizeHandler: (handler) => window.addEventListener('resize', handler),
			                removeClass,
			                updateCssVariable: addStyle,
			            });
			            initPromise.then(() => {
			                if (instance) {
			                    instance.init();
			                    instance.setUnbounded(unbounded);
			                }
			            });
			        }
			        else if (instance && !ripple) {
			            initPromise.then(() => {
			                if (instance) {
			                    instance.destroy();
			                    instance = undefined;
			                }
			            });
			        }
			        // Now handle event/active targets
			        if (instance &&
			            (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
			            oldEventTarget = eventTarget;
			            oldActiveTarget = activeTarget;
			            instance.destroy();
			            requestAnimationFrame(() => {
			                if (instance) {
			                    instance.init();
			                    instance.setUnbounded(unbounded);
			                }
			            });
			        }
			        if (!ripple && unbounded) {
			            addClass('mdc-ripple-upgraded--unbounded');
			        }
			    }
			    handleProps();
			    if (addLayoutListener) {
			        removeLayoutListener = addLayoutListener(layout);
			    }
			    function layout() {
			        if (instance) {
			            instance.layout();
			        }
			    }
			    return {
			        update(props) {
			            ({
			                ripple,
			                surface,
			                unbounded,
			                disabled,
			                color,
			                active,
			                rippleElement,
			                eventTarget,
			                activeTarget,
			                addClass,
			                removeClass,
			                addStyle,
			                initPromise,
			            } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: undefined, active: undefined, rippleElement: undefined, eventTarget: undefined, activeTarget: undefined, addClass: (className) => node.classList.add(className), removeClass: (className) => node.classList.remove(className), addStyle: (name, value) => node.style.setProperty(name, value), initPromise: Promise.resolve() }, props));
			            handleProps();
			        },
			        destroy() {
			            if (instance) {
			                instance.destroy();
			                instance = undefined;
			                removeClass('mdc-ripple-surface');
			                removeClass('smui-ripple-surface--primary');
			                removeClass('smui-ripple-surface--secondary');
			            }
			            if (removeLayoutListener) {
			                removeLayoutListener();
			            }
			        },
			    };
			}

			/* node_modules/@smui/floating-label/dist/FloatingLabel.svelte generated by Svelte v3.55.1 */

			function create_else_block$1(ctx) {
				let label;
				let label_class_value;
				let label_style_value;
				let label_for_value;
				let useActions_action;
				let current;
				let mounted;
				let dispose;
				const default_slot_template = /*#slots*/ ctx[22].default;
				const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[21], null);

				let label_levels = [
					{
						class: label_class_value = classMap({
							[/*className*/ ctx[3]]: true,
							'mdc-floating-label': true,
							'mdc-floating-label--float-above': /*floatAbove*/ ctx[0],
							'mdc-floating-label--required': /*required*/ ctx[1],
							.../*internalClasses*/ ctx[8]
						})
					},
					{
						style: label_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func_1$1).concat([/*style*/ ctx[4]]).join(' ')
					},
					{
						for: label_for_value = /*forId*/ ctx[5] || (/*inputProps*/ ctx[11]
						? /*inputProps*/ ctx[11].id
						: undefined)
					},
					/*$$restProps*/ ctx[12]
				];

				let label_data = {};

				for (let i = 0; i < label_levels.length; i += 1) {
					label_data = assign(label_data, label_levels[i]);
				}

				return {
					c() {
						label = element("label");
						if (default_slot) default_slot.c();
						set_attributes(label, label_data);
					},
					m(target, anchor) {
						insert(target, label, anchor);

						if (default_slot) {
							default_slot.m(label, null);
						}

						/*label_binding*/ ctx[24](label);
						current = true;

						if (!mounted) {
							dispose = [
								action_destroyer(useActions_action = useActions.call(null, label, /*use*/ ctx[2])),
								action_destroyer(/*forwardEvents*/ ctx[10].call(null, label))
							];

							mounted = true;
						}
					},
					p(ctx, dirty) {
						if (default_slot) {
							if (default_slot.p && (!current || dirty & /*$$scope*/ 2097152)) {
								update_slot_base(
									default_slot,
									default_slot_template,
									ctx,
									/*$$scope*/ ctx[21],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[21])
									: get_slot_changes(default_slot_template, /*$$scope*/ ctx[21], dirty, null),
									null
								);
							}
						}

						set_attributes(label, label_data = get_spread_update(label_levels, [
							(!current || dirty & /*className, floatAbove, required, internalClasses*/ 267 && label_class_value !== (label_class_value = classMap({
								[/*className*/ ctx[3]]: true,
								'mdc-floating-label': true,
								'mdc-floating-label--float-above': /*floatAbove*/ ctx[0],
								'mdc-floating-label--required': /*required*/ ctx[1],
								.../*internalClasses*/ ctx[8]
							}))) && { class: label_class_value },
							(!current || dirty & /*internalStyles, style*/ 528 && label_style_value !== (label_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func_1$1).concat([/*style*/ ctx[4]]).join(' '))) && { style: label_style_value },
							(!current || dirty & /*forId*/ 32 && label_for_value !== (label_for_value = /*forId*/ ctx[5] || (/*inputProps*/ ctx[11]
							? /*inputProps*/ ctx[11].id
							: undefined))) && { for: label_for_value },
							dirty & /*$$restProps*/ 4096 && /*$$restProps*/ ctx[12]
						]));

						if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 4) useActions_action.update.call(null, /*use*/ ctx[2]);
					},
					i(local) {
						if (current) return;
						transition_in(default_slot, local);
						current = true;
					},
					o(local) {
						transition_out(default_slot, local);
						current = false;
					},
					d(detaching) {
						if (detaching) detach(label);
						if (default_slot) default_slot.d(detaching);
						/*label_binding*/ ctx[24](null);
						mounted = false;
						run_all(dispose);
					}
				};
			}

			// (1:0) {#if wrapped}
			function create_if_block$2(ctx) {
				let span;
				let span_class_value;
				let span_style_value;
				let useActions_action;
				let current;
				let mounted;
				let dispose;
				const default_slot_template = /*#slots*/ ctx[22].default;
				const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[21], null);

				let span_levels = [
					{
						class: span_class_value = classMap({
							[/*className*/ ctx[3]]: true,
							'mdc-floating-label': true,
							'mdc-floating-label--float-above': /*floatAbove*/ ctx[0],
							'mdc-floating-label--required': /*required*/ ctx[1],
							.../*internalClasses*/ ctx[8]
						})
					},
					{
						style: span_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func$3).concat([/*style*/ ctx[4]]).join(' ')
					},
					/*$$restProps*/ ctx[12]
				];

				let span_data = {};

				for (let i = 0; i < span_levels.length; i += 1) {
					span_data = assign(span_data, span_levels[i]);
				}

				return {
					c() {
						span = element("span");
						if (default_slot) default_slot.c();
						set_attributes(span, span_data);
					},
					m(target, anchor) {
						insert(target, span, anchor);

						if (default_slot) {
							default_slot.m(span, null);
						}

						/*span_binding*/ ctx[23](span);
						current = true;

						if (!mounted) {
							dispose = [
								action_destroyer(useActions_action = useActions.call(null, span, /*use*/ ctx[2])),
								action_destroyer(/*forwardEvents*/ ctx[10].call(null, span))
							];

							mounted = true;
						}
					},
					p(ctx, dirty) {
						if (default_slot) {
							if (default_slot.p && (!current || dirty & /*$$scope*/ 2097152)) {
								update_slot_base(
									default_slot,
									default_slot_template,
									ctx,
									/*$$scope*/ ctx[21],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[21])
									: get_slot_changes(default_slot_template, /*$$scope*/ ctx[21], dirty, null),
									null
								);
							}
						}

						set_attributes(span, span_data = get_spread_update(span_levels, [
							(!current || dirty & /*className, floatAbove, required, internalClasses*/ 267 && span_class_value !== (span_class_value = classMap({
								[/*className*/ ctx[3]]: true,
								'mdc-floating-label': true,
								'mdc-floating-label--float-above': /*floatAbove*/ ctx[0],
								'mdc-floating-label--required': /*required*/ ctx[1],
								.../*internalClasses*/ ctx[8]
							}))) && { class: span_class_value },
							(!current || dirty & /*internalStyles, style*/ 528 && span_style_value !== (span_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func$3).concat([/*style*/ ctx[4]]).join(' '))) && { style: span_style_value },
							dirty & /*$$restProps*/ 4096 && /*$$restProps*/ ctx[12]
						]));

						if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 4) useActions_action.update.call(null, /*use*/ ctx[2]);
					},
					i(local) {
						if (current) return;
						transition_in(default_slot, local);
						current = true;
					},
					o(local) {
						transition_out(default_slot, local);
						current = false;
					},
					d(detaching) {
						if (detaching) detach(span);
						if (default_slot) default_slot.d(detaching);
						/*span_binding*/ ctx[23](null);
						mounted = false;
						run_all(dispose);
					}
				};
			}

			function create_fragment$7(ctx) {
				let current_block_type_index;
				let if_block;
				let if_block_anchor;
				let current;
				const if_block_creators = [create_if_block$2, create_else_block$1];
				const if_blocks = [];

				function select_block_type(ctx, dirty) {
					if (/*wrapped*/ ctx[6]) return 0;
					return 1;
				}

				current_block_type_index = select_block_type(ctx);
				if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

				return {
					c() {
						if_block.c();
						if_block_anchor = empty();
					},
					m(target, anchor) {
						if_blocks[current_block_type_index].m(target, anchor);
						insert(target, if_block_anchor, anchor);
						current = true;
					},
					p(ctx, [dirty]) {
						let previous_block_index = current_block_type_index;
						current_block_type_index = select_block_type(ctx);

						if (current_block_type_index === previous_block_index) {
							if_blocks[current_block_type_index].p(ctx, dirty);
						} else {
							group_outros();

							transition_out(if_blocks[previous_block_index], 1, 1, () => {
								if_blocks[previous_block_index] = null;
							});

							check_outros();
							if_block = if_blocks[current_block_type_index];

							if (!if_block) {
								if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
								if_block.c();
							} else {
								if_block.p(ctx, dirty);
							}

							transition_in(if_block, 1);
							if_block.m(if_block_anchor.parentNode, if_block_anchor);
						}
					},
					i(local) {
						if (current) return;
						transition_in(if_block);
						current = true;
					},
					o(local) {
						transition_out(if_block);
						current = false;
					},
					d(detaching) {
						if_blocks[current_block_type_index].d(detaching);
						if (detaching) detach(if_block_anchor);
					}
				};
			}

			const func$3 = ([name, value]) => `${name}: ${value};`;
			const func_1$1 = ([name, value]) => `${name}: ${value};`;

			function instance_1$3($$self, $$props, $$invalidate) {
				const omit_props_names = [
					"use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"
				];

				let $$restProps = compute_rest_props($$props, omit_props_names);
				let { $$slots: slots = {}, $$scope } = $$props;
				var _a;
				const forwardEvents = forwardEventsBuilder(get_current_component());
				let { use = [] } = $$props;
				let { class: className = '' } = $$props;
				let { style = '' } = $$props;
				let { for: forId = undefined } = $$props;
				let { floatAbove = false } = $$props;
				let { required = false } = $$props;
				let { wrapped = false } = $$props;
				let element;
				let instance;
				let internalClasses = {};
				let internalStyles = {};

				let inputProps = (_a = getContext('SMUI:generic:input:props')) !== null && _a !== void 0
				? _a
				: {};

				let previousFloatAbove = floatAbove;
				let previousRequired = required;

				onMount(() => {
					$$invalidate(18, instance = new MDCFloatingLabelFoundation({
							addClass,
							removeClass,
							getWidth: () => {
								var _a, _b;
								const el = getElement();
								const clone = el.cloneNode(true);

								(_a = el.parentNode) === null || _a === void 0
								? void 0
								: _a.appendChild(clone);

								clone.classList.add('smui-floating-label--remove-transition');
								clone.classList.add('smui-floating-label--force-size');
								clone.classList.remove('mdc-floating-label--float-above');
								const scrollWidth = clone.scrollWidth;

								(_b = el.parentNode) === null || _b === void 0
								? void 0
								: _b.removeChild(clone);

								return scrollWidth;
							},
							registerInteractionHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
							deregisterInteractionHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler)
						}));

					const accessor = {
						get element() {
							return getElement();
						},
						addStyle,
						removeStyle
					};

					dispatch(element, 'SMUIFloatingLabel:mount', accessor);
					instance.init();

					return () => {
						dispatch(element, 'SMUIFloatingLabel:unmount', accessor);
						instance.destroy();
					};
				});

				function addClass(className) {
					if (!internalClasses[className]) {
						$$invalidate(8, internalClasses[className] = true, internalClasses);
					}
				}

				function removeClass(className) {
					if (!(className in internalClasses) || internalClasses[className]) {
						$$invalidate(8, internalClasses[className] = false, internalClasses);
					}
				}

				function addStyle(name, value) {
					if (internalStyles[name] != value) {
						if (value === '' || value == null) {
							delete internalStyles[name];
							$$invalidate(9, internalStyles);
						} else {
							$$invalidate(9, internalStyles[name] = value, internalStyles);
						}
					}
				}

				function removeStyle(name) {
					if (name in internalStyles) {
						delete internalStyles[name];
						$$invalidate(9, internalStyles);
					}
				}

				function shake(shouldShake) {
					instance.shake(shouldShake);
				}

				function float(shouldFloat) {
					$$invalidate(0, floatAbove = shouldFloat);
				}

				function setRequired(isRequired) {
					$$invalidate(1, required = isRequired);
				}

				function getWidth() {
					return instance.getWidth();
				}

				function getElement() {
					return element;
				}

				function span_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						element = $$value;
						$$invalidate(7, element);
					});
				}

				function label_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						element = $$value;
						$$invalidate(7, element);
					});
				}

				$$self.$$set = $$new_props => {
					$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
					$$invalidate(12, $$restProps = compute_rest_props($$props, omit_props_names));
					if ('use' in $$new_props) $$invalidate(2, use = $$new_props.use);
					if ('class' in $$new_props) $$invalidate(3, className = $$new_props.class);
					if ('style' in $$new_props) $$invalidate(4, style = $$new_props.style);
					if ('for' in $$new_props) $$invalidate(5, forId = $$new_props.for);
					if ('floatAbove' in $$new_props) $$invalidate(0, floatAbove = $$new_props.floatAbove);
					if ('required' in $$new_props) $$invalidate(1, required = $$new_props.required);
					if ('wrapped' in $$new_props) $$invalidate(6, wrapped = $$new_props.wrapped);
					if ('$$scope' in $$new_props) $$invalidate(21, $$scope = $$new_props.$$scope);
				};

				$$self.$$.update = () => {
					if ($$self.$$.dirty & /*instance, previousFloatAbove, floatAbove*/ 786433) {
						if (instance && previousFloatAbove !== floatAbove) {
							$$invalidate(19, previousFloatAbove = floatAbove);
							instance.float(floatAbove);
						}
					}

					if ($$self.$$.dirty & /*instance, previousRequired, required*/ 1310722) {
						if (instance && previousRequired !== required) {
							$$invalidate(20, previousRequired = required);
							instance.setRequired(required);
						}
					}
				};

				return [
					floatAbove,
					required,
					use,
					className,
					style,
					forId,
					wrapped,
					element,
					internalClasses,
					internalStyles,
					forwardEvents,
					inputProps,
					$$restProps,
					shake,
					float,
					setRequired,
					getWidth,
					getElement,
					instance,
					previousFloatAbove,
					previousRequired,
					$$scope,
					slots,
					span_binding,
					label_binding
				];
			}

			class FloatingLabel extends SvelteComponent {
				constructor(options) {
					super();

					init(this, options, instance_1$3, create_fragment$7, safe_not_equal, {
						use: 2,
						class: 3,
						style: 4,
						for: 5,
						floatAbove: 0,
						required: 1,
						wrapped: 6,
						shake: 13,
						float: 14,
						setRequired: 15,
						getWidth: 16,
						getElement: 17
					});
				}

				get shake() {
					return this.$$.ctx[13];
				}

				get float() {
					return this.$$.ctx[14];
				}

				get setRequired() {
					return this.$$.ctx[15];
				}

				get getWidth() {
					return this.$$.ctx[16];
				}

				get getElement() {
					return this.$$.ctx[17];
				}
			}

			/* node_modules/@smui/line-ripple/dist/LineRipple.svelte generated by Svelte v3.55.1 */

			function create_fragment$6(ctx) {
				let div;
				let div_class_value;
				let div_style_value;
				let useActions_action;
				let mounted;
				let dispose;

				let div_levels = [
					{
						class: div_class_value = classMap({
							[/*className*/ ctx[1]]: true,
							'mdc-line-ripple': true,
							'mdc-line-ripple--active': /*active*/ ctx[3],
							.../*internalClasses*/ ctx[5]
						})
					},
					{
						style: div_style_value = Object.entries(/*internalStyles*/ ctx[6]).map(func$2).concat([/*style*/ ctx[2]]).join(' ')
					},
					/*$$restProps*/ ctx[8]
				];

				let div_data = {};

				for (let i = 0; i < div_levels.length; i += 1) {
					div_data = assign(div_data, div_levels[i]);
				}

				return {
					c() {
						div = element("div");
						set_attributes(div, div_data);
					},
					m(target, anchor) {
						insert(target, div, anchor);
						/*div_binding*/ ctx[13](div);

						if (!mounted) {
							dispose = [
								action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[0])),
								action_destroyer(/*forwardEvents*/ ctx[7].call(null, div))
							];

							mounted = true;
						}
					},
					p(ctx, [dirty]) {
						set_attributes(div, div_data = get_spread_update(div_levels, [
							dirty & /*className, active, internalClasses*/ 42 && div_class_value !== (div_class_value = classMap({
								[/*className*/ ctx[1]]: true,
								'mdc-line-ripple': true,
								'mdc-line-ripple--active': /*active*/ ctx[3],
								.../*internalClasses*/ ctx[5]
							})) && { class: div_class_value },
							dirty & /*internalStyles, style*/ 68 && div_style_value !== (div_style_value = Object.entries(/*internalStyles*/ ctx[6]).map(func$2).concat([/*style*/ ctx[2]]).join(' ')) && { style: div_style_value },
							dirty & /*$$restProps*/ 256 && /*$$restProps*/ ctx[8]
						]));

						if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
					},
					i: noop,
					o: noop,
					d(detaching) {
						if (detaching) detach(div);
						/*div_binding*/ ctx[13](null);
						mounted = false;
						run_all(dispose);
					}
				};
			}

			const func$2 = ([name, value]) => `${name}: ${value};`;

			function instance_1$2($$self, $$props, $$invalidate) {
				const omit_props_names = [
					"use","class","style","active","activate","deactivate","setRippleCenter","getElement"
				];

				let $$restProps = compute_rest_props($$props, omit_props_names);
				const forwardEvents = forwardEventsBuilder(get_current_component());
				let { use = [] } = $$props;
				let { class: className = '' } = $$props;
				let { style = '' } = $$props;
				let { active = false } = $$props;
				let element;
				let instance;
				let internalClasses = {};
				let internalStyles = {};

				onMount(() => {
					instance = new MDCLineRippleFoundation({
							addClass,
							removeClass,
							hasClass,
							setStyle: addStyle,
							registerEventHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
							deregisterEventHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler)
						});

					instance.init();

					return () => {
						instance.destroy();
					};
				});

				function hasClass(className) {
					return className in internalClasses
					? internalClasses[className]
					: getElement().classList.contains(className);
				}

				function addClass(className) {
					if (!internalClasses[className]) {
						$$invalidate(5, internalClasses[className] = true, internalClasses);
					}
				}

				function removeClass(className) {
					if (!(className in internalClasses) || internalClasses[className]) {
						$$invalidate(5, internalClasses[className] = false, internalClasses);
					}
				}

				function addStyle(name, value) {
					if (internalStyles[name] != value) {
						if (value === '' || value == null) {
							delete internalStyles[name];
							$$invalidate(6, internalStyles);
						} else {
							$$invalidate(6, internalStyles[name] = value, internalStyles);
						}
					}
				}

				function activate() {
					instance.activate();
				}

				function deactivate() {
					instance.deactivate();
				}

				function setRippleCenter(xCoordinate) {
					instance.setRippleCenter(xCoordinate);
				}

				function getElement() {
					return element;
				}

				function div_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						element = $$value;
						$$invalidate(4, element);
					});
				}

				$$self.$$set = $$new_props => {
					$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
					$$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
					if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
					if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
					if ('style' in $$new_props) $$invalidate(2, style = $$new_props.style);
					if ('active' in $$new_props) $$invalidate(3, active = $$new_props.active);
				};

				return [
					use,
					className,
					style,
					active,
					element,
					internalClasses,
					internalStyles,
					forwardEvents,
					$$restProps,
					activate,
					deactivate,
					setRippleCenter,
					getElement,
					div_binding
				];
			}

			class LineRipple extends SvelteComponent {
				constructor(options) {
					super();

					init(this, options, instance_1$2, create_fragment$6, safe_not_equal, {
						use: 0,
						class: 1,
						style: 2,
						active: 3,
						activate: 9,
						deactivate: 10,
						setRippleCenter: 11,
						getElement: 12
					});
				}

				get activate() {
					return this.$$.ctx[9];
				}

				get deactivate() {
					return this.$$.ctx[10];
				}

				get setRippleCenter() {
					return this.$$.ctx[11];
				}

				get getElement() {
					return this.$$.ctx[12];
				}
			}

			/* node_modules/@smui/notched-outline/dist/NotchedOutline.svelte generated by Svelte v3.55.1 */

			function create_if_block$1(ctx) {
				let div;
				let div_style_value;
				let current;
				const default_slot_template = /*#slots*/ ctx[14].default;
				const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[13], null);

				return {
					c() {
						div = element("div");
						if (default_slot) default_slot.c();
						attr(div, "class", "mdc-notched-outline__notch");
						attr(div, "style", div_style_value = Object.entries(/*notchStyles*/ ctx[7]).map(func$1).join(' '));
					},
					m(target, anchor) {
						insert(target, div, anchor);

						if (default_slot) {
							default_slot.m(div, null);
						}

						current = true;
					},
					p(ctx, dirty) {
						if (default_slot) {
							if (default_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
								update_slot_base(
									default_slot,
									default_slot_template,
									ctx,
									/*$$scope*/ ctx[13],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[13])
									: get_slot_changes(default_slot_template, /*$$scope*/ ctx[13], dirty, null),
									null
								);
							}
						}

						if (!current || dirty & /*notchStyles*/ 128 && div_style_value !== (div_style_value = Object.entries(/*notchStyles*/ ctx[7]).map(func$1).join(' '))) {
							attr(div, "style", div_style_value);
						}
					},
					i(local) {
						if (current) return;
						transition_in(default_slot, local);
						current = true;
					},
					o(local) {
						transition_out(default_slot, local);
						current = false;
					},
					d(detaching) {
						if (detaching) detach(div);
						if (default_slot) default_slot.d(detaching);
					}
				};
			}

			function create_fragment$5(ctx) {
				let div2;
				let div0;
				let t0;
				let t1;
				let div1;
				let div2_class_value;
				let useActions_action;
				let current;
				let mounted;
				let dispose;
				let if_block = !/*noLabel*/ ctx[3] && create_if_block$1(ctx);

				let div2_levels = [
					{
						class: div2_class_value = classMap({
							[/*className*/ ctx[1]]: true,
							'mdc-notched-outline': true,
							'mdc-notched-outline--notched': /*notched*/ ctx[2],
							'mdc-notched-outline--no-label': /*noLabel*/ ctx[3],
							.../*internalClasses*/ ctx[6]
						})
					},
					/*$$restProps*/ ctx[9]
				];

				let div2_data = {};

				for (let i = 0; i < div2_levels.length; i += 1) {
					div2_data = assign(div2_data, div2_levels[i]);
				}

				return {
					c() {
						div2 = element("div");
						div0 = element("div");
						t0 = space();
						if (if_block) if_block.c();
						t1 = space();
						div1 = element("div");
						attr(div0, "class", "mdc-notched-outline__leading");
						attr(div1, "class", "mdc-notched-outline__trailing");
						set_attributes(div2, div2_data);
					},
					m(target, anchor) {
						insert(target, div2, anchor);
						append(div2, div0);
						append(div2, t0);
						if (if_block) if_block.m(div2, null);
						append(div2, t1);
						append(div2, div1);
						/*div2_binding*/ ctx[15](div2);
						current = true;

						if (!mounted) {
							dispose = [
								action_destroyer(useActions_action = useActions.call(null, div2, /*use*/ ctx[0])),
								action_destroyer(/*forwardEvents*/ ctx[8].call(null, div2)),
								listen(div2, "SMUIFloatingLabel:mount", /*SMUIFloatingLabel_mount_handler*/ ctx[16]),
								listen(div2, "SMUIFloatingLabel:unmount", /*SMUIFloatingLabel_unmount_handler*/ ctx[17])
							];

							mounted = true;
						}
					},
					p(ctx, [dirty]) {
						if (!/*noLabel*/ ctx[3]) {
							if (if_block) {
								if_block.p(ctx, dirty);

								if (dirty & /*noLabel*/ 8) {
									transition_in(if_block, 1);
								}
							} else {
								if_block = create_if_block$1(ctx);
								if_block.c();
								transition_in(if_block, 1);
								if_block.m(div2, t1);
							}
						} else if (if_block) {
							group_outros();

							transition_out(if_block, 1, 1, () => {
								if_block = null;
							});

							check_outros();
						}

						set_attributes(div2, div2_data = get_spread_update(div2_levels, [
							(!current || dirty & /*className, notched, noLabel, internalClasses*/ 78 && div2_class_value !== (div2_class_value = classMap({
								[/*className*/ ctx[1]]: true,
								'mdc-notched-outline': true,
								'mdc-notched-outline--notched': /*notched*/ ctx[2],
								'mdc-notched-outline--no-label': /*noLabel*/ ctx[3],
								.../*internalClasses*/ ctx[6]
							}))) && { class: div2_class_value },
							dirty & /*$$restProps*/ 512 && /*$$restProps*/ ctx[9]
						]));

						if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
					},
					i(local) {
						if (current) return;
						transition_in(if_block);
						current = true;
					},
					o(local) {
						transition_out(if_block);
						current = false;
					},
					d(detaching) {
						if (detaching) detach(div2);
						if (if_block) if_block.d();
						/*div2_binding*/ ctx[15](null);
						mounted = false;
						run_all(dispose);
					}
				};
			}

			const func$1 = ([name, value]) => `${name}: ${value};`;

			function instance_1$1($$self, $$props, $$invalidate) {
				const omit_props_names = ["use","class","notched","noLabel","notch","closeNotch","getElement"];
				let $$restProps = compute_rest_props($$props, omit_props_names);
				let { $$slots: slots = {}, $$scope } = $$props;
				const forwardEvents = forwardEventsBuilder(get_current_component());
				let { use = [] } = $$props;
				let { class: className = '' } = $$props;
				let { notched = false } = $$props;
				let { noLabel = false } = $$props;
				let element;
				let instance;
				let floatingLabel;
				let internalClasses = {};
				let notchStyles = {};

				onMount(() => {
					instance = new MDCNotchedOutlineFoundation({
							addClass,
							removeClass,
							setNotchWidthProperty: width => addNotchStyle('width', width + 'px'),
							removeNotchWidthProperty: () => removeNotchStyle('width')
						});

					instance.init();

					return () => {
						instance.destroy();
					};
				});

				function addClass(className) {
					if (!internalClasses[className]) {
						$$invalidate(6, internalClasses[className] = true, internalClasses);
					}
				}

				function removeClass(className) {
					if (!(className in internalClasses) || internalClasses[className]) {
						$$invalidate(6, internalClasses[className] = false, internalClasses);
					}
				}

				function addNotchStyle(name, value) {
					if (notchStyles[name] != value) {
						if (value === '' || value == null) {
							delete notchStyles[name];
							$$invalidate(7, notchStyles);
						} else {
							$$invalidate(7, notchStyles[name] = value, notchStyles);
						}
					}
				}

				function removeNotchStyle(name) {
					if (name in notchStyles) {
						delete notchStyles[name];
						$$invalidate(7, notchStyles);
					}
				}

				function notch(notchWidth) {
					instance.notch(notchWidth);
				}

				function closeNotch() {
					instance.closeNotch();
				}

				function getElement() {
					return element;
				}

				function div2_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						element = $$value;
						$$invalidate(5, element);
					});
				}

				const SMUIFloatingLabel_mount_handler = event => $$invalidate(4, floatingLabel = event.detail);
				const SMUIFloatingLabel_unmount_handler = () => $$invalidate(4, floatingLabel = undefined);

				$$self.$$set = $$new_props => {
					$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
					$$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
					if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
					if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
					if ('notched' in $$new_props) $$invalidate(2, notched = $$new_props.notched);
					if ('noLabel' in $$new_props) $$invalidate(3, noLabel = $$new_props.noLabel);
					if ('$$scope' in $$new_props) $$invalidate(13, $$scope = $$new_props.$$scope);
				};

				$$self.$$.update = () => {
					if ($$self.$$.dirty & /*floatingLabel*/ 16) {
						if (floatingLabel) {
							floatingLabel.addStyle('transition-duration', '0s');
							addClass('mdc-notched-outline--upgraded');

							requestAnimationFrame(() => {
								if (floatingLabel) {
									floatingLabel.removeStyle('transition-duration');
								}
							});
						} else {
							removeClass('mdc-notched-outline--upgraded');
						}
					}
				};

				return [
					use,
					className,
					notched,
					noLabel,
					floatingLabel,
					element,
					internalClasses,
					notchStyles,
					forwardEvents,
					$$restProps,
					notch,
					closeNotch,
					getElement,
					$$scope,
					slots,
					div2_binding,
					SMUIFloatingLabel_mount_handler,
					SMUIFloatingLabel_unmount_handler
				];
			}

			class NotchedOutline extends SvelteComponent {
				constructor(options) {
					super();

					init(this, options, instance_1$1, create_fragment$5, safe_not_equal, {
						use: 0,
						class: 1,
						notched: 2,
						noLabel: 3,
						notch: 10,
						closeNotch: 11,
						getElement: 12
					});
				}

				get notch() {
					return this.$$.ctx[10];
				}

				get closeNotch() {
					return this.$$.ctx[11];
				}

				get getElement() {
					return this.$$.ctx[12];
				}
			}

			/* node_modules/@smui/common/dist/classadder/ClassAdder.svelte generated by Svelte v3.55.1 */

			function create_default_slot$1(ctx) {
				let current;
				const default_slot_template = /*#slots*/ ctx[11].default;
				const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[13], null);

				return {
					c() {
						if (default_slot) default_slot.c();
					},
					m(target, anchor) {
						if (default_slot) {
							default_slot.m(target, anchor);
						}

						current = true;
					},
					p(ctx, dirty) {
						if (default_slot) {
							if (default_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
								update_slot_base(
									default_slot,
									default_slot_template,
									ctx,
									/*$$scope*/ ctx[13],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[13])
									: get_slot_changes(default_slot_template, /*$$scope*/ ctx[13], dirty, null),
									null
								);
							}
						}
					},
					i(local) {
						if (current) return;
						transition_in(default_slot, local);
						current = true;
					},
					o(local) {
						transition_out(default_slot, local);
						current = false;
					},
					d(detaching) {
						if (default_slot) default_slot.d(detaching);
					}
				};
			}

			function create_fragment$4(ctx) {
				let switch_instance;
				let switch_instance_anchor;
				let current;

				const switch_instance_spread_levels = [
					{ tag: /*tag*/ ctx[3] },
					{
						use: [/*forwardEvents*/ ctx[8], .../*use*/ ctx[0]]
					},
					{
						class: classMap({
							[/*className*/ ctx[1]]: true,
							[/*smuiClass*/ ctx[6]]: true,
							.../*smuiClassMap*/ ctx[5]
						})
					},
					/*props*/ ctx[7],
					/*$$restProps*/ ctx[9]
				];

				var switch_value = /*component*/ ctx[2];

				function switch_props(ctx) {
					let switch_instance_props = {
						$$slots: { default: [create_default_slot$1] },
						$$scope: { ctx }
					};

					for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
						switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
					}

					return { props: switch_instance_props };
				}

				if (switch_value) {
					switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
					/*switch_instance_binding*/ ctx[12](switch_instance);
				}

				return {
					c() {
						if (switch_instance) create_component(switch_instance.$$.fragment);
						switch_instance_anchor = empty();
					},
					m(target, anchor) {
						if (switch_instance) mount_component(switch_instance, target, anchor);
						insert(target, switch_instance_anchor, anchor);
						current = true;
					},
					p(ctx, [dirty]) {
						const switch_instance_changes = (dirty & /*tag, forwardEvents, use, classMap, className, smuiClass, smuiClassMap, props, $$restProps*/ 1003)
						? get_spread_update(switch_instance_spread_levels, [
								dirty & /*tag*/ 8 && { tag: /*tag*/ ctx[3] },
								dirty & /*forwardEvents, use*/ 257 && {
									use: [/*forwardEvents*/ ctx[8], .../*use*/ ctx[0]]
								},
								dirty & /*classMap, className, smuiClass, smuiClassMap*/ 98 && {
									class: classMap({
										[/*className*/ ctx[1]]: true,
										[/*smuiClass*/ ctx[6]]: true,
										.../*smuiClassMap*/ ctx[5]
									})
								},
								dirty & /*props*/ 128 && get_spread_object(/*props*/ ctx[7]),
								dirty & /*$$restProps*/ 512 && get_spread_object(/*$$restProps*/ ctx[9])
							])
						: {};

						if (dirty & /*$$scope*/ 8192) {
							switch_instance_changes.$$scope = { dirty, ctx };
						}

						if (switch_value !== (switch_value = /*component*/ ctx[2])) {
							if (switch_instance) {
								group_outros();
								const old_component = switch_instance;

								transition_out(old_component.$$.fragment, 1, 0, () => {
									destroy_component(old_component, 1);
								});

								check_outros();
							}

							if (switch_value) {
								switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
								/*switch_instance_binding*/ ctx[12](switch_instance);
								create_component(switch_instance.$$.fragment);
								transition_in(switch_instance.$$.fragment, 1);
								mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
							} else {
								switch_instance = null;
							}
						} else if (switch_value) {
							switch_instance.$set(switch_instance_changes);
						}
					},
					i(local) {
						if (current) return;
						if (switch_instance) transition_in(switch_instance.$$.fragment, local);
						current = true;
					},
					o(local) {
						if (switch_instance) transition_out(switch_instance.$$.fragment, local);
						current = false;
					},
					d(detaching) {
						/*switch_instance_binding*/ ctx[12](null);
						if (detaching) detach(switch_instance_anchor);
						if (switch_instance) destroy_component(switch_instance, detaching);
					}
				};
			}

			const internals = {
				component: SmuiElement,
				tag: 'div',
				class: '',
				classMap: {},
				contexts: {},
				props: {}
			};

			function instance$3($$self, $$props, $$invalidate) {
				const omit_props_names = ["use","class","component","tag","getElement"];
				let $$restProps = compute_rest_props($$props, omit_props_names);
				let { $$slots: slots = {}, $$scope } = $$props;
				let { use = [] } = $$props;
				let { class: className = '' } = $$props;
				let element;
				const smuiClass = internals.class;
				const smuiClassMap = {};
				const smuiClassUnsubscribes = [];
				const contexts = internals.contexts;
				const props = internals.props;
				let { component = internals.component } = $$props;
				let { tag = component === SmuiElement ? internals.tag : undefined } = $$props;

				Object.entries(internals.classMap).forEach(([name, context]) => {
					const store = getContext(context);

					if (store && 'subscribe' in store) {
						smuiClassUnsubscribes.push(store.subscribe(value => {
							$$invalidate(5, smuiClassMap[name] = value, smuiClassMap);
						}));
					}
				});

				const forwardEvents = forwardEventsBuilder(get_current_component());

				for (let context in contexts) {
					if (contexts.hasOwnProperty(context)) {
						setContext(context, contexts[context]);
					}
				}

				onDestroy(() => {
					for (const unsubscribe of smuiClassUnsubscribes) {
						unsubscribe();
					}
				});

				function getElement() {
					return element.getElement();
				}

				function switch_instance_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						element = $$value;
						$$invalidate(4, element);
					});
				}

				$$self.$$set = $$new_props => {
					$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
					$$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
					if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
					if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
					if ('component' in $$new_props) $$invalidate(2, component = $$new_props.component);
					if ('tag' in $$new_props) $$invalidate(3, tag = $$new_props.tag);
					if ('$$scope' in $$new_props) $$invalidate(13, $$scope = $$new_props.$$scope);
				};

				return [
					use,
					className,
					component,
					tag,
					element,
					smuiClassMap,
					smuiClass,
					props,
					forwardEvents,
					$$restProps,
					getElement,
					slots,
					switch_instance_binding,
					$$scope
				];
			}

			class ClassAdder extends SvelteComponent {
				constructor(options) {
					super();

					init(this, options, instance$3, create_fragment$4, safe_not_equal, {
						use: 0,
						class: 1,
						component: 2,
						tag: 3,
						getElement: 10
					});
				}

				get getElement() {
					return this.$$.ctx[10];
				}
			}

			// @ts-ignore: Internals is exported... argh.
			const defaults = Object.assign({}, internals);
			function classAdderBuilder(props) {
			    return new Proxy(ClassAdder, {
			        construct: function (target, args) {
			            Object.assign(internals, defaults, props);
			            // @ts-ignore: Need spread arg.
			            return new target(...args);
			        },
			        get: function (target, prop) {
			            Object.assign(internals, defaults, props);
			            return target[prop];
			        },
			    });
			}

			var HelperLine = classAdderBuilder({
			    class: 'mdc-text-field-helper-line',
			    tag: 'div',
			});

			var Prefix = classAdderBuilder({
			    class: 'mdc-text-field__affix mdc-text-field__affix--prefix',
			    tag: 'span',
			});

			var Suffix = classAdderBuilder({
			    class: 'mdc-text-field__affix mdc-text-field__affix--suffix',
			    tag: 'span',
			});

			/* node_modules/@smui/textfield/dist/Input.svelte generated by Svelte v3.55.1 */

			function create_fragment$3(ctx) {
				let input;
				let input_class_value;
				let useActions_action;
				let mounted;
				let dispose;

				let input_levels = [
					{
						class: input_class_value = classMap({
							[/*className*/ ctx[1]]: true,
							'mdc-text-field__input': true
						})
					},
					{ type: /*type*/ ctx[2] },
					{ placeholder: /*placeholder*/ ctx[3] },
					/*valueProp*/ ctx[4],
					/*internalAttrs*/ ctx[6],
					/*$$restProps*/ ctx[10]
				];

				let input_data = {};

				for (let i = 0; i < input_levels.length; i += 1) {
					input_data = assign(input_data, input_levels[i]);
				}

				return {
					c() {
						input = element("input");
						set_attributes(input, input_data);
					},
					m(target, anchor) {
						insert(target, input, anchor);
						if (input.autofocus) input.focus();
						/*input_binding*/ ctx[26](input);

						if (!mounted) {
							dispose = [
								action_destroyer(useActions_action = useActions.call(null, input, /*use*/ ctx[0])),
								action_destroyer(/*forwardEvents*/ ctx[7].call(null, input)),
								listen(input, "input", /*input_handler*/ ctx[27]),
								listen(input, "change", /*changeHandler*/ ctx[9]),
								listen(input, "blur", /*blur_handler*/ ctx[24]),
								listen(input, "focus", /*focus_handler*/ ctx[25])
							];

							mounted = true;
						}
					},
					p(ctx, [dirty]) {
						set_attributes(input, input_data = get_spread_update(input_levels, [
							dirty & /*className*/ 2 && input_class_value !== (input_class_value = classMap({
								[/*className*/ ctx[1]]: true,
								'mdc-text-field__input': true
							})) && { class: input_class_value },
							dirty & /*type*/ 4 && { type: /*type*/ ctx[2] },
							dirty & /*placeholder*/ 8 && { placeholder: /*placeholder*/ ctx[3] },
							dirty & /*valueProp*/ 16 && /*valueProp*/ ctx[4],
							dirty & /*internalAttrs*/ 64 && /*internalAttrs*/ ctx[6],
							dirty & /*$$restProps*/ 1024 && /*$$restProps*/ ctx[10]
						]));

						if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
					},
					i: noop,
					o: noop,
					d(detaching) {
						if (detaching) detach(input);
						/*input_binding*/ ctx[26](null);
						mounted = false;
						run_all(dispose);
					}
				};
			}

			function toNumber(value) {
				if (value === '') {
					const nan = new Number(Number.NaN);
					nan.length = 0;
					return nan;
				}

				return +value;
			}

			function instance$2($$self, $$props, $$invalidate) {
				const omit_props_names = [
					"use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","emptyValueNull","emptyValueUndefined","getAttr","addAttr","removeAttr","focus","blur","getElement"
				];

				let $$restProps = compute_rest_props($$props, omit_props_names);
				const forwardEvents = forwardEventsBuilder(get_current_component());

				let uninitializedValue = () => {
					
				};

				function isUninitializedValue(value) {
					return value === uninitializedValue;
				}

				let { use = [] } = $$props;
				let { class: className = '' } = $$props;
				let { type = 'text' } = $$props;
				let { placeholder = ' ' } = $$props;
				let { value = uninitializedValue } = $$props;
				const valueUninitialized = isUninitializedValue(value);

				if (valueUninitialized) {
					value = '';
				}

				let { files = null } = $$props;
				let { dirty = false } = $$props;
				let { invalid = false } = $$props;
				let { updateInvalid = true } = $$props;
				let { emptyValueNull = value === null } = $$props;

				if (valueUninitialized && emptyValueNull) {
					value = null;
				}

				let { emptyValueUndefined = value === undefined } = $$props;

				if (valueUninitialized && emptyValueUndefined) {
					value = undefined;
				}

				let element;
				let internalAttrs = {};
				let valueProp = {};

				onMount(() => {
					if (updateInvalid) {
						$$invalidate(14, invalid = element.matches(':invalid'));
					}
				});

				function valueUpdater(e) {
					if (type === 'file') {
						$$invalidate(12, files = e.currentTarget.files);
						return;
					}

					if (e.currentTarget.value === '' && emptyValueNull) {
						$$invalidate(11, value = null);
						return;
					}

					if (e.currentTarget.value === '' && emptyValueUndefined) {
						$$invalidate(11, value = undefined);
						return;
					}

					switch (type) {
						case 'number':
						case 'range':
							$$invalidate(11, value = toNumber(e.currentTarget.value));
							break;
						default:
							$$invalidate(11, value = e.currentTarget.value);
							break;
					}
				}

				function changeHandler(e) {
					if (type === 'file' || type === 'range') {
						valueUpdater(e);
					}

					$$invalidate(13, dirty = true);

					if (updateInvalid) {
						$$invalidate(14, invalid = element.matches(':invalid'));
					}
				}

				function getAttr(name) {
					var _a;

					return name in internalAttrs
					? (_a = internalAttrs[name]) !== null && _a !== void 0
						? _a
						: null
					: getElement().getAttribute(name);
				}

				function addAttr(name, value) {
					if (internalAttrs[name] !== value) {
						$$invalidate(6, internalAttrs[name] = value, internalAttrs);
					}
				}

				function removeAttr(name) {
					if (!(name in internalAttrs) || internalAttrs[name] != null) {
						$$invalidate(6, internalAttrs[name] = undefined, internalAttrs);
					}
				}

				function focus() {
					getElement().focus();
				}

				function blur() {
					getElement().blur();
				}

				function getElement() {
					return element;
				}

				function blur_handler(event) {
					bubble.call(this, $$self, event);
				}

				function focus_handler(event) {
					bubble.call(this, $$self, event);
				}

				function input_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						element = $$value;
						$$invalidate(5, element);
					});
				}

				const input_handler = e => type !== 'file' && valueUpdater(e);

				$$self.$$set = $$new_props => {
					$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
					$$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
					if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
					if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
					if ('type' in $$new_props) $$invalidate(2, type = $$new_props.type);
					if ('placeholder' in $$new_props) $$invalidate(3, placeholder = $$new_props.placeholder);
					if ('value' in $$new_props) $$invalidate(11, value = $$new_props.value);
					if ('files' in $$new_props) $$invalidate(12, files = $$new_props.files);
					if ('dirty' in $$new_props) $$invalidate(13, dirty = $$new_props.dirty);
					if ('invalid' in $$new_props) $$invalidate(14, invalid = $$new_props.invalid);
					if ('updateInvalid' in $$new_props) $$invalidate(15, updateInvalid = $$new_props.updateInvalid);
					if ('emptyValueNull' in $$new_props) $$invalidate(16, emptyValueNull = $$new_props.emptyValueNull);
					if ('emptyValueUndefined' in $$new_props) $$invalidate(17, emptyValueUndefined = $$new_props.emptyValueUndefined);
				};

				$$self.$$.update = () => {
					if ($$self.$$.dirty & /*type, valueProp, value*/ 2068) {
						if (type === 'file') {
							delete valueProp.value;
							(($$invalidate(4, valueProp), $$invalidate(2, type)), $$invalidate(11, value));
						} else {
							$$invalidate(4, valueProp.value = value == null ? '' : value, valueProp);
						}
					}
				};

				return [
					use,
					className,
					type,
					placeholder,
					valueProp,
					element,
					internalAttrs,
					forwardEvents,
					valueUpdater,
					changeHandler,
					$$restProps,
					value,
					files,
					dirty,
					invalid,
					updateInvalid,
					emptyValueNull,
					emptyValueUndefined,
					getAttr,
					addAttr,
					removeAttr,
					focus,
					blur,
					getElement,
					blur_handler,
					focus_handler,
					input_binding,
					input_handler
				];
			}

			class Input extends SvelteComponent {
				constructor(options) {
					super();

					init(this, options, instance$2, create_fragment$3, safe_not_equal, {
						use: 0,
						class: 1,
						type: 2,
						placeholder: 3,
						value: 11,
						files: 12,
						dirty: 13,
						invalid: 14,
						updateInvalid: 15,
						emptyValueNull: 16,
						emptyValueUndefined: 17,
						getAttr: 18,
						addAttr: 19,
						removeAttr: 20,
						focus: 21,
						blur: 22,
						getElement: 23
					});
				}

				get getAttr() {
					return this.$$.ctx[18];
				}

				get addAttr() {
					return this.$$.ctx[19];
				}

				get removeAttr() {
					return this.$$.ctx[20];
				}

				get focus() {
					return this.$$.ctx[21];
				}

				get blur() {
					return this.$$.ctx[22];
				}

				get getElement() {
					return this.$$.ctx[23];
				}
			}

			/* node_modules/@smui/textfield/dist/Textarea.svelte generated by Svelte v3.55.1 */

			function create_fragment$2(ctx) {
				let textarea;
				let textarea_class_value;
				let textarea_style_value;
				let useActions_action;
				let mounted;
				let dispose;

				let textarea_levels = [
					{
						class: textarea_class_value = classMap({
							[/*className*/ ctx[2]]: true,
							'mdc-text-field__input': true
						})
					},
					{
						style: textarea_style_value = `${/*resizable*/ ctx[4] ? '' : 'resize: none; '}${/*style*/ ctx[3]}`
					},
					/*internalAttrs*/ ctx[6],
					/*$$restProps*/ ctx[9]
				];

				let textarea_data = {};

				for (let i = 0; i < textarea_levels.length; i += 1) {
					textarea_data = assign(textarea_data, textarea_levels[i]);
				}

				return {
					c() {
						textarea = element("textarea");
						set_attributes(textarea, textarea_data);
					},
					m(target, anchor) {
						insert(target, textarea, anchor);
						if (textarea.autofocus) textarea.focus();
						/*textarea_binding*/ ctx[21](textarea);
						set_input_value(textarea, /*value*/ ctx[0]);

						if (!mounted) {
							dispose = [
								action_destroyer(useActions_action = useActions.call(null, textarea, /*use*/ ctx[1])),
								action_destroyer(/*forwardEvents*/ ctx[7].call(null, textarea)),
								listen(textarea, "change", /*changeHandler*/ ctx[8]),
								listen(textarea, "blur", /*blur_handler*/ ctx[19]),
								listen(textarea, "focus", /*focus_handler*/ ctx[20]),
								listen(textarea, "input", /*textarea_input_handler*/ ctx[22])
							];

							mounted = true;
						}
					},
					p(ctx, [dirty]) {
						set_attributes(textarea, textarea_data = get_spread_update(textarea_levels, [
							dirty & /*className*/ 4 && textarea_class_value !== (textarea_class_value = classMap({
								[/*className*/ ctx[2]]: true,
								'mdc-text-field__input': true
							})) && { class: textarea_class_value },
							dirty & /*resizable, style*/ 24 && textarea_style_value !== (textarea_style_value = `${/*resizable*/ ctx[4] ? '' : 'resize: none; '}${/*style*/ ctx[3]}`) && { style: textarea_style_value },
							dirty & /*internalAttrs*/ 64 && /*internalAttrs*/ ctx[6],
							dirty & /*$$restProps*/ 512 && /*$$restProps*/ ctx[9]
						]));

						if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);

						if (dirty & /*value*/ 1) {
							set_input_value(textarea, /*value*/ ctx[0]);
						}
					},
					i: noop,
					o: noop,
					d(detaching) {
						if (detaching) detach(textarea);
						/*textarea_binding*/ ctx[21](null);
						mounted = false;
						run_all(dispose);
					}
				};
			}

			function instance$1($$self, $$props, $$invalidate) {
				const omit_props_names = [
					"use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","blur","getElement"
				];

				let $$restProps = compute_rest_props($$props, omit_props_names);
				const forwardEvents = forwardEventsBuilder(get_current_component());
				let { use = [] } = $$props;
				let { class: className = '' } = $$props;
				let { style = '' } = $$props;
				let { value = '' } = $$props;
				let { dirty = false } = $$props;
				let { invalid = false } = $$props;
				let { updateInvalid = true } = $$props;
				let { resizable = true } = $$props;
				let element;
				let internalAttrs = {};

				onMount(() => {
					if (updateInvalid) {
						$$invalidate(11, invalid = element.matches(':invalid'));
					}
				});

				function changeHandler() {
					$$invalidate(10, dirty = true);

					if (updateInvalid) {
						$$invalidate(11, invalid = element.matches(':invalid'));
					}
				}

				function getAttr(name) {
					var _a;

					return name in internalAttrs
					? (_a = internalAttrs[name]) !== null && _a !== void 0
						? _a
						: null
					: getElement().getAttribute(name);
				}

				function addAttr(name, value) {
					if (internalAttrs[name] !== value) {
						$$invalidate(6, internalAttrs[name] = value, internalAttrs);
					}
				}

				function removeAttr(name) {
					if (!(name in internalAttrs) || internalAttrs[name] != null) {
						$$invalidate(6, internalAttrs[name] = undefined, internalAttrs);
					}
				}

				function focus() {
					getElement().focus();
				}

				function blur() {
					getElement().blur();
				}

				function getElement() {
					return element;
				}

				function blur_handler(event) {
					bubble.call(this, $$self, event);
				}

				function focus_handler(event) {
					bubble.call(this, $$self, event);
				}

				function textarea_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						element = $$value;
						$$invalidate(5, element);
					});
				}

				function textarea_input_handler() {
					value = this.value;
					$$invalidate(0, value);
				}

				$$self.$$set = $$new_props => {
					$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
					$$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
					if ('use' in $$new_props) $$invalidate(1, use = $$new_props.use);
					if ('class' in $$new_props) $$invalidate(2, className = $$new_props.class);
					if ('style' in $$new_props) $$invalidate(3, style = $$new_props.style);
					if ('value' in $$new_props) $$invalidate(0, value = $$new_props.value);
					if ('dirty' in $$new_props) $$invalidate(10, dirty = $$new_props.dirty);
					if ('invalid' in $$new_props) $$invalidate(11, invalid = $$new_props.invalid);
					if ('updateInvalid' in $$new_props) $$invalidate(12, updateInvalid = $$new_props.updateInvalid);
					if ('resizable' in $$new_props) $$invalidate(4, resizable = $$new_props.resizable);
				};

				return [
					value,
					use,
					className,
					style,
					resizable,
					element,
					internalAttrs,
					forwardEvents,
					changeHandler,
					$$restProps,
					dirty,
					invalid,
					updateInvalid,
					getAttr,
					addAttr,
					removeAttr,
					focus,
					blur,
					getElement,
					blur_handler,
					focus_handler,
					textarea_binding,
					textarea_input_handler
				];
			}

			class Textarea extends SvelteComponent {
				constructor(options) {
					super();

					init(this, options, instance$1, create_fragment$2, safe_not_equal, {
						use: 1,
						class: 2,
						style: 3,
						value: 0,
						dirty: 10,
						invalid: 11,
						updateInvalid: 12,
						resizable: 4,
						getAttr: 13,
						addAttr: 14,
						removeAttr: 15,
						focus: 16,
						blur: 17,
						getElement: 18
					});
				}

				get getAttr() {
					return this.$$.ctx[13];
				}

				get addAttr() {
					return this.$$.ctx[14];
				}

				get removeAttr() {
					return this.$$.ctx[15];
				}

				get focus() {
					return this.$$.ctx[16];
				}

				get blur() {
					return this.$$.ctx[17];
				}

				get getElement() {
					return this.$$.ctx[18];
				}
			}

			/* node_modules/@smui/textfield/dist/Textfield.svelte generated by Svelte v3.55.1 */
			const get_helper_slot_changes = dirty => ({});
			const get_helper_slot_context = ctx => ({});
			const get_ripple_slot_changes = dirty => ({});
			const get_ripple_slot_context = ctx => ({});
			const get_trailingIcon_slot_changes_1 = dirty => ({});
			const get_trailingIcon_slot_context_1 = ctx => ({});
			const get_leadingIcon_slot_changes_1 = dirty => ({});
			const get_leadingIcon_slot_context_1 = ctx => ({});
			const get_label_slot_changes_2 = dirty => ({});
			const get_label_slot_context_2 = ctx => ({});
			const get_trailingIcon_slot_changes = dirty => ({});
			const get_trailingIcon_slot_context = ctx => ({});
			const get_suffix_slot_changes = dirty => ({});
			const get_suffix_slot_context = ctx => ({});
			const get_prefix_slot_changes = dirty => ({});
			const get_prefix_slot_context = ctx => ({});
			const get_internalCounter_slot_changes = dirty => ({});
			const get_internalCounter_slot_context = ctx => ({});
			const get_leadingIcon_slot_changes = dirty => ({});
			const get_leadingIcon_slot_context = ctx => ({});
			const get_label_slot_changes_1 = dirty => ({});
			const get_label_slot_context_1 = ctx => ({});
			const get_label_slot_changes = dirty => ({});
			const get_label_slot_context = ctx => ({});

			// (163:0) {:else}
			function create_else_block_1(ctx) {
				let div;
				let t0;
				let contextfragment0;
				let t1;
				let t2;
				let contextfragment1;
				let t3;
				let div_class_value;
				let div_style_value;
				let Ripple_action;
				let useActions_action;
				let current;
				let mounted;
				let dispose;
				const label_slot_template = /*#slots*/ ctx[51].label;
				const label_slot = create_slot(label_slot_template, ctx, /*$$scope*/ ctx[90], get_label_slot_context_2);

				contextfragment0 = new ContextFragment({
						props: {
							key: "SMUI:textfield:icon:leading",
							value: true,
							$$slots: { default: [create_default_slot_9] },
							$$scope: { ctx }
						}
					});

				const default_slot_template = /*#slots*/ ctx[51].default;
				const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[90], null);

				contextfragment1 = new ContextFragment({
						props: {
							key: "SMUI:textfield:icon:leading",
							value: false,
							$$slots: { default: [create_default_slot_8] },
							$$scope: { ctx }
						}
					});

				const ripple_slot_template = /*#slots*/ ctx[51].ripple;
				const ripple_slot = create_slot(ripple_slot_template, ctx, /*$$scope*/ ctx[90], get_ripple_slot_context);

				let div_levels = [
					{
						class: div_class_value = classMap({
							[/*className*/ ctx[9]]: true,
							'mdc-text-field': true,
							'mdc-text-field--disabled': /*disabled*/ ctx[12],
							'mdc-text-field--textarea': /*textarea*/ ctx[14],
							'mdc-text-field--filled': /*variant*/ ctx[15] === 'filled',
							'mdc-text-field--outlined': /*variant*/ ctx[15] === 'outlined',
							'smui-text-field--standard': /*variant*/ ctx[15] === 'standard' && !/*textarea*/ ctx[14],
							'mdc-text-field--no-label': /*noLabel*/ ctx[16] || !/*$$slots*/ ctx[42].label,
							'mdc-text-field--with-leading-icon': /*$$slots*/ ctx[42].leadingIcon,
							'mdc-text-field--with-trailing-icon': /*$$slots*/ ctx[42].trailingIcon,
							'mdc-text-field--invalid': /*invalid*/ ctx[1],
							.../*internalClasses*/ ctx[25]
						})
					},
					{
						style: div_style_value = Object.entries(/*internalStyles*/ ctx[26]).map(func_1).concat([/*style*/ ctx[10]]).join(' ')
					},
					exclude(/*$$restProps*/ ctx[41], ['input$', 'label$', 'ripple$', 'outline$', 'helperLine$'])
				];

				let div_data = {};

				for (let i = 0; i < div_levels.length; i += 1) {
					div_data = assign(div_data, div_levels[i]);
				}

				return {
					c() {
						div = element("div");
						if (label_slot) label_slot.c();
						t0 = space();
						create_component(contextfragment0.$$.fragment);
						t1 = space();
						if (default_slot) default_slot.c();
						t2 = space();
						create_component(contextfragment1.$$.fragment);
						t3 = space();
						if (ripple_slot) ripple_slot.c();
						set_attributes(div, div_data);
					},
					m(target, anchor) {
						insert(target, div, anchor);

						if (label_slot) {
							label_slot.m(div, null);
						}

						append(div, t0);
						mount_component(contextfragment0, div, null);
						append(div, t1);

						if (default_slot) {
							default_slot.m(div, null);
						}

						append(div, t2);
						mount_component(contextfragment1, div, null);
						append(div, t3);

						if (ripple_slot) {
							ripple_slot.m(div, null);
						}

						/*div_binding*/ ctx[80](div);
						current = true;

						if (!mounted) {
							dispose = [
								action_destroyer(Ripple_action = Ripple.call(null, div, {
									ripple: /*ripple*/ ctx[11],
									unbounded: false,
									addClass: /*addClass*/ ctx[38],
									removeClass: /*removeClass*/ ctx[39],
									addStyle: /*addStyle*/ ctx[40]
								})),
								action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[8])),
								action_destroyer(/*forwardEvents*/ ctx[34].call(null, div)),
								listen(div, "SMUITextfieldLeadingIcon:mount", /*SMUITextfieldLeadingIcon_mount_handler_1*/ ctx[81]),
								listen(div, "SMUITextfieldLeadingIcon:unmount", /*SMUITextfieldLeadingIcon_unmount_handler_1*/ ctx[82]),
								listen(div, "SMUITextfieldTrailingIcon:mount", /*SMUITextfieldTrailingIcon_mount_handler_1*/ ctx[83]),
								listen(div, "SMUITextfieldTrailingIcon:unmount", /*SMUITextfieldTrailingIcon_unmount_handler_1*/ ctx[84])
							];

							mounted = true;
						}
					},
					p(ctx, dirty) {
						if (label_slot) {
							if (label_slot.p && (!current || dirty[2] & /*$$scope*/ 268435456)) {
								update_slot_base(
									label_slot,
									label_slot_template,
									ctx,
									/*$$scope*/ ctx[90],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[90])
									: get_slot_changes(label_slot_template, /*$$scope*/ ctx[90], dirty, get_label_slot_changes_2),
									get_label_slot_context_2
								);
							}
						}

						const contextfragment0_changes = {};

						if (dirty[2] & /*$$scope*/ 268435456) {
							contextfragment0_changes.$$scope = { dirty, ctx };
						}

						contextfragment0.$set(contextfragment0_changes);

						if (default_slot) {
							if (default_slot.p && (!current || dirty[2] & /*$$scope*/ 268435456)) {
								update_slot_base(
									default_slot,
									default_slot_template,
									ctx,
									/*$$scope*/ ctx[90],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[90])
									: get_slot_changes(default_slot_template, /*$$scope*/ ctx[90], dirty, null),
									null
								);
							}
						}

						const contextfragment1_changes = {};

						if (dirty[2] & /*$$scope*/ 268435456) {
							contextfragment1_changes.$$scope = { dirty, ctx };
						}

						contextfragment1.$set(contextfragment1_changes);

						if (ripple_slot) {
							if (ripple_slot.p && (!current || dirty[2] & /*$$scope*/ 268435456)) {
								update_slot_base(
									ripple_slot,
									ripple_slot_template,
									ctx,
									/*$$scope*/ ctx[90],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[90])
									: get_slot_changes(ripple_slot_template, /*$$scope*/ ctx[90], dirty, get_ripple_slot_changes),
									get_ripple_slot_context
								);
							}
						}

						set_attributes(div, div_data = get_spread_update(div_levels, [
							(!current || dirty[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/ 33673730 | dirty[1] & /*$$slots*/ 2048 && div_class_value !== (div_class_value = classMap({
								[/*className*/ ctx[9]]: true,
								'mdc-text-field': true,
								'mdc-text-field--disabled': /*disabled*/ ctx[12],
								'mdc-text-field--textarea': /*textarea*/ ctx[14],
								'mdc-text-field--filled': /*variant*/ ctx[15] === 'filled',
								'mdc-text-field--outlined': /*variant*/ ctx[15] === 'outlined',
								'smui-text-field--standard': /*variant*/ ctx[15] === 'standard' && !/*textarea*/ ctx[14],
								'mdc-text-field--no-label': /*noLabel*/ ctx[16] || !/*$$slots*/ ctx[42].label,
								'mdc-text-field--with-leading-icon': /*$$slots*/ ctx[42].leadingIcon,
								'mdc-text-field--with-trailing-icon': /*$$slots*/ ctx[42].trailingIcon,
								'mdc-text-field--invalid': /*invalid*/ ctx[1],
								.../*internalClasses*/ ctx[25]
							}))) && { class: div_class_value },
							(!current || dirty[0] & /*internalStyles, style*/ 67109888 && div_style_value !== (div_style_value = Object.entries(/*internalStyles*/ ctx[26]).map(func_1).concat([/*style*/ ctx[10]]).join(' '))) && { style: div_style_value },
							dirty[1] & /*$$restProps*/ 1024 && exclude(/*$$restProps*/ ctx[41], ['input$', 'label$', 'ripple$', 'outline$', 'helperLine$'])
						]));

						if (Ripple_action && is_function(Ripple_action.update) && dirty[0] & /*ripple*/ 2048) Ripple_action.update.call(null, {
							ripple: /*ripple*/ ctx[11],
							unbounded: false,
							addClass: /*addClass*/ ctx[38],
							removeClass: /*removeClass*/ ctx[39],
							addStyle: /*addStyle*/ ctx[40]
						});

						if (useActions_action && is_function(useActions_action.update) && dirty[0] & /*use*/ 256) useActions_action.update.call(null, /*use*/ ctx[8]);
					},
					i(local) {
						if (current) return;
						transition_in(label_slot, local);
						transition_in(contextfragment0.$$.fragment, local);
						transition_in(default_slot, local);
						transition_in(contextfragment1.$$.fragment, local);
						transition_in(ripple_slot, local);
						current = true;
					},
					o(local) {
						transition_out(label_slot, local);
						transition_out(contextfragment0.$$.fragment, local);
						transition_out(default_slot, local);
						transition_out(contextfragment1.$$.fragment, local);
						transition_out(ripple_slot, local);
						current = false;
					},
					d(detaching) {
						if (detaching) detach(div);
						if (label_slot) label_slot.d(detaching);
						destroy_component(contextfragment0);
						if (default_slot) default_slot.d(detaching);
						destroy_component(contextfragment1);
						if (ripple_slot) ripple_slot.d(detaching);
						/*div_binding*/ ctx[80](null);
						mounted = false;
						run_all(dispose);
					}
				};
			}

			// (1:0) {#if valued}
			function create_if_block_1(ctx) {
				let label_1;
				let t0;
				let t1;
				let contextfragment0;
				let t2;
				let t3;
				let current_block_type_index;
				let if_block2;
				let t4;
				let contextfragment1;
				let t5;
				let label_1_class_value;
				let label_1_style_value;
				let Ripple_action;
				let useActions_action;
				let current;
				let mounted;
				let dispose;
				let if_block0 = !/*textarea*/ ctx[14] && /*variant*/ ctx[15] !== 'outlined' && create_if_block_8(ctx);
				let if_block1 = (/*textarea*/ ctx[14] || /*variant*/ ctx[15] === 'outlined') && create_if_block_6(ctx);

				contextfragment0 = new ContextFragment({
						props: {
							key: "SMUI:textfield:icon:leading",
							value: true,
							$$slots: { default: [create_default_slot_4] },
							$$scope: { ctx }
						}
					});

				const default_slot_template = /*#slots*/ ctx[51].default;
				const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[90], null);
				const if_block_creators = [create_if_block_3, create_else_block];
				const if_blocks = [];

				function select_block_type_1(ctx, dirty) {
					if (/*textarea*/ ctx[14] && typeof /*value*/ ctx[0] === 'string') return 0;
					return 1;
				}

				current_block_type_index = select_block_type_1(ctx);
				if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

				contextfragment1 = new ContextFragment({
						props: {
							key: "SMUI:textfield:icon:leading",
							value: false,
							$$slots: { default: [create_default_slot_1] },
							$$scope: { ctx }
						}
					});

				let if_block3 = !/*textarea*/ ctx[14] && /*variant*/ ctx[15] !== 'outlined' && /*ripple*/ ctx[11] && create_if_block_2(ctx);

				let label_1_levels = [
					{
						class: label_1_class_value = classMap({
							[/*className*/ ctx[9]]: true,
							'mdc-text-field': true,
							'mdc-text-field--disabled': /*disabled*/ ctx[12],
							'mdc-text-field--textarea': /*textarea*/ ctx[14],
							'mdc-text-field--filled': /*variant*/ ctx[15] === 'filled',
							'mdc-text-field--outlined': /*variant*/ ctx[15] === 'outlined',
							'smui-text-field--standard': /*variant*/ ctx[15] === 'standard' && !/*textarea*/ ctx[14],
							'mdc-text-field--no-label': /*noLabel*/ ctx[16] || /*label*/ ctx[17] == null && !/*$$slots*/ ctx[42].label,
							'mdc-text-field--label-floating': /*focused*/ ctx[28] || /*value*/ ctx[0] != null && /*value*/ ctx[0] !== '',
							'mdc-text-field--with-leading-icon': /*isUninitializedValue*/ ctx[35](/*withLeadingIcon*/ ctx[22])
							? /*$$slots*/ ctx[42].leadingIcon
							: /*withLeadingIcon*/ ctx[22],
							'mdc-text-field--with-trailing-icon': /*isUninitializedValue*/ ctx[35](/*withTrailingIcon*/ ctx[23])
							? /*$$slots*/ ctx[42].trailingIcon
							: /*withTrailingIcon*/ ctx[23],
							'mdc-text-field--with-internal-counter': /*textarea*/ ctx[14] && /*$$slots*/ ctx[42].internalCounter,
							'mdc-text-field--invalid': /*invalid*/ ctx[1],
							.../*internalClasses*/ ctx[25]
						})
					},
					{
						style: label_1_style_value = Object.entries(/*internalStyles*/ ctx[26]).map(func).concat([/*style*/ ctx[10]]).join(' ')
					},
					{
						for: /* suppress a11y warning, since this is wrapped */ undefined
					},
					exclude(/*$$restProps*/ ctx[41], ['input$', 'label$', 'ripple$', 'outline$', 'helperLine$'])
				];

				let label_1_data = {};

				for (let i = 0; i < label_1_levels.length; i += 1) {
					label_1_data = assign(label_1_data, label_1_levels[i]);
				}

				return {
					c() {
						label_1 = element("label");
						if (if_block0) if_block0.c();
						t0 = space();
						if (if_block1) if_block1.c();
						t1 = space();
						create_component(contextfragment0.$$.fragment);
						t2 = space();
						if (default_slot) default_slot.c();
						t3 = space();
						if_block2.c();
						t4 = space();
						create_component(contextfragment1.$$.fragment);
						t5 = space();
						if (if_block3) if_block3.c();
						set_attributes(label_1, label_1_data);
					},
					m(target, anchor) {
						insert(target, label_1, anchor);
						if (if_block0) if_block0.m(label_1, null);
						append(label_1, t0);
						if (if_block1) if_block1.m(label_1, null);
						append(label_1, t1);
						mount_component(contextfragment0, label_1, null);
						append(label_1, t2);

						if (default_slot) {
							default_slot.m(label_1, null);
						}

						append(label_1, t3);
						if_blocks[current_block_type_index].m(label_1, null);
						append(label_1, t4);
						mount_component(contextfragment1, label_1, null);
						append(label_1, t5);
						if (if_block3) if_block3.m(label_1, null);
						/*label_1_binding*/ ctx[73](label_1);
						current = true;

						if (!mounted) {
							dispose = [
								action_destroyer(Ripple_action = Ripple.call(null, label_1, {
									ripple: !/*textarea*/ ctx[14] && /*variant*/ ctx[15] === 'filled',
									unbounded: false,
									addClass: /*addClass*/ ctx[38],
									removeClass: /*removeClass*/ ctx[39],
									addStyle: /*addStyle*/ ctx[40],
									eventTarget: /*inputElement*/ ctx[33],
									activeTarget: /*inputElement*/ ctx[33],
									initPromise: /*initPromise*/ ctx[37]
								})),
								action_destroyer(useActions_action = useActions.call(null, label_1, /*use*/ ctx[8])),
								action_destroyer(/*forwardEvents*/ ctx[34].call(null, label_1)),
								listen(label_1, "SMUITextfieldLeadingIcon:mount", /*SMUITextfieldLeadingIcon_mount_handler*/ ctx[74]),
								listen(label_1, "SMUITextfieldLeadingIcon:unmount", /*SMUITextfieldLeadingIcon_unmount_handler*/ ctx[75]),
								listen(label_1, "SMUITextfieldTrailingIcon:mount", /*SMUITextfieldTrailingIcon_mount_handler*/ ctx[76]),
								listen(label_1, "SMUITextfieldTrailingIcon:unmount", /*SMUITextfieldTrailingIcon_unmount_handler*/ ctx[77]),
								listen(label_1, "SMUITextfieldCharacterCounter:mount", /*SMUITextfieldCharacterCounter_mount_handler*/ ctx[78]),
								listen(label_1, "SMUITextfieldCharacterCounter:unmount", /*SMUITextfieldCharacterCounter_unmount_handler*/ ctx[79])
							];

							mounted = true;
						}
					},
					p(ctx, dirty) {
						if (!/*textarea*/ ctx[14] && /*variant*/ ctx[15] !== 'outlined') {
							if (if_block0) {
								if_block0.p(ctx, dirty);

								if (dirty[0] & /*textarea, variant*/ 49152) {
									transition_in(if_block0, 1);
								}
							} else {
								if_block0 = create_if_block_8(ctx);
								if_block0.c();
								transition_in(if_block0, 1);
								if_block0.m(label_1, t0);
							}
						} else if (if_block0) {
							group_outros();

							transition_out(if_block0, 1, 1, () => {
								if_block0 = null;
							});

							check_outros();
						}

						if (/*textarea*/ ctx[14] || /*variant*/ ctx[15] === 'outlined') {
							if (if_block1) {
								if_block1.p(ctx, dirty);

								if (dirty[0] & /*textarea, variant*/ 49152) {
									transition_in(if_block1, 1);
								}
							} else {
								if_block1 = create_if_block_6(ctx);
								if_block1.c();
								transition_in(if_block1, 1);
								if_block1.m(label_1, t1);
							}
						} else if (if_block1) {
							group_outros();

							transition_out(if_block1, 1, 1, () => {
								if_block1 = null;
							});

							check_outros();
						}

						const contextfragment0_changes = {};

						if (dirty[2] & /*$$scope*/ 268435456) {
							contextfragment0_changes.$$scope = { dirty, ctx };
						}

						contextfragment0.$set(contextfragment0_changes);

						if (default_slot) {
							if (default_slot.p && (!current || dirty[2] & /*$$scope*/ 268435456)) {
								update_slot_base(
									default_slot,
									default_slot_template,
									ctx,
									/*$$scope*/ ctx[90],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[90])
									: get_slot_changes(default_slot_template, /*$$scope*/ ctx[90], dirty, null),
									null
								);
							}
						}

						let previous_block_index = current_block_type_index;
						current_block_type_index = select_block_type_1(ctx);

						if (current_block_type_index === previous_block_index) {
							if_blocks[current_block_type_index].p(ctx, dirty);
						} else {
							group_outros();

							transition_out(if_blocks[previous_block_index], 1, 1, () => {
								if_blocks[previous_block_index] = null;
							});

							check_outros();
							if_block2 = if_blocks[current_block_type_index];

							if (!if_block2) {
								if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
								if_block2.c();
							} else {
								if_block2.p(ctx, dirty);
							}

							transition_in(if_block2, 1);
							if_block2.m(label_1, t4);
						}

						const contextfragment1_changes = {};

						if (dirty[2] & /*$$scope*/ 268435456) {
							contextfragment1_changes.$$scope = { dirty, ctx };
						}

						contextfragment1.$set(contextfragment1_changes);

						if (!/*textarea*/ ctx[14] && /*variant*/ ctx[15] !== 'outlined' && /*ripple*/ ctx[11]) {
							if (if_block3) {
								if_block3.p(ctx, dirty);

								if (dirty[0] & /*textarea, variant, ripple*/ 51200) {
									transition_in(if_block3, 1);
								}
							} else {
								if_block3 = create_if_block_2(ctx);
								if_block3.c();
								transition_in(if_block3, 1);
								if_block3.m(label_1, null);
							}
						} else if (if_block3) {
							group_outros();

							transition_out(if_block3, 1, 1, () => {
								if_block3 = null;
							});

							check_outros();
						}

						set_attributes(label_1, label_1_data = get_spread_update(label_1_levels, [
							(!current || dirty[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/ 314823171 | dirty[1] & /*$$slots*/ 2048 && label_1_class_value !== (label_1_class_value = classMap({
								[/*className*/ ctx[9]]: true,
								'mdc-text-field': true,
								'mdc-text-field--disabled': /*disabled*/ ctx[12],
								'mdc-text-field--textarea': /*textarea*/ ctx[14],
								'mdc-text-field--filled': /*variant*/ ctx[15] === 'filled',
								'mdc-text-field--outlined': /*variant*/ ctx[15] === 'outlined',
								'smui-text-field--standard': /*variant*/ ctx[15] === 'standard' && !/*textarea*/ ctx[14],
								'mdc-text-field--no-label': /*noLabel*/ ctx[16] || /*label*/ ctx[17] == null && !/*$$slots*/ ctx[42].label,
								'mdc-text-field--label-floating': /*focused*/ ctx[28] || /*value*/ ctx[0] != null && /*value*/ ctx[0] !== '',
								'mdc-text-field--with-leading-icon': /*isUninitializedValue*/ ctx[35](/*withLeadingIcon*/ ctx[22])
								? /*$$slots*/ ctx[42].leadingIcon
								: /*withLeadingIcon*/ ctx[22],
								'mdc-text-field--with-trailing-icon': /*isUninitializedValue*/ ctx[35](/*withTrailingIcon*/ ctx[23])
								? /*$$slots*/ ctx[42].trailingIcon
								: /*withTrailingIcon*/ ctx[23],
								'mdc-text-field--with-internal-counter': /*textarea*/ ctx[14] && /*$$slots*/ ctx[42].internalCounter,
								'mdc-text-field--invalid': /*invalid*/ ctx[1],
								.../*internalClasses*/ ctx[25]
							}))) && { class: label_1_class_value },
							(!current || dirty[0] & /*internalStyles, style*/ 67109888 && label_1_style_value !== (label_1_style_value = Object.entries(/*internalStyles*/ ctx[26]).map(func).concat([/*style*/ ctx[10]]).join(' '))) && { style: label_1_style_value },
							{
								for: /* suppress a11y warning, since this is wrapped */ undefined
							},
							dirty[1] & /*$$restProps*/ 1024 && exclude(/*$$restProps*/ ctx[41], ['input$', 'label$', 'ripple$', 'outline$', 'helperLine$'])
						]));

						if (Ripple_action && is_function(Ripple_action.update) && dirty[0] & /*textarea, variant*/ 49152 | dirty[1] & /*inputElement*/ 4) Ripple_action.update.call(null, {
							ripple: !/*textarea*/ ctx[14] && /*variant*/ ctx[15] === 'filled',
							unbounded: false,
							addClass: /*addClass*/ ctx[38],
							removeClass: /*removeClass*/ ctx[39],
							addStyle: /*addStyle*/ ctx[40],
							eventTarget: /*inputElement*/ ctx[33],
							activeTarget: /*inputElement*/ ctx[33],
							initPromise: /*initPromise*/ ctx[37]
						});

						if (useActions_action && is_function(useActions_action.update) && dirty[0] & /*use*/ 256) useActions_action.update.call(null, /*use*/ ctx[8]);
					},
					i(local) {
						if (current) return;
						transition_in(if_block0);
						transition_in(if_block1);
						transition_in(contextfragment0.$$.fragment, local);
						transition_in(default_slot, local);
						transition_in(if_block2);
						transition_in(contextfragment1.$$.fragment, local);
						transition_in(if_block3);
						current = true;
					},
					o(local) {
						transition_out(if_block0);
						transition_out(if_block1);
						transition_out(contextfragment0.$$.fragment, local);
						transition_out(default_slot, local);
						transition_out(if_block2);
						transition_out(contextfragment1.$$.fragment, local);
						transition_out(if_block3);
						current = false;
					},
					d(detaching) {
						if (detaching) detach(label_1);
						if (if_block0) if_block0.d();
						if (if_block1) if_block1.d();
						destroy_component(contextfragment0);
						if (default_slot) default_slot.d(detaching);
						if_blocks[current_block_type_index].d();
						destroy_component(contextfragment1);
						if (if_block3) if_block3.d();
						/*label_1_binding*/ ctx[73](null);
						mounted = false;
						run_all(dispose);
					}
				};
			}

			// (207:4) <ContextFragment key="SMUI:textfield:icon:leading" value={true}>
			function create_default_slot_9(ctx) {
				let current;
				const leadingIcon_slot_template = /*#slots*/ ctx[51].leadingIcon;
				const leadingIcon_slot = create_slot(leadingIcon_slot_template, ctx, /*$$scope*/ ctx[90], get_leadingIcon_slot_context_1);

				return {
					c() {
						if (leadingIcon_slot) leadingIcon_slot.c();
					},
					m(target, anchor) {
						if (leadingIcon_slot) {
							leadingIcon_slot.m(target, anchor);
						}

						current = true;
					},
					p(ctx, dirty) {
						if (leadingIcon_slot) {
							if (leadingIcon_slot.p && (!current || dirty[2] & /*$$scope*/ 268435456)) {
								update_slot_base(
									leadingIcon_slot,
									leadingIcon_slot_template,
									ctx,
									/*$$scope*/ ctx[90],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[90])
									: get_slot_changes(leadingIcon_slot_template, /*$$scope*/ ctx[90], dirty, get_leadingIcon_slot_changes_1),
									get_leadingIcon_slot_context_1
								);
							}
						}
					},
					i(local) {
						if (current) return;
						transition_in(leadingIcon_slot, local);
						current = true;
					},
					o(local) {
						transition_out(leadingIcon_slot, local);
						current = false;
					},
					d(detaching) {
						if (leadingIcon_slot) leadingIcon_slot.d(detaching);
					}
				};
			}

			// (211:4) <ContextFragment key="SMUI:textfield:icon:leading" value={false}>
			function create_default_slot_8(ctx) {
				let current;
				const trailingIcon_slot_template = /*#slots*/ ctx[51].trailingIcon;
				const trailingIcon_slot = create_slot(trailingIcon_slot_template, ctx, /*$$scope*/ ctx[90], get_trailingIcon_slot_context_1);

				return {
					c() {
						if (trailingIcon_slot) trailingIcon_slot.c();
					},
					m(target, anchor) {
						if (trailingIcon_slot) {
							trailingIcon_slot.m(target, anchor);
						}

						current = true;
					},
					p(ctx, dirty) {
						if (trailingIcon_slot) {
							if (trailingIcon_slot.p && (!current || dirty[2] & /*$$scope*/ 268435456)) {
								update_slot_base(
									trailingIcon_slot,
									trailingIcon_slot_template,
									ctx,
									/*$$scope*/ ctx[90],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[90])
									: get_slot_changes(trailingIcon_slot_template, /*$$scope*/ ctx[90], dirty, get_trailingIcon_slot_changes_1),
									get_trailingIcon_slot_context_1
								);
							}
						}
					},
					i(local) {
						if (current) return;
						transition_in(trailingIcon_slot, local);
						current = true;
					},
					o(local) {
						transition_out(trailingIcon_slot, local);
						current = false;
					},
					d(detaching) {
						if (trailingIcon_slot) trailingIcon_slot.d(detaching);
					}
				};
			}

			// (62:4) {#if !textarea && variant !== 'outlined'}
			function create_if_block_8(ctx) {
				let t;
				let if_block1_anchor;
				let current;
				let if_block0 = /*variant*/ ctx[15] === 'filled' && create_if_block_10();
				let if_block1 = !/*noLabel*/ ctx[16] && (/*label*/ ctx[17] != null || /*$$slots*/ ctx[42].label) && create_if_block_9(ctx);

				return {
					c() {
						if (if_block0) if_block0.c();
						t = space();
						if (if_block1) if_block1.c();
						if_block1_anchor = empty();
					},
					m(target, anchor) {
						if (if_block0) if_block0.m(target, anchor);
						insert(target, t, anchor);
						if (if_block1) if_block1.m(target, anchor);
						insert(target, if_block1_anchor, anchor);
						current = true;
					},
					p(ctx, dirty) {
						if (/*variant*/ ctx[15] === 'filled') {
							if (if_block0) ; else {
								if_block0 = create_if_block_10();
								if_block0.c();
								if_block0.m(t.parentNode, t);
							}
						} else if (if_block0) {
							if_block0.d(1);
							if_block0 = null;
						}

						if (!/*noLabel*/ ctx[16] && (/*label*/ ctx[17] != null || /*$$slots*/ ctx[42].label)) {
							if (if_block1) {
								if_block1.p(ctx, dirty);

								if (dirty[0] & /*noLabel, label*/ 196608 | dirty[1] & /*$$slots*/ 2048) {
									transition_in(if_block1, 1);
								}
							} else {
								if_block1 = create_if_block_9(ctx);
								if_block1.c();
								transition_in(if_block1, 1);
								if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
							}
						} else if (if_block1) {
							group_outros();

							transition_out(if_block1, 1, 1, () => {
								if_block1 = null;
							});

							check_outros();
						}
					},
					i(local) {
						if (current) return;
						transition_in(if_block1);
						current = true;
					},
					o(local) {
						transition_out(if_block1);
						current = false;
					},
					d(detaching) {
						if (if_block0) if_block0.d(detaching);
						if (detaching) detach(t);
						if (if_block1) if_block1.d(detaching);
						if (detaching) detach(if_block1_anchor);
					}
				};
			}

			// (63:6) {#if variant === 'filled'}
			function create_if_block_10(ctx) {
				let span;

				return {
					c() {
						span = element("span");
						attr(span, "class", "mdc-text-field__ripple");
					},
					m(target, anchor) {
						insert(target, span, anchor);
					},
					d(detaching) {
						if (detaching) detach(span);
					}
				};
			}

			// (66:6) {#if !noLabel && (label != null || $$slots.label)}
			function create_if_block_9(ctx) {
				let floatinglabel;
				let current;

				const floatinglabel_spread_levels = [
					{
						floatAbove: /*focused*/ ctx[28] || /*value*/ ctx[0] != null && /*value*/ ctx[0] !== ''
					},
					{ required: /*required*/ ctx[13] },
					{ wrapped: true },
					prefixFilter(/*$$restProps*/ ctx[41], 'label$')
				];

				let floatinglabel_props = {
					$$slots: { default: [create_default_slot_7] },
					$$scope: { ctx }
				};

				for (let i = 0; i < floatinglabel_spread_levels.length; i += 1) {
					floatinglabel_props = assign(floatinglabel_props, floatinglabel_spread_levels[i]);
				}

				floatinglabel = new FloatingLabel({ props: floatinglabel_props });
				/*floatinglabel_binding*/ ctx[52](floatinglabel);

				return {
					c() {
						create_component(floatinglabel.$$.fragment);
					},
					m(target, anchor) {
						mount_component(floatinglabel, target, anchor);
						current = true;
					},
					p(ctx, dirty) {
						const floatinglabel_changes = (dirty[0] & /*focused, value, required*/ 268443649 | dirty[1] & /*$$restProps*/ 1024)
						? get_spread_update(floatinglabel_spread_levels, [
								dirty[0] & /*focused, value*/ 268435457 && {
									floatAbove: /*focused*/ ctx[28] || /*value*/ ctx[0] != null && /*value*/ ctx[0] !== ''
								},
								dirty[0] & /*required*/ 8192 && { required: /*required*/ ctx[13] },
								floatinglabel_spread_levels[2],
								dirty[1] & /*$$restProps*/ 1024 && get_spread_object(prefixFilter(/*$$restProps*/ ctx[41], 'label$'))
							])
						: {};

						if (dirty[0] & /*label*/ 131072 | dirty[2] & /*$$scope*/ 268435456) {
							floatinglabel_changes.$$scope = { dirty, ctx };
						}

						floatinglabel.$set(floatinglabel_changes);
					},
					i(local) {
						if (current) return;
						transition_in(floatinglabel.$$.fragment, local);
						current = true;
					},
					o(local) {
						transition_out(floatinglabel.$$.fragment, local);
						current = false;
					},
					d(detaching) {
						/*floatinglabel_binding*/ ctx[52](null);
						destroy_component(floatinglabel, detaching);
					}
				};
			}

			// (67:8) <FloatingLabel           bind:this={floatingLabel}           floatAbove={focused || (value != null && value !== '')}           {required}           wrapped           {...prefixFilter($$restProps, 'label$')}           >
			function create_default_slot_7(ctx) {
				let t_value = (/*label*/ ctx[17] == null ? '' : /*label*/ ctx[17]) + "";
				let t;
				let current;
				const label_slot_template = /*#slots*/ ctx[51].label;
				const label_slot = create_slot(label_slot_template, ctx, /*$$scope*/ ctx[90], get_label_slot_context);

				return {
					c() {
						t = text(t_value);
						if (label_slot) label_slot.c();
					},
					m(target, anchor) {
						insert(target, t, anchor);

						if (label_slot) {
							label_slot.m(target, anchor);
						}

						current = true;
					},
					p(ctx, dirty) {
						if ((!current || dirty[0] & /*label*/ 131072) && t_value !== (t_value = (/*label*/ ctx[17] == null ? '' : /*label*/ ctx[17]) + "")) set_data(t, t_value);

						if (label_slot) {
							if (label_slot.p && (!current || dirty[2] & /*$$scope*/ 268435456)) {
								update_slot_base(
									label_slot,
									label_slot_template,
									ctx,
									/*$$scope*/ ctx[90],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[90])
									: get_slot_changes(label_slot_template, /*$$scope*/ ctx[90], dirty, get_label_slot_changes),
									get_label_slot_context
								);
							}
						}
					},
					i(local) {
						if (current) return;
						transition_in(label_slot, local);
						current = true;
					},
					o(local) {
						transition_out(label_slot, local);
						current = false;
					},
					d(detaching) {
						if (detaching) detach(t);
						if (label_slot) label_slot.d(detaching);
					}
				};
			}

			// (77:4) {#if textarea || variant === 'outlined'}
			function create_if_block_6(ctx) {
				let notchedoutline;
				let current;

				const notchedoutline_spread_levels = [
					{
						noLabel: /*noLabel*/ ctx[16] || /*label*/ ctx[17] == null && !/*$$slots*/ ctx[42].label
					},
					prefixFilter(/*$$restProps*/ ctx[41], 'outline$')
				];

				let notchedoutline_props = {
					$$slots: { default: [create_default_slot_5] },
					$$scope: { ctx }
				};

				for (let i = 0; i < notchedoutline_spread_levels.length; i += 1) {
					notchedoutline_props = assign(notchedoutline_props, notchedoutline_spread_levels[i]);
				}

				notchedoutline = new NotchedOutline({ props: notchedoutline_props });
				/*notchedoutline_binding*/ ctx[54](notchedoutline);

				return {
					c() {
						create_component(notchedoutline.$$.fragment);
					},
					m(target, anchor) {
						mount_component(notchedoutline, target, anchor);
						current = true;
					},
					p(ctx, dirty) {
						const notchedoutline_changes = (dirty[0] & /*noLabel, label*/ 196608 | dirty[1] & /*$$slots, $$restProps*/ 3072)
						? get_spread_update(notchedoutline_spread_levels, [
								dirty[0] & /*noLabel, label*/ 196608 | dirty[1] & /*$$slots*/ 2048 && {
									noLabel: /*noLabel*/ ctx[16] || /*label*/ ctx[17] == null && !/*$$slots*/ ctx[42].label
								},
								dirty[1] & /*$$restProps*/ 1024 && get_spread_object(prefixFilter(/*$$restProps*/ ctx[41], 'outline$'))
							])
						: {};

						if (dirty[0] & /*focused, value, required, floatingLabel, label, noLabel*/ 268640289 | dirty[1] & /*$$restProps, $$slots*/ 3072 | dirty[2] & /*$$scope*/ 268435456) {
							notchedoutline_changes.$$scope = { dirty, ctx };
						}

						notchedoutline.$set(notchedoutline_changes);
					},
					i(local) {
						if (current) return;
						transition_in(notchedoutline.$$.fragment, local);
						current = true;
					},
					o(local) {
						transition_out(notchedoutline.$$.fragment, local);
						current = false;
					},
					d(detaching) {
						/*notchedoutline_binding*/ ctx[54](null);
						destroy_component(notchedoutline, detaching);
					}
				};
			}

			// (83:8) {#if !noLabel && (label != null || $$slots.label)}
			function create_if_block_7(ctx) {
				let floatinglabel;
				let current;

				const floatinglabel_spread_levels = [
					{
						floatAbove: /*focused*/ ctx[28] || /*value*/ ctx[0] != null && /*value*/ ctx[0] !== ''
					},
					{ required: /*required*/ ctx[13] },
					{ wrapped: true },
					prefixFilter(/*$$restProps*/ ctx[41], 'label$')
				];

				let floatinglabel_props = {
					$$slots: { default: [create_default_slot_6] },
					$$scope: { ctx }
				};

				for (let i = 0; i < floatinglabel_spread_levels.length; i += 1) {
					floatinglabel_props = assign(floatinglabel_props, floatinglabel_spread_levels[i]);
				}

				floatinglabel = new FloatingLabel({ props: floatinglabel_props });
				/*floatinglabel_binding_1*/ ctx[53](floatinglabel);

				return {
					c() {
						create_component(floatinglabel.$$.fragment);
					},
					m(target, anchor) {
						mount_component(floatinglabel, target, anchor);
						current = true;
					},
					p(ctx, dirty) {
						const floatinglabel_changes = (dirty[0] & /*focused, value, required*/ 268443649 | dirty[1] & /*$$restProps*/ 1024)
						? get_spread_update(floatinglabel_spread_levels, [
								dirty[0] & /*focused, value*/ 268435457 && {
									floatAbove: /*focused*/ ctx[28] || /*value*/ ctx[0] != null && /*value*/ ctx[0] !== ''
								},
								dirty[0] & /*required*/ 8192 && { required: /*required*/ ctx[13] },
								floatinglabel_spread_levels[2],
								dirty[1] & /*$$restProps*/ 1024 && get_spread_object(prefixFilter(/*$$restProps*/ ctx[41], 'label$'))
							])
						: {};

						if (dirty[0] & /*label*/ 131072 | dirty[2] & /*$$scope*/ 268435456) {
							floatinglabel_changes.$$scope = { dirty, ctx };
						}

						floatinglabel.$set(floatinglabel_changes);
					},
					i(local) {
						if (current) return;
						transition_in(floatinglabel.$$.fragment, local);
						current = true;
					},
					o(local) {
						transition_out(floatinglabel.$$.fragment, local);
						current = false;
					},
					d(detaching) {
						/*floatinglabel_binding_1*/ ctx[53](null);
						destroy_component(floatinglabel, detaching);
					}
				};
			}

			// (84:10) <FloatingLabel             bind:this={floatingLabel}             floatAbove={focused || (value != null && value !== '')}             {required}             wrapped             {...prefixFilter($$restProps, 'label$')}             >
			function create_default_slot_6(ctx) {
				let t_value = (/*label*/ ctx[17] == null ? '' : /*label*/ ctx[17]) + "";
				let t;
				let current;
				const label_slot_template = /*#slots*/ ctx[51].label;
				const label_slot = create_slot(label_slot_template, ctx, /*$$scope*/ ctx[90], get_label_slot_context_1);

				return {
					c() {
						t = text(t_value);
						if (label_slot) label_slot.c();
					},
					m(target, anchor) {
						insert(target, t, anchor);

						if (label_slot) {
							label_slot.m(target, anchor);
						}

						current = true;
					},
					p(ctx, dirty) {
						if ((!current || dirty[0] & /*label*/ 131072) && t_value !== (t_value = (/*label*/ ctx[17] == null ? '' : /*label*/ ctx[17]) + "")) set_data(t, t_value);

						if (label_slot) {
							if (label_slot.p && (!current || dirty[2] & /*$$scope*/ 268435456)) {
								update_slot_base(
									label_slot,
									label_slot_template,
									ctx,
									/*$$scope*/ ctx[90],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[90])
									: get_slot_changes(label_slot_template, /*$$scope*/ ctx[90], dirty, get_label_slot_changes_1),
									get_label_slot_context_1
								);
							}
						}
					},
					i(local) {
						if (current) return;
						transition_in(label_slot, local);
						current = true;
					},
					o(local) {
						transition_out(label_slot, local);
						current = false;
					},
					d(detaching) {
						if (detaching) detach(t);
						if (label_slot) label_slot.d(detaching);
					}
				};
			}

			// (78:6) <NotchedOutline         bind:this={notchedOutline}         noLabel={noLabel || (label == null && !$$slots.label)}         {...prefixFilter($$restProps, 'outline$')}       >
			function create_default_slot_5(ctx) {
				let if_block_anchor;
				let current;
				let if_block = !/*noLabel*/ ctx[16] && (/*label*/ ctx[17] != null || /*$$slots*/ ctx[42].label) && create_if_block_7(ctx);

				return {
					c() {
						if (if_block) if_block.c();
						if_block_anchor = empty();
					},
					m(target, anchor) {
						if (if_block) if_block.m(target, anchor);
						insert(target, if_block_anchor, anchor);
						current = true;
					},
					p(ctx, dirty) {
						if (!/*noLabel*/ ctx[16] && (/*label*/ ctx[17] != null || /*$$slots*/ ctx[42].label)) {
							if (if_block) {
								if_block.p(ctx, dirty);

								if (dirty[0] & /*noLabel, label*/ 196608 | dirty[1] & /*$$slots*/ 2048) {
									transition_in(if_block, 1);
								}
							} else {
								if_block = create_if_block_7(ctx);
								if_block.c();
								transition_in(if_block, 1);
								if_block.m(if_block_anchor.parentNode, if_block_anchor);
							}
						} else if (if_block) {
							group_outros();

							transition_out(if_block, 1, 1, () => {
								if_block = null;
							});

							check_outros();
						}
					},
					i(local) {
						if (current) return;
						transition_in(if_block);
						current = true;
					},
					o(local) {
						transition_out(if_block);
						current = false;
					},
					d(detaching) {
						if (if_block) if_block.d(detaching);
						if (detaching) detach(if_block_anchor);
					}
				};
			}

			// (95:4) <ContextFragment key="SMUI:textfield:icon:leading" value={true}>
			function create_default_slot_4(ctx) {
				let current;
				const leadingIcon_slot_template = /*#slots*/ ctx[51].leadingIcon;
				const leadingIcon_slot = create_slot(leadingIcon_slot_template, ctx, /*$$scope*/ ctx[90], get_leadingIcon_slot_context);

				return {
					c() {
						if (leadingIcon_slot) leadingIcon_slot.c();
					},
					m(target, anchor) {
						if (leadingIcon_slot) {
							leadingIcon_slot.m(target, anchor);
						}

						current = true;
					},
					p(ctx, dirty) {
						if (leadingIcon_slot) {
							if (leadingIcon_slot.p && (!current || dirty[2] & /*$$scope*/ 268435456)) {
								update_slot_base(
									leadingIcon_slot,
									leadingIcon_slot_template,
									ctx,
									/*$$scope*/ ctx[90],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[90])
									: get_slot_changes(leadingIcon_slot_template, /*$$scope*/ ctx[90], dirty, get_leadingIcon_slot_changes),
									get_leadingIcon_slot_context
								);
							}
						}
					},
					i(local) {
						if (current) return;
						transition_in(leadingIcon_slot, local);
						current = true;
					},
					o(local) {
						transition_out(leadingIcon_slot, local);
						current = false;
					},
					d(detaching) {
						if (leadingIcon_slot) leadingIcon_slot.d(detaching);
					}
				};
			}

			// (124:4) {:else}
			function create_else_block(ctx) {
				let t0;
				let t1;
				let input_1;
				let updating_value;
				let updating_files;
				let updating_dirty;
				let updating_invalid;
				let t2;
				let t3;
				let current;
				const prefix_slot_template = /*#slots*/ ctx[51].prefix;
				const prefix_slot = create_slot(prefix_slot_template, ctx, /*$$scope*/ ctx[90], get_prefix_slot_context);
				let if_block0 = /*prefix*/ ctx[20] != null && create_if_block_5(ctx);

				const input_1_spread_levels = [
					{ type: /*type*/ ctx[18] },
					{ disabled: /*disabled*/ ctx[12] },
					{ required: /*required*/ ctx[13] },
					{ updateInvalid: /*updateInvalid*/ ctx[19] },
					{ "aria-controls": /*helperId*/ ctx[27] },
					{ "aria-describedby": /*helperId*/ ctx[27] },
					/*noLabel*/ ctx[16] && /*label*/ ctx[17] != null
					? { placeholder: /*label*/ ctx[17] }
					: {},
					prefixFilter(/*$$restProps*/ ctx[41], 'input$')
				];

				function input_1_value_binding(value) {
					/*input_1_value_binding*/ ctx[64](value);
				}

				function input_1_files_binding(value) {
					/*input_1_files_binding*/ ctx[65](value);
				}

				function input_1_dirty_binding(value) {
					/*input_1_dirty_binding*/ ctx[66](value);
				}

				function input_1_invalid_binding(value) {
					/*input_1_invalid_binding*/ ctx[67](value);
				}

				let input_1_props = {};

				for (let i = 0; i < input_1_spread_levels.length; i += 1) {
					input_1_props = assign(input_1_props, input_1_spread_levels[i]);
				}

				if (/*value*/ ctx[0] !== void 0) {
					input_1_props.value = /*value*/ ctx[0];
				}

				if (/*files*/ ctx[3] !== void 0) {
					input_1_props.files = /*files*/ ctx[3];
				}

				if (/*dirty*/ ctx[4] !== void 0) {
					input_1_props.dirty = /*dirty*/ ctx[4];
				}

				if (/*invalid*/ ctx[1] !== void 0) {
					input_1_props.invalid = /*invalid*/ ctx[1];
				}

				input_1 = new Input({ props: input_1_props });
				/*input_1_binding*/ ctx[63](input_1);
				binding_callbacks.push(() => bind(input_1, 'value', input_1_value_binding));
				binding_callbacks.push(() => bind(input_1, 'files', input_1_files_binding));
				binding_callbacks.push(() => bind(input_1, 'dirty', input_1_dirty_binding));
				binding_callbacks.push(() => bind(input_1, 'invalid', input_1_invalid_binding));
				input_1.$on("blur", /*blur_handler_2*/ ctx[68]);
				input_1.$on("focus", /*focus_handler_2*/ ctx[69]);
				input_1.$on("blur", /*blur_handler_3*/ ctx[70]);
				input_1.$on("focus", /*focus_handler_3*/ ctx[71]);
				let if_block1 = /*suffix*/ ctx[21] != null && create_if_block_4(ctx);
				const suffix_slot_template = /*#slots*/ ctx[51].suffix;
				const suffix_slot = create_slot(suffix_slot_template, ctx, /*$$scope*/ ctx[90], get_suffix_slot_context);

				return {
					c() {
						if (prefix_slot) prefix_slot.c();
						t0 = space();
						if (if_block0) if_block0.c();
						t1 = space();
						create_component(input_1.$$.fragment);
						t2 = space();
						if (if_block1) if_block1.c();
						t3 = space();
						if (suffix_slot) suffix_slot.c();
					},
					m(target, anchor) {
						if (prefix_slot) {
							prefix_slot.m(target, anchor);
						}

						insert(target, t0, anchor);
						if (if_block0) if_block0.m(target, anchor);
						insert(target, t1, anchor);
						mount_component(input_1, target, anchor);
						insert(target, t2, anchor);
						if (if_block1) if_block1.m(target, anchor);
						insert(target, t3, anchor);

						if (suffix_slot) {
							suffix_slot.m(target, anchor);
						}

						current = true;
					},
					p(ctx, dirty) {
						if (prefix_slot) {
							if (prefix_slot.p && (!current || dirty[2] & /*$$scope*/ 268435456)) {
								update_slot_base(
									prefix_slot,
									prefix_slot_template,
									ctx,
									/*$$scope*/ ctx[90],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[90])
									: get_slot_changes(prefix_slot_template, /*$$scope*/ ctx[90], dirty, get_prefix_slot_changes),
									get_prefix_slot_context
								);
							}
						}

						if (/*prefix*/ ctx[20] != null) {
							if (if_block0) {
								if_block0.p(ctx, dirty);

								if (dirty[0] & /*prefix*/ 1048576) {
									transition_in(if_block0, 1);
								}
							} else {
								if_block0 = create_if_block_5(ctx);
								if_block0.c();
								transition_in(if_block0, 1);
								if_block0.m(t1.parentNode, t1);
							}
						} else if (if_block0) {
							group_outros();

							transition_out(if_block0, 1, 1, () => {
								if_block0 = null;
							});

							check_outros();
						}

						const input_1_changes = (dirty[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/ 135213056 | dirty[1] & /*$$restProps*/ 1024)
						? get_spread_update(input_1_spread_levels, [
								dirty[0] & /*type*/ 262144 && { type: /*type*/ ctx[18] },
								dirty[0] & /*disabled*/ 4096 && { disabled: /*disabled*/ ctx[12] },
								dirty[0] & /*required*/ 8192 && { required: /*required*/ ctx[13] },
								dirty[0] & /*updateInvalid*/ 524288 && { updateInvalid: /*updateInvalid*/ ctx[19] },
								dirty[0] & /*helperId*/ 134217728 && { "aria-controls": /*helperId*/ ctx[27] },
								dirty[0] & /*helperId*/ 134217728 && { "aria-describedby": /*helperId*/ ctx[27] },
								dirty[0] & /*noLabel, label*/ 196608 && get_spread_object(/*noLabel*/ ctx[16] && /*label*/ ctx[17] != null
								? { placeholder: /*label*/ ctx[17] }
								: {}),
								dirty[1] & /*$$restProps*/ 1024 && get_spread_object(prefixFilter(/*$$restProps*/ ctx[41], 'input$'))
							])
						: {};

						if (!updating_value && dirty[0] & /*value*/ 1) {
							updating_value = true;
							input_1_changes.value = /*value*/ ctx[0];
							add_flush_callback(() => updating_value = false);
						}

						if (!updating_files && dirty[0] & /*files*/ 8) {
							updating_files = true;
							input_1_changes.files = /*files*/ ctx[3];
							add_flush_callback(() => updating_files = false);
						}

						if (!updating_dirty && dirty[0] & /*dirty*/ 16) {
							updating_dirty = true;
							input_1_changes.dirty = /*dirty*/ ctx[4];
							add_flush_callback(() => updating_dirty = false);
						}

						if (!updating_invalid && dirty[0] & /*invalid*/ 2) {
							updating_invalid = true;
							input_1_changes.invalid = /*invalid*/ ctx[1];
							add_flush_callback(() => updating_invalid = false);
						}

						input_1.$set(input_1_changes);

						if (/*suffix*/ ctx[21] != null) {
							if (if_block1) {
								if_block1.p(ctx, dirty);

								if (dirty[0] & /*suffix*/ 2097152) {
									transition_in(if_block1, 1);
								}
							} else {
								if_block1 = create_if_block_4(ctx);
								if_block1.c();
								transition_in(if_block1, 1);
								if_block1.m(t3.parentNode, t3);
							}
						} else if (if_block1) {
							group_outros();

							transition_out(if_block1, 1, 1, () => {
								if_block1 = null;
							});

							check_outros();
						}

						if (suffix_slot) {
							if (suffix_slot.p && (!current || dirty[2] & /*$$scope*/ 268435456)) {
								update_slot_base(
									suffix_slot,
									suffix_slot_template,
									ctx,
									/*$$scope*/ ctx[90],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[90])
									: get_slot_changes(suffix_slot_template, /*$$scope*/ ctx[90], dirty, get_suffix_slot_changes),
									get_suffix_slot_context
								);
							}
						}
					},
					i(local) {
						if (current) return;
						transition_in(prefix_slot, local);
						transition_in(if_block0);
						transition_in(input_1.$$.fragment, local);
						transition_in(if_block1);
						transition_in(suffix_slot, local);
						current = true;
					},
					o(local) {
						transition_out(prefix_slot, local);
						transition_out(if_block0);
						transition_out(input_1.$$.fragment, local);
						transition_out(if_block1);
						transition_out(suffix_slot, local);
						current = false;
					},
					d(detaching) {
						if (prefix_slot) prefix_slot.d(detaching);
						if (detaching) detach(t0);
						if (if_block0) if_block0.d(detaching);
						if (detaching) detach(t1);
						/*input_1_binding*/ ctx[63](null);
						destroy_component(input_1, detaching);
						if (detaching) detach(t2);
						if (if_block1) if_block1.d(detaching);
						if (detaching) detach(t3);
						if (suffix_slot) suffix_slot.d(detaching);
					}
				};
			}

			// (99:4) {#if textarea && typeof value === 'string'}
			function create_if_block_3(ctx) {
				let span;
				let textarea_1;
				let updating_value;
				let updating_dirty;
				let updating_invalid;
				let t;
				let span_class_value;
				let current;

				const textarea_1_spread_levels = [
					{ disabled: /*disabled*/ ctx[12] },
					{ required: /*required*/ ctx[13] },
					{ updateInvalid: /*updateInvalid*/ ctx[19] },
					{ "aria-controls": /*helperId*/ ctx[27] },
					{ "aria-describedby": /*helperId*/ ctx[27] },
					prefixFilter(/*$$restProps*/ ctx[41], 'input$')
				];

				function textarea_1_value_binding(value) {
					/*textarea_1_value_binding*/ ctx[56](value);
				}

				function textarea_1_dirty_binding(value) {
					/*textarea_1_dirty_binding*/ ctx[57](value);
				}

				function textarea_1_invalid_binding(value) {
					/*textarea_1_invalid_binding*/ ctx[58](value);
				}

				let textarea_1_props = {};

				for (let i = 0; i < textarea_1_spread_levels.length; i += 1) {
					textarea_1_props = assign(textarea_1_props, textarea_1_spread_levels[i]);
				}

				if (/*value*/ ctx[0] !== void 0) {
					textarea_1_props.value = /*value*/ ctx[0];
				}

				if (/*dirty*/ ctx[4] !== void 0) {
					textarea_1_props.dirty = /*dirty*/ ctx[4];
				}

				if (/*invalid*/ ctx[1] !== void 0) {
					textarea_1_props.invalid = /*invalid*/ ctx[1];
				}

				textarea_1 = new Textarea({ props: textarea_1_props });
				/*textarea_1_binding*/ ctx[55](textarea_1);
				binding_callbacks.push(() => bind(textarea_1, 'value', textarea_1_value_binding));
				binding_callbacks.push(() => bind(textarea_1, 'dirty', textarea_1_dirty_binding));
				binding_callbacks.push(() => bind(textarea_1, 'invalid', textarea_1_invalid_binding));
				textarea_1.$on("blur", /*blur_handler*/ ctx[59]);
				textarea_1.$on("focus", /*focus_handler*/ ctx[60]);
				textarea_1.$on("blur", /*blur_handler_1*/ ctx[61]);
				textarea_1.$on("focus", /*focus_handler_1*/ ctx[62]);
				const internalCounter_slot_template = /*#slots*/ ctx[51].internalCounter;
				const internalCounter_slot = create_slot(internalCounter_slot_template, ctx, /*$$scope*/ ctx[90], get_internalCounter_slot_context);

				return {
					c() {
						span = element("span");
						create_component(textarea_1.$$.fragment);
						t = space();
						if (internalCounter_slot) internalCounter_slot.c();

						attr(span, "class", span_class_value = classMap({
							'mdc-text-field__resizer': !('input$resizable' in /*$$restProps*/ ctx[41]) || /*$$restProps*/ ctx[41].input$resizable
						}));
					},
					m(target, anchor) {
						insert(target, span, anchor);
						mount_component(textarea_1, span, null);
						append(span, t);

						if (internalCounter_slot) {
							internalCounter_slot.m(span, null);
						}

						current = true;
					},
					p(ctx, dirty) {
						const textarea_1_changes = (dirty[0] & /*disabled, required, updateInvalid, helperId*/ 134754304 | dirty[1] & /*$$restProps*/ 1024)
						? get_spread_update(textarea_1_spread_levels, [
								dirty[0] & /*disabled*/ 4096 && { disabled: /*disabled*/ ctx[12] },
								dirty[0] & /*required*/ 8192 && { required: /*required*/ ctx[13] },
								dirty[0] & /*updateInvalid*/ 524288 && { updateInvalid: /*updateInvalid*/ ctx[19] },
								dirty[0] & /*helperId*/ 134217728 && { "aria-controls": /*helperId*/ ctx[27] },
								dirty[0] & /*helperId*/ 134217728 && { "aria-describedby": /*helperId*/ ctx[27] },
								dirty[1] & /*$$restProps*/ 1024 && get_spread_object(prefixFilter(/*$$restProps*/ ctx[41], 'input$'))
							])
						: {};

						if (!updating_value && dirty[0] & /*value*/ 1) {
							updating_value = true;
							textarea_1_changes.value = /*value*/ ctx[0];
							add_flush_callback(() => updating_value = false);
						}

						if (!updating_dirty && dirty[0] & /*dirty*/ 16) {
							updating_dirty = true;
							textarea_1_changes.dirty = /*dirty*/ ctx[4];
							add_flush_callback(() => updating_dirty = false);
						}

						if (!updating_invalid && dirty[0] & /*invalid*/ 2) {
							updating_invalid = true;
							textarea_1_changes.invalid = /*invalid*/ ctx[1];
							add_flush_callback(() => updating_invalid = false);
						}

						textarea_1.$set(textarea_1_changes);

						if (internalCounter_slot) {
							if (internalCounter_slot.p && (!current || dirty[2] & /*$$scope*/ 268435456)) {
								update_slot_base(
									internalCounter_slot,
									internalCounter_slot_template,
									ctx,
									/*$$scope*/ ctx[90],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[90])
									: get_slot_changes(internalCounter_slot_template, /*$$scope*/ ctx[90], dirty, get_internalCounter_slot_changes),
									get_internalCounter_slot_context
								);
							}
						}

						if (!current || dirty[1] & /*$$restProps*/ 1024 && span_class_value !== (span_class_value = classMap({
							'mdc-text-field__resizer': !('input$resizable' in /*$$restProps*/ ctx[41]) || /*$$restProps*/ ctx[41].input$resizable
						}))) {
							attr(span, "class", span_class_value);
						}
					},
					i(local) {
						if (current) return;
						transition_in(textarea_1.$$.fragment, local);
						transition_in(internalCounter_slot, local);
						current = true;
					},
					o(local) {
						transition_out(textarea_1.$$.fragment, local);
						transition_out(internalCounter_slot, local);
						current = false;
					},
					d(detaching) {
						if (detaching) detach(span);
						/*textarea_1_binding*/ ctx[55](null);
						destroy_component(textarea_1);
						if (internalCounter_slot) internalCounter_slot.d(detaching);
					}
				};
			}

			// (126:6) {#if prefix != null}
			function create_if_block_5(ctx) {
				let prefix_1;
				let current;

				prefix_1 = new Prefix({
						props: {
							$$slots: { default: [create_default_slot_3] },
							$$scope: { ctx }
						}
					});

				return {
					c() {
						create_component(prefix_1.$$.fragment);
					},
					m(target, anchor) {
						mount_component(prefix_1, target, anchor);
						current = true;
					},
					p(ctx, dirty) {
						const prefix_1_changes = {};

						if (dirty[0] & /*prefix*/ 1048576 | dirty[2] & /*$$scope*/ 268435456) {
							prefix_1_changes.$$scope = { dirty, ctx };
						}

						prefix_1.$set(prefix_1_changes);
					},
					i(local) {
						if (current) return;
						transition_in(prefix_1.$$.fragment, local);
						current = true;
					},
					o(local) {
						transition_out(prefix_1.$$.fragment, local);
						current = false;
					},
					d(detaching) {
						destroy_component(prefix_1, detaching);
					}
				};
			}

			// (127:8) <Prefix>
			function create_default_slot_3(ctx) {
				let t;

				return {
					c() {
						t = text(/*prefix*/ ctx[20]);
					},
					m(target, anchor) {
						insert(target, t, anchor);
					},
					p(ctx, dirty) {
						if (dirty[0] & /*prefix*/ 1048576) set_data(t, /*prefix*/ ctx[20]);
					},
					d(detaching) {
						if (detaching) detach(t);
					}
				};
			}

			// (148:6) {#if suffix != null}
			function create_if_block_4(ctx) {
				let suffix_1;
				let current;

				suffix_1 = new Suffix({
						props: {
							$$slots: { default: [create_default_slot_2] },
							$$scope: { ctx }
						}
					});

				return {
					c() {
						create_component(suffix_1.$$.fragment);
					},
					m(target, anchor) {
						mount_component(suffix_1, target, anchor);
						current = true;
					},
					p(ctx, dirty) {
						const suffix_1_changes = {};

						if (dirty[0] & /*suffix*/ 2097152 | dirty[2] & /*$$scope*/ 268435456) {
							suffix_1_changes.$$scope = { dirty, ctx };
						}

						suffix_1.$set(suffix_1_changes);
					},
					i(local) {
						if (current) return;
						transition_in(suffix_1.$$.fragment, local);
						current = true;
					},
					o(local) {
						transition_out(suffix_1.$$.fragment, local);
						current = false;
					},
					d(detaching) {
						destroy_component(suffix_1, detaching);
					}
				};
			}

			// (149:8) <Suffix>
			function create_default_slot_2(ctx) {
				let t;

				return {
					c() {
						t = text(/*suffix*/ ctx[21]);
					},
					m(target, anchor) {
						insert(target, t, anchor);
					},
					p(ctx, dirty) {
						if (dirty[0] & /*suffix*/ 2097152) set_data(t, /*suffix*/ ctx[21]);
					},
					d(detaching) {
						if (detaching) detach(t);
					}
				};
			}

			// (153:4) <ContextFragment key="SMUI:textfield:icon:leading" value={false}>
			function create_default_slot_1(ctx) {
				let current;
				const trailingIcon_slot_template = /*#slots*/ ctx[51].trailingIcon;
				const trailingIcon_slot = create_slot(trailingIcon_slot_template, ctx, /*$$scope*/ ctx[90], get_trailingIcon_slot_context);

				return {
					c() {
						if (trailingIcon_slot) trailingIcon_slot.c();
					},
					m(target, anchor) {
						if (trailingIcon_slot) {
							trailingIcon_slot.m(target, anchor);
						}

						current = true;
					},
					p(ctx, dirty) {
						if (trailingIcon_slot) {
							if (trailingIcon_slot.p && (!current || dirty[2] & /*$$scope*/ 268435456)) {
								update_slot_base(
									trailingIcon_slot,
									trailingIcon_slot_template,
									ctx,
									/*$$scope*/ ctx[90],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[90])
									: get_slot_changes(trailingIcon_slot_template, /*$$scope*/ ctx[90], dirty, get_trailingIcon_slot_changes),
									get_trailingIcon_slot_context
								);
							}
						}
					},
					i(local) {
						if (current) return;
						transition_in(trailingIcon_slot, local);
						current = true;
					},
					o(local) {
						transition_out(trailingIcon_slot, local);
						current = false;
					},
					d(detaching) {
						if (trailingIcon_slot) trailingIcon_slot.d(detaching);
					}
				};
			}

			// (156:4) {#if !textarea && variant !== 'outlined' && ripple}
			function create_if_block_2(ctx) {
				let lineripple;
				let current;
				const lineripple_spread_levels = [prefixFilter(/*$$restProps*/ ctx[41], 'ripple$')];
				let lineripple_props = {};

				for (let i = 0; i < lineripple_spread_levels.length; i += 1) {
					lineripple_props = assign(lineripple_props, lineripple_spread_levels[i]);
				}

				lineripple = new LineRipple({ props: lineripple_props });
				/*lineripple_binding*/ ctx[72](lineripple);

				return {
					c() {
						create_component(lineripple.$$.fragment);
					},
					m(target, anchor) {
						mount_component(lineripple, target, anchor);
						current = true;
					},
					p(ctx, dirty) {
						const lineripple_changes = (dirty[1] & /*$$restProps*/ 1024)
						? get_spread_update(lineripple_spread_levels, [get_spread_object(prefixFilter(/*$$restProps*/ ctx[41], 'ripple$'))])
						: {};

						lineripple.$set(lineripple_changes);
					},
					i(local) {
						if (current) return;
						transition_in(lineripple.$$.fragment, local);
						current = true;
					},
					o(local) {
						transition_out(lineripple.$$.fragment, local);
						current = false;
					},
					d(detaching) {
						/*lineripple_binding*/ ctx[72](null);
						destroy_component(lineripple, detaching);
					}
				};
			}

			// (217:0) {#if $$slots.helper}
			function create_if_block(ctx) {
				let helperline;
				let current;
				const helperline_spread_levels = [prefixFilter(/*$$restProps*/ ctx[41], 'helperLine$')];

				let helperline_props = {
					$$slots: { default: [create_default_slot] },
					$$scope: { ctx }
				};

				for (let i = 0; i < helperline_spread_levels.length; i += 1) {
					helperline_props = assign(helperline_props, helperline_spread_levels[i]);
				}

				helperline = new HelperLine({ props: helperline_props });
				helperline.$on("SMUITextfieldHelperText:id", /*SMUITextfieldHelperText_id_handler*/ ctx[85]);
				helperline.$on("SMUITextfieldHelperText:mount", /*SMUITextfieldHelperText_mount_handler*/ ctx[86]);
				helperline.$on("SMUITextfieldHelperText:unmount", /*SMUITextfieldHelperText_unmount_handler*/ ctx[87]);
				helperline.$on("SMUITextfieldCharacterCounter:mount", /*SMUITextfieldCharacterCounter_mount_handler_1*/ ctx[88]);
				helperline.$on("SMUITextfieldCharacterCounter:unmount", /*SMUITextfieldCharacterCounter_unmount_handler_1*/ ctx[89]);

				return {
					c() {
						create_component(helperline.$$.fragment);
					},
					m(target, anchor) {
						mount_component(helperline, target, anchor);
						current = true;
					},
					p(ctx, dirty) {
						const helperline_changes = (dirty[1] & /*$$restProps*/ 1024)
						? get_spread_update(helperline_spread_levels, [get_spread_object(prefixFilter(/*$$restProps*/ ctx[41], 'helperLine$'))])
						: {};

						if (dirty[2] & /*$$scope*/ 268435456) {
							helperline_changes.$$scope = { dirty, ctx };
						}

						helperline.$set(helperline_changes);
					},
					i(local) {
						if (current) return;
						transition_in(helperline.$$.fragment, local);
						current = true;
					},
					o(local) {
						transition_out(helperline.$$.fragment, local);
						current = false;
					},
					d(detaching) {
						destroy_component(helperline, detaching);
					}
				};
			}

			// (218:2) <HelperLine     on:SMUITextfieldHelperText:id={(event) => (helperId = event.detail)}     on:SMUITextfieldHelperText:mount={(event) => (helperText = event.detail)}     on:SMUITextfieldHelperText:unmount={() => {       helperId = undefined;       helperText = undefined;     }}     on:SMUITextfieldCharacterCounter:mount={(event) =>       (characterCounter = event.detail)}     on:SMUITextfieldCharacterCounter:unmount={() =>       (characterCounter = undefined)}     {...prefixFilter($$restProps, 'helperLine$')}     >
			function create_default_slot(ctx) {
				let current;
				const helper_slot_template = /*#slots*/ ctx[51].helper;
				const helper_slot = create_slot(helper_slot_template, ctx, /*$$scope*/ ctx[90], get_helper_slot_context);

				return {
					c() {
						if (helper_slot) helper_slot.c();
					},
					m(target, anchor) {
						if (helper_slot) {
							helper_slot.m(target, anchor);
						}

						current = true;
					},
					p(ctx, dirty) {
						if (helper_slot) {
							if (helper_slot.p && (!current || dirty[2] & /*$$scope*/ 268435456)) {
								update_slot_base(
									helper_slot,
									helper_slot_template,
									ctx,
									/*$$scope*/ ctx[90],
									!current
									? get_all_dirty_from_scope(/*$$scope*/ ctx[90])
									: get_slot_changes(helper_slot_template, /*$$scope*/ ctx[90], dirty, get_helper_slot_changes),
									get_helper_slot_context
								);
							}
						}
					},
					i(local) {
						if (current) return;
						transition_in(helper_slot, local);
						current = true;
					},
					o(local) {
						transition_out(helper_slot, local);
						current = false;
					},
					d(detaching) {
						if (helper_slot) helper_slot.d(detaching);
					}
				};
			}

			function create_fragment$1(ctx) {
				let current_block_type_index;
				let if_block0;
				let t;
				let if_block1_anchor;
				let current;
				const if_block_creators = [create_if_block_1, create_else_block_1];
				const if_blocks = [];

				function select_block_type(ctx, dirty) {
					if (/*valued*/ ctx[36]) return 0;
					return 1;
				}

				current_block_type_index = select_block_type(ctx);
				if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
				let if_block1 = /*$$slots*/ ctx[42].helper && create_if_block(ctx);

				return {
					c() {
						if_block0.c();
						t = space();
						if (if_block1) if_block1.c();
						if_block1_anchor = empty();
					},
					m(target, anchor) {
						if_blocks[current_block_type_index].m(target, anchor);
						insert(target, t, anchor);
						if (if_block1) if_block1.m(target, anchor);
						insert(target, if_block1_anchor, anchor);
						current = true;
					},
					p(ctx, dirty) {
						if_block0.p(ctx, dirty);

						if (/*$$slots*/ ctx[42].helper) {
							if (if_block1) {
								if_block1.p(ctx, dirty);

								if (dirty[1] & /*$$slots*/ 2048) {
									transition_in(if_block1, 1);
								}
							} else {
								if_block1 = create_if_block(ctx);
								if_block1.c();
								transition_in(if_block1, 1);
								if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
							}
						} else if (if_block1) {
							group_outros();

							transition_out(if_block1, 1, 1, () => {
								if_block1 = null;
							});

							check_outros();
						}
					},
					i(local) {
						if (current) return;
						transition_in(if_block0);
						transition_in(if_block1);
						current = true;
					},
					o(local) {
						transition_out(if_block0);
						transition_out(if_block1);
						current = false;
					},
					d(detaching) {
						if_blocks[current_block_type_index].d(detaching);
						if (detaching) detach(t);
						if (if_block1) if_block1.d(detaching);
						if (detaching) detach(if_block1_anchor);
					}
				};
			}

			const func = ([name, value]) => `${name}: ${value};`;
			const func_1 = ([name, value]) => `${name}: ${value};`;

			function instance_1($$self, $$props, $$invalidate) {
				let inputElement;

				const omit_props_names = [
					"use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","blur","layout","getElement"
				];

				let $$restProps = compute_rest_props($$props, omit_props_names);
				let { $$slots: slots = {}, $$scope } = $$props;
				const $$slots = compute_slots(slots);
				const { applyPassive } = events;
				const forwardEvents = forwardEventsBuilder(get_current_component());

				let uninitializedValue = () => {
					
				};

				function isUninitializedValue(value) {
					return value === uninitializedValue;
				}

				let { use = [] } = $$props;
				let { class: className = '' } = $$props;
				let { style = '' } = $$props;
				let { ripple = true } = $$props;
				let { disabled = false } = $$props;
				let { required = false } = $$props;
				let { textarea = false } = $$props;
				let { variant = textarea ? 'outlined' : 'standard' } = $$props;
				let { noLabel = false } = $$props;
				let { label = undefined } = $$props;
				let { type = 'text' } = $$props;

				let { value = $$restProps.input$emptyValueUndefined
				? undefined
				: uninitializedValue } = $$props;

				let { files = uninitializedValue } = $$props;
				const valued = !isUninitializedValue(value) || !isUninitializedValue(files);

				if (isUninitializedValue(value)) {
					value = undefined;
				}

				if (isUninitializedValue(files)) {
					files = null;
				}

				let { invalid = uninitializedValue } = $$props;
				let { updateInvalid = isUninitializedValue(invalid) } = $$props;

				if (isUninitializedValue(invalid)) {
					invalid = false;
				}

				let { dirty = false } = $$props;
				let { prefix = undefined } = $$props;
				let { suffix = undefined } = $$props;
				let { validateOnValueChange = updateInvalid } = $$props;
				let { useNativeValidation = updateInvalid } = $$props;
				let { withLeadingIcon = uninitializedValue } = $$props;
				let { withTrailingIcon = uninitializedValue } = $$props;
				let { input = undefined } = $$props;
				let { floatingLabel = undefined } = $$props;
				let { lineRipple = undefined } = $$props;
				let { notchedOutline = undefined } = $$props;
				let element;
				let instance;
				let internalClasses = {};
				let internalStyles = {};
				let helperId = undefined;
				let focused = false;
				let addLayoutListener = getContext('SMUI:addLayoutListener');
				let removeLayoutListener;
				let initPromiseResolve;
				let initPromise = new Promise(resolve => initPromiseResolve = resolve);

				// These are instances, not accessors.
				let leadingIcon = undefined;

				let trailingIcon = undefined;
				let helperText = undefined;
				let characterCounter = undefined;

				// React to changes of value from outside component.
				let previousValue = value;

				if (addLayoutListener) {
					removeLayoutListener = addLayoutListener(layout);
				}

				onMount(() => {
					$$invalidate(49, instance = new MDCTextFieldFoundation({
							// getRootAdapterMethods_
							addClass,
							removeClass,
							hasClass,
							registerTextFieldInteractionHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
							deregisterTextFieldInteractionHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler),
							registerValidationAttributeChangeHandler: handler => {
								const getAttributesList = mutationsList => {
									return mutationsList.map(mutation => mutation.attributeName).filter(attributeName => attributeName);
								};

								const observer = new MutationObserver(mutationsList => {
										if (useNativeValidation) {
											handler(getAttributesList(mutationsList));
										}
									});

								const config = { attributes: true };

								if (input) {
									observer.observe(input.getElement(), config);
								}

								return observer;
							},
							deregisterValidationAttributeChangeHandler: observer => {
								observer.disconnect();
							},
							// getInputAdapterMethods_
							getNativeInput: () => {
								var _a;

								return (_a = input === null || input === void 0
								? void 0
								: input.getElement()) !== null && _a !== void 0
								? _a
								: null;
							},
							setInputAttr: (name, value) => {
								input === null || input === void 0
								? void 0
								: input.addAttr(name, value);
							},
							removeInputAttr: name => {
								input === null || input === void 0
								? void 0
								: input.removeAttr(name);
							},
							isFocused: () => document.activeElement === (input === null || input === void 0
							? void 0
							: input.getElement()),
							registerInputInteractionHandler: (evtType, handler) => {
								input === null || input === void 0
								? void 0
								: input.getElement().addEventListener(evtType, handler, applyPassive());
							},
							deregisterInputInteractionHandler: (evtType, handler) => {
								input === null || input === void 0
								? void 0
								: input.getElement().removeEventListener(evtType, handler, applyPassive());
							},
							// getLabelAdapterMethods_
							floatLabel: shouldFloat => floatingLabel && floatingLabel.float(shouldFloat),
							getLabelWidth: () => floatingLabel ? floatingLabel.getWidth() : 0,
							hasLabel: () => !!floatingLabel,
							shakeLabel: shouldShake => floatingLabel && floatingLabel.shake(shouldShake),
							setLabelRequired: isRequired => floatingLabel && floatingLabel.setRequired(isRequired),
							// getLineRippleAdapterMethods_
							activateLineRipple: () => lineRipple && lineRipple.activate(),
							deactivateLineRipple: () => lineRipple && lineRipple.deactivate(),
							setLineRippleTransformOrigin: normalizedX => lineRipple && lineRipple.setRippleCenter(normalizedX),
							// getOutlineAdapterMethods_
							closeOutline: () => notchedOutline && notchedOutline.closeNotch(),
							hasOutline: () => !!notchedOutline,
							notchOutline: labelWidth => notchedOutline && notchedOutline.notch(labelWidth)
						},
					{
							get helperText() {
								return helperText;
							},
							get characterCounter() {
								return characterCounter;
							},
							get leadingIcon() {
								return leadingIcon;
							},
							get trailingIcon() {
								return trailingIcon;
							}
						}));

					if (valued) {
						if (input == null) {
							throw new Error('SMUI Textfield initialized without Input component.');
						}

						instance.init();
					} else {
						tick().then(() => {
							if (input == null) {
								throw new Error('SMUI Textfield initialized without Input component.');
							}

							instance.init();
						});
					}

					initPromiseResolve();

					return () => {
						instance.destroy();
					};
				});

				onDestroy(() => {
					if (removeLayoutListener) {
						removeLayoutListener();
					}
				});

				function hasClass(className) {
					var _a;

					return className in internalClasses
					? (_a = internalClasses[className]) !== null && _a !== void 0
						? _a
						: null
					: getElement().classList.contains(className);
				}

				function addClass(className) {
					if (!internalClasses[className]) {
						$$invalidate(25, internalClasses[className] = true, internalClasses);
					}
				}

				function removeClass(className) {
					if (!(className in internalClasses) || internalClasses[className]) {
						$$invalidate(25, internalClasses[className] = false, internalClasses);
					}
				}

				function addStyle(name, value) {
					if (internalStyles[name] != value) {
						if (value === '' || value == null) {
							delete internalStyles[name];
							$$invalidate(26, internalStyles);
						} else {
							$$invalidate(26, internalStyles[name] = value, internalStyles);
						}
					}
				}

				function focus() {
					input === null || input === void 0
					? void 0
					: input.focus();
				}

				function blur() {
					input === null || input === void 0
					? void 0
					: input.blur();
				}

				function layout() {
					if (instance) {
						const openNotch = instance.shouldFloat;
						instance.notchOutline(openNotch);
					}
				}

				function getElement() {
					return element;
				}

				function floatinglabel_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						floatingLabel = $$value;
						$$invalidate(5, floatingLabel);
					});
				}

				function floatinglabel_binding_1($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						floatingLabel = $$value;
						$$invalidate(5, floatingLabel);
					});
				}

				function notchedoutline_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						notchedOutline = $$value;
						$$invalidate(7, notchedOutline);
					});
				}

				function textarea_1_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						input = $$value;
						$$invalidate(2, input);
					});
				}

				function textarea_1_value_binding(value$1) {
					value = value$1;
					$$invalidate(0, value);
				}

				function textarea_1_dirty_binding(value) {
					dirty = value;
					$$invalidate(4, dirty);
				}

				function textarea_1_invalid_binding(value) {
					invalid = value;
					(($$invalidate(1, invalid), $$invalidate(49, instance)), $$invalidate(19, updateInvalid));
				}

				const blur_handler = () => $$invalidate(28, focused = false);
				const focus_handler = () => $$invalidate(28, focused = true);
				const blur_handler_1 = event => dispatch(element, 'blur', event);
				const focus_handler_1 = event => dispatch(element, 'focus', event);

				function input_1_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						input = $$value;
						$$invalidate(2, input);
					});
				}

				function input_1_value_binding(value$1) {
					value = value$1;
					$$invalidate(0, value);
				}

				function input_1_files_binding(value) {
					files = value;
					$$invalidate(3, files);
				}

				function input_1_dirty_binding(value) {
					dirty = value;
					$$invalidate(4, dirty);
				}

				function input_1_invalid_binding(value) {
					invalid = value;
					(($$invalidate(1, invalid), $$invalidate(49, instance)), $$invalidate(19, updateInvalid));
				}

				const blur_handler_2 = () => $$invalidate(28, focused = false);
				const focus_handler_2 = () => $$invalidate(28, focused = true);
				const blur_handler_3 = event => dispatch(element, 'blur', event);
				const focus_handler_3 = event => dispatch(element, 'focus', event);

				function lineripple_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						lineRipple = $$value;
						$$invalidate(6, lineRipple);
					});
				}

				function label_1_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						element = $$value;
						$$invalidate(24, element);
					});
				}

				const SMUITextfieldLeadingIcon_mount_handler = event => $$invalidate(29, leadingIcon = event.detail);
				const SMUITextfieldLeadingIcon_unmount_handler = () => $$invalidate(29, leadingIcon = undefined);
				const SMUITextfieldTrailingIcon_mount_handler = event => $$invalidate(30, trailingIcon = event.detail);
				const SMUITextfieldTrailingIcon_unmount_handler = () => $$invalidate(30, trailingIcon = undefined);
				const SMUITextfieldCharacterCounter_mount_handler = event => $$invalidate(32, characterCounter = event.detail);
				const SMUITextfieldCharacterCounter_unmount_handler = () => $$invalidate(32, characterCounter = undefined);

				function div_binding($$value) {
					binding_callbacks[$$value ? 'unshift' : 'push'](() => {
						element = $$value;
						$$invalidate(24, element);
					});
				}

				const SMUITextfieldLeadingIcon_mount_handler_1 = event => $$invalidate(29, leadingIcon = event.detail);
				const SMUITextfieldLeadingIcon_unmount_handler_1 = () => $$invalidate(29, leadingIcon = undefined);
				const SMUITextfieldTrailingIcon_mount_handler_1 = event => $$invalidate(30, trailingIcon = event.detail);
				const SMUITextfieldTrailingIcon_unmount_handler_1 = () => $$invalidate(30, trailingIcon = undefined);
				const SMUITextfieldHelperText_id_handler = event => $$invalidate(27, helperId = event.detail);
				const SMUITextfieldHelperText_mount_handler = event => $$invalidate(31, helperText = event.detail);

				const SMUITextfieldHelperText_unmount_handler = () => {
					$$invalidate(27, helperId = undefined);
					$$invalidate(31, helperText = undefined);
				};

				const SMUITextfieldCharacterCounter_mount_handler_1 = event => $$invalidate(32, characterCounter = event.detail);
				const SMUITextfieldCharacterCounter_unmount_handler_1 = () => $$invalidate(32, characterCounter = undefined);

				$$self.$$set = $$new_props => {
					$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
					$$invalidate(41, $$restProps = compute_rest_props($$props, omit_props_names));
					if ('use' in $$new_props) $$invalidate(8, use = $$new_props.use);
					if ('class' in $$new_props) $$invalidate(9, className = $$new_props.class);
					if ('style' in $$new_props) $$invalidate(10, style = $$new_props.style);
					if ('ripple' in $$new_props) $$invalidate(11, ripple = $$new_props.ripple);
					if ('disabled' in $$new_props) $$invalidate(12, disabled = $$new_props.disabled);
					if ('required' in $$new_props) $$invalidate(13, required = $$new_props.required);
					if ('textarea' in $$new_props) $$invalidate(14, textarea = $$new_props.textarea);
					if ('variant' in $$new_props) $$invalidate(15, variant = $$new_props.variant);
					if ('noLabel' in $$new_props) $$invalidate(16, noLabel = $$new_props.noLabel);
					if ('label' in $$new_props) $$invalidate(17, label = $$new_props.label);
					if ('type' in $$new_props) $$invalidate(18, type = $$new_props.type);
					if ('value' in $$new_props) $$invalidate(0, value = $$new_props.value);
					if ('files' in $$new_props) $$invalidate(3, files = $$new_props.files);
					if ('invalid' in $$new_props) $$invalidate(1, invalid = $$new_props.invalid);
					if ('updateInvalid' in $$new_props) $$invalidate(19, updateInvalid = $$new_props.updateInvalid);
					if ('dirty' in $$new_props) $$invalidate(4, dirty = $$new_props.dirty);
					if ('prefix' in $$new_props) $$invalidate(20, prefix = $$new_props.prefix);
					if ('suffix' in $$new_props) $$invalidate(21, suffix = $$new_props.suffix);
					if ('validateOnValueChange' in $$new_props) $$invalidate(43, validateOnValueChange = $$new_props.validateOnValueChange);
					if ('useNativeValidation' in $$new_props) $$invalidate(44, useNativeValidation = $$new_props.useNativeValidation);
					if ('withLeadingIcon' in $$new_props) $$invalidate(22, withLeadingIcon = $$new_props.withLeadingIcon);
					if ('withTrailingIcon' in $$new_props) $$invalidate(23, withTrailingIcon = $$new_props.withTrailingIcon);
					if ('input' in $$new_props) $$invalidate(2, input = $$new_props.input);
					if ('floatingLabel' in $$new_props) $$invalidate(5, floatingLabel = $$new_props.floatingLabel);
					if ('lineRipple' in $$new_props) $$invalidate(6, lineRipple = $$new_props.lineRipple);
					if ('notchedOutline' in $$new_props) $$invalidate(7, notchedOutline = $$new_props.notchedOutline);
					if ('$$scope' in $$new_props) $$invalidate(90, $$scope = $$new_props.$$scope);
				};

				$$self.$$.update = () => {
					if ($$self.$$.dirty[0] & /*input*/ 4) {
						$$invalidate(33, inputElement = input && input.getElement());
					}

					if ($$self.$$.dirty[0] & /*invalid, updateInvalid*/ 524290 | $$self.$$.dirty[1] & /*instance*/ 262144) {
						if (instance && instance.isValid() !== !invalid) {
							if (updateInvalid) {
								$$invalidate(1, invalid = !instance.isValid());
							} else {
								instance.setValid(!invalid);
							}
						}
					}

					if ($$self.$$.dirty[1] & /*instance, validateOnValueChange*/ 266240) {
						if (instance && instance.getValidateOnValueChange() !== validateOnValueChange) {
							instance.setValidateOnValueChange(isUninitializedValue(validateOnValueChange)
							? false
							: validateOnValueChange);
						}
					}

					if ($$self.$$.dirty[1] & /*instance, useNativeValidation*/ 270336) {
						if (instance) {
							instance.setUseNativeValidation(isUninitializedValue(useNativeValidation)
							? true
							: useNativeValidation);
						}
					}

					if ($$self.$$.dirty[0] & /*disabled*/ 4096 | $$self.$$.dirty[1] & /*instance*/ 262144) {
						if (instance) {
							instance.setDisabled(disabled);
						}
					}

					if ($$self.$$.dirty[0] & /*value*/ 1 | $$self.$$.dirty[1] & /*instance, previousValue*/ 786432) {
						if (instance && valued && previousValue !== value) {
							$$invalidate(50, previousValue = value);

							// Check the data is flowing down.
							const stringValue = `${value}`;

							if (instance.getValue() !== stringValue) {
								instance.setValue(stringValue);
							}
						}
					}
				};

				return [
					value,
					invalid,
					input,
					files,
					dirty,
					floatingLabel,
					lineRipple,
					notchedOutline,
					use,
					className,
					style,
					ripple,
					disabled,
					required,
					textarea,
					variant,
					noLabel,
					label,
					type,
					updateInvalid,
					prefix,
					suffix,
					withLeadingIcon,
					withTrailingIcon,
					element,
					internalClasses,
					internalStyles,
					helperId,
					focused,
					leadingIcon,
					trailingIcon,
					helperText,
					characterCounter,
					inputElement,
					forwardEvents,
					isUninitializedValue,
					valued,
					initPromise,
					addClass,
					removeClass,
					addStyle,
					$$restProps,
					$$slots,
					validateOnValueChange,
					useNativeValidation,
					focus,
					blur,
					layout,
					getElement,
					instance,
					previousValue,
					slots,
					floatinglabel_binding,
					floatinglabel_binding_1,
					notchedoutline_binding,
					textarea_1_binding,
					textarea_1_value_binding,
					textarea_1_dirty_binding,
					textarea_1_invalid_binding,
					blur_handler,
					focus_handler,
					blur_handler_1,
					focus_handler_1,
					input_1_binding,
					input_1_value_binding,
					input_1_files_binding,
					input_1_dirty_binding,
					input_1_invalid_binding,
					blur_handler_2,
					focus_handler_2,
					blur_handler_3,
					focus_handler_3,
					lineripple_binding,
					label_1_binding,
					SMUITextfieldLeadingIcon_mount_handler,
					SMUITextfieldLeadingIcon_unmount_handler,
					SMUITextfieldTrailingIcon_mount_handler,
					SMUITextfieldTrailingIcon_unmount_handler,
					SMUITextfieldCharacterCounter_mount_handler,
					SMUITextfieldCharacterCounter_unmount_handler,
					div_binding,
					SMUITextfieldLeadingIcon_mount_handler_1,
					SMUITextfieldLeadingIcon_unmount_handler_1,
					SMUITextfieldTrailingIcon_mount_handler_1,
					SMUITextfieldTrailingIcon_unmount_handler_1,
					SMUITextfieldHelperText_id_handler,
					SMUITextfieldHelperText_mount_handler,
					SMUITextfieldHelperText_unmount_handler,
					SMUITextfieldCharacterCounter_mount_handler_1,
					SMUITextfieldCharacterCounter_unmount_handler_1,
					$$scope
				];
			}

			class Textfield extends SvelteComponent {
				constructor(options) {
					super();

					init(
						this,
						options,
						instance_1,
						create_fragment$1,
						safe_not_equal,
						{
							use: 8,
							class: 9,
							style: 10,
							ripple: 11,
							disabled: 12,
							required: 13,
							textarea: 14,
							variant: 15,
							noLabel: 16,
							label: 17,
							type: 18,
							value: 0,
							files: 3,
							invalid: 1,
							updateInvalid: 19,
							dirty: 4,
							prefix: 20,
							suffix: 21,
							validateOnValueChange: 43,
							useNativeValidation: 44,
							withLeadingIcon: 22,
							withTrailingIcon: 23,
							input: 2,
							floatingLabel: 5,
							lineRipple: 6,
							notchedOutline: 7,
							focus: 45,
							blur: 46,
							layout: 47,
							getElement: 48
						},
						null,
						[-1, -1, -1, -1]
					);
				}

				get focus() {
					return this.$$.ctx[45];
				}

				get blur() {
					return this.$$.ctx[46];
				}

				get layout() {
					return this.$$.ctx[47];
				}

				get getElement() {
					return this.$$.ctx[48];
				}
			}

			/* src/App.svelte generated by Svelte v3.55.1 */

			function add_css(target) {
				append_styles(target, "svelte-1y6qp69", "form.svelte-1y6qp69.svelte-1y6qp69{display:flex;flex-direction:column;gap:20px}form.svelte-1y6qp69 button.svelte-1y6qp69{background-color:#FDB930;padding:12px;border-radius:4px}");
			}

			function create_fragment(ctx) {
				let section;
				let form;
				let textfield0;
				let updating_value;
				let t0;
				let textfield1;
				let updating_value_1;
				let t1;
				let textfield2;
				let updating_value_2;
				let t2;
				let textfield3;
				let updating_value_3;
				let t3;
				let button;
				let current;
				let mounted;
				let dispose;

				function textfield0_value_binding(value) {
					/*textfield0_value_binding*/ ctx[5](value);
				}

				let textfield0_props = {
					variant: "outlined",
					label: "Nome",
					required: true
				};

				if (/*name*/ ctx[0] !== void 0) {
					textfield0_props.value = /*name*/ ctx[0];
				}

				textfield0 = new Textfield({ props: textfield0_props });
				binding_callbacks.push(() => bind(textfield0, 'value', textfield0_value_binding));

				function textfield1_value_binding(value) {
					/*textfield1_value_binding*/ ctx[6](value);
				}

				let textfield1_props = {
					variant: "outlined",
					label: "E-mail",
					required: true
				};

				if (/*email*/ ctx[1] !== void 0) {
					textfield1_props.value = /*email*/ ctx[1];
				}

				textfield1 = new Textfield({ props: textfield1_props });
				binding_callbacks.push(() => bind(textfield1, 'value', textfield1_value_binding));

				function textfield2_value_binding(value) {
					/*textfield2_value_binding*/ ctx[7](value);
				}

				let textfield2_props = {
					variant: "outlined",
					label: "Telefone",
					required: true
				};

				if (/*telefone*/ ctx[2] !== void 0) {
					textfield2_props.value = /*telefone*/ ctx[2];
				}

				textfield2 = new Textfield({ props: textfield2_props });
				binding_callbacks.push(() => bind(textfield2, 'value', textfield2_value_binding));

				function textfield3_value_binding(value) {
					/*textfield3_value_binding*/ ctx[8](value);
				}

				let textfield3_props = {
					variant: "outlined",
					label: "Cnpj",
					required: true
				};

				if (/*cnpj*/ ctx[3] !== void 0) {
					textfield3_props.value = /*cnpj*/ ctx[3];
				}

				textfield3 = new Textfield({ props: textfield3_props });
				binding_callbacks.push(() => bind(textfield3, 'value', textfield3_value_binding));

				return {
					c() {
						section = element("section");
						form = element("form");
						create_component(textfield0.$$.fragment);
						t0 = space();
						create_component(textfield1.$$.fragment);
						t1 = space();
						create_component(textfield2.$$.fragment);
						t2 = space();
						create_component(textfield3.$$.fragment);
						t3 = space();
						button = element("button");
						button.textContent = "Salvar";
						attr(button, "type", "submit");
						attr(button, "class", "svelte-1y6qp69");
						attr(form, "class", "svelte-1y6qp69");
					},
					m(target, anchor) {
						insert(target, section, anchor);
						append(section, form);
						mount_component(textfield0, form, null);
						append(form, t0);
						mount_component(textfield1, form, null);
						append(form, t1);
						mount_component(textfield2, form, null);
						append(form, t2);
						mount_component(textfield3, form, null);
						append(form, t3);
						append(form, button);
						current = true;

						if (!mounted) {
							dispose = listen(form, "submit", prevent_default(/*handleSubmit*/ ctx[4]));
							mounted = true;
						}
					},
					p(ctx, [dirty]) {
						const textfield0_changes = {};

						if (!updating_value && dirty & /*name*/ 1) {
							updating_value = true;
							textfield0_changes.value = /*name*/ ctx[0];
							add_flush_callback(() => updating_value = false);
						}

						textfield0.$set(textfield0_changes);
						const textfield1_changes = {};

						if (!updating_value_1 && dirty & /*email*/ 2) {
							updating_value_1 = true;
							textfield1_changes.value = /*email*/ ctx[1];
							add_flush_callback(() => updating_value_1 = false);
						}

						textfield1.$set(textfield1_changes);
						const textfield2_changes = {};

						if (!updating_value_2 && dirty & /*telefone*/ 4) {
							updating_value_2 = true;
							textfield2_changes.value = /*telefone*/ ctx[2];
							add_flush_callback(() => updating_value_2 = false);
						}

						textfield2.$set(textfield2_changes);
						const textfield3_changes = {};

						if (!updating_value_3 && dirty & /*cnpj*/ 8) {
							updating_value_3 = true;
							textfield3_changes.value = /*cnpj*/ ctx[3];
							add_flush_callback(() => updating_value_3 = false);
						}

						textfield3.$set(textfield3_changes);
					},
					i(local) {
						if (current) return;
						transition_in(textfield0.$$.fragment, local);
						transition_in(textfield1.$$.fragment, local);
						transition_in(textfield2.$$.fragment, local);
						transition_in(textfield3.$$.fragment, local);
						current = true;
					},
					o(local) {
						transition_out(textfield0.$$.fragment, local);
						transition_out(textfield1.$$.fragment, local);
						transition_out(textfield2.$$.fragment, local);
						transition_out(textfield3.$$.fragment, local);
						current = false;
					},
					d(detaching) {
						if (detaching) detach(section);
						destroy_component(textfield0);
						destroy_component(textfield1);
						destroy_component(textfield2);
						destroy_component(textfield3);
						mounted = false;
						dispose();
					}
				};
			}

			function instance($$self, $$props, $$invalidate) {
				let $onboarding;
				component_subscribe($$self, onboarding, $$value => $$invalidate(9, $onboarding = $$value));

				let name = $onboarding.name || '',
					email = $onboarding.email || '',
					telefone = $onboarding.telefone || '',
					cnpj = $onboarding.cnpj || '';

				const handleSubmit = () => {
					onboarding.set({ name, email, telefone, cnpj });
					isPendingOnboarding.set(false);
					alert('Cadastro alterado com sucesso!');
				};

				function textfield0_value_binding(value) {
					name = value;
					$$invalidate(0, name);
				}

				function textfield1_value_binding(value) {
					email = value;
					$$invalidate(1, email);
				}

				function textfield2_value_binding(value) {
					telefone = value;
					$$invalidate(2, telefone);
				}

				function textfield3_value_binding(value) {
					cnpj = value;
					$$invalidate(3, cnpj);
				}

				return [
					name,
					email,
					telefone,
					cnpj,
					handleSubmit,
					textfield0_value_binding,
					textfield1_value_binding,
					textfield2_value_binding,
					textfield3_value_binding
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

			const statesOnboarding = exports('statesOnboarding', async () => {
			  return await fetch("https://api.tidias.com.br/generals/states-brazil").then(
			    (data) => data.json()
			  );
			});

			const { bootstrap, mount, unmount } = svelteLifecycles; exports({ bootstrap: bootstrap, mount: mount, unmount: unmount });

		})
	};
}));
//# sourceMappingURL=elo-onboarding.js.map
