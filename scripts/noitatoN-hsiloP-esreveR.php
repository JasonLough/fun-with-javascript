<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>noitatoN hsiloP esreveR</title>
</head>
<body>
	<?php 

		/*
			3 4 +        = 3 + 4
			3 4 - 5 +    = 3 - 4 + 5
			5 1 2 + 4 * + 3 -
		*/

		//leaving this in, wouldnt leave this in for a client
		ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);		

		//decided to go procedural since the wiki article had a very straightforward algorithm
		function calc() {
			$stack = array();
			$input = $_POST['rpe']; //reverse polish equation

			$input = explode(" ", $input); //brainfarted here. keeping original for posterity.
			//$input = $input.explode(" "); // its like js married php and had lisp
			
			foreach($input as $op) {

				if( is_numeric($op) ) { 
					echo "pushing $op onto stack. Stack :  <br />";
					array_push($stack, $op);
					
					echo "<pre>";
					echo print_r( array_reverse($stack) );
					echo "</pre>";

				} elseif ( in_array( $op, array('+', '-', '*', '/') ) ) {
					echo "poping top 2 elements off stack, performing this op on them : $op<br />";
					
					$var1 = array_pop($stack);
					$var2 = array_pop($stack);
					
					$dont_do_this = "return $var2 $op $var1;"; //theres far better ways to do this, but you shouldnt be able to break this simple implementation with fuzzing. Worst youll get is a die() message.

					echo "<pre>";
					echo print_r( array_reverse($stack) );
					echo "</pre>";

					array_push( $stack, eval($dont_do_this) );
				} else {
					die("$op is invalid. It is a " . gettype($op) . '.');
				}

			}

			echo '<strong>Answer : ' . $stack[0] . "</strong><br />";
			
		}

		$prev_value = isset($_POST['rpe']) ? $_POST['rpe'] : ""; // <-- attack vector!! (looking at you, wordpress ಠ_ಠ)
		if(isset($_POST['rpe'])) 
			calc();

    //this can be done waaaaaaay better...
	?>
	<form action="rpn.php" method='POST'>
	<input type="text" name='rpe' value = "">
	<input type="submit">
	</form>
	<p>Note : Stack is an array, turned upside down for visual aid since we push and pop off the top of a stack.</p>

</body>
</html>

