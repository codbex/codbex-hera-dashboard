const viewData = {
    id: "codbex-hera-organizations",
    label: "Companies",
    lazyLoad: true,
    link: "/services/web/codbex-organizations/gen/codbex-organizations/ui/Organizations/index.html?embedded"
};
if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}