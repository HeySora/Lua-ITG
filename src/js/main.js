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
		},
		rectangle: {
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
			}
		},
		path: {
			args: {
				path: {
					type: 'string',
					description: 'The path to load.'
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
				description: 'Plays the next Actor methods at an accelerated rate (`time` * `time`). <a href="#Basics_Tweens">What is a tween ?</a>'
			},
			additiveblend: {
				args: {
					enable: {
						type: 'int',
						description: '1 to set to additive mode, 0 to set to normal mode.',
						condition: [0, 1]
					}
				},
				description: 'Sets the blend mode to additive, or to normal. Normal blend is set by default. See <a>Actor.blend()</a> for other possible values. <a href="#Basics_BlendModes">What is a blend mode ?</a>'
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
				description: 'Sets the Actor\'s aux value. <a href="#Basics_Aux">What is an aux value ?</a>'
			},
			backfacecull: {
				args: {
					enable: {
						type: 'int',
						description: '1 to set the cull mode to "back", 0 to set to "none".',
						condition: [0, 1]
					}
				},
				description: 'Sets the cull mode to either "back", or "none". "none" is set by default. See <a>Actor.cullmode()</a> for other possible values.'
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
				description: 'Sets the Actor\'s blend mode. It is "normal" by default. <a href="#Basics_BlendModes">What is a blend mode ?</a>'
			},
			bob: {
				description: 'Moves the Actor up and down. The movement is the same as a math sinus function. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
			},
			bounce: {
				description: 'Bounces the Actor. Similar to <a>Actor.bob()</a>. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
			},
			bouncebegin: {
				template: 'time',
				description: 'Plays the next Actor methods with a bounce effect at the beginning. <a href="#Basics_Tweens">What is a tween ?</a>'
			},
			bounceend: {
				template: 'time',
				description: 'Plays the next Actor methods with a bounce effect at the end. <a href="#Basics_Tweens">What is a tween ?</a>'
			},
			clearzbuffer: {
				args: {
					enable: {
						type: 'int',
						description: 'If 1, clear the z-buffer. If 0, stop clearing it.',
						condition: [0, 1]
					}
				},
				description: 'Sets if the z-buffer must be cleared. By default, it isn\'t cleared.'
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
				description: 'Sets the cull mode of the Actor. It is "none" by default.'
			},
			decelerate: {
				template: 'time',
				description: 'Plays the next Actor methods at a decelerated rate (1 - (1 - `time`) * (1 - `time`)). <a href="#Basics_Tweens">What is a tween ?</a>'
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
				description: 'Switches the Actor between 2 custom colors. You can set them by using <a>Actor.effectcolor1()</a> and <a>Actor.effectcolor2()</a>. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
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
				description: 'Similar to <a>Actor.diffuseblink()</a>, but the effect will start from the second color to the first linearly, and then go back to the second. You can set the colors by using <a>Actor.effectcolor1()</a> and <a>Actor.effectcolor2()</a>. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
			},
			diffuserightedge: {
				template: 'color',
				description: 'Similar to <a>Actor.diffuse()</a>, but only colors the right side of the Actor.'
			},
			diffuseshift: {
				description: 'Similar to <a>Actor.diffuseblink()</a>, but the colors will switch sinusoidally. You can set the colors by using <a>Actor.effectcolor1()</a> and <a>Actor.effectcolor2()</a>. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
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
				description: '(Re-)Draws the Actor manually. Can be useful, for example, with <a>ActorFrame.SetDrawFunction()</a>.'
			},
			draworder: {
				args: {
					order: {
						type: 'int',
						description: 'The order. Larger values are displayed first.'
					}
				},
				description: 'Changes the draw order. It is 0 by default.'
			},
			effectclock: {
				args: {
					clock: {
						type: 'string',
						description: 'The clock to apply.',
						condition: ['timer', 'beat', 'music', 'bgm']
					}
				},
				description: 'Sets the effect clock of the Actor to `clock`. It is "timer" by default.'
			},
			effectcolor1: {
				template: 'color',
				description: 'Changes the first color of effects. White (1,1,1,1) by default. Used with <a>Actor.diffuseblink()</a>, <a>Actor.diffuseramp()</a>, and <a>Actor.diffuseshift()</a>. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
			},
			effectcolor2: {
				template: 'color',
				description: 'Changes the second color of effects. White (1,1,1,1) by default. Used with <a>Actor.diffuseblink()</a>, <a>Actor.diffuseramp()</a>, and <a>Actor.diffuseshift()</a>. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
			},
			effectdelay: {
				args: {
					delay: {
						type: 'float',
						description: 'The delay to apply, in seconds.'
					}
				},
				description: 'Sets the global delay of every effects applied to the Actor. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
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
				description: 'Sets the magnitude for each axis for effects like <a>Actor.vibrate()</a>. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
			},
			effectoffset: {
				args: {
					time: {
						type: 'float',
						description: 'The offset to apply, in seconds.'
					}
				},
				description: 'Sets the offset of effects to `time`. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
			},
			effectperiod: {
				args: {
					time: {
						type: 'float',
						description: 'The period to apply, in seconds.'
					}
				},
				description: 'Sets the period of effects to `time`. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
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
				description: 'Gets the Actor\'s aux value. <a href="#Basics_Aux">What is an aux value ?</a>'
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
				description: 'Gets the number of seconds an Actor is running an effect. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
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
				description: 'Sets the glow color of the Actor. (Used with <a>Actor.glowblink()</a> and <a>Actor.glowshift()</a>) <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
			},
			glowblink: {
				description: 'Makes the Actor glow immediately between its original color and the glow color (set with <a>Actor.glow()</a>). <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
			},
			glowshift: {
				description: 'Makes the Actor glow smoothly between its original color and the glow color (set with <a>Actor.glow()</a>). <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
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
				description: 'Sets the Actor\'s horizontal alignment. It is 0.5 by default.'
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
				description: 'Sets the Actor\'s horizontal alignment. It is "center" by default. For a more precise alignment, see <a>Actor.halign()</a>.'
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
				description: 'Plays the next Actor methods linearly. <a href="#Basics_Tweens">What is a tween ?</a>'
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
				description: 'Calls immediately a command named `commandName` .. "Command". <a href="#Basics_ActorCommands">What is an Actor Command ?</a>',
				example: 'actor:playcommand(\'BarrelRoll\'); -- Will call the "BarrelRollCommand" command of the Actor.'
			},
			position: {
				args: {
					position: {
						type: 'float',
						description: 'The position.'
					}
				},
				description: 'Sets the position of the animation.'
			},
			pulse: {
				description: 'Makes the Actor growing and shrinking. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
			},
			queuecommand: {
				args: {
					commandName: {
						type: 'string',
						description: 'The name of the command to queue.'
					}
				},
				description: 'Queues a command named `commandName` .. "Command" to be played. This is usually used right after doing a <a>Actor.sleep()</a>. <a href="#Basics_ActorCommands">What is an Actor Command ?</a>',
				example: 'self:sleep(1); -- Wait 1 second ...<br />self:queuecommand(\'BarrelRoll\'); -- ... and then "BarrelRollCommand" will be called.'
			},
			queuemessage: {
				args: {
					messageName: {
						type: 'string',
						description: 'The name of the message to queue.'
					}
				},
				description: 'Queues a message. Rarely used, you might want to use <a>MessageManager.Broadcast()</a>. <a href="#Basics_Messages">What is a message ?</a>'
			},
			rainbow: {
				description: '<span class="rainbow">Makes the Actor change colors continually, through every color of a rainbow.</span> <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
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
				template: 'rectangle',
				description: 'Scales the Actor to cover a rectangle. To keep the aspect ratio of the Actor, use <a>Actor.scaletofit()</a>.'
			},
			scaletofit: {
				template: 'rectangle',
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
			setstate: {
				args: {
					state: {
						type: 'int',
						description: 'The state of the animation.'
					}
				},
				description: 'Sets the state of the Actor.'
			},
			SetTextureFiltering: {
				notitg: 1,
				args: {
					arg: {
						type: 'bool',
						description: 'If `true`, enables the texture filtering.'
					}
				},
				description: 'Enables/Disables the texture filtering of the Actor. It is enabled by default.'
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
				description: 'Plays the next Actor methods after `time` seconds. Please note that only Actor methods are affected, and not any other commands, or lua calls/affectations. <a>Actor.playcommand()</a> also won\'t be affected. <a href="#Basics_Tweens">What is a tween ?</a>',
				example: 'self:sleep(1); -- Wait 1 second before applying Actor methods.<br />self:addx(50); -- Will move the Actor to the right AFTER 1 second<br />someFunction(); -- Will be called instantly, it won\'t wait 1 second<br />some_actor:x(50); -- Though this is an Actor Method, it won\'t wait 1 second, because the sleep() method only affects the current Actor (e.g. self)'
			},
			spin: {
				description: 'Spins the Actor continually. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
			},
			spring: {
				template: 'time',
				description: 'Plays the next Actor methods at an accelerated rate until they go beyong the desired end state, and then springs back. <a href="#Basics_Tweens">What is a tween ?</a>'
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
				description: 'Enables/Disables the texture wrapping. It is disabled by default.'
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
				description: 'Sets the Actor\'s horizontal alignment. It is 0.5 by default.'
			},
			vertalign: {
				args: {
					hAlign: {
						type: 'string',
						description: 'The vertical alignment to apply.',
						condition: ['left', 'middle', 'right']
					}
				},
				description: 'Sets the Actor\'s vertical alignment. It is "middle" by default. For a more precise alignment, see <a>Actor.valign()</a>.'
			},
			vibrate: {
				description: 'Vibrates the Actor. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
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
				description: 'Wags the Actor. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
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
				description: 'Sets the Z bias of the Actor. It is 0 by default.'
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
				description: 'Sets the z testing mode. It is "off" by default.'
			},
			zwrite: {
				args: {
					enable: {
						type: 'int',
						description: '1 to enable z writing, 0 to disable it.',
						condition: [0, 1]
					}
				},
				description: 'Enables z writing on the Actor. It is disabled by default.'
			}
		},
		ActorFrame: {
			inherits: 'Actor',
			fov: {
				args: {
					fov: {
						type: 'float',
						description: 'The FOV to apply.'
					}
				},
				description: 'Sets the ActorFrame\'s Field Of View.'
			},
			GetChild: {
				args: {
					name: {
						type: 'string',
						description: 'The name of the child.'
					}
				},
				description: 'Gets the Actor of a child with its name equal to `name`, or `nil`.'
			},
			GetChildAt: {
				notitg: 1,
				args: {
					index: {
						type: 'int',
						description: 'The index of the child.',
						condition: '1-'
					}
				},
				description: 'Gets the Actor of a child at index `index`.'
			},
			GetNumChildren: {
				description: 'Gets the number of children in the ActorFrame.'
			},
			propagate: {
				args: {
					enable: {
						type: 'int',
						description: '1 to enable propagation, 0 to disable it.',
						condition: [0, 1]
					}
				},
				description: 'Enables/Disables the command propagation behavior on the ActorFrame. Disabled by default.'
			},
			SetDrawByZPosition: {
				args: {
					enable: {
						type: 'bool',
						description: 'Enables or not the "Draw By Z" behavior.'
					}
				},
				description: 'Enables/Disables the "Draw by Z Position" behavior on the ActorFrame. Disabled by default.'
			},
			SetDrawFunction: {
				notitg: 1,
				args: {
					drawFunc: {
						type: 'LuaReference',
						description: 'The function that will be called at every draw attempt.'
					}
				},
				description: 'Sets the Draw function of the ActorFrame to `drawFunc`.'
			},
			SetFOV: {
				args: {
					fov: {
						type: 'float',
						description: 'The FOV to apply.'
					}
				},
				description: 'Alias for <a>ActorFrame.fov()</a>. Sets the ActorFrame\'s Field Of View.'
			},
			SetUpdateCommand: {
				args: {
					name: {
						type: 'string',
						description: 'The name of the command that will be called.'
					}
				},
				description: 'Sets the update function of the ActorFrame to a command of it.'
			},
			SetUpdateFunction: {
				args: {
					updateFunc: {
						type: 'LuaReference',
						description: 'The function that will be called.'
					}
				},
				description: 'Sets the update function of the ActorFrame to `updateFunc`.'
			},
			SetUpdateRate: {
				args: {
					rate: {
						type: 'float',
						description: 'The rate to apply.'
					}
				},
				description: 'Sets the update function\'s rate for the ActorFrame.'
			},
			SetVanishPoint: {
				notitg: 1,
				args: {
					x: {
						type: 'float',
						description: 'The X coordinate.'
					},
					y: {
						type: 'float',
						description: 'The Y coordinate.'
					}
				},
				description: 'Sets the vanishing point of the ActorFrame. It is on the center of the screen by default.'
			},
			SetVanishX: {
				notitg: 1,
				args: {
					x: {
						type: 'float',
						description: 'The X coordinate.'
					}
				},
				description: 'Sets the horizontal coordinate of the vanishing point of the ActorFrame. SCREEN_CENTER_X by default. See also <a>ActorFrame.SetVanishPoint()</a>.'
			},
			SetVanishY: {
				notitg: 1,
				args: {
					y: {
						type: 'float',
						description: 'The Y coordinate.'
					}
				},
				description: 'Sets the vertical coordinate of the vanishing point of the ActorFrame. SCREEN_CENTER_Y by default. See also <a>ActorFrame.SetVanishPoint()</a>.'
			}
		},
		ActorFrameTexture: {
			inherits: 'ActorFrame',
			Create: {
				notitg: 1,
				description: 'Creates the ActorFrameTexture.'
			},
			EnableAlphaBuffer: {
				notitg: 1,
				args: {
					enable: {
						type: 'bool',
						description: 'Enable or not the Alpha Buffer.'
					}
				},
				description: 'Enables/Disables the Alpha Buffer. It is disabled by default.'
			},
			EnableDepthBuffer: {
				notitg: 1,
				args: {
					enable: {
						type: 'bool',
						description: 'Enable or not the Depth Buffer.'
					}
				},
				description: 'Enables/Disables the Depth Buffer. It is disabled by default.'
			},
			EnableFloat: {
				notitg: 1,
				args: {
					enable: {
						type: 'bool',
						description: 'Enable or not floats.'
					}
				},
				description: 'Enables/Disables floats. It is disabled by default.'
			},
			EnablePreserveTexture: {
				notitg: 1,
				args: {
					enable: {
						type: 'bool',
						description: 'Enable or not the Preserve Texture behavior.'
					}
				},
				description: 'Enables/Disables the Preserve Texture option. It is disabled by default.'
			},
			GetTexture: {
				notitg: 1,
				returnType: 'RageTexture',
				description: 'Gets the texture of the ActorFrameTexture.'
			},
			GetTextureName: {
				notitg: 1,
				returnType: 'string',
				description: 'Gets the Texture\'s name.'
			},
			SetTextureName: {
				notitg: 1,
				args: {
					name: {
						type: 'string',
						description: 'The name of the texture.'
					}
				},
				description: 'Sets the Texture\'s name. Used for loading textures to other objects by its name.'
			}
		},
		ActorProxy: {
			inherits: 'Actor',
			GetTarget: {
				notitg: 1,
				returnType: 'Actor',
				description: 'Gets the target of the ActorProxy.'
			},
			SetTarget: {
				notitg: 1,
				args: {
					actor: {
						type: 'Actor',
						description: 'The Actor that will be targetted.'
					}
				},
				description: 'Sets the target of the ActorProxy to `actor`.'
			}
		},
		ActorScroller: {
			inherits: 'Actor',
			SetCurrentAndDestinationItem: {
				args: {
					index: {
						type: 'float',
						description: 'The index of the targetted item.'
					}
				},
				description: 'Scrolls to the item at index `index`, and makes it the current one.'
			}
		},
		ActorSound: {
			inherits: 'Actor',
			get: {
				notitg: 1,
				returnType: 'RageSound',
				description: 'Gets the sound loaded in this ActorSound.'
			},
			load: {
				notitg: 1,
				args: {
					path: {
						type: 'string',
						description: 'The path of the sound to play.'
					}
				},
				description: 'Loads the sound into the ActorSound.'
			},
			pause: {
				notitg: 1,
				args: {
					pause: {
						type: 'bool',
						description: '`true` to pause, `false` to resume.'
					}
				},
				description: 'Pauses/Resumes the sound.'
			},
			play: {
				notitg: 1,
				description: 'Plays the sound from the beginning. If you just want to unpause a sound, see <a>ActorSound.pause()</a>.'
			},
			stop: {
				notitg: 1,
				description: 'Stops the sound.'
			}
		},
		BitmapText: {
			inherits: 'Actor',
			GetText: {
				returnType: 'string',
				description: 'Gets the current shown text.'
			},
			maxheight: {
				args: {
					height: {
						type: 'float',
						description: 'The maximum height to set, or 0 to disable.'
					}
				},
				description: 'Sets the maximum height (independant of zoom) allowed for the BitmapText.'
			},
			maxwidth: {
				args: {
					width: {
						type: 'float',
						description: 'The maximum width to set, or 0 to disable.'
					}
				},
				description: 'Sets the maximum width (independant of zoom) allowed for the BitmapText.'
			},
			settext: {
				args: {
					text: {
						type: 'string',
						description: 'The text to set.'
					}
				},
				description: 'Sets the text to `text`.'
			},
			wrapwidthpixels: {
				args: {
					width: {
						type: 'int',
						description: 'The width to wrap the text.'
					}
				},
				description: 'Wraps the text at `width` pixels.'
			}
		},
		Course: {
			GetCourseDir: {
				returnType: 'string',
				description: 'Gets the directory of the Course.'
			},
			GetDisplayFullTitle: {
				returnType: 'string',
				description: 'Gets the full title of the Course.'
			},
			GetPlayMode: {
				returnType: 'int',
				description: 'Gets the current PlayMode. (1 = Nonstop, 2 = Oni, 3 = Endless)'
			},
			GetTranslitFullTitle: {
				returnType: 'string',
				description: 'Gets the full transliterated title of the Course.'
			}
		},
		DifficultyMeter: {
			inherits: 'ActorFrame',
			Load: {
				template: 'path',
				description: 'Loads specific graphics in `path` to the DifficultyMeter.'
			},
			SetFromMeterAndDifficulty: {
				args: {
					meter: {
						type: 'int',
						description: 'The meter to use.'
					},
					difficulty: {
						type: 'int',
						description: 'The difficulty to use. See <a>Enum_Difficulty</a>.',
						condition: '0-5'
					}
				},
				description: 'Sets the DifficultyMeter\'s data from `meter` and `difficulty`.'
			},
			SetFromSteps: {
				args: {
					steps: {
						type: 'Steps',
						description: 'The Steps instance to use.'
					}
				},
				description: 'Sets the DifficultyMeter\'s data from `steps`.'
			},
			SetFromTrail: {
				args: {
					trail: {
						type: 'Trail',
						description: 'The Trail instance to use.'
					}
				},
				description: 'Sets the DifficultyMeter\'s data from `trail`.'
			},
		},
		FadingBanner: {
			inherits: 'ActorFrame',
			LoadFromSong: {
				args: {
					song: {
						type: 'Song',
						description: 'The song to use.'
					}
				},
				description: 'Loads the Banner from `song`.'
			},
			ScaleToClipped: {
				args: {
					width: {
						type: 'float',
						description: 'The target width.'
					},
					height: {
						type: 'float',
						description: 'The target height.'
					}
				},
				description: 'Scales the Banner to the specified dimensions. Identical to <a>Sprite.scaletoclipped()</a>.'
			}
		},
		Game: {
			GetName: {
				returnType: 'string',
				description: 'Gets the name of the current game ("dance" or "lights").'
			}
		},
		GameSoundManager: {
			DimMusic: {
				args: {
					volume: {
						type: 'float',
						description: 'The target volume.',
						condition: '0-1'
					},
					duration: {
						type: 'float',
						description: 'The time during which the volume will be dimmed, in seconds.',
						condition: '0-'
					}
				},
				description: 'Set the volume of the sound to `volume` for `duration` seconds.'
			},
			PlayOnce: {
				args: {
					path: {
						type: 'string',
						description: 'The path of the sound to play.'
					}
				},
				description: 'Plays the sound once. (Please note that if the "MuteActions" preference is enabled, the song won\'t be played.'
			}
		},
		GameState: {
			AnyPlayerHasRankingFeats: {
				returnType: 'bool',
				description: 'Returns `true` if any player has performed a ranked game (= not disqualified from ranking).'
			},
			ApplyGameCommand: {
				args: {
					cmd: {
						type: 'string',
						description: 'The command to execute.'
					},
					playerNumber: {
						type: 'int',
						description: 'Optional. If given, the command will be executed only for this player. Beware ! 1 = Player 1, 2 = Player 2, it isn\'t like the others methods involving a playerNumber argument !',
						condition: '1-2'
					}
				},
				description: 'Executes `cmd`, eventually for a specific player or for both.'
			},
			DelayedGameCommand: {
				args: {
					cmd: {
						type: 'string',
						description: 'The command to execute.'
					}
				},
				description: 'Executes `cmd` for both players, at the next "update" of the game (basically at the next frame).'
			},
			Env: {
				returnType: 'table',
				description: 'Gets the Environment table of the Game.'
			},
			FinishSong: {
				notitg: 1,
				description: 'Finishes the song. Equal to "Send Notes Ended" in the Debug Menu.'
			},
			GetCoinMode: {
				returnType: 'int',
				description: 'Gets the current coin mode. See <a>Enum_CoinMode</a>.'
			},
			GetCoins: {
				returnType: 'int',
				description: 'Gets the remaining coins.'
			},
			GetCoinsNeededToJoin: {
				returnType: 'int',
				description: 'Gets the amount of coins needed to join. (if 3 coins are needed, and 1 is inserted, it will return 2)'
			},
			GetCourseSongIndex: {
				returnType: 'int',
				description: 'Gets the index of the current song in the current course. (Indexes start from 0 with this method !)'
			},
			GetCurBPS: {
				returnType: 'float',
				description: 'Gets the current BPS. Multiply this by 60 to get the current BPM.'
			},
			GetCurrentCourse: {
				returnType: 'Course',
				description: 'Gets the current Course.'
			},
			GetCurrentGame: {
				returnType: 'Game',
				description: 'Gets the current Game.'
			},
			GetCurrentSong: {
				returnType: 'Song',
				description: 'Gets the current Song-'
			},
			GetCurrentSteps: {
				returnType: 'Steps',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Gets the current Steps for the specified Player.'
			},
			GetCurrentTrail: {
				returnType: 'Trail',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Gets the current Trail for the specified Player.'
			},
			GetEasiestStepsDifficulty: {
				returnType: 'int',
				description: 'Gets the easiest difficulty chosen by the players. See <a>Enum_Difficulty</a>.'
			},
			GetEditSourceSteps: {
				returnType: 'Steps',
				description: 'Gets the source Steps for the editor, or `nil` if not in Edit Mode.'
			},
			GetEnv: {
				returnType: 'string',
				args: {
					key: {
						type: 'string',
						description: 'The key to store into the table.'
					}
				},
				description: 'Gets the value stored in the Game\'s Environment Table, with the key `key`. You can get the entire table by using <a>GameState.Env()</a>.'
			},
			GetFileStructure: {
				notitg: 1,
				returnType: 'string',
				args: {
					path: {
						type: 'string',
						description: 'The path to list.'
					}
				},
				description: 'Returns names from each files and directory in `path`. This function returns a variable amount of strings, you should call it with table.pack().',
				example: 'local filesAndDirs = table.pack(GAMESTATE:GetFileStructure()); -- Put any returned strings into a unique table.'
			},
			GetInputMode: {
				notitg: 1,
				returnType: 'int',
				description: 'Gets the InputMode. See <a>Enum_InputMode</a>.'
			},
			GetMasterPlayerNumber: {
				returnType: 'int',
				description: 'Gets the Master player number. Used in double mode to determine if the user is controlling the game via P1 or P2 side. (0 = Player 1, 1 = Player 2)'
			},
			GetNumPlayersEnabled: {
				returnType: 'int',
				description: 'Gets the number of enabled players. (Either 1 or 2)'
			},
			GetNumSidesJoined: {
				returnType: 'int',
				description: 'Gets the number of sides joined.'
			},
			GetPlayMode: {
				returnType: 'int',
				description: 'Gets the current PlayMode.'
			},
			GetPlayerDisplayName: {
				returnType: 'string',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Gets the display name for the player `playerNumber`.'
			},
			GetPlayerNameFromNameEntry: {
				notitg: 1,
				returnType: 'string',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Gets the short name for the player `playerNumber`.'
			},
			GetPreferredDifficulty: {
				returnType: 'int',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Gets the preferred difficulty for player `playerNumber`. See <a>Enum_Difficulty</a>.'
			},
			GetPreferredSong: {
				returnType: 'Song',
				description: 'Gets the preferred song.'
			},
			GetPremium: {
				returnType: 'int',
				description: 'Returns the current Premium mode. See <a>Enum_Premium</a>.'
			},
			GetScreenID: {
				notitg: 1,
				returnType: 'int',
				description: 'Gets the Screen\'s ID. (Will return 573555 if in ScreenGameplay or if playing in ScreenEdit, or otherwise will return 0)'
			},
			GetShaderFlag: {
				notitg: 1,
				returnType: 'int',
				description: 'Gets the first (at index 0) shader\'s flag.'
			},
			GetShaderFlagNum: {
				notitg: 1,
				returnType: 'int',
				args: {
					index: {
						type: 'int',
						description: 'The index of the shader.',
						condition: '0-9'
					}
				},
				description: 'Gets the flag of the shader at index `index`.'
			},
			GetSongBeat: {
				returnType: 'float',
				description: 'Gets the current beat.'
			},
			GetSongBeatVisible: {
				returnType: 'float',
				description: 'Gets the current beat, without offsets / visual delays.'
			},
			GetSortOrder: {
				returnType: 'int',
				description: 'Gets the current sort order. See <a>Enum_SortOrder</a>.'
			},
			GetVersionDate: {
				notitg: 1,
				returnType: 'string',
				description: 'Gets the Version Date. (e. g. "20170105")'
			},
			GetX: {
				notitg: 1,
				returnType: 'float',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					},
					column: {
						type: 'int',
						description: 'The column to use.',
						condition: '0-'
					},
					yOffset: {
						type: 'float',
						description: 'The vertical offset of the note compared to the receptors.'
					}
				},
				description: 'Gets the X position of a note located in the column `column`. Used for calculating manually where a note should be based on which modifiers are active and its vertical position.'
			},
			GetY: {
				notitg: 1,
				returnType: 'float',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					},
					column: {
						type: 'int',
						description: 'The column to use.',
						condition: '0-'
					},
					yOffset: {
						type: 'float',
						description: 'The vertical offset of the note compared to the receptors.'
					}
				},
				description: 'Gets the Y position of a note located in the column `column`. Used for calculating manually where a note should be based on which modifiers are active and its vertical position.'
			},
			GetZ: {
				notitg: 1,
				returnType: 'float',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					},
					column: {
						type: 'int',
						description: 'The column to use.',
						condition: '0-'
					},
					yOffset: {
						type: 'float',
						description: 'The vertical offset of the note compared to the receptors.'
					}
				},
				description: 'Gets the Z position of a note located in the column `column`. Used for calculating manually where a note should be based on which modifiers are active and its vertical position.'
			},
			IsCourseMode: {
				returnType: 'bool',
				description: 'Returns `true` if we\'re in Marathon mode.'
			},
			IsDemonstration: {
				returnType: 'bool',
				description: 'Returns `true` if a demonstration is currently running.'
			},
			IsDisqualified: {
				returnType: 'bool',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Returns `true` if the specified player is disqualified.'
			},
			IsEditMode: {
				notitg: 1,
				returnType: 'bool',
				description: 'Returns `true` if we\'re in Edit mode.'
			},
			IsEventMode: {
				returnType: 'bool',
				description: 'Returns `true` if event mode is enabled.'
			},
			IsExtraStage: {
				returnType: 'bool',
				description: 'Returns `true` if we\'re in the first extra stage.'
			},
			IsExtraStage2: {
				returnType: 'bool',
				description: 'Returns `true` if we\'re in the second extra stage.'
			},
			IsGoalComplete: {
				returnType: 'bool',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Returns `true` if the specified player has completed the current goal.'
			},
			IsHumanPlayer: {
				returnType: 'bool',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Returns `true` if the specified player is human. (Is not a bot)'
			},
			IsPlayerEnabled: {
				returnType: 'bool',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Returns `true` if the specified player is enabled.'
			},
			IsSideJoined: {
				returnType: 'bool',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Returns `true` if the specified player has joined the game.'
			},
			IsSyncDataChanged: {
				returnType: 'bool',
				description: 'Returns `true` if the sync data changed. (If the user edited the song/machine offset.)'
			},
			IsWinner: {
				returnType: 'bool',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Returns `true` if the specified player is the winner.'
			},
			JoinPlayer: {
				notitg: 1,
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Joins the specified player, without deducting any coin.'
			},
			KeyPress: {
				notitg: 1,
				args: {
					key: {
						type: 'int',
						description: 'The wanted key code.'
					}
				},
				description: 'Simulates a key press.'
			},
			PlayerIsUsingModifier: {
				returnType: 'bool',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					},
					modifier: {
						type: 'string',
						description: 'The modifier to check.'
					}
				},
				description: 'Returns `true` if the specified player is using the specified modifier.'
			},
			PlayerUsingBothSides: {
				returnType: 'bool',
				description: 'Returns `true` if we\'re in double mode.'
			},
			PlayersCanJoin: {
				returnType: 'bool',
				description: 'Returns `true` if players can join the game.'
			},
			ReloadSteps: {
				notitg: 1,
				description: 'Reloads the steps. Needed after doing <a>GameState.SetSongBeat()</a>.'
			},
			SetCurrentCourse: {
				args: {
					course: {
						type: 'Course',
						description: 'The course to use.'
					}
				},
				description: 'Sets the current course to `course`.'
			},
			SetCurrentSong: {
				args: {
					song: {
						type: 'Song',
						description: 'The song to use.'
					}
				},
				description: 'Sets the current song to `song`.'
			},
			SetCurrentSteps: {
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					},
					steps: {
						type: 'Steps',
						description: 'The steps to use.'
					}
				},
				description: 'Sets the current steps of the specified player to `steps`.'
			},
			SetEnv: {
				returnType: 'string',
				args: {
					key: {
						type: 'string',
						description: 'The key to store into the table.'
					},
					value: {
						type: 'string',
						description: 'The value to store into the table.'
					}
				},
				description: 'Stores a value in the Game\'s Environment Table, with the key `key`.'
			},
			SetInputMode: {
				notitg: 1,
				args: {
					inputMode: {
						type: 'int',
						description: 'The new InputMode. See <a>Enum_InputMode</a>.',
						condition: '0-1'
					}
				},
				description: 'Sets the InputMode to `inputMode`.'
			},
			SetPreferredSong: {
				args: {
					song: {
						type: 'Song',
						description: 'The song to use.'
					}
				},
				description: 'Sets the preferred song to `song`.'
			},
			SetScreenID: {
				notitg: 1,
				args: {
					id: {
						type: 'int',
						description: 'The new ID.'
					}
				},
				description: 'Sets the Screen\'s ID.'
			},
			SetShaderFlag: {
				notitg: 1,
				args: {
					flag: {
						type: 'int',
						description: 'The shader flag to set.',
						condition: '0-9'
					}
				},
				description: 'Sets the first (at index 0) shader\'s flag.'
			},
			SetShaderFlagNum: {
				notitg: 1,
				args: {
					flag: {
						type: 'int',
						description: 'The shader flag to set.',
					},
					index: {
						type: 'int',
						description: 'The index of the shader.',
						condition: '0-9'
					}
				},
				description: 'Sets the flag of the shader at index `index`.'
			},
			SetSongBeat: {
				notitg: 1,
				args: {
					beat: {
						type: 'float',
						description: 'The target beat.'
					}
				},
				description: 'Sets the beat of the song. You must do <a>GameState.ReloadSteps()</a> right after to make it work.'
			},
			SetSongPosition: {
				notitg: 1,
				args: {
					position: {
						type: 'float',
						description: 'The target position, in seconds.'
					}
				},
				description: 'Sets the position of the song. You must do <a>GameState.ReloadSteps()</a> right after to make it work.'
			},
			SetTemporaryEventMode: {
				args: {
					enable: {
						type: 'bool',
						description: '`true` to enable it, `false` to disable it.'
					}
				},
				description: 'Enables/Disables the temporary Event Mode.'
			},
			StageIndex: {
				returnType: 'int',
				description: 'Gets the current song\'s index, starting at 1.'
			},
			UnloadSteps: {
				notitg: 1,
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Unloads the steps of the specified player.'
			}
		},
		HelpDisplay: {
			inherits: 'BitmapText',
			gettips: {
				returnType: 'table',
				description: 'Returns two tables containing the tips and the alternate tips.'
			},
			settips: {
				args: {
					tips: {
						type: 'table',
						description: 'A table containing the tips to set.'
					},
					altTips: {
						type: 'table',
						description: 'Optional. A table containing the alternate tips to set.'
					}
				},
				description: 'Sets the tips / alternate tips.'
			}
		},
		HighScore: {
			GetDate: {
				returnType: 'string',
				description: 'Gets the date and the time the high score was achieved.'
			},
			GetModifiers: {
				returnType: 'string',
				description: 'Gets the modifiers used in this score.'
			},
			GetName: {
				returnType: 'string',
				description: 'Gets the name associated with this score.'
			},
			GetPercentDP: {
				returnType: 'float',
				description: 'Gets the DP percentage of the score.'
			},
			GetScore: {
				returnType: 'int',
				description: 'Gets the score.'
			},
			GetSurvivalSeconds: {
				returnType: 'float',
				description: 'Gets the number of seconds survived.'
			},
			IsFillInMarker: {
				returnType: 'bool',
				description: 'Returns `true` if the score\'s name uses a fill-in marker.'
			}
		},
		HighScoreList: {
			GetHighScores: {
				returnType: 'table',
				description: 'Gets the table of the high scores.'
			}
		},
		MemoryCardManager: {
			GetCardState: {
				returnType: 'int',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Gets the state of the specified player\'s card. See <a>Enum_MemoryCardState</a>.'
			}
		},
		MessageManager: {
			Broadcast: {
				args: {
					message: {
						type: 'string',
						description: 'The name of the message to broadcast.'
					}
				},
				description: 'Broadcasts a message instantly. <a href="#Basics_Messages">What is a message ?</a>'
			}
		},
		Model: {
			inherits: 'Actor',
			animate: {
				notitg: 1,
				args: {
					enable: {
						type: 'bool',
						description: '`true` to enable animation, false to disable it.'
					}
				},
				description: 'Enables/Disables animation for every texture. It is enabled by default.'
			},
			animateone: {
				notitg: 1,
				args: {
					enable: {
						type: 'bool',
						description: '`true` to enable animation, false to disable it.'
					},
					index: {
						type: 'float',
						description: 'The index of the texture.'
					}
				},
				description: 'Enables/Disables animation for a specific texture. It is enabled by default.'
			},
			InvertCelPass: {
				notitg: 1,
				args: {
					enable: {
						type: 'bool',
						description: '`true` to invert, `false` to keep it as usual.'
					}
				},
				description: 'Determines if the Cel-Shading will be inverted or not.'
			},
			playanimation: {
				args: {
					name: {
						type: 'string',
						description: 'The name of the animation.'
					},
					rate: {
						type: 'float',
						description: 'The speed rate.'
					}
				},
				description: 'Plays the specified animation at `rate` speed.'
			},
			ResetAlphaTexture: {
				notitg: 1,
				args: {
					index: {
						type: 'int',
						description: 'The index of the texture.'
					}
				},
				description: 'Removes the transparent texture from the model at index `index`.'
			},
			ResetTexture: {
				notitg: 1,
				args: {
					index: {
						type: 'int',
						description: 'The index of the texture.'
					}
				},
				description: 'Removes the texture from the model at index `index`.'
			},
			SetAlphaTexture: {
				notitg: 1,
				args: {
					index: {
						type: 'int',
						description: 'The index of the texture.'
					},
					texture: {
						type: 'RageTexture',
						description: 'The texture to use.'
					}
				},
				description: 'Sets/Adds a transparent texture to the model.'
			},
			SetCelShaded: {
				notitg: 1,
				args: {
					enable: {
						type: 'bool',
						description: '`true` to enable, `false` to disable.'
					}
				},
				description: 'Determines if the model should be Cel-Shaded or not.'
			},
			SetLineColor: {
				notitg: 1,
				template: 'color',
				description: 'Sets the color of the outline.'
			},
			SetLineWidth: {
				notitg: 1,
				args: {
					width: {
						type: 'float',
						description: 'The width, in pixels.'
					}
				},
				description: 'Sets the width of the outline.'
			},
			SetPolygonMode: {
				notitg: 1,
				args: {
					mode: {
						type: 'int',
						description: 'The polygon mode. See <a>Enum_PolygonMode</a>.',
						condition: '0-1'
					}
				},
				description: 'Sets the polygon mode to `mode`.'
			},
			setstate: {
				notitg: 1,
				args: {
					state: {
						type: 'int',
						description: 'The state of the animation.'
					}
				},
				description: 'Sets the state for every texture.'
			},
			setstateone: {
				notitg: 1,
				args: {
					state: {
						type: 'int',
						description: 'The state of the animation.'
					},
					index: {
						type: 'int',
						description: 'The index of the texture.'
					}
				},
				description: 'Sets the state for a specific texture.'
			},
			SetTexture: {
				notitg: 1,
				args: {
					index: {
						type: 'int',
						description: 'The index of the texture.'
					},
					texture: {
						type: 'RageTexture',
						description: 'The texture to use.'
					}
				},
				description: 'Sets/Adds a texture to the model.'
			},
			SetTextureRotate: {
				notitg: 1,
				args: {
					index: {
						type: 'int',
						description: 'The index of the texture.'
					},
					rotation: {
						type: 'float',
						description: 'The rotation to apply, in degrees.'
					}
				},
				description: 'Sets the rotation for a specific texture.'
			},
			SetTextureScale: {
				notitg: 1,
				args: {
					index: {
						type: 'int',
						description: 'The index of the texture.'
					},
					scaleX: {
						type: 'float',
						description: 'The scaling for the X axis.'
					},
					scaleY: {
						type: 'float',
						description: 'The scaling for the Y axis.'
					}
				},
				description: 'Scales a specific texture. Shortcut for <a>Model.SetTextureScaleX()</a> and <a>Model.SetTextureScaleY()</a>.'
			},
			SetTextureScaleX: {
				notitg: 1,
				args: {
					index: {
						type: 'int',
						description: 'The index of the texture.'
					},
					scaleX: {
						type: 'float',
						description: 'The scaling for the X axis.'
					}
				},
				description: 'Scales a specific texture in the X axis.'
			},
			SetTextureScaleY: {
				notitg: 1,
				args: {
					index: {
						type: 'int',
						description: 'The index of the texture.'
					},
					scaleY: {
						type: 'float',
						description: 'The scaling for the Y axis.'
					}
				},
				description: 'Scales a specific texture in the Y axis.'
			},
			SetTextureTranslateX: {
				notitg: 1,
				args: {
					index: {
						type: 'int',
						description: 'The index of the texture.'
					},
					translateX: {
						type: 'float',
						description: 'The X translation to apply, in pixels.'
					}
				},
				description: 'Applies an horizontal translation to a specific texture.'
			},
			SetTextureTranslateY: {
				notitg: 1,
				args: {
					index: {
						type: 'int',
						description: 'The index of the texture.'
					},
					translateY: {
						type: 'float',
						description: 'The Y translation to apply, in pixels.'
					}
				},
				description: 'Applies a vertical translation to a specific texture.'
			},
			SetUseZBuffer: {
				notitg: 1,
				args: {
					enable: {
						type: 'bool',
						description: '`true` to use it, `false` to disable it.'
					}
				},
				description: 'Determines if the Z buffer should be used. It is enabled by default.'
			}
		},
		NoteSkinManager: {
			GetPath: {
				returnType: 'string',
				args: {
					button: {
						type: 'string',
						description: 'The wanted button.'
					},
					element: {
						type: 'string',
						description: 'The wanted element.'
					}
				},
				description: 'Gets the path for a specific button and element.'
			},
			GetNoteSkinNames: {
				returnType: 'table',
				description: 'Creates a table of every NoteSkin names that are valid for the current GameType.'
			}
		},
		PlayerStageStats: {
			FullCombo: {
				returnType: 'bool',
				description: 'Returns `true` if a Full Combo was obtained'
			},
			GetActualDancePoints: {
				returnType: 'int',
				description: 'Gets the actual DP.'
			},
			GetCaloriesBurned: {
				returnType: 'float',
				description: 'Gets the number of calories burned.'
			},
			GetCurrentCombo: {
				returnType: 'int',
				description: 'Gets the current combo.'
			},
			GetCurrentLife: {
				returnType: 'float',
				description: 'Gets the percentage (between 0 and 1) of the current life.'
			},
			GetGrade: {
				returnType: 'int',
				description: 'Gets the grade. See <a>Enum_Grade</a>.'
			},
			GetHoldNoteScores: {
				returnType: 'int',
				args: {
					holdNoteScore: {
						type: 'int',
						description: 'The wanted judgment. See <a>Enum_HoldNoteScore</a>.',
						condition: '0-2'
					}
				},
				description: 'Gets the amount of judgments corresponding to `holdNoteScore`.'
			},
			GetLifeRemainingSeconds: {
				returnType: 'float',
				description: 'Gets the life remaining seconds.'
			},
			GetPercentDancePoints: {
				returnType: 'float',
				description: 'Gets the DP percentage.'
			},
			GetPlayedSteps: {
				returnType: 'table',
				description: 'Creates a table (of Steps instances) of every played steps.'
			},
			GetPossibleDancePoints: {
				returnType: 'int',
				description: 'Gets the number of possible DP.'
			},
			GetPossibleSteps: {
				returnType: 'table',
				description: 'Creates a table (of Steps instances) of every possible steps.'
			},
			GetScore: {
				returnType: 'int',
				description: 'Gets the score.'
			},
			GetSurvivalSeconds: {
				returnType: 'float',
				description: 'Gets the amount of seconds the player survived.'
			},
			GetTapNoteScores: {
				returnType: 'int',
				args: {
					tapNoteScore: {
						type: 'int',
						description: 'The wanted judgment. See <a>Enum_TapNoteScore</a>.',
						condition: '0-8'
					}
				},
				description: 'Gets the amount of judgments corresponding to `tapNoteScore`.'
			},
			MaxCombo: {
				returnType: 'int',
				description: 'Gets the max combo.'
			},
			SetActualDancePoints: {
				notitg: 1,
				args: {
					amount: {
						type: 'int',
						description: 'The new amount.'
					}
				},
				description: 'Sets the amount of DP to `amount`.'
			},
			SetPossibleDancePoints: {
				notitg: 1,
				args: {
					amount: {
						type: 'int',
						description: 'The new amount.'
					}
				},
				description: 'Sets the amount of possible DP to `amount`.'
			},
			SetScore: {
				notitg: 1,
				args: {
					score: {
						type: 'int',
						description: 'The new score.'
					}
				},
				description: 'Sets the score to `score`.'
			}
		},
		PrefsManager: {
			GetPreference: {
				returnType: 'mixed',
				args: {
					pref: {
						type: 'string',
						description: 'The name of the preference.'
					}
				},
				description: 'Gets the value of the preference `pref`.'
			},
			SetPreference: {
				args: {
					pref: {
						type: 'string',
						description: 'The name of the preference.'
					},
					value: {
						type: 'mixed',
						description: 'The new value.'
					}
				},
				description: 'Set the value of a preference.'
			}
		},
		Profile: {
			GetCaloriesBurnedToday: {
				returnType: 'float',
				description: 'Gets the amount of calories burned today.'
			},
			GetCoursesActual: {
				returnType: 'float',
				args: {
					stepsType: {
						type: 'int',
						description: 'The steps\' type. See <a>Enum_StepsType</a>.'
					},
					difficulty: {
						type: 'int',
						description: 'The difficulty. See <a>Enum_Difficulty</a>.'
					}
				},
				description: 'Gets a composite of high scores on every course matched by `stepsType` and `difficulty`.'
			},
			GetCoursesPercentComplete: {
				returnType: 'float',
				args: {
					stepsType: {
						type: 'int',
						description: 'The steps\' type. See <a>Enum_StepsType</a>.'
					},
					difficulty: {
						type: 'int',
						description: 'The difficulty. See <a>Enum_Difficulty</a>.'
					}
				},
				description: 'Gets the percentage of completed courses matching `stepsType` and `difficulty`.'
			},
			GetCoursesPossible: {
				returnType: 'float',
				args: {
					stepsType: {
						type: 'int',
						description: 'The steps\' type. See <a>Enum_StepsType</a>.'
					},
					difficulty: {
						type: 'int',
						description: 'The difficulty. See <a>Enum_Difficulty</a>.'
					}
				},
				description: 'Gets the possible score of courses matched by `stepsType` and `difficulty`.'
			},
			GetGoalCalories: {
				returnType: 'int',
				description: 'Gets the number of calories needed for the goal.'
			},
			GetGoalSeconds: {
				returnType: 'int',
				description: 'Gets the number of seconds needed for the goal.'
			},
			GetGoalType: {
				returnType: 'int',
				description: 'Gets the goal type. See <a>Enum_GoalType</a>.'
			},
			GetSaved: {
				returnType: 'table',
				description: 'Gets the profile\'s data.'
			},
			GetSongNumTimesPlayed: {
				notitg: 1,
				returnType: 'int',
				args: {
					song: {
						type: 'Song',
						description: 'The song.'
					}
				},
				description: 'Gets the number of times a song have been played (and completed).'
			},
			GetSongsActual: {
				returnType: 'float',
				args: {
					stepsType: {
						type: 'int',
						description: 'The steps\' type. See <a>Enum_StepsType</a>.'
					},
					difficulty: {
						type: 'int',
						description: 'The difficulty. See <a>Enum_Difficulty</a>.'
					}
				},
				description: 'Gets a composite of high scores on every song matched by `stepsType` and `difficulty`.'
			},
			GetSongsPercentComplete: {
				returnType: 'float',
				args: {
					stepsType: {
						type: 'int',
						description: 'The steps\' type. See <a>Enum_StepsType</a>.'
					},
					difficulty: {
						type: 'int',
						description: 'The difficulty. See <a>Enum_Difficulty</a>.'
					}
				},
				description: 'Gets the percentage of completed songs matching `stepsType` and `difficulty`.'
			},
			GetSongsPossible: {
				returnType: 'float',
				args: {
					stepsType: {
						type: 'int',
						description: 'The steps\' type. See <a>Enum_StepsType</a>.'
					},
					difficulty: {
						type: 'int',
						description: 'The difficulty. See <a>Enum_Difficulty</a>.'
					}
				},
				description: 'Gets the possible score of songs matched by `stepsType` and `difficulty`.'
			},
			GetTotalNumSongsPlayed: {
				returnType: 'int',
				description: 'Gets the total number of songs played.'
			},
			GetTotalStepsWithTopGrade: {
				returnType: 'int',
				args: {
					stepsType: {
						type: 'int',
						description: 'The steps\' type. See <a>Enum_StepsType</a>.'
					},
					difficulty: {
						type: 'int',
						description: 'The difficulty. See <a>Enum_Difficulty</a>.'
					},
					grade: {
						type: 'int',
						description: 'The grade. See <a>Enum_Grade</a>.'
					}
				},
				description: 'Gets the number of steps scored on a specific grade, matching `stepsType` and `difficulty`.'
			},
			GetTotalTrailsWithTopGrade: {
				returnType: 'int',
				args: {
					stepsType: {
						type: 'int',
						description: 'The steps\' type. See <a>Enum_StepsType</a>.'
					},
					difficulty: {
						type: 'int',
						description: 'The difficulty. See <a>Enum_Difficulty</a>.'
					},
					grade: {
						type: 'int',
						description: 'The grade. See <a>Enum_Grade</a>.'
					}
				},
				description: 'Gets the number of trails scored on a specific grade, matching `stepsType` and `difficulty`.'
			},
			GetWeightPounds: {
				returnType: 'int',
				description: 'Gets the weight of the player.'
			},
			IsCodeUnlocked: {
				returnType: 'bool',
				args: {
					id: {
						type: 'string',
						descrpition: 'The ID of the song.'
					}
				},
				description: 'Returns true if the song with ID `id` is unlocked for the player.'
			},
			SetGoalCalories: {
				args: {
					calories: {
						type: 'int',
						description: 'The new goal to set, in calories.'
					}
				},
				description: 'Sets a new goal, to `calories`.'
			},
			SetGoalSeconds: {
				args: {
					seconds: {
						type: 'int',
						description: 'The new goal to set, in seconds.'
					}
				},
				description: 'Sets a new goal, to `seconds`.'
			},
			SetGoalType: {
				args: {
					goalType: {
						type: 'int',
						description: 'The goal type. See <a>Enum_GoalType</a>.'
					}
				},
				description: 'Sets the goal type.'
			},
			SetWeightPounds: {
				args: {
					weight: {
						type: 'int',
						description: 'The new weight to set, in pounds.'
					}
				},
				description: 'Sets the weight of the player.'
			}
		},
		ProfileManager: {
			GetMachineProfile: {
				returnType: 'Profile',
				description: 'Gets the machine profile.'
			},
			GetProfile: {
				returnType: 'Profile',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Gets the profile for the player `playerNumber`.'
			},
			IsPersistentProfile: {
				returnType: 'bool',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Returns true if the profile for the player `playerNumber` is persistent.'
			},
			SaveMachineProfile: {
				description: 'Saves the machine profile.'
			}
		},
		RadarValues: {
			GetValue: {
				returnType: 'int',
				args: {
					category: {
						type: 'int',
						description: 'The RadarCategory to get. See <a>Enum_RadarCategory</a>.'
					}
				},
				description: 'Gets the value of `category`.'
			}
		},
		RageDisplay: {
			ChangeCentering: {
				notitg: 1,
				args: {
					translateX: {
						type: 'int',
						description: 'The X translation to apply. 0 by default.'
					},
					translateY: {
						type: 'int',
						description: 'The Y translation to apply. 0 by default.'
					},
					addWidth: {
						type: 'int',
						description: 'The width to add. 0 by default.'
					},
					addHeight: {
						type: 'int',
						description: 'The height to add. 0 by default.'
					}
				},
				description: 'Change the centering point of the screen by translating the screen or editing its dimensions.'
			},
			GetCumFPS: {
				notitg: 1,
				returnType: 'int',
				description: 'Gets the cumulative FPS.'
			},
			GetDisplayHeight: {
				notitg: 1,
				returnType: 'int',
				description: 'Gets the height of the display (game window).'
			},
			GetDisplayWidth: {
				notitg: 1,
				returnType: 'int',
				description: 'Gets the width of the display (game window).'
			},
			GetFPS: {
				notitg: 1,
				returnType: 'int',
				description: 'Gets the number of FPS.'
			},
			GetVendor: {
				notitg: 1,
				returnType: 'string',
				description: 'Gets the vendor of the Graphic Driver.'
			},
			GetVPF: {
				notitg: 1,
				returnType: 'int',
				description: 'Gets the VPF.'
			}
		},
		RageInput: {
			GetDescriptions: {
				returnType: 'table',
				description: 'Creates a table of detected input devices\' descriptions.'
			},
			Reset: {
				notitg: 1,
				description: 'Reloads every input devices.'
			}
		},
		RageSound: {
			GetSoundPosition: {
				notitg: 1,
				returnType: 'float',
				description: 'Gets the sound position, in seconds.'
			},
			pan: {
				notitg: 1,
				args: {
					balance: {
						type: 'float',
						description: 'The new balance to apply. (0 = Left, 0.5 = Center, 1 = Right)',
						condition: '0-1'
					}
				},
				description: 'Balances the sound.'
			},
			pitch: {
				notitg: 1,
				args: {
					speed: {
						type: 'float',
						description: 'The new pitch.',
						condition: '0-100'
					}
				},
				description: 'Alias of <a>RageSound.speed()</a>.'
			},
			speed: {
				notitg: 1,
				args: {
					speed: {
						type: 'float',
						description: 'The new speed.',
						condition: '0-100'
					}
				},
				description: 'Changes the speed of the RageSound.'
			},
			SetParam: {
				notitg: 1,
				args: {
					param: {
						type: 'string',
						description: 'The parameter name.',
						condition: ['StartSecond', 'Pitch', 'Speed', 'Pan', 'Volume']
					},
					value: {
						type: 'float',
						description: 'The value to assign.'
					}
				},
				description: 'Sets a property value.'
			},
			volume: {
				notitg: 1,
				args: {
					volume: {
						type: 'float',
						description: 'The volume percentage.',
						condition: '0-1'
					}
				},
				description: 'Changes the volume.'
			}
		},
		RageTexture: {
			GetImageHeight: {
				notitg: 1,
				returnType: 'float',
				description: 'Gets the height of the image.'
			},
			GetImageWidth: {
				notitg: 1,
				returnType: 'float',
				description: 'Gets the width of the image.'
			},
			GetNumFrames: {
				notitg: 1,
				returnType: 'int',
				description: 'Gets the number of frames in the texture.'
			},
			GetPath: {
				notitg: 1,
				returnType: 'string',
				description: 'Gets the path to the texture\'s file.'
			},
			GetSourceHeight: {
				notitg: 1,
				returnType: 'Gets the source\'s height.',
				description: ''
			},
			GetSourceWidth: {
				notitg: 1,
				returnType: 'Gets the source\'s width.',
				description: ''
			},
			GetTextureCoordRect: {
				notitg: 1,
				returnType: 'table',
				description: 'Gets the coordinate of the texture as a table of floats : left, top, right, bottom.'
			},
			GetTextureHeight: {
				notitg: 1,
				returnType: 'float',
				description: 'Gets the height of the texture.'
			},
			GetTextureWidth: {
				notitg: 1,
				returnType: 'float',
				description: 'Gets the width of the texture.'
			},
			loop: {
				notitg: 1,
				args: {
					enable: {
						type: 'bool',
						description: '`true` to loop the animation, `false` to play it only once.'
					}
				},
				description: 'Determines if the animation should loop or not.'
			},
			position: {
				notitg: 1,
				args: {
					position: {
						type: 'float',
						description: 'The position.'
					}
				},
				description: 'Sets the position of the animation.'
			},
			rate: {
				notitg: 1,
				args: {
					rate: {
						type: 'float',
						description: 'The rate to apply.',
						condition: '0-1'
					}
				},
				description: 'Sets the rate of the animation.'
			},
			Reload: {
				notitg: 1,
				description: 'Reloads the texture.'
			}
		},
		RageTextureRenderTarget: {
			inherits: 'RageTexture',
			BeginRenderingTo: {
				notitg: 1,
				args: {
					preserveTexture: {
						type: 'bool',
						description: 'Enable the "Preserve Texture" option.'
					}
				},
				description: 'Begin the rendering to a texture process.'
			},
			FinishRenderingTo: {
				notitg: 1,
				description: 'Stops the rendering process.'
			}
		},
		ScreenGameplay: {
			GetLife: {
				notitg: 1,
				returnType: 'float',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Gets the life from a player. (The life is a percentage between 0 and 1)'
			},
			PauseGame: {
				notitg: 1,
				args: {
					pause: {
						type: 'bool',
						description: '`true` to pause the game, `false` to resume it.'
					}
				},
				description: 'Pauses or unpauses the game.'
			},
			SetLife: {
				notitg: 1,
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					},
					life: {
						type: 'float',
						description: 'The new life to set.',
						condition: '0-1'
					}
				},
				description: 'Sets the life of a player.'
			}
		},
		ScreenManager: {
			GetTopScreen: {
				returnType: 'Actor',
				description: 'Gets the actual screen. If used during when playing, see the <a>Class_ScreenGameplay</a> class.'
			},
			HideOverlayMessage: {
				description: 'Hides the current overlay message.'
			},
			OverlayMessage: {
				args: {
					message: {
						type: 'string',
						description: 'The message to show.'
					}
				},
				description: 'Shows a overlay message.'
			},
			SetNewScreen: {
				args: {
					screenName: {
						type: 'string',
						description: 'The screen name.'
					}
				},
				description: 'Sets the next screen to `screenName`.'
			},
			SystemMessage: {
				args: {
					message: {
						type: 'string',
						description: 'The message to show.'
					}
				},
				description: 'Shows a message that appears usually at the top of the screen for a few seconds. The message is also shown in the output log.'
			}
		},
		Song: {
			GetAllSteps: {
				returnType: 'table',
				description: 'Gets a table of all the Steps.'
			},
			GetBackgroundPath: {
				returnType: 'string',
				description: 'Gets the path of the background image.'
			},
			GetBannerPath: {
				returnType: 'string',
				description: 'Gets the path of the banner.'
			},
			GetDisplayArtist: {
				returnType: 'string',
				description: 'Gets the artist name.'
			},
			GetDisplayFullTitle: {
				returnType: 'string',
				description: 'Get the full title. (Title .. " " .. Subtitle)'
			},
			GetDisplayMainTitle: {
				returnType: 'string',
				description: 'Gets the main title.'
			},
			GetGenre: {
				returnType: 'string',
				description: 'Gets the genre.'
			},
			GetGroupName: {
				returnType: 'string',
				description: 'Gets the group name (folder) where the song is.'
			},
			GetSongDir: {
				returnType: 'string',
				description: 'Gets the directory of the song.'
			},
			GetStepsByStepsType: {
				args: {
					stepsType: {
						type: 'int',
						description: 'The steps type. See <a>Enum_StepsType</a>.'
					}
				},
				description: 'Gets a table of all the Steps matching `stepsType`.'
			},
			GetTranslitArtist: {
				returnType: 'string',
				description: 'Gets the transliterated artist name.'
			},
			GetTranslitFullTitle: {
				returnType: 'string',
				description: 'Gets the transliterated full title. (Title .. " " .. Subtitle)'
			},
			GetTranslitMainTitle: {
				returnType: 'string',
				description: 'Gets the transliterated main title.'
			},
			IsCustomSong: {
				returnType: 'bool',
				description: 'Returns true if the song is custom (loaded by a player with a USB drive).'
			},
			IsLong: {
				returnType: 'bool',
				description: 'Returns true if the song will cost 2 credits.'
			},
			IsMarathon: {
				returnType: 'bool',
				description: 'Returns true if the song will cost 3 credits.'
			},
			MusicLengthSeconds: {
				returnType: 'float',
				description: 'Gets the lenght of the music, in seconds.'
			}
		},
		SongManager: {
			FindCourse: {
				returnType: 'Course',
				args: {
					name: {
						type: 'string',
						description: 'The name to match.'
					}
				},
				description: 'Gets a course matching `name`, if found.'
			},
			FindSong: {
				returnType: 'Song',
				args: {
					name: {
						type: 'string',
						description: 'The name to match.'
					}
				},
				description: 'Gets a song matching `name`, if found.'
			},
			GetAllCourses: {
				returnType: 'table',
				args: {
					includeAutogen: {
						type: 'bool',
						description: '`true` to include autogen courses.'
					}
				},
				description: 'Gets a table of Course instances including every installed course.'
			},
			GetAllSongs: {
				returnType: 'table',
				description: 'Gets a table of Song instances including every installed song.'
			},
			GetRandomCourse: {
				returnType: 'Course',
				description: 'Gets a random course.'
			},
			GetRandomSong: {
				returnType: 'Song',
				description: 'Gets a random song.'
			}
		},
		Sprite: {
			inherits: 'Actor',
			customtexturerect: {
				template: 'rectangle',
				description: 'Scales the image to a rectangle.'
			},
			GetTexture: {
				notitg: 1,
				returnType: 'RageTexture',
				description: 'Gets the sprite\'s texture.'
			},
			Load: {
				template: 'path',
				description: 'Load the texture at path `path`, or unload the texture if `path` is `nil` or if no arguments were passed.'
			},
			LoadBackground: {
				template: 'path',
				description: 'Loads the song background texture.'
			},
			LoadBanner: {
				template: 'path',
				description: 'Loads the song banner texture.'
			},
			loop: {
				args: {
					enable: {
						type: 'bool',
						description: '`true` to loop the animation, `false` to play it only once.'
					}
				},
				description: 'Alias for <a>RageTexture.loop()</a>. Determines if the animation should loop or not.'
			},
			position: {
				args: {
					position: {
						type: 'float',
						description: 'The position.'
					}
				},
				description: 'Alias for <a>RageTexture.position()</a>. Sets the position of the animation.'
			},
			rate: {
				args: {
					rate: {
						type: 'float',
						description: 'The rate to apply.',
						condition: '0-1'
					}
				},
				description: 'Alias for <a>RageTexture.rate()</a>. Sets the rate of the animation.'
			},
			scaletoclipped: {
				args: {
					width: {
						type: 'float',
						description: 'The target width.'
					},
					height: {
						type: 'float',
						description: 'The target height.'
					}
				},
				description: 'Scales the sprite to the specified dimensions.'
			},
			setstate: {
				args: {
					state: {
						type: 'int',
						description: 'The state of the animation.'
					}
				},
				description: 'Sets the state of the sprite.'
			},
			SetTexture: {
				notitg: 1,
				args: {
					texture: {
						type: 'RageTexture',
						description: 'The new texture to set.'
					}
				},
				description: 'Sets the texture to `texture`.'
			},
			stretchtexcoords: {
				args: {
					x: {
						type: 'float',
						description: 'The x translation to apply.'
					},
					y: {
						type: 'float',
						description: 'The y translation to apply.'
					}
				},
				description: 'Sets custom coordinates to the frames of the texture.'
			},
			texcoordvelocity: {
				args: {
					velocityX: {
						type: 'float',
						description: 'The X velocity to apply.'
					},
					velocityY: {
						type: 'float',
						description: 'The Y velocity to apply.'
					}
				},
				description: 'Sets the velocity of the texture. A velocity of 1 = The texture will entirely scroll once per second. 2 = Twice per second, etc.'
			}
		},
		StageStats: {
			GetGameplaySeconds: {
				returnType: 'float',
				description: 'Gets the number of seconds played.'
			},
			GetPlayerStageStats: {
				returnType: 'PlayerStageStats',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Gets the PlayerStageStats instance for a player.'
			}
		},
		StatsManager: {
			GetAccumStageStats: {
				returnType: 'StageStats',
				description: 'Gets a StageStats instance including every game until now.'
			},
			GetBestGrade: {
				returnType: 'int',
				description: 'Gets the best grade. See <a>Enum_Grade</a>.'
			},
			GetCurStageStats: {
				returnType: 'StageStats',
				description: 'Gets the current StageStats.'
			},
			GetFinalGrade: {
				returnType: 'int',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Gets the final grade for the specified player. See <a>Enum_Grade</a>.'
			},
			GetPlayedStageStats: {
				returnType: 'StageStats',
				args: {
					rounds: {
						type: 'int',
						description: 'The number of rounds to count.'
					}
				},
				description: 'Gets a StageStats instance including the `rounds` last rounds played.'
			},
			GetStagesPlayed: {
				returnType: 'int',
				description: 'Gets the number of stages played.'
			},
			GetWorstGrade: {
				returnType: 'int',
				description: 'Gets the worst grade. See <a>Enum_Grade</a>.'
			},
			Reset: {
				description: 'Resets the stats.'
			}
		},
		Steps: {
			GetDescription: {
				returnType: 'string',
				description: 'Gets the description.'
			},
			GetDifficulty: {
				returnType: 'int',
				description: 'Gets the difficulty. See <a>Enum_Difficulty</a>.'
			},
			GetMeter: {
				returnType: 'int',
				description: 'Gets the numeric difficulty.'
			},
			GetRadarValues: {
				returnType: 'RadarValues',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Gets the RadarValues for a specific player. See <a>RadarValues.GetValue()</a>.'
			},
			GetStepsType: {
				returnType: 'int',
				description: 'Gets the Steps Type. See <a>Enum_StepsType</a>.'
			}
		},
		ThemeManager: {
			GetCurLanguage: {
				returnType: 'string',
				description: 'Gets the current language.'
			},
			GetCurThemeName: {
				returnType: 'string',
				description: 'Gets the name of the current theme.'
			},
			GetMetric: {
				returnType: 'string',
				args: {
					class: {
						type: 'string',
						description: 'The class to use.'
					},
					element: {
						type: 'string',
						description: 'The name of the parameter.'
					}
				},
				description: 'Gets the value of the `element` metric, in the `class` class.'
			},
			GetPath: {
				returnType: 'string',
				args: {
					type: {
						type: 'int',
						description: 'The type of the wanted element. See <a>Enum_ElementCategory</a>.'
					},
					class: {
						type: 'string',
						description: 'The class to use.'
					},
					element: {
						type: 'string',
						description: 'The element to search.'
					}
				},
				description: 'Gets the path of an element in a specific folder, determined by the `type` argument.'
			},
			GetThemeNames: {
				returnType: 'table',
				description: 'Creates a table including every theme name.'
			}
		},
		Trail: {
			GetDifficulty: {
				returnType: 'int',
				description: 'Gets the difficulty. See <a>Enum_Difficulty</a>.'
			},
			GetLengthSeconds: {
				returnType: 'float',
				description: 'Gets the total length of the trail, in seconds.'
			},
			GetRadarValues: {
				returnType: 'RadarValues',
				args: {
					playerNumber: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1'
					}
				},
				description: 'Gets the RadarValues for a specific player. See <a>RadarValues.GetValue()</a>.'
			}
		},
		UnlockManager: {
			FindCode: {
				returnType: 'string',
				args: {
					name: {
						type: 'string',
						description: 'The name.'
					}
				},
				description: 'Gets the associated Code.'
			},
			GetSongsUnlockedByCode: {
				returnType: 'table',
				args: {
					unlockCode: {
						type: 'string',
						description: 'The unlock code.'
					}
				},
				description: 'Gets a table of songs unlocked by `unlockCode`.'
			},
			GetStepsUnlockedByCode: {
				returnType: 'table',
				args: {
					unlockCode: {
						type: 'string',
						description: 'The unlock code.'
					}
				},
				description: 'Gets a table of steps unlocked by `unlockCode`.'
			},
			PreferUnlockCode: {
				args: {
					unlockCode: {
						type: 'string',
						description: 'The unlock code.'
					}
				},
				description: 'Sets the preferred Song/Course to the specified `code`.'
			},
			UnlockCode: {
				args: {
					unlockCode: {
						type: 'string',
						description: 'The unlock code.'
					}
				},
				description: 'Unlocks an entry by `unlockCode`.'
			}
		}
	},
	enums: {
		CoinMode: {
			description: 'See <a>GameState.GetCoinMode()</a>.',
			Home: 0,
			Pay: 1,
			Free: 2
		},
		Difficulty: {
			Beginner: 0,
			Easy: 1,
			Medium: 2,
			Hard: 3,
			Challenge: 4,
			Edit: 5
		},
		ElementCategory: {
			description: 'See <a>ThemeManager.GetPath()</a>.',
			BGAnimations: 0,
			Fonts: 1,
			Graphics: 2,
			Numbers: 3,
			Sounds: 4,
			Other: 5
		},
		Grade: {
			"Tier 1": 0,
			"Tier 2": 1,
			"Tier 3": 2,
			"Tier 4": 3,
			"Tier 5": 4,
			"Tier 6": 5,
			"Tier 7": 6,
			"Tier 8": 7,
			"Tier 9": 8,
			"Tier 10": 9,
			"Tier 11": 10,
			"Tier 12": 11,
			"Tier 13": 12,
			"Tier 14": 13,
			"Tier 15": 14,
			"Tier 16": 15,
			"Tier 17": 16,
			"Tier 18": 17,
			"Tier 19": 18,
			"Tier 20": 19,
			Failed: 20
		},
		GoalType: {
			Calories: 0,
			Time: 1,
			None: 2
		},
		HoldNoteScore: {
			None: 0,
			"No Good": 1,
			"OK/Held": 2
		},
		InputMode: {
			notitg: 1,
			description: 'See <a>GameState.GetInputMode()</a> and <a>GameState.SetInputMode()</a>.',
			Normal: 0,
			BothAtOnce: 1
		},
		MemoryCardState: {
			description: 'See <a>MemoryCardManager.GetCardState()</a>.',
			Ready: 0,
			Checking: 1,
			"Too late": 2,
			Error: 3,
			Removed: 4,
			"No card": 5
		},
		Premium: {
			description: 'See <a>GameState.GetPremium()</a>.',
			None: 0,
			"Double for 1 credit": 1,
			"2 players for 1 credit": 2
		},
		PolygonMode: {
			notitg: 1,
			description: 'See <a>Model.SetPolygonMode()</a>.',
			Fill: 0,
			Line: 1
		},
		RadarCategory: {
			Stream: 0,
			Voltage: 1,
			Air: 2,
			Freeze: 3,
			Chaos: 4,
			TapsAndHolds: 5,
			Jumps: 6,
			Holds: 7,
			Mines: 8,
			Hands: 9,
			Rolls: 10
		},
		SortOrder: {
			description: 'See <a>GameState.GetSortOrder()</a>.',
			Preferred: 0,
			Group: 1,
			Title: 2,
			BPM: 3,
			Popularity: 4,
			"Top Grades": 5,
			Artist: 6,
			Genre: 7,
			"Song Length": 8,
			"Easy Meter": 9,
			"Normal Meter": 10,
			"Hard Meter": 11,
			"Challenge Meter": 12,
			"Mode Menu": 13,
			"All Courses": 14,
			"Nonstop Courses": 15,
			"Oni Courses": 16,
			"Endless Courses": 17,
			Roulette: 18
		},
		StepsType: {
			"Dance Single": 0,
			"Dance Double": 1,
			"Dance Couple": 2,
			"Dance Solo": 3,
			"Pump Single": 4,
			"Pump Half Double": 5,
			"Pump Double": 6,
			"Pump Couple": 7,
			"EZ2 Single": 8,
			"EZ2 Double": 9,
			"EZ2 Real": 10,
			"Para Single": 11,
			"Para Versus": 12,
			"DS3DDX Single": 13,
			"BM Single5": 14,
			"BM Double5": 15,
			"BM Single7": 16,
			"BM Double7": 17,
			"MANIAX Single": 18,
			"MANIAX Double": 19,
			"TECHNO Single4": 20,
			"TECHNO Single5": 21,
			"TECHNO Single8": 22,
			"TECHNO Double4": 23,
			"TECHNO Double5": 24,
			"PNM Five": 25,
			"PNM Nine": 26,
			"Lights Cabinet": 27
		},
		TapNoteScore: {
			None: 0,
			"Hit Mine": 1,
			"Avoided Mine": 2,
			Miss: 3,
			"Boo / Way Off": 4,
			"Good / Decent": 5,
			Great: 6,
			"Perfect / Excellent": 7,
			"Marvelous / Fantastic": 8
		}
	}
};

