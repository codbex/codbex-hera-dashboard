const viewData = {
    id: "codbex-hera-teams",
    label: "Employees",
    lazyLoad: true,
    link: "/services/web/codbex-jobs/gen/codbex-jobs/ui/Teams/index.html?embedded"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}