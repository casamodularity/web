jQuery(document).ready(function() {

	jQuery('#tj_portfolio_image_button1').click(function() {
		
		window.send_to_editor = function(html) 
		
		{
			imgurl = jQuery('img',html).attr('src');
			jQuery('#tj_portfolio_image1').val(imgurl);
			tb_remove();
		}
	 
	 
		tb_show('', 'media-upload.php?post_id=0&amp;type=image&amp;TB_iframe=true');
		return false;
		
	});
	
	jQuery('#tj_portfolio_image_button2').click(function() {
		
		window.send_to_editor = function(html) 
		
		{
			imgurl = jQuery('img',html).attr('src');
			jQuery('#tj_portfolio_image2').val(imgurl);
			tb_remove();
		}
	 
	 
		tb_show('', 'media-upload.php?post_id=0&amp;type=image&amp;TB_iframe=true');
		return false;
		
	});
	
	jQuery('#tj_portfolio_image_button3').click(function() {
		
		window.send_to_editor = function(html) 
		
		{
			imgurl = jQuery('img',html).attr('src');
			jQuery('#tj_portfolio_image3').val(imgurl);
			tb_remove();
		}
	 
	 
		tb_show('', 'media-upload.php?post_id=0&amp;type=image&amp;TB_iframe=true');
		return false;
		
	});
	
	jQuery('#tj_portfolio_image_button4').click(function() {
		
		window.send_to_editor = function(html) 
		
		{
			imgurl = jQuery('img',html).attr('src');
			jQuery('#tj_portfolio_image4').val(imgurl);
			tb_remove();
		}
	 
	 
		tb_show('', 'media-upload.php?post_id=0&amp;type=image&amp;TB_iframe=true');
		return false;
		
	});
	
	jQuery('#tj_portfolio_image_button5').click(function() {
		
		window.send_to_editor = function(html) 
		
		{
			imgurl = jQuery('img',html).attr('src');
			jQuery('#tj_portfolio_image5').val(imgurl);
			tb_remove();
		}
	 
	 
		tb_show('', 'media-upload.php?post_id=0&amp;type=image&amp;TB_iframe=true');
		return false;
		
	});

// Slide Image Upload Button
	jQuery('#tj_slide_image_button').click(function() {

		window.send_to_editor = function(html)

		{
			imgurl = jQuery('img',html).attr('src');
			jQuery('#tj_slide_image').val(imgurl);
			tb_remove();
		}


		tb_show('', 'media-upload.php?post_id=0&amp;type=image&amp;TB_iframe=true');
		return false;

	});

});
