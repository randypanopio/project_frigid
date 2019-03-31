var characters = 
{
  "default":{
    "poses":{
    },
    "name":"Narrator"
  },

  "alice":{
    "poses":{
      "default":"",
    },
    "name":"nullchar"
  },

  "bobby":{
    "poses":{
      "default":"img/VN_chara002_neutral.png",
    },
    "name":"char a"
  }
}
; 
 var places = 
{
	"street" : {
		"name":"California",
    	"image":"img/VN_scene001.png"
    }
}
; 
 var story = 
[
	{
		"title": "Start",
		"tags": "",
		"body": "<<place street>>{{nullchar}}\nGreetings this is a sample text\n\n[[Next |NextNode]]\n[[Option Two |OptTwo]]",
		"position": {
			"x": 415,
			"y": 150
		},
		"colorID": 0
	},
	{
		"title": "NextNode",
		"tags": "",
		"body": "hello\n\n",
		"position": {
			"x": 932,
			"y": 208
		},
		"colorID": 0
	},
	{
		"title": "OptTwo",
		"tags": "",
		"body": "watup",
		"position": {
			"x": 442,
			"y": 712
		},
		"colorID": 0
	}
]; 
