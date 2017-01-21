$(document).foundation()

templates = {
	classes: {
		tween: {
			args: {
				time: {
					type: 'float',
					description: 'The duration, in seconds.',
					condition: '0-'
				}
			}
		},
		color: {
			args: {
				red: {
					type: 'float',
					description: 'The red hue value.',
					condition: '0-1'
				},
				green: {
					type: 'float',
					description: 'The green hue value.',
					condition: '0-1'
				},
				blue: {
					type: 'float',
					description: 'The blue hue value.',
					condition: '0-1'
				},
				alpha: {
					type: 'float',
					description: 'The alpha (opacity) value. <em>(0 = transparent, 1 = opaque)</em>',
					condition: '0-1'
				}
			}
		},
		crop: {
			args: {
				percent: {
					type: 'float',
					description: 'The percentage of the Actor that will be cropped.',
					condition: '0-1'
				}
			}
		},
		fade: {
			args: {
				percent: {
					type: 'float',
					description: 'The percentage of the Actor that will be faded.',
					condition: '0-1'
				}
			}
		}
	}
};

data = {
	classes: {
		Actor: {
			inherits: '',
			accelerate: {
				template: 'tween',
				description: 'Plays the next commands at an accelerated rate (`time` * `time`). <a href="#">What is a tween ?</a>'
			},
			additiveblend: {
				args: {
					enable: {
						type: 'int',
						description: '1 to set to additive mode, 0 to set to normal mode.'
					}
				},
				description: 'Sets the blend mode to additive, or to normal. <a href="#">What is a blend mode ?</a>'
			},
			addx: {
				args: {
					x: {
						type: 'float',
						description: 'The x position to add.'
					}
				},
				description: 'Adds `x` to the Actor\'s current horizontal position.'
			},
			addy: {
				args: {
					y: {
						type: 'float',
						description: 'The y position to add.'
					}
				},
				description: 'Adds `y` to the Actor\'s current vertical position.'
			},
			addz: {
				args: {
					z: {
						type: 'float',
						description: 'The z position to add.'
					}
				},
				description: 'Adds `z` to the Actor\'s current depth position.'
			},
			align: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			animate: {
				args: {
					enable: {
						type: 'int',
						description: '1 to enable or resume the animation, 0 to disable it.'
					}
				},
				description: 'Enables/Disables the Actor\'s animation. <a href="#">What is an animation ?</a>'
			},
			aux: {
				args: {
					value: {
						type: 'float',
						description: 'The value to set as Actor\'s aux value.'
					}
				},
				description: 'Sets the Actor\'s aux value. <a href="#">What is an aux value ?</a>'
			},
			backfacecull: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			basezoomx: {
				args: {
					x: {
						type: 'float',
						description: 'The x position for the Actor\'s base zoom.'
					}
				},
				description: 'Sets the Actor\'s base horizontal zoom. Used when zooming the Actor.'
			},
			basezoomy: {
				args: {
					y: {
						type: 'float',
						description: 'The y position for the Actor\'s base zoom.'
					}
				},
				description: 'Sets the Actor\'s base vertical zoom. Used when zooming the Actor.'
			},
			blend: {
				args: {
					mode: {
						type: 'string',
						description: 'The blend mode to apply. The possible values are <a href="#">here</a>.'
					}
				},
				description: 'Sets the Actor\'s blend mode. <a href="#">What is a blend mode ?</a>'
			},
			bob: {
				description: 'Moves the Actor up and down. The movement is the same as a math sinus function. <a href="#">What is an Actor effect ?</a>'
			},
			bounce: {
				description: 'Bounces the Actor. Similar to <a>Actor.bob()</a>. <a href="#">What is an Actor effect ?</a>'
			},
			bouncebegin: {
				template: 'tween',
				description: 'Plays the next commands with a bounce effect at the beginning. <a href="#">What is a tween ?</a>'
			},
			bounceend: {
				template: 'tween',
				description: 'Plays the next commands with a bounce effect at the end. <a href="#">What is a tween ?</a>'
			},
			clearzbuffer: {
				args: {
					enable: {
						type: 'int',
						description: 'If 1, clear the z-buffer. If 0, stop clearing it.'
					}
				},
				description: 'Sets if the z-buffer must be cleared.'
			},
			cropbottom: {
				template: 'crop',
				description: 'Crops the Actor from the bottom.'
			},
			cropleft: {
				template: 'crop',
				description: 'Crops the Actor from the left.'
			},
			cropright: {
				template: 'crop',
				description: 'Crops the Actor from the right.'
			},
			croptop: {
				template: 'crop',
				description: 'Crops the Actor from the top.'
			},
			cullmode: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			decelerate: {
				template: 'tween',
				description: 'Plays the next commands at a decelerated rate (1 - (1 - `time`) * (1 - `time`)). <a href="#">What is a tween ?</a>'
			},
			diffuse: {
				template: 'color',
				description: 'Sets which colors are appearing in the Actor, allowing to color it.'
			},
			diffusealpha: {
				args: {
					alpha: {
						type: 'float',
						description: 'The alpha (opacity) value. <em>(0 = transparent, 1 = opaque)</em>',
						condition: '0-1'
					}
				},
				description: 'Sets the Actor\'s alpha value, without modifying the colors value.'
			},
			diffuseblink: {
				description: 'Switches the Actor between 2 custom colors. You can set them by using <a>Actor.effectcolor1()</a> and <a>Actor.effectcolor2()</a>. <a href="#">What is an Actor effect ?</a>'
			},
			diffusebottomedge: {
				template: 'color',
				description: 'Similar to <a>Actor.diffuse()</a>, but only colors the bottom side of the Actor.'
			},
			diffusecolor: {
				template: 'color',
				description: 'Similar to <a>Actor.diffuse()</a>, but totally ignores the `alpha` argument. (It\'s still needed though)'
			},
			diffuseleftedge: {
				template: 'color',
				description: 'Similar to <a>Actor.diffuse()</a>, but only colors the left side of the Actor.'
			},
			diffuselowerleft: {
				template: 'color',
				description: 'Similar to <a>Actor.diffuse()</a>, but only colors the lower-left corner of the Actor.'
			},
			diffuselowerright: {
				template: 'color',
				description: 'Similar to <a>Actor.diffuse()</a>, but only colors the lower-right corner of the Actor.'
			},
			diffuseramp: {
				description: 'Similar to <a>Actor.diffuseblink()</a>, but the effect will start from the second color to the first linearly, and then go back to the second. You can set the colors by using <a>Actor.effectcolor1()</a> and <a>Actor.effectcolor2()</a>. <a href="#">What is an Actor effect ?</a>'
			},
			diffuserightedge: {
				template: 'color',
				description: 'Similar to <a>Actor.diffuse()</a>, but only colors the right side of the Actor.'
			},
			diffuseshift: {
				description: 'Similar to <a>Actor.diffuseblink()</a>, but the colors will switch sinusoidally. You can set the colors by using <a>Actor.effectcolor1()</a> and <a>Actor.effectcolor2()</a>. <a href="#">What is an Actor effect ?</a>'
			},
			diffusetopedge: {
				template: 'color',
				description: 'Similar to <a>Actor.diffuse()</a>, but only colors the top side of the Actor.'
			},
			diffuseupperleft: {
				template: 'color',
				description: 'Similar to <a>Actor.diffuse()</a>, but only colors the upper-left corner of the Actor.'
			},
			diffuseupperright: {
				template: 'color',
				description: 'Similar to <a>Actor.diffuse()</a>, but only colors the upper-right corner of the Actor.'
			},
			Draw: {
				description: '(Re-)Draws the Actor manually.'
			},
			draworder: {
				args: {
					order: {
						type: 'int',
						description: 'The order. Larger values are displayed first.'
					}
				},
				description: 'Changes the draw order.'
			},
			effectclock: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			effectcolor1: {
				template: 'color',
				description: 'Changes the first color of effects. Used with <a>Actor.diffuseblink()</a>, <a>Actor.diffuseramp()</a>, and <a>Actor.diffuseshift()</a>. <a href="#">What is an Actor effect ?</a>'
			},
			effectcolor2: {
				template: 'color',
				description: 'Changes the second color of effects. Used with <a>Actor.diffuseblink()</a>, <a>Actor.diffuseramp()</a>, and <a>Actor.diffuseshift()</a>. <a href="#">What is an Actor effect ?</a>'
			},
			effectdelay: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			effectmagnitude: {
				args: {
					x: {
						type: 'float',
						description: 'The magnitude on the x axis.'
					},
					y: {
						type: 'float',
						description: 'The magnitude on the y axis.'
					},
					z: {
						type: 'float',
						description: 'The magnitude on the z axis.'
					}
				},
				description: 'Sets the magnitude for each axis for effects like <a>Actor.vibrate()</a>. <a href="#">What is an Actor effect ?</a>'
			},
			effectoffset: {
				args: {
					time: {
						type: 'float',
						description: 'The offset to apply, in seconds.'
					}
				},
				description: 'Sets the offset of effects to `time`. <a href="#">What is an Actor effect ?</a>'
			},
			effectperiod: {
				args: {
					time: {
						type: 'float',
						description: 'The period to apply, in seconds.'
					}
				},
				description: 'Sets the period of effects to `time`. <a href="#">What is an Actor effect ?</a>'
			},
			fadebottom: {
				template: 'fade',
				description: 'Fades the Actor from the bottom.'
			},
			fadeleft: {
				template: 'fade',
				description: 'Fades the Actor from the left.'
			},
			faderight: {
				template: 'fade',
				description: 'Fades the Actor from the right.'
			},
			fadetop: {
				template: 'fade',
				description: 'Fades the Actor from the top.'
			},
			finishtweening: {
				description: 'Finishes instantly the current (and queued) tween(s).'
			},
			getaux: {
				returnType: 'float',
				description: 'Gets the Actor\'s aux value. <a href="#">What is an aux value ?</a>'
			},
			GetBaseZoomX: {
				returnType: 'float',
				description: 'Gets the Actor\'s base zoom value at horizontal (X) axis.'
			},
			GetEffectDelta: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			geteffectmagnitude: {
				returnType: 'float',
				description: 'Gets the effect magnitude currently applied to the Actor. Since the effect magnitude is composed of three floats (see <a>Actor.effectmagnitude()</a>), this function returns three floats.',
				example: 'x,y,z = actor:geteffectmagnitude();'
			},
			GetHeight: {
				returnType: 'float',
				description: 'Gets the current Actor\'s height.'
			},
			GetName: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			getrotation: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			GetSecsIntoEffect: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			GetWidth: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			GetX: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			GetY: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			GetZ: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			GetZoom: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			GetZoomX: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			GetZoomY: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			GetZoomZ: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			glow: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			glowblink: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			glowshift: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			halign: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			heading: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			/*hibernate: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			hidden: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			horizalign: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			hurrytweening: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			linear: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			luaeffect: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			pause: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			pitch: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			play: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			playcommand: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			position: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			pulse: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			queuecommand: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			queuemessage: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			rainbow: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			roll: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			rotationx: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			rotationy: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			rotationz: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			scaletocover: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			scaletofit: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			SetHeight: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			SetName: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			setstate: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			SetTextureFiltering: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			SetWidth: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			shadowlength: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			skewto: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			skewx: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			sleep: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			spin: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			spring: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			stopeffect: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			stoptweening: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			stretchto: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			texturewrapping: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			valign: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			vertalign: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			vibrate: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			visible: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			wag: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			x: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			y: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			z: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			zbias: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			zbuffer: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			zoom: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			zoomto: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			zoomtoheight: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			zoomtowidth: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			zoomx: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			zoomy: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			zoomz: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			ztest: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			ztestmode: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},
			zwrite: {
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			}*/
		}
	}
};

