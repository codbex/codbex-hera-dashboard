const perspectiveData = {
    id: "codbex-hera-launchpad",
    name: "Hera",
    link: "../codbex-hera/index.html",
    order: "0",
    icon: "../codbex-hera/images/navigation.svg",
};

if (typeof exports !== 'undefined') {
    exports.getPerspective = function () {
        return perspectiveData;
    }
}