// Vérifier si un type de variable est un objet valide
function checkLuaObject(type) {
	return ($.inArray(type, objects) > -1) ? 'itg-object' : 'itg-' + type.toLowerCase();
}

// Vérifier si une méthode / énumération est exclusive à NotITG ou non.
function checkNotITG(name, methodName) {
	// Enum
	if (arguments.length == 1 || typeof methodName !== 'string') {
		if (typeof data.enums[name] === 'undefined') {
			return false;
		}
		return (typeof data.enums[name].notitg !== 'undefined');
	}

	// Classe
	if (typeof data.classes[name][methodName] === 'undefined') {
		return false;
	}
	return (typeof data.classes[name][methodName].notitg !== 'undefined');
}

// Replacer mots-clés, liens, et variables
function replaceKeywords(str, args) {
	var ret = str.replace('`true`', '<span class="bool">true</span>').replace('`false`', '<span class="bool">false</span>').replace('`nil`', '<span class="bool">nil</span>');

	// Enums
	ret = ret.replace(/<a>Enum_([^<>]+)<\/a>/gi, function(match, enumName) {
		var isNotITG = checkNotITG(enumName);
		return '<a class="code enum-link" href="#Enum_'+ enumName +'"><img src="img/'+ ((isNotITG) ? 'notitg' : 'itg') +'.png" alt="'+ ((isNotITG) ? 'NotITG' : 'ITG') +'" />'+ enumName +'</a>';
	})

	// Class
	ret = ret.replace(/<a>Class_([^<>]+)<\/a>/gi, function(match, className) {
		return '<a class="code class-link" href="#Class_'+ className +'">'+ className +'</a>';
	})

	// Class' Method
	ret = ret.replace(/<a>([^<>]+)\.([^<>]+)\(\)<\/a>/gi, function(match, className, methodName) {
		var isNotITG = checkNotITG(className, methodName);
		return '<a class="code method-link" href="#Class_'+ className +'_'+ methodName +'"><img src="img/'+ ((isNotITG) ? 'notitg' : 'itg' ) +'.png" />'+ className +'.'+ methodName +'()</a>';
	})

	if (arguments.length > 1 && typeof args === 'object') {
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
		var $article = $('<article></article>').attr('id', 'Class_'+ k_class);
		/*var $articleTitle = $('<h4></h4>').html(k_class + ((typeof v_class.inherits === 'string') ? ' : <a href="#Class_'+ v_class.inherits +'">'+ v_class.inherits +'</a>' : '') + ' <i class="fa fa-caret-down" aria-hidden="true"></i>')
		.click(function() {
			var table = $(this).parent().children('div');
			table.toggleClass('shown');
			$(this).children('.fa').toggleClass('fa-caret-down fa-caret-up');
			if (table.hasClass('shown')) {
				table.css('max-height', table[0].scrollHeight +'px');
			} else {
				table.css('max-height', 0);
			}
		});AAA*/
		var $articleTitle = $('<h4></h4>').html(k_class + ((typeof v_class.inherits === 'string') ? ' : <a href="#Class_'+ v_class.inherits +'">'+ v_class.inherits +'</a>' : ''))
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
			content.push(((typeof v_method.returnType !== 'undefined') ? '<span class="'+ checkLuaObject(v_method.returnType) +'">'+ v_method.returnType +'</span> ' : '<span>void</span> ') + '<strong>'+ k_method +'</strong> ( '+ ( (args !== '') ? args : '<span>void</span>' ) +' )');
			content.push(description);
			$.each(argsDescription, function(i_description, v_description) {
				content.push(replaceKeywords(v_description, validArgs));
			});

			// Exemple
			if (typeof v_method.example !== 'undefined') {
				content.push('<strong>Example: </strong><br /><div class="example lua">'+ v_method.example +'</div>');
			}

			// Itération sur le contenu des divs
			$.each(content, function(i_content, v_content) {
				var $div = $('<div>'+ v_content +'</div>');
				// Ajout des divs dans la seconde cellule
				$secondElement.append($div);
			});

			// Ajout de l'id, utilisé pour les liens
			$firstElement.attr('id', 'Class_'+ k_class +'_'+ k_method);

			// Ajout des cellules dans la ligne, et dans le tableau
			$row.append($firstElement).append($secondElement);
			$tableBody.append($row);
		});

		// Ajout du contenu du tableau dans le tableau
		$table.append($tableBody);

		var $divTable = $('<div></div>').append($table);

		// Ajout du tableau et de l'article dans la section
		$article.append($divTable);
		$('#classes').append($article);

		$divTable.addClass('ready');
	});

}

