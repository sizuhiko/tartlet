steal('jquery').then(
	'cookbook/recipe/create',
	'cookbook/recipe/list',
	'./cookbook.less',
	'bootstrap/css/bootstrap.min.css', 
	'bootstrap/js/bootstrap.min.js',
function(RecipeCreate, RecipeList){
	
	new RecipeList('#recipes');
	new RecipeCreate('#create');

	$('#openform').on('click', function(){
		$('#postform').modal().on('show', function () {
			var inner = $(window).innerHeight();
			var height = 'auto';
			if($(this).height() > inner) {
				height = inner - inner*0.2 - 140;
			}
		    $(this).find('.modal-body').css({'max-height': height});
		});
	});

})
