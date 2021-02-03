/*
 Highcharts JS v8.2.2 (2020-10-22)

 (c) 2016-2019 Highsoft AS
 Authors: Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function (b) {
  "object" === typeof module && module.exports
    ? ((b["default"] = b), (module.exports = b))
    : "function" === typeof define && define.amd
    ? define("highcharts/modules/sunburst", ["highcharts"], function (q) {
        b(q);
        b.Highcharts = q;
        return b;
      })
    : b("undefined" !== typeof Highcharts ? Highcharts : void 0);
})(function (b) {
  function q(b, d, p, D) {
    b.hasOwnProperty(d) || (b[d] = D.apply(null, p));
  }
  b = b ? b._modules : {};
  q(b, "Mixins/DrawPoint.js", [], function () {
    var b = function (b) {
        return "function" === typeof b;
      },
      d = function (p) {
        var d,
          u = this,
          l = u.graphic,
          w = p.animatableAttribs,
          A = p.onComplete,
          g = p.css,
          k = p.renderer,
          V = null === (d = u.series) || void 0 === d ? void 0 : d.options.animation;
        if (u.shouldDraw())
          l || (u.graphic = l = k[p.shapeType](p.shapeArgs).add(p.group)),
            l
              .css(g)
              .attr(p.attribs)
              .animate(w, p.isNew ? !1 : V, A);
        else if (l) {
          var H = function () {
            u.graphic = l = l.destroy();
            b(A) && A();
          };
          Object.keys(w).length
            ? l.animate(w, void 0, function () {
                H();
              })
            : H();
        }
      };
    return {
      draw: d,
      drawPoint: function (b) {
        (b.attribs = b.attribs || {})["class"] = this.getClassName();
        d.call(this, b);
      },
      isFn: b,
    };
  });
  q(b, "Mixins/TreeSeries.js", [b["Core/Color/Color.js"], b["Core/Utilities.js"]], function (b, d) {
    var p = d.extend,
      D = d.isArray,
      u = d.isNumber,
      l = d.isObject,
      w = d.merge,
      A = d.pick;
    return {
      getColor: function (g, k) {
        var l = k.index,
          d = k.mapOptionsToLevel,
          p = k.parentColor,
          u = k.parentColorIndex,
          K = k.series,
          C = k.colors,
          I = k.siblings,
          r = K.points,
          w = K.chart.options.chart,
          B;
        if (g) {
          r = r[g.i];
          g = d[g.level] || {};
          if ((d = r && g.colorByPoint)) {
            var D = r.index % (C ? C.length : w.colorCount);
            var L = C && C[D];
          }
          if (!K.chart.styledMode) {
            C = r && r.options.color;
            w = g && g.color;
            if ((B = p))
              B =
                (B = g && g.colorVariation) && "brightness" === B.key
                  ? b
                      .parse(p)
                      .brighten((l / I) * B.to)
                      .get()
                  : p;
            B = A(C, w, L, B, K.color);
          }
          var q = A(r && r.options.colorIndex, g && g.colorIndex, D, u, k.colorIndex);
        }
        return { color: B, colorIndex: q };
      },
      getLevelOptions: function (b) {
        var k = null;
        if (l(b)) {
          k = {};
          var d = u(b.from) ? b.from : 1;
          var g = b.levels;
          var A = {};
          var q = l(b.defaults) ? b.defaults : {};
          D(g) &&
            (A = g.reduce(function (b, k) {
              if (l(k) && u(k.level)) {
                var g = w({}, k);
                var r =
                  "boolean" === typeof g.levelIsConstant ? g.levelIsConstant : q.levelIsConstant;
                delete g.levelIsConstant;
                delete g.level;
                k = k.level + (r ? 0 : d - 1);
                l(b[k]) ? p(b[k], g) : (b[k] = g);
              }
              return b;
            }, {}));
          g = u(b.to) ? b.to : 1;
          for (b = 0; b <= g; b++) k[b] = w({}, q, l(A[b]) ? A[b] : {});
        }
        return k;
      },
      setTreeValues: function H(b, d) {
        var k = d.before,
          l = d.idRoot,
          u = d.mapIdToNode[l],
          C = d.points[b.i],
          w = (C && C.options) || {},
          r = 0,
          q = [];
        p(b, {
          levelDynamic:
            b.level -
            (("boolean" === typeof d.levelIsConstant ? d.levelIsConstant : 1) ? 0 : u.level),
          name: A(C && C.name, ""),
          visible: l === b.id || ("boolean" === typeof d.visible ? d.visible : !1),
        });
        "function" === typeof k && (b = k(b, d));
        b.children.forEach(function (k, l) {
          var u = p({}, d);
          p(u, { index: l, siblings: b.children.length, visible: b.visible });
          k = H(k, u);
          q.push(k);
          k.visible && (r += k.val);
        });
        b.visible = 0 < r || b.visible;
        k = A(w.value, r);
        p(b, { children: q, childrenTotal: r, isLeaf: b.visible && !r, val: k });
        return b;
      },
      updateRootId: function (b) {
        if (l(b)) {
          var d = l(b.options) ? b.options : {};
          d = A(b.rootNode, d.rootId, "");
          l(b.userOptions) && (b.userOptions.rootId = d);
          b.rootNode = d;
        }
        return d;
      },
    };
  });
  q(
    b,
    "Mixins/ColorMapSeries.js",
    [b["Core/Globals.js"], b["Core/Series/Point.js"], b["Core/Utilities.js"]],
    function (b, d, p) {
      var q = p.defined;
      return {
        colorMapPointMixin: {
          dataLabelOnNull: !0,
          isValid: function () {
            return null !== this.value && Infinity !== this.value && -Infinity !== this.value;
          },
          setState: function (b) {
            d.prototype.setState.call(this, b);
            this.graphic && this.graphic.attr({ zIndex: "hover" === b ? 1 : 0 });
          },
        },
        colorMapSeriesMixin: {
          pointArrayMap: ["value"],
          axisTypes: ["xAxis", "yAxis", "colorAxis"],
          trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
          getSymbol: b.noop,
          parallelArrays: ["x", "y", "value"],
          colorKey: "value",
          pointAttribs: b.seriesTypes.column.prototype.pointAttribs,
          colorAttribs: function (b) {
            var d = {};
            q(b.color) && (d[this.colorProp || "fill"] = b.color);
            return d;
          },
        },
      };
    }
  );
  q(
    b,
    "Series/TreemapSeries.js",
    [
      b["Core/Series/Series.js"],
      b["Core/Color/Color.js"],
      b["Mixins/ColorMapSeries.js"],
      b["Mixins/DrawPoint.js"],
      b["Core/Globals.js"],
      b["Mixins/LegendSymbol.js"],
      b["Core/Series/Point.js"],
      b["Mixins/TreeSeries.js"],
      b["Core/Utilities.js"],
    ],
    function (b, d, p, q, u, l, w, A, g) {
      var k = b.seriesTypes,
        D = d.parse,
        H = p.colorMapSeriesMixin;
      d = u.noop;
      var Q = A.getColor,
        N = A.getLevelOptions,
        K = A.updateRootId,
        C = g.addEvent,
        I = g.correctFloat,
        r = g.defined,
        R = g.error,
        B = g.extend,
        S = g.fireEvent,
        L = g.isArray,
        O = g.isNumber,
        P = g.isObject,
        M = g.isString,
        J = g.merge,
        T = g.objectEach,
        f = g.pick,
        h = g.stableSort,
        t = u.Series,
        y = function (a, c, e) {
          e = e || this;
          T(a, function (b, m) {
            c.call(e, b, m, a);
          });
        },
        E = function (a, c, e) {
          e = e || this;
          a = c.call(e, a);
          !1 !== a && E(a, c, e);
        },
        n = !1;
      b.seriesType(
        "treemap",
        "scatter",
        {
          allowTraversingTree: !1,
          animationLimit: 250,
          showInLegend: !1,
          marker: void 0,
          colorByPoint: !1,
          dataLabels: {
            defer: !1,
            enabled: !0,
            formatter: function () {
              var a = this && this.point ? this.point : {};
              return M(a.name) ? a.name : "";
            },
            inside: !0,
            verticalAlign: "middle",
          },
          tooltip: { headerFormat: "", pointFormat: "<b>{point.name}</b>: {point.value}<br/>" },
          ignoreHiddenPoint: !0,
          layoutAlgorithm: "sliceAndDice",
          layoutStartingDirection: "vertical",
          alternateStartingDirection: !1,
          levelIsConstant: !0,
          drillUpButton: { position: { align: "right", x: -10, y: 10 } },
          traverseUpButton: { position: { align: "right", x: -10, y: 10 } },
          borderColor: "#e6e6e6",
          borderWidth: 1,
          colorKey: "colorValue",
          opacity: 0.15,
          states: {
            hover: {
              borderColor: "#999999",
              brightness: k.heatmap ? 0 : 0.1,
              halo: !1,
              opacity: 0.75,
              shadow: !1,
            },
          },
        },
        {
          pointArrayMap: ["value"],
          directTouch: !0,
          optionalAxis: "colorAxis",
          getSymbol: d,
          parallelArrays: ["x", "y", "value", "colorValue"],
          colorKey: "colorValue",
          trackerGroups: ["group", "dataLabelsGroup"],
          getListOfParents: function (a, c) {
            a = L(a) ? a : [];
            var e = L(c) ? c : [];
            c = a.reduce(
              function (a, c, e) {
                c = f(c.parent, "");
                "undefined" === typeof a[c] && (a[c] = []);
                a[c].push(e);
                return a;
              },
              { "": [] }
            );
            y(c, function (a, c, b) {
              "" !== c &&
                -1 === e.indexOf(c) &&
                (a.forEach(function (a) {
                  b[""].push(a);
                }),
                delete b[c]);
            });
            return c;
          },
          getTree: function () {
            var a = this.data.map(function (a) {
              return a.id;
            });
            a = this.getListOfParents(this.data, a);
            this.nodeMap = {};
            return this.buildNode("", -1, 0, a);
          },
          hasData: function () {
            return !!this.processedXData.length;
          },
          init: function (a, c) {
            H && (this.colorAttribs = H.colorAttribs);
            var e = C(this, "setOptions", function (a) {
              a = a.userOptions;
              r(a.allowDrillToNode) &&
                !r(a.allowTraversingTree) &&
                ((a.allowTraversingTree = a.allowDrillToNode), delete a.allowDrillToNode);
              r(a.drillUpButton) &&
                !r(a.traverseUpButton) &&
                ((a.traverseUpButton = a.drillUpButton), delete a.drillUpButton);
            });
            t.prototype.init.call(this, a, c);
            delete this.opacity;
            this.eventsToUnbind.push(e);
            this.options.allowTraversingTree &&
              this.eventsToUnbind.push(C(this, "click", this.onClickDrillToNode));
          },
          buildNode: function (a, c, e, b, m) {
            var f = this,
              x = [],
              h = f.points[c],
              d = 0,
              F;
            (b[a] || []).forEach(function (c) {
              F = f.buildNode(f.points[c].id, c, e + 1, b, a);
              d = Math.max(F.height + 1, d);
              x.push(F);
            });
            c = { id: a, i: c, children: x, height: d, level: e, parent: m, visible: !1 };
            f.nodeMap[c.id] = c;
            h && (h.node = c);
            return c;
          },
          setTreeValues: function (a) {
            var c = this,
              e = c.options,
              b = c.nodeMap[c.rootNode];
            e = "boolean" === typeof e.levelIsConstant ? e.levelIsConstant : !0;
            var m = 0,
              U = [],
              v = c.points[a.i];
            a.children.forEach(function (a) {
              a = c.setTreeValues(a);
              U.push(a);
              a.ignore || (m += a.val);
            });
            h(U, function (a, c) {
              return (a.sortIndex || 0) - (c.sortIndex || 0);
            });
            var d = f(v && v.options.value, m);
            v && (v.value = d);
            B(a, {
              children: U,
              childrenTotal: m,
              ignore: !(f(v && v.visible, !0) && 0 < d),
              isLeaf: a.visible && !m,
              levelDynamic: a.level - (e ? 0 : b.level),
              name: f(v && v.name, ""),
              sortIndex: f(v && v.sortIndex, -d),
              val: d,
            });
            return a;
          },
          calculateChildrenAreas: function (a, c) {
            var e = this,
              b = e.options,
              m = e.mapOptionsToLevel[a.level + 1],
              d = f(e[m && m.layoutAlgorithm] && m.layoutAlgorithm, b.layoutAlgorithm),
              v = b.alternateStartingDirection,
              h = [];
            a = a.children.filter(function (a) {
              return !a.ignore;
            });
            m &&
              m.layoutStartingDirection &&
              (c.direction = "vertical" === m.layoutStartingDirection ? 0 : 1);
            h = e[d](c, a);
            a.forEach(function (a, b) {
              b = h[b];
              a.values = J(b, {
                val: a.childrenTotal,
                direction: v ? 1 - c.direction : c.direction,
              });
              a.pointValues = J(b, {
                x: b.x / e.axisRatio,
                y: 100 - b.y - b.height,
                width: b.width / e.axisRatio,
              });
              a.children.length && e.calculateChildrenAreas(a, a.values);
            });
          },
          setPointValues: function () {
            var a = this,
              c = a.xAxis,
              e = a.yAxis,
              b = a.chart.styledMode;
            a.points.forEach(function (f) {
              var m = f.node,
                x = m.pointValues;
              m = m.visible;
              if (x && m) {
                m = x.height;
                var d = x.width,
                  h = x.x,
                  t = x.y,
                  n = b ? 0 : ((a.pointAttribs(f)["stroke-width"] || 0) % 2) / 2;
                x = Math.round(c.toPixels(h, !0)) - n;
                d = Math.round(c.toPixels(h + d, !0)) - n;
                h = Math.round(e.toPixels(t, !0)) - n;
                m = Math.round(e.toPixels(t + m, !0)) - n;
                f.shapeArgs = {
                  x: Math.min(x, d),
                  y: Math.min(h, m),
                  width: Math.abs(d - x),
                  height: Math.abs(m - h),
                };
                f.plotX = f.shapeArgs.x + f.shapeArgs.width / 2;
                f.plotY = f.shapeArgs.y + f.shapeArgs.height / 2;
              } else delete f.plotX, delete f.plotY;
            });
          },
          setColorRecursive: function (a, c, e, b, f) {
            var m = this,
              x = m && m.chart;
            x = x && x.options && x.options.colors;
            if (a) {
              var d = Q(a, {
                colors: x,
                index: b,
                mapOptionsToLevel: m.mapOptionsToLevel,
                parentColor: c,
                parentColorIndex: e,
                series: m,
                siblings: f,
              });
              if ((c = m.points[a.i])) (c.color = d.color), (c.colorIndex = d.colorIndex);
              (a.children || []).forEach(function (c, e) {
                m.setColorRecursive(c, d.color, d.colorIndex, e, a.children.length);
              });
            }
          },
          algorithmGroup: function (a, c, e, b) {
            this.height = a;
            this.width = c;
            this.plot = b;
            this.startDirection = this.direction = e;
            this.lH = this.nH = this.lW = this.nW = this.total = 0;
            this.elArr = [];
            this.lP = {
              total: 0,
              lH: 0,
              nH: 0,
              lW: 0,
              nW: 0,
              nR: 0,
              lR: 0,
              aspectRatio: function (a, c) {
                return Math.max(a / c, c / a);
              },
            };
            this.addElement = function (a) {
              this.lP.total = this.elArr[this.elArr.length - 1];
              this.total += a;
              0 === this.direction
                ? ((this.lW = this.nW),
                  (this.lP.lH = this.lP.total / this.lW),
                  (this.lP.lR = this.lP.aspectRatio(this.lW, this.lP.lH)),
                  (this.nW = this.total / this.height),
                  (this.lP.nH = this.lP.total / this.nW),
                  (this.lP.nR = this.lP.aspectRatio(this.nW, this.lP.nH)))
                : ((this.lH = this.nH),
                  (this.lP.lW = this.lP.total / this.lH),
                  (this.lP.lR = this.lP.aspectRatio(this.lP.lW, this.lH)),
                  (this.nH = this.total / this.width),
                  (this.lP.nW = this.lP.total / this.nH),
                  (this.lP.nR = this.lP.aspectRatio(this.lP.nW, this.nH)));
              this.elArr.push(a);
            };
            this.reset = function () {
              this.lW = this.nW = 0;
              this.elArr = [];
              this.total = 0;
            };
          },
          algorithmCalcPoints: function (a, c, e, b) {
            var f,
              x,
              d,
              h,
              t = e.lW,
              n = e.lH,
              g = e.plot,
              k = 0,
              y = e.elArr.length - 1;
            if (c) (t = e.nW), (n = e.nH);
            else var G = e.elArr[e.elArr.length - 1];
            e.elArr.forEach(function (a) {
              if (c || k < y)
                0 === e.direction
                  ? ((f = g.x), (x = g.y), (d = t), (h = a / d))
                  : ((f = g.x), (x = g.y), (h = n), (d = a / h)),
                  b.push({ x: f, y: x, width: d, height: I(h) }),
                  0 === e.direction ? (g.y += h) : (g.x += d);
              k += 1;
            });
            e.reset();
            0 === e.direction ? (e.width -= t) : (e.height -= n);
            g.y = g.parent.y + (g.parent.height - e.height);
            g.x = g.parent.x + (g.parent.width - e.width);
            a && (e.direction = 1 - e.direction);
            c || e.addElement(G);
          },
          algorithmLowAspectRatio: function (a, c, e) {
            var b = [],
              f = this,
              d,
              h = { x: c.x, y: c.y, parent: c },
              t = 0,
              g = e.length - 1,
              n = new this.algorithmGroup(c.height, c.width, c.direction, h);
            e.forEach(function (e) {
              d = (e.val / c.val) * c.height * c.width;
              n.addElement(d);
              n.lP.nR > n.lP.lR && f.algorithmCalcPoints(a, !1, n, b, h);
              t === g && f.algorithmCalcPoints(a, !0, n, b, h);
              t += 1;
            });
            return b;
          },
          algorithmFill: function (a, c, e) {
            var b = [],
              f,
              d = c.direction,
              h = c.x,
              t = c.y,
              n = c.width,
              g = c.height,
              k,
              y,
              l,
              G;
            e.forEach(function (e) {
              f = (e.val / c.val) * c.height * c.width;
              k = h;
              y = t;
              0 === d
                ? ((G = g), (l = f / G), (n -= l), (h += l))
                : ((l = n), (G = f / l), (g -= G), (t += G));
              b.push({ x: k, y: y, width: l, height: G });
              a && (d = 1 - d);
            });
            return b;
          },
          strip: function (a, c) {
            return this.algorithmLowAspectRatio(!1, a, c);
          },
          squarified: function (a, c) {
            return this.algorithmLowAspectRatio(!0, a, c);
          },
          sliceAndDice: function (a, c) {
            return this.algorithmFill(!0, a, c);
          },
          stripes: function (a, c) {
            return this.algorithmFill(!1, a, c);
          },
          translate: function () {
            var a = this,
              c = a.options,
              e = K(a);
            t.prototype.translate.call(a);
            var b = (a.tree = a.getTree());
            var f = a.nodeMap[e];
            a.renderTraverseUpButton(e);
            a.mapOptionsToLevel = N({
              from: f.level + 1,
              levels: c.levels,
              to: b.height,
              defaults: {
                levelIsConstant: a.options.levelIsConstant,
                colorByPoint: c.colorByPoint,
              },
            });
            "" === e ||
              (f && f.children.length) ||
              (a.setRootNode("", !1), (e = a.rootNode), (f = a.nodeMap[e]));
            E(a.nodeMap[a.rootNode], function (c) {
              var e = !1,
                b = c.parent;
              c.visible = !0;
              if (b || "" === b) e = a.nodeMap[b];
              return e;
            });
            E(a.nodeMap[a.rootNode].children, function (a) {
              var c = !1;
              a.forEach(function (a) {
                a.visible = !0;
                a.children.length && (c = (c || []).concat(a.children));
              });
              return c;
            });
            a.setTreeValues(b);
            a.axisRatio = a.xAxis.len / a.yAxis.len;
            a.nodeMap[""].pointValues = e = { x: 0, y: 0, width: 100, height: 100 };
            a.nodeMap[""].values = e = J(e, {
              width: e.width * a.axisRatio,
              direction: "vertical" === c.layoutStartingDirection ? 0 : 1,
              val: b.val,
            });
            a.calculateChildrenAreas(b, e);
            a.colorAxis || c.colorByPoint || a.setColorRecursive(a.tree);
            c.allowTraversingTree &&
              ((c = f.pointValues),
              a.xAxis.setExtremes(c.x, c.x + c.width, !1),
              a.yAxis.setExtremes(c.y, c.y + c.height, !1),
              a.xAxis.setScale(),
              a.yAxis.setScale());
            a.setPointValues();
          },
          drawDataLabels: function () {
            var a = this,
              c = a.mapOptionsToLevel,
              e,
              b;
            a.points
              .filter(function (a) {
                return a.node.visible;
              })
              .forEach(function (f) {
                b = c[f.node.level];
                e = { style: {} };
                f.node.isLeaf || (e.enabled = !1);
                b && b.dataLabels && ((e = J(e, b.dataLabels)), (a._hasPointLabels = !0));
                f.shapeArgs &&
                  ((e.style.width = f.shapeArgs.width),
                  f.dataLabel && f.dataLabel.css({ width: f.shapeArgs.width + "px" }));
                f.dlOptions = J(e, f.options.dataLabels);
              });
            t.prototype.drawDataLabels.call(this);
          },
          alignDataLabel: function (a, c, b) {
            var e = b.style;
            !r(e.textOverflow) &&
              c.text &&
              c.getBBox().width > c.text.textWidth &&
              c.css({ textOverflow: "ellipsis", width: (e.width += "px") });
            k.column.prototype.alignDataLabel.apply(this, arguments);
            a.dataLabel && a.dataLabel.attr({ zIndex: (a.node.zIndex || 0) + 1 });
          },
          pointAttribs: function (a, c) {
            var b = P(this.mapOptionsToLevel) ? this.mapOptionsToLevel : {},
              d = (a && b[a.node.level]) || {};
            b = this.options;
            var h = (c && b.states[c]) || {},
              t = (a && a.getClassName()) || "";
            a = {
              stroke: (a && a.borderColor) || d.borderColor || h.borderColor || b.borderColor,
              "stroke-width": f(a && a.borderWidth, d.borderWidth, h.borderWidth, b.borderWidth),
              dashstyle:
                (a && a.borderDashStyle) ||
                d.borderDashStyle ||
                h.borderDashStyle ||
                b.borderDashStyle,
              fill: (a && a.color) || this.color,
            };
            -1 !== t.indexOf("highcharts-above-level")
              ? ((a.fill = "none"), (a["stroke-width"] = 0))
              : -1 !== t.indexOf("highcharts-internal-node-interactive")
              ? ((c = f(h.opacity, b.opacity)),
                (a.fill = D(a.fill).setOpacity(c).get()),
                (a.cursor = "pointer"))
              : -1 !== t.indexOf("highcharts-internal-node")
              ? (a.fill = "none")
              : c && (a.fill = D(a.fill).brighten(h.brightness).get());
            return a;
          },
          drawPoints: function () {
            var a = this,
              c = a.chart,
              b = c.renderer,
              f = c.styledMode,
              d = a.options,
              h = f ? {} : d.shadow,
              t = d.borderRadius,
              n = c.pointCount < d.animationLimit,
              g = d.allowTraversingTree;
            a.points.forEach(function (c) {
              var e = c.node.levelDynamic,
                m = {},
                x = {},
                G = {},
                k = "level-group-" + c.node.level,
                l = !!c.graphic,
                y = n && l,
                E = c.shapeArgs;
              c.shouldDraw() &&
                (t && (x.r = t),
                J(
                  !0,
                  y ? m : x,
                  l ? E : {},
                  f ? {} : a.pointAttribs(c, c.selected ? "select" : void 0)
                ),
                a.colorAttribs && f && B(G, a.colorAttribs(c)),
                a[k] ||
                  ((a[k] = b
                    .g(k)
                    .attr({ zIndex: 1e3 - (e || 0) })
                    .add(a.group)),
                  (a[k].survive = !0)));
              c.draw({
                animatableAttribs: m,
                attribs: x,
                css: G,
                group: a[k],
                renderer: b,
                shadow: h,
                shapeArgs: E,
                shapeType: "rect",
              });
              g &&
                c.graphic &&
                (c.drillId = d.interactByLeaf ? a.drillToByLeaf(c) : a.drillToByGroup(c));
            });
          },
          onClickDrillToNode: function (a) {
            var c = (a = a.point) && a.drillId;
            M(c) && (a.setState(""), this.setRootNode(c, !0, { trigger: "click" }));
          },
          drillToByGroup: function (a) {
            var c = !1;
            1 !== a.node.level - this.nodeMap[this.rootNode].level || a.node.isLeaf || (c = a.id);
            return c;
          },
          drillToByLeaf: function (a) {
            var c = !1;
            if (a.node.parent !== this.rootNode && a.node.isLeaf)
              for (a = a.node; !c; )
                (a = this.nodeMap[a.parent]), a.parent === this.rootNode && (c = a.id);
            return c;
          },
          drillUp: function () {
            var a = this.nodeMap[this.rootNode];
            a && M(a.parent) && this.setRootNode(a.parent, !0, { trigger: "traverseUpButton" });
          },
          drillToNode: function (a, c) {
            R(32, !1, void 0, { "treemap.drillToNode": "use treemap.setRootNode" });
            this.setRootNode(a, c);
          },
          setRootNode: function (a, c, b) {
            a = B(
              { newRootId: a, previousRootId: this.rootNode, redraw: f(c, !0), series: this },
              b
            );
            S(this, "setRootNode", a, function (a) {
              var c = a.series;
              c.idPreviousRoot = a.previousRootId;
              c.rootNode = a.newRootId;
              c.isDirty = !0;
              a.redraw && c.chart.redraw();
            });
          },
          renderTraverseUpButton: function (a) {
            var c = this,
              b = c.options.traverseUpButton,
              d = f(b.text, c.nodeMap[a].name, "\u25c1 Back");
            if (
              "" === a ||
              (c.is("sunburst") && 1 === c.tree.children.length && a === c.tree.children[0].id)
            )
              c.drillUpButton && (c.drillUpButton = c.drillUpButton.destroy());
            else if (this.drillUpButton)
              (this.drillUpButton.placed = !1), this.drillUpButton.attr({ text: d }).align();
            else {
              var h = (a = b.theme) && a.states;
              this.drillUpButton = this.chart.renderer
                .button(
                  d,
                  0,
                  0,
                  function () {
                    c.drillUp();
                  },
                  a,
                  h && h.hover,
                  h && h.select
                )
                .addClass("highcharts-drillup-button")
                .attr({ align: b.position.align, zIndex: 7 })
                .add()
                .align(b.position, !1, b.relativeTo || "plotBox");
            }
          },
          buildKDTree: d,
          drawLegendSymbol: l.drawRectangle,
          getExtremes: function () {
            var a = t.prototype.getExtremes.call(this, this.colorValueData),
              c = a.dataMax;
            this.valueMin = a.dataMin;
            this.valueMax = c;
            return t.prototype.getExtremes.call(this);
          },
          getExtremesFromAll: !0,
          setState: function (a) {
            this.options.inactiveOtherPoints = !0;
            t.prototype.setState.call(this, a, !1);
            this.options.inactiveOtherPoints = !1;
          },
          utils: { recursive: E },
        },
        {
          draw: q.drawPoint,
          setVisible: k.pie.prototype.pointClass.prototype.setVisible,
          getClassName: function () {
            var a = w.prototype.getClassName.call(this),
              c = this.series,
              b = c.options;
            this.node.level <= c.nodeMap[c.rootNode].level
              ? (a += " highcharts-above-level")
              : this.node.isLeaf || f(b.interactByLeaf, !b.allowTraversingTree)
              ? this.node.isLeaf || (a += " highcharts-internal-node")
              : (a += " highcharts-internal-node-interactive");
            return a;
          },
          isValid: function () {
            return !(!this.id && !O(this.value));
          },
          setState: function (a) {
            w.prototype.setState.call(this, a);
            this.graphic && this.graphic.attr({ zIndex: "hover" === a ? 1 : 0 });
          },
          shouldDraw: function () {
            return O(this.plotY) && null !== this.y;
          },
        }
      );
      C(u.Series, "afterBindAxes", function () {
        var a = this.xAxis,
          c = this.yAxis;
        if (a && c)
          if (this.is("treemap")) {
            var b = {
              endOnTick: !1,
              gridLineWidth: 0,
              lineWidth: 0,
              min: 0,
              dataMin: 0,
              minPadding: 0,
              max: 100,
              dataMax: 100,
              maxPadding: 0,
              startOnTick: !1,
              title: null,
              tickPositions: [],
            };
            B(c.options, b);
            B(a.options, b);
            n = !0;
          } else n && (c.setOptions(c.userOptions), a.setOptions(a.userOptions), (n = !1));
      });
      ("");
    }
  );
  q(
    b,
    "Series/SunburstSeries.js",
    [
      b["Core/Series/Series.js"],
      b["Mixins/CenteredSeries.js"],
      b["Mixins/DrawPoint.js"],
      b["Core/Globals.js"],
      b["Mixins/TreeSeries.js"],
      b["Core/Utilities.js"],
    ],
    function (b, d, p, q, u, l) {
      var w = b.seriesTypes,
        A = d.getCenter,
        g = d.getStartAndEndRadians,
        k = u.getColor,
        D = u.getLevelOptions,
        H = u.setTreeValues,
        Q = u.updateRootId,
        N = l.correctFloat,
        K = l.error,
        C = l.extend,
        I = l.isNumber,
        r = l.isObject,
        R = l.isString,
        B = l.merge,
        S = l.splat,
        L = q.Series,
        O = 180 / Math.PI,
        P = function (b, d) {
          var f = [];
          if (I(b) && I(d) && b <= d) for (; b <= d; b++) f.push(b);
          return f;
        },
        M = function (b, d) {
          d = r(d) ? d : {};
          var f = 0,
            h;
          if (r(b)) {
            var g = B({}, b);
            b = I(d.from) ? d.from : 0;
            var n = I(d.to) ? d.to : 0;
            var a = P(b, n);
            b = Object.keys(g).filter(function (c) {
              return -1 === a.indexOf(+c);
            });
            var c = (h = I(d.diffRadius) ? d.diffRadius : 0);
            a.forEach(function (a) {
              a = g[a];
              var b = a.levelSize.unit,
                e = a.levelSize.value;
              "weight" === b
                ? (f += e)
                : "percentage" === b
                ? ((a.levelSize = { unit: "pixels", value: (e / 100) * c }),
                  (h -= a.levelSize.value))
                : "pixels" === b && (h -= e);
            });
            a.forEach(function (a) {
              var c = g[a];
              "weight" === c.levelSize.unit &&
                ((c = c.levelSize.value),
                (g[a].levelSize = { unit: "pixels", value: (c / f) * h }));
            });
            b.forEach(function (a) {
              g[a].levelSize = { value: 0, unit: "pixels" };
            });
          }
          return g;
        },
        J = function (b) {
          var f = b.level;
          return { from: 0 < f ? f : 1, to: f + b.height };
        },
        T = function (b, d) {
          var f = d.mapIdToNode[b.parent],
            h = d.series,
            g = h.chart,
            n = h.points[b.i];
          f = k(b, {
            colors: h.options.colors || (g && g.options.colors),
            colorIndex: h.colorIndex,
            index: d.index,
            mapOptionsToLevel: d.mapOptionsToLevel,
            parentColor: f && f.color,
            parentColorIndex: f && f.colorIndex,
            series: d.series,
            siblings: d.siblings,
          });
          b.color = f.color;
          b.colorIndex = f.colorIndex;
          n &&
            ((n.color = b.color),
            (n.colorIndex = b.colorIndex),
            (b.sliced = b.id !== d.idRoot ? n.sliced : !1));
          return b;
        };
      d = {
        drawDataLabels: q.noop,
        drawPoints: function () {
          var b = this,
            d = b.mapOptionsToLevel,
            g = b.shapeRoot,
            k = b.group,
            l = b.hasRendered,
            n = b.rootNode,
            a = b.idPreviousRoot,
            c = b.nodeMap,
            e = c[a],
            x = e && e.shapeArgs;
          e = b.points;
          var m = b.startAndEndRadians,
            p = b.chart,
            v = (p && p.options && p.options.chart) || {},
            u = "boolean" === typeof v.animation ? v.animation : !0,
            q = b.center[3] / 2,
            A = b.chart.renderer,
            w = !1,
            D = !1;
          if ((v = !!(u && l && n !== a && b.dataLabelsGroup))) {
            b.dataLabelsGroup.attr({ opacity: 0 });
            var H = function () {
              w = !0;
              b.dataLabelsGroup && b.dataLabelsGroup.animate({ opacity: 1, visibility: "visible" });
            };
          }
          e.forEach(function (e) {
            var f = e.node,
              h = d[f.level];
            var t = e.shapeExisting || {};
            var y = f.shapeArgs || {},
              v = !(!f.visible || !f.shapeArgs);
            if (l && u) {
              var E = {};
              var w = { end: y.end, start: y.start, innerR: y.innerR, r: y.r, x: y.x, y: y.y };
              v
                ? !e.graphic &&
                  x &&
                  ((E =
                    n === e.id
                      ? { start: m.start, end: m.end }
                      : x.end <= y.start
                      ? { start: m.end, end: m.end }
                      : { start: m.start, end: m.start }),
                  (E.innerR = E.r = q))
                : e.graphic &&
                  (a === e.id
                    ? (w = { innerR: q, r: q })
                    : g &&
                      (w =
                        g.end <= t.start
                          ? { innerR: q, r: q, start: m.end, end: m.end }
                          : { innerR: q, r: q, start: m.start, end: m.start }));
              t = E;
            } else (w = y), (t = {});
            E = [y.plotX, y.plotY];
            if (!e.node.isLeaf)
              if (n === e.id) {
                var z = c[n];
                z = z.parent;
              } else z = e.id;
            C(e, {
              shapeExisting: y,
              tooltipPos: E,
              drillId: z,
              name: "" + (e.name || e.id || e.index),
              plotX: y.plotX,
              plotY: y.plotY,
              value: f.val,
              isNull: !v,
            });
            z = e.options;
            f = r(y) ? y : {};
            z = r(z) ? z.dataLabels : {};
            h = S(r(h) ? h.dataLabels : {})[0];
            h = B({ style: {} }, h, z);
            z = h.rotationMode;
            if (!I(h.rotation)) {
              if ("auto" === z || "circular" === z)
                if (1 > e.innerArcLength && e.outerArcLength > f.radius) {
                  var F = 0;
                  e.dataLabelPath && "circular" === z && (h.textPath = { enabled: !0 });
                } else
                  1 < e.innerArcLength && e.outerArcLength > 1.5 * f.radius
                    ? "circular" === z
                      ? (h.textPath = { enabled: !0, attributes: { dy: 5 } })
                      : (z = "parallel")
                    : (e.dataLabel &&
                        e.dataLabel.textPathWrapper &&
                        "circular" === z &&
                        (h.textPath = { enabled: !1 }),
                      (z = "perpendicular"));
              "auto" !== z && "circular" !== z && (F = f.end - (f.end - f.start) / 2);
              h.style.width =
                "parallel" === z
                  ? Math.min(2.5 * f.radius, (e.outerArcLength + e.innerArcLength) / 2)
                  : f.radius;
              "perpendicular" === z &&
                e.series.chart.renderer.fontMetrics(h.style.fontSize).h > e.outerArcLength &&
                (h.style.width = 1);
              h.style.width = Math.max(h.style.width - 2 * (h.padding || 0), 1);
              F = (F * O) % 180;
              "parallel" === z && (F -= 90);
              90 < F ? (F -= 180) : -90 > F && (F += 180);
              h.rotation = F;
            }
            h.textPath &&
              (0 === e.shapeExisting.innerR && h.textPath.enabled
                ? ((h.rotation = 0),
                  (h.textPath.enabled = !1),
                  (h.style.width = Math.max(2 * e.shapeExisting.r - 2 * (h.padding || 0), 1)))
                : e.dlOptions &&
                  e.dlOptions.textPath &&
                  !e.dlOptions.textPath.enabled &&
                  "circular" === z &&
                  (h.textPath.enabled = !0),
              h.textPath.enabled &&
                ((h.rotation = 0),
                (h.style.width = Math.max(
                  (e.outerArcLength + e.innerArcLength) / 2 - 2 * (h.padding || 0),
                  1
                ))));
            0 === h.rotation && (h.rotation = 0.001);
            e.dlOptions = h;
            if (!D && v) {
              D = !0;
              var G = H;
            }
            e.draw({
              animatableAttribs: w,
              attribs: C(t, !p.styledMode && b.pointAttribs(e, e.selected && "select")),
              onComplete: G,
              group: k,
              renderer: A,
              shapeType: "arc",
              shapeArgs: y,
            });
          });
          v && D
            ? ((b.hasRendered = !1),
              (b.options.dataLabels.defer = !0),
              L.prototype.drawDataLabels.call(b),
              (b.hasRendered = !0),
              w && H())
            : L.prototype.drawDataLabels.call(b);
        },
        pointAttribs: w.column.prototype.pointAttribs,
        layoutAlgorithm: function (b, d, g) {
          var f = b.start,
            h = b.end - f,
            n = b.val,
            a = b.x,
            c = b.y,
            e = g && r(g.levelSize) && I(g.levelSize.value) ? g.levelSize.value : 0,
            k = b.r,
            t = k + e,
            l = g && I(g.slicedOffset) ? g.slicedOffset : 0;
          return (d || []).reduce(function (b, d) {
            var g = (1 / n) * d.val * h,
              m = f + g / 2,
              y = a + Math.cos(m) * l;
            m = c + Math.sin(m) * l;
            d = {
              x: d.sliced ? y : a,
              y: d.sliced ? m : c,
              innerR: k,
              r: t,
              radius: e,
              start: f,
              end: f + g,
            };
            b.push(d);
            f = d.end;
            return b;
          }, []);
        },
        setShapeArgs: function (b, d, g) {
          var f = [],
            h = g[b.level + 1];
          b = b.children.filter(function (b) {
            return b.visible;
          });
          f = this.layoutAlgorithm(d, b, h);
          b.forEach(function (b, a) {
            a = f[a];
            var c = a.start + (a.end - a.start) / 2,
              e = a.innerR + (a.r - a.innerR) / 2,
              d = a.end - a.start;
            e =
              0 === a.innerR && 6.28 < d
                ? { x: a.x, y: a.y }
                : { x: a.x + Math.cos(c) * e, y: a.y + Math.sin(c) * e };
            var h = b.val ? (b.childrenTotal > b.val ? b.childrenTotal : b.val) : b.childrenTotal;
            this.points[b.i] &&
              ((this.points[b.i].innerArcLength = d * a.innerR),
              (this.points[b.i].outerArcLength = d * a.r));
            b.shapeArgs = B(a, { plotX: e.x, plotY: e.y + 4 * Math.abs(Math.cos(c)) });
            b.values = B(a, { val: h });
            b.children.length && this.setShapeArgs(b, b.values, g);
          }, this);
        },
        translate: function () {
          var b = this,
            d = b.options,
            k = (b.center = A.call(b)),
            l = (b.startAndEndRadians = g(d.startAngle, d.endAngle)),
            p = k[3] / 2,
            n = k[2] / 2 - p,
            a = Q(b),
            c = b.nodeMap,
            e = c && c[a],
            q = {};
          b.shapeRoot = e && e.shapeArgs;
          L.prototype.translate.call(b);
          var m = (b.tree = b.getTree());
          b.renderTraverseUpButton(a);
          c = b.nodeMap;
          e = c[a];
          var r = R(e.parent) ? e.parent : "";
          r = c[r];
          var v = J(e);
          var u = v.from,
            w = v.to;
          v = D({
            from: u,
            levels: b.options.levels,
            to: w,
            defaults: {
              colorByPoint: d.colorByPoint,
              dataLabels: d.dataLabels,
              levelIsConstant: d.levelIsConstant,
              levelSize: d.levelSize,
              slicedOffset: d.slicedOffset,
            },
          });
          v = M(v, { diffRadius: n, from: u, to: w });
          H(m, {
            before: T,
            idRoot: a,
            levelIsConstant: d.levelIsConstant,
            mapOptionsToLevel: v,
            mapIdToNode: c,
            points: b.points,
            series: b,
          });
          d = c[""].shapeArgs = { end: l.end, r: p, start: l.start, val: e.val, x: k[0], y: k[1] };
          this.setShapeArgs(r, d, v);
          b.mapOptionsToLevel = v;
          b.data.forEach(function (a) {
            q[a.id] && K(31, !1, b.chart);
            q[a.id] = !0;
          });
          q = {};
        },
        alignDataLabel: function (b, d, g) {
          if (!g.textPath || !g.textPath.enabled)
            return w.treemap.prototype.alignDataLabel.apply(this, arguments);
        },
        animate: function (b) {
          var d = this.chart,
            f = [d.plotWidth / 2, d.plotHeight / 2],
            g = d.plotLeft,
            k = d.plotTop;
          d = this.group;
          b
            ? ((b = {
                translateX: f[0] + g,
                translateY: f[1] + k,
                scaleX: 0.001,
                scaleY: 0.001,
                rotation: 10,
                opacity: 0.01,
              }),
              d.attr(b))
            : ((b = {
                translateX: g,
                translateY: k,
                scaleX: 1,
                scaleY: 1,
                rotation: 0,
                opacity: 1,
              }),
              d.animate(b, this.options.animation));
        },
        utils: { calculateLevelSizes: M, getLevelFromAndTo: J, range: P },
      };
      p = {
        draw: p.drawPoint,
        shouldDraw: function () {
          return !this.isNull;
        },
        isValid: function () {
          return !0;
        },
        getDataLabelPath: function (b) {
          var d = this.series.chart.renderer,
            f = this.shapeExisting,
            g = f.start,
            k = f.end,
            l = g + (k - g) / 2;
          l = (0 > l && l > -Math.PI) || l > Math.PI;
          var a = f.r + (b.options.distance || 0);
          g === -Math.PI / 2 &&
            N(k) === N(1.5 * Math.PI) &&
            ((g = -Math.PI + Math.PI / 360), (k = -Math.PI / 360), (l = !0));
          if (k - g > Math.PI) {
            l = !1;
            var c = !0;
          }
          this.dataLabelPath && (this.dataLabelPath = this.dataLabelPath.destroy());
          this.dataLabelPath = d.arc({ open: !0, longArc: c ? 1 : 0 }).add(b);
          this.dataLabelPath.attr({
            start: l ? g : k,
            end: l ? k : g,
            clockwise: +l,
            x: f.x,
            y: f.y,
            r: (a + f.innerR) / 2,
          });
          return this.dataLabelPath;
        },
      };
      ("");
      b.seriesType(
        "sunburst",
        "treemap",
        {
          center: ["50%", "50%"],
          colorByPoint: !1,
          opacity: 1,
          dataLabels: {
            allowOverlap: !0,
            defer: !0,
            rotationMode: "auto",
            style: { textOverflow: "ellipsis" },
          },
          rootId: void 0,
          levelIsConstant: !0,
          levelSize: { value: 1, unit: "weight" },
          slicedOffset: 10,
        },
        d,
        p
      );
    }
  );
  q(b, "masters/modules/sunburst.src.js", [], function () {});
});
//# sourceMappingURL=sunburst.js.map
