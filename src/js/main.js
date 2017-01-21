$(document).foundation()

objects = [
	'LuaReference'
];

templates = {
	classes: {
		time: {
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
			accelerate: {
				template: 'time',
				description: 'Plays the next Actor methods at an accelerated rate (`time` * `time`). <a href="#">What is a tween ?</a>'
			},
			additiveblend: {
				args: {
					enable: {
						type: 'int',
						description: '1 to set to additive mode, 0 to set to normal mode.',
						condition: [0, 1]
					}
				},
				description: 'Sets the blend mode to additive, or to normal. See <a>Actor.blend()</a> for other possible values. <a href="#">What is a blend mode ?</a>'
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
				notitg: 1,
				args: {
					hPos: {
						type: 'float',
						description: 'The horizontal position. For example, 0 will align to the left, 0.5 to the center, and 1 to the right.',
						condition: '0-1'
					},
					vPos: {
						type: 'float',
						description: 'The vertical position. For example, 0 will align to the top, 0.5 to the middle, and 1 to the bottom.',
						condition: '0-1'
					}
				},
				description: 'Does both <a>Actor.halign()</a> and <a>Actor.valign()</a>.'
			},
			animate: {
				args: {
					enable: {
						type: 'int',
						description: '1 to enable or resume the animation, 0 to disable it.',
						condition: [0, 1]
					}
				},
				description: 'Enables/Disables the Actor\'s animation.'
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
					enable: {
						type: 'int',
						description: '1 to set the cull mode to "back", 0 to set to "none".',
						condition: [0, 1]
					}
				},
				description: 'Sets the cull mode to either "back", or "none". See <a>Actor.cullmode()</a> for other possible values.'
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
						description: 'The blend mode to apply.',
						condition: ['normal', 'add', 'substract', 'modulate', 'copysrc', 'alphamask', 'alphaknockout', 'alphamultiply', 'weightedmultiply', 'invertdest', 'noeffect']
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
				template: 'time',
				description: 'Plays the next Actor methods with a bounce effect at the beginning. <a href="#">What is a tween ?</a>'
			},
			bounceend: {
				template: 'time',
				description: 'Plays the next Actor methods with a bounce effect at the end. <a href="#">What is a tween ?</a>'
			},
			clearzbuffer: {
				args: {
					enable: {
						type: 'int',
						description: 'If 1, clear the z-buffer. If 0, stop clearing it.',
						condition: [0, 1]
					}
				},
				description: 'Sets if the z-buffer must be cleared.'
			},
			cmd: {
				notitg: 1,
				args: {
					cmds: {
						type: 'string',
						description: 'The commands to apply, in the cmd notation.'
					}
				},
				description: 'Executes Actor methods on the actor, with the cmd notation.',
				example: 'self:cmd(\'addx,30;zoom,2\'); -- Does :addx(30), :zoom(2)'
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
					mode: {
						type: 'string',
						description: 'The cull mode to apply.',
						condition: ['back', 'front', 'none']
					}
				},
				description: 'Sets the cull mode of the Actor.'
			},
			decelerate: {
				template: 'time',
				description: 'Plays the next Actor methods at a decelerated rate (1 - (1 - `time`) * (1 - `time`)). <a href="#">What is a tween ?</a>'
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
				notitg: 1,
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
					clock: {
						type: 'string',
						description: 'The clock to apply.',
						condition: ['timer', 'beat', 'music', 'bgm']
					}
				},
				description: 'Sets the effect clock of the Actor to `clock`.'
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
					delay: {
						type: 'float',
						description: 'The delay to apply, in seconds.'
					}
				},
				description: 'Sets the global delay of every effects applied to the Actor.'
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
				description: 'Finishes instantly the current and/or queued tween(s).'
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
				returnType: 'float',
				description: 'Gets the current effect delta of the Actor.'
			},
			geteffectmagnitude: {
				returnType: 'float',
				description: 'Gets the effect magnitude currently applied to the Actor. Since the effect magnitude is composed of three floats (see <a>Actor.effectmagnitude()</a>), this method returns three floats.',
				example: 'x,y,z = actor:geteffectmagnitude();'
			},
			GetHeight: {
				returnType: 'float',
				description: 'Gets the current Actor\'s height.'
			},
			GetName: {
				notitg: 1,
				returnType: 'string',
				description: 'Gets the current name of the Actor. It can be set by either using <a>Actor.SetName()</a>, or by adding a "Name" attribute.'
			},
			getrotation: {
				returnType: 'float',
				description: 'Gets the current rotations of the Actor for each axis. Since there are 3 axis, this method returns three floats. You can set them by using <a>Actor.rotationx()</a>, <a>Actor.rotationy()</a>, and <a>Actor.rotationz()</a>, or add/substract values to them using <a>Actor.pitch()</a>, <a>Actor.heading()</a>, and <a>Actor.roll()</a>.',
				example: 'rotx,roty,rotz = actor:getrotation();'
			},
			GetSecsIntoEffect: {
				returnType: 'float',
				description: 'Gets the number of seconds an Actor is running an effect. <a href="#">What is an Actor effect ?</a>'
			},
			GetWidth: {
				returnType: 'float',
				description: 'Gets the current Actor\'s width.'
			},
			GetX: {
				returnType: 'float',
				description: 'Gets the Actor\'s current X position. You can set it using <a>Actor.x()</a>.'
			},
			GetY: {
				returnType: 'float',
				description: 'Gets the Actor\'s current Y position. You can set it using <a>Actor.y()</a>.'
			},
			GetZ: {
				returnType: 'float',
				description: 'Gets the Actor\'s current Z position. You can set it using <a>Actor.z()</a>.'
			},
			GetZoom: {
				returnType: 'float',
				description: 'Gets the Actor\'s current Zoom. It can be set using <a>Actor.zoom()</a>.'
			},
			GetZoomX: {
				returnType: 'float',
				description: 'Gets the Actor\'s current Zoom. It can be set using <a>Actor.zoomx()</a> or <a>Actor.zoomto()</a>.'
			},
			GetZoomY: {
				returnType: 'float',
				description: 'Gets the Actor\'s current Zoom. It can be set using <a>Actor.zoomy()</a> or <a>Actor.zoomto()</a>.'
			},
			GetZoomZ: {
				returnType: 'float',
				description: 'Gets the Actor\'s current Zoom. It can be set using <a>Actor.zoomz()</a>.'
			},
			glow: {
				template: 'color',
				description: 'Sets the glow color of the Actor. (Used with <a>Actor.glowblink()</a> and <a>Actor.glowshift()</a>)'
			},
			glowblink: {
				description: 'Makes the Actor glow immediately between its original color and the glow color (set with <a>Actor.glow()</a>). <a href="#">What is an Actor effect ?</a>'
			},
			glowshift: {
				description: 'Makes the Actor glow smoothly between its original color and the glow color (set with <a>Actor.glow()</a>). <a href="#">What is an Actor effect ?</a>'
			},
			halign: {
				notitg: 1,
				args: {
					hPos: {
						type: 'float',
						description: 'The horizontal position. For example, 0 will align to the left, 0.5 to the center, and 1 to the right.',
						condition: '0-1'
					}
				},
				description: 'Sets the Actor\'s horizontal alignment.'
			},
			heading: {
				args: {
					roty: {
						type: 'float',
						description: 'The value, in degrees, to add.'
					}
				},
				description: 'Adds `roty` to the vertical (called Y, yaw, or heading) axis\' rotation.'
			},
			hibernate: {
				template: 'time',
				description: 'Hides the Actor for `time` seconds.'
			},
			hidden: {
				args: {
					enable: {
						type: 'int',
						description: '1 to hide the Actor, 0 to keep it visible.',
						condition: [0, 1]
					}
				},
				description: 'Hides the Actor.'
			},
			horizalign: {
				args: {
					hAlign: {
						type: 'string',
						description: 'The horizontal alignment to apply.',
						condition: ['left', 'center', 'right']
					}
				},
				description: 'Sets the Actor\'s horizontal alignment. For a more precise alignment, see <a>Actor.halign()</a>.'
			},
			hurrytweening: {
				args: {
					factor: {
						type: 'float',
						description: 'The factor to apply.',
						condition: '0-'
					}
				},
				description: 'Multiply the speed of every active and/or queued tween of the Actor.'
			},
			linear: {
				template: 'time',
				description: 'Plays the next Actor methods linearly. <a href="#">What is a tween ?</a>'
			},
			luaeffect: {
				args: {
					name: {
						type: 'string',
						description: 'The name of the command.'
					}
				},
				description: 'Disables every effects on the Actor, and instead use an Actor Command to draw manually the Actor. Use this wisely, this hasn\'t been tested well, and can be resource-expensive.'
			},
			pause: {
				description: 'Pauses the animations occuring on the Actor.'
			},
			pitch: {
				args: {
					rotx: {
						type: 'float',
						description: 'The value, in degrees, to add.'
					}
				},
				description: 'Adds `rotx` to the horizontal (called X, or pitch) axis\' rotation.'
			},
			play: {
				description: 'Resumes the animations occuring on the Actor.'
			},
			playcommand: {
				args: {
					commandName: {
						type: 'string',
						description: 'The name of the command to call.'
					}
				},
				description: 'Calls immediately a command named `commandName` .. "Command". <a href="#">What is an Actor Command ?</a>',
				example: 'actor:playcommand(\'BarrelRoll\'); -- Will call the "BarrelRollCommand" command of the Actor.'
			},
			/*position: { TODO
				args: {
					pos: {
						type: 'float',
						description: ''
					}
				},
				description: ''
			},*/
			pulse: {
				description: 'Makes the Actor growing and shrinking. <a href="#">What is an Actor effect ?</a>'
			},
			queuecommand: {
				args: {
					commandName: {
						type: 'string',
						description: 'The name of the command to queue.'
					}
				},
				description: 'Queues a command named `commandName` .. "Command" to be played. This is usually used right after doing a <a>Actor.sleep()</a>. <a href="#">What is an Actor Command ?</a>',
				example: 'self:sleep(1); -- Wait 1 second ...<br />self:queuecommand(\'BarrelRoll\'); -- ... and then "BarrelRollCommand" will be called.'
			},
			queuemessage: {
				args: {
					messageName: {
						type: 'string',
						description: 'The name of the message to queue.'
					}
				},
				description: 'Queues a message. Rarely used, you might want to use <a>MessageManager.Broadcast()</a>. <a href="#">What is a message ?</a>'
			},
			rainbow: {
				description: 'Makes the Actor change colors continually, through every color of a rainbow. <a href="#">What is an Actor effect ?</a>'
			},
			roll: {
				args: {
					rotz: {
						type: 'float',
						description: 'The value, in degrees, to add.'
					}
				},
				description: 'Adds `rotz` to the Z/roll axis\' rotation.'
			},
			rotationx: {
				args: {
					rotx: {
						type: 'float',
						description: 'The rotation to apply, in degrees.'
					}
				},
				description: 'Sets the X/Pitch axis\' rotation.'
			},
			rotationy: {
				args: {
					roty: {
						type: 'float',
						description: 'The rotation to apply, in degrees.'
					}
				},
				description: 'Sets the Y/Yaw/Heading axis\' rotation.'
			},
			rotationz: {
				args: {
					rotz: {
						type: 'float',
						description: 'The rotation to apply, in degrees.'
					}
				},
				description: 'Sets the Z/Roll axis\' rotation.'
			},
			scaletocover: {
				args: {
					left: {
						type: 'float',
						description: 'The left coordinate of the rectangle.'
					},
					top: {
						type: 'float',
						description: 'The top coordinate of the rectangle.'
					},
					right: {
						type: 'float',
						description: 'The right coordinate of the rectangle.'
					},
					bottom: {
						type: 'float',
						description: 'The bottom coordinate of the rectangle.'
					}
				},
				description: 'Scales the Actor to cover a rectangle. To keep the aspect ratio of the Actor, use <a>Actor.scaletofit()</a>.'
			},
			scaletofit: {
				args: {
					left: {
						type: 'float',
						description: 'The left coordinate of the rectangle.'
					},
					top: {
						type: 'float',
						description: 'The top coordinate of the rectangle.'
					},
					right: {
						type: 'float',
						description: 'The right coordinate of the rectangle.'
					},
					bottom: {
						type: 'float',
						description: 'The bottom coordinate of the rectangle.'
					}
				},
				description: 'Similar to <a>Actor.scaletocover()</a>, but keep the aspect ratio.'
			},
			SetHeight: {
				notitg: 1,
				args: {
					height: {
						type: 'float',
						description: 'The height, in pixels.'
					}
				},
				description: 'Sets the height of the Actor.'
			},
			SetName: {
				notitg: 1,
				args: {
					name: {
						type: 'string',
						description: 'The name to set.'
					}
				},
				description: 'Set the Actor\'s name to `name`. You might want to use a "Name" attribute in the tag, if the name won\'t change.'
			},
			/*setstate: { TODO
				args: {
					arg: {
						type: '',
						description: ''
					}
				},
				description: ''
			},*/
			SetTextureFiltering: {
				notitg: 1,
				args: {
					arg: {
						type: 'bool',
						description: 'If `true`, enables the texture filtering.'
					}
				},
				description: 'Enables/Disables the texture filtering of the Actor.'
			},
			SetWidth: {
				notitg: 1,
				args: {
					width: {
						type: 'float',
						description: 'The width, in pixels.'
					}
				},
				description: 'Sets the width of the Actor.'
			},
			shadowlength: {
				args: {
					length: {
						type: 'float',
						description: 'The length of the shadow.'
					}
				},
				description: 'Sets the shadow\'s length of the Actor.'
			},
			skewto: {
				notitg: 1,
				args: {
					amount: {
						type: 'float',
						description: 'The greater it is, the bigger the Actor will be skewed.'
					}
				},
				description: 'Skews the Actor horizontally, based on the original width of the Actor. (It is basically <a>Actor.skewx()</a> with `amount` divided by the original (unzoomed) width of the Actor.)'
			},
			skewx: {
				args: {
					amount: {
						type: 'float',
						description: 'The greater it is, the bigger the Actor will be skewed.'
					}
				},
				description: 'Skews the Actor horizontally.'
			},
			sleep: {
				template: 'time',
				description: 'Plays the next Actor methods after `time` seconds. Please note that only Actor methods are affected, and not any other commands, or lua calls/affectations. <a>Actor.playcommand()</a> also won\'t be affected. <a href="#">What is a tween ?</a>',
				example: 'self:sleep(1); -- Wait 1 second before applying Actor methods.<br />self:addx(50); -- Will move the Actor to the right AFTER 1 second<br />someFunction(); -- Will be called instantly, it won\'t wait 1 second<br />some_actor:x(50); -- Though this is an Actor Method, it won\'t wait 1 second, because the sleep() method only affects the current Actor (e.g. self)'
			},
			spin: {
				description: 'Spins the Actor continually. <a href="#">What is an Actor effect ?</a>'
			},
			spring: {
				template: 'time',
				description: 'Plays the next Actor methods at an accelerated rate until they go beyong the desired end state, and then springs back. <a href="#">What is a tween ?</a>'
			},
			stopeffect: {
				description: 'Stops any running effects.'
			},
			stoptweening: {
				description: 'Stops any running tweens. If you want them to finish instantly, use <a>Actor.finishtweening()</a>.'
			},
			stretchto: {
				args: {
					x1: {
						type: 'float',
						description: 'The X coordinate of the top-left corner.'
					},
					y1: {
						type: 'float',
						description: 'The Y coordinate of the top-left corner.'
					},
					x2: {
						type: 'float',
						description: 'The X coordinate of the bottom-right corner.'
					},
					y2: {
						type: 'float',
						description: 'The Y coordinate of the bottom-right corner.'
					}
				},
				description: 'Stretches the Actor to a rectangle defined by 2 points: The top-left corner, and the bottom-right corner.'
			},
			texturewrapping: {
				args: {
					enable: {
						type: 'int',
						description: '1 to set to use texture wrapping, or 0 to disable it.',
						condition: [0, 1]
					}
				},
				description: 'Enables/Disables the texture wrapping.'
			},
			valign: {
				notitg: 1,
				args: {
					vPos: {
						type: 'float',
						description: 'The vertical position. For example, 0 will align to the top, 0.5 to the middle, and 1 to the bottom.',
						condition: '0-1'
					}
				},
				description: 'Sets the Actor\'s horizontal alignment.'
			},
			vertalign: {
				args: {
					hAlign: {
						type: 'string',
						description: 'The vertical alignment to apply.',
						condition: ['left', 'middle', 'right']
					}
				},
				description: 'Sets the Actor\'s vertical alignment. For a more precise alignment, see <a>Actor.valign()</a>.'
			},
			vibrate: {
				description: 'Vibrates the Actor. <a href="#">What is an Actor effect ?</a>'
			},
			visible: {
				args: {
					enable: {
						type: 'int',
						description: '1 to make the Actor visible, 0 to hide it.',
						condition: [0, 1]
					}
				},
				description: 'Makes the Actor visible. (It is just <a>Actor.hidden()</a>, but inverted.)'
			},
			wag: {
				description: 'Wags the Actor. <a href="#">What is an Actor effect ?</a>'
			},
			x: {
				args: {
					xPos: {
						type: 'float',
						description: 'The X position, in pixels.'
					}
				},
				description: 'Sets the X position of the Actor.'
			},
			xy: {
				notitg: 1,
				args: {
					xPos: {
						type: 'float',
						description: 'The X position, in pixels.'
					},
					yPos: {
						type: 'float',
						description: 'The Y position, in pixels.'
					}
				},
				description: 'Sets both X and Y position of the Actor. See <a>Actor.x()</a> and <a>Actor.y()</a>.'
			},
			y: {
				args: {
					yPos: {
						type: 'float',
						description: 'The Y position, in pixels.'
					}
				},
				description: 'Sets the Y position of the Actor.'
			},
			z: {
				args: {
					zPos: {
						type: 'float',
						description: 'The Z position, in pixels.'
					}
				},
				description: 'Sets the Z position of the Actor.'
			},
			zbias: {
				args: {
					bias: {
						type: 'float',
						description: 'The bias to apply.'
					}
				},
				description: 'Sets the Z bias of the Actor.'
			},
			zbuffer: {
				args: {
					enable: {
						type: 'int',
						description: '1 to enable the z-buffer, 0 to disable it.',
						condition: [0, 1]
					}
				},
				description: 'Enables/Disables the z-buffer of the Actor.'
			},
			zoom: {
				args: {
					scale: {
						type: 'float',
						description: 'The scaling of the zoom.'
					}
				},
				description: 'Zooms the actor to `scale` scale.'
			},
			zoomto: {
				args: {
					width: {
						type: 'float',
						description: 'The width to get.'
					},
					height: {
						type: 'float',
						description: 'The height to get.'
					}
				},
				description: 'Zooms the Actor differently on X and Y axis. It just calls <a>Actor.zoomtowidth()</a> and <a>Actor.zoomtoheight()</a>.'
			},
			zoomtoheight: {
				args: {
					height: {
						type: 'float',
						description: 'The height to get.'
					}
				},
				description: 'Zooms the Actor on the Y axis.'
			},
			zoomtowidth: {
				args: {
					width: {
						type: 'float',
						description: 'The width to get.'
					}
				},
				description: 'Zooms the Actor on the X axis.'
			},
			zoomx: {
				args: {
					scale: {
						type: 'float',
						description: 'The scaling of the zoom.'
					}
				},
				description: 'Zooms the actor on the X axis to `scale` scale.'
			},
			zoomy: {
				args: {
					scale: {
						type: 'float',
						description: 'The scaling of the zoom.'
					}
				},
				description: 'Zooms the actor on the Y axis to `scale` scale.'
			},
			zoomz: {
				args: {
					scale: {
						type: 'float',
						description: 'The scaling of the zoom.'
					}
				},
				description: 'Zooms the actor on the Z axis to `scale` scale.'
			},
			ztest: {
				args: {
					enable: {
						type: 'int',
						description: '1 to set z testing mode to "writeonpass", 0 to disable z testing.',
						condition: [0, 1]
					}
				},
				description: 'Sets the z testing mode to either "writeonpass", or "off". See <a>Actor.ztestmode()</a> for other possible values.'
			},
			ztestmode: {
				args: {
					mode: {
						type: 'string',
						description: 'The z testing mode to apply.',
						condition: ['off', 'writeonpass', 'writeonfail']
					}
				},
				description: 'Sets the z testing mode.'
			},
			zwrite: {
				args: {
					enable: {
						type: 'int',
						description: '1 to enable z writing, 0 to disable it.',
						condition: [0, 1]
					}
				},
				description: 'Enables z writing on the Actor.'
			}
		}
	}
};

