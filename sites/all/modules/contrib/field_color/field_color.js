/**
 * @file
 * Javascript for Field Color.
 */

/**
 * Provide a farbtastic colorpicker for the fancier widget.
 */
(function ($) {
  Drupal.behaviors.field_color_colorpicker = {
    attach: function(context) {
      $(".edit-field-color-colorpicker").live("focus", function(event) {
        var edit_field = this;
        var picker = $(this).closest('div').parent().find(".field-color-colorpicker");
        
        // Hide all color pickers except this one.
        $(".field-color-colorpicker").hide();
        $(picker).show();
        $.farbtastic(picker, function(color) {
          edit_field.value = color;
        }).setColor(edit_field.value);
      });
    }
  }
})(jQuery);
