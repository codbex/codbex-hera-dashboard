const viewData = {
    id: "codbex-hera-contracts",
    label: "Contracts",
    lazyLoad: true,
    link: "/services/web/codbex-contracts/gen/codbex-contracts/ui/Contract/index.html?embedded"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}