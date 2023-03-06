import { getProperties } from "../services/PropertiesServices.js";

export default async function apiCall() {
	let { data, meta } = await getProperties();
	console.log(data);
	console.log(meta);

	document.getElementById("carousel_").innerHTML = data
		.map(
			(data) => `				
  <li class="splide__slide" style="width: 550px">		
  <div class="property-item mb-30">
					

  <div class="border" style="background-image: url('${data.image}')">
    <div class="shadow-properties m-3">
      <a href="property-single.html" class="img">
        <div class="property-content text-center" >
          <div class="card-body">
            <p class=" "> <i class="fa fa-map-marker fa-lg  p-1"></i> Puerto Montt</p>
            <h3 class="card-title" style="font-weight: bold;">${
							data.city ? data.city : "?"
						}</h3>
            <hr width="100%" size="5"  ></hr>
            <div class="row">
              <div class="col-4">
                <div class="row">
                  <div class="col-12"><h5>Hab</h5></div>
                  <div class="col-12">3</div>
                </div>
              </div>
              <div class="col-4">
                <div class="row">
                  <div class="col-12"><h5>UF</h5></div>
                  <div class="col-12">3650</div>
                </div>
              </div>
              <div class="col-4">
                <div class="row">
                  <div class="col-12"><h5>M2</h5></div>
                  <div class="col-12">77</div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </a>
    </div>
  </div>

</div>   </li >`
		)
		.join("");

	var splide = new Splide(".splide", {
		type: "loop",
		autoplay: "play",
		perPage: 3,
	});

	splide.mount();
}
document.addEventListener("DOMContentLoaded", function () {
	var splide = new Splide(".splide");
	splide.mount();
});
apiCall();
