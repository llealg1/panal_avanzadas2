import { getProperties } from "../services/PropertiesServices.js";

let query = {
	page: 1,
	limit: 10,
	realtorId: 5,
	statusId: 5,
	operationType: "venta",
	typeOfProperty: "",
	region: "",
	commune: "",
	min_price: 0,
	max_price: 10000000000000,
	covered_parking_lots: 1,
	bathrooms: 1,
	surface_m2: "",
	bedrooms: 1,
};

let aux = new URLSearchParams(window.location.search);

for (let p of aux) {
	query[`${p[0]}`] = p[1];
}

var rad = document.myForm.flexRadioDefault;
for (var i = 0; i < rad.length; i++) {
	if (query.operationType == rad[i].value) rad[i].checked = true;
}

var rad1 = document.myForm1.flexRadioDefault;
for (var i = 0; i < rad1.length; i++) {
	if (query.currency == rad1[i].value) rad1[i].checked = true;
}

document.getElementById("typeOfProperty").value = query.typeOfProperty;
document.getElementById("bedrooms").value = query.bedrooms;
document.getElementById("commune").value = query.commune;
document.getElementById("region").value = query.region;
document.getElementById("bathrooms").value = query.bathrooms;
document.getElementById("surface_m2").value = query.surface_m2;
document.getElementById("min_price").value = query.surface_m2;
document.getElementById("max_price").value = query.max_price;
document.getElementById("surface_m2").value = query.surface_m2;
document.getElementById("uncovered_parking_lots").value =
	query.covered_parking_lots;

document.getElementById("buscar2").click();
