<?php
/**
 * Register Post Types
 *
 * @package wp-headless
 */

/**
 * Registers component post type
 *
 * @return void
 */
function component_post_init() {
	$labels = array(
		'name'               => _x( 'Components', 'post type general name', 'wp-gatsby-headless' ),
		'singular_name'      => _x( 'Component', 'post type singular name', 'wp-gatsby-headless' ),
		'menu_name'          => _x( 'Components', 'admin menu', 'wp-gatsby-headless' ),
		'name_admin_bar'     => _x( 'Component', 'add new on admin bar', 'wp-gatsby-headless' ),
		'add_new'            => _x( 'Add New', 'component', 'wp-gatsby-headless' ),
		'add_new_item'       => __( 'Add New component', 'wp-gatsby-headless' ),
		'new_item'           => __( 'New component', 'wp-gatsby-headless' ),
		'edit_item'          => __( 'Edit component', 'wp-gatsby-headless' ),
		'view_item'          => __( 'View component', 'wp-gatsby-headless' ),
		'all_items'          => __( 'All Components', 'wp-gatsby-headless' ),
		'search_items'       => __( 'Search Components', 'wp-gatsby-headless' ),
		'parent_item_colon'  => __( 'Parent Components:', 'wp-gatsby-headless' ),
		'not_found'          => __( 'No components found.', 'wp-gatsby-headless' ),
		'not_found_in_trash' => __( 'No components found in Trash.', 'wp-gatsby-headless' ),
	);

	$args = array(
		'labels'              => $labels,
		'description'         => __( 'Description.', 'wp-gatsby-headless' ),
		'public'              => true,
		'publicly_queryable'  => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'query_var'           => true,
		'rewrite'             => array( 'slug' => 'component' ),
		'capability_type'     => 'post',
		'has_archive'         => true,
		'hierarchical'        => false,
		'menu_position'       => null,
		'show_in_graphql'     => true,
		'graphql_single_name' => 'Component',
		'graphql_plural_name' => 'Components',
		'supports'            => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments', 'revisions' ),
	);

	register_post_type( 'component', $args );
}
add_action( 'init', 'component_post_init' );
