import { getPropertiesForId } from "../services/PropertiesServices.js";

export default async function apiCallId() {
	let { data, meta } = await getPropertiesForId(
		window.location.search.split("=")[1]
	);

	console.log(data);
	document.getElementById(
		"operation"
	).innerHTML = `	<h1 class="heading " style="font-weight: bold; color: #4D4D4D;">${
		data.title
	}</h1>
  <p>REF:123456</p>
  <p>
    <i class="fa fa-map-marker "  aria-hidden="true"></i>
    ${data.city} #${window.location.search.split("=")[1]}, ${data?.address}
  </p>`;

	document.getElementById(
		"price"
	).innerHTML = `	<div class="col-12" style="display: flex;justify-content: right;">
  <b>
    <h2 style="font-weight: bold; color: #4D4D4D;">Venta</h2>
    <h1 class="heading " style="font-weight: bold; color: #4D4D4D;">${data.currency.name} ${data.price}</h1>
  </b>
</div>
<div class="col-12" style="display: flex;justify-content: right;">

</div>`;

	document.getElementById("slider-img").innerHTML = data.images
		.map(
			(elem) =>
				`<div class="img overlay" style="background-image: url('${elem}');
        "></div>`
		)
		.join("");

	document.getElementById("description").innerHTML = `${data.title}`;
	document.getElementById(
		"generalDescription"
	).innerHTML = `${data.description}`;

	document.getElementById("datas").innerHTML = `
  <div class="col-12">
  <div class="row " style="font-size: 40px;">
    <div class="col-6 text-end">
      <i class="fa fa-bed  "  aria-hidden="true"></i>
    </div>
    <div class="col-6 text-start">
      ${data.bedrooms}
    </div>
  </div>
</div>
<div class="col-12">
  <div class="row " style="font-size: 40px;">
    <div class="col-6 text-end">
      <i class="fa fa-bath  "  aria-hidden="true"></i>
    </div>
    <div class="col-6">
      ${data.bathrooms}
    </div>
  </div>
</div>
<div class="col-12">
  <div class="row " style="font-size: 40px;">
    <div class="col-6 text-end">
      <i class="fa fa-car  "  aria-hidden="true"></i>
    </div>
    <div class="col-6">
      ${data.uncoveredParkingLots}
    </div>
  </div>
</div>
<div class="col-12">
  <div class="row " style="font-size: 40px;">
    <div class="col-6 text-end">
      <i class="fa fa-ruler  "  aria-hidden="true"></i>
    </div>
    <div class="col-6">
      ${data.surface_m2}
    </div>
  </div>
</div>
  `;

	document.getElementById(
		"nameRealtor"
	).innerHTML = `${data.realtor.name} ${data.realtor.lastName}`;
}

apiCallId();