// Replacer mots-clés, liens, et variables
function replaceKeywords(str, args) {
	var ret = str.replace('`true`', '<span class="bool">true</span>').replace('`false`', '<span class="bool">false</span>');

	ret = ret.replace(/<a>([^<>]+)\.([^<>]+)\(\)<\/a>/gi, function(match, className, methodName) {
		return '<a class="code" href="#'+ className.toLowerCase() +'_'+ methodName.toLowerCase() +'">'+ className +'.'+ methodName +'()</a>';
	})

	if (typeof args !== 'undefined') {
		$.each(args, function(k_arg, v_arg) {
			var regex = '`'+ k_arg +'`';
			ret = ret.replace(new RegExp(regex, 'gi'), '<span class="'+ v_arg.type +'">'+ k_arg +'</span>');
		});
	}

	ret = ret.replace(/`([^`]+)`/g, function(match, content) {
		return '<span>'+ content +'</span>';
	});

	return ret;
}

// Parser les conditions
function parseConditions(condition, argType) {
	var ret = {};
	switch (argType) {
		case 'int':
			// Minimum et maximum
			if (condition.match(/^(-?\d+)-(-?\d+)$/)) {
				var match = condition.match(/^(-?\d+)-(-?\d+)$/);
				ret = {
					min: match[1],
					max: match[2]
				}
			}
			// Minimum
			else if (condition.match(/^(-?\d+)-$/)) {
				ret = {
					min: condition.match(/^(-?\d+)-$/)[1]
				}
			}
			// Maximum
			else if (condition.match(/^-(-?\d+)$/)) {
				ret = {
					max: condition.match(/^-(-?\d+)$/)[1]
				}
			}
		break;

		case 'float':
			// Minimum et maximum
			if (condition.match(/^(-?\d+(?:\.?\d+)?)-(-?\d+(?:\.?\d+)?)$/)) {
				var match = condition.match(/^(-?\d+(?:\.?\d+)?)-(-?\d+(?:\.?\d+)?)$/);
				ret = {
					min: match[1],
					max: match[2]
				}
			}
			// Minimum
			else if (condition.match(/^(-?\d+(?:\.?\d+)?)-$/)) {
				ret = {
					min: condition.match(/^(-?\d+(?:\.?\d+)?)-$/)[1]
				}
			}
			// Maximum
			else if (condition.match(/^-(-?\d+(?:\.?\d+)?)$/)) {
				ret = {
					max: condition.match(/^-(-?\d+(?:\.?\d+)?)$/)
				}
			}
		break;
	}
	return ret;
}

// Parser les classes
function parseClasses() {

	// Itération sur les classes
	$.each(data.classes, function(k_class, v_class) {

		// Création de l'article
		var $article = $('<article></article>').attr('id', k_class.toLowerCase());
		var $articleTitle = $('<h4></h4>').text(k_class);
		$article.append($articleTitle);

		// Création du tableau de méthodes
		var $table = $('<table></table>');
		var $tableHeader = $('<thead><tr><th>Availability</th><th>Method</th></tr></thead>');
		$table.append($tableHeader);

		// Itération sur les méthodes
		$.each(v_class, function(k_method, v_method) {
			// Si clé "inherits" réservée à la classe, ou si description vide, ignorer
			if (k_method == 'inherits' || v_method.description == '') {
				return;
			}

			// Création des éléments
			var $row = $('<tr></tr>');
			var $firstElement = $('<td></td>');
			var $secondElement = $('<td></td>');
			var content = [];
			var args = '';                          // Utilisé pour le prototype de la fonction.
			var argsDescription = [];
			var validArgs = {};                     // Utilisé pour la coloration de la description avec replaceKeywords()
			var description = v_method.description; // Utilisé pour la coloration de la description.

			// Si template utilisée
			if (typeof v_method.template !== 'undefined') {
				$.each(templates.classes[v_method.template], function(k_template, v_template) {
					// Définition des arguments de la template
					v_method.args = v_template;
				});
			}

			// Itération sur les arguments de la méthode, s'il y en a
			if (typeof v_method.args !== 'undefined') {
				$.each(v_method.args, function(k_arg, v_arg) {
					// Si pas de type, ou de description, ignorer
					if (v_arg.type === '' || v_arg.description === '') {
						return;
					}

					// Si condition fournie, la parser
					var conditionText;
					if (typeof v_arg.condition !== 'undefined') {
						var condData = parseConditions(v_arg.condition, v_arg.type);
						if (typeof condData.min !== 'undefined' && typeof condData.max !== 'undefined') {
							conditionText = '(must be between '+ condData.min +' and '+ condData.max +')';
						}
						else if (typeof condData.min !== 'undefined') {
							conditionText = '(must be greater or equal than '+ condData.min +')';
						}
						else if (typeof condData.max !== 'undefined') {
							conditionText = '(must be lesser or equal than '+ condData.max +')';
						}

					}

					// Ajout de l'argument dans le prototype affiché
					args += '<span class="'+ v_arg.type +'">'+ v_arg.type +'</span> '+ k_arg +'<span>, </span>';
					// Ajout de la ligne réservée à l'argument
					var argDescription = replaceKeywords('<span class="'+ v_arg.type +'">'+ v_arg.type +' <strong>'+ k_arg +'</strong></span> : '+ v_arg.description);
					argDescription = (conditionText) ? argDescription +' <span class="no-mono condition">'+ conditionText +'</span>' : argDescription;

					argsDescription.push(argDescription);
					// Ajout de l'argument dans validArgs, utilisé pour replaceKeywords()
					validArgs[k_arg] = v_arg;
				});
			}

			// Remplacer mots clés
			description = replaceKeywords(description, validArgs);

			// Retirer ", " final
			if (args !== '') {
				args = args.slice(0, -15); //"<span>, </span>" <- 15 caractères
			}

			// Mise en place du contenu de chaque div
			content.push(((typeof v_method.returnType !== 'undefined') ? '<span class="'+ v_method.returnType +'">'+ v_method.returnType +'</span> ' : '<span>void</span> ') + '<strong>'+ k_method +'</strong> ( '+ ( (args !== '') ? args : '<span>void</span>' ) +' )');
			content.push(description);
			$.each(argsDescription, function(i_description, v_description) {
				content.push(replaceKeywords(v_description, validArgs));
			});

			// Itération sur le contenu des divs
			$.each(content, function(i_content, v_content) {
				var $div = $('<div>'+ v_content +'</div>');
				// Ajout des divs dans la seconde cellule
				$secondElement.append($div);
			});

			// Ajout de l'id, utilisé pour les liens
			$firstElement.attr('id', k_class.toLowerCase() +'_'+ k_method.toLowerCase());

			// Ajout des cellules dans la ligne, et dans le tableau
			$row.append($firstElement).append($secondElement);
			$table.append($row);
		});

		// Ajout du tableau et de l'article dans la section
		$article.append($table);
		$('#classes').append($article);
	});

}

function init() {

	// Générer le contenu de #classes
	parseClasses();

	// Smooth Scrolling & Highlighting
	var animating = false;
	$('a[href*=#]:not([href=#])').click(function() {
		if (!animating && location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('#main').animate({
					scrollTop: $('#main').scrollTop() + target.offset().top - (($(window).height() - target.height())/2)
				}, 900);

				animating = true;
				target.parent().children().delay(700).animate({
					backgroundColor: '#888'
				}, 700, 'swing', function() {
					target.parent().children().animate({
						backgroundColor: 'rgba(0, 0, 0, 0)'
					}, 1300, 'swing', function() {
						animating = false;
					});
				});
			}
		}
		return false;
	});

};

$(function() {
	init();
});