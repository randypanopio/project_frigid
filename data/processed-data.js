var characters = 
{
  "default":{
    "poses":{
    },
    "name":""
  },

  "nullchar":{
    "poses":{
      "default":"",
    },
    "name":"The Group"
  },
  "bunker_scientist":{
    "poses":{
      "default":"",
    },
    "name":"Scientist"
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
    "a3a_santabarbara" : {
        "name":"SantaBarbara",
        "image":"img/a3a_santabarbara.png"
    },
    "a3b_santabarbara" : {
        "name":"SantaBarbara",
        "image":"img/a3b_santabarbara.png"
    },
    "a4a_losangeles" : {
        "name":"LosAngeles",
        "image":"img/a4a_losangeles.png"
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
			"x": -2062,
			"y": -811
		},
		"colorID": 0
	},
	{
		"title": "A2",
		"tags": "",
		"body": "<<place a2_santabarbara>>{{nullchar}}\r\n\r\n[[Continue |A3A]]",
		"position": {
			"x": -1898,
			"y": -399
		},
		"colorID": 0
	},
	{
		"title": "A3A",
		"tags": "",
		"body": "<<place a3a_santabarbara>>{{nullchar}}\r\n\r\n[[“Whether all of us wanted to do this or not, it’s bound to happen sooner or later. Anyways, any supplies ought to help us later on” |A3B]]",
		"position": {
			"x": -1507,
			"y": -92
		},
		"colorID": 0
	},
	{
		"title": "A4A$d@fg:3",
		"tags": "",
		"body": "<<place a4_losangeles>>\r\n\r\n[[“Head towards Mexico” |A5$e]]\r\n",
		"position": {
			"x": -966,
			"y": -23
		},
		"colorID": 0
	},
	{
		"title": "A5$e",
		"tags": "",
		"body": "[[“It’s for the best to cut ties now before morale worsens. The group decide to split their resource and send them back to Santa Barbara.” |A5%die:3]]\r\n[[“It’s too early to quit now, turning back will only inevitably end in death. The group convinces the stragglers that they must continue their mission if they are to survive.” |A6$d]]",
		"position": {
			"x": -667,
			"y": -192
		},
		"colorID": 0
	},
	{
		"title": "A6$d",
		"tags": "",
		"body": "<<place a6_baja>>\r\n\r\n[[Continue |A7$d]]\r\n",
		"position": {
			"x": -122,
			"y": -237
		},
		"colorID": 0
	},
	{
		"title": "A7$d",
		"tags": "",
		"body": "<<place a7_california>>\r\n\r\n[[“Turn around and take the route towards the Sonora inland. We do not want to take any unnecessary risks” |A8A$e]]\r\n[[“Cut through the gulf, we’ve taken similar detours back in the border, there is no time to waste.” |A8B$e]]\r\n",
		"position": {
			"x": 191,
			"y": -288
		},
		"colorID": 0
	},
	{
		"title": "A8A$e",
		"tags": "",
		"body": "<<place a8a_sonora>>\r\n\r\n[[“Begin preparations to climb the mountain face” |A8A2%die:1]]\r\n",
		"position": {
			"x": 533,
			"y": -583
		},
		"colorID": 0
	},
	{
		"title": "A8A2%die:1",
		"tags": "",
		"body": "<<place a8a2_sonora>>\r\n\r\n[[“The group must push on. Their valiance will be remembered.” |A9$e]]",
		"position": {
			"x": 864,
			"y": -606
		},
		"colorID": 0
	},
	{
		"title": "A8B$e",
		"tags": "",
		"body": "<<place a8b_california>>\r\n\r\n[[Continue |A8B2%die:1]]",
		"position": {
			"x": 531,
			"y": -181
		},
		"colorID": 0
	},
	{
		"title": "A8B2%die:1",
		"tags": "",
		"body": "<<place a8b2_california>>\r\n\r\n[[“The group has to run before engulfing more members. Their courage will forever be remembered” |A9$e]]\r\n",
		"position": {
			"x": 918,
			"y": -207
		},
		"colorID": 0
	},
	{
		"title": "A9$e",
		"tags": "",
		"body": "<<place a9_sinaloa>>\r\n\r\n[[“The group digs in the snow and sets camp. Some desperately needed rest was needed, and nearly everyone passes out immediately.” |A10]]\r\n",
		"position": {
			"x": 1153,
			"y": -477
		},
		"colorID": 0
	},
	{
		"title": "A10",
		"tags": "",
		"body": "<<place a10_sinaloa>>\r\n\r\n[[“Investigate and enter the bunker” |A11]]",
		"position": {
			"x": 1421,
			"y": -466
		},
		"colorID": 0
	},
	{
		"title": "A11",
		"tags": "",
		"body": "<<place a11_sinaloa>>\r\n\r\n[[Interrupt him |A12]]",
		"position": {
			"x": 1692,
			"y": -482
		},
		"colorID": 0
	},
	{
		"title": "A12",
		"tags": "",
		"body": "<<place a12_sinaloa>>{{bunker_scientist}}\r\n\r\n[[“Try to convince the scientist to join our cause. There is nothing left for him here, only death. Perhaps he can find answers at Fortaleza.” |A12@fg:2]]\r\n[[“Continue forwards and respect the man’s mission. We do not have the right to drag him out of his last remaining wishes, especially in this god forsaken world” |A13$e@fg:2]]",
		"position": {
			"x": 1989,
			"y": -478
		},
		"colorID": 0
	},
	{
		"title": "A3B",
		"tags": "",
		"body": "<<place a3b_santabarbara>>\r\n\r\n[[“Take the bundle of battery rods” |A4A$d@pg:3]]\r\n[[“Take the stash of dried food” |A4A$d@fg:3]]",
		"position": {
			"x": -1237,
			"y": -213
		},
		"colorID": 0
	},
	{
		"title": "A5%die:3",
		"tags": "",
		"body": "<<place e_generic_leave>>\r\n\r\n[[“It’s a shame but we most move forward” |A6$d]]\r\n",
		"position": {
			"x": -428,
			"y": -400
		},
		"colorID": 0
	},
	{
		"title": "A4A$d@pg:3",
		"tags": "",
		"body": "<<place a4_losangeles>>\r\n\r\n[[“Head towards Mexico” |A5$e]]\r\n",
		"position": {
			"x": -984,
			"y": -357
		},
		"colorID": 0
	},
	{
		"title": "A12@fg:2",
		"tags": "",
		"body": "<<place e_generic_gain>>\r\n\r\n[[“Our new friend will be a priceless asset for the group in the future” |A13$e%gain:1]]",
		"position": {
			"x": 2275,
			"y": -641
		},
		"colorID": 0
	},
	{
		"title": "A13$e%gain:1",
		"tags": "",
		"body": "[[ |B1]]",
		"position": {
			"x": 2525,
			"y": -474
		},
		"colorID": 0
	},
	{
		"title": "A13$e@fg:2",
		"tags": "",
		"body": "[[ |B1]]",
		"position": {
			"x": 2484,
			"y": -233
		},
		"colorID": 0
	},
	{
		"title": "C1",
		"tags": "",
		"body": "<<place >>\r\n\r\n[[Keep going |C2$d]]\r\n",
		"position": {
			"x": -2424,
			"y": 2423
		},
		"colorID": 0
	},
	{
		"title": "C2$d",
		"tags": "",
		"body": "<<place >>\r\n\r\n[[“The group sets up a small camp with the many branches surrounding them. They gather many of the surrounding berries and plants, enjoying themselves with a needed rest and a dinner. They decide to settle within the area for the time being, in which they will continue their path to Fortaleza afterwards.” |C3$e]]\r\n",
		"position": {
			"x": -2141,
			"y": 2427
		},
		"colorID": 0
	},
	{
		"title": "C3$e",
		"tags": "",
		"body": "<<place >>\r\n\r\n[[“Armed with a gun and some primitive weapons, the group decides to fight back. They’ve decided they’ve invested too much in gathering all the food to just simply give it away to the bears.” |C4A]]\r\n[[“The group decides it’s not worth the trouble fighting back the bears, deciding to instead ditch their camp, and continue on with their journey to Fortaleza” |C4B]]\r\n",
		"position": {
			"x": -1901,
			"y": 2405
		},
		"colorID": 0
	},
	{
		"title": "C4A",
		"tags": "",
		"body": "<<place >>\r\n\r\n[[ |C5$d%die:4]]\r\n",
		"position": {
			"x": -1605,
			"y": 2285
		},
		"colorID": 0
	},
	{
		"title": "C4B",
		"tags": "",
		"body": "<<place >>\r\n\r\n[[ |C5$d@fg:7]]\r\n",
		"position": {
			"x": -1573,
			"y": 2642
		},
		"colorID": 0
	},
	{
		"title": "C5$d@fg:7",
		"tags": "",
		"body": "<<place >>\r\n\r\n[[ |C6$d]]",
		"position": {
			"x": -1287,
			"y": 2604
		},
		"colorID": 0
	},
	{
		"title": "C5$d%die:4",
		"tags": "",
		"body": "<<place >>\r\n\r\n[[ |C6$d]]",
		"position": {
			"x": -1280,
			"y": 2295
		},
		"colorID": 0
	},
	{
		"title": "C6$d",
		"tags": "",
		"body": "<<place >>\r\n\r\n[[ |C7$f]]\r\n",
		"position": {
			"x": -991,
			"y": 2420
		},
		"colorID": 0
	},
	{
		"title": "C7$f",
		"tags": "",
		"body": "<<place >>\r\n\r\n[[ |C8$d]]\r\n",
		"position": {
			"x": -740,
			"y": 2428
		},
		"colorID": 0
	},
	{
		"title": "C8$d",
		"tags": "",
		"body": "<<place >>\r\n\r\n[[“The group decides that rerouting west and crossing directly through the Rio Coco river would only delay them in their path to Fortaleza. The group decides it would be best to venture through the thin beams that remain of the bridge.” |C9$d%die:2]]\r\n[[“The group takes the next safest option available, despite it potentially prolonging their journey. The group reroutes west towards the base of the Rio Coco river.” |C9$d@pl:3]]\r\n",
		"position": {
			"x": -489,
			"y": 2433
		},
		"colorID": 0
	},
	{
		"title": "C9$d%die:2",
		"tags": "",
		"body": "<<place >>\r\n\r\n[[ |C10$e]]\r\n",
		"position": {
			"x": -213,
			"y": 2187
		},
		"colorID": 0
	},
	{
		"title": "C9$d@pl:3",
		"tags": "",
		"body": "<<place >>\r\n\r\n[[ |C10$e]]\r\n",
		"position": {
			"x": -202,
			"y": 2569
		},
		"colorID": 0
	},
	{
		"title": "C10$e",
		"tags": "",
		"body": "[[End |end]]",
		"position": {
			"x": 130,
			"y": 2388
		},
		"colorID": 0
	},
	{
		"title": "B1",
		"tags": "",
		"body": "[[cont to C |C1]]",
		"position": {
			"x": -2228,
			"y": 900
		},
		"colorID": 0
	}
]; 
