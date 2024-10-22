const viewData = {
    id: "codbex-hera-reports",
    label: "Report",
    lazyLoad: true,
    link: "/services/web/codbex-hera-reports/gen/employee-salaries/ui/Reports/index.html?embedded"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}