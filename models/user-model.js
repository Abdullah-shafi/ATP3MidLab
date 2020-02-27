var db = require('./db');

module.exports ={
	getById: function(id, callback){
		var sql = "select * from user where id=?";
		db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getById_medicine: function(id, callback){
		var sql = "select * from medicine where product_id=?";
		db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getByName: function(uname, callback){
		
		var sql = "select * from user where username=?";
		db.getResult(sql, [uname], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	
	validate: function(user, callback){
		var sql = "select * from user where username=? and password=?";
		db.getResult(sql, [user.username, user.password], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getAll:function(callback){
		var t='customer';
		var n=1;
		var sql = "select * from user where type='"+t+"' and num='"+n+"'";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	getAll2:function(callback){
		var t1='customer';
		var n1=0;
		var sql = "select * from user where type='"+t1+"' and num='"+n1+"'";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(0);
			}
		});
	},
	getAll3:function(callback){
		
		var sql = "select * from medicine";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(0);
			}
		});
	},
	
	insert: function(user1, callback){
		var sql = "insert into  medicine (product_name,p_category,product_qty,product_type,price,vendor_name) values(?,?,?,?,?,?)" ;
		db.execute(sql, [ user1.name, user1.category,user1.quantity,user1.type, user1.price,user1.vendorname], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	insertreg: function(user, callback){
		var  num=0;
		var sql = "insert into  user (username,password,type,contact,num) values(?,?,?,?,?)" ;
		db.execute(sql, [user.username,user.password,user.type,user.contact,num], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(id, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	deletemedicine: function(id, callback){
		var sql = "delete from medicine where product_id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	
	update: function(user, callback){
		var sql = "update user set username=?,uname=?,password=?,contact=?,type=? where id=?";
		db.execute(sql, [user.username, user.uname,user.password,user.contact, user.type, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},


	update2: function(user, callback){
		var sql = "update user set num=? where id=?";
		var num=1;
		db.execute(sql, [num, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update3: function(user1, callback){
		var sql = "update medicine set product_name=?,p_category=?,product_qty=?,product_type=?,price=?,vendor_name=? where id=?";
	
		db.execute(sql, [user1.name, user1.category,user1.quantity,user1.type,user1.price,user1.vendorname,user1.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}
