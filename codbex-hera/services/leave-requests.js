const viewData = {
    id: "codbex-hera-leave-requests",
    label: "Jobs",
    lazyLoad: true,
    link: "/services/web/codbex-vacations/gen/codbex-vacations/ui/LeaveRequests/index.html?embedded"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}