// Parser les enums
function parseEnums() {

	// Itération sur les classes
	$.each(data.enums, function(k_enum, v_enum) {

		// Création de l'article
		var isNotITG = checkNotITG(k_enum);
		var $article = $('<article></article>').attr('id', 'Enum_'+ k_enum);
		/*var $articleTitle = $('<h4></h4>').html('<img src="img/'+ ((isNotITG) ? 'notitg' : 'itg') +'.png" alt="'+ ((isNotITG) ? 'NotITG' : 'ITG') +'" />'+ k_enum + ' <i class="fa fa-caret-down" aria-hidden="true"></i>')
		.click(function() {
			var table = $(this).parent().children('div');
			table.toggleClass('shown');
			$(this).children('.fa').toggleClass('fa-caret-down fa-caret-up');
			if (table.hasClass('shown')) {
				table.css('max-height', table[0].scrollHeight +'px');
			} else {
				table.css('max-height', 0);
			}
		});AAA*/
		var $articleTitle = $('<h4></h4>').html('<img src="img/'+ ((isNotITG) ? 'notitg' : 'itg') +'.png" alt="'+ ((isNotITG) ? 'NotITG' : 'ITG') +'" />'+ k_enum)
		$article.append($articleTitle);

		// Ajout de la description, si présente
		if (typeof v_enum.description !== 'undefined') {
			$article.append($('<p></p>').html(replaceKeywords(v_enum.description)));
		}

		// Création du tableau de méthodes
		var $table = $('<table></table>');
		var $tableHeader = $('<thead><tr><th>Name</th><th>Value</th></tr></thead>');
		$table.append($tableHeader);
		var $tableBody = $('<tbody></tbody>');

		// Itération sur les valeurs
		$.each(v_enum, function(k_name, v_value) {
			// Si clé "description" ou "notitg" réservés, ignorer
			if (k_name == 'description' || k_name == 'notitg') {
				return;
			}

			// Création des éléments
			var $row = $('<tr></tr>');

			// Ajout des cellules dans la ligne, et dans le tableau
			$row.append($('<td></td>').text(k_name)).append($('<td></td>').text(v_value));
			$tableBody.append($row);
		});

		// Ajout du contenu du tableau dans le tableau
		$table.append($tableBody);

		var $divTable = $('<div></div>').append($table);

		// Ajout du tableau et de l'article dans la section
		$article.append($divTable);
		$('#enums').append($article);

		$divTable.addClass('ready');
	});

}

