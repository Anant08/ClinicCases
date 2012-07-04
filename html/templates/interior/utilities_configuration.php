<div class = "config_forms">

	<div class="config_item">

		<div id="courts">

			<a href="#" class="config_item_link closed">Change Courts</a>

			<form name = "court_form" class = "config_form" data-type="court">

				<p><input name="court[]" type="text" class="val_add" title="Add a new court"><a href="#" class="change_config add" title="Add a new court"><img src="html/ico/add.png"></a></p>

				<?php foreach($courts as $c){extract($c)?>

				<p>
					<input name="court[]" type="text" value="<?php echo $court;?>" data-id="<?php echo $id; ?>">

					<a href="#" class="change_config" title="Delete <?php echo $court;?>"><img src="html/ico/cancel.png"></a>
				</p>

				<? } ?>

			</form>

		</div>

	</div>

	<div class="config_item">

		<div id="dispo">

			<a href="#" class="config_item_link closed">Change Dispositions</a>

			<form name = "dispo_form" class = "config_form" data-type="dispo">

				<p><input name="dispo[]" type="text" class="val_add" title="Add a new disposition"><a href="#" class="change_config add"><img src="html/ico/add.png" title="Add a new disposition"></a></p>

				<?php foreach($dispos as $d){extract($d)?>

				<p>
					<input name="dispo[]" type="text" value="<?php echo $dispo;?>" data-id="<?php echo $id; ?>" title="Delete <?php echo $dispo;?>">
					<a href="#" class="change_config" title="Delete <?php echo $dispo;?>"><img src="html/ico/cancel.png"></a>
				</p>

				<? } ?>

			</form>

		</div>

	</div>

	<div class="config_item">

		<div id ="clinic">

			<a href="#" class="config_item_link closed">Change Clinic Types</a>

			<form name = "clinic_form" class = "config_form config_form_multi" data-type="clinic">

				<p>
					<label>Clinic Code</label>
					<input name="clinic_code[]" class="cl_code" type="text" maxlength="4" title="Add a new clinic code (4 letters max)">

					<label>Clinic Name</label>
					<input name="clinic_name[]" type="text" class="val_add" title="Add a new clinic name"><a href="#" class="change_config add"><img src="html/ico/add.png" title="Add a new clinic name"></a>
				</p>

				<?php foreach($clinic_types as $ct){extract($ct)?>

				<p>
					<label>Clinic Code</label>
					<input name="clinic_code[]" class="cl_code" type="text" value="<?php echo $clinic_code; ?>" maxlength="4">

					<label>Clinic Name</label>
					<input name="clinic_name[]" type="text" value="<?php echo $clinic_name;?>" data-id="<?php echo $id; ?>">
					<a href="#" class="change_config" title="Delete <?php echo $clinic_name;?>"><img src="html/ico/cancel.png"></a>
				</p>

				<? } ?>

			</form>

		</div>

	</div>

	<div class="config_item">

		<div id="referral">

			<a href="#" class="config_item_link closed">Change Referrals</a>

			<form name="referral_form" class = "config_form" data-type="referral">

				<p><input name="referral[]" type="text" class="val_add" title="Add a new referral source"><a href="#" class="change_config add"><img src="html/ico/add.png" title="Add a new referral source"></a></p>

				<?php foreach($referral as $f){extract($f)?>

				<p>
					<input name="referral[]" type="text" value="<?php echo $referral;?>" data-id="<?php echo $id; ?>">
					<a href="#" class="change_config" title="Delete <?php echo $referral;?>"><img src="html/ico/cancel.png"></a>
				</p>

				<? } ?>
			</form>

		</div>

	</div>

</div>