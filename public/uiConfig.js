var uiConfig = {
	"app"		:	{
	},
	"home"			:	{
		"gauge_min"	:	0,
		"gauge_max"	:	250
	},
	"devices" 		:	{
		"device_types"	:	[
			{
				"tooltip" 		:	"Laptop/Desktop",
				"type"			:	"computer",
				"img_name"		:	"laptop.png",
				"active_count"	:	1
			},{
				"tooltip" 	:	"Smart Phones",
				"type"		:	"mobiles",
				"img_name"	:	"iphone.png",
				"active_count"	:	0
			},{
				"tooltip" 	:	"Printers",
				"type"		:	"printer",
				"img_name"	:	"printer.png",
				"active_count"	:	0
			},{
				"tooltip" 	:	"CCTV Camera",
				"type"		:	"CCTV",
				"img_name"	:	"cctv.png",
				"active_count"	:	6
			},{
				"tooltip" 	:	"Smart Television",
				"type"		:	"smart_tv",
				"img_name"	:	"tv.png",
				"active_count"	:	1
			},{
				"tooltip" 	:	"Printers",
				"type"		:	"printer",
				"img_name"	:	"printer.png",
				"active_count"	:	0
			}
		],
		"device_default" : {
			"allowed_conn_mtd"	:	["wifi", "ethernet"],
			"data_limit_in_gb"	:	20,
			"alert_me_when"		:	15,
			"using_default_conf":	true
		},
		"devices"	:	[
			{
				"type"				:	"computer",
				"given_name" 		:	"Office Laptop",
				"device_id"			:	"kdfj45gkh7ykk798",
				"device_status"		:	"online",
				"connected_method"	:	"wifi",
				"allowed_conn_mtd"	:	["wifi", "ethernet"],
				"data_limit_in_gb"	:	5,
				"data_used_in_gb"	: 	1,
				"using_default_conf":	false
			},{
				"type"				:	"computer",
				"given_name" 		:	"Personal Laptop",
				"device_id"			:	"ljlvcj3khk08nnljhl",
				"device_status"		:	"offline",
				"connected_method"	:	"ethernet",
				"allowed_conn_mtd"	:	["wifi", "ethernet"],
				"data_limit_in_gb"	:	5,
				"data_used_in_gb"	: 	4.2,
				"using_default_conf":	false
			},{
				"type"				:	"computer",
				"given_name" 		:	"Son's Desktop",
				"device_id"			:	"56gfhj3khk08nnljhl",
				"device_status"		:	"blocked",
				"connected_method"	:	"wifi",
				"allowed_conn_mtd"	:	["wifi", "ethernet"],
				"data_limit_in_gb"	:	5,
				"data_used_in_gb"	: 	2.1,
				"using_default_conf":	false
			},
			{
				"type"				:	"mobiles",
				"given_name" 		:	"Lenovo",
				"device_id"			:	"870987gkh7ykkjhkjhkj",
				"device_status"		:	"online",
				"connected_method"	:	"wifi",
				"allowed_conn_mtd"	:	["wifi", "ethernet"],
				"data_limit_in_gb"	:	8,
				"data_used_in_gb"	: 	2,
				"using_default_conf":	false
			},{
				"type"				:	"printer",
				"given_name" 		:	"HP Living Room",
				"device_id"			:	"ljlvc476j3khk08nnljhl",
				"device_status"		:	"offline",
				"connected_method"	:	"ethernet",
				"allowed_conn_mtd"	:	["wifi", "ethernet"],
				"data_limit_in_gb"	:	1,
				"data_used_in_gb"	: 	0,
				"using_default_conf":	false
			},{
				"type"				:	"mobiles",
				"given_name" 		:	"",
				"device_id"			:	"ljlvcj56gfhj3k34ljhl",
				"device_status"		:	"blocked",
				"connected_method"	:	"wifi",
				"allowed_conn_mtd"	:	["wifi", "ethernet"],
				"data_limit_in_gb"	:	5,
				"data_used_in_gb"	: 	0.3,
				"using_default_conf":	false
			},
			{
				"type"				:	"CCTV",
				"given_name" 		:	"Cam 1",
				"device_id"			:	"kdfj45gkh7y70kkjhkjhkj",
				"device_status"		:	"online",
				"connected_method"	:	"wifi",
				"allowed_conn_mtd"	:	["wifi", "ethernet"],
				"data_limit_in_gb"	:	8,
				"data_used_in_gb"	: 	2,
				"using_default_conf":	false
			},{
				"type"				:	"CCTV",
				"given_name" 		:	"Cam 2",
				"device_id"			:	"ljlv465hj3khk08nnljhl",
				"device_status"		:	"online",
				"connected_method"	:	"ethernet",
				"allowed_conn_mtd"	:	["wifi", "ethernet"],
				"data_limit_in_gb"	:	7,
				"data_used_in_gb"	: 	0,
				"using_default_conf":	false
			},{
				"type"				:	"CCTV",
				"given_name" 		:	"Cam 3",
				"device_id"			:	"ljlvcj56gfhj70nnljhl",
				"device_status"		:	"online",
				"connected_method"	:	"wifi",
				"allowed_conn_mtd"	:	["wifi", "ethernet"],
				"data_limit_in_gb"	:	5,
				"data_used_in_gb"	: 	0.3,
				"using_default_conf":	false
			},{
				"type"				:	"CCTV",
				"given_name" 		:	"Cam 4",
				"device_id"			:	"ljlvcj56gfhj33643jhl",
				"device_status"		:	"offline",
				"connected_method"	:	"wifi",
				"allowed_conn_mtd"	:	["wifi", "ethernet"],
				"data_limit_in_gb"	:	7,
				"data_used_in_gb"	: 	4,
				"using_default_conf":	false
			},{
				"type"				:	"smart_tv",
				"given_name" 		:	"Hall Sony",
				"device_id"			:	"ljlv3k097809hk08nnljhl",
				"device_status"		:	"online",
				"connected_method"	:	"wifi",
				"allowed_conn_mtd"	:	["wifi", "ethernet"],
				"data_limit_in_gb"	:	25,
				"data_used_in_gb"	: 	14,
				"using_default_conf":	false
			},{
				"type"				:	"smart_tv",
				"given_name" 		:	"Bed Rom FF",
				"device_id"			:	"ljl3k70708k08nnljhl",
				"device_status"		:	"offline",
				"connected_method"	:	"wifi",
				"allowed_conn_mtd"	:	["wifi", "ethernet"],
				"data_limit_in_gb"	:	20,
				"data_used_in_gb"	: 	7.8,
				"using_default_conf":	false
			}
		]
		
	},
	"routers" : [
		{
			"id"				:	"dfsdfdfhgdagjvcxc.dsfdsy9vg",
			"type"				:	"router",
			"name"				:	"Living Room",
			"power_save"		:	false,
			"auto_login_isp"	:	false,
			"security_type"		: 	0,
			"security_key"		:	"",
			"isp_credentials"	:	{
				"username"	:	"admin",
				"password"	:	"123123"
			}
		},
		{
			"id"				:	"dfsdfdfhsdfsf.sgdagjvcxc.dsfdsy9vg",
			"type"				:	"booster",
			"name"				:	"Audio Zone",
			"power_save"		:	true,
			"auto_login_isp"	:	true,
			"security_type"		: 	0,
			"security_key"		:	"",
			"isp_credentials"	:	{
				"username"	:	"admin",
				"password"	:	"123123"
			}
		},
		{
			"id"				:	"dfsdfdfh.sgdagjvcxc.dsfdsy9vg",
			"type"				:	"booster",
			"name"				:	"First Floor",
			"power_save"		:	true,
			"auto_login_isp"	:	true,
			"security_type"		: 	2,
			"security_key"		:	"qwe123$",
			"isp_credentials"	:	{
				"username"	:	"admin",
				"password"	:	"123123"
			}
		},
		{
			"id"				:	"dfsdfdfh.sgdagjvcxc.dsfdsy9vg",
			"type"				:	"booster",
			"name"				:	"Parking & Lawn",
			"power_save"		:	true,
			"auto_login_isp"	:	false,
			"security_type"		: 	0,
			"security_key"		:	"",
			"isp_credentials"	:	{
				"username"	:	"",
				"password"	:	""
			}
		}
	]
	
}