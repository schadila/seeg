<template>

    <div class="uk-grid pk-grid-large" data-uk-grid-margin>
        <div class="uk-flex-item-1 uk-form-horizontal">



            <div class="uk-form-row">
                <label for="form-dbname" class="uk-form-label">{{ 'Datenbankname' | trans }}</label>
                <div class="uk-form-controls">
                    <input id="form-dbname" class="uk-form-width-large" type="text" v-model="widget.data.db" v-validate="required">
                </div><br>
                <label for="form-dbtable" class="uk-form-label">{{ 'DB Tabelle' | trans }}</label>
                <div class="uk-form-controls">
                    <input id="form-dbtable" class="uk-form-width-large" type="text" v-model="widget.data.db_table" v-validate="required">
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
            label: 'Datenbank Einstellungen',
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

    window.Widgets.components['theme-one-events:databasesettings'] = module.exports;

</script>
