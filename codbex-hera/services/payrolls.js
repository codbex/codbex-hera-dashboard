const viewData = {
    id: "codbex-hera-payrolls",
    label: "Payrolls",
    lazyLoad: true,
    link: "/services/web/codbex-payrolls/gen/codbex-payrolls/ui/Payrolls/index.html?embedded"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}