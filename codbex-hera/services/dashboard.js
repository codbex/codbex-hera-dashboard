const viewData = {
    id: "codbex-hera-dashboard",
    label: "Dashboard",
    lazyLoad: true,
    link: "/services/web/codbex-hera/subviews/dashboard.html"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}