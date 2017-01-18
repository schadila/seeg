<?php

  $bgcolor = $app['content']->applyPlugins($widget->get('bgcolor'));

 ?>

<div id="<?= $app['content']->applyPlugins($widget->get('class')); ?>" class="tm-top uk-block uk-block-muted uk-cover-background uk-width-medium-1-1" <?= $app['content'] ? "style=\"background-image: url('{$view->url($widget->get('bg_image'))}'); min-height: {$widget->get('fixheight')}; background-color: {$bgcolor}\">" : '' ?>
  <div class="uk-container uk-container-center">
      <article class="uk-article my-margin-top portrait-bilder">
          <?= $app['content']->applyPlugins($widget->get('content'), ['widget' => $widget, 'markdown' => $widget->get('markdown')]); ?>
      </article>
    </div>

  </div>
