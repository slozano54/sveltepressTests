export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["sveltepress.svg","sveltepress@3x.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b67006a5.js","app":"_app/immutable/entry/app.4ba3657e.js","imports":["_app/immutable/entry/start.b67006a5.js","_app/immutable/chunks/scheduler.b364ac0e.js","_app/immutable/chunks/singletons.2c1a6812.js","_app/immutable/entry/app.4ba3657e.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.b364ac0e.js","_app/immutable/chunks/index.1fcbdd57.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
