import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-ILNGXT6B.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-KMWLYIWL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/blog.$slug.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\blog.$slug.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\blog.$slug.tsx"
  );
  import.meta.hot.lastModified = "1751579764427.3796";
}
function BlogPost() {
  _s();
  const {
    post
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/blog", className: "inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        "Back to Blog"
      ] }, void 0, true, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: post.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full", children: tag }, tag, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 54,
          columnNumber: 37
        }, this)) }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl sm:text-5xl font-bold text-gray-900 leading-tight", children: post.title }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 text-gray-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: post.author.avatar, alt: post.author.name, className: "w-10 h-10 rounded-full mr-3" }, void 0, false, {
              fileName: "app/routes/blog.$slug.tsx",
              lineNumber: 65,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: post.author.name }, void 0, false, {
              fileName: "app/routes/blog.$slug.tsx",
              lineNumber: 66,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2022" }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", { className: "text-gray-500", children: post.publishDate }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2022" }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: [
            post.readTime,
            " min read"
          ] }, void 0, true, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
      post.featuredImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: post.featuredImage, alt: post.title, className: "w-full h-96 object-cover rounded-xl shadow-lg mb-12" }, void 0, false, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 79,
        columnNumber: 32
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "prose prose-lg prose-blue max-w-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: {
        __html: post.content
      } }, void 0, false, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-16 p-8 bg-gray-100 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: post.author.avatar, alt: post.author.name, className: "w-16 h-16 rounded-full" }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: post.author.name }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: post.author.bio }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 95,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: post.author.twitter, className: "text-blue-600 hover:text-blue-800", children: "Twitter" }, void 0, false, {
              fileName: "app/routes/blog.$slug.tsx",
              lineNumber: 99,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: post.author.linkedin, className: "text-blue-600 hover:text-blue-800", children: "LinkedIn" }, void 0, false, {
              fileName: "app/routes/blog.$slug.tsx",
              lineNumber: 102,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog.$slug.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(BlogPost, "XKKHaSRpeA70aITHb2nxIAbZ33A=", false, function() {
  return [useLoaderData];
});
_c = BlogPost;
var _c;
$RefreshReg$(_c, "BlogPost");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BlogPost as default
};
//# sourceMappingURL=/build/routes/blog.$slug-72NEXS5W.js.map
