<script>
    export default {
        provide: {
            theme: {
                black: '#1B2021',
                gray: '#30343F',
                primary: '#EA638C',
                secondary: '#89023E',
                lightPink: '#FFD9DA',
                white: '#FDF4F7',
            },
        },
        render(h) {
            return this.$slots.default[0];
        },
    };
</script>