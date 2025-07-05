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

// app/components/ProjectCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ProjectCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ProjectCard.tsx"
  );
  import.meta.hot.lastModified = "1751612198032.5352";
}
function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image, alt: title, className: "w-full h-48 object-cover" }, void 0, false, {
      fileName: "app/components/ProjectCard.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: title }, void 0, false, {
        fileName: "app/components/ProjectCard.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: description }, void 0, false, {
        fileName: "app/components/ProjectCard.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2 mb-4", children: technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm", children: tech }, tech, false, {
        fileName: "app/components/ProjectCard.tsx",
        lineNumber: 36,
        columnNumber: 37
      }, this)) }, void 0, false, {
        fileName: "app/components/ProjectCard.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3", children: [
        liveUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: liveUrl, target: "_blank", rel: "noopener noreferrer", className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm", children: "Live Demo" }, void 0, false, {
          fileName: "app/components/ProjectCard.tsx",
          lineNumber: 42,
          columnNumber: 23
        }, this),
        githubUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: githubUrl, target: "_blank", rel: "noopener noreferrer", className: "border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 transition-colors text-sm", children: "GitHub" }, void 0, false, {
          fileName: "app/components/ProjectCard.tsx",
          lineNumber: 45,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ProjectCard.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProjectCard.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProjectCard.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = ProjectCard;
var _c;
$RefreshReg$(_c, "ProjectCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/projects.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\projects.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\projects.tsx"
  );
  import.meta.hot.lastModified = "1751722188165.817";
}
var meta = () => {
  return [{
    title: "Projects - Paul Fischer"
  }, {
    name: "description",
    content: "Check out my latest projects and work."
  }];
};
function Projects() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4", children: "My Projects" }, void 0, false, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Here are some of the projects I've worked on. Each one represents a learning journey and showcases different skills and technologies." }, void 0, false, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectCard, { ...project }, index, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 41,
      columnNumber: 43
    }, this)) }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c2 = Projects;
var projects = [{
  title: "Comtech Internship - 911 Call Routing Utility",
  image: "images/comtech-logo.jpg",
  description: "Created a command-line Python utility for creating and inserting custom call-routing policies into backend SQL servers used for Massachusetts 911 systems.",
  technologies: ["Python", "SQL"]
}, {
  title: "Graph Algorithms and Visualization",
  description: "Designed and built an interactive interface for graph visualization including algorithms such as Dijkstra's, Karger's, and a physics simulation for the vertex interface.",
  image: "images/graphs-demo2.png",
  technologies: ["Kotlin", "JavaFX", "SceneBuilder"],
  githubUrl: "https://github.com/FischerAbruzese/Graphs-Algorithms-Visualization"
}, {
  title: "Critter Simulation",
  description: "Implemented a parser and pretty-printer for a custom Turing-complete language to simulate an interactive, real-time updating world of mutating critters.",
  image: "images/critter-world-demo.png",
  technologies: ["Java", "JavaFX"]
}];
var _c2;
$RefreshReg$(_c2, "Projects");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Projects as default,
  meta
};
//# sourceMappingURL=/build/routes/projects-ZNMFVMOD.js.map
