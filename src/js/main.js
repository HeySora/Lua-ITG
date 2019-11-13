state = 0;

objects = [
	'LuaReference'
];

state = 1;

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
			addcommand: {
				args: {
					commandName: {
						type: 'string',
						description: 'The command name to add.'
					},
					function: {
						type: 'LuaReference',
						description: 'The lua function of the command.'
					}
				},
				description: 'Adds a new command to the Actor.'
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
			addrotationx: {
				notitg: 3,
				args: {
					x: {
						type: 'float',
						description: 'The x position to add.'
					}
				},
				description: 'Adds `x` to the Actor\'s current x rotation.'
			},
			addrotationy: {
				notitg: 3,
				args: {
					y: {
						type: 'float',
						description: 'The y position to add.'
					}
				},
				description: 'Adds `y` to the Actor\'s current y rotation.'
			},
			addrotationz: {
				notitg: 3,
				args: {
					z: {
						type: 'float',
						description: 'The z position to add.'
					}
				},
				description: 'Adds `z` to the Actor\'s current z rotation.'
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
			ClearShader: {
				notitg: 3,
				description: 'Removes the actor\'s shader.'
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
				description: 'Executes Actor methods on the actor, with the cmd notation. <a href="#Basics_ActorCommands">What is an Actor Command ?</a>',
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
				description: 'Sets the effect clock of the Actor to `clock`. It is "timer" by default. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
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
			getdiffuse: {
				returnType: 'float',
				description: 'Gets the current diffuse of the Actor. This method returns four floats. You can set them by using <a>Actor.diffuse()</a> or the alpha value only using <a>Actor.diffusealpha()</a>.',
				example: 'r,g,b,a = self:getdiffuse();'
			},
			GetEffectDelta: {
				returnType: 'float',
				description: 'Gets the current effect delta of the Actor.'
			},
			geteffectmagnitude: {
				returnType: 'float',
				description: 'Gets the effect magnitude currently applied to the Actor. Since the effect magnitude is composed of three floats (see <a>Actor.effectmagnitude()</a>), this method returns three floats.',
				example: 'x,y,z = self:geteffectmagnitude();'
			},
			GetHeight: {
				returnType: 'float',
				description: 'Gets the current Actor\'s height.'
			},
			GetHidden: {
				notitg: 3,
				returnType: 'bool',
				description: 'Gets the hidden state of an actor, true if it\'s hidden.',
			},
			GetName: {
				notitg: 1,
				returnType: 'string',
				description: 'Gets the current name of the Actor. It can be set by either using <a>Actor.SetName()</a>, or by adding a "Name" attribute.'
			},
			getrotation: {
				returnType: 'float',
				description: 'Gets the current rotations of the Actor for each axis. Since there are 3 axis, this method returns three floats. You can set them by using <a>Actor.rotationx()</a>, <a>Actor.rotationy()</a>, and <a>Actor.rotationz()</a>, or add/substract values to them using <a>Actor.pitch()</a>, <a>Actor.heading()</a>, and <a>Actor.roll()</a>.',
				example: 'rotx,roty,rotz = self:getrotation();'
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
				description: 'Adds `roty` to the vertical (called Y, yaw, or heading) axis\' rotation. Always rotates around the top-left corner of the screen.'
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
				description: 'Adds `rotx` to the horizontal (called X, or pitch) axis\' rotation. Always rotates around the top-left corner of the screen.'
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
				example: 'self:playcommand(\'BarrelRoll\'); -- Will call the "BarrelRollCommand" command of the Actor.'
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
			pulseramp: {
				notitg: 3,
				description: 'It\'s the same as diffuseramp (sawtooth wave applied to color) but on the size of an object.. <a href="#Basics_ActorEffects">What is an Actor effect ?</a>'
			},
			queuecommand: {
				args: {
					commandName: {
						type: 'string',
						description: 'The name of the command to queue.'
					}
				},
				description: 'Queues a command named `commandName` .. "Command" to be played. This is usually used right after doing a <a>Actor.sleep()</a>. <a href="#Basics_ActorCommands">What is an Actor Command ?</a>',
				example: 'self:sleep(1); -- Wait 1 second ...<br />\r\nself:queuecommand(\'BarrelRoll\'); -- ... and then "BarrelRollCommand" will be called.'
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
				description: 'Adds `rotz` to the Z/roll axis\' rotation. Always rotates around the top-left corner of the screen.'
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
				description: 'Enables/Disables the texture filtering of the Actor (= Applying a cubic interpolation to the pixels or not). It is enabled by default.'
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
				example: 'self:sleep(1); -- Wait 1 second before applying Actor methods.<br />\r\nself:addx(50); -- Will move the Actor to the right AFTER 1 second<br />\r\nsomeFunction(); -- Will be called instantly, it won\'t wait 1 second<br />\r\nsome_actor:x(50); -- Though this is an Actor Method, it won\'t wait 1 second, because the sleep() method only affects the current Actor (e.g. self)'
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
			tween: {
				notitg: 3,
				args: {
					time: {
						type: 'float',
						description: 'The duration, in seconds.',
						condition: '0-'
					},
					luaExpression: {
						type: 'string',
						description: 'The lua expression, using "%f" to represent how far into the tween the object is currently.'
					}
				},
				description:'Plays the next Actor methods at a custom rate. <a href="#Basics_Tweens">What is a tween ?</a>'
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
						condition: ['top', 'middle', 'bottom']
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
			xyz: {
				notitg: 3,
				args: {
					xPos: {
						type: 'float',
						description: 'The X position, in pixels.'
					},
					yPos: {
						type: 'float',
						description: 'The Y position, in pixels.'
					},
					zPos: {
						type: 'float',
						description: 'The Z position, in pixels.'
					}
				},
				description: 'Sets both X , Y and Z position of the Actor. See <a>Actor.x()</a> , <a>Actor.y()</a> and <a>Actor.z()</a>.'
			},
			xyza: {
				notitg: 3,
				args: {
					xPos: {
						type: 'float',
						description: 'The X position, in pixels.'
					},
					yPos: {
						type: 'float',
						description: 'The Y position, in pixels.'
					},
					zPos: {
						type: 'float',
						description: 'The Z position, in pixels.'
					},
					aux: {
						type: 'float',
						description: 'The value to set as Actor\'s aux value.'
					}
				},
				description: 'Sets both X , Y , Z position and the Aux of the Actor. See <a>Actor.x()</a> , <a>Actor.y()</a> , <a>Actor.z()</a> and <a>Actor.aux()</a>.'
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
				returnType: 'Actor',
				args: {
					name: {
						type: 'string',
						description: 'The name of the child.'
					}
				},
				description: 'Gets the Actor of a child with its name equal to `name`, or `nil`.'
			},
			GetChildAt: {
				returnType: 'Actor',
				notitg: 1,
				args: {
					index: {
						type: 'int',
						description: 'The index of the child.',
						condition: '0-'
					}
				},
				description: 'Gets the Actor of a child at index `index`.'
			},
			GetNumChildren: {
				returnType: 'int',
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
			propagateshaders: {
				notitg: 3,
				args: {
					enable: {
						type: 'int',
						description: '1 to enable propagation, 0 to disable it.',
						condition: [0, 1]
					}
				},
				description: 'Enables/Disables the shader command propagation behavior on the ActorFrame. Disabled by default.'
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
			SetFarDist: {
				notitg: 3,
				args: {
					farDist: {
						type: 'float',
						description: 'The draw distance to apply.'
					}
				},
				description: 'Sets the draw distance on the ActorFrame. It is 1000 by default.'
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
			SetShader: {
				notitg: 3,
				args: {
					shader: {
						type: 'RageShaderProgram',
						description: 'The shader itself. See <a>ActorFrameTexture.GetTexture()</a>'
					}
				},
				description:'Sets the shader to the ActorFrame.'
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
			EnableGrayscale: {
				notitg: 2,
				args: {
					enable: {
						type: 'bool',
						description: 'Enable or not the grayscale option.'
					}
				},
				description: 'Makes or not the AFT grayscale. It is disabled by default.'
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
			GetShader: {
				notitg: 3,
				returnType: 'RageShaderProgram',
				description: 'Gets the shader of the ActorFrameTexture.',
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
			start: {
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
			description: 'You can get an instance of Course by using <a>GameState.GetCurrentCourse()</a>, <a>SongManager.FindCourse()</a>, or <a>SongManager.GetRandomCourse()</a>.',
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
			description: 'You can get an instance of Game by using <a>GameState.GetCurrentGame()</a>',
			GetName: {
				returnType: 'string',
				description: 'Gets the name of the current game ("dance" or "lights").'
			}
		},
		GameSoundManager: {
			description: 'To use this class, use it through the <span class="mono">SOUND</span> singleton.',
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
			description: 'To use this class, use it through the <span class="mono">GAMESTATE</span> singleton.',
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
			ApplyModifiers: {
				notitg: 2,
				args: {
					mods: {
						type: 'string',
						description: 'The mods to apply.'
					},
					playerNumber: {
						type: 'int',
						description: 'Optional. If given, the command will be executed only for this player. Beware ! 1 = Player 1, 2 = Player 2, it isn\'t like the others methods involving a playerNumber argument !',
						condition: '1-2'
					}
				},
				description: 'Optimized shortcut for <a>GameState.ApplyGameCommand()</a>.'
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
			GetDerp: {
				notitg: 1,
				returnType: 'bool',
				description: 'Returns `true`.'
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
			GetElapsedTimeFromBeat: {
				notitg: 3,
				returnType: 'float',
				description: 'Gets the exact time measure for beat `beat`.',
				args: {
					beat: {
						type: 'float',
						description: 'The beat you want to calculate the time from.'
					}
				}
			},
			GetBeatFromElapsedTime: {
				notitg: 3,
				returnType: 'float',
				description: 'Gets the exact beat measure for time `time`.',
				args: {
					time: {
						type: 'float',
						description: 'The time you want to calculate the beat from.'
					}
				}
			},
			GetExternal: {
				notitg: 3,
				returnType: 'int',
				args: {
					index: {
						type: 'int',
						description: 'Index of the external.'
					}
				},
				description: 'Gets the number on the external memory address\' index.'
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
				example: 'local filesAndDirs = {GAMESTATE:GetFileStructure()}; -- Put any returned strings into a unique table.'
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
			GetMusicRate: {
				notitg: 2,
				returnType: 'float',
				description: 'Gets the rate of the music.'
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
				description: '(NotITG v1-2 only) Gets the first (at index 0) shader\'s flag.'
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
				description: '(NotITG v1-2 only) Gets the flag of the shader at index `index`.'
			},
			GetSongBeat: {
				returnType: 'float',
				description: 'Gets the current beat.'
			},
			GetSongBeatVisible: {
				returnType: 'float',
				description: 'Gets the current beat, without offsets / visual delays.'
			},
			GetSongTime: {
				notitg: 2,
				returnType: 'float',
				description: 'Gets the current song time.'
			},
			GetSongTimeVisible: {
				notitg: 2,
				returnType: 'float',
				description: 'Gets the current song time, without offsets / visual delays.'
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
				notitg: 2,
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
				notitg: 2,
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
				notitg: 2,
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
			LaunchAttack: {
				notitg: 2,
				args: {
					startTime: {
						type: 'float',
						description: 'The time (in seconds) where the attack will start.'
					},
					length: {
						type: 'float',
						description: 'The length of the attack (in seconds).',
						condition: '0-'
					},
					mods: {
						type: 'string',
						description: 'The mods to apply.'
					},
					playerNumber: {
						type: 'int',
						description: '(Optional) The player number. (1 = Player 1, 2 = Player 2)',
					}
				},
				description: 'Registers an attack to be launched at a specific moment. This attack will disable any currently active Lua mods. It is recommended to call this method in an InitCommand, because it generates some lag spikes.'
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
				description: '(NotITG v1-2 only) Sets the first (at index 0) shader\'s flag.'
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
				description: '(NotITG v1-2 only) Sets the flag of the shader at index `index`.'
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
			SetExternal: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description: 'Index of the external'
					}
				},
				description: 'Sets a number on a static external memory address\' index.'
			},
			StageIndex: {
				returnType: 'int',
				description: 'Gets the current song\'s index, starting at 1.'
			},
			UnloadSteps: {
				notitg: 2,
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
			description: 'To use this class, use it through the <span class="mono">MEMCARDMAN</span> singleton.',
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
			description: 'To use this class, use it through the <span class="mono">MESSAGEMAN</span> singleton.',
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
			description: 'To use this class, use it through the <span class="mono">NOTESKIN</span> singleton.',
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
		Player: {
			description: 'You can get an instance of Player by using <span class="mono">SCREENMAN:GetTopScreen():GetChild(\'PlayerP[NUMBER]\')</span">.',
			inherits: 'Actor',
			ClearArrowPathShader: {
				notitg: 3,
				description:'Clears the shader to the Player\'s Arrowpath.'
			},
			ClearArrowShader: {
				notitg: 3,
				description:'Clears the shader to the Player\'s Arrows.'
			},
			ClearHoldShader: {
				notitg: 3,
				description:'Clears the shader to the Player\'s Holds.'
			},
			ClearReceptorShader: {
				notitg: 3,
				description:'Clears the shader to the Player\'s Receptors.'
			},
			ClearShader: {
				notitg: 3,
				description:'Clears any shaders on the Player.'
			},
			DidHoldNote: {
				notitg: 3,
				args: {
					column: {
						type:'int',
						description: 'The column.',
						condition:'0-3',
					},
					bright: {
						type: 'bool',
						description: 'Whether the noteflash is more or less than 100 combo variant.'
					}
				},
				description:'Send a hold noteflash to column specified.'
			},
			DidTapNote: {
				notitg: 3,
				args: {
					column: {
						type:'int',
						description: 'The column.',
						condition:'0-3',
					},
					judgment: {
						type: 'int',
						description: 'The judgment to show. See <a>Enum_SendJudgment</a>.',
					},
					bright: {
						type: 'bool',
						description: '(Optional) Whether the noteflash is more or less than 100 combo variant (not implemented in most ITG noteskins).'
					}
				},
				description:'Send a noteflash of appropriate judgment to the column specified.'
			},
			FakeStep: {
				notitg: 3,
				args: {
					column: {
						type:'int',
						description:'The column.',
						condition:'0-3'
					}
				},
				description:'Pretend to press a button. This will pulse the receptor as if a step was taken.',
			},
			GetCombo: {
				notitg: 3,
				returnType: 'int',
				description: 'Gets the Player\'s current combo.',
			},
			GetMissCombo: {
				notitg: 3,
				returnType: 'int',
				description: 'Gets the Player\'s current miss combo.',
			},
			GetNoteData: {
				notitg: 3,
				returnType: 'table',
				description: 'Gets the Player\'s notedata',
				args: {
					startBeat: {
						type: 'float',
						description: '(Optional) The start beat of the notedata'
					},
					endBeat: {
						type: 'float',
						description: '(Optional) The end beat of the notedata'
					}
				}
			},
			PushNoteData: {
				notitg: 3,
				args: {
					varName: {
						type:'variable',
						description:'The variable you want to put the notedata to.'
					},
					startBeat: {
						type: 'float',
						description: '(Optional) The start beat of the notedata. If not present, first beat of song is used.'
					},
					endBeat: {
						type: 'float',
						description: '(Optional) The end beat of the notedata. If not present, last beat of song is used.'
					}
				},
				description:'Functions the same as <a>Player.GetNoteData()</a> but it pushes it to `varName`, accounts for turn mods.'
			},
			RealStep: {
				notitg: 3,
				args: {
					column: {
						type:'int',
						description:'The column.',
						condition:'0-3'
					},
					held: {
						type:'bool',
						description:'Whether the button is held down.'
					}
				},
				description:'Press a button. This is capable of hitting arrows.',
			},
			ResetRotationXSpline: {
				notitg: 3,
				description: 'Resets the Rotation X Spline',
			},
			ResetRotationYSpline: {
				notitg: 3,
				description: 'Resets the Rotation Y Spline',
			},
			ResetRotationZSpline: {
				notitg: 3,
				description: 'Resets the Rotation Z Spline',
			},
			ResetSizeSpline: {
				notitg: 3,
				description: 'Resets the size Spline',
			},
			ResetStealthSpline: {
				notitg: 3,
				description: 'Resets the stealth Spline',
			},
			ResetSkewSpline: {
				notitg: 3,
				description: 'Resets the skew Spline',
			},
			ResetXSpline: {
				notitg: 3,
				description: 'Resets the X Spline',
			},
			ResetYSpline: {
				notitg: 3,
				description: 'Resets the Y Spline',
			},
			ResetZSpline: {
				notitg: 3,
				description: 'Resets the Z Spline',
			},
			SetArrowPathShader: {
				notitg: 3,
				args: {
					shader: {
						type: 'RageShaderProgram',
						description: 'The shader itself. See <a>ActorFrameTexture.GetShader()</a>'
					}
				},
				description:'Sets the shader to the Player\'s Arrowpath.'
			},
			SetArrowShader: {
				notitg: 3,
				args: {
					shader: {
						type: 'RageShaderProgram',
						description: 'The shader itself. See <a>ActorFrameTexture.GetShader()</a>'
					}
				},
				description:'Sets the shader to the Player\'s Arrows.'
			},
			SetAwake: {
				notitg: 3,
				args: {
					awake: {
						type: 'bool',
						description: 'Wake up the playfields.'
					}
				},
				description: 'Used to wake up playfields that are still hidden, or set them back to sleep if re-hidden.',
			},
			SetCombo: {
				notitg: 3,
				args: {
					combo: {
						type: 'int',
						description: 'The new combo to set',
					}
				},
				description: 'Sets the Players\' combo to `combo`.'
			},
			SetInputPlayer: {
				notitg: 3,
				args: {
					player: {
						type: 'int',
						description: 'The player to bind inputs from. 0 is Player 1, 1 is Player 2, 2+ is Autoplay',
						condition: '0-'
					}
				},
				description: 'Binds input of `player` to the Player.'
			},
			SetHoldShader: {
				notitg: 3,
				args: {
					shader: {
						type: 'RageShaderProgram',
						description: 'The shader itself. See <a>ActorFrameTexture.GetShader()</a>'
					}
				},
				description:'Sets the shader to the Player\'s Holds.'
			},
			SendJudgment: {
				notitg: 3,
				description: 'Sends a judgment message to the player.',
				args: {
					judgement: {
						type: 'int',
						description: 'The judgment to show. See <a>Enum_SendJudgment</a>.'
					},
					isEarly: {
						type: 'bool',
						description: 'Sets the judgment to be early or late.'
					},
					timingDeviation: {
						type: 'float',
						description: '(Optional) The timing deviation in milliseconds, for the scatterplot.'
					},
					beat: {
						type: 'float',
						description: '(Optional) The beat, for the scatterplot.'
					}
				}
			},
			SetMineSound: {
				notitg: 3,
				args: {
					path: {
						type: 'string',
						description: 'Path of the audio file.'
					}
				},
				description: 'Set custom player mine sound from the simfile.'
			},
			SetMissCombo: {
				notitg: 3,
				args: {
					combo: {
						type: 'int',
						description: 'The new miss combo to set',
					}
				},
				description: 'Sets the Players\' miss combo to `combo`.'
			},
			SetNoteData: {
				notitg: 3,
				args: {
					chart: {
						type: 'int',
						description: 'The chart number (from lowest to highest difficulty).'
					}
				},
				description:'Set the note data from an existing chart.'
			},
			SetNoteDataFromLua: {
				notitg: 3,
				args: {
					chart: {
						type: 'table',
						description: 'The chart-to-lua styled table.'
					}
				},
				description:'Set the note data from a custom chart-to-lua styled table.'
			},
			SetReceptorShader: {
				notitg: 3,
				args: {
					shader: {
						type: 'RageShaderProgram',
						description: 'The shader itself. See <a>ActorFrameTexture.GetShader()</a>'
					}
				},
				description:'Sets the shader to the Player\'s Receptors.'
			},
			SetRotationXSpline: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description: 'The index of the spline.'
					},
					column: {
						type: 'int',
						description: 'The column, set to `-1` for all columns.'
					},
					percent: {
						type: 'float',
						description: 'The mod percentage.',
					},
					offset: {
						type: 'float',
						description: 'The distance from receptor in beats.'
					},
					activationSpeed: {
						type: 'float',
						description: 'The mod\'s activation speed, set to `-1` for instant'
					}
				},
				description: 'Sets a rotation X spline point to the player'
			},
			SetRotationYSpline: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description: 'The index of the spline.'
					},
					column: {
						type: 'int',
						description: 'The column, set to `-1` for all columns.'
					},
					percent: {
						type: 'float',
						description: 'The mod percentage.',
					},
					offset: {
						type: 'float',
						description: 'The distance from receptor in beats.'
					},
					activationSpeed: {
						type: 'float',
						description: 'The mod\'s activation speed, set to `-1` for instant'
					}
				},
				description: 'Sets a rotation Y spline point to the player'
			},
			SetRotationZSpline: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description: 'The index of the spline.'
					},
					column: {
						type: 'int',
						description: 'The column, set to `-1` for all columns.'
					},
					percent: {
						type: 'float',
						description: 'The mod percentage.',
					},
					offset: {
						type: 'float',
						description: 'The distance from receptor in beats.'
					},
					activationSpeed: {
						type: 'float',
						description: 'The mod\'s activation speed, set to `-1` for instant'
					}
				},
				description: 'Sets a rotation Z spline point to the player'
			},
			SetShader: {
				notitg: 3,
				args: {
					shader: {
						type: 'RageShaderProgram',
						description: 'The shader itself. See <a>ActorFrameTexture.GetShader()</a>'
					}
				},
				description:'Sets the shader to the Player\'s Arrows, Holds and Receptors.'
			},
			SetSizeSpline: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description: 'The index of the spline.'
					},
					column: {
						type: 'int',
						description: 'The column, set to `-1` for all columns.'
					},
					percent: {
						type: 'float',
						description: 'The mod percentage.',
					},
					offset: {
						type: 'float',
						description: 'The distance from receptor in beats.'
					},
					activationSpeed: {
						type: 'float',
						description: 'The mod\'s activation speed, set to `-1` for instant'
					}
				},
				description: 'Sets a size spline point to the player'
			},
			SetStealthSpline: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description: 'The index of the spline.'
					},
					column: {
						type: 'int',
						description: 'The column, set to `-1` for all columns.'
					},
					percent: {
						type: 'float',
						description: 'The mod percentage.',
					},
					offset: {
						type: 'float',
						description: 'The distance from receptor in beats.'
					},
					activationSpeed: {
						type: 'float',
						description: 'The mod\'s activation speed, set to `-1` for instant'
					}
				},
				description: 'Sets a stealth spline point to the player'
			},
			SetSkewSpline: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description: 'The index of the spline.'
					},
					column: {
						type: 'int',
						description: 'The column, set to `-1` for all columns.'
					},
					percent: {
						type: 'float',
						description: 'The mod percentage.',
					},
					offset: {
						type: 'float',
						description: 'The distance from receptor in beats.'
					},
					activationSpeed: {
						type: 'float',
						description: 'The mod\'s activation speed, set to `-1` for instant'
					}
				},
				description: 'Sets a skew spline point to the player'
			},
			SetXSpline: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description: 'The index of the spline.'
					},
					column: {
						type: 'int',
						description: 'The column, set to `-1` for all columns.'
					},
					percent: {
						type: 'float',
						description: 'The mod percentage.',
					},
					offset: {
						type: 'float',
						description: 'The distance from receptor in beats.'
					},
					activationSpeed: {
						type: 'float',
						description: 'The mod\'s activation speed, set to `-1` for instant'
					}
				},
				description: 'Sets a X spline point to the player'
			},
			SetYSpline: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description: 'The index of the spline.'
					},
					column: {
						type: 'int',
						description: 'The column, set to `-1` for all columns.'
					},
					percent: {
						type: 'float',
						description: 'The mod percentage.',
					},
					offset: {
						type: 'float',
						description: 'The distance from receptor in beats.'
					},
					activationSpeed: {
						type: 'float',
						description: 'The mod\'s activation speed, set to `-1` for instant'
					}
				},
				description: 'Sets a Y spline point to the player'
			},
			SetZSpline: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description: 'The index of the spline.'
					},
					column: {
						type: 'int',
						description: 'The column, set to `-1` for all columns.'
					},
					percent: {
						type: 'float',
						description: 'The mod percentage.',
					},
					offset: {
						type: 'float',
						description: 'The distance from receptor in beats.'
					},
					activationSpeed: {
						type: 'float',
						description: 'The mod\'s activation speed, set to `-1` for instant'
					}
				},
				description: 'Sets a Z spline point to the player'
			},
		},
		PlayerStageStats: {
			description: 'You can get an instance of PlayerStageStats by using <a>StageStats.GetPlayerStageStats()</a>.',
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
			GetTapNoteScoresForPlayer: {
				notitg: 3,
				returnType: 'int',
				args: {
					player: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1',
					},
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
			},
			SetTapNoteScoresForPlayer: {
				notitg: 3,
				returnType: 'int',
				args: {
					player: {
						type: 'int',
						description: 'The player number. (0 = Player 1, 1 = Player 2)',
						condition: '0-1',
					},
					tapNoteScore: {
						type: 'int',
						description: 'The wanted judgment. See <a>Enum_TapNoteScore</a>.',
						condition: '0-8'
					},
					amount: {
						type: 'int',
						description: 'The amount.',
					}
				},
				description: 'Sets the amount of judgments corresponding to `tapNoteScore`.'
			},
		},
		Polygon: {
			inherits: 'Actor',
			description: 'A Polygon is a plane figure that is bounded by a finite chain of straight line segments closing in a loop to form a closed polygonal chain or circuit.',
			cullmode: {
				notitg: 3,
				args: {
					mode: {
						type: 'string',
						description: 'The cull mode to apply.',
						condition: ['back', 'front', 'none']
					}
				},
				description: 'Sets the cull mode of the Actor. It is "none" by default.'
			},
			SetDrawMode: {
				notitg: 3,
				args: {
					drawMode: {
						type:'string',
						description:'The draw mode, not case sensitive.',
						condition:['quads','quadstrip','fan','strip','triangles','linestrip']
					}
				},
				description:"Sets the polygon\'s draw mode",
			},
			SetLineWidth: {
				notitg: 3,
				args: {
					lineWidth: {
						type:'int',
						description:'The line width.',
					}
				},
				description:'for LineStrip or wireframe polygon mode [TEMPORARY]',
			},
			SetNumVertices: {
				notitg: 3,
				args: {
					vertices: {
						type:'int',
						description:'The number of vertices.',
					}
				},
				description: 'Sets the polygon\'s number of verices.',
			},
			SetPolygonMode: {
				notitg: 3,
				args: {
					mode: {
						type: 'int',
						description: 'The polygon mode. See <a>Enum_PolygonMode</a>.',
						condition: '0-1'
					}
				},
				description: 'Sets the polygon mode to `mode`.'
			},
			SetTextureFiltering: {
				notitg: 3,
				args: {
					arg: {
						type: 'bool',
						description: 'If `true`, enables the texture filtering.'
					}
				},
				description: 'Enables/Disables the texture filtering of the Actor (= Applying a cubic interpolation to the pixels or not). It is enabled by default.'
			},
			SetVertexAlpha: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description:'Index of the vertex of the polygon. (Starts from 0)',
					},
					alpha: {
						type: 'float',
						description: 'The alpha (opacity) value. <em>(0 = transparent, 1 = opaque)</em>',
						condition: '0-1'
					}
				},
				description:'Sets the vertex\'s alpha.',
			},
			SetVertexColor: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description:'Index of the vertex of the polygon. (Starts from 0)',
					},
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
				},
				description: 'Sets the color of the vertex.',
			},
			SetVertexNormal: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description:'Index of the vertex of the polygon. (Starts from 0)',
					},
					x: {
						type:'float',
						description:'The X position.',
					},
					y: {
						type:'float',
						description:'The Y position.',
					},
					z: {
						type:'float',
						description:'The Z position.',
					}
				},
				description:'Sets the normal of the vertex.',
			},
			SetVertexPosition: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description:'Index of the vertex of the polygon. (Starts from 0)',
					},
					x: {
						type:'float',
						description:'The X position',
					},
					y: {
						type:'float',
						description:'The Y position',
					},
					z: {
						type:'float',
						description:'The Z position',
					}
				},
				description:'Sets the position of the vertex',
			},
			SetVertexTexCoord: {
				notitg: 3,
				args: {
					index: {
						type: 'int',
						description:'Index of the vertex of the polygon. (Starts from 0)',
					},
					x: {
						type:'float',
						description:'The X velocity to apply.',
						condition:'0-1',
					},
					y: {
						type:'float',
						description:'The Y velocity to apply.',
						condition:'0-1',
					},
				},
				description:'Sets the normal of the vertex.',
			},
		},
		PrefsManager: {
			description: 'To use this class, use it through the <span class="mono">PREFSMAN</span> singleton.',
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
			description: 'You can get an instance of Profile by using <a>ProfileManager.GetMachineProfile()</a> or <a>ProfileManager.GetProfile()</a>.',
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
						description: 'The ID of the song.'
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
			description: 'To use this class, use it through the <span class="mono">PROFILEMAN</span> singleton.',
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
			description: 'You can get an instance of RadarValues by using <a>Steps.GetRadarValues()</a> or <a>Trail.GetRadarValues()</a>.',
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
			description: 'To use this class, use it through the <span class="mono">DISPLAY</span> singleton.',
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
			ClearShaderFuck: {
				notitg: 3,
				description:'Undoes <a>RageDisplay.ShaderFuck()</a>.'
			},
			SetWindow: {
				notitg: 3,
				args: {
					xPos: {
						type: 'float',
						description: 'The X position, in pixels.'
					},
					yPos: {
						type: 'float',
						description: 'The Y position, in pixels.'
					},
					xZoom: {
						type: 'float',
						description: 'The x axis zoom, in pixels.'
					},
					yZoom: {
						type: 'float',
						description: 'The y axis zoom, in pixels.'
					}
				},
				description: 'Sets the Window\'s `X Position`, `Y Position`, `Zoom X` and `Zoom Y`. To change only one argument, see the functions below.',
			},
			SetWindowX: {
				notitg: 3,
				args: {
					xPos: {
						type: 'float',
						description: 'The X position, in pixels.'
					}
				},
				description: 'Sets the Window\'s X position.',
			},
			SetWindowY: {
				notitg: 3,
				args: {
					yPos: {
						type: 'float',
						description: 'The Y position, in pixels.'
					}
				},
				description: 'Sets the Window\'s Y position.',
			},
			SetWindowAddX: {
				notitg: 3,
				args: {
					x: {
						type: 'float',
						description: 'The x position to add.'
					}
				},
				description: 'Adds `x` to the window\'s current horizontal position.'
			},
			SetWindowAddY: {
				notitg: 3,
				args: {
					y: {
						type: 'float',
						description: 'The y position to add.'
					}
				},
				description: 'Adds `y` to the window\'s current vertical position.'
			},
			SetWindowZoomX: {
				notitg: 3,
				args: {
					scale: {
						type: 'float',
						description: 'The scaling of the zoom.'
					}
				},
				description: 'Zooms the window on the X axis to `scale` scale.'
			},
			SetWindowZoomY: {
				notitg: 3,
				args: {
					scale: {
						type: 'float',
						description: 'The scaling of the zoom.'
					}
				},
				description: 'Zooms the window on the Y axis to `scale` scale.'
			},
			SetWindowWidth: {
				notitg: 3,
				args: {
					width: {
						type: 'float',
						description: 'The width, in pixels.'
					}
				},
				description: 'Sets the width of the window.'
			},
			SetWindowHeight: {
				notitg: 3,
				args: {
					width: {
						type: 'float',
						description: 'The height, in pixels.'
					}
				},
				description: 'Sets the height of the window.'
			},
			ShaderFuck: {
				notitg: 3,
				args: {
					shader: {
						type: 'RageShaderProgram',
						description: 'The shader itself. See <a>ActorFrameTexture.GetShader()</a>'
					}
				},
				description: 'Applies shader to all on-screen actors.'
			},
			GetCumFPS: {
				notitg: 1,
				returnType: 'int',
				description: 'Gets the cumulative FPS.'
			},
			GetDesktopHeight: {
				returnType: 'float',
				notitg: 3,
				description: 'Gets the main monitor\'s height.',
			},
			GetDesktopWidth: {
				returnType: 'float',
				notitg: 3,
				description: 'Gets the main monitor\'s width.',
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
				notitg: 2,
				returnType: 'string',
				description: 'Gets the vendor of the Graphic Driver.'
			},
			GetVPF: {
				notitg: 1,
				returnType: 'int',
				description: 'Gets the VPF.'
			},
			GetWindowX: {
				returnType: 'float',
				notitg: 3,
				description: 'Gets the window\'s X axis relative to the center.',
			},
			GetWindowY: {
				returnType: 'float',
				notitg: 3,
				description: 'Gets the window\'s Y axis relative to the center.',
			},
			GetWindowWidth: {
				returnType: 'float',
				notitg: 3,
				description: 'Gets the window\'s width.',
			},
			GetWindowHeight: {
				returnType: 'float',
				notitg: 3,
				description: 'Gets the window\'s height.',
			},
			GetWindowZoomX: {
				returnType: 'float',
				notitg: 3,
				description: 'Gets the window\'s X zoom.',
			},
			GetWindowZoomY: {
				returnType: 'float',
				notitg: 3,
				description: 'Gets the window\'s Y zoom.',
			},
		},
		RageInput: {
			description: 'To use this class, use it through the <span class="mono">INPUTMAN</span> singleton.',
			GetDescriptions: {
				returnType: 'table',
				description: 'Creates a table of detected input devices\' descriptions.'
			},
			Reset: {
				notitg: 1,
				description: 'Reloads every input devices.'
			}
		},
		RageShaderProgram: {
			description: 'You can get an instance of RageShaderProgram of an ActorFrameTexture that has shaders with <a>ActorFrameTexture.GetShader()</a>.',
			compile: {
				notitg: 3,
				description:'Recompiles shader.'
			},
			uniform1f: {
				notitg: 3,
				args: {
					variableName: {
						type:'string',
						description: 'The name of the variable.',
					},
					value: {
						type:'float',
						description:'The value.',
					}
				},
				description: 'Pass 1 float value into the shader.',
			},
			uniform2f: {
				notitg: 3,
				args: {
					variableName: {
						type:'string',
						description: 'The name of the variable.',
					},
					value1: {
						type:'float',
						description:'The value.',
					},
					value2: {
						type:'float',
						description:'The value.',
					},
				},
				description: 'Pass 2 float values into the shader.',
			},
			uniform3f: {
				notitg: 3,
				args: {
					variableName: {
						type:'string',
						description: 'The name of the variable.',
					},
					value1: {
						type:'float',
						description:'The value.',
					},
					value2: {
						type:'float',
						description:'The value.',
					},
					value3: {
						type:'float',
						description:'The value.',
					},
				},
				description: 'Pass 3 float values into the shader.',
			},
			uniform4f: {
				notitg: 3,
				args: {
					variableName: {
						type:'string',
						description: 'The name of the variable.',
					},
					value1: {
						type:'float',
						description:'The value.',
					},
					value2: {
						type:'float',
						description:'The value.',
					},
					value3: {
						type:'float',
						description:'The value.',
					},
					value3: {
						type:'float',
						description:'The value.',
					},
				},
				description: 'Pass 4 float values into the shader.',
			},
			uniform1i: {
				notitg: 3,
				args: {
					variableName: {
						type:'string',
						description: 'The name of the variable.',
					},
					value: {
						type:'float',
						description:'The value, use 0-1 for booleans',
					}
				},
				description: 'Pass 1 int value into the shader.',
			},
			uniformTexture: {
				notitg: 3,
				args: {
					variableName: {
						type:'string',
						description: 'The name of the variable.',
					},
					texture: {
						type:'RageTexture',
						description:'The texture, use <a>Sprite.GetTexture()</a>.',
					},
				},
				description:'Pass textures into the shader.'
			}
		},
		RageSound: {
			description: 'You can get an instance of RageSound by using <a>ActorSound.get()</a>.',
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
			description: 'You can get an instance of RageTexture with <a>ActorFrameTexture.GetTexture()</a> or <a>Sprite.GetTexture()</a>.',
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
			description: 'To use this class, get it through <a>ScreenManager.GetTopScreen()</a> while in Gameplay.',
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
			description: 'To use this class, use it through the <span class="mono">SCREENMAN</span> singleton.',
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
			},
			SystemMessageNoAnimate: {
				notitg: 3.1,
				args: {
					message: {
						type: 'string',
						description: 'The message to show.'
					}
				},
				description: 'Shows a message that appears usually at the top of the screen for a few seconds, except OnCommand is followed by FinishTweening . The message is not shown in the output log.'
			}
		},
		Song: {
			description: 'You can get an instance of Song with GameState or SongManager.',
			AddLabel: {
				notitg: 3,
				args: {
					beat: {
						type: 'float',
						description: 'The beat of the label'
					},
					name: {
						type: 'string',
						description: 'The name of the label'
					}
				},
				description: 'Adds a label on the song.'
			},
			ClearLabels: {
				notitg: 3,
				description: 'Clears all labels on the song.'
			},
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
			GetBeatFromElapsedTime: {
				notitg: 3,
				returnType: 'float',
				description: 'Gets the exact beat measure for time `time`.',
				args: {
					time: {
						type: 'float',
						description: 'The time you want to calculate the beat from.'
					}
				}
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
			GetElapsedTimeFromBeat: {
				notitg: 3,
				returnType: 'float',
				description: 'Gets the exact time measure for beat `beat`.',
				args: {
					beat: {
						type: 'float',
						description: 'The beat you want to calculate the time from.'
					}
				}
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
				description: 'Gets the length of the music, in seconds.'
			},
			SetNumSpellCards: {
				notitg: 3,
				description: 'Sets the song\'s number of spellcards.',
				args: {
					num: {
						type: 'int',
						description: 'The number of spellcards.',
						condition: '1-'
					}
				}
			},
			SetSpellCardColor: {
				notitg: 3,
				description: 'Sets the color of the spellcard.',
				args: {
					index: {
						type: 'int',
						description: 'The index of the spellcard (starts at 0).',
						condition: '0-',
					},
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
			SetSpellCardDifficulty: {
				notitg: 3,
				description: 'Sets the difficulty of the spellcard.',
				args: {
					index: {
						type: 'int',
						description: 'The index of the spellcard (starts at 0).',
						condition: '0-',
					},
					start: {
						type: 'int',
						description: 'The difficulty of the spellcard.',
					}
				}
			},
			SetSpellCardName: {
				notitg: 3,
				description: 'Sets the name of the spellcard.',
				args: {
					index: {
						type: 'int',
						description: 'The index of the spellcard (starts at 0).',
						condition: '0-',
					},
					start: {
						type: 'string',
						description: 'The new name of the spellcard.',
					}
				}
			},
			SetSpellCardTiming: {
				notitg: 3,
				description: 'Sets the timing of the spellcard.',
				args: {
					index: {
						type: 'int',
						description: 'The index of the spellcard (starts at 0).',
						condition: '0-',
					},
					start: {
						type: 'float',
						description: 'The start beat of the spellcard.',
					},
					end: {
						type: 'float',
						description: 'The end beat of the spellcard.',
					}
				}
			}
		},
		SongManager: {
			description: 'To use this class, use it through the <span class="mono">SONGMAN</span> singleton.',
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
			description: 'You can get an instance of StageStats with the StatsManager class.',
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
			description: 'To use this class, use it through the <span class="mono">STATSMAN</span> singleton.',
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
			description: 'You can get an instance of Steps with <a>GameState.GetCurrentSteps()</a> or <a>GameState.GetEditSourceSteps()</a>.',
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
			description: 'To use this class, use it through the <span class="mono">THEME</span> singleton.',
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
			description: 'You can get an instance of Trail by using <a>GameState.GetCurrentTrail()</a>.',
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
			description: 'To use this class, use it through the <span class="mono">UNLOCKMAN</span> singleton.',
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
		CourseDifficulty: {
			Beginner: 0,
			Easy: 1,
			Regular: 2,
			Difficult: 3,
			Challenge: 4,
			Edit: 5
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
		SendJudgment: {
			notitg:3,
			description:'See <a>Player.SendJudgment()</a>',
			"Marvelous / Fantastic": 1,
			"Perfect / Excellent": 2,
			Great: 3,
			"Good / Decent": 4,
			"Boo / Way Off": 5,
			Miss: 6,
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
	},
	globalfuncs: {
		AllFailed: {
			returnType: 'bool',
			description: 'Returns `true` if every active player failed the current stage.'
		},
		ConnectToServer: {
			returnType: 'bool',
			args: {
				address: {
					type: 'string',
					description: 'The address of the server.'
				}
			},
			description: 'Connects to an online server. Returns `true` or `false` depending if the connection is succesful or not.'
		},
		CourseDifficultyToThemedString: {
			returnType: 'string',
			args: {
				courseDifficulty: {
					type: 'int',
					description: 'The difficulty. See <a>Enum_CourseDifficulty</a>.'
				}
			},
			description: 'Converts a difficulty to a human-readable string.'
		},
		CourseSongIndex: {
			returnType: 'int',
			description: 'Gets the index (beginning at 0) of the current song.'
		},
		CurStyleName: {
			returnType: 'string',
			description: 'Gets the name of the current style.'
		},
		DayOfMonth: {
			returnType: 'int',
			description: 'Returns the current day (fortunately, beginning at 1).'
		},
		DayOfYear: {
			returnType: 'int',
			description: 'Returns the current day in the year (beginning at 0).'
		},
		Debug: {
			returnType: 'bool',
			args: {
				msg: {
					type: 'string',
					description: 'The message to log'
				}
			},
			description: 'Like <a>GlobalFunc_Trace</a>, but displays even with the ShowLogOutput preference disabled. <em>(Oh, and it returns true.)</em>'
		},
		DifficultyToThemedString: {
			returnType: 'string',
			args: {
				difficulty: {
					type: 'int',
					description: 'The difficulty. See <a>Enum_Difficulty</a>.'
				}
			},
			description: 'Converts a difficulty to a human-readable string.'
		},
		FormatPercentScore: {
			returnType: 'string',
			args: {
				score: {
					type: 'float',
					description: 'The current (DP) score.'
				}
			},
			description: 'Formats a score into a human-readable percent score.'
		},
		GetBestFinalGrade: {
			returnType: 'int',
			description: 'Returns the best final grade. See <a>Enum_Grade</a>'
		},
		GetDiskSpaceFree: {
			returnType: 'string',
			description: 'Gets the amount of bytes free on the disk.'
		},
		GetDiskSpaceTotal: {
			returnType: 'string',
			description: 'Gets the capacity of the disk, in bytes.'
		},
		GetEasiestNotesDifficulty: {
			returnType: 'int',
			description: 'Gets the easiest difficulty chosen of the current song. See <a>Enum_Difficulty</a>.'
		},
		GetGradeFromPercent: {
			returnType: 'int',
			args: {
				percent: {
					type: 'float',
					description: 'The percentage score.'
				}
			},
			description: 'Returns the grade for `percent`. See <a>Enum_Grade</a>'
		},
		GetIP: {
			returnType: 'string',
			description: 'Gets the internal IP and the netmask of the machine.',
			example: 'GetIP(); -- Will return something similar to this string : "192.168.1.10, Netmask: 255.255.255.0".'
		},
		GetInputType: {
			returnType: 'string',
			description: 'Gets the current input type.'
		},
		GetNumCrashLogs: {
			returnType: 'int',
			description: 'Gets the number of crash logs.'
		},
		GetNumIOErrors: {
			returnType: 'int',
			description: 'Gets the number of disk (Input/Output) Errors.'
		},
		GetNumMachineEdits: {
			returnType: 'int',
			description: 'Gets the number of edits registered in the machine.'
		},
		GetNumMachineScores: {
			returnType: 'int',
			description: 'Gets the number of scores registered in the machine-'
		},
		GetNumPlayersEnabled: {
			returnType: 'int',
			description: 'Alias for <a>GameState.GetNumPlayersEnabled()</a>. Gets the number of enabled players. (Either 1 or 2)'
		},
		GetProductName: {
			returnType: 'string',
			description: 'Gets the name (and the version if available) of this executable.'
		},
		GetProductVer: {
			returnType: 'string',
			description: 'Gets the version of this executable.'
		},
		GetRevision: {
			returnType: 'int',
			description: 'Gets the revision of the current ITG Patch.'
		},
		GetSerialNumber: {
			returnType: 'string',
			description: 'Gets the serial number of this ITG installation.'
		},
		GetStageText: {
			returnType: 'string',
			description: 'Gets the text of the stage. (For example, "event")'
		},
		GetUptime: {
			returnType: 'string',
			description: 'Gets the current uptime, in HHMMSS.'
		},
		Grade: {
			returnType: 'int',
			args: {
				gradeName: {
					type: 'string',
					description: 'The grade\'s name.'
				}
			},
			description: 'Returns the Grade from the name. See <a>Enum_Grade</a>.'
		},
		GradeToString: {
			returnType: 'string',
			args: {
				grade: {
					type: 'int',
					description: 'The grade. See <a>Enum_Grade</a>.'
				}
			},
			description: 'Returns the grade\'s name from the grade.'
		},
		Hour: {
			returnType: 'int',
			description: 'Returns the current hour.'
		},
		HubIsConnected: {
			returnType: 'bool',
			description: 'Returns `true` if the ITG hub is connected, `false` otherwise.'
		},
		IsAnyPlayerUsingMemoryCard: {
			returnType: 'bool',
			description: 'Returns `true` if one or more memory card is currently used, `false` otherwise.'
		},
		IsExtraStage: {
			returnType: 'bool',
			description: 'Returns `true` if the current stage is the extra stage, `false` otherwise.'
		},
		IsExtraStage2: {
			returnType: 'bool', 
			description: 'Returns `true` if the current stage is the second extra stage, `false` otherwise.'
		},
		IsFinalStage: {
			returnType: 'bool',
			description: 'Returns `true` if the current stage is the final stage, `false` otherwise.'
		},
		IsNetConnected: {
			returnType: 'bool',
			description: 'Returns `true` if the game is connected to the Internet, `false` otherwise.'
		},
		IsNetSMOnline: {
			returnType: 'bool',
			description: 'Returns `true` if the game is connected to StepMania Online, `false` otherwise.'
		},
		IsSMOnlineLoggedIn: {
			returnType: 'bool',
			args: {
				player: {
					type: 'int',
					description: 'The player number. Either 0 (for P1), or 1 (for P2)',
					condition: '0-1'
				}
			},
			description: 'Returns `true` if the specified player is logged in, to StepMania Online, `false` otherwise.'
		},
		IsUsingMemoryCard: {
			returnType: 'bool',
			args: {
				player: {
					type: 'int',
					description: 'The player number. Either 0 (for P1), or 1 (for P2)',
					condition: '0-1'
				}
			},
			description: 'Returns `true` if the specified player is using a memory card, `false` otherwise.'
		},
		Minute: {
			returnType: 'int',
			description: 'Returns the current minute.'
		},
		MonthOfYear: {
			returnType: 'int',
			description: 'Returns the current month (fortunately, beginning at 1).'
		},
		MonthToString: {
			returnType: 'string',
			args: {
				month: {
					type: 'int',
					description: 'The month, beginning at 0.',
					condition: '0-1'
				}
			},
			description: 'Returns a human-readable string for the specified month.'
		},
		NumStagesLeft: {
			returnType: 'int',
			description: 'Returns the number of stages left, returns 999 if event mode is enabled.'
		},
		OnePassed: {
			returnType: 'bool',
			description: 'Returns `true` if at least one player passed the song, `false` otherwise.'
		},
		PlayModeName: {
			returnType: 'string',
			description: 'Gets the name of the current play mode.'
		},
		ReportStyle: {
			description: 'Send the current style to the SMOnline server.'
		},
		Second: {
			returnType: 'int',
			description: 'Returns the current second.'
		},
		SecondsToHHMMSS: {
			returnType: 'string',
			args: {
				seconds: {
					type: 'int',
					description: 'The amount of seconds.'
				}
			},
			description: 'Returns a human-readable string in the HHMMSS form, representing an amount of seconds.'
		},
		SecondsToMMSS: {
			returnType: 'string',
			args: {
				seconds: {
					type: 'int',
					description: 'The amount of seconds.'
				}
			},
			description: 'Returns an human-readable string in the MMSS form, representing an amount of seconds.'
		},
		SecondsToMMSSMsMs: {
			returnType: 'string',
			args: {
				seconds: {
					type: 'float',
					description: 'The amount of seconds.'
				}
			},
			description: 'Returns an human-readable string in the MMSSMsMs form, representing an amount of seconds.'
		},
		SecondsToMMSSMsMsMs: {
			returnType: 'string',
			args: {
				seconds: {
					type: 'float',
					description: 'The amount of seconds.'
				}
			},
			description: 'Returns an human-readable string in the MMSSMsMsMs form, representing an amount of seconds.'
		},
		SecondsToMSSMsMs: {
			returnType: 'string',
			args: {
				seconds: {
					type: 'float',
					description: 'The amount of seconds.'
				}
			},
			description: 'Returns an human-readable string in the MSSMsMs form, representing an amount of seconds.'
		},
		Trace: {
			returnType: 'bool',
			args: {
				msg: {
					type: 'string',
					description: 'The message to log'
				}
			},
			description: 'Logs a message to the console log, if shown. <em>(Oh, and returns true.)</em>'
		},
		Weekday: {
			returnType: 'int',
			description: 'Returns the current weekday (from 0 to 6).'
		},
		Year: {
			returnType: 'int',
			description: 'Returns the current year.'
		}
	},
	constants: {
		COIN_MODE_HOME: '0',
		COIN_MODE_PAY: '1',
		COIN_MODE_FREE: '2',
		COURSE_DIFFICULTY_BEGINNER: '0',
		COURSE_DIFFICULTY_EASY: '1',
		COURSE_DIFFICULTY_REGULAR: '2',
		COURSE_DIFFICULTY_DIFFICULT: '3',
		COURSE_DIFFICULTY_CHALLENGE: '4',
		COURSE_DIFFICULTY_EDIT: '5',
		DIFFICULTY_BEGINNER: '0',
		DIFFICULTY_EASY: '1',
		DIFFICULTY_MEDIUM: '2',
		DIFFICULTY_HARD: '3',
		DIFFICULTY_CHALLENGE: '4',
		DIFFICULTY_EDIT: '5',
		EC_BGANIMATIONS: '0',
		EC_FONTS: '1',
		EC_GRAPHICS: '2',
		EC_NUMBERS: '3',
		EC_SOUNDS: '4',
		EC_OTHER: '5',
		FUCK_EXE: 'true (only in NotITG)',
		FUCK_VERSION_1: '20161226 (only in NotITG)',
		FUCK_VERSION_2: '20170405 (only in NotITG)',
		FUCK_VERSION_3: '20170609 (only in NotITG)',
		FUCK_VERSION_3_1: '20170826 (only in NotITG)',
		GOAL_CALORIES: '0',
		GOAL_TIME: '1',
		GOAL_NONE: '2',
		GRADE_TIER01: '0',
		GRADE_TIER02: '1',
		GRADE_TIER03: '2',
		GRADE_TIER04: '3',
		GRADE_TIER05: '4',
		GRADE_TIER06: '5',
		GRADE_TIER07: '6',
		GRADE_TIER08: '7',
		GRADE_TIER09: '8',
		GRADE_TIER10: '9',
		GRADE_TIER11: '10',
		GRADE_TIER12: '11',
		GRADE_TIER13: '12',
		GRADE_TIER14: '13',
		GRADE_TIER15: '14',
		GRADE_TIER16: '15',
		GRADE_TIER17: '16',
		GRADE_TIER18: '17',
		GRADE_TIER19: '18',
		GRADE_TIER20: '19',
		GRADE_FAILED: '20',
		HNS_NONE: '0',
		HNS_NG: '1',
		HNS_OK: '2',
		NUM_COURSE_DIFFICULTIES: '6',
		NUM_DIFFICULTIES: '6',
		NUM_GRADES: '21',
		NUM_PLAYERS: '2',
		NUM_PLAY_MODES: '6',
		OPENITG: 'true',
		OPENITG_VERSION: 'The ITG version.',
		PLAY_MODE_REGULAR: '0',
		PLAY_MODE_NONSTOP: '1',
		PLAY_MODE_ONI: '2',
		PLAY_MODE_ENDLESS: '3',
		PLAY_MODE_BATTLE: '4',
		PLAY_MODE_RAVE: '5',
		PLAYER_1: '0',
		PLAYER_2: '1',
		PREMIUM_NONE: '0',
		PREMIUM_DOUBLE: '1',
		PREMIUM_JOINT: '2',
		RADAR_CATEGORY_STREAM: '0',
		RADAR_CATEGORY_VOLTAGE: '1',
		RADAR_CATEGORY_AIR: '2',
		RADAR_CATEGORY_FREEZE: '3',
		RADAR_CATEGORY_CHAOS: '4',
		RADAR_CATEGORY_TAPS: '5',
		RADAR_CATEGORY_JUMPS: '6',
		RADAR_CATEGORY_HOLDS: '7',
		RADAR_CATEGORY_MINES: '8',
		RADAR_CATEGORY_HANDS: '9',
		RADAR_CATEGORY_ROLLS: '10',
		SCREEN_BOTTOM: 'Equal to SCREEN_HEIGHT',
		SCREEN_CENTER_X: 'SCREEN_WIDTH/2',
		SCREEN_CENTER_Y: 'SCREEN_HEIGHT/2',
		SCREEN_HEIGHT: 'Usually 480, depends on the current theme.',
		SCREEN_LEFT: '0',
		SCREEN_RIGHT: 'Equal to SCREEN_WIDTH',
		SCREEN_TOP: '0',
		SCREEN_WIDTH: 'Usually 640, depends on the current theme.',
		SORT_PREFERRED: '0',
		SORT_GROUP: '1',
		SORT_TITLE: '2',
		SORT_BPM: '3',
		SORT_POPULARITY: '4',
		SORT_TOP_GRADES: '5',
		SORT_ARTIST: '6',
		SORT_GENRE: '7',
		SORT_SONG_LENGTH: '8',
		SORT_EASY_METER: '9',
		SORT_MEDIUM_METER: '10',
		SORT_HARD_METER: '11',
		SORT_CHALLENGE_METER: '12',
		SORT_MODE_MENU: '13',
		SORT_ALL_COURSES: '14',
		SORT_NONSTOP: '15',
		SORT_ONI: '16',
		SORT_ENDLESS: '17',
		SORT_ROULETTE: '18',
		STEPS_TYPE_DANCE_SINGLE: '0',
		STEPS_TYPE_DANCE_DOUBLE: '1',
		STEPS_TYPE_DANCE_COUPLE: '2',
		STEPS_TYPE_DANCE_SOLO: '3',
		STEPS_TYPE_PUMP_SINGLE: '4',
		STEPS_TYPE_PUMP_HALFDOUBLE: '5',
		STEPS_TYPE_PUMP_DOUBLE: '6',
		STEPS_TYPE_PUMP_COUPLE: '7',
		STEPS_TYPE_EZ2_SINGLE: '8',
		STEPS_TYPE_EZ2_DOUBLE: '9',
		STEPS_TYPE_EZ2_REAL: '10',
		STEPS_TYPE_PARA_SINGLE: '11',
		STEPS_TYPE_PARA_VERSUS: '12',
		STEPS_TYPE_DS3DDX_SINGLE: '13',
		STEPS_TYPE_BM_SINGLE5: '14',
		STEPS_TYPE_BM_DOUBLE5: '15',
		STEPS_TYPE_BM_SINGLE7: '16',
		STEPS_TYPE_BM_DOUBLE7: '17',
		STEPS_TYPE_MANIAX_SINGLE: '18',
		STEPS_TYPE_MANIAX_DOUBLE: '19',
		STEPS_TYPE_TECHNO_SINGLE4: '20',
		STEPS_TYPE_TECHNO_SINGLE5: '21',
		STEPS_TYPE_TECHNO_SINGLE8: '22',
		STEPS_TYPE_TECHNO_DOUBLE4: '23',
		STEPS_TYPE_TECHNO_DOUBLE5: '24',
		STEPS_TYPE_PNM_FIVE: '25',
		STEPS_TYPE_PNM_NINE: '26',
		STEPS_TYPE_LIGHTS_CABINET: '27',
		TNS_NONE: '0',
		TNS_HITMINE: '1',
		TNS_AVOIDMINE: '2',
		TNS_MISS: '3',
		TNS_BOO: '4',
		TNS_GOOD: '5',
		TNS_GREAT: '6',
		TNS_PERFECT: '7',
		TNS_MARVELOUS: '8'
	}
};

state = 2;

// Vérifier si un type de variable est un objet valide
function checkLuaObject(type) {
	return ($.inArray(type, objects) > -1) ? 'itg-object' : 'itg-' + type.toLowerCase();
}

// Vérifier si une méthode / énumération est exclusive à NotITG ou non.
function checkNotITG(name, methodName) {
	// Enum / globalfunc
	if (arguments.length == 1 || typeof methodName !== 'string') {
		if (typeof data.enums[name] === 'undefined') {
			if (typeof data.globalfuncs[name] !== 'undefined') {
				return (typeof data.globalfuncs[name].notitg !== 'undefined') ? data.globalfuncs[name].notitg : 0;
			}
			return 0;
		}
		return (typeof data.enums[name].notitg !== 'undefined') ? data.enums[name].notitg : 0;
	}

	// Classe
	if (typeof data.classes[name][methodName] === 'undefined') {
		return 0;
	}
	return (typeof data.classes[name][methodName].notitg !== 'undefined') ? data.classes[name][methodName].notitg : 0;
}

// Insérer l'icône ITG
function insertITGIcon(isNotITG = 0, j = false) {
	if (j) {
		return $('<img>').attr('src', 'img/' + (isNotITG ? 'notitg' + isNotITG : 'itg') + '.png')
						 .attr('alt', isNotITG ? 'NotITG' + (isNotITG > 1 ? ' Version ' + isNotITG : '') : 'ITG')
						 .attr('title', isNotITG ? 'NotITG' + (isNotITG > 1 ? ' Version ' + isNotITG : '') : 'ITG');
	}
	else {
		return '<img src="img/' + (isNotITG ? 'notitg' + isNotITG : 'itg') + '.png" alt="' + (isNotITG ? 'NotITG' + (isNotITG > 1 ? ' Version ' + isNotITG : '') : 'ITG') + '" title="' + (isNotITG ? 'NotITG' + (isNotITG > 1 ? ' Version ' + isNotITG : '') : 'ITG') + '" />';
	}
}

// Replacer mots-clés, liens, et variables
function replaceKeywords(str, args) {

	//console.log(str)

	var ret = str.replace('`true`', '<span class="itg-bool">true</span>').replace('`false`', '<span class="itg-bool">false</span>').replace('`nil`', '<span class="itg-bool">nil</span>');

	// Enums
	ret = ret.replace(/<a>Enum_([^<>]+)<\/a>/gi, function(match, enumName) {
		var isNotITG = checkNotITG(enumName);
		return '<a class="code enum-link" href="#Enum_'+ enumName +'">' + insertITGIcon(isNotITG) + enumName +'</a>';
	});

	// Class
	ret = ret.replace(/<a>Class_([^<>]+)<\/a>/gi, function(match, className) {
		return '<a class="code class-link" href="#Class_'+ className +'">'+ className +'</a>';
	});

	// Class' Method
	ret = ret.replace(/<a>([^<>]+)\.([^<>]+)\(\)<\/a>/gi, function(match, className, methodName) {
		var isNotITG = checkNotITG(className, methodName);
		return '<a class="code method-link" href="#Class_'+ className +'_'+ methodName +'">' + insertITGIcon(isNotITG) + className +'.'+ methodName +'()</a>';
	});

	// Global Function
	ret = ret.replace(/<a>GlobalFunc_([^<>]+)<\/a>/gi, function(match, funcName) {
		var isNotITG = checkNotITG(funcName);
		return '<a class="code method-link" href="#GlobalFunc_'+ funcName +'">' + insertITGIcon(isNotITG) + funcName +'()</a>';
	});

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

		// Ajout de la description, si présente
		if (typeof v_class.description !== 'undefined') {
			$article.append($('<p></p>').html(replaceKeywords(v_class.description)));
		}

		// Création du tableau de méthodes
		var $table = $('<table></table>');
		var $tableHeader = $('<thead><tr><th></th><th>Method</th></tr></thead>');
		$table.append($tableHeader);
		var $tableBody = $('<tbody></tbody>');

		// Itération sur les méthodes
		$.each(v_class, function(k_method, v_method) {
			// Si clé "inherits"/"description" réservée à la classe, ou si description vide, ignorer
			if (k_method == 'inherits' || k_method == 'description' || v_method.description == '') {
				return;
			}

			allMethods += k_method + " ";           // Utilisé pour la coloration syntaxique

			// Création des éléments
			var $row = $('<tr></tr>');
			var $firstElement = $('<td></td>');
			var $secondElement = $('<td></td>');
			var $icon = insertITGIcon(checkNotITG(k_class, k_method), true);
			var content = [];
			var args = '';                          // Utilisé pour le prototype de la fonction.
			var argsDescription = [];
			var validArgs = {};                     // Utilisé pour la coloration de la description avec replaceKeywords()
			var description = v_method.description; // Utilisé pour la coloration de la description.

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

	});

}

// Parser les enums
function parseEnums() {

	// Itération sur les enums
	$.each(data.enums, function(k_enum, v_enum) {

		// Création de l'article
		var isNotITG = checkNotITG(k_enum);
		var $article = $('<article></article>').attr('id', 'Enum_'+ k_enum);
		/*var $articleTitle = $('<h4></h4>').html(insertITGIcon(isNotITG) + k_enum + ' <i class="fa fa-caret-down" aria-hidden="true"></i>')
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
		var $articleTitle = $('<h4></h4>').html(insertITGIcon(isNotITG) + k_enum)
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

	});

}

// Parser les fonctions globales
function parseGlobalFuncs() {

	// Création du tableau de méthodes
	var $table = $('<table></table>');
	var $tableHeader = $('<thead><tr><th></th><th>Method</th></tr></thead>');
	$table.append($tableHeader);
	var $tableBody = $('<tbody></tbody>');

	// Itération sur les méthodes
	$.each(data.globalfuncs, function(k_method, v_method) {
		// Si description vide, ignorer
		if (v_method.description == '') {
			return;
		}

		allMethods + " ";           // Utilisé pour la coloration syntaxique

		// Création des éléments
		var $row = $('<tr></tr>');
		var $firstElement = $('<td></td>');
		var $secondElement = $('<td></td>');
		var $icon = insertITGIcon(checkNotITG(k_method), true);
		var content = [];
		var args = '';                          // Utilisé pour le prototype de la fonction.
		var argsDescription = [];
		var validArgs = {};                     // Utilisé pour la coloration de la description avec replaceKeywords()
		var description = v_method.description; // Utilisé pour la coloration de la description.

		$firstElement.append($icon);

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
		$firstElement.attr('id', 'GlobalFunc_'+ k_method);

		// Ajout des cellules dans la ligne, et dans le tableau
		$row.append($firstElement).append($secondElement);
		$tableBody.append($row);
	});

	// Ajout du contenu du tableau dans le tableau
	$table.append($tableBody);

	var $divTable = $('<div></div>').append($table);

	// Ajout du tableau et de l'article dans la section
	$('#globalfuncs').append($divTable);

}

// Parser les constantes
function parseConstants() {

	// Création du tableau de méthodes
	var $table = $('<table></table>');
	var $tableHeader = $('<thead><tr><th>Name</th><th>Value</th></tr></thead>');
	$table.append($tableHeader);
	var $tableBody = $('<tbody></tbody>');

	// Itération sur les constantes
	$.each(data.constants, function(k_name, v_value) {

		allConstants += k_name + " ";           // Utilisé pour la coloration syntaxique

		// Création des éléments
		var $row = $('<tr></tr>');

		// Ajout des cellules dans la ligne, et dans le tableau
		$row.append($('<td></td>').text(k_name)).append($('<td></td>').text(v_value));
		$tableBody.append($row);

	});

	// Ajout du contenu du tableau dans le tableau
	$table.append($tableBody);

	var $divTable = $('<div></div>').append($table);

	$('#constants').append($divTable);

}

function init() {

	state = 5;

	// Ajout des classes dans le tableau d'objects
	$.each(data.classes, function(k_class, v_class) {
		objects.push(k_class);
	});

	// Générer le contenu de #classes
	allMethods = "";
	parseClasses();

	state = 6;

	// Générer le contenu de #enums
	parseEnums();

	state = 7;

	// Générer le contenu de #globalfuncs
	parseGlobalFuncs();

	state = 8;

	// Générer le contenu de #constants
	allConstants = "";
	parseConstants();

	state = 9;

	// Générer les liens de #basics
	$('#basics').html(
		$('#basics').html().replace(/{{(\w+)_(\w+)}}/gi, function(match, className, methodName) {
			var isNotITG = checkNotITG(className, methodName);
			return '<a class="code method-link" href="#Class_'+ className +'_'+ methodName +'">' + insertITGIcon(isNotITG) + className +'.'+ methodName +'()</a>';
		})
	);

	state = 10;

	// Smooth Scrolling & Highlighting
	var animating = false;

	$('a[href="#"]').click(() => false);
	// Navbar
	$('nav,h4').find('a[href*="#"]:not([href="#"])').click(function() {
		if (!animating && location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			$('body').removeClass('nav-open');
			$('body').removeClass('mobile-nav-open');
			if (navigator.userAgent.includes('Firefox') && navigator.userAgent.includes('Mozilla')) {
				setTimeout(function(thiss) {
					var target = $(thiss.hash);
					target = target.length ? target : $('[name=' + thiss.hash.slice(1) +']');
					if (target.length) {
						$('#main').animate({
							scrollTop: $('#main').scrollTop() + target.offset().top - 12
						}, 900);
					}
				}, 1000, this);
			}
			else {
				setTimeout(function(thiss) {
					var target = $(thiss.hash);
					target = target.length ? target : $('[name=' + thiss.hash.slice(1) +']');
					if (target.length) {
						$('#main').animate({
							scrollTop: $('#main').scrollTop() + target.offset().top - 12
						}, 900);
					}
				}, 600, this);
			}
		}
		return false;
	});

	// General links
	$('a[href*="#Basics_"],a.smooth-link').click(function() {
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

	// Nav
	$('.nav-toggle-button, .nav-toggle').click(function() {
		if ($('body').hasClass('large')) {
			$('body').toggleClass('nav-open');
		}
		else {
			$('body').toggleClass('mobile-nav-open');
		}
	});
	$('#main').click(function() {
		if ($('body').hasClass('nav-open') && $('body').hasClass('large'))
			$('body').removeClass('nav-open');
	});

	$(window).resize(onResize);
	onResize(true);

	state = 11;

	$(document).foundation();
	Interdimensional.charge();

	state = 12;

	// Syntax-Highlighting
	try {
		hljs.registerLanguage("lua",function(e){var t="\\[=*\\[",a="\\]=*\\]",r={b:t,e:a,c:["self"]},n=[e.C("--(?!"+t+")","$"),e.C("--"+t,a,{c:[r],r:10})];return{l:e.UIR,k:{keyword:"GAMESTATE SCREENMAN DISPLAY SOUND PREFSMAN STATSMAN MESSAGEMAN PROFILEMAN MEMCARDMAN NOTESKIN SONGMAN THEME UNLOCKMAN INPUTMAN and break do else elseif end false for if in local nil not or repeat return self then true until while " + allConstants,built_in:"_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table " + allMethods},c:n.concat([{cN:"function",bK:"function",e:"\\)",c:[e.inherit(e.TM,{b:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{cN:"params",b:"\\(",eW:!0,c:n}].concat(n)},e.CNM,e.ASM,e.QSM,{cN:"string",b:t,e:a,c:[r],r:5}])}});

		var things = {};

		$('div.example:not(.nohighlight) span.lua').each(function(i, v) {
			hljs.highlightBlock(v);
			things[i] = $(v).html();
		});
		$('span.mono').each(function(i, v) {
			$(v).addClass('lua');
			hljs.highlightBlock(v);
		});
		$('div.example:not(.nohighlight)').each(function(i, v) {
			hljs.highlightBlock(v);
		});
		$('div.example:not(.nohighlight) span.lua').each(function(i, v) {
			$(v).html(things[i]);
		});
	}
	catch (e) {
		window.alert("Error ! Please report it to me : [" + e.name + "] : " + e.message + ". The page won't have the syntax coloration.");
		console.log("Error ! Please report it to me : [" + e.name + "] : " + e.message);
	}
	finally {
		// C'est parti !
		$('#page').addClass('done');

		clearTimeout(timeout);
	}

	state = 13;

};

state = 3;

timeout = setTimeout(function() {
	if (state < 12)
		window.alert("Error ! Please report it to me : [TimeoutError] : State " + state + ". The page could miss some features, like syntax coloration.");
	console.log("Error ! Please report it to me : [TimeoutError] : State " + state);
	$('#page').addClass('done');
}, 10000);

$(function() {
	state = 4;
	wW = 0;
	wH = 0;
	init();
});

function onResize(first) {
	wW = $(window).width();
	wH = $(window).height();

	if (wW >= 1024) {
		$('body').removeClass('mobile-nav-open').removeClass('small').addClass('large');
	}
	else {
		$('body').removeClass('nav-open').removeClass('large').addClass('small');
	}
}
