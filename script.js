



    let textBox = document.getElementById("ddlViewBy").value;

    let cities = [
        "Philadelphia", "Zachary", "Boston", "Chicago", "Kansas City", "Chappaquiddick"];
        cities.sort();
        cities.forEach(function(item) {
            let o=document.createElement("option");
            o.text = item;
            o.value = item;
            ddlViewBy.appendChild(o);
            
        })

