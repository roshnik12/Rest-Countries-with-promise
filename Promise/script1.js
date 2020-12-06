// Receiving the data from the promise //
function countries(restCountriesInfo) {
    const container = createEle("div", "container-fluid");
    const row = createEle("div", "row");
    const column = createEle("div", "col-12 restCountriesInfo");

// attaching a card to each country //
restCountriesInfo.forEach((ele) => {
    const card = createCard(ele);
    column.append(card);
});

row.append(column);
container.append(row);
document.body.append(container);
}

//Creates individual Card //
function createCard(countryObj) {
    const card = createEle("div", "card");
    const cardBody = createEle("div", "card-body");
    const cardTitle = createEle("h5", "card-title");
if (countryObj.name.length > 20) cardTitle.classList.add("short-title");
    cardTitle.innerHTML = countryObj.name;
    // image
    const image = createEle("img", "card-img-top");
    image.src = countryObj.flag;
    image.alt = countryObj.name;

    const cardContents = createEle("div", "card-contents");

    // capital
    const capitalP = createEle("p", "capital");
    capitalP.innerHTML = "Capital:";
    const capitalPSpan = createEle("span");
    if (!countryObj.capital) capitalPSpan.innerHTML = "NA";
    else capitalPSpan.innerHTML = countryObj.capital;
    capitalP.append(capitalPSpan);

    // country codes
    const countryCodesP = createEle("p");
    countryCodesP.innerHTML = "Country Codes: ";
    const countryCodesPSpan = createEle("span");
    countryCodesPSpan.innerHTML = `${countryObj.alpha2Code}, ${countryObj.alpha3Code}`;
    countryCodesP.append(countryCodesPSpan);

    // region
    const regionP = createEle("p");
    regionP.innerHTML = "Region:";
    const regionPSpan = createEle("span");
    regionPSpan.innerHTML = countryObj.region;
    regionP.append(regionPSpan);

    const latLongP = createEle("p");
    latLongP.innerHTML = "Lat Long:";
    const latLongPSpan = createEle("span");
    latLongPSpan.innerHTML = formatLatLng(countryObj.latlng);
    latLongP.append(latLongPSpan);

    cardContents.append(capitalP, countryCodesP, regionP, latLongP);
    cardBody.append(cardTitle, image, cardContents);
    card.append(cardBody);
    return card;
}

// Formats the latitude and longitude
function formatLatLng(latLngArr) {
    return latLngArr.map((ele) => ele.toFixed(2)).join(",");
}

function createEle(ele, eleClass = "", eleId = "") {
    const element = document.createElement(ele);
    if (eleClass !== "") element.setAttribute("class", eleClass);
    if (eleId !== "") element.setAttribute("id", eleId);
    return element;
}