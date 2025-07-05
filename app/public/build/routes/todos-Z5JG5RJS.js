import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useLoaderData,
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

// app/routes/todos.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\todos.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\todos.tsx"
  );
  import.meta.hot.lastModified = "1751608813188.484";
}
function Todos() {
  _s();
  const {
    todos
  } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Todo List" }, void 0, false, {
      fileName: "app/routes/todos.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "create" }, void 0, false, {
        fileName: "app/routes/todos.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", placeholder: "Add a todo...", required: true }, void 0, false, {
        fileName: "app/routes/todos.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, children: isSubmitting ? "Adding..." : "Add Todo" }, void 0, false, {
        fileName: "app/routes/todos.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/todos.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: todos.map((todo) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
        display: "inline"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "toggle" }, void 0, false, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: todo.id }, void 0, false, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: todo.completed ? "\u2713" : "\u25CB" }, void 0, false, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/todos.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: todo.completed ? "completed" : "", children: todo.title }, void 0, false, {
        fileName: "app/routes/todos.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
        display: "inline"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "delete" }, void 0, false, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 92,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: todo.id }, void 0, false, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 93,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Delete" }, void 0, false, {
          fileName: "app/routes/todos.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/todos.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this)
    ] }, todo.id, true, {
      fileName: "app/routes/todos.tsx",
      lineNumber: 74,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/routes/todos.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/todos.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(Todos, "PaUPvSpeLPes4wNMeQQ5AMZwcEc=", false, function() {
  return [useLoaderData, useNavigation];
});
_c = Todos;
var _c;
$RefreshReg$(_c, "Todos");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Todos as default
};
//# sourceMappingURL=/build/routes/todos-Z5JG5RJS.js.map
