<!DOCTYPE html>
<html class="<?= $params['html_class'] ?>" lang="<?= $intl->getLocaleTag() ?>">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?= $view->render('head') ?>
        <?php $view->style('theme', 'theme:css/theme.css') ?>
        <?php $view->script('theme', 'theme:js/theme.js', ['uikit-sticky', 'uikit-jquery', 'uikit-parallax', 'uikit-lightbox']) ?>
        <?php $view->script('Javascript', 'theme:js/javascript.js') ?>
    </head>
    <body>

<?php if ($view->position()->exists('slider')) : ?>
    <?= $view->position('slider', 'position-grid-2.php') ?>
<?php endif; ?>




        <?php if ($params['logo'] || $view->menu()->exists('main') || $view->position()->exists('navbar')) : ?>
        <div class="<?= $params['navbar_transparent'] ? 'navigation-wrapper' : '' ?> navigation-wrapper">
        <div class="<?= $params['classes.navbar'] ?> <?= $params['navbar_transparent'] ? 'tm-navbar-transparent' : '' ?> <?= $params['hero_contrast'] ? 'tm-navbar-contrast' : '' ?>" <?= $params['classes.sticky'] ?>>
            <div class="uk-container uk-container-center">

                <nav class="uk-navbar">

                    <?php if ($params['logo']) : ?>
                    <a class="uk-navbar-brand" href="<?= $view->url()->get() ?>">

                        <img class="tm-logo" src="<?= $this->escape($params['logo']) ?>" alt="">

                        <img class="tm-logo-contrast" src="<?= ($params['logo_contrast']) ? $this->escape($params['logo_contrast']) : $this->escape($params['logo']) ?>" alt="">

                    </a>
                    <?php endif ?>


                    <?php if ($view->menu()->exists('main') || $view->position()->exists('navbar')) : ?>

                    <div class="uk-navbar-flip uk-hidden-small">
                        <?= $view->menu('main', 'menu-navbar.php') ?>
                        <?= $view->position('navbar', 'position-blank.php') ?>
                    </div>
                    <?php endif ?>

                    <?php if ($view->position()->exists('offcanvas') || $view->menu()->exists('offcanvas')) : ?>
                    <div class="uk-navbar-flip uk-visible-small">
                        <a href="" class="uk-navbar-toggle" data-uk-offcanvas>
                          <span></span>
                        </a>
                    </div>
                    <?php endif ?>

                </nav>

            </div>
        </div>
      </div>
        <?php endif ?>

        <?php if ($view->position()->exists('hero')) : ?>

        <div id="tm-hero" class="tm-hero uk-block uk-block-large uk-cover-background uk-flex uk-flex-middle <?= $params['classes.hero'] ?>" <?= $params['hero_image'] ? "style=\"background-image: url('{$view->url($params['hero_image'])}');\"" : '' ?>>

            <div class="uk-container uk-container-center">

                <section class="uk-grid uk-grid-match" data-uk-grid-margin>

                    <?= $view->position('hero', 'position-grid.php') ?>
                </section>

            </div>
        </div>
        <?php endif; ?>

        <?php if ($view->position()->exists('top')) : ?>
        <div id="tm-top" class="tm-top uk-block uk-block-muted">
            <div class="uk-container uk-container-center">
                <section class="uk-grid uk-grid-match" data-uk-grid-margin>
                    <?= $view->position('top', 'position-grid.php') ?>

                </section>

            </div>
        </div>
        <?php endif; ?>

        <?php if ($view->position()->exists('fitinpictop')) : ?>

                    <?= $view->position('fitinpictop', 'position-grid-2.php') ?>

        <?php endif; ?>

        <!--<video autoplay loop id="video-background" muted>
            <source src="http://web404.login-47.hoststar.ch/pagekit2/storage/Trailer_final_v3_HD.mp4" type="video/mp4">
        </video>-->
        <div class="mobile-nav" style="display:none;"></div>

        <div id="tm-main" class="tm-main uk-block uk-block-default <?= $params['content_off'] ? 'content-off' : ''; ?>">
            <div class="uk-container uk-container-center">

                <div class="uk-grid" data-uk-grid-match data-uk-grid-margin>

                    <main class="<?= $view->position()->exists('sidebar') ? 'uk-width-medium-3-4' : 'uk-width-medium-1-1'; ?> uk-flex-order-last">
                        <?= $view->render('messages') ?>
                        <?php
                      	$list = $breadcrumbs->getBreadcrumbs();
                      	while ($breadcrumb = $list->current()) {

                      		if ($list->key() == $list->current() ) {
                      			echo sprintf('<h4 style="font-size:14px;color:#bbb;font-weight:bold;margin: 0 0 -8px 0;" class="uk-active"><strong>%s</strong></h4>', $breadcrumb->title);
                      		}
                      		$list->next();
                      	}
                      	?>
                        <?= $view->position('breadcrumb', 'position-grid.php') ?>
                        <?= $view->render('content') ?>
                        <?php if ($view->position()->exists('content')) : ?>
                            <?= $view->position('content', 'position-grid-2.php') ?>
                        <?php endif; ?>
                    </main>

                    <?php if ($view->position()->exists('sidebar')) : ?>
                    <aside class="uk-width-medium-1-4 <?= $params['sidebar_first'] ? 'uk-flex-order-first-medium' : 'uk-flex-order-first-medium'; ?>">
                        <?= $view->position('sidebar', 'position-panel.php') ?>
                    </aside>
                    <?php endif ?>

                </div>

            </div>
        </div>

        <?php if ($view->position()->exists('portraitcontainer')) : ?>
          <div class="uk-width-medium-1-1 portraitcontainer">
                    <?= $view->position('portraitcontainer', 'position-grid-portrait.php') ?>
          </div>
        <?php endif; ?>
        
        <?php if ($view->position()->exists('fitinpicbottom')) : ?>
                    <?= $view->position('fitinpicbottom', 'position-grid-2.php') ?>
        <?php endif; ?>



        <?php if ($view->position()->exists('bottom')) : ?>
        <div id="tm-bottom" class="tm-bottom uk-block uk-block-muted">
            <div class="uk-container uk-container-center">

                <section class="uk-grid uk-grid-match" data-uk-grid-margin>
                    <?= $view->position('bottom', 'position-grid.php') ?>
                </section>

            </div>
        </div>
        <?php endif; ?>

        <?php if ($view->position()->exists('footer')) : ?>
        <div id="tm-footer" class="tm-footer uk-block uk-block-secondary uk-contrast">
            <div class="uk-container uk-container-center">

                <section class="uk-grid uk-grid-match" data-uk-grid-margin>
                    <?= $view->position('footer', 'position-grid.php') ?>
                </section>

            </div>
        </div>
        <?php endif; ?>

        <?php if ($view->position()->exists('offcanvas') || $view->menu()->exists('offcanvas')) : ?>
        <div id="offcanvas" class="uk-offcanvas">
          <?php if ($params['logo'] || $view->menu()->exists('main') || $view->position()->exists('navbar')) : ?>
          <div class="<?= $params['navbar_transparent'] ? 'navigation-wrapper' : '' ?> navigation-wrapper">
          <div class="<?= $params['classes.navbar'] ?> <?= $params['navbar_transparent'] ? 'tm-navbar-transparent' : '' ?> <?= $params['hero_contrast'] ? 'tm-navbar-contrast' : '' ?>" <?= $params['classes.sticky'] ?>>
              <div class="uk-container uk-container-center">

                  <nav class="uk-navbar">

                      <?php if ($params['logo']) : ?>
                      <a class="uk-navbar-brand" href="<?= $view->url()->get() ?>">

                          <img class="tm-logo" src="<?= $this->escape($params['logo']) ?>" alt="">

                          <img class="tm-logo-contrast" src="<?= ($params['logo_contrast']) ? $this->escape($params['logo_contrast']) : $this->escape($params['logo']) ?>" alt="">

                      </a>
                      <!--<div style="float:right;width:30px;height:30px;cursor:pointer;margin:30px 15px" class="close-dropdown"><img src="http://www.ifn-modern.com/skin/frontend/fortis/default/images/closeButton.png"></div>-->
                      <?php endif ?>
                  </nav>

              </div>
          </div>
        </div>
      <?php endif ?>
            <div class="uk-offcanvas-bar uk-offcanvas-bar-flip">

                <?php if ($view->menu()->exists('offcanvas')) : ?>
                    <?= $view->menu('offcanvas', ['class' => 'uk-nav-offcanvas']) ?>
                <?php endif ?>

                <?php if ($view->position()->exists('offcanvas')) : ?>
                    <?= $view->position('offcanvas', 'position-panel.php') ?>
                <?php endif ?>

            </div>
        </div>
        <?php endif ?>

        <?= $view->render('footer') ?>

    </body>
</html>