// Vérifier si un type de variable est un objet valide
function checkLuaObject(type) {
	return ($.inArray(type, objects) > -1) ? 'object' : type.toLowerCase();
}

// Replacer mots-clés, liens, et variables
function replaceKeywords(str, args) {
	var ret = str.replace('`true`', '<span class="bool">true</span>').replace('`false`', '<span class="bool">false</span>').replace('`nil`', '<span class="bool">nil</span>');

	ret = ret.replace(/<a>([^<>]+)\.([^<>]+)\(\)<\/a>/gi, function(match, className, methodName) {
		return '<a class="code" href="#'+ className.toLowerCase() +'_'+ methodName.toLowerCase() +'">'+ className +'.'+ methodName +'()</a>';
	})

	if (typeof args !== 'undefined') {
		$.each(args, function(k_arg, v_arg) {
			var regex = '`'+ k_arg +'`';
			ret = ret.replace(new RegExp(regex, 'gi'), '<span class="'+ checkLuaObject(v_arg.type) +'">'+ k_arg +'</span>');
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
		var $articleTitle = $('<h4></h4>').html(k_class + ((typeof v_class.inherits === 'string') ? ' : <a href="#'+ v_class.inherits.toLowerCase() +'">'+ v_class.inherits +'</a>' : ''));
		$article.append($articleTitle);

		// Création du tableau de méthodes
		var $table = $('<table></table>');
		var $tableHeader = $('<thead><tr><th>Availability</th><th>Method</th></tr></thead>');
		$table.append($tableHeader);
		var $tableBody = $('<tbody></tbody>');

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
			var $icon = $('<img>');
			var content = [];
			var args = '';                          // Utilisé pour le prototype de la fonction.
			var argsDescription = [];
			var validArgs = {};                     // Utilisé pour la coloration de la description avec replaceKeywords()
			var description = v_method.description; // Utilisé pour la coloration de la description.

			// Disponibilité
			if (typeof v_method.notitg !== 'undefined') {
				$icon.attr('src', 'img/notitg.png');
			}
			else {
				$icon.attr('src', 'img/itg.png');
			}
			$firstElement.append($icon);

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
					// Si plage de nombres
					if (typeof v_arg.condition === 'string') {
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
					// Si multiples valeurs uniquement
					else if (typeof v_arg.condition === 'object' && Array.isArray(v_arg.condition) && v_arg.condition.length >= 2) {
						conditionText = '(must be equal to ';
						// Si string
						if (v_arg.type == 'string') {
							$.each(v_arg.condition, function(i_cond, v_cond) {
								// Dernier élément
								if (i_cond == v_arg.condition.length-1) {
									conditionText += 'or "'+ v_cond +'")';
								}
								else {
									conditionText += '"'+ v_cond +'", ';
								}
							});
						}
						else {
							$.each(v_arg.condition, function(i_cond, v_cond) {
								// Dernier élément
								if (i_cond == v_arg.condition.length-1) {
									conditionText += 'or '+ v_cond +')';
								}
								else {
									conditionText += ''+ v_cond +', ';
								}
							});
						}
					}

					// Ajout de l'argument dans le prototype affiché
					args += '<span class="'+ checkLuaObject(v_arg.type) +'">'+ v_arg.type +'</span> '+ k_arg +'<span>, </span>';
					// Ajout de la ligne réservée à l'argument
					var argDescription = replaceKeywords('<span class="'+ checkLuaObject(v_arg.type) +'">'+ v_arg.type +' <strong>'+ k_arg +'</strong></span> : '+ v_arg.description);
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

			// Exemple
			if (typeof v_method.example !== 'undefined') {
				content.push('<strong>Example: </strong><br /><span class="example">'+ v_method.example +'</span>');
			}

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
			$tableBody.append($row);
		});

		// Ajout du contenu du tableau dans le tableau
		$table.append($tableBody);

		// Ajout du tableau et de l'article dans la section
		$article.append($table);
		$('#classes').append($article);
	});

}

function init() {

	// Ajout des classes dans le tableau d'objects
	$.each(data.classes, function(k_class, v_class) {
		objects.push(k_class);
	});

	// Générer le contenu de #classes
	parseClasses();

	// Smooth Scrolling & Highlighting
	var animating = false;

	$('nav,h4').find('a[href*="#"]:not([href="#"])').click(function() {
		if (!animating && location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('#main').animate({
					scrollTop: $('#main').scrollTop() + target.offset().top - (($(window).height())/2)
				}, 900);
			}
		}
		return false;
	});

	$('#classes').find('table').find('a[href*="#"]:not([href="#"])').click(function() {
		if (!animating && location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				animating = true;
				$('#main').animate({
					scrollTop: $('#main').scrollTop() + target.offset().top - (($(window).height() - target.height())/2)
				}, 900);

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