 var countryLists = new Array(4)
 countryLists["empty"] = ["Select a Country"];
 countryLists["Anantapur"] = ["Agali", "Amadagur", "Amarapuram", "Anantapur", "Atmakur", "Bathalapalle", "Beluguppa", "Bommanahal", "Brahmasamudram", "Bukkapatnam", "Bukkaraya Samudram", "Chennekothapalle", "Chilamathur", "D.Hirehal", "Dharmavaram", "	Gandlapenta", "Garladinne", "Gooty", "Gorantla", "	Gudibanda", "Gummagatta", "Guntakal", "Hindupur", "Kadiri", "Kalyandurg", "Kambadur", "Kanaganapalle", "Kanekal", "Kothacheruvu", "Kudair", "Kundurpi", "Lepakshi", "Madakasira", "Mudigubba", "	Nallacheruvu", "Nallamada", "Nambulipulikunta", "Narpala", "Obuladevaracheruvu", "Pamidi", "Parigi", "Peddapappur", "Peddavadugur", "Penukonda", "Putlur", "Puttaparthi", "Ramagiri", "Raptadu", "Rayadurg", "Roddam", "Rolla", "Settur", "Singanamala", "Somandepalle", "Tadimarri", "Tadpatri", "Talupula", "Tanakal", "Uravakonda", "Vajrakarur", "Vidapanakal", "Yadiki", "Yellanur"];

 countryLists["West Godavari"] = ["Achanta","Akividu","Attili","Bhimadole","Bhimavaram","Buttayagudem","Chagallu","Chintalapudi","Denduluru","Devarapalle","Dwarakatirumala","Eluru","Ganapavaram","Gopalapuram","Iragavaram","Jangareddigudem","Jeelugu Milli","Kalla","Kamavarapukota","Kovvur","Koyyalagudem","Lingapalem","Mogalthur","Nallajerla","Narasapuram","Nidadavole","Nidamarru","Palacoderu","Palacole","Pedapadu","Pedavegi","Pentapadu","Penugonda","Penumantra","Peravali","Poduru","Polavaram","T.Narasapuram","Tadepalligudem","Tallapudi","Tanuku","Undi","Undrajavaram","Unguturu","Veeravasaram","Yelamanchili"];

 countryLists["Srikakulam"] = ["Amadalavalasa", "Bhamini", "Burja","Etcherla","Ganguvarisigadam","Gara", "Hiramandalam", "Ichchapuram","Jalumuru","Kanchili","Kaviti", "Kotabommali", "	Kothuru","Lakshminarsupeta","Laveru", "Mandasa", "Meliaputti","Nandigam","Narasannapeta", "Palakonda", "Palasa","Pathapatnam","Polaki","Ponduru", "Rajam", "Ranastalam","Regidi Amadalavalasa","Santhabommali","Santhakaviti", "Saravakota", "Sarubujjili","Seethampeta","Sompeta","Srikakulam", "Tekkali", "Vajrapukothuru", "Vangara", "Veeraghattam"];
 countryLists["Chittoor"]= ["B.Kothakota", "Baireddipalle", "Bangarupalem", "Buchinaidu Kandriga", "Chandragiri", "Chinnagottigallu", "Chittoor", "Chowdepalle", "Gangadhara Nellore", "Gangavaram", "Gudipala", "Gudupalle", "Gurramkonda", "Irala", "K.V.B.Puram", "Kalakada", "Kalikiri", "Kambhamvaripalle", "Karvetinagar", "Kuppam", "Kurabalakota", "Madanapalle", "Mulakalacheruvu", "Nagalapuram", "Nagari", "Narayanavanam", "Nimmanapalle", "Nindra", "Pakala", "Palamaner", "Palasamudram", "Pedda Thippasamudram", "Peddamandyam", "Peddapanjani", "Penumuru", "Pichatur", "Pileru", "Pulicherla", "Punganur", "Puthalapattu", "Puttur", "Ramachandrapuram", "Ramakuppam", "Ramasamudram", "Renigunta", "Rompicherla", "Santhipuram", "Satyavedu", "Sodam", "Somala", "Srikalahasti", "Srirangarajapuram", "Thamballapalle", "Thavanampalle", "Thottambedu", "Tirupati (Rural)", "Tirupati (Urban)", "Vadamalapeta", "Valmikipuram", "Varadaiahpalem", "Vedurukuppam", "Venkatagirikota", "Vijayapuram", "Yadamarri", "Yerpedu", "Yerravaripalem"];
 countryLists["East Godavari"]= ["Addateegala","Ainavilli","Alamuru","Allavaram","Amalapuram","Ambajipeta","Anaparthy","Atreyapuram","Biccavolu","Devipatnam","Gandepalle","Gangavaram","Gokavaram","Gollaprolu","I. Polavaram","Jaggampeta","Kadiam","Kajuluru","Kakinada (Rural)","Kakinada (Urban)","Kapileswarapuram","Karapa","Katrenikona","Kirlampudi","Korukonda","Kotananduru","Kothapalle","Kothapeta","Malikipuram","Mamidikuduru","Mandapeta","Maredumilli","Mummidivaram","P.Gannavaram","Pamarru","Pedapudi","Peddapuram","Pithapuram","Prathipadu","Rajahmundry (Urban)","Rajahmundry Rural","Rajanagaram","Rajavommangi","Ramachandrapuram","Rampachodavaram","Rangampeta","Ravulapalem","Rayavaram","Razole","Rowthulapudi","Sakhinetipalle","Samalkota","Sankhavaram","Seethanagaram","Thallarevu","Thondangi","Tuni","Uppalaguptam","Y. Ramavaram","Yeleswaram"];
 countryLists["Guntur"]= ["Amaravathi","Amruthalur","Atchampet","Bapatla","Bellamkonda","Bhattiprolu","Bollapalle","Chebrolu","Cherukupalle H/O Arumbaka","Chilakaluripet H/O.Purushotha Patnam","Dachepalle","Duggirala","Durgi","Edlapadu","Guntur","Gurazala","Ipur","Kakumanu","Karempudi","Karlapalem","Kollipara","Kollur","Krosuru","Machavaram","Macherla","Mangalagiri","Medikonduru","Muppalla","Nadendla","Nagaram","Narasaraopet","Nekarikallu","Nizampatnam","Nuzendla","Pedakakani","Pedakurapadu","Pedanandipadu","Phirangipuram","Piduguralla","Pittalavanipalem","Ponnur","Prathipadu","Rajupalem","Rompicherla","Sattenapalle","Savalyapuram H/O Kanamarlapudi","Tadepalle","Tadikonda","Tenali","Thullur","Tsundur","Vatticherukuru","Veldurthi","Vemuru","Vinukonda"];

 countryLists["Krishna"]=["A.Konduru","Agiripalle","Avanigadda","Bantumilli","Bapulapadu","Challapalle","Chandarlapadu","Chatrai","G.Konduru","Gampalagudem","Gannavaram","Ghantasala","Gudivada","Gudlavalleru","Guduru","Ibrahimpatnam","Jaggayyapeta","Kaikalur","Kalidindi","Kanchikacherla","Kankipadu","Koduru","Kruthivennu","Machilipatnam","Mandavalli","Mopidevi","Movva","Mudinepalle","Musunuru","Mylavaram","Nagayalanka","Nandigama","Nandivada","Nuzvid","Pamarru","Pamidimukkala","Pedana","Pedaparupudi","Penamaluru","Penuganchiprolu","Reddigudem","Thotlavalluru","Tiruvuru","Unguturu","Vatsavai","Veerullapadu","Vijayawada (Rural)","Vijayawada (Urban)","Vissannapet","Vuyyuru"];
