const viewData = {
    id: "codbex-hera-salaries",
    label: "Salaries",
    lazyLoad: true,
    link: "/services/web/codbex-salaries/gen/codbex-salaries/ui/Salaries/index.html?embedded"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}