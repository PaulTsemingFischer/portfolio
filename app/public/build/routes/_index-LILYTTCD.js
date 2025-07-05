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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/utils/db.server
var require_db = __commonJS({
  "empty-module:~/utils/db.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1751724892763.578";
}
var meta = () => {
  return [{
    title: "Portfolio Manager"
  }, {
    name: "description",
    content: "Manage your professional portfolio"
  }];
};
function Index() {
  _s();
  const {
    projects,
    experiences,
    skills
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center py-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Portfolio Manager" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 92,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex space-x-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/projects", className: "text-gray-500 hover:text-gray-900 transition-colors", children: "Projects" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/experience", className: "text-gray-500 hover:text-gray-900 transition-colors", children: "Experience" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/skills", className: "text-gray-500 hover:text-gray-900 transition-colors", children: "Skills" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 101,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 90,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-5xl font-bold text-gray-900 mb-6", children: "Showcase Your Professional Journey" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-600 mb-8 max-w-2xl mx-auto", children: "A modern portfolio management system built with Remix, Prisma, PostgreSQL, and Docker. Track your projects, experience, and skills in one place." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/projects/new", className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors", children: "Add Project" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", className: "bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-lg border border-gray-300 transition-colors", children: "View Dashboard" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-bold text-gray-900", children: "Recent Projects" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/projects", className: "text-blue-600 hover:text-blue-800 font-medium", children: "View All \u2192" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 133,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-lg font-semibold text-gray-900", children: project.title }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 142,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 text-xs font-medium rounded-full ${project.status === "COMPLETED" ? "bg-green-100 text-green-800" : project.status === "IN_PROGRESS" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}`, children: project.status.replace("_", " ") }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 143,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 141,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4 line-clamp-3", children: project.description }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 147,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2 mb-4", children: [
          project.technologies.slice(0, 3).map((tech) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded", children: tech.technology.name }, tech.technology.id, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 149,
            columnNumber: 65
          }, this)),
          project.technologies.length > 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded", children: [
            "+",
            project.technologies.length - 3,
            " more"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 152,
            columnNumber: 55
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 148,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/projects/${project.id}`, className: "text-blue-600 hover:text-blue-800 font-medium text-sm", children: "View Details" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 157,
            columnNumber: 19
          }, this),
          project.demoUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: project.demoUrl, target: "_blank", rel: "noopener noreferrer", className: "text-green-600 hover:text-green-800 font-medium text-sm", children: "Live Demo" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 160,
            columnNumber: 39
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 156,
          columnNumber: 17
        }, this)
      ] }, project.id, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 140,
        columnNumber: 38
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 139,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 132,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-bold text-gray-900", children: "Experience" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/experience", className: "text-blue-600 hover:text-blue-800 font-medium", children: "View All \u2192" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: experiences.map((exp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-6 shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-lg font-semibold text-gray-900", children: exp.position }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 182,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-blue-600 font-medium", children: exp.company }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 183,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 text-sm", children: [
              new Date(exp.startDate).toLocaleDateString(),
              " -",
              exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Present"
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 184,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 181,
            columnNumber: 19
          }, this),
          exp.current && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-green-100 text-green-800 px-2 py-1 text-xs font-medium rounded-full", children: "Current" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 189,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 180,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-3", children: exp.description }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 193,
          columnNumber: 17
        }, this)
      ] }, exp.id, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 179,
        columnNumber: 37
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 171,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-bold text-gray-900", children: "Skills" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 203,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/skills", className: "text-blue-600 hover:text-blue-800 font-medium", children: "Manage Skills \u2192" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 202,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4", children: skills.map((skill) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 rounded-lg p-4 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900 mb-2", children: skill.technology.name }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 210,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center space-x-1", children: [...Array(4)].map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-2 h-2 rounded-full ${i < ["BEGINNER", "INTERMEDIATE", "ADVANCED", "EXPERT"].indexOf(skill.proficiency) + 1 ? "bg-blue-500" : "bg-gray-300"}` }, i, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 212,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 211,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 mt-1 capitalize", children: skill.proficiency.toLowerCase() }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 214,
          columnNumber: 17
        }, this)
      ] }, skill.id, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 209,
        columnNumber: 34
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 208,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 201,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "bg-gray-900 text-white py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl font-semibold mb-4", children: "Built with Modern Technologies" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 225,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center space-x-8 text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Remix" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 227,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2022" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 228,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Prisma" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2022" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 230,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "PostgreSQL" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 231,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2022" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 232,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Docker" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 233,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2022" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 234,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Tailwind CSS" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 226,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-gray-400", children: "A full-stack portfolio management system demonstrating modern web development practices." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 237,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 224,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 86,
    columnNumber: 10
  }, this);
}
_s(Index, "+QhPJYqLBWL3cWoVxclcUFpbMhk=", false, function() {
  return [useLoaderData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-LILYTTCD.js.map
