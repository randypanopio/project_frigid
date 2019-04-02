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
			"x": -130,
			"y": 63
		},
		"colorID": 0
	},
	{
		"title": "A2",
		"tags": "",
		"body": "<<place a2_santabarbara>>{{nullchar}}\r\n\r\n[[Continue |A3]]",
		"position": {
			"x": 91,
			"y": 84
		},
		"colorID": 0
	},
	{
		"title": "A3",
		"tags": "",
		"body": "<<place a3_losangeles>>\r\n\r\n[[“Take the bundle of battery rods” |A4A]]\r\n[[“Take the stash of dried food” |A4A]]",
		"position": {
			"x": 310,
			"y": -63
		},
		"colorID": 0
	},
	{
		"title": "A4A",
		"tags": "",
		"body": "<<place a4_losangeles>>\r\n\r\n[[Head towards Mexico |A5]]",
		"position": {
			"x": 565,
			"y": -107
		},
		"colorID": 0
	},
	{
		"title": "A5",
		"tags": "",
		"body": "<<place a5_tijuana>>\r\n\r\n[[“It’s for the best to cut ties now before morale worsens. The group decide to split their resource and send them back to Santa Barbara.” |A6]]\r\n[[“It’s too early to quit now, turning back will only inevitably end in death. The group convinces the stragglers that they must continue their mission if they are to survive.” |A6]]\r\n",
		"position": {
			"x": 854,
			"y": 58
		},
		"colorID": 0
	},
	{
		"title": "A6",
		"tags": "",
		"body": "<<place a6_baja>>\r\n\r\n[[Continue |A7]]",
		"position": {
			"x": -77,
			"y": 299
		},
		"colorID": 0
	},
	{
		"title": "A7",
		"tags": "",
		"body": "<<place a7_california>>\r\n\r\n[[“Turn around and take the route towards the Sonora inland. We do not want to take any unnecessary risks” |A8A]]\r\n[[“Cut through the gulf, we’ve taken similar detours back in the border, there is no time to waste.” |A8B]]",
		"position": {
			"x": 235,
			"y": 477
		},
		"colorID": 0
	},
	{
		"title": "A8A",
		"tags": "",
		"body": "<<place a8a_sonora>>\r\n\r\n[[“Begin preparations to climb the mountain face” |A8A2]]",
		"position": {
			"x": 466,
			"y": 393
		},
		"colorID": 0
	},
	{
		"title": "A8A2",
		"tags": "",
		"body": "<<place a8a2_sonora>>\r\n\r\n[[“The group must push on. Their valiance will be remembered.” |A9]]",
		"position": {
			"x": 735,
			"y": 370
		},
		"colorID": 0
	},
	{
		"title": "A8B",
		"tags": "",
		"body": "<<place a8b_california>>\r\n\r\n[[Continue |A8B2]]",
		"position": {
			"x": 496,
			"y": 664
		},
		"colorID": 0
	},
	{
		"title": "A8B2",
		"tags": "",
		"body": "<<place a8b2_california>>\r\n\r\n[[“The group has to run before engulfing more members. Their courage will forever be remembered” |A9]]",
		"position": {
			"x": 783,
			"y": 698
		},
		"colorID": 0
	},
	{
		"title": "A9",
		"tags": "",
		"body": "<<place a9_sinaloa>>\r\n\r\n[[“The group digs in the snow and sets camp. Some desperately needed rest was needed, and nearly everyone passes out immediately.” |A10]]",
		"position": {
			"x": 1018,
			"y": 429
		},
		"colorID": 0
	},
	{
		"title": "A10",
		"tags": "",
		"body": "<<place a10_sinaloa>>\r\n\r\n[[“Investigate and enter the bunker” |A11]]",
		"position": {
			"x": 1261,
			"y": 385
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
	}
]; 
