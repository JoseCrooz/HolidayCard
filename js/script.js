
$(document).ready(function(){
	var smallSpinCounter = 0;
	var outlineCounter = 0;
	var solidCounter = 0;
	var brazilSantaCounter = 0;
	var santaSpin = 0;
	var bodhiCounter = 0;
	var poleIsActive = false;
	var santaIsActive = false;
	var dradelIsActive = false;
	var swimmerIsActive = false;
	var cloudIsActive = false;
	var skullIsActive = false;
	var diwaliIsActive = false;
	var kwanzaaIsActive = false;
	var bodhiIsActive = false;
	var engUsaIsActive = false;
	var israelIsActive = false;
	var indonesiaIsActive = false;
	var scandanaviaIsActive = false;
	var germanyIsActive = false;
	
	// Cache the Window object
	$window = $(window);

	// Cache the Y offset and the speed of each sprite
	$('[data-type]').each(function() {	
		$(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
		$(this).data('Xposition', $(this).attr('data-Xposition'));
		$(this).data('speed', $(this).attr('data-speed'));
	});
	
	$('section[data-type="constructor"]').each(function(){
		var scrollPosition = $window.scrollTop();
		var $self = $(this),offsetCoords = $self.offset(),topOffset = offsetCoords.top;
		$(window).scroll(function() {
			$('[data-type="spain_large_solid"]', $self).each(function() {
				solidCounter+=3;
				var $flake = $(this);					
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY')) + 'px';
					
				move('#spain_large_solid').ease('in-out').set('margin-top',coords).end(); 
			}); 
				
			$('[data-type="spain_large_outline"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#spain_large_outline').ease('in-out').set('margin-top',coords).end(); 
			}); 
				
			$('[data-type="spain_small_outline1"]', $self).each(function() {
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY'));
				smallSpinCounter += 10;
					
				move('#spain_small_outline1').ease('in-out').set('margin-top',coords).end();
                                move('#spain_small_outline2').ease('in-out').set('margin-top',coords).rotate(smallSpinCounter).end();
			}); 
                                	
			$('[data-type="spain_small_solid"]', $self).each(function() {
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY'));
                                        
                                move('#spain_small_solid').ease('in-out').set('margin-top',coords).end();
			});
			$('[data-type="brazil_outline_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#brazil_outline_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="brazil_solid_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#brazil_solid_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="brazil_outline_back1"]', $self).each(function() {
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY'));
				
				move('#brazil_outline_back1').ease('in-out').set('margin-top',coords).end();
			});
			$('[data-type="brazil_solid_back"]', $self).each(function() {
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY'));
				//smallSpinCounter += 10;
					
				move('#brazil_solid_back').ease('in-out').set('margin-top',coords).rotate(smallSpinCounter).end();
			});
			$('[data-type="greenland_outline_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#greenland_outline_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="greenland_solid_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#greenland_solid_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="greenland_solid_back"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#greenland_solid_back').ease('in-out').set('margin-top',coords).rotate(smallSpinCounter).end(); 
			});
			$('[data-type="hanukkah_solid_back"]', $self).each(function() {
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#hanukkah_solid_back').ease('in-out').set('margin-top',coords).rotate(smallSpinCounter).end();
			});
			$('[data-type="hanukkah_solid_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#hanukkah_solid_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="hanukkah_outline_back1"]', $self).each(function() {
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#hanukkah_outline_back1').ease('in-out').set('margin-top',coords).end();
			});
			$('[data-type="uk_solid_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#uk_solid_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="uk_outline_back1"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#uk_outline_back1').ease('in-out').set('margin-top',coords).rotate(smallSpinCounter).end(); 
			});
			$('[data-type="uk_solid_back"]', $self).each(function() {
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#uk_solid_back').ease('in-out').set('margin-top',coords).end();
			});
			$('[data-type="ramadan_outline_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#ramadan_outline_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="ramadan_solid_back"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#ramadan_solid_back').ease('in-out').set('margin-top',coords).rotate(smallSpinCounter).end(); 
			});
			$('[data-type="ramadan_solid_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#ramadan_solid_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="wales_outline_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#wales_outline_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="wales_outline_back"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#wales_outline_back').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="wales_solid_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#wales_solid_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="diwali_solid_front"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#diwali_solid_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="diwali_solid_back"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
			
				move('#diwali_solid_back').ease('in-out').set('margin-top',coords).rotate(smallSpinCounter).end(); 
			});
			$('[data-type="diwali_outline_front"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#diwali_outline_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="kwanzaa_outline_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#kwanzaa_outline_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="kwanzaa_solid_back"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#kwanzaa_solid_back').ease('in-out').set('margin-top',coords).rotate(smallSpinCounter).end(); 
			});
			$('[data-type="kwanzaa_solid_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#kwanzaa_solid_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="bodhi_solid_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#bodhi_solid_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="bodhi_outline_back1"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#bodhi_outline_back1').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="bodhi_solid_back"]', $self).each(function() {
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#bodhi_solid_back').ease('in-out').set('margin-top',coords).rotate(smallSpinCounter).end();
			});
			$('[data-type="england_usa_outline_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#england_usa_outline_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="england_usa_outline_back"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#england_usa_outline_back').ease('in-out').set('margin-top',coords).rotate(smallSpinCounter).end(); 
			});
			$('[data-type="england_usa_solid_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#england_usa_solid_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="israel_outline_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#israel_outline_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="israel_solid_back"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#israel_solid_back').ease('in-out').set('margin-top',coords).rotate(smallSpinCounter).end(); 
			});
			$('[data-type="israel_solid_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#israel_solid_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="israel_solid_front2"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#israel_solid_front2').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="indonesia_large_solid"]', $self).each(function() {
				solidCounter+=3;
				var $flake = $(this);					
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY')) + 'px';
					
				move('#indonesia_large_solid').ease('in-out').set('margin-top',coords).end(); 
			}); 
				
			$('[data-type="indonesia_large_outline"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#indonesia_large_outline').ease('in-out').set('margin-top',coords).end(); 
			}); 
				
			$('[data-type="indonesia_small_outline1"]', $self).each(function() {
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#indonesia_small_outline1').ease('in-out').set('margin-top',coords).end();
			}); 
                                	
			$('[data-type="indonesia_small_solid"]', $self).each(function() {
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY'));
                                        
                                move('#indonesia_small_solid').ease('in-out').set('margin-top',coords).rotate(smallSpinCounter).end();
			});
			$('[data-type="scandanavia_outline_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#scandanavia_outline_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="scandanavia_outline_back"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#scandanavia_outline_back').ease('in-out').set('margin-top',coords).rotate(smallSpinCounter).end(); 
			});
			$('[data-type="scandanavia_solid_flake"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#scandanavia_solid_front').ease('in-out').set('margin-top',coords).end(); 
			});
			$('[data-type="germany_large_solid"]', $self).each(function() {
				solidCounter+=3;
				var $flake = $(this);					
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY')) + 'px';
					
				move('#germany_large_solid').ease('in-out').set('margin-top',coords).end(); 
			}); 
				
			$('[data-type="germany_large_outline"]', $self).each(function() {
				outlineCounter+=1;
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));					
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#germany_large_outline').ease('in-out').set('margin-top',coords).end(); 
			}); 
				
			$('[data-type="germany_small_outline1"]', $self).each(function() {
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY'));
					
				move('#germany_small_outline1').ease('in-out').set('margin-top',coords).end();
			}); 
                                	
			$('[data-type="germany_small_solid"]', $self).each(function() {
				var $flake = $(this);
				var yPos = ($window.scrollTop() / $flake.data('speed'));				
				var coords = (yPos + $flake.data('offsetY'));
                                        
                                move('#germany_small_solid').ease('in-out').set('margin-top',coords).rotate(smallSpinCounter).end();
			});
		});
	});
	
	// For each element that has a data-type attribute
	$('section[data-type="background"]').each(function(){
	
		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			topOffset = offsetCoords.top;
		
		// When the window is scrolled...
	    $(window).scroll(function() {
			// If this section is in view
			if ( ($window.scrollTop() + $window.height()) > (topOffset) && ((topOffset + $self.height()) > $window.scrollTop()) ) {
	
				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!								
				var yPos = -($window.scrollTop() / $self.data('speed'));
				var scrollPosition = $window.scrollTop();
				//console.log(scrollPosition);
				
				// If this element has a Y offset then add it on
				if ($self.data('offsetY')) {
					yPos += $self.data('offsetY');
				}
				
				// Put together our final background position
				var coords = '50% '+ yPos + 'px';

				// Move the background
				$self.css({ backgroundPosition: coords });
				
				// Check for other sprites in this section	
				$('[data-type="sprite"]', $self).each(function() {
					// Cache the sprite
					var $sprite = $(this);
					
					// Use the same calculation to work out how far to scroll the sprite
					var yPos = -($window.scrollTop() / $sprite.data('speed'));					
					var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';
					
					$sprite.css({ backgroundPosition: coords });													
					
				}); // sprites				
				
				// SPAIN ==============================================
				$('[data-type="spain_pole"]', $self).each(function() {
					
					if(scrollPosition >= 200 && scrollPosition < 700 && !poleIsActive){
						move('#spain_pole').duration('.5s').set('margin-top',40).set('opacity',1).end();
						poleIsActive = true;
					}
					if(scrollPosition >= 900 || scrollPosition < 20 && poleIsActive){
						move('#spain_pole').duration('.5s').set('margin-top',-40).set('opacity',0).end();
						poleIsActive = false;
					}
				});
				
				// BRAZIL =============================================
				$('[data-type="brazil_santa"]', $self).each(function() {
					var $obj = $(this);
					var yPos = -($window.scrollTop() / $obj.data('speed'));				
					var coords = (yPos + $obj.data('offsetY'));
					
					if(scrollPosition >= 1300 && scrollPosition < 1400){
						santaSpin+=360;
						move('#brazil_santa').duration('.8s').ease('in-out').rotate(santaSpin).end();					
					}
				});
				
				// GREENLAND ==========================================
				$('[data-type="greenland_santa"]', $self).each(function() {
					if(scrollPosition >= 2000 && scrollPosition < 2600 && !santaIsActive){
						move('#greenland_santa').duration('1.5s').ease('in-out').set('margin-left',200).set('opacity',1).end();
						move('#greenland_sun').duration('1.0s').ease('in-out').set('opacity',1).end();
						santaIsActive = true;
					}
					if(scrollPosition > 2600 || scrollPosition < 1760 && santaIsActive){
						move('#greenland_santa').duration('1.5s').ease('in-out').set('margin-left',-200).set('opacity',0).end();
						move('#greenland_sun').duration('1.0s').ease('in-out').set('opacity',0).end();
						santaIsActive = false;
					}
				});
				
				// HANUKKAH ===========================================
				$('[data-type="hanukkah_dradel"]', $self).each(function() {
					//var scrollPos = $window.scrollTop();
					
					if(scrollPosition >= 2800 && scrollPosition < 3200 && !dradelIsActive){
						move('#hanukkah_dradel').duration('.8s').ease('in-out').set('margin-left',-140).set('opacity',1).end();
						dradelIsActive = true;
					}
					if(scrollPosition > 3300 || scrollPosition < 2430 && dradelIsActive){
						move('#hanukkah_dradel').duration('.8s').ease('in-out').set('margin-left',0).set('opacity',0).end();
						dradelIsActive = false;
					}
				});
				
				// UK =================================================
				$('[data-type="uk_swimmer"]', $self).each(function() {
					//var scrollPos = $window.scrollTop();
					
					if(scrollPosition >= 3500 && scrollPosition < 3900 && !swimmerIsActive){
						move('#uk_swimmer').duration('2s').ease('in-out').set('margin-left',-240).set('margin-top',50).set('opacity',1).end();
						swimmerIsActive = true;
					}
					if(scrollPosition > 3900 || scrollPosition < 3200 && swimmerIsActive){
						move('#uk_swimmer').duration('2s').ease('in-out').set('margin-left',0).set('margin-top',0).set('opacity',0).end();
						swimmerIsActive = false;
					}
				});
				
				
				// RAMADAN ============================================
				$('[data-type="ramadan_blue"]', $self).each(function() {
					//var scrollPos = $window.scrollTop();
					
					if(scrollPosition >= 4300 && scrollPosition < 4890 && !cloudIsActive){
						move('#ramadan_blue').duration('1.5s').ease('in-out').set('margin-left',200).set('opacity',1).end();
						move('#ramadan_white').duration('1.5s').ease('in-out').set('margin-left',-200).set('opacity',1).end();
						move('#ramadan_stars').duration('1s').ease('in-out').set('opacity',1).end();
						cloudIsActive = true;
					}
					if(scrollPosition > 4890 || scrollPosition < 4050 && cloudIsActive){
						move('#ramadan_blue').duration('1.5s').ease('in-out').set('margin-left',0).set('opacity',0).end();
						move('#ramadan_white').duration('1.5s').ease('in-out').set('margin-left',0).set('opacity',0).end();
						move('#ramadan_stars').duration('1s').ease('in-out').set('opacity',0).end();
						cloudIsActive = false;
					}
				});
				
				// WALES ==============================================
				$('[data-type="wales_skull"]', $self).each(function() {
					if(scrollPosition >= 5280 && scrollPosition < 5680 && !skullIsActive){
						move('#wales_skull').duration('.8s').ease('in-out').set('margin-top',115).set('opacity',1).end();
						skullIsActive = true;
					}
					if(scrollPosition > 5880 || scrollPosition < 4950 && skullIsActive){
						move('#wales_skull').duration('.8s').ease('in-out').set('margin-top',80).set('opacity',0).end();
						skullIsActive = false;
					}
				});
				
				// DIWALI =============================================
				$('[data-type="diwali_candle_top"]', $self).each(function() {
					if(scrollPosition >= 6100 && scrollPosition < 6290 && !diwaliIsActive){
						move('#diwali_candle_top').duration('.8s').ease('in-out').set('opacity',1).end();
						move('#diwali_candle_l1').duration('.8s').delay('.8s').ease('in-out').set('opacity',1).end();
						move('#diwali_candle_r1').duration('.8s').delay('1.1s').ease('in-out').set('opacity',1).end();
						move('#diwali_candle_l2').duration('.8s').delay('2s').ease('in-out').set('opacity',1).end();
						move('#diwali_candle_r2').duration('.8s').delay('1.8s').ease('in-out').set('opacity',1).end();
						diwaliIsActive = true;
					}
					if(scrollPosition > 6700 || scrollPosition < 5760 && diwaliIsActive){
						move('#diwali_candle_top').duration('.5s').ease('in-out').set('opacity',0).end();
						move('#diwali_candle_l1').duration('.5s').ease('in-out').set('opacity',0).end();
						move('#diwali_candle_r1').duration('.5s').ease('in-out').set('opacity',0).end();
						move('#diwali_candle_l2').duration('.5s').ease('in-out').set('opacity',0).end();
						move('#diwali_candle_r2').duration('.5s').ease('in-out').set('opacity',0).end();
						diwaliIsActive = false;
					}
				});
				
				// KWANZAA ==============================================
				$('[data-type="kwanzaa"]', $self).each(function() {
					if(scrollPosition >= 6780 && scrollPosition < 7200 && !kwanzaaIsActive){
						move('#kwanzaa_candles').duration('.8s').ease('in-out').set('opacity',1).end();
						move('#kwanzaa_fruit').duration('.8s').ease('in-out').set('opacity',1).end();
						kwanzaaIsActive = true;
					}
					if(scrollPosition > 7450 || scrollPosition < 6300 && kwanzaaIsActive){
						move('#kwanzaa_candles').duration('.8s').ease('in-out').set('opacity',0).end();
						move('#kwanzaa_fruit').duration('.8s').ease('in-out').set('opacity',0).end();
						kwanzaaIsActive = false;
					}
				});
				
				// BODHI ===============================================
				$('[data-type="bodhi_halo"]', $self).each(function() {
					if(scrollPosition >= 7600 && scrollPosition < 8100 && !bodhiIsActive){
						move('#bodhi_halo').delay('0s').set('opacity',1).end();
						move('#bodhi_halo').duration('2s').delay('.5').rotate(360).end();
						move('#bodhi_sitting').delay('0s').duration('.8s').ease('in-out').set('opacity',1).end();
						bodhiIsActive = true;
					}
					if(scrollPosition > 8200 || scrollPosition < 7250 && bodhiIsActive){
						move('#bodhi_halo').delay('0s').duration('.8s').rotate(0).ease('in-out').set('opacity',0).end();
						move('#bodhi_sitting').duration('.8s').ease('in-out').set('opacity',0).end();
						bodhiIsActive = false;
					}
				});
				
				// ENGLAND - USA ========================================
				$('[data-type="england_usa"]', $self).each(function() {
					if(scrollPosition >= 8300 && scrollPosition < 8800 && !engUsaIsActive){
						move('#england_usa_milk').duration('.8s').delay('1s').ease('in-out').set('opacity',1).end();
						move('#england_usa_sherry').duration('.8s').ease('in-out').set('opacity',1).end();
						engUsaIsActive = true;
					}
					if(scrollPosition > 9000 || scrollPosition < 8100 && engUsaIsActive){
						move('#england_usa_milk').duration('.8s').ease('in-out').set('opacity',0).end();
						move('#england_usa_sherry').duration('.8s').ease('in-out').set('opacity',0).end();
						engUsaIsActive = false;
					}
				});
				
				// Israel ===============================================
				$('[data-type="israel"]', $self).each(function() {
					if(scrollPosition >= 9000 && scrollPosition < 9790 && !israelIsActive){
						move('#israel_doughnut_top').delay('0s').set('opacity',1).end();
						move('#israel_doughnut_top').duration('2s').delay('.5s').rotate(360).end();
						move('#israel_doughnut_bottom').delay('0s').set('opacity',1).end();
						move('#israel_doughnut_bottom').duration('2s').delay('1s').rotate(-360).end();
						israelIsActive = true;
					}
					if(scrollPosition > 10000 || scrollPosition < 8860 && israelIsActive){
						move('#israel_doughnut_top').delay('0s').set('opacity',0).rotate(0).end();
						move('#israel_doughnut_bottom').delay('0s').set('opacity',0).rotate(0).end();
						israelIsActive = false;
					}
				});
				
				// Indonesia =============================================
				$('[data-type="indonesia"]', $self).each(function() {
					if(scrollPosition >= 10100 && scrollPosition < 10590 && !indonesiaIsActive){
						move('#indonesia_wave_back').duration('1s').delay('.5s').ease('in-out').set('opacity',1).set('margin-left',30).end();
						move('#indonesia_wave_front').duration('1s').delay('.5s').ease('in-out').set('opacity',1).set('margin-left',-20).end();
						move('#indonesia_bier').ease('in-out').duration('1s').delay('1s').set('opacity',1).set('margin-top',20).end();
						setTimeout(function(){
							move('#indonesia_bier').ease('in-out').set('margin-top',0).end();
						}, 1400);
						indonesiaIsActive = true;
					}
					if(scrollPosition > 10800 || scrollPosition < 9850 && indonesiaIsActive){
						move('#indonesia_wave_back').duration('2s').delay('0s').ease('in-out').set('opacity',0).set('margin-left',0).end();
						move('#indonesia_wave_front').duration('2s').delay('0s').ease('in-out').set('opacity',0).set('margin-left',0).end();
						move('#indonesia_bier').duration('2s').delay('0s').set('opacity',0).end();
						indonesiaIsActive = false;
					}
				});
				
				// SCANDANAVIA ============================================
				$('[data-type="scandanavia"]', $self).each(function() {
					if(scrollPosition >= 10820 && scrollPosition < 11400 && !scandanaviaIsActive){
						move('#scandanavia_girl').duration('1s').delay('.5s').ease('in-out').set('opacity',1).end();
						scandanaviaIsActive = true;
					}
					if(scrollPosition > 11570 || scrollPosition < 10560 && scandanaviaIsActive){
						move('#scandanavia_girl').duration('1s').delay('0s').ease('in-out').set('opacity',0).end();
						scandanaviaIsActive = false;
					}
				});
				
				// GERMANY ================================================
				$('[data-type="germany"]', $self).each(function() {
					if(scrollPosition >= 11690 && scrollPosition < 12200 && !germanyIsActive){
						var moveBack = move('#germany_pickle').rotate(0);
						move('#germany_pickle').duration('.4s').ease('out').set('opacity',1).rotate(10).end();
						germanyIsActive = true;
						setTimeout(function(){move('#germany_pickle').rotate(-5).then(moveBack).end();}, 100);
					}
					if(scrollPosition > 12350 || scrollPosition < 11300 && germanyIsActive){
						move('#germany_pickle').duration('.7s').ease('out').set('opacity',0).end();
						germanyIsActive = false;
					}
				});	
			}; // in view
	
		}); // window scroll
			
	});	// each data-type

}); // document ready
