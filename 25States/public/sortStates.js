    const stateCapitals = [
        {state:"Massachusetts", capital:"Boston"},
        {state:"Alaska", capital:"Juneau"},
        {state:"Arizona", capital:"Phoenix"},
        {state:"New York", capital:"Albany"},
        {state:"California", capital:"Sacramento"},
        {state:"Florida", capital:"Tallahassee"},
        {state:"New Hampshire", capital:"Concord"},
        {state:"Ohio", capital:"Columbus"},
        {state:"Connecticut", capital:"Hartford"},
        {state:"Vermont", capital:"Montpelier"},
    
        {state:"Rhode Island", capital:"Providence"},
        {state:"Maryland", capital:"Annapolis"},
        {state:"Oregon", capital:"Salem"},
        {state:"Colorado", capital:"Denver"},
        {state:"Connecticut", capital:"Hartford"},
        {state:"Michigan", capital:"Lansing"},
        {state:"Pennsylvania", capital:"Harrisburg"},
        {state:"Washington", capital:"Olympia"},
        {state:"Utah", capital:"Salt Lake City"},
        {state:"Texas", capital:"Austin"},
    
        {state:"Nevada", capital:"Carson City"},
        {state:"New Jersey", capital:"Trenton"},
        {state:"Maine", capital:"Augusta"},
        {state:"Mississippi", capital:"Jackson"},
        {state:"Arkansas", capital:"Little Rock"} 
    ];
    
//stateCapitals.forEach((value) => value.capital);
//const sortST = [];
// sort in ascending (1) order by length
//const sort = { state: 1};

const sortST = stateCapitals.sort((a, b) => {
    let fa = a.state.toLowerCase(),
        fb = b.state.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});

const display = sortST
.map(st => `<tr><td>${st.state}</td><td>${st.capital}</td></tr>`).join("");
document.getElementById("display").innerHTML = display