countryLists["Nellore"]=["Allur","Ananthasagaram","Anumasamudrampeta","Atmakur","Balayapalle","Bogole","Buchireddipalem","Chejerla","Chillakur","Chittamur","Dagadarthi","Dakkili","Doravarisatram","Duttalur","Gudur","Indukurpet","Jaladanki","Kaligiri","Kaluvoya","Kavali","Kodavalur","Kondapuram","Kota","Kovur","Manubolu","Marripadu","Muthukur","Naidupet","Nellore","Ojili","Pellakur","Podalakur","Rapur","Sangam","Seetharamapuram","Sullurpeta","Sydapuram","Tada","Thotapalligudur","Udayagiri","Vakadu","Varikuntapadu","Venkatachalam","Venkatagiri","Vidavalur","Vinjamur"];
countryLists["Prakasam"]=["Addanki","Ardhaveedu","Ballikurava","Bestawaripeta","Chandra Sekhara Puram","Chimakurthi","Chinaganjam","Chirala","Cumbum","Darsi","Donakonda","Dornala","Giddalur","Gudluru","Hanumanthuni Padu","Inkollu","Janakavarampanguluru","Kandukur","Kanigiri","Karamchedu","Komarolu","Konakanamitla","Kondapi","Korisapadu","Kotha Patnam","Kurichedu","Lingasamudram","Maddipadu","Markapur","Marripudi","Martur","Mundlamuru","Naguluppala Padu","Ongole","Pamur","Parchur","Peda Araveedu","Pedacherlo Palle","Podili","Ponnaluru","Pullalacheruvu","Racherla","Santhamaguluru","Santhanuthala Padu","Singarayakonda","Tangutur","Tarlupadu","Thallur","Tripuranthakam","Ulavapadu","Veligandla","Vetapalem","Voletivaripalem","Yeddana Pudi","Yerragondapalem","Zarugumilli"];
countryLists["Vizianagaram"]=["Badangi","Balijipeta","Bhogapuram","Bobbili","Bondapalle","Cheepurupalle","Dattirajeru","Denkada","Gajapathinagaram","Gantyada","Garividi","Garugubilli","Gummalakshmipuram","Gurla","Jami","Jiyyammavalasa","Komarada","Kothavalasa","Kurupam","Lakkavarapukota","Makkuva","Mentada","Merakamudidam","Nellimarla","Pachipenta","Parvathipuram","Pusapatirega","Ramabhadrapuram","Salur","Seethanagaram","Srungavarapukota","Therlam","Vepada","Vizianagaram"];
countryLists["Kurnool"]=["Adoni","Allagadda","Alur","Aspari","Atmakur","Banaganapalle","Bandi Atmakur","Bethamcherla","C.Belagal","Chagalamarri","Chippagiri","Devanakonda","Dhone","Dornipadu","Gadivemula","Gonegandla","Gospadu","Gudur","Halaharvi","Holagunda","Jupadu Bungalow","Kallur","Kodumur","Koilkuntla","Kolimigundla","Kosigi","Kothapalle","Kowthalam","Krishnagiri","Kurnool","Maddikera (East)","Mahanandi","Mantralayam","Midthur","Nandavaram","Nandikotkur","Nandyal","Orvakal","Owk","Pagidyala","Pamulapadu","Panyam","Pattikonda","Peapally","Pedda Kadubur","Rudravaram","Sanjamala","Sirvel","Srisailam","Tuggali","Uyyalawada","Veldurthi","Velgode","Yemmiganur"];