function init() {

	// Ajout des classes dans le tableau d'objects
	$.each(data.classes, function(k_class, v_class) {
		objects.push(k_class);
	});

	// Générer le contenu de #classes
	parseClasses();

	// Générer le contenu de #enums
	parseEnums();

	// Générer les liens de #basics
	$('#basics').html(
		$('#basics').html().replace(/{{(\w+)_(\w+)}}/gi, function(match, className, methodName) {
			var isNotITG = checkNotITG(className, methodName);
			return '<a class="code method-link" href="#Class_'+ className +'_'+ methodName +'"><img src="img/'+ ((isNotITG) ? 'notitg' : 'itg' ) +'.png" />'+ className +'.'+ methodName +'()</a>';
		})
	);

	// Syntax-Highlighting
	hljs.registerLanguage("lua",function(e){var t="\\[=*\\[",a="\\]=*\\]",r={b:t,e:a,c:["self"]},n=[e.C("--(?!"+t+")","$"),e.C("--"+t,a,{c:[r],r:10})];return{l:e.UIR,k:{keyword:"GAMESTATE SCREENMAN SOUND PREFSMAN STATSMAN MESSAGEMAN PROFILEMAN and break do else elseif end false for if in local nil not or repeat return self then true until while",built_in:"SCREEN_WIDTH SCREEN_HEIGHT SCREEN_CENTER_X SCREEN_CENTER_Y _G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table accelerate additiveblend addx addy addz align animate aux backfacecull basezoomx basezoomy blend bob bounce bouncebegin bounceend clearzbuffer cmd cropbottom cropleft cropright croptop cullmode decelerate diffuse diffusealpha diffuseblink diffusebottomedge diffusecolor diffuseleftedge diffuselowerleft diffuselowerright diffuseramp diffuserightedge diffuseshift diffusetopedge diffuseupperleft diffuseupperright Draw draworder effectclock effectcolor1 effectcolor2 effectdelay effectmagnitude effectoffset effectperiod fadebottom fadeleft faderight fadetop finishtweening getaux GetBaseZoomX GetEffectDelta geteffectmagnitude GetHeight GetName getrotation GetSecsIntoEffect GetWidth GetX GetY GetZ GetZoom GetZoomX GetZoomY GetZoomZ glow glowblink glowshift halign heading hibernate hidden horizalign hurrytweening linear luaeffect pause pitch play playcommand position pulse queuecommand queuemessage rainbow roll rotationx rotationy rotationz scaletocover scaletofit SetHeight SetName setstate SetTextureFiltering SetWidth shadowlength skewto skewx sleep spin spring stopeffect stoptweening stretchto texturewrapping valign vertalign vibrate visible wag x xy y z zbias zbuffer zoom zoomto zoomtoheight zoomtowidth zoomx zoomy zoomz ztest ztestmode zwrite fov GetChild GetChildAt GetNumChildren propagate SetDrawByZPosition SetDrawFunction SetFOV SetUpdateCommand SetUpdateFunction SetUpdateRate SetVanishPoint SetVanishX SetVanishY Create EnableAlphaBuffer EnableDepthBuffer EnableFloat EnablePreserveTexture GetTexture GetTextureName SetTextureName GetTarget SetTarget SetCurrentAndDestinationItem get load pause play stop GetText maxheight maxwidth settext wrapwidthpixels GetCourseDir GetDisplayFullTitle GetPlayMode GetTranslitFullTitle Load SetFromMeterAndDifficulty SetFromSteps SetFromTrail LoadFromSong ScaleToClipped GetName DimMusic PlayOnce AnyPlayerHasRankingFeats ApplyGameCommand DelayedGameCommand Env FinishSong GetCoinMode GetCoins GetCoinsNeededToJoin GetCourseSongIndex GetCurBPS GetCurrentCourse GetCurrentGame GetCurrentSong GetCurrentSteps GetCurrentTrail GetEasiestStepsDifficulty GetEditSourceSteps GetEnv GetFileStructure GetInputMode GetMasterPlayerNumber GetNumPlayersEnabled GetNumSidesJoined GetPlayMode GetPlayerDisplayName GetPlayerNameFromNameEntry GetPreferredDifficulty GetPreferredSong GetPremium GetScreenID GetShaderFlag GetShaderFlagNum GetSongBeat GetSongBeatVisible GetSortOrder GetVersionDate GetX GetY GetZ IsCourseMode IsDemonstration IsDisqualified IsEditMode IsEventMode IsExtraStage IsExtraStage2 IsGoalComplete IsHumanPlayer IsPlayerEnabled IsSideJoined IsSyncDataChanged IsWinner JoinPlayer KeyPress PlayerIsUsingModifier PlayerUsingBothSides PlayersCanJoin ReloadSteps SetCurrentCourse SetCurrentSong SetCurrentSteps SetEnv SetInputMode SetPreferredSong SetScreenID SetShaderFlag SetShaderFlagNum SetSongBeat SetSongPosition SetTemporaryEventMode StageIndex UnloadSteps gettips settips GetDate GetModifiers GetName GetPercentDP GetScore GetSurvivalSeconds IsFillInMarker GetHighScores GetCardState Broadcast animate animateone InvertCelPass playanimation ResetAlphaTexture ResetTexture SetAlphaTexture SetCelShaded SetLineColor SetLineWidth SetPolygonMode setstate setstateone SetTexture SetTextureRotate SetTextureScale SetTextureScaleX SetTextureScaleY SetTextureTranslateX SetTextureTranslateY SetUseZBuffer GetPath GetNoteSkinNames FullCombo GetActualDancePoints GetCaloriesBurned GetCurrentCombo GetCurrentLife GetGrade GetHoldNoteScores GetLifeRemainingSeconds GetPercentDancePoints GetPlayedSteps GetPossibleDancePoints GetPossibleSteps GetScore GetSurvivalSeconds GetTapNoteScores MaxCombo SetActualDancePoints SetPossibleDancePoints SetScore GetPreference SetPreference GetCaloriesBurnedToday GetCoursesActual GetCoursesPercentComplete GetCoursesPossible GetGoalCalories GetGoalSeconds GetGoalType GetSaved GetSongNumTimesPlayed GetSongsActual GetSongsPercentComplete GetSongsPossible GetTotalNumSongsPlayed GetTotalStepsWithTopGrade GetTotalTrailsWithTopGrade GetWeightPounds IsCodeUnlocked SetGoalCalories SetGoalSeconds SetGoalType SetWeightPounds GetMachineProfile GetProfile IsPersistentProfile SaveMachineProfile GetValue ChangeCentering GetCumFPS GetDisplayHeight GetDisplayWidth GetFPS GetVendor GetVPF GetDescriptions Reset GetSoundPosition pan pitch speed SetParam volume GetImageHeight GetImageWidth GetNumFrames GetPath GetTextureCoordRect GetTextureHeight GetTextureWidth loop position rate Reload BeginRenderingTo FinishRenderingTo GetLife PauseGame SetLife GetTopScreen HideOverlayMessage OverlayMessage SetNewScreen SystemMessage GetAllSteps GetBackgroundPath GetBannerPath GetDisplayArtist GetDisplayFullTitle GetDisplayMainTitle GetGenre GetGroupName GetSongDir GetStepsByStepsType GetTranslitArtist GetTranslitFullTitle GetTranslitMainTitle IsCustomSong IsLong IsMarathon MusicLengthSeconds FindCourse FindSong GetAllCourses GetAllSongs GetRandomCourse GetRandomSong customtexturerect GetTexture Load LoadBackground LoadBanner loop position rate scaletoclipped setstate SetTexture stretchtexcoords texcoordvelocity GetGameplaySeconds GetPlayerStageStats GetAccumStageStats GetBestGrade GetCurStageStats GetFinalGrade GetPlayedStageStats GetStagesPlayed GetWorstGrade Reset GetDescription GetDifficulty GetMeter GetRadarValues GetStepsType GetCurLanguage GetCurThemeName GetMetric GetPath GetThemeNames GetDifficulty GetLengthSeconds GetRadarValues FindCode GetSongsUnlockedByCode GetStepsUnlockedByCode PreferUnlockCode UnlockCode"},c:n.concat([{cN:"function",bK:"function",e:"\\)",c:[e.inherit(e.TM,{b:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{cN:"params",b:"\\(",eW:!0,c:n}].concat(n)},e.CNM,e.ASM,e.QSM,{cN:"string",b:t,e:a,c:[r],r:5}])}});

	$('div.example:not(.nohighlight)').each(function(i, v) {
		hljs.highlightBlock(v);
	});

	// Smooth Scrolling & Highlighting
	var animating = false;

	// Navbar
	$('nav,h4').find('a[href*="#"]:not([href="#"])').click(function() {
		if (!animating && location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('#main').animate({
					scrollTop: $('#main').scrollTop() + target.offset().top - 12
				}, 900);
			}
		}
		return false;
	});

	// General links
	$('a[href*="#Basics_"]').click(function() {
		if (!animating && location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('#main').animate({
					scrollTop: $('#main').scrollTop() + target.offset().top - 12
				}, 900);
			}
		}
		return false;
	});

	// Classes
	$('section').find('.class-link:not([href="#"])').click(function() {
		if (!animating && location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('#main').animate({
					scrollTop: $('#main').scrollTop() + target.offset().top - 12
				}, 900);
			}
		}
		return false;
	});

	// Enums
	$('section').find('.enum-link:not([href="#"])').click(function() {
		if (!animating && location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				animating = true;
				$('#main').animate({
					scrollTop: $('#main').scrollTop() + target.offset().top - (($(window).height() - target.height())/2)
				}, 900);

				target.find('th, td').delay(700).animate({
					backgroundColor: '#888'
				}, 700, 'swing', function() {
					target.find('th, td').animate({
						backgroundColor: 'rgba(0, 0, 0, 0)'
					}, 1300, 'swing', function() {
						animating = false;
					});
				});
			}
		}
		return false;
	});

	// Methods
	$('section').find('.method-link:not([href="#"])').click(function() {
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

	// Foundation
	$(document).foundation();

	// C'est parti !
	$('#page').addClass('done');

};

$(function() {
	init();
});