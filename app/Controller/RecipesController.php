<?php
App::uses('AppController', 'Controller');
/**
 * Recipes Controller
 *
 * @property Recipe $Recipe
 */
class RecipesController extends AppController {
	public $components = array('RequestHandler');
/**
 * index method
 *
 * @return void
 */
	public function index() {
		$this->Recipe->recursive = 0;
		$recipes = $this->Recipe->find('all');
		$this->set(array(
			'recipes' => array_map(function($recipe){ return $recipe['Recipe']; }, $recipes),
			'_serialize' => 'recipes'
		));
	}

/**
 * view method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function view($id = null) {
		if (!$this->Recipe->exists($id)) {
			throw new NotFoundException(__('Invalid recipe'));
		}
		$options = array('conditions' => array('Recipe.' . $this->Recipe->primaryKey => $id));
        $this->set(array(
            'recipe' => $this->Recipe->find('first', $options),
            '_serialize' => array('recipe')
        ));
	}

/**
 * add method
 *
 * @return void
 */
	public function add() {
		if ($this->request->is('post')) {
			$this->Recipe->create();
			$recipe = $this->Recipe->save($this->request->data);
			if ($recipe) {
				$result = $recipe['Recipe'];
			} else {
				$result = 'Error';
			}
			$this->set(array(
				'result' => $result,
				'_serialize' => 'result'
			));
		}
	}

/**
 * edit method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function edit($id = null) {
		if (!$this->Recipe->exists($id)) {
			throw new NotFoundException(__('Invalid recipe'));
		}
		if ($this->request->is('post') || $this->request->is('put')) {
			if ($this->Recipe->save($this->request->data)) {
				$message = 'Saved';
			} else {
				$message = 'Error';
			}
		} else {
			$options = array('conditions' => array('Recipe.' . $this->Recipe->primaryKey => $id));
	        $this->set(array(
	            'recipe' => $this->Recipe->find('first', $options),
	            '_serialize' => array('recipe')
	        ));
		}
	}

/**
 * delete method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function delete($id = null) {
		$this->Recipe->id = $id;
		if (!$this->Recipe->exists()) {
			throw new NotFoundException(__('Invalid recipe'));
		}
		$this->request->onlyAllow('post', 'delete');
		if ($this->Recipe->delete()) {
			$message = 'Deleted';
		} else {
            $message = 'Error';
        }
        $this->set(array(
            'message' => $message,
            '_serialize' => array('message')
        ));
    }
}
