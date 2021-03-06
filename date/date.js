!(function (e) {
    var t = {
            en: {
                name: "English",
                gregorian: !1,
                months: {
                    short: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
                    full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                },
                weekdays: { short: ["S", "M", "T", "W", "T", "F", "S"], full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] },
            },
            it: {
                name: "Italiano",
                gregorian: !0,
                months: {
                    short: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
                    full: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                },
                weekdays: { short: ["D", "L", "M", "M", "G", "V", "S"], full: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"] },
            },
            fr: {
                name: "Français",
                gregorian: !0,
                months: {
                    short: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"],
                    full: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                },
                weekdays: { short: ["D", "L", "M", "M", "J", "V", "S"], full: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"] },
            },
            zh: {
                name: "中文",
                gregorian: !0,
                months: {
                    short: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                    full: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                },
                weekdays: { short: ["天", "一", "二", "三", "四", "五", "六"], full: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] },
            },
            ar: {
                name: "العَرَبِيَّة",
                gregorian: !1,
                months: {
                    short: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                    full: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                },
                weekdays: { short: ["S", "M", "T", "W", "T", "F", "S"], full: ["الأحد", "الإثنين", "الثلثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"] },
            },
            hu: {
                name: "Hungarian",
                gregorian: !0,
                months: {
                    short: ["jan", "feb", "már", "ápr", "máj", "jún", "júl", "aug", "sze", "okt", "nov", "dec"],
                    full: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
                },
                weekdays: { short: ["v", "h", "k", "s", "c", "p", "s"], full: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"] },
            },
            gr: {
                name: "Ελληνικά",
                gregorian: !0,
                months: {
                    short: ["Ιαν", "Φεβ", "Μάρ", "Απρ", "Μάι", "Ιούν", "Ιούλ", "Αύγ", "Σεπ", "Οκτ", "Νοέ", "Δεκ"],
                    full: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
                },
                weekdays: { short: ["Κ", "Δ", "Τ", "Τ", "Π", "Π", "Σ"], full: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"] },
            },
            es: {
                name: "Español",
                gregorian: !0,
                months: {
                    short: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                    full: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                },
                weekdays: { short: ["D", "L", "M", "M", "J", "V", "S"], full: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"] },
            },
            da: {
                name: "Dansk",
                gregorian: !0,
                months: {
                    short: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                    full: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"],
                },
                weekdays: { short: ["s", "m", "t", "o", "t", "f", "l"], full: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"] },
            },
            de: {
                name: "Deutsch",
                gregorian: !0,
                months: {
                    short: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                    full: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                },
                weekdays: { short: ["S", "M", "D", "M", "D", "F", "S"], full: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"] },
            },
            nl: {
                name: "Nederlands",
                gregorian: !0,
                months: {
                    short: ["jan", "feb", "maa", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                    full: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                },
                weekdays: { short: ["z", "m", "d", "w", "d", "v", "z"], full: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"] },
            },
            pl: {
                name: "język polski",
                gregorian: !0,
                months: {
                    short: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
                    full: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
                },
                weekdays: { short: ["n", "p", "w", "ś", "c", "p", "s"], full: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"] },
            },
            pt: {
                name: "Português",
                gregorian: !0,
                months: {
                    short: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    full: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                },
                weekdays: { short: ["D", "S", "T", "Q", "Q", "S", "S"], full: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"] },
            },
            si: {
                name: "Slovenščina",
                gregorian: !0,
                months: {
                    short: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"],
                    full: ["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"],
                },
                weekdays: { short: ["n", "p", "t", "s", "č", "p", "s"], full: ["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"] },
            },
            uk: {
                name: "українська мова",
                gregorian: !0,
                months: {
                    short: ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"],
                    full: ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"],
                },
                weekdays: { short: ["н", "п", "в", "с", "ч", "п", "с"], full: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"] },
            },
            ru: {
                name: "русский язык",
                gregorian: !0,
                months: {
                    short: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
                    full: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
                },
                weekdays: { short: ["в", "п", "в", "с", "ч", "п", "с"], full: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"] },
            },
            tr: {
                name: "Türkçe",
                gregorian: !0,
                months: { short: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"], full: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"] },
                weekdays: { short: ["P", "P", "S", "Ç", "P", "C", "C"], full: ["Pazar", "Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"] },
            },
            ko: {
                name: "조선말",
                gregorian: !0,
                months: { short: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], full: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"] },
                weekdays: { short: ["일", "월", "화", "수", "목", "금", "토"], full: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"] },
            },
            fi: {
                name: "suomen kieli",
                gregorian: !0,
                months: {
                    short: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
                    full: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
                },
                weekdays: { short: ["S", "M", "T", "K", "T", "P", "L"], full: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"] },
            },
        },
        a = {},
        r = null,
        n = null,
        l = null,
        s = null,
        c = !1;
    if (
        ((is_touch = function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? !0 : !1;
        }),
        (is_fx_mobile = function () {
            r && a[r.id].fx && !a[r.id].fxmobile && (e(window).width() < 480 ? r.element.removeClass("picker-fxs") : r.element.addClass("picker-fxs"));
        }),
        (is_locked = function () {
            var e = get_unix(get_current_full()),
                t = get_unix(get_today_full());
            return a[r.id].lock
                ? "from" == a[r.id].lock
                    ? t > e
                        ? (picker_alrt(), r.element.addClass("picker-lkd"), !0)
                        : (r.element.removeClass("picker-lkd"), !1)
                    : "to" == a[r.id].lock
                    ? e > t
                        ? (picker_alrt(), r.element.addClass("picker-lkd"), !0)
                        : (r.element.removeClass("picker-lkd"), !1)
                    : void 0
                : (r.element.removeClass("picker-lkd"), !1);
        }),
        (is_int = function (e) {
            return e % 1 === 0;
        }),
        (is_date = function (e) {
            return "Invalid Date" !== new Date(e) && !isNaN(new Date(e));
        }),
        (get_current = function (e) {
            return parseInt(a[r.id].key[e].current);
        }),
        (get_today = function (e) {
            return parseInt(a[r.id].key[e].today);
        }),
        (get_today_full = function () {
            return get_today("m") + "/" + get_today("d") + "/" + get_today("y");
        }),
        (get_current_full = function () {
            return get_current("m") + "/" + get_current("d") + "/" + get_current("y");
        }),
        (get_jumped = function (e, t) {
            for (var i = [], n = a[r.id].key[e], l = n.min; l <= n.max; l++) l % t == 0 && i.push(l);
            return i;
        }),
        (get_closest_jumped = function (e, t) {
            for (var a = t[0], i = Math.abs(e - a), r = 0; r < t.length; r++) {
                var n = Math.abs(e - t[r]);
                i > n && ((i = n), (a = t[r]));
            }
            return a;
        }),
        (get_clear = function (e, t) {
            var i = a[r.id].key[e];
            return t > i.max ? get_clear(e, t - i.max + (i.min - 1)) : t < i.min ? get_clear(e, t + 1 + (i.max - i.min)) : t;
        }),
        (get_days_array = function () {
            return t[a[r.id].lang].gregorian ? [1, 2, 3, 4, 5, 6, 0] : [0, 1, 2, 3, 4, 5, 6];
        }),
        (get_ul = function (e) {
            return get_picker_els('ul.pick[data-k="' + e + '"]');
        }),
        (get_eq = function (t, a) {
            ul = get_ul(t);
            var i = [];
            return (
                ul.find("li").each(function () {
                    i.push(e(this).attr("value"));
                }),
                "last" == a ? i[i.length - 1] : i[0]
            );
        }),
        (get_picker_els = function (e) {
            return r ? r.element.find(e) : void 0;
        }),
        (get_unix = function (e) {
            return Date.parse(e) / 1e3;
        }),
        (picker_large_onoff = function () {
            a[r.id].large && (r.element.toggleClass("picker-lg"), picker_render_calendar());
        }),
        (picker_translate_onoff = function () {
            get_picker_els("ul.pick.pick-l").toggleClass("visible");
        }),
        (picker_offset = function () {
            var e = r.input,
                t = e.offset().left + e.outerWidth() / 2,
                a = e.offset().top + e.outerHeight();
            r.element.css({ left: t, top: a });
        }),
        (picker_translate = function (e) {
            (a[r.id].lang = Object.keys(t)[e]), picker_set_lang(), picker_set();
        }),
        (picker_set_lang = function () {
            var i = get_days_array();
            get_picker_els(".pick-lg .pick-lg-h li").each(function (n) {
                e(this).html(t[a[r.id].lang].weekdays.short[i[n]]);
            }),
                get_picker_els("ul.pick.pick-m li").each(function () {
                    e(this).html(t[a[r.id].lang].months.short[e(this).attr("value") - 1]);
                });
        }),
        (picker_show = function () {
            r.element.addClass("picker-focus");
        }),
        (picker_hide = function () {
            is_locked() || (r.element.removeClass("picker-focus"), (r = null));
        }),
        (picker_render_ul = function (n) {
            var l = get_ul(n),
                s = a[r.id].key[n];
            for (a[r.id].key[n].current = (s.today < s.min && s.min) || s.today, i = s.min; i <= s.max; i++) {
                var o = i;
                "m" == n && (o = t[a[r.id].lang].months.short[i - 1]), "l" == n && (o = t[Object.keys(t)[i]].name), (o += "d" == n ? "<span></span>" : ""), e("<li>", { value: i, html: o }).appendTo(l);
            }
            e("<div>", { class: "pick-arw pick-arw-s1 pick-arw-l", html: e("<i>", { class: "pick-i-l" }) }).appendTo(l),
                e("<div>", { class: "pick-arw pick-arw-s1 pick-arw-r", html: e("<i>", { class: "pick-i-r" }) }).appendTo(l),
                "y" == n &&
                    (e("<div>", { class: "pick-arw pick-arw-s2 pick-arw-l", html: e("<i>", { class: "pick-i-l" }) }).appendTo(l), e("<div>", { class: "pick-arw pick-arw-s2 pick-arw-r", html: e("<i>", { class: "pick-i-r" }) }).appendTo(l)),
                picker_ul_transition(n, get_current(n));
        }),
        (picker_render_calendar = function () {
            var e = 0,
                i = get_picker_els(".pick-lg-b");
            i.find("li").empty().removeClass("pick-n pick-b pick-a pick-v pick-lk pick-sl pick-h").attr("data-value", "");
            var n = (new Date(get_current_full()), new Date(get_current_full())),
                l = new Date(get_current_full()),
                s = function (e) {
                    var t = e.getMonth(),
                        a = e.getFullYear(),
                        i = a % 4 == 0 && (a % 100 != 0 || a % 400 == 0);
                    return [31, i ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t];
                };
            l.setMonth(l.getMonth() - 1), n.setDate(1);
            var o = n.getDay() - 1;
            0 > o && (o = 6), t[a[r.id].lang].gregorian && (o--, 0 > o && (o = 6));
            for (var c = s(l) - o; c <= s(l); c++) i.find("li").eq(e).html(c).addClass("pick-b pick-n pick-h"), e++;
            for (var c = 1; c <= s(n); c++) i.find("li").eq(e).html(c).addClass("pick-n pick-v").attr("data-value", c), e++;
            if (i.find("li.pick-n").length < 42) for (var u = 42 - i.find("li.pick-n").length, c = 1; u >= c; c++) i.find("li").eq(e).html(c).addClass("pick-a pick-n pick-h"), e++;
            a[r.id].lock &&
                ("from" === a[r.id].lock
                    ? get_current("y") <= get_today("y") &&
                      (get_current("m") == get_today("m")
                          ? get_picker_els('.pick-lg .pick-lg-b li.pick-v[data-value="' + get_today("d") + '"]')
                                .prevAll("li")
                                .addClass("pick-lk")
                          : get_current("m") < get_today("m")
                          ? get_picker_els(".pick-lg .pick-lg-b li").addClass("pick-lk")
                          : get_current("m") > get_today("m") && get_current("y") < get_today("y") && get_picker_els(".pick-lg .pick-lg-b li").addClass("pick-lk"))
                    : get_current("y") >= get_today("y") &&
                      (get_current("m") == get_today("m")
                          ? get_picker_els('.pick-lg .pick-lg-b li.pick-v[data-value="' + get_today("d") + '"]')
                                .nextAll("li")
                                .addClass("pick-lk")
                          : get_current("m") > get_today("m")
                          ? get_picker_els(".pick-lg .pick-lg-b li").addClass("pick-lk")
                          : get_current("m") < get_today("m") && get_current("y") > get_today("y") && get_picker_els(".pick-lg .pick-lg-b li").addClass("pick-lk")));
        }),
        (picker_fills = function () {
            var i = get_current("m"),
                n = get_current("y"),
                l = n % 4 == 0 && (n % 100 != 0 || n % 400 == 0);
            (a[r.id].key.d.max = [31, l ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][i - 1]),
                get_current("d") > a[r.id].key.d.max && ((a[r.id].key.d.current = a[r.id].key.d.max), picker_ul_transition("d", get_current("d"))),
                get_picker_els(".pick-d li")
                    .removeClass("pick-wke")
                    .each(function () {
                        var l = new Date(i + "/" + e(this).attr("value") + "/" + n).getDay();
                        e(this).find("span").html(t[a[r.id].lang].weekdays.full[l]), (0 == l || 6 == l) && e(this).addClass("pick-wke");
                    }),
                r.element.hasClass("picker-lg") &&
                    (get_picker_els(".pick-lg-b li").removeClass("f l pick-wke pick-sl"),
                    get_picker_els(".pick-lg-b li.pick-v").each(function () {
                        var t = new Date(i + "/" + e(this).attr("data-value") + "/" + n).getDay();
                        (0 == t || 6 == t) && e(this).addClass("pick-wke");
                    }),
                    get_picker_els(".pick-lg-b li.pick-v[data-value=" + get_current("d") + "]").addClass("pick-sl"));
        }),
        (picker_set = function () {
            r.element.hasClass("picker-lg") && picker_render_calendar(), picker_fills(), input_change_value();
        }),
        (picker_ul_transition = function (e, t) {
            var a = get_ul(e);
            if ((a.find("li").removeClass("pick-sl pick-bfr pick-afr"), t == get_eq(e, "last"))) {
                var i = a.find('li[value="' + get_eq(e, "first") + '"]');
                i.clone().insertAfter(a.find("li[value=" + t + "]")), i.remove();
            }
            if (t == get_eq(e, "first")) {
                var i = a.find('li[value="' + get_eq(e, "last") + '"]');
                i.clone().insertBefore(a.find("li[value=" + t + "]")), i.remove();
            }
            a.find("li[value=" + t + "]").addClass("pick-sl"), a.find("li.pick-sl").nextAll("li").addClass("pick-afr"), a.find("li.pick-sl").prevAll("li").addClass("pick-bfr");
        }),
        (picker_values_increase = function (e, t) {
            var i = a[r.id].key[e];
            t > i.max && ("d" == e && picker_ul_turn("m", "right"), "m" == e && picker_ul_turn("y", "right"), (t = i.min)),
                t < i.min && ("d" == e && picker_ul_turn("m", "left"), "m" == e && picker_ul_turn("y", "left"), (t = i.max)),
                (a[r.id].key[e].current = t),
                picker_ul_transition(e, t);
        }),
        (picker_ul_turn = function (e, t) {
            var a = get_current(e);
            "right" == t ? a++ : a--, picker_values_increase(e, a);
        }),
        (picker_alrt = function () {
            r.element.addClass("picker-rmbl");
        }),
        (input_fill = function (e) {
            return 10 > e ? "0" + e : e;
        }),
        (input_ordinal_suffix = function (e) {
            var t = ["th", "st", "nd", "rd"],
                a = e % 100;
            return e + (t[(a - 20) % 10] || t[a] || t[0]);
        }),
        (input_change_value = function () {
            var e = get_current("d"),
                i = get_current("m"),
                n = get_current("y"),
                l = new Date(i + "/" + e + "/" + n).getDay();
            if (!is_locked()) {
                var s = a[r.id].format
                    .replace(/\b(d)\b/g, input_fill(e))
                    .replace(/\b(m)\b/g, input_fill(i))
                    .replace(/\b(S)\b/g, input_ordinal_suffix(e))
                    .replace(/\b(Y)\b/g, n)
                    .replace(/\b(U)\b/g, get_unix(get_current_full()))
                    .replace(/\b(D)\b/g, t[a[r.id].lang].weekdays.short[l])
                    .replace(/\b(l)\b/g, t[a[r.id].lang].weekdays.full[l])
                    .replace(/\b(F)\b/g, t[a[r.id].lang].months.full[i - 1])
                    .replace(/\b(M)\b/g, t[a[r.id].lang].months.short[i - 1])
                    .replace(/\b(n)\b/g, i)
                    .replace(/\b(j)\b/g, e);
                r.input.val(s).change();
            }
        }),
        is_touch())
    )
        var u = { i: "touchstart", m: "touchmove", e: "touchend" };
    else var u = { i: "mousedown", m: "mousemove", e: "mouseup" };
    var d = "div.datedropper.picker-focus";
    e(document)
        .on("click", function (e) {
            r && (r.input.is(e.target) || r.element.is(e.target) || 0 !== r.element.has(e.target).length || (picker_hide(), (n = null)));
        })
        .on("webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend", d + ".picker-rmbl", function () {
            r.element.hasClass("picker-rmbl") && e(this).removeClass("picker-rmbl");
        })
        .on(u.i, d + " .pick-lg li.pick-v", function () {
            get_picker_els(".pick-lg-b li").removeClass("pick-sl"), e(this).addClass("pick-sl"), (a[r.id].key.d.current = e(this).attr("data-value")), picker_ul_transition("d", e(this).attr("data-value"));
        })
        .on("click", d + " .pick-btn-sz", function () {
            picker_large_onoff();
        })
        .on("click", d + " .pick-btn-lng", function () {
            picker_translate_onoff();
        })
        .on(u.i, d + " .pick-arw.pick-arw-s2", function (t) {
            t.preventDefault(), (n = null);
            var i,
                l = (e(this).closest("ul").data("k"), a[r.id].jump);
            i = e(this).hasClass("pick-arw-r") ? get_current("y") + l : get_current("y") - l;
            var s = get_jumped("y", l);
            i > s[s.length - 1] && (i = s[0]), i < s[0] && (i = s[s.length - 1]), (a[r.id].key.y.current = i), picker_ul_transition("y", get_current("y"));
        })
        .on(u.i, d + " .pick-arw.pick-arw-s1", function (t) {
            t.preventDefault(), (n = null);
            var a = e(this).closest("ul").data("k");
            e(this).hasClass("pick-arw-r") ? picker_ul_turn(a, "right") : picker_ul_turn(a, "left");
        })
        .on(u.i, d + " ul.pick.pick-y li", function () {
            c = !0;
        })
        .on(u.e, d + " ul.pick.pick-y li", function () {
            if (c) {
                e(this).closest("ul").toggleClass("pick-jump");
                var t = get_closest_jumped(get_current("y"), get_jumped("y", a[r.id].jump));
                (a[r.id].key.y.current = t), picker_ul_transition("y", get_current("y")), (c = !1);
            }
        })
        .on(u.i, d + " ul.pick.pick-d li", function () {
            c = !0;
        })
        .on(u.e, d + " ul.pick.pick-d li", function () {
            c && (picker_large_onoff(), (c = !1));
        })
        .on(u.i, d + " ul.pick.pick-l li", function () {
            c = !0;
        })
        .on(u.e, d + " ul.pick.pick-l li", function () {
            c && (picker_translate_onoff(), picker_translate(e(this).val()), (c = !1));
        })
        .on(u.i, d + " ul.pick", function (t) {
            if ((n = e(this))) {
                var a = n.data("k");
                (l = is_touch() ? t.originalEvent.touches[0].pageY : t.pageY), (s = get_current(a));
            }
        })
        .on(u.m, function (e) {
            if (((c = !1), n)) {
                e.preventDefault();
                var t = n.data("k");
                (o = is_touch() ? e.originalEvent.touches[0].pageY : e.pageY), (o = l - o), (o = Math.round(0.026 * o)), (i = s + o);
                var u = get_clear(t, i);
                u != a[r.id].key[t].current && picker_values_increase(t, u);
            }
        })
        .on(u.e, function () {
            n && ((n = null), (l = null), (s = null)), r && picker_set();
        })
        .on(u.i, d + " .pick-submit", function () {
            picker_hide();
        }),
        e(window).resize(function () {
            r && (picker_offset(), is_fx_mobile());
        }),
        (e.fn.dateDropper = function () {
            return e(this).is("input")
                ? e(this)
                      .each(function (i) {
                          var n = e(this),
                              l = "datedropper-" + i;
                          n.attr("data-id", l).addClass("picker-input").prop({ type: "text", readonly: !0 });
                          var s = n.data("default-date") && is_date(n.data("default-date")) ? n.data("default-date") : null,
                              o = n.data("format") || "m/d/Y",
                              c = n.data("fx") === !1 ? n.data("fx") : !0,
                              u = n.data("fx") === !1 ? "" : "picker-fxs",
                              d = n.data("fx-mobile") === !1 ? n.data("fx-mobile") : !0,
                              k = n.data("init-set") === !1 ? !1 : !0,
                              p = n.data("lang") && n.data("lang") in t ? n.data("lang") : "en",
                              g = n.data("large-mode") === !0 ? !0 : !1,
                              m = n.data("large-default") === !0 && g === !0 ? "picker-lg" : "",
                              _ = "from" == n.data("lock") || "to" == n.data("lock") ? n.data("lock") : !1,
                              f = n.data("jump") && is_int(n.data("jump")) ? n.data("jump") : 10,
                              h = n.data("max-year") && is_int(n.data("max-year")) ? n.data("max-year") : new Date().getFullYear(),
                              y = n.data("min-year") && is_int(n.data("min-year")) ? n.data("min-year") : 1920,
                              v = n.data("theme") || "primary",
                              b = n.data("translate-mode") === !0 ? !0 : !1;
                          if (
                              ((a[l] = {
                                  format: o,
                                  fx: c,
                                  fxmobile: d,
                                  lang: p,
                                  large: g,
                                  lock: _,
                                  jump: f,
                                  key: {
                                      m: { min: 1, max: 12, current: 1, today: new Date().getMonth() + 1 },
                                      d: { min: 1, max: 31, current: 1, today: new Date().getDate() },
                                      y: { min: y, max: h, current: y, today: new Date().getFullYear() },
                                      l: { min: 0, max: Object.keys(t).length - 1, current: 0, today: 0 },
                                  },
                                  translate: b,
                              }),
                              s)
                          ) {
                              var w = /\d+/g,
                                  M = s,
                                  j = M.match(w);
                              e.each(j, function (e, t) {
                                  j[e] = parseInt(t);
                              }),
                                  (a[l].key.m.today = j[0] && j[0] <= 12 ? j[0] : a[l].key.m.today),
                                  (a[l].key.d.today = j[1] && j[1] <= 31 ? j[1] : a[l].key.d.today),
                                  (a[l].key.y.today = j[2] ? j[2] : a[l].key.y.today),
                                  a[l].key.y.today > a[l].key.y.max && (a[l].key.y.max = a[l].key.y.today),
                                  a[l].key.y.today < a[l].key.y.min && (a[l].key.y.min = a[l].key.y.today);
                          }
                          e("<div>", { class: "datedropper " + v + " " + u + " " + m, id: l, html: e("<div>", { class: "picker" }) }).appendTo("body"), (r = { id: l, input: n, element: e("#" + l) });
                          for (var D in a[l].key) e("<ul>", { class: "pick pick-" + D, "data-k": D }).appendTo(get_picker_els(".picker")), picker_render_ul(D);
                          if (a[l].large) {
                              e("<div>", { class: "pick-lg" }).insertBefore(get_picker_els(".pick-d")), e('<ul class="pick-lg-h"></ul><ul class="pick-lg-b"></ul>').appendTo(get_picker_els(".pick-lg"));
                              for (var C = get_days_array(), x = 0; 7 > x; x++) e("<li>", { html: t[a[r.id].lang].weekdays.short[C[x]] }).appendTo(get_picker_els(".pick-lg .pick-lg-h"));
                              for (var x = 0; 42 > x; x++) e("<li>").appendTo(get_picker_els(".pick-lg .pick-lg-b"));
                          }
                          e("<div>", { class: "pick-btns" }).appendTo(get_picker_els(".picker")),
                              e("<div>", { class: "pick-submit" }).appendTo(get_picker_els(".pick-btns")),
                              a[r.id].translate && e("<div>", { class: "pick-btn pick-btn-lng" }).appendTo(get_picker_els(".pick-btns")),
                              a[r.id].large && e("<div>", { class: "pick-btn pick-btn-sz" }).appendTo(get_picker_els(".pick-btns")),
                              ("Y" == o || "m" == o) &&
                                  (get_picker_els(".pick-d,.pick-btn-sz").hide(), r.element.addClass("picker-tiny"), "Y" == o && get_picker_els(".pick-m,.pick-btn-lng").hide(), "m" == o && get_picker_els(".pick-y").hide()),
                              k && input_change_value(),
                              (r = null);
                      })
                      .focus(function (t) {
                          t.preventDefault(), e(this).blur(), r && picker_hide(), (r = { id: e(this).data("id"), input: e(this), element: e("#" + e(this).data("id")) }), picker_offset(), is_fx_mobile(), picker_set(), picker_show();
                      })
                : void 0;
        });
})(jQuery);

