steal('can', 'cookbook/models/recipe.js', './init.ejs', 'jquery/dom/form_params',
	function (can, Recipe, initEJS) {

	/**
	 * @constructor cookbook/recipe/create
	 * @alias RecipeCreate
	 * @parent cookbook
	 * @inherits can.Control
	 * Creates recipes
	 */
	return can.Control(
	/** @Prototype */
	{
		/**
		 *  Render the initial template
		 */
		init: function () {
			this.element.html(initEJS());
		},
		/**
		 *  Submit handler. Create a new recipe from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...')
			new Recipe(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset();

				$("#postform").modal('hide');
				$('#imagesrc').val('');
				document.querySelector('#preview').src = '';

			});
		},
		".file change" : function(el, ev){
			// File APIを利用できるかをチェック
			if (window.File) {
				// 指定されたファイルを取得
				var input = ev.target.files[0];
				// ファイル読み込みの準備
				var reader = new FileReader();
				reader.onload = (function(theFile) {
            		return function(e) {
            			document.querySelector('#preview').src = e.target.result;
                		$('#imagesrc').val(e.target.result);
            		};
        		})(input);

        		reader.readAsDataURL(input);				
			}		
		}

	});
});