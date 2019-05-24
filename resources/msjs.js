 var countryLists = new Array(4)
 countryLists["empty"] = ["Select a Country"];
 countryLists["Anantapur"] = ["Anantapur", "Hindupur", "Dharmavaram", "Guntakal", "Tadpatri", "Kadiri", "Rayadurg", "Kalyandurg", "Gooty", "Madakasira", "Uravakonda", "Gorantla", "Bukkaraya Samudram", "Kanekal", "Mudigubba", "Puttaparthi", "Parigi", "Yadiki", "Bommanahal", "Amarapuram", "Penukonda", "Pamidi", "Narpala", "Garladinne", "Vidapanakal", "Kundurpi", "Gudibanda", "Chilamathur", "Roddam", "Kambadur", "Vajrakarur", "Gummagatta", "Obuladevaracheruvu", "Tanakal", "Somandepalle", "D.Hirehal", "Peddavadugur", "Lepakshi", "Chennekothapalle", "Beluguppa", "Singanamala", "Settur", "Brahmasamudram", "Talupula", "Nallamada", "Bukkapatnam", "Rolla", "Kanaganapalle", "Bathalapalle", "Kothacheruvu", "	Atmakur", "Kudair", "Raptadu", "	Putlur", "Agali", "Yellanur", "Peddapappur", "Ramagiri", "Tadimarri", "Nambulipulikunta", "Nallacheruvu", "Amadagur", "Gandlapenta"];
 countryLists["West Godavari"] = ["Gopalapuram", "Palacole", "Narasapuram", "Bhimavaram", "Eluru", "Tadepalligudem", "Tanuku", "	Nidadavole", "Jangareddigudem", "Kovvur", "Chintalapudi", "Pedavegi", "Unguturu", "	Nallajerla", "Devarapalli", "Undrajavaram", "Koyyalagudem", "Akividu", "Mogalthur", "Yelamanchili", "Pentapadu", "Peravali", "Penugonda", "Pedapadu", "Dwarakatirumala", "Attili", "Kalla", "Denduluru", "Palacoderu", "Undi", "Iragavaram", "Poduru", "Bhimadole", "Ganapavaram", "Veeravasaram", "Chagallu", "Achanta", "Penumantra", "Lingapalem", "Kamavarapukota", "T.Narasapuram", "Buttayagudem", "Tallapudi", "Nidamarru", "Polavaram", "Jeelugu Milli"];
 countryLists["Srikakulam"] = ["Srikakulam", "Palasa", "Rajam","Ichchapuram","Etcherla","Ranastalam", "Amadalavalasa", "Mandasa","Gara","Sompeta","Narasannapeta", "Kaviti", "Palakonda","Kotabommali","Tekkali", "Ponduru", "Vajrapukothuru","Santhabommali","Regidi Amadalavalasa", "Laveru", "Kothuru","Kanchili","Polaki","Veeraghattam", "Santhakaviti", "Pathapatnam","Jalumuru","Ganguvarisigadam","Nandigam", "Seethampeta", "Meliaputti","Saravakota","Hiramandalam","Bhamini", "Burja", "Vangara", "Sarubujjili", "Lakshminarsupeta"];
 countryLists["Chittoor"]= ["Tirupati Urban", "", "", ""];
 countryLists["East Godavari"]= ["Razole", "", "", ""];
 countryLists["Guntur"]= ["Razole", "", "", ""];
 countryLists["Kadapa"]= ["Razole", "", "", ""];
 /* CountryChange() is called from the onchange event of a select element.
 * param selectObj - the select object which fired the on change event.
 */
 function districtChange(selectObj) {
 // get the index of the selected option
 var idx = selectObj.selectedIndex;
 // get the value of the selected option
 var which = selectObj.options[idx].value;
 // use the selected option value to retrieve the list of items from the countryLists array
 cList = countryLists[which];
 // get the country select element via its known id
 var cSelect = document.getElementById("district");
 // remove the current options from the country select
 var len=cSelect.options.length;
 while (cSelect.options.length > 0) {
 cSelect.remove(0);
 }
 var newOption;
 // create new options
 for (var i=0; i<cList.length; i++) {
 newOption = document.createElement("option");
 newOption.value = cList[i];  // assumes option string and value are the same
 newOption.text=cList[i];
 // add the new option
 try {
 cSelect.add(newOption);  // this will fail in DOM browsers but is needed for IE
 }
 catch (e) {
 cSelect.appendChild(newOption);
 }
 }
 }
