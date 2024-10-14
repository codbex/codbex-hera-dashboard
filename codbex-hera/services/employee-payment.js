const viewData = {
    id: "codbex-hera-employee-payment",
    label: "EmployeePayment",
    lazyLoad: true,
    link: "/services/web/codbex-payments/gen/codbex-payments/ui/EmployeePayment/index.html?embedded"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}