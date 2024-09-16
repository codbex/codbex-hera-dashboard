const viewData = {
    id: "codbex-hera-employee-contracts",
    label: "Employee Contracts",
    lazyLoad: true,
    link: "/services/web/codbex-contracts/gen/codbex-contracts/ui/EmployeeContracts/index.html?embedded"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}