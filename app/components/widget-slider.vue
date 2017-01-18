<template>

    <div class="uk-grid pk-grid-large" data-uk-grid-margin>
        <div class="uk-flex-item-1 uk-form-horizontal">

            <div class="uk-form-row">
                <label for="form-title" class="uk-form-label">{{ 'Title' | trans }}</label>
                <div class="uk-form-controls">
                    <input id="form-title" class="uk-form-width-large" type="text" name="title" v-model="widget.title" v-validate="required">
                    <p class="uk-form-help-block uk-text-danger" v-show="form.title.invalid">{{ 'Title cannot be blank.' | trans }}</p>
                </div>
            </div>

            <div class="uk-form-row">
                <label for="form-text" class="uk-form-label">{{ 'Text' | trans }}</label>
                <div class="uk-form-controls">
                    <v-editor value="{{@ widget.data.content }}" options="{{ {markdown : widget.data.markdown} }}"></v-editor>
                    <label><i>Zuerst den Titel, dann der Link!</i></label>
                    <p>
                        <label><input type="checkbox" v-model="widget.data.markdown"> {{ 'Enable Markdown' | trans }}</label>
                    </p>
                    <br>
                </div>
            </div>

            <div class="uk-form-row">
                <label for="form-bgimage" class="uk-form-label">{{ 'Slider Bild' | trans }}</label>
                <div class="uk-form-controls">
                    <p class="uk-form-controls-condensed uk-form-width-large"><input-image source="{{@ widget.data.bg_image }}"></input-image></p>
                    <p class="uk-form-help-block">{{ 'Select a background image.' | trans }}</p>
                    <br>
                </div>
            </div>



        </div>
        <div class="pk-width-sidebar pk-width-sidebar-large">

            <partial name="settings"></partial>

        </div>
    </div>

</template>

<script>

    module.exports = {

        section: {
            label: 'Settings',
            priority: 90
        },

        props: ['widget', 'config'],

        created: function () {
            this.$set('panelOptions', [
                {value: 'uk-panel-box', text: this.$trans('Box')},
                {value: 'uk-panel-box uk-panel-box-primary', text: this.$trans('Box Primary')},
                {value: 'uk-panel-box uk-panel-box-secondary', text: this.$trans('Box Secondary')},
                {value: 'uk-panel-header', text: this.$trans('Header')}
            ]);
        }

    };

    window.Widgets.components['theme-one-slider:settings'] = module.exports;

</script>
