var characters = 
{
  "default":{
    "poses":{
    },
    "name":"Narrator"
  },

  "nullchar":{
    "poses":{
      "default":"",
    },
    "name":"The Group"
  }
}
; 
 var places = 
{
	"california" : {
		"name":"California",
    	"image":"img/VN_scene001.png"
    },
	"a2_santabarbara" : {
		"name":"SantaBarbara",
    	"image":"img/a2_santabarbara.png"
    },
	"a3_losangeles" : {
		"name":"LosAngeles",
    	"image":"img/a3_losangeles.png"
    },
	"a4_losangeles" : {
		"name":"LosAngeles",
    	"image":"img/a4_losangeles.png"
    },
	"a5_tijuana" : {
		"name":"Tijuana",
    	"image":"img/a5_tijuana.png"
    },
	"a6_baja" : {
		"name":"Baja",
    	"image":"img/a6_baja.png"
    },
	"a7_california" : {
		"name":"GulfOfCalifornia",
    	"image":"img/a7_california.png"
    },
	"a8a_sonora" : {
		"name":"Sonora",
    	"image":"img/a8a_sonora.png"
    },
	"a8a2_sonora" : {
		"name":"Sonora",
    	"image":"img/a8a2_sonora.png"
    },
	"a8b_california" : {
		"name":"GulfOfCalifornia",
    	"image":"img/a8b_california.png"
    },
	"a8b2_california" : {
		"name":"GulfOfCalifornia",
    	"image":"img/a8b2_california.png"
    },
	"a9_sinaloa" : {
		"name":"Sinaloa",
    	"image":"img/a9_sinaloa.png"
    },
	"a10_sinaloa" : {
		"name":"Sinaloa",
    	"image":"img/a10_sinaloa.png"
    },
	"a11_sinaloa" : {
		"name":"Bunker",
    	"image":"img/a11_sinaloa.png"
    },
	"a12_sinaloa" : {
		"name":"Bunker",
    	"image":"img/a12_sinaloa.png"
    }
}
; 
 var story = 
[
	{
		"title": "Start",
		"tags": "",
		"body": "<<place california>>{{nullchar}}\r\n\r\n[[Begin the struggle |A2]]\r\n",
		"position": {
			"x": -526,
			"y": -14
		},
		"colorID": 0
	},
	{
		"title": "A2",
		"tags": "",
		"body": "<<place a2_santabarbara>>{{nullchar}}\r\n\r\n[[Continue |A3A]]",
		"position": {
			"x": -226,
			"y": 16
		},
		"colorID": 0
	},
	{
		"title": "A3A",
		"tags": "",
		"body": "<<place a3a_santabarbara>>{{nullchar}}\r\n\r\n[[“Whether all of us wanted to do this or not, it’s bound to happen sooner or later. Anyways, any supplies ought to help us later on” |A3B]]",
		"position": {
			"x": 8,
			"y": 17
		},
		"colorID": 0
	},
	{
		"title": "A4A$d",
		"tags": "",
		"body": "<<place a4_losangeles>>\r\n\r\n[[“Head towards Mexico” |A5$e]]\r\n",
		"position": {
			"x": 595,
			"y": -169
		},
		"colorID": 0
	},
	{
		"title": "A5$e",
		"tags": "",
		"body": "[[“It’s for the best to cut ties now before morale worsens. The group decide to split their resource and send them back to Santa Barbara.” |A5%die:3]]\r\n[[“It’s too early to quit now, turning back will only inevitably end in death. The group convinces the stragglers that they must continue their mission if they are to survive.” |A6$d]]",
		"position": {
			"x": 735,
			"y": 159
		},
		"colorID": 0
	},
	{
		"title": "A6$d",
		"tags": "",
		"body": "<<place a6_baja>>\r\n\r\n[[Continue |A7$d]]\r\n",
		"position": {
			"x": -274,
			"y": 253
		},
		"colorID": 0
	},
	{
		"title": "A7$d",
		"tags": "",
		"body": "<<place a7_california>>\r\n\r\n[[“Turn around and take the route towards the Sonora inland. We do not want to take any unnecessary risks” |A8A$e]]\r\n[[“Cut through the gulf, we’ve taken similar detours back in the border, there is no time to waste.” |A8B$e]]\r\n",
		"position": {
			"x": -9,
			"y": 417
		},
		"colorID": 0
	},
	{
		"title": "A8A$e",
		"tags": "",
		"body": "<<place a8a_sonora>>\r\n\r\n[[“Begin preparations to climb the mountain face” |A8A2%die:1]]\r\n",
		"position": {
			"x": 368,
			"y": 346
		},
		"colorID": 0
	},
	{
		"title": "A8A2%die:1",
		"tags": "",
		"body": "<<place a8a2_sonora>>\r\n\r\n[[“The group must push on. Their valiance will be remembered.” |A9$e]]",
		"position": {
			"x": 735,
			"y": 370
		},
		"colorID": 0
	},
	{
		"title": "A8B$e",
		"tags": "",
		"body": "<<place a8b_california>>\r\n\r\n[[Continue |A8B2%die:1]]",
		"position": {
			"x": 337,
			"y": 639
		},
		"colorID": 0
	},
	{
		"title": "A8B2%die:1",
		"tags": "",
		"body": "<<place a8b2_california>>\r\n\r\n[[“The group has to run before engulfing more members. Their courage will forever be remembered” |A9$e]]\r\n",
		"position": {
			"x": 783,
			"y": 697
		},
		"colorID": 0
	},
	{
		"title": "A9$e",
		"tags": "",
		"body": "<<place a9_sinaloa>>\r\n\r\n[[“The group digs in the snow and sets camp. Some desperately needed rest was needed, and nearly everyone passes out immediately.” |A10]]\r\n",
		"position": {
			"x": 1018,
			"y": 427
		},
		"colorID": 0
	},
	{
		"title": "A10",
		"tags": "",
		"body": "<<place a10_sinaloa>>\r\n\r\n[[“Investigate and enter the bunker” |A11]]",
		"position": {
			"x": 1295,
			"y": 443
		},
		"colorID": 0
	},
	{
		"title": "A11",
		"tags": "",
		"body": "<<place a11_sinaloa>>\r\n\r\n[[Interrupt him |A12]]",
		"position": {
			"x": 1515,
			"y": 388
		},
		"colorID": 0
	},
	{
		"title": "A12",
		"tags": "",
		"body": "<<place a12_sinaloa>>{{bunker_scientist}}\r\n\r\n[[“Try to convince the scientist to join our cause. There is nothing left for him here, only death. Perhaps he can find answers at Fortaleza.” |A13]]\r\n[[“Continue forwards and respect the man’s mission. We do not have the right to drag him out of his last remaining wishes, especially in this god forsaken world” |A13]]\r\n",
		"position": {
			"x": 1839,
			"y": 377
		},
		"colorID": 0
	},
	{
		"title": "A3B",
		"tags": "",
		"body": "<<place a3b_santabarbara>>\r\n\r\n[[“Take the bundle of battery rods” |A4A$d]]\r\n[[“Take the stash of dried food” |A4A$d]]\r\n",
		"position": {
			"x": 240,
			"y": -85
		},
		"colorID": 0
	},
	{
		"title": "A5%die:3",
		"tags": "",
		"body": "<<place e_generic_leave>>\r\n\r\n[[“It’s a shame but we most move forward” |A6$d]]\r\n",
		"position": {
			"x": 391,
			"y": 78
		},
		"colorID": 0
	}
]; 
