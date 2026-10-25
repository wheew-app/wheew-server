"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingAreaType = exports.DisabledFacilityLocation = exports.ParkingCost = exports.ParkingType = void 0;
var ParkingType;
(function (ParkingType) {
    ParkingType["SPOT"] = "SPOT";
    ParkingType["STREET"] = "STREET";
    ParkingType["GARAGE"] = "GARAGE";
    ParkingType["LOT"] = "LOT";
})(ParkingType || (exports.ParkingType = ParkingType = {}));
var ParkingCost;
(function (ParkingCost) {
    ParkingCost["FREE"] = "FREE";
    ParkingCost["PAID"] = "PAID";
})(ParkingCost || (exports.ParkingCost = ParkingCost = {}));
var DisabledFacilityLocation;
(function (DisabledFacilityLocation) {
    DisabledFacilityLocation["ALL"] = "ALL";
    DisabledFacilityLocation["BACK"] = "BACK";
    DisabledFacilityLocation["LEFT"] = "LEFT";
    DisabledFacilityLocation["RIGHT"] = "RIGHT";
    DisabledFacilityLocation["NONE"] = "NONE";
})(DisabledFacilityLocation || (exports.DisabledFacilityLocation = DisabledFacilityLocation = {}));
var ParkingAreaType;
(function (ParkingAreaType) {
    ParkingAreaType["ELECTRIC_CHARGING"] = "ELECTRIC_CHARGING";
    ParkingAreaType["DISABLED_FACILITY"] = "DISABLED_FACILITY";
})(ParkingAreaType || (exports.ParkingAreaType = ParkingAreaType = {}));
//# sourceMappingURL=parking.enum.js.map