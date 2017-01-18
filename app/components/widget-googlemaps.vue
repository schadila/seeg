<template>

    <div class="uk-grid pk-grid-large" data-uk-grid-margin>
        <div class="uk-flex-item-1 uk-form-horizontal">

            <div class="uk-form-row">
                <label for="form-googlemaps" class="uk-form-label">{{ 'Google Maps ID' | trans }}</label>
                <div class="uk-form-controls">
                    <p class="uk-form-controls-condensed uk-form-width-large"><input type="text" v-model="widget.data.class" source="{{@ widget.data.class }}"></input></p>
                    <br>
                </div>
                <label for="form-googlemaps" class="uk-form-label">{{ 'Latitude' | trans }}</label>
                <div class="uk-form-controls">
                    <p class="uk-form-controls-condensed uk-form-width-large"><input type="text" v-model="widget.data.latitude" source="{{@ widget.data.latitude }}"></input></p>
                    <br>
                </div>
                <label for="form-googlemaps" class="uk-form-label">{{ 'Longitude' | trans }}</label>
                <div class="uk-form-controls">
                    <p class="uk-form-controls-condensed uk-form-width-large"><input type="text" v-model="widget.data.longitude" source="{{@ widget.data.longitude }}"></input></p>
                    <br>
                </div>
                <label for="form-googlemaps" class="uk-form-label">{{ 'Zoom Level (max 21)' | trans }}</label>
                <div class="uk-form-controls">
                    <p class="uk-form-controls-condensed uk-form-width-large"><input type="text" v-model="widget.data.zoomlevel" source="{{@ widget.data.zoomlevel }}"></input></p>
                    <br>
                </div>
                <label for="form-googlemaps" class="uk-form-label">{{ 'Map Style' | trans }}</label>
                <div class="uk-form-controls">
                    <select id="form-widget-map-style" class="uk-form-width-large" v-model="widget.data.mapstyle">
                        <option value="ROADMAP">{{ 'Road Map' | trans }}</option>
                        <option value="SATELLITE">{{ 'Satellite' | trans }}</option>
                        <option value="HYBRID">{{ 'Hybrid' | trans }}</option>
                        <option value="TERRAIN">{{ 'Terrain' | trans }}</option>
                    </select>
                    <br><br>
                </div>
            </div>

            <div class="uk-form-row">
                <label for="form-slide" class="uk-form-label">{{ 'Fix height' | trans }} {{ '(in pixel)' }}</label>
                <div class="uk-form-controls">
                    <p class="uk-form-controls-condensed uk-form-width-large"><input type="text" v-model="widget.data.fixheight" source="{{@ widget.data.fixheight }}"></input></p>
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
            label: 'Google Maps',
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

    window.Widgets.components['theme-one-fitinslide:googlemaps'] = module.exports;

</script>
