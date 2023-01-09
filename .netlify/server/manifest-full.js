export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","img/ImmersiveReading.gif","img/animated-audio.gif","img/book-cover-h.png","img/kjv-qr-1.png","img/phone-sshot.png","img/play-button.png","img/reading-h.png","img/reading-v.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif"},
	_: {
		entry: {"file":"_app/immutable/start-d1935db0.js","imports":["_app/immutable/start-d1935db0.js","_app/immutable/chunks/index-92993a8b.js","_app/immutable/chunks/singletons-9888da1c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
