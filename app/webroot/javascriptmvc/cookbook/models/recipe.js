steal('can', function (can) {
	/**
	 * @constructor cookbook/models/recipe
	 * @alias Recipe
	 * @parent cookbook
	 * @inherits can.Model
	 *
	 * Wraps backend recipe services.
	 */
	return can.Model(
	/* @static */
	{
		/**
 		 * Find all recipes
		 */
		findAll : "GET /recipes.json",
		/**
 		 * Find one recipe
		 */
		findOne : "GET /recipes/{id}.json",
		/**
 		 * Create a recipe
		 */
		create : "POST /recipes.json",
		/**
		 * Update a recipe
		 */
		update : "PUT /recipes/{id}.json",
		/**
		 * Destroy a recipe
		 */
		destroy : "DELETE /recipes/{id}.json"
	},
	/* @Prototype */
	{});
});