countryLists["Kadapa"]=["Atlur","B.kodur","Badvel","Brahmamgarimatham","Chakrayapet","Chapadu","Chennur","Chinnamandem","Chintakomma","Dinne","Chitvel","Cuddapah","Duvvur","Galiveedu","Gopavaram","Jammalamadugu","Kalasapadu","Kamalapuram","Khajipet","Kodur","Kondapuram",
"Lakkireddipalle","Lingala","Muddanur","Mydukur","Mylavaram","Nandalur","Obulavaripalle","Peddamudium","Penagalur","Pendlimarri","Porumamilla","Proddatur","Pulivendla","Pullampeta","Rajampet","Rajupalem","Ramapuram","Rayachoty","Sambepalle","Sidhout","Simhadripuram","Sri Avadutha","Kasinayana","T.sundupalle","Thondur","Vallur","Veeraballi","Veerapanayani Palle","Vempalle","Vemula","Vontimitta","Yerraguntla"];

countryLists["Visakhapatnam"]=["Anakapalle","Anandapuram","Ananthagiri","Araku Valley","Atchutapuram","Bheemunipatnam","Butchayyapeta","Cheedikada","Chintapalle","Chodavaram","Devarapalle","Dumbriguda","G.Madugula","Gajuwaka","Golugonda","Gudem Kotha Veedhi","Hukumpeta","K.Kotapadu","Kasimkota","Kotauratla","Koyyuru","Madugula","Makavarapalem","Munagapaka","Munchingi Puttu","Nakkapalle","Narsipatnam","Nathavaram","Paderu","Padmanabham","Paravada","Payakaraopeta","Peda Bayalu","Pedagantyada","Pendurthi","Rambilli","Ravikamatham","Rolugunta","S.Rayavaram","Sabbavaram","Visakhapatnam (Rural)","Visakhapatnam (Urban)","Yelamanchili"];

countryLists[""]=[];

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
