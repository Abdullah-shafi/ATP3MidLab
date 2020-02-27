var express 	= require('express');
var router 		= express.Router();

var userModel   = require.main.require('./models/user-model');

router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){	
	if(req.cookies['username'] != null){
		userModel.getByName(req.cookies['username'], function(result){
			console.log(result.type);
			if(result.type=='admin'){
			
				res.render('home/index', {user: result});
			}else if(result.type=='customer'){
				console.log(result.type)
				res.render('home/user', {user: result});
		}
	});
	}


	else{
		res.redirect('/logout');
		 }
		
});
router.get('/', function(req, res){	
	if(req.cookies['username'] != null){
		userModel.getByUser(req.cookies['username'], function(result){
			res.render('home/user', {user: result});
		});
	}else{
		res.redirect('/logout');
	}
});


router.get('/alluser', function(req, res){
	userModel.getAll(function(results){
		if(results.length > 0){
			res.render('home/alluser', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})




router.get('/adduser', function(req, res){
	userModel.getAll2(function(results){
		if(results.length > 0){
			res.render('home/adduser', {userlist: results});
		}else{
			res.send('No request'); 
		}
	});
})



router.get('/add/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		res.render('home/add', {user: result});
	});
})

router.post('/add/:id', function(req, res){
	
	var user = {
		 id:req.params.id
		 
	};

	userModel.update2(user, function(status){
		if(status){
			res.redirect('/home/alluser');
		}else{
			res.redirect('/home/adduser/'+req.params.id);
		}
	});
})

router.get('/delete/:id', function(req, res){
	
	userModel.getById(req.params.id, function(result){
		res.render('home/delete', {user: result});
	});
})

router.post('/delete/:id', function(req, res){
	
	userModel.delete(req.params.id, function(status){
		if(status){
			res.redirect('/home/alluser');
		}else{
			res.redirect('/home/delete/'+req.params.id);
		}
	});
})

router.get('/deletemedicine/:id', function(req, res){
	
	userModel.getById_medicine(req.params.id, function(result){
		res.render('home/deletemedicine', {user: result});
	});
})

router.post('/deletemedicine/:id', function(req, res){
	
	userModel.deletemedicine(req.params.id, function(status){
		if(status){
			res.redirect('/home/allmedicine');
		}else{
			res.redirect('/home/deletemedicine/'+req.params.id);
		}
	});
})


router.get('/addmedicine', function(req, res){
	
			res.render('home/addmedicine');
	
})

router.post('/addmedicine', function(req, res){
		var user = {
		product_name: req.body.name,
		quantity: req.body.quantity,
		price: req.body.price,

		
	};
		userModel.pi(user, function(status){
			if(status){
				res.redirect('/home/viewmedicine');
			}else{
				res.redirect('/home/addmedicine');
			}
		});
		//res.send('login successful');


})

router.get('/allmedicine', function(req, res){
	userModel.getAll3(function(results){
		if(results.length > 0){
			res.render('home/allmedicine', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})


module.exports = router;

