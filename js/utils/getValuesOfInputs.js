import { getProperties } from "../services/PropertiesServices.js";

let query = {
	page: 1,
	limit: 10,
	realtorId: 5,
	statusId: 5,
	operationType: "venta",
	typeOfProperty: "casa",
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
//Guardo referencia a todos los inputs del filtro

var rad = document.myForm.flexRadioDefault;
var prev = null;
for (var i = 0; i < rad.length; i++) {
	rad[i].addEventListener("change", function () {
		prev ? console.log(prev.value) : null;
		if (this !== prev) {
			prev = this;
		}
		query.operationType = prev.value;
	});
}

var rad2 = document.myForm1?.flexRadioDefault;
var prev = null;
for (var i = 0; i < rad2?.length; i++) {
	rad2[i].addEventListener("change", function () {
		prev ? console.log(prev.value) : null;
		if (this !== prev) {
			prev = this;
		}
		query.currency = prev.value;
	});
}

document
	.getElementById("typeOfProperty")
	.addEventListener("change", (element) => {
		query.typeOfProperty = element.target.value;
	});

document.getElementById("region").addEventListener("change", (element) => {
	query.region = element.target.value;
});

document.getElementById("commune").addEventListener("change", (element) => {
	query.commune = element.target.value;
});

document.getElementById("min_price").addEventListener("change", (element) => {
	query.min_price = element.target.value;
});

document.getElementById("max_price").addEventListener("change", (element) => {
	query.max_price = element.target.value;
});

document.getElementById("bathrooms").addEventListener("change", (element) => {
	query.bathrooms = element.target.value;
});

document.getElementById("bedrooms").addEventListener("change", (element) => {
	query.bedrooms = element.target.value;
});

document.getElementById("surface_m2").addEventListener("change", (element) => {
	query.surface_m2 = element.target.value;
});

document
	.getElementById("uncovered_parking_lots")
	.addEventListener("change", (element) => {
		query.uncovered_parking_lots = element.target.value;
	});

//Referencia al boton de buscar para comenzar la busqueda al hacer click
document.getElementById("buscar")?.addEventListener("click", async () => {
	window.open(
		window.location.origin +
			`/properties.html?page=${query.page}&limit=${query.limit}&realtorId=${query.realtorId}&statusId=${query.statusId}&operationType=${query.operationType}&typeOfProperty=${query.typeOfProperty}&region=${query.region}&commune=${query.commune}&min_price=${query.min_price}&max_price=${query.max_price}&covered_parking_lots=${query.covered_parking_lots}&bathrooms=${query.bathrooms}&surface_m2=${query.surface_m2}&bedrooms=${query.bedrooms}`
	);
});

document.getElementById("buscar2")?.addEventListener("click", async () => {
	document.getElementById(
		"buscar2"
	).innerHTML = `    	<div class="spinner-border" role="status">
		<span class="visually-hidden">Loading...</span>
	</div>`;
	let { data, meta } = await getProperties(...Object.values(query));
	console.log(meta);
	document.getElementById(
		"totalItems"
	).innerHTML = `${meta.totalItems} Propiedades encontradas
	</div>`;
	setTimeout(() => {
		document.getElementById("buscar2").innerHTML = `Buscar`;
		window.scroll({
			top: 500,

			behavior: "smooth",
		});

		document.getElementById("container-cards").innerHTML = data
			.map(
				(data) => `
			<div class="col-xs-12 col-md-6 col-lg-4 carta-grilla" style>
				<div class="property-item text-center" >
					<a href="property-single.html?id=${data.id} " class="img" style="max-height: 400px; min-height: 400px">
						<img src="${data.image}" alt="Image" class="img-fluid"  width="500" height="600">
					</a>

					<div class="property-content border">
						<p style="margin-bottom: 0;"> <i class="fa fa-map-marker fa-lg"></i> ${data.commune}</p>
						<span class="city d-block mb-3" style="font-weight: bold;font-size: 30px;">${data.region}</span>

						<div class="" style="border-top: 2px solid gray;">
									
						<div class="row p-3 ">
							<div class="col-5 hr-l">
								<div class="row ">
									<div class="col-12">Dormitorios</div>
									<div class="col-12">3</div>

								</div>
									
							</div>
							<div class="col-3 hr-l">
								<div class="row ">
									<div class="col-12">UF</div>
									<div class="col-12">3600</div>

								</div>
							</div>
							<div class="col-4">
								<div class="row">
									<div class="col-12">M2</div>
									<div class="col-12">77</div>
								</div>
							</div>
						</div>
					</div>
					</div>
				</div>
			</div> `
			)
			.join("");
	}, 3000);
});

//Buscar en pagina index

//Hacemos referencia al div que va a contener lo elementos a <li> a paginar
