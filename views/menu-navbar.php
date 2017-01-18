<?php if ($root->getDepth() === 0) : ?>
<div class="nav-overlay"></div>
<ul class="uk-navbar-nav">
<?php endif ?>

    <?php foreach ($root->getChildren() as $node) : ?>
    <li class="<?= $node->hasChildren() ? 'uk-parent' : '' ?><?= $node->get('active') ? ' uk-active' : '' ?>" <?= ($root->getDepth() === 0 && $node->hasChildren()) ? 'data-uk-dropdown':'' ?>>
        <a href="<?= $node->getUrl() ?>"><?= $node->title ?></a>

        <?php if ($node->hasChildren()) : ?>

            <?php if ($root->getDepth() === 0) : ?>
            <div class="uk-dropdown uk-dropdown-navbar">

            <?php endif ?>

                <?php if ($root->getDepth() === 0) : ?>
                <!--<div class="uk-container uk-container-center">-->
                  <!--<div style="float:right;width:35px;height:35px;cursor:pointer;margin-top:5px" class="close-dropdown"><img src="http://www.ifn-modern.com/skin/frontend/fortis/default/images/closeButton.png"></div>-->
                <ul class="uk-nav uk-nav-navbar">
                <?php elseif ($root->getDepth() === 1) : ?>
                <ul class="uk-nav-sub">
                <?php else : ?>
                <ul>
                <?php endif ?>
                    <?= $view->render('menu-navbar.php', ['root' => $node]) ?>
                </ul>
              <!--</div>-->

            <?php if ($root->getDepth() === 0) : ?>
            </div>
            <?php endif ?>
        </li>
        <?php endif ?>


    <?php endforeach ?>

<?php if ($root->getDepth() === 0) : ?>
</ul>
<?php endif ?>
