<div class="uk-block uk-position-bottom uk-width-viewport uk-height-viewport" style="top: 0px;padding-top:0px;">
<div class="uk-container uk-container-center uk-position-top" style="z-index: 1;top: 100px;">
  <div style="position: relative;float:left;">
    <img src="<?= $app['content']->applyPlugins($widget->get('bg_image')) ?>" style="width:auto;height:100px;float:left;">
    <div class="" style="background-color:#fff;width:180px;height:80px;padding:10px 15px;margin-bottom:50px;float:right;">
      <div class="uk-grid">
        <div class="uk-width-medium-1-1">
          <?= $app['content']->applyPlugins($widget->get('content'), ['widget' => $widget, 'markdown' => $widget->get('markdown')]); ?>

        </div>
      </div>
    </div>
  </div>
</div>
</div>
