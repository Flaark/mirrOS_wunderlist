<select id="wunderlist_lists">
	<option value="" disabled><?php echo _('wunderlist_select_list');?></option>
</select>

<select id="wunderlist_include_completed">
	<option value="" disabled><?php echo _('wunderlist_include_completed');?></option>
	<option value="false" <?php if ($wunderlist_include_completed == "false"){ echo "selected"; } ?>><?php echo _('wunderlist_include_completed_no');?></option>
	<option value="true"  <?php if ($wunderlist_include_completed == "true") { echo "selected"; } ?>><?php echo _('wunderlist_include_completed_yes');?></option>
</select>

<select id="wunderlist_sort">
	<option value="" disabled><?php echo _('wunderlist_sort');?></option>
	<option value="alphabetical"         <?php if ($wunderlist_sort == "alphabetical")        { echo "selected"; } ?>><?php echo _('wunderlist_sort_alphabetical');?></option>
	<option value="alphabetical_reverse" <?php if ($wunderlist_sort == "alphabetical_reverse"){ echo "selected"; } ?>><?php echo _('wunderlist_sort_alphabetical_reverse');?></option>
	<option value="newest"               <?php if ($wunderlist_sort == "newest")              { echo "selected"; } ?>><?php echo _('wunderlist_sort_newest');?></option>
	<option value="oldest"               <?php if ($wunderlist_sort == "oldest")              { echo "selected"; } ?>><?php echo _('wunderlist_sort_oldest');?></option>
	<option value="starred"              <?php if ($wunderlist_sort == "starred")             { echo "selected"; } ?>><?php echo _('wunderlist_sort_starred');?></option>
</select>

<input id="wunderlist_max_tasks" type="number" step="1" min="1" max="8" placeholder="<?php echo _('wunderlist_max_tasks');?>" value="<?php echo $wunderlist_max_tasks; ?>"/>

<input id="wunderlist_max_tasks_completed" type="number" step="1" min="1" max="8" placeholder="<?php echo _('wunderlist_max_tasks_completed');?>" value="<?php echo $wunderlist_max_tasks_completed; ?>"/>

<select id="wunderlist_include_other_tasks">
	<option value="" disabled><?php echo _('wunderlist_include_other_tasks');?></option>
	<option value="false" <?php if ($wunderlist_include_other_tasks == "false"){ echo "selected"; } ?>><?php echo _('wunderlist_include_other_tasks_no');?></option>
	<option value="true"  <?php if ($wunderlist_include_other_tasks == "true") { echo "selected"; } ?>><?php echo _('wunderlist_include_other_tasks_yes');?></option>
</select>

<h6><?php echo _('wunderlist_icons');?></h6>
<input type="radio" name="wunderlist_icons" value="old" id="wunderlist_icons_new" <?php if ($wunderlist_icons == "old"){ echo "checked"; } ?>>
<label for="wunderlist_icons_new"><?php echo _('wunderlist_icons_old');?> <i class="fa fa-square-o" style="margin-left: 10px"></i> <i class="fa fa-check-square-o"></i></label><br>

<input type="radio" name="wunderlist_icons" value="new" id="wunderlist_icons_old" <?php if ($wunderlist_icons == "new"){ echo "checked"; } ?>>
<label for="wunderlist_icons_old"><?php echo _('wunderlist_icons_new');?> <i class="fa fa-circle"></i> <i class="fa fa-check"></i></label><br><br />

<a href="/modules/wunderlist/assets/reset.php"><?php echo _('wunderlist_reset_config');?></a><br /><br />

<script>
	<?php include "_step2.js"; ?>
</script>
