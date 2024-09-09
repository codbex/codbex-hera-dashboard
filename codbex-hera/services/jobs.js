const viewData = {
    id: "codbex-hera-jobs",
    label: "Jobs",
    lazyLoad: true,
    link: "/services/web/codbex-jobs/gen/codbex-jobs/ui/JobAssignment/index.html?embedded"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}