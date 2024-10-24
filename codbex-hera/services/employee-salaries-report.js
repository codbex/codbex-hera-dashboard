const viewData = {
    id: "codbex-hera-employee-salaries-report",
    label: "Report",
    lazyLoad: true,
    link: "/services/web/codbex-hera-employee-salaries-report/gen/employee-salaries-report/ui/Reports/index.html?embedded"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}