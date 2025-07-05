import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useActionData,
  useNavigation
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

// app/routes/contact.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\contact.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\contact.tsx"
  );
  import.meta.hot.lastModified = "1751613047855.22";
}
var meta = () => {
  return [{
    title: "Contact - Paul Fischer"
  }, {
    name: "description",
    content: "Get in touch with me for opportunities and collaborations."
  }];
};
function Contact() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4", children: "Get In Touch" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "I'm always interested in hearing about new opportunities and interesting projects. Feel free to reach out!" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6", children: "Send a Message" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded mb-6", children: actionData.message }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 71,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2", children: "Name" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 77,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "name", name: "name", required: true, className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 80,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2", children: "Email" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", name: "email", required: true, className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 87,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2", children: "Message" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 91,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "message", name: "message", rows: 5, required: true, className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 94,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 90,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-colors", children: isSubmitting ? "Sending..." : "Send Message" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 97,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6", children: "Contact Information" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-blue-600 text-xl", children: "\u{1F4E7}" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 109,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium text-gray-900 dark:text-gray-100", children: "Email" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 111,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 dark:text-gray-300", children: "paultsemingfischer@gmail.com" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 112,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 110,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 108,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-blue-600 text-xl", children: "\u{1F4CD}" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 117,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium text-gray-900 dark:text-gray-100", children: "Location" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 119,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 dark:text-gray-300", children: "Clear Water Bay, Hong Kong" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 120,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 118,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 116,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-blue-600 text-xl", children: "\u{1F4BC}" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 125,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium text-gray-900 dark:text-gray-100", children: "LinkedIn" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 127,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://linkedin.com/in/paul-fischer-a68890278", className: "text-blue-600 hover:underline", target: "_blank", rel: "noopener noreferrer", children: "linkedin.com/in/paul-fischer-a68890278" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 128,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 126,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-blue-600 text-xl", children: "\u{1F419}" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 135,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium text-gray-900 dark:text-gray-100", children: "GitHub" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 137,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://github.com/PaulTsemingFischer", className: "text-blue-600 hover:underline", target: "_blank", rel: "noopener noreferrer", children: "github.com/PaulTsemingFischer" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 138,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 136,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 134,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_s(Contact, "e3rMULficn7ldQYYArv00m53mwQ=", false, function() {
  return [useActionData, useNavigation];
});
_c = Contact;
var _c;
$RefreshReg$(_c, "Contact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Contact as default,
  meta
};
//# sourceMappingURL=/build/routes/contact-KH2DKDMD.js.map
