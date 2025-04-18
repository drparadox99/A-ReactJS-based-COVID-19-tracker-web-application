import axios from "axios";
import { trier } from "../utils/utils";
//const url = "https://covid19.mathdro.id/api";

export const fetchData = async (geography) => {
  let url;
  if (geography === "France")
    url = "https://coronavirusapi-france.now.sh/AllLiveData";
  else
    url =
      geography === "states"
        ? "https://disease.sh/v3/covid-19/states"
        : "https://disease.sh/v3/covid-19/countries";
  try {
    const { data } = await axios.get(`${url}`);
    let modifiedData = "";

    if (geography === "France") {
      modifiedData = data["allLiveFranceData"].map((department) => ({
        flag: "none",
        name: department.nom,
        confirmed: department.cases,
        recovered: department.gueris,
        deceased: department.deces,
        critical: 0, //unknown
        active: 0,
        tests: 0,
        population: 0
      }));
    } else if (geography === "states") {
      //looping through an the array of objects and returning  objects
      modifiedData = data.map((state) => ({
        flag: "none",
        name: state.state,
        confirmed: state.cases,
        recovered: state.recovered,
        deceased: state.deaths,
        critical: 0, //unknown
        active: state.active,
        tests: state.tests,
        population: state.population
      }));
    } else {
      //looping through an the array of objects and returning  objects
      modifiedData = data.map((country) => ({
        flag: country.countryInfo.flag,
        name: country.country,
        confirmed: country.cases,
        recovered: country.recovered,
        deceased: country.deaths,
        critical: country.critical,
        active: country.active,
        tests: country.tests,
        population: country.population,
        continent: country.continent
      }));
    }

    let donneesTriees = trier(modifiedData, "deceased", "decroissant");
    //const items = modifiedData.slice(0, 30);
    //deep copy, insttead of shallow copy
    //let deepClone = JSON.parse(JSON.stringify(modifiedData));
    if (
      geography !== "countries" &&
      geography !== "states" &&
      geography !== "France"
    ) {
      donneesTriees = donneesTriees.filter(
        (country) => country.continent === geography
      );
    }

    //console.log(donneesTriees);
    return donneesTriees;
  } catch (error) {}
};

/*
export const fetchCountriesByIso = async () => {
  try {
    const url = "https://disease.sh/v3/covid-19/countries";
    const { data } = await axios.get(`${url}`);
    //looping through an the array of objects and returning  objects
    const modifiedData = data.map((country) => ({
      [country.countryInfo.iso3]: country
    }));

    //return modifiedData;
    return modifiedData;
  } catch (error) {}
}; */

//à selectionne QUE les données qui nous interesse
export const fetchCountriesByIso3 = async () => {
  try {
    const url = "https://disease.sh/v3/covid-19/countries";
    const { data } = await axios.get(`${url}`);
    //looping through an the array of objects and returning  objects
    /*for (const [index, value] of data.entries()) {
      items.push(([value.countryInfo.iso3]: value));
    } */
    var dict = {}; // create an empty array
    data.forEach((country) => (dict[[country.countryInfo.iso3]] = country));
    return dict;
  } catch (error) {}
};

//A garder cette fonction pour usages futures !!!!
export const fetchQuickInfo = async () => {
  try {
    const url = "https://disease.sh/v3/covid-19/all";
    //returns object of objects instead of an array
    //const { data } = await axios.get(`${url}`);
    const {
      data: {
        cases,
        deaths,
        recovered,
        active,
        critical,
        tests,
        todayCases,
        todayDeaths,
        todayRecovered
      }
    } = await axios.get(`${url}`);

    const newData = {
      cases,
      deaths,
      recovered,
      active,
      critical,
      tests,
      todayCases,
      todayDeaths,
      todayRecovered
    };

    /*
    //Getting the values and keys of the object of objects in 2 diffrent arrays
    let arrKeys = Object.keys(data).map(key => key);
    let arr = Object.keys(data).map(key => data[key]);


    let tabFusion = [];
     //parcours des tableaux et crÃ©ation d'un tableau fusion entre les tableau pour obtenir un tableau d'object au lieu de objet d'objet
    for(var i = 0; i < arrKeys.length; i++) {
      //on utilise une variable pour intialiser les clÃ©s d'un dictionnaire- tableau, normalement c'etait pas possible avant,c'est du nouveau
      var key = arrKeys[i];
      tabFusion.push({[key]:arr[i]});
    }
      //return tabFusion;

      //   var myData = Object.keys(key,i).map(key => {
          return i.cases or key.cases;
    })
    */
    var myData = Object.keys(newData).map((key) => {
      return newData[key];
    });

    return myData;
  } catch (error) {}
};

//Returns data form the graph
export const fetchDailyData = async () => {
  const country = "usa";
  const url = "https://covid19.mathdro.id/api";

  const monUrl = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`;

  try {
    const pop = await axios.get(monUrl);
    const d = pop.data;
    const timeline = d.timeline;
    /*  
    const {
      data: { timeline }
    } = await axios.get(monUrl);
*/

    var confirmedKeys = Object.keys(timeline.cases); // create an empty array
    var confirmed = Object.values(timeline.cases);
    var deaths = Object.values(timeline.deaths);

    var recovered = Object.values(timeline.recovered);

    var dict = {};

    confirmed.forEach((item, index) => {
      dict.push({
        confirmed: confirmed[index],
        deaths: deaths[index],
        date: recovered[index]
      });
    });

    console.log(dict);
    //return dict;

    const { data } = await axios.get(`${url}/daily`);

    //console.log(dict);
    //console.log(timeline);
    //console.log(confirmed);

    //looping through an the array of objects and returning  objects

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));
    console.log(modifiedData);
    return modifiedData;
  } catch (error) {}
};
