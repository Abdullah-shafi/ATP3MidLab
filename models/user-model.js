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
	vp:function(callback){
		
		var sql = "select * from product";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	insert: function(user, callback){
		var sql = "insert into  user (username,uname,password,contact,type) values(?,?,?,?,?)" ;
		db.execute(sql, [ user.username, user.uname,user.password,user.contact, user.type], function(status){
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
	pi: function(user, callback){
		var sql = "insert into  product (product_name,quantity,price) values(?,?,?)";
		db.execute(sql, [user.product_name, user.quantity,user.price], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

   epu: function(user, callback){
		var sql = "update product set product_name=?,quantity=?,price=? where id=?";
		db.execute(sql, [user.product_name, user.quantity,user.price,user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}
