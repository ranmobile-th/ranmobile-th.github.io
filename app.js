(function () {
  var S = window.SITE, L = window.LANGS, D = window.I18N, LOG = window.CHANGELOG;
  var codes = L.map(function (l) { return l[0]; });
  var lang = pickLang();
  var verSel = LOG.find(function (r) { return !r.upcoming; }).v, filter = "all", query = "", cls = 0;

  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && codes.indexOf(q) >= 0) return q;
    try { var s = localStorage.getItem("rm.lang"); if (s && codes.indexOf(s) >= 0) return s; } catch (e) {}
    var n = (navigator.languages || [navigator.language || "th"]);
    for (var i = 0; i < n.length; i++) {
      var c = String(n[i]);
      if (/^zh-(TW|HK|MO)|zh-Hant/i.test(c)) return "zh-TW";
      if (/^zh/i.test(c)) return "zh-CN";
      var b = c.slice(0, 2).toLowerCase(); if (codes.indexOf(b) >= 0) return b;
    }
    return "th";
  }
  function t(k, vars) {
    var v = (D[lang] && D[lang][k] != null) ? D[lang][k] : (D.en[k] != null ? D.en[k] : D.th[k]);
    if (typeof v === "string" && vars) v = v.replace(/\{(\w+)\}/g, function (_, x) { return vars[x] != null ? vars[x] : ""; });
    return v == null ? "" : v;
  }
  function fmtDate(d) {
    if (!d) return "";
    try { return new Date(d + "T00:00:00").toLocaleDateString(lang === "th" ? "th-TH" : lang, { year: "numeric", month: "short", day: "numeric" }); } catch (e) { return d; }
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html"), { v: esc(S.latest) }); });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    document.querySelectorAll(".v-latest").forEach(function (el) { el.textContent = S.latest; });
    document.querySelectorAll(".v-date").forEach(function (el) { el.textContent = fmtDate(S.date); });
    document.querySelectorAll(".apk-link").forEach(function (el) { el.href = S.apk; el.setAttribute("rel", "nofollow"); });
    var cur = L.find(function (l) { return l[0] === lang; });
    document.getElementById("langcode").textContent = cur ? cur[2] : "TH";
    document.getElementById("langlist").innerHTML = L.map(function (l) {
      return '<li><a href="?lang=' + l[0] + '" data-l="' + l[0] + '" aria-current="' + (l[0] === lang) + '">' + l[1] + '<small>' + l[2] + "</small></a></li>";
    }).join("");
    renderClasses(); renderFaq(); renderStats(); renderLog();
  }

  // classes
  var art = [[0, 6], [1, 7], [8, 2], [9, 3], [4, 5]];
  function renderClasses() {
    var list = t("classes"); if (!Array.isArray(list)) list = D.en.classes;
    document.getElementById("clstabs").innerHTML = list.map(function (c, i) {
      return '<button role="tab" data-i="' + i + '" aria-selected="' + (i === cls) + '">' + esc(c.name) + "</button>";
    }).join("");
    var c = list[cls];
    document.getElementById("clsart").innerHTML = art[cls].map(function (n) { return '<img src="img/class' + n + '.png" alt="">'; }).join("");
    document.getElementById("clschip").textContent = c.chip;
    document.getElementById("clsname").textContent = c.name;
    document.getElementById("clsdesc").textContent = c.desc;
    document.getElementById("clspts").innerHTML = c.pts.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
  }
  function renderFaq() {
    var list = t("faq"); if (!Array.isArray(list)) list = D.en.faq;
    document.getElementById("faqlist").innerHTML = list.map(function (q) {
      return "<details><summary>" + esc(q[0]) + "</summary><p>" + esc(q[1]) + "</p></details>";
    }).join("");
  }
  function count(rel) {
    var o = { all: rel.items.length, new: 0, imp: 0, fix: 0 };
    rel.items.forEach(function (x) { o[x.t]++; }); return o;
  }
  function renderStats() {
    var rel = LOG.find(function (r) { return r.v === S.latest; }) || LOG[0], c = count(rel);
    document.getElementById("c-all").textContent = c.all; document.getElementById("c-new").textContent = c.new;
    document.getElementById("c-imp").textContent = c.imp; document.getElementById("c-fix").textContent = c.fix;
    var total = LOG.filter(function (r) { return !r.upcoming; }).reduce(function (n, r) { return n + r.items.length; }, 0);
    document.getElementById("c-total").textContent = t("get.total", { n: total, u: LOG.filter(function (r) { return !r.upcoming; }).length });
  }
  function itemText(x) { var k = (lang === "th") ? "th" : "en"; return { h: x[k][0], p: x[k][1], c: x.c[k] }; }
  function renderLog() {
    var rail = document.getElementById("rail");
    rail.innerHTML = LOG.map(function (r) {
      var badge = r.upcoming ? t("log.upcoming") : (r.v === S.latest ? t("log.latest") : "");
      return '<button data-v="' + r.v + '" aria-selected="' + (r.v === verSel) + '"><span>V' + r.v + '</span><span class="latest">' + esc(badge) + "</span></button>";
    }).join("");
    var rel = LOG.find(function (r) { return r.v === verSel; }) || LOG[0];
    document.getElementById("log-kicker").textContent = t("log.kicker", { v: rel.v }) + (rel.date ? " · " + fmtDate(rel.date) : "");
    var c = count(rel);
    document.getElementById("logsum").textContent = t("log.sum", { n: c.all, v: rel.v, a: c.new, b: c.imp, c: c.fix });
    var q = query.trim().toLowerCase();
    var rows = rel.items.filter(function (x) {
      if (filter !== "all" && x.t !== filter) return false;
      if (!q) return true;
      var a = itemText(x); return (a.h + " " + a.p + " " + a.c + " " + x.en[0] + " " + x.th[0]).toLowerCase().indexOf(q) >= 0;
    });
    if (!rows.length) { document.getElementById("entries").innerHTML = '<p class="empty">' + esc(t("log.empty")) + "</p>"; return; }
    var groups = {}, order = [];
    rows.forEach(function (x) { var g = itemText(x).c; if (!groups[g]) { groups[g] = []; order.push(g); } groups[g].push(x); });
    var label = { new: t("f.new"), imp: t("f.imp"), fix: t("f.fix") };
    document.getElementById("entries").innerHTML = order.map(function (g) {
      return '<div class="group"><h4><span>' + esc(g) + "</span><span>" + groups[g].length + "</span></h4>" + groups[g].map(function (x) {
        var a = itemText(x);
        return '<div class="entry"><span class="t ' + x.t + '">' + esc(label[x.t]) + "</span><div><b>" + esc(a.h) + "</b><span>" + esc(a.p) + "</span></div></div>";
      }).join("") + "</div>";
    }).join("");
  }

  // events
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-l]");
    if (a) { e.preventDefault(); lang = a.getAttribute("data-l"); try { localStorage.setItem("rm.lang", lang); } catch (x) {} history.replaceState(null, "", "?lang=" + lang + location.hash); closeLang(); apply(); return; }
    var langBox = document.getElementById("lang");
    if (e.target.closest("#lang > button")) { var open = !langBox.classList.contains("open"); langBox.classList.toggle("open", open); langBox.querySelector("button").setAttribute("aria-expanded", open); return; }
    if (!e.target.closest("#lang")) closeLang();
    var tab = e.target.closest("#clstabs button"); if (tab) { cls = +tab.getAttribute("data-i"); renderClasses(); return; }
    var v = e.target.closest("#rail button"); if (v) { verSel = v.getAttribute("data-v"); renderLog(); return; }
    var f = e.target.closest("#filters button");
    if (f) { filter = f.getAttribute("data-f"); document.querySelectorAll("#filters button").forEach(function (b) { b.setAttribute("aria-pressed", b === f); }); renderLog(); return; }
    if (e.target.closest("#burger")) { document.getElementById("navlinks").classList.toggle("open"); return; }
    if (e.target.closest("#navlinks a")) document.getElementById("navlinks").classList.remove("open");
    var g = e.target.closest("#gallery button");
    if (g) { var lb = document.getElementById("lightbox"); lb.querySelector("img").src = g.getAttribute("data-src"); lb.classList.add("open"); return; }
    var m = e.target.closest(".modal");
    if (m && (e.target === m || e.target.closest(".x") || e.target.closest(".close-modal"))) { m.classList.remove("open"); }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { document.querySelectorAll(".modal.open").forEach(function (m) { m.classList.remove("open"); }); closeLang(); } });
  function closeLang() { var b = document.getElementById("lang"); b.classList.remove("open"); b.querySelector("button").setAttribute("aria-expanded", "false"); }
  document.getElementById("q").addEventListener("input", function (e) { query = e.target.value; renderLog(); });

  // reveal on scroll
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });

  apply();
  // launch poster once per day
  try {
    var day = new Date().toISOString().slice(0, 10);
    if (!/nopop/.test(location.search) && localStorage.getItem("rm.poster") !== day) { document.getElementById("poster").classList.add("open"); localStorage.setItem("rm.poster", day); }
  } catch (e) {}
})();
