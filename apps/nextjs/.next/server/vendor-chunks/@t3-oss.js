"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@t3-oss";
exports.ids = ["vendor-chunks/@t3-oss"];
exports.modules = {

/***/ "(rsc)/../../node_modules/@t3-oss/env-nextjs/dist/index.mjs":
/*!************************************************************!*\
  !*** ../../node_modules/@t3-oss/env-nextjs/dist/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEnv: () => (/* binding */ P)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/../../node_modules/zod/lib/index.mjs\");\n\nfunction T(e) {\n    let r = e.runtimeEnvStrict ?? e.runtimeEnv ?? process.env;\n    if (e.skipValidation) return r;\n    let i = typeof e.client == \"object\" ? e.client : {}, o = typeof e.server == \"object\" ? e.server : {}, s = typeof e.shared == \"object\" ? e.shared : {}, d = zod__WEBPACK_IMPORTED_MODULE_0__.z.object(i), f = zod__WEBPACK_IMPORTED_MODULE_0__.z.object(o), a = zod__WEBPACK_IMPORTED_MODULE_0__.z.object(s), v = e.isServer ?? \"undefined\" > \"u\", y = d.merge(a), p = f.merge(a).merge(d), l = v ? p.safeParse(r) : y.safeParse(r), m = e.onValidationError ?? ((t)=>{\n        throw console.error(\"❌ Invalid environment variables:\", t.flatten().fieldErrors), new Error(\"Invalid environment variables\");\n    }), u = e.onInvalidAccess ?? ((t)=>{\n        throw new Error(\"❌ Attempted to access a server-side environment variable on the client\");\n    });\n    return l.success === !1 ? m(l.error) : new Proxy(l.data, {\n        get (t, n) {\n            if (typeof n == \"string\") return !v && e.clientPrefix && !n.startsWith(e.clientPrefix) && a.shape[n] === void 0 ? u(n) : t[n];\n        }\n    });\n}\nvar x = \"NEXT_PUBLIC_\";\nfunction P(e) {\n    let r = typeof e.client == \"object\" ? e.client : {}, i = typeof e.server == \"object\" ? e.server : {}, o = typeof e.shared == \"object\" ? e.shared : {}, s = e.runtimeEnv ? e.runtimeEnv : {\n        ...process.env,\n        ...e.experimental__runtimeEnv\n    };\n    return T({\n        ...e,\n        shared: o,\n        client: r,\n        server: i,\n        clientPrefix: x,\n        runtimeEnv: s\n    });\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL0B0My1vc3MvZW52LW5leHRqcy9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QjtBQUFBLFNBQVNFLEVBQUVDLENBQUM7SUFBRSxJQUFJQyxJQUFFRCxFQUFFRSxnQkFBZ0IsSUFBRUYsRUFBRUcsVUFBVSxJQUFFQyxRQUFRQyxHQUFHO0lBQUMsSUFBR0wsRUFBRU0sY0FBYyxFQUFDLE9BQU9MO0lBQUUsSUFBSU0sSUFBRSxPQUFPUCxFQUFFUSxNQUFNLElBQUUsV0FBU1IsRUFBRVEsTUFBTSxHQUFDLENBQUMsR0FBRUMsSUFBRSxPQUFPVCxFQUFFVSxNQUFNLElBQUUsV0FBU1YsRUFBRVUsTUFBTSxHQUFDLENBQUMsR0FBRUMsSUFBRSxPQUFPWCxFQUFFWSxNQUFNLElBQUUsV0FBU1osRUFBRVksTUFBTSxHQUFDLENBQUMsR0FBRUMsSUFBRWYsa0NBQUNBLENBQUNnQixNQUFNLENBQUNQLElBQUdRLElBQUVqQixrQ0FBQ0EsQ0FBQ2dCLE1BQU0sQ0FBQ0wsSUFBR08sSUFBRWxCLGtDQUFDQSxDQUFDZ0IsTUFBTSxDQUFDSCxJQUFHTSxJQUFFakIsRUFBRWtCLFFBQVEsSUFBRSxjQUFjLEtBQUlDLElBQUVOLEVBQUVPLEtBQUssQ0FBQ0osSUFBR0ssSUFBRU4sRUFBRUssS0FBSyxDQUFDSixHQUFHSSxLQUFLLENBQUNQLElBQUdTLElBQUVMLElBQUVJLEVBQUVFLFNBQVMsQ0FBQ3RCLEtBQUdrQixFQUFFSSxTQUFTLENBQUN0QixJQUFHdUIsSUFBRXhCLEVBQUV5QixpQkFBaUIsSUFBR0MsQ0FBQUEsQ0FBQUE7UUFBSSxNQUFNQyxRQUFRQyxLQUFLLENBQUMsb0NBQXdDRixFQUFFRyxPQUFPLEdBQUdDLFdBQVcsR0FBRSxJQUFJQyxNQUFNO0lBQWdDLElBQUdDLElBQUVoQyxFQUFFaUMsZUFBZSxJQUFHUCxDQUFBQSxDQUFBQTtRQUFJLE1BQU0sSUFBSUssTUFBTTtJQUE4RTtJQUFHLE9BQU9ULEVBQUVZLE9BQU8sS0FBRyxDQUFDLElBQUVWLEVBQUVGLEVBQUVNLEtBQUssSUFBRSxJQUFJTyxNQUFNYixFQUFFYyxJQUFJLEVBQUM7UUFBQ0MsS0FBSVgsQ0FBQyxFQUFDWSxDQUFDO1lBQUUsSUFBRyxPQUFPQSxLQUFHLFVBQVMsT0FBTSxDQUFDckIsS0FBR2pCLEVBQUV1QyxZQUFZLElBQUUsQ0FBQ0QsRUFBRUUsVUFBVSxDQUFDeEMsRUFBRXVDLFlBQVksS0FBR3ZCLEVBQUV5QixLQUFLLENBQUNILEVBQUUsS0FBRyxLQUFLLElBQUVOLEVBQUVNLEtBQUdaLENBQUMsQ0FBQ1ksRUFBRTtRQUFBO0lBQUM7QUFBRTtBQUFDLElBQUlJLElBQUU7QUFBZSxTQUFTQyxFQUFFM0MsQ0FBQztJQUFFLElBQUlDLElBQUUsT0FBT0QsRUFBRVEsTUFBTSxJQUFFLFdBQVNSLEVBQUVRLE1BQU0sR0FBQyxDQUFDLEdBQUVELElBQUUsT0FBT1AsRUFBRVUsTUFBTSxJQUFFLFdBQVNWLEVBQUVVLE1BQU0sR0FBQyxDQUFDLEdBQUVELElBQUUsT0FBT1QsRUFBRVksTUFBTSxJQUFFLFdBQVNaLEVBQUVZLE1BQU0sR0FBQyxDQUFDLEdBQUVELElBQUVYLEVBQUVHLFVBQVUsR0FBQ0gsRUFBRUcsVUFBVSxHQUFDO1FBQUMsR0FBR0MsUUFBUUMsR0FBRztRQUFDLEdBQUdMLEVBQUU0Qyx3QkFBd0I7SUFBQTtJQUFFLE9BQU83QyxFQUFFO1FBQUMsR0FBR0MsQ0FBQztRQUFDWSxRQUFPSDtRQUFFRCxRQUFPUDtRQUFFUyxRQUFPSDtRQUFFZ0MsY0FBYUc7UUFBRXZDLFlBQVdRO0lBQUM7QUFBRTtBQUF3QixDQUNocEMsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGFjbWUvbmV4dGpzLy4uLy4uL25vZGVfbW9kdWxlcy9AdDMtb3NzL2Vudi1uZXh0anMvZGlzdC9pbmRleC5tanM/NWUwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7eiBhcyBjfWZyb21cInpvZFwiO2Z1bmN0aW9uIFQoZSl7bGV0IHI9ZS5ydW50aW1lRW52U3RyaWN0Pz9lLnJ1bnRpbWVFbnY/P3Byb2Nlc3MuZW52O2lmKGUuc2tpcFZhbGlkYXRpb24pcmV0dXJuIHI7bGV0IGk9dHlwZW9mIGUuY2xpZW50PT1cIm9iamVjdFwiP2UuY2xpZW50Ont9LG89dHlwZW9mIGUuc2VydmVyPT1cIm9iamVjdFwiP2Uuc2VydmVyOnt9LHM9dHlwZW9mIGUuc2hhcmVkPT1cIm9iamVjdFwiP2Uuc2hhcmVkOnt9LGQ9Yy5vYmplY3QoaSksZj1jLm9iamVjdChvKSxhPWMub2JqZWN0KHMpLHY9ZS5pc1NlcnZlcj8/dHlwZW9mIHdpbmRvdz5cInVcIix5PWQubWVyZ2UoYSkscD1mLm1lcmdlKGEpLm1lcmdlKGQpLGw9dj9wLnNhZmVQYXJzZShyKTp5LnNhZmVQYXJzZShyKSxtPWUub25WYWxpZGF0aW9uRXJyb3I/Pyh0PT57dGhyb3cgY29uc29sZS5lcnJvcihcIlxcdTI3NEMgSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZXM6XCIsdC5mbGF0dGVuKCkuZmllbGRFcnJvcnMpLG5ldyBFcnJvcihcIkludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGVzXCIpfSksdT1lLm9uSW52YWxpZEFjY2Vzcz8/KHQ9Pnt0aHJvdyBuZXcgRXJyb3IoXCJcXHUyNzRDIEF0dGVtcHRlZCB0byBhY2Nlc3MgYSBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBvbiB0aGUgY2xpZW50XCIpfSk7cmV0dXJuIGwuc3VjY2Vzcz09PSExP20obC5lcnJvcik6bmV3IFByb3h5KGwuZGF0YSx7Z2V0KHQsbil7aWYodHlwZW9mIG49PVwic3RyaW5nXCIpcmV0dXJuIXYmJmUuY2xpZW50UHJlZml4JiYhbi5zdGFydHNXaXRoKGUuY2xpZW50UHJlZml4KSYmYS5zaGFwZVtuXT09PXZvaWQgMD91KG4pOnRbbl19fSl9dmFyIHg9XCJORVhUX1BVQkxJQ19cIjtmdW5jdGlvbiBQKGUpe2xldCByPXR5cGVvZiBlLmNsaWVudD09XCJvYmplY3RcIj9lLmNsaWVudDp7fSxpPXR5cGVvZiBlLnNlcnZlcj09XCJvYmplY3RcIj9lLnNlcnZlcjp7fSxvPXR5cGVvZiBlLnNoYXJlZD09XCJvYmplY3RcIj9lLnNoYXJlZDp7fSxzPWUucnVudGltZUVudj9lLnJ1bnRpbWVFbnY6ey4uLnByb2Nlc3MuZW52LC4uLmUuZXhwZXJpbWVudGFsX19ydW50aW1lRW52fTtyZXR1cm4gVCh7Li4uZSxzaGFyZWQ6byxjbGllbnQ6cixzZXJ2ZXI6aSxjbGllbnRQcmVmaXg6eCxydW50aW1lRW52OnN9KX1leHBvcnR7UCBhcyBjcmVhdGVFbnZ9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6WyJ6IiwiYyIsIlQiLCJlIiwiciIsInJ1bnRpbWVFbnZTdHJpY3QiLCJydW50aW1lRW52IiwicHJvY2VzcyIsImVudiIsInNraXBWYWxpZGF0aW9uIiwiaSIsImNsaWVudCIsIm8iLCJzZXJ2ZXIiLCJzIiwic2hhcmVkIiwiZCIsIm9iamVjdCIsImYiLCJhIiwidiIsImlzU2VydmVyIiwieSIsIm1lcmdlIiwicCIsImwiLCJzYWZlUGFyc2UiLCJtIiwib25WYWxpZGF0aW9uRXJyb3IiLCJ0IiwiY29uc29sZSIsImVycm9yIiwiZmxhdHRlbiIsImZpZWxkRXJyb3JzIiwiRXJyb3IiLCJ1Iiwib25JbnZhbGlkQWNjZXNzIiwic3VjY2VzcyIsIlByb3h5IiwiZGF0YSIsImdldCIsIm4iLCJjbGllbnRQcmVmaXgiLCJzdGFydHNXaXRoIiwic2hhcGUiLCJ4IiwiUCIsImV4cGVyaW1lbnRhbF9fcnVudGltZUVudiIsImNyZWF0ZUVudiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/@t3-oss/env-nextjs/dist/index.mjs\n");

/***/ })

